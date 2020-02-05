import { Routes } from '@angular/router';

import { HomeComponent } from '@src/app/home/home.component';
import { CameraComponent } from '@src/app/camera/camera.component';
import { GeolocationComponent } from '@src/app/geolocation/geolocation.component';
import { from } from 'rxjs';

export const routes: Routes = [
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full',
  },
  {
      path: 'home',
      component: HomeComponent,
  },
  { path: 'camera', component: CameraComponent },
  { path: 'geolocation', component: GeolocationComponent },
];
