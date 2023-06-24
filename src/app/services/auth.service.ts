import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientHelper } from './http-client-helper';
import { CookieService } from 'ngx-cookie-service';
import jwt_decode from 'jwt-decode'
import { BehaviorSubject, map, switchMap, tap } from 'rxjs';
import { UserModel } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new BehaviorSubject<UserModel>(null);
  tokenExpirationTimer: any;
  URL = 'users/user';

  constructor(
    protected http: HttpClient,
    protected cookieService: CookieService,
    private router: Router
  ) { 
    this.URL = HttpClientHelper.baseURL + this.URL;
  }

  login(loginModel) {
    return this.http.post(this.URL + '/login', loginModel, {
      responseType: 'text'
    }).pipe(
      tap(token => this.setAuthCookie(token)),
      switchMap(token => this.handleAuthentication(token)),
      tap(res => this.router.navigate(['dashboard']))
    )
  }

  handleAuthentication(token: string) {
    const decoded: any = jwt_decode(token);
    const expiresIn = decoded.exp * 1000;
    const id = decoded.sub;

    this.autoLogout(expiresIn - new Date().getTime());
    //this.autoLogout(10000);

    return this.getUserData(id).pipe(
      tap(res => this.user.next(res))
    )
  }

  getUserData(id: string) {
    return this.http.get<UserModel>(this.URL + `/${id}`);
  }

  setAuthCookie(token: string) {
    const decoded: any = jwt_decode(token);

    const expiresIn = decoded.exp * 1000;
    const expDate = new Date(expiresIn);

    this.cookieService.set('Authorization', 'Bearer '+ token, expDate);
  }

  logout() {
    this.user.next(null);
    this.cookieService.delete('Authorization');

    if(this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
    this.router.navigate(['login'])
  }
  
  autoLogout(expirationDuration: number) {

    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  autoLogin() {
    let authCookie = this.cookieService.get('Authorization');

    if(!authCookie) {
      return;
    }
    const token = authCookie.split(' ');
    if(token.length < 2) {
      return 
    }

    this.handleAuthentication(token[1]).subscribe();
  }
}

