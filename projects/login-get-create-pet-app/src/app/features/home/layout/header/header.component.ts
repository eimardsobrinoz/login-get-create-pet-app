import { Component, OnInit } from '@angular/core';
import { User } from 'projects/login-get-create-pet-app/src/app/core/interfaces/user/user-interface';
import { AccountService } from 'projects/login-get-create-pet-app/src/app/core/services/account-service/account.service';
import { AuthService } from 'projects/login-get-create-pet-app/src/app/core/services/auth-service/auth.service';
import { ToastService } from 'projects/login-get-create-pet-app/src/app/core/services/toast-service/toast.service';
import { Router } from '@angular/router';
import { RoutePath } from 'projects/login-get-create-pet-app/src/app/core/enums/route.paths';

@Component({
  selector: 'eszsw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public user: User | null;
  constructor(private accountService:AccountService, private authService: AuthService,
             private toastService: ToastService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.accountService.getActiveUser as User;
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
