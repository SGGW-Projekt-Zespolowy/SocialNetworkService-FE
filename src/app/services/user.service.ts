import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientHelper } from './http-client-helper';
import { UserDetailed } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL = 'users/user';

  constructor(
    protected http: HttpClient,
    protected cookieService: CookieService,
  ) { 
    this.URL = HttpClientHelper.baseURL + this.URL;
  }

  getUserDetailed(userId: string) {
    return this.http.get<UserDetailed>(this.URL + `/details/${userId}`);
  }
}
