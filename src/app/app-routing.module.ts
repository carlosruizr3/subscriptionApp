import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    canActivate: [],
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'usersform',
    canActivate: [],
    loadChildren: () => import('./pages/forms/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'modelsform',
    canActivate: [],
    loadChildren: () => import('./pages/forms/model/model.module').then(m => m.ModelModule)
  },
  {
    path: 'devicesform',
    canActivate: [],
    loadChildren: () => import('./pages/forms/devices/devices.module').then(m => m.DevicesModule)
  },
  {
    path: 'clientsform',
    canActivate: [],
    loadChildren: () => import('./pages/forms/clients/clients.module').then(m => m.ClientsModule)
  },
  {
    path: 'brandform',
    canActivate: [],
    loadChildren: () => import('./pages/forms/brand/brand.module').then(m => m.BrandModule)
  },
  {
    path: 'locationsform',
    canActivate: [],
    loadChildren: () => import('./pages/forms/locations/locations.module').then(m => m.LocationsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
