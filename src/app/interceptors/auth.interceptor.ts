import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientHelper } from '../services/http-client-helper';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    public cookieService: CookieService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = this.cookieService.get('Authorization');

    if(!token) {
      return next.handle(request);
    }

    if(!request.url.toString().includes(HttpClientHelper.baseURL)) {
      return next.handle(request);
    }

    const modifiedReq = request.clone({headers: new HttpHeaders().set('Authorization', token)});
    return next.handle(modifiedReq)
  }
}
