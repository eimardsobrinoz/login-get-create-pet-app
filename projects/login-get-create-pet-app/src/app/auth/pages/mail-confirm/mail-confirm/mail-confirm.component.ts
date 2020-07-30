import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'projects/login-get-create-pet-app/src/app/core/services/auth-service/auth.service';
import { ComponentsTag } from 'projects/login-get-create-pet-app/src/app/core/enums/component-tags';
import { FormFormat } from 'projects/login-get-create-pet-app/src/app/core/interfaces/auth/form.interface';

@Component({
  selector: 'eszsw-mail-confirm',
  templateUrl: './mail-confirm.component.html',
  styleUrls: ['./mail-confirm.component.scss']
})
export class MailConfirmComponent implements OnInit {

  public mailConfirmForm: FormFormat | Observable<FormFormat>;
  public mailConfirmtxt: string;
  public textLink: string;
  public linkLbl: string;
  public linkPath: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.initialize();
  }

  public initialize() {
    this.getFormData();
    this.mailConfirmtxt = 'Please input your email again and we will send you a confirmation mail in order to verify your identity';
    this.textLink = 'Better to go back?';
    this.linkLbl = 'Sign In!';
    this.linkPath = '';
  }
  public getFormData(): void {
    this.mailConfirmForm = this.authService.getMailConfirmForm();
  }

  get getComponentTag() {
    return ComponentsTag.MAIL_CONFIRMATION;
  }

}

