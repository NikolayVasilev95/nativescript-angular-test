import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainNavbarPage } from './main-navbar.page';

const routes: Routes = [
  {
    path: '',
    component: MainNavbarPage,
    children: [
      {
        path: '',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      },
      {
        path: 'camera',
        children: [
          {
            path: '',
            loadChildren: () => import('../camera/camera.module').then( m => m.CameraPageModule)
          }
        ]
      },
      {
        path: 'geolocation',
        children: [
          {
            path: '',
            loadChildren: () => import('../geolocation/geolocation.module').then( m => m.GeolocationPageModule)
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainNavbarPageRoutingModule {}
