// toast.service.ts
import { Injectable, TemplateRef  } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toasts: any[] = [];

  // Push new Toasts to array with content and options
  public show(textOrTpl: string | TemplateRef<any>, options: any = {}): void {
    this.toasts.push({ textOrTpl, ...options });
  }

  // Callback method to remove Toast DOM element from view
  public remove(toast: any): void {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

  public showStandard(message: string, secondsDelay: number = 2): void {
    this.show(message, {
      classname: 'bg-info text-light',
      delay: secondsDelay * 1000,
      autohide: true
    });
  }

  public showSuccess(message: string, secondsDelay: number = 2, header?: string): void {
    this.show(message, {
      classname: 'bg-success text-light',
      delay: secondsDelay * 1000 ,
      autohide: true,
      headertext: header
    });
  }
  public showError(message: string, secondsDelay: number = 2, header?: string): void {
    this.show(message, {
      classname: 'bg-danger text-light',
      delay: secondsDelay * 1000 ,
      autohide: true,
      headertext: header
    });
  }

  public showCustomToast(customTpl: any): void {
    this.show(customTpl, {
      classname: 'bg-info text-light',
      delay: 3000,
      autohide: true
    });
  }
}
