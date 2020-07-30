import { RoutePath } from 'projects/login-get-create-pet-app/src/app/core/enums/route.paths';
import { CompleteFormGuard } from './../core/guards/completeForm/complete-form.guard';
import { MailConfirmComponent } from './pages/mail-confirm/mail-confirm/mail-confirm.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password/reset-password.component';
import { SignupComponent } from './pages/signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ComponentsTag } from '../core/enums/component-tags';

const authRoutes: Routes = [
    {
      path: '',
      component: LoginComponent,
      data: { componentTag: ComponentsTag.LOGIN } 
    },
    {
      path: RoutePath.LOGIN,
      component: LoginComponent,
      data: { componentTag: ComponentsTag.LOGIN } 
    },
    {
      path: RoutePath.SIGN_UP,
      component: SignupComponent,
      canDeactivate:[CompleteFormGuard],
      data: { componentTag: ComponentsTag.SING_UP } 
    },
    {
      path: RoutePath.RESET_PASSWORD,
      component: ResetPasswordComponent,
      data: { componentTag: ComponentsTag.RESET_PASSWORD } 
    },
    {
      path: RoutePath.MAIL_CONFIRMATION,
      component: MailConfirmComponent,
      data: { componentTag: ComponentsTag.MAIL_CONFIRMATION } 
    }
  ];


export const AUTH_ROUTES = RouterModule.forChild(authRoutes);
