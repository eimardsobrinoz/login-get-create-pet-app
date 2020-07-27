import { APP_ROUTES } from './app.routes';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [APP_ROUTES],
  exports: [RouterModule]
})
export class AppRoutingModule { }
