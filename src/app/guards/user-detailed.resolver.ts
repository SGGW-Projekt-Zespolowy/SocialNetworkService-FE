import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { ContextService } from "../services/context.service";
import { Injectable } from "@angular/core";
import { UserService } from "../services/user.service";
import { Observable, map, switchMap, take, tap } from "rxjs";
import { UserDetailed } from "../models/user.model";
import { HttpClientHelper } from "../services/http-client-helper";

@Injectable({ providedIn: 'root' })
export class UserDetailedResolver implements Resolve<UserDetailed> {

  constructor(
    private context: ContextService,
    private userService: UserService 
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<UserDetailed>|Promise<UserDetailed>|UserDetailed {

    return this.context.user.pipe(
      take(1),
      switchMap(user => {
        return this.userService.getUserDetailed(user.id);
      }),
      tap(user => console.log(user)),
      map(userDetailed => {
        if(userDetailed.profilePicture.length === 0) {
          userDetailed.profilePicture = HttpClientHelper.avatarPlaceholder;
        }
        return userDetailed;
      })
    )
  }
}