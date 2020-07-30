import { Observable, isObservable, Subscription } from 'rxjs';
import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormFormatStatus } from '../../../core/interfaces/auth/form-validation.inteface';
import { FormFormat } from '../../../core/interfaces/auth/form.interface';

@Component({
  selector: 'eszsw-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GenericFormComponent implements OnInit  {
 
  @Input() formFormat$: FormFormat | Observable<FormFormat>;
  @Output() onSubmitForm:EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  public subscriptions: Subscription[];
  public formFormat: FormFormat;
  public formGroup: FormGroup;
  public formStatus: FormFormatStatus;
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
    this.formStatus = FormFormatStatus.INVALID;
    this.validForm = false;
    if (isObservable<FormFormat>(this.formFormat$)){
        this.obtainFormData();
    } else {
      this.formFormat =  this.formFormat$ as FormFormat;
      this.buildFormGroup();  
    }
  }

  public obtainFormData(): void {
    this.subscriptions.push((this.formFormat$ as Observable<FormFormat>).subscribe(
      (form: FormFormat) => {
        this.formFormat = form;
        this.buildFormGroup();
      }
    ));  
  }

  public buildFormGroup(): void {
    (this.formFormat as FormFormat)?.inputsControls?.forEach( control => {
      this.formGroup.addControl(control.name, new FormControl('',[Validators.required]));
    });
    (this.formFormat as FormFormat)?.selectControls?.forEach( control => {
      this.formGroup.addControl(control.name, new FormControl(control.options[0],[Validators.required]));
    });
    if (this.formFormat?.upload) {
      this.formGroup.addControl('imageFile', new FormControl('',[]));
      this.formGroup.addControl('imageUrl', new FormControl('',[Validators.required]));
    }
  }


  public onTouch(): void { }

  public onFormChanges():void {
    this.subscriptions.push(this.formGroup.statusChanges.subscribe( status =>{
      this.formStatus = status;
      if (this.formStatus == FormFormatStatus.VALID) {
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

