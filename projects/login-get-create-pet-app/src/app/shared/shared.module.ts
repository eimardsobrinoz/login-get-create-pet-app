import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastComponent } from './components/toast/toast.component';
import { LoadingComponent } from './components/loading/loading.component';



@NgModule({
  declarations: [
    LoadingComponent, 
    ToastComponent
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
    ToastComponent
  ]
})
export class SharedModule { }
