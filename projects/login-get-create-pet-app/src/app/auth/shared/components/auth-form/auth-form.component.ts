import { Observable, isObservable, Subscription } from 'rxjs';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, Form } from '@angular/forms';
import { AuthForm } from 'projects/login-get-create-pet-app/src/app/core/interfaces/auth/auth-form.interface';
import { AuthFormStatus } from 'projects/login-get-create-pet-app/src/app/core/interfaces/auth/auth-validation.inteface';

@Component({
  selector: 'eszsw-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit  {
 
  @Input() formFormat$: AuthForm | Observable<AuthForm>;
  @Output() onSubmitForm:EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  public subscriptions: Subscription[];
  public formFormat: AuthForm;
  public formGroup: FormGroup;
  public formStatus: AuthFormStatus;
  public validForm: boolean;

  constructor() { 
  }

  ngOnInit(): void {
    this.initialize();  
    this.onFormChanges();
  }

  public initialize(): void {
    this.subscriptions = [];
    this.formGroup = new FormGroup({});
    this.formStatus = AuthFormStatus.INVALID;
    this.validForm = false;
    if (isObservable<AuthForm>(this.formFormat$)){
        this.obtainFormData();
    } else {
      this.formFormat =  this.formFormat$ as AuthForm;
      this.buildFormGroup();  
    }
  }

  public obtainFormData(): void {
    this.subscriptions.push((this.formFormat$ as Observable<AuthForm>).subscribe(
      (form: AuthForm) => {
        this.formFormat = form;
        this.buildFormGroup();
      }
    ));  
  }

  public buildFormGroup(): void {
    (this.formFormat as AuthForm)?.inputsControls?.forEach( control => {
      this.formGroup.addControl(control.name, new FormControl('',[Validators.required]));
    });
  }


  public onTouch(): void { }

  public onFormChanges():void {
    this.subscriptions.push(this.formGroup.statusChanges.subscribe( status =>{
      this.formStatus = status;
      if (this.formStatus == AuthFormStatus.VALID) {
        this.validForm = true;
      } else {
        this.validForm = false;
      }
    }));
  }

  public onSubmit(): void {
    this.onSubmitForm.emit(this.formGroup);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach( subscription => subscription.unsubscribe());
  }

}

