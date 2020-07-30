import { SignupComponent } from './../../../auth/pages/signup/signup.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate,  } from '@angular/router';
import { Observable } from 'rxjs';
import { GenericFormComponent } from '../../../shared/components/generic-form/generic-form.component';

@Injectable({
  providedIn: 'root'
})
export class CompleteFormGuard implements CanDeactivate<SignupComponent> {
  canDeactivate(comp: SignupComponent, currentRoute: ActivatedRouteSnapshot,
     currentState: RouterStateSnapshot, 
     nextState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const formComponent: GenericFormComponent = comp.formComponent;
    const status: boolean = comp.formComponent.formGroup.pristine || comp.formComponent.formGroup.valid || window.confirm('Form not completed! Are you sure you want to exit?');
    // Instead of window.confirm, It is perfect to build a custom confirm dialog component 

    return status;
  }
  
}
