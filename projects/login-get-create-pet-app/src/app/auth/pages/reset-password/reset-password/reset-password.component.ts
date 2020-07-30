import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'projects/login-get-create-pet-app/src/app/core/services/auth-service/auth.service';
import { RoutePath } from 'projects/login-get-create-pet-app/src/app/core/enums/route.paths';
import { AuthComponentsTag } from 'projects/login-get-create-pet-app/src/app/core/enums/component-tags';
import { FormFormat } from 'projects/login-get-create-pet-app/src/app/core/interfaces/auth/form.interface';

@Component({
  selector: 'eszsw-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  public resetPasswordForm: FormFormat | Observable<FormFormat>;
  public textLink:string;
  public linkLbl:string;
  public linkPath:string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.initialize();
  }

  public initialize(): void {
    this.getFormData();
    this.textLink= 'Remembered your password?';
    this.linkLbl= 'Sign In!';
    this.linkPath= RoutePath.LOGIN;
  }

  public getFormData(): void {
    this.resetPasswordForm = this.authService.getResetPasswordForm();
  }

  get getComponentTag() {
    return AuthComponentsTag.RESET_PASSWORD;
  }

}
