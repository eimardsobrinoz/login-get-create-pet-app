import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastComponent } from './components/toast/toast.component';
import { LoadingComponent } from './components/loading/loading.component';
import { GenericFormComponent } from './components/generic-form/generic-form.component';
import { TextLinkComponent } from './components/text-link/text-link.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';


@NgModule({
  declarations: [
    LoadingComponent, 
    ToastComponent,
    TextLinkComponent,
    GenericFormComponent,
    CustomInputComponent
  ],
  imports: [
    //vendor
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    // Material
    MatIconModule,
    //Bootstrap
    NgbModule
  ],
  exports: [
    //vendor
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    // Material
    MatIconModule,
    //Bootstrap
    NgbModule,
    //added
    LoadingComponent,
    ToastComponent,
    TextLinkComponent,
    GenericFormComponent,
    CustomInputComponent
  ]
})
export class SharedModule { }
