import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthStateService } from '../../authentification/service/auth-state.service';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationGuard {
  constructor(private authStateService: AuthStateService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authStateService.user) {
      if(this.authStateService.isUserConnected == true) {
        return true;
      }
      else {
        this.router.navigateByUrl('/login');
        return false;
      }
    }
    else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
