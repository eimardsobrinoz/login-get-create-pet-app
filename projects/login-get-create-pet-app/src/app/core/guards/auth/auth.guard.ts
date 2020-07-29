import { AuthService } from 'projects/login-get-create-pet-app/src/app/core/services/auth-service/auth.service';
import { RoutePath } from 'projects/login-get-create-pet-app/src/app/core/enums/route.paths';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    public authService: AuthService,
    public router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let userAllowed: boolean = true;
    if ( !this.authService.isLogged) {
      userAllowed = false;
      // I can display any message, dialog, alert component if considered
      console.log( 'User not allowed' );
      this.router.navigate([RoutePath.AUTH]);
    }
    return userAllowed;
  }
  
}
