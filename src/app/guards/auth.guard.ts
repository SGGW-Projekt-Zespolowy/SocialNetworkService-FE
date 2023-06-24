import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ContextService } from '../services/context.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private contextService: ContextService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.contextService.user.pipe(
      take(1),
      map(user => {
        const isAuth = user ? true : false;
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
