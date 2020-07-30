import { AccountService } from 'projects/login-get-create-pet-app/src/app/core/services/account-service/account.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { RoutePath } from '../../../core/enums/route.paths';
import { AuthService } from 'projects/login-get-create-pet-app/src/app/core/services/auth-service/auth.service';
import { Component, OnInit } from '@angular/core';
import { AuthComponentsTag } from '../../../core/enums/component-tags';
import { Observable } from 'rxjs';
import { ToastService } from '../../../core/services/toast-service/toast.service';
import { FormFormat } from '../../../core/interfaces/auth/form.interface';

@Component({
  selector: 'eszsw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormFormat | Observable<FormFormat>;
  public textLink: string;
  public linkLbl: string;
  public linkPath: string;

  constructor(private authService: AuthService, private router: Router, 
              private toastService: ToastService, private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.initialize();
  }

  public initialize(): void {
    this.getFormData();
    this.textLink = 'Forgot your password?';
    this.linkLbl = 'Change it now!';
    this.linkPath = RoutePath.RESET_PASSWORD;
  }

  public getFormData(): void {
    this.loginForm =  this.authService.getLoginForm();
  }

  public login(form: FormGroup): void {
    this.accountService.setLoading(true);
    const username: string = form.get('username')?.value;
    const password: string = form.get('password')?.value;
    this.authService.signIn(username, password).subscribe( 
      res => {
        console.log('Emilio success login: ',res);
        this.authService.setUserLogged(true);
        this.router.navigate([RoutePath.HOME]);
      },
      error => {
        this.toastService.showError('Try again with other values', 2, 'Incorrect credentials!');
      },
      () => this.accountService.setLoading(false)
    );
  }

  get getComponentTag() {
    return AuthComponentsTag.LOGIN;
  }

}
