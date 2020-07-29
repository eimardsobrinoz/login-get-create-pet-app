import { AccountService } from 'projects/login-get-create-pet-app/src/app/core/services/account-service/account.service';
import { Component } from '@angular/core';

@Component({
  selector: 'eszsw-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {

  constructor(public accountService:AccountService) { }

}
