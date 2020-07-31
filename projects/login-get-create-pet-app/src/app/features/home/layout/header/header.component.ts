import { RoutePath } from './../../../../core/enums/route.paths';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'projects/login-get-create-pet-app/src/app/core/services/auth-service/auth.service';
import { ToastService } from 'projects/login-get-create-pet-app/src/app/core/services/toast-service/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'eszsw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public homePath:string;
  public adminPath:string;

  constructor(private authService: AuthService, private toastService: ToastService, private router: Router) { }

  ngOnInit(): void {
    this.initialize();
  }

  public initialize(): void {
    this.homePath = RoutePath.HOME;
    this.adminPath = '/'+RoutePath.ADMIN;
  }

  public logout(): void {
    this.authService.logout().subscribe(
      () => {
        this.toastService.showStandard('See you soon', 2);
        this.authService.setUserLogged(false);
        this.router.navigateByUrl(RoutePath.LOGIN_ABS);
      },
      () => {
        this.toastService.showError('We could not logged you out', 2, 'Error!');
      }
    );
  }
}
