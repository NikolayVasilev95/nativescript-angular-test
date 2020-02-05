import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.css']
})
export class GeolocationComponent implements OnInit {

  latitude = 0;
  longitude = 0;
  errorMsg: string;

  constructor() { }

  ngOnInit() {
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      } );
    } else {
      this.errorMsg = 'Geolocation is not supported by this browser.';
    }
  }

}
