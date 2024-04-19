import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthStateService } from "../service/auth-state.service";

@Injectable({
  providedIn: 'root'
})

export class AuthorizationGuard {
  constructor(private authStateService: AuthStateService, private router: Router) {}

  canActivate(
    route:ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(this.authStateService.user) {
      for (let index = 0; index < route.data['roles'].length; index++) {
        const roleHasAccess = route.data['roles'][index];
        if(this.authStateService.user.isHasRole(roleHasAccess)) {
          return true;
        }
        else {
          this.router.navigateByUrl('/login');
          return false;
        }
      }
      this.router.navigateByUrl('/login');
      return false;
    }
    else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}