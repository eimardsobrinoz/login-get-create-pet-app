import { PetsComponent } from './pages/pets/pets.component';
import { CreatePetComponent } from './pages/create-pet/create-pet.component';
import { SearchPetComponent } from './pages/search-pet/search-pet.component';
import { RoutePath } from './../../core/enums/route.paths';
import { RouterModule, Routes } from '@angular/router';
import { CompleteFormGuard } from '../../core/guards/completeForm/complete-form.guard';


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
      component: CreatePetComponent,
      canDeactivate:[CompleteFormGuard]
    } ,
    {
      path: RoutePath.SEARCH_PET,
      component: SearchPetComponent
    }  
];


export const HOME_ROUTES = RouterModule.forChild(homeRoutes);
