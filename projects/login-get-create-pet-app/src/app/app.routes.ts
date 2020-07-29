import { AdminComponent } from './features/admin/admin.component';
import { HomeComponent } from './features/home/home.component';
import { AuthGuard } from './core/guards/auth/auth.guard';
import { RoutePath } from 'projects/login-get-create-pet-app/src/app/core/enums/route.paths';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: RoutePath.HOME 
    },
    {
      path: RoutePath.HOME,
      component: HomeComponent,
      canActivate: [AuthGuard],
      loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) 
    },
    { 
      path: RoutePath.ADMIN,
      component: AdminComponent,
      canActivate: [AuthGuard],
      // Interesting to use canLoad guard, to inject an step before loading the children routes.
      // canLoad:[adminPermisionsGuard]
      loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule)},
    { 
      path: RoutePath.AUTH, 
      component: AuthComponent,
      loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) 
    },
    {
      path: '**',
      redirectTo: RoutePath.HOME 
    } 
  ];

export const APP_ROUTES = RouterModule.forRoot( routes, { useHash: true } );
