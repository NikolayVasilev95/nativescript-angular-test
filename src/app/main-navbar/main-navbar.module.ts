import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainNavbarPageRoutingModule } from './main-navbar-routing.module';

import { MainNavbarPage } from './main-navbar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainNavbarPageRoutingModule
  ],
  declarations: [MainNavbarPage]
})
export class MainNavbarPageModule {}
