import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { WebcamModule } from 'ngx-webcam';
import { AppRoutingModule } from '@src/app/app-routing.module';

import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { MessagingService } from './_service/messaging.service';
import { environment } from '../environments/environment';
import { AsyncPipe } from '../../node_modules/@angular/common';

import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';
import { CameraComponent } from '@src/app/camera/camera.component';
import { GeolocationComponent } from '@src/app/geolocation/geolocation.component';
import { MainNavbarComponent } from '@src/app/main-navbar/main-navbar.component';
import { FooterComponent } from '@src/app/footer/footer.component';
import { from } from 'rxjs';


@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      CameraComponent,
      GeolocationComponent,
      MainNavbarComponent,
      FooterComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      MDBBootstrapModule.forRoot(),
      WebcamModule,
      AngularFireDatabaseModule,
      AngularFireAuthModule,
      AngularFireMessagingModule,
      AngularFireModule.initializeApp(environment.firebase)
   ],
   providers: [MessagingService, AsyncPipe],
   bootstrap: [
      AppComponent
   ],
   schemas: [
      NO_ERRORS_SCHEMA
   ]
})
export class AppModule { }
