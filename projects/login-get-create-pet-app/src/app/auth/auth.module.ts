import { SignupComponent } from './pages/signup/signup.component';
import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './pages/login/login.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password/reset-password.component';
import { MailConfirmComponent } from './pages/mail-confirm/mail-confirm/mail-confirm.component';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent,
    ResetPasswordComponent,
    MailConfirmComponent
  ],
  imports: [
    SharedModule,
    AuthRoutingModule 
   ]
})
export class AuthModule { }
