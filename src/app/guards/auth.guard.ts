import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, catchError, map, of, switchMap, take } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.autoLogin().pipe(
      take(1),
      switchMap(res => of(true)),
      catchError(error => of(false)),
      map(res => {
        const isAuth = res ? true : false;
        if(isAuth) {
          return true;
        }
        else {
          return this.router.createUrlTree(['/login']);
        }
      })
    )
  }
  
}
