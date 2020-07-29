import { HttpParams } from '@angular/common/http';
import { RoutePath } from 'projects/login-get-create-pet-app/src/app/core/enums/route.paths';
import { User } from '../../interfaces/user/user-interface';
import { environment } from 'projects/login-get-create-pet-app/src/environments/environment';
import { HttpService } from './../http-service/http.service';
import { Injectable } from '@angular/core';
import { StorageService } from '../storage-service/storage.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthEndPoints, ApiMethod } from '../../enums/endpoints';
import { map } from 'rxjs/operators';
import { AccountService } from '../account-service/account.service';
import { AuthForm } from '../../interfaces/auth/auth-form.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _usserLogged: boolean =  false;

  constructor(
    private httpService: HttpService,
    private storage: StorageService,
    private router: Router,
    private accountService: AccountService
  ) { }

  public signIn(username:string, password: string): Observable<User> {
    let params: HttpParams = new HttpParams()
      .set('username', username)
      .set('password', password);
    return this.httpService.requestCall(ApiMethod.GET, environment.apiUrl, AuthEndPoints.LOGIN, undefined, params) as Observable<any>;
  }

  public signUp(user: User): Observable<User> {
    this.httpService.setHeaders("Content-Type", "application/json")
    return this.httpService.requestCall(ApiMethod.POST, environment.apiUrl, AuthEndPoints.SIGNUP, user) as Observable<any>;
  }

  public logout(): Observable<User> {
    return this.httpService.requestCall(ApiMethod.GET, environment.apiUrl, AuthEndPoints.LOGOUT) as Observable<any>;
  }

  public isValidUser(user: string): Observable<any> {
    return this.httpService.requestCall(ApiMethod.GET, environment.apiUrl, `${AuthEndPoints.USER_REGISTERED}/${user}`)
          .pipe(map( res => res.status));
  }

  public get isLogged(): boolean {
    return this._usserLogged;
  }
  public setUserLogged(status: boolean) {
    this._usserLogged = status;
  }

  public getLoginForm(): Observable<AuthForm>  {
    return this.httpService.requestCall(ApiMethod.GET, environment.apiAuthUrl, AuthEndPoints.LOGIN_FORM) as Observable<AuthForm>;
  }
  public getSignUpForm(): Observable<AuthForm> {
    return this.httpService.requestCall(ApiMethod.GET, environment.apiAuthUrl, AuthEndPoints.SIGN_UP_FORM) as Observable<AuthForm>;
  }
  public getResetPasswordForm(): Observable<AuthForm> {
    return this.httpService.requestCall(ApiMethod.GET, environment.apiAuthUrl, AuthEndPoints.RESET_PASSWORD_FORM) as Observable<AuthForm>;
  }
  public getMailConfirmForm(): Observable<AuthForm> {
    return this.httpService.requestCall(ApiMethod.GET, environment.apiAuthUrl, AuthEndPoints.MAIL_CONFIRMATION_FORM) as Observable<AuthForm>;
  }

}
