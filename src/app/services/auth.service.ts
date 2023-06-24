import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientHelper } from './http-client-helper';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL = 'users/user';

  constructor(
    protected http: HttpClient,
  ) { 
    this.URL = HttpClientHelper.baseURL + this.URL;
  }

  login(loginModel) {
    return this.http.post(this.URL + '/login', loginModel, {
      responseType: 'text'
    }).pipe()
  }
}
