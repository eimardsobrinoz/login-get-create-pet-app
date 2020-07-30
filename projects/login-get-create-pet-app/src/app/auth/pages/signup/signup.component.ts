import { User } from '../../../core/interfaces/user/user-interface';
import { AuthService } from 'projects/login-get-create-pet-app/src/app/core/services/auth-service/auth.service';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ComponentsTag } from '../../../core/enums/component-tags';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { AccountService } from '../../../core/services/account-service/account.service';
import { Subscription } from 'rxjs';
import { ToastService } from '../../../core/services/toast-service/toast.service';
import { GenericFormComponent } from '../../../shared/components/generic-form/generic-form.component';
import { FormFormat } from '../../../core/interfaces/auth/form.interface';

@Component({
  selector: 'eszsw-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {

  @ViewChild('formComponent') formComponent:GenericFormComponent;

  public subscription: Subscription[];
  public signUpForm: FormFormat | Observable<FormFormat>;

  constructor(private authService: AuthService, private accountService: AccountService, 
              private router: Router, private toastService: ToastService) { }

  ngOnInit(): void {
    this.initialize();
    this.getFormData();
  }

  public initialize(): void {
    this.subscription = [];
  }

  public getFormData(): void {
    // The way to get the data as considered. Potential of dynamic forms. From json, static services, backend, etc 
    this.signUpForm = this.authService.getSignUpForm();
  }

  public signUp(form: FormGroup): void {
    const user: User = {
      id: 0,
      username: form.get('username')?.value,
      firstName: form.get('firstname')?.value,
      lastName: form.get('lastname')?.value,
      email: form.get('email')?.value,
      password: form.get('password')?.value,
      phone: form.get('phone')?.value,
      userStatus: 0
    }
    this.subscription.push(this.authService.signUp(user).subscribe( 
      () => {
        this.toastService.showSuccess('Successfully user created', 3); 
        form.reset({});
      },
      () => this.toastService.showError('User not created', 3, 'Error!')
    ));
  }
  
  get getComponentTag(){
    return ComponentsTag.SING_UP;
  }

  ngOnDestroy(): void {
    this.subscription.forEach( subscription => subscription.unsubscribe());
  }

}
