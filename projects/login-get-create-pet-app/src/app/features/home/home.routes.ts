import { PetsComponent } from './pages/pets/pets.component';
import { CreatePetComponent } from './pages/create-pet/create-pet.component';
import { SearchPetComponent } from './pages/search-pet/search-pet.component';
import { RoutePath } from './../../core/enums/route.paths';
import { RouterModule, Routes } from '@angular/router';


const homeRoutes: Routes = [
    {
      path: '',
      component: PetsComponent
    },
    {
      path: RoutePath.PETS,
      component: PetsComponent
    },
    {
      path: RoutePath.CREATE_PET,
      component: CreatePetComponent
    } ,
    {
      path: RoutePath.SEARCH_PET,
      component: SearchPetComponent
    }  
];


export const HOME_ROUTES = RouterModule.forChild(homeRoutes);
