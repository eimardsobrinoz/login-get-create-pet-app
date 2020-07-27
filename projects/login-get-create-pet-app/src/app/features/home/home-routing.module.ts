import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HOME_ROUTES } from './home.routes';


@NgModule({
  imports: [HOME_ROUTES],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
