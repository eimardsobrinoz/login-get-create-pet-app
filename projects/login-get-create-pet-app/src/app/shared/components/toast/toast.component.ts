// toast.component.ts
import { Component, TemplateRef } from '@angular/core';
import { ToastService } from '../../../core/services/toast-service/toast.service';

@Component({
  selector: 'toast-notification',
  templateUrl: './toast.component.html',
  host: { '[class.ngb-toasts]': 'true' }
})
export class ToastComponent {
  constructor(public toastService: ToastService) { }

  public isTemplate(toast: any): any { 
    return toast.textOrTpl instanceof TemplateRef; 
  }
}