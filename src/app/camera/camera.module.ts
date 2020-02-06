import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { CameraPage } from './camera.page';

import { WebcamModule } from 'ngx-webcam';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebcamModule,
    RouterModule.forChild([{ path: '', component: CameraPage }])
  ],
  declarations: [CameraPage],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class CameraPageModule {}
