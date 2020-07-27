import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ADMIN_ROUTES } from './admin.routes';


@NgModule({
  imports: [ADMIN_ROUTES],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
