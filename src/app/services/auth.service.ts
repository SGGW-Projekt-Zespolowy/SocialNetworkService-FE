import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientHelper } from './http-client-helper';
import { CookieService } from 'ngx-cookie-service';
import jwt_decode from 'jwt-decode'
import { BehaviorSubject, map, switchMap, tap } from 'rxjs';
import { UserModel } from '../models/user.model';
import { Router } from '@angular/router';
import { ContextService } from './context.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tokenExpirationTimer: any;
  URL = 'users/user';

  constructor(
    protected http: HttpClient,
    protected cookieService: CookieService,
    private router: Router,
    private contextService: ContextService
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

  register(registerModel) {
    return this.http.post(this.URL, registerModel);
  }

  getUserData(id: string) {
    return this.http.get<UserModel>(this.URL + `/${id}`);
  }

  isEmailUnique(email: string) {
    return this.http.get(this.URL + '/email', {
      params: new HttpParams().set('email', email)
    });
  }

  handleAuthentication(token: string) {
    const decoded: any = jwt_decode(token);
    const expiresIn = decoded.exp * 1000;
    const id = decoded.sub;

    this.autoLogout(expiresIn - new Date().getTime());
    //this.autoLogout(10000);

    return this.getUserData(id).pipe(
      //tap(res => this.user.next(res))
      tap(res => this.contextService.user.next(res))
    )
  }

  setAuthCookie(token: string) {
    const decoded: any = jwt_decode(token);

    const expiresIn = decoded.exp * 1000;
    const expDate = new Date(expiresIn);

    this.cookieService.set('Authorization', 'Bearer '+ token, expDate);
  }

  logout() {
    //this.user.next(null);
    this.contextService.user.next(null)
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

