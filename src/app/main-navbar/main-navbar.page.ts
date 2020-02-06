import { Component, OnInit } from '@angular/core';

import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.page.html',
  styleUrls: ['./main-navbar.page.scss'],
})
export class MainNavbarPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

}
