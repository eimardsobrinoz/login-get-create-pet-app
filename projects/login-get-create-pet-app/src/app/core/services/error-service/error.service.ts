import { ToastService } from './../toast-service/toast.service';
import { Injectable } from '@angular/core';
import { CustomErrorCodes, ClientError } from '../../enums/error-codes';
import { AuthService } from '../auth-service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private authService: AuthService, private toastService: ToastService) { }

  public whichError(errorCode: number, techErrorMessage: string, errorMessage: string):void {
    let errorType: string = '';
    // It allows us to navigate to specific error screen or generic on, tracking the error message
    switch(errorCode) {
      case CustomErrorCodes.UN_KNOWN:
        break;
      case ClientError.HTTP_401_UNAUTHORIZED:
        // Logout anauthorized user
        errorType = 'User Unauthorized';
        this.authService.logout();
        break;
      case ClientError.HTTP_400_BAD_REQUEST:
        break;
      case ClientError.HTTP_404_NOT_FOUND:
        this.notifyUser(errorMessage);
        break;
      default:
        // alert('Unkown Error Code');
    }
    this.notifyUser(errorType,errorMessage);
  }

  // We can create methors to  give error information to Kibana to track the errors


  // We can create methors to  give error information to Kibana to track the errors
  public notifyUser(notification: string, errorType?:string):void {
    // this.toastService.showError(notification, 3, errorType); 
  }
}
