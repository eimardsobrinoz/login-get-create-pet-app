import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './layout/header/header.component';
import { PetsComponent } from './pages/pets/pets.component';
import { CreatePetComponent } from './pages/create-pet/create-pet.component';
import {MatTabsModule} from '@angular/material/tabs';
import { SearchPetComponent } from './pages/search-pet/search-pet.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    PetsComponent,
    CreatePetComponent,
    SearchPetComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule,
    MatTabsModule
  ]
})
export class HomeModule { }
