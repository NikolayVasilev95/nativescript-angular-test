import { Component, OnInit } from '@angular/core';
import * as geolocation from 'nativescript-geolocation';
import { Accuracy } from 'tns-core-modules/ui/enums';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.tns.html',
  styleUrls: ['./geolocation.component.css']
})
export class GeolocationComponent implements OnInit {

  title = 'teamandwin | geolocation';

  locations = [];
  watchIds = [];

  constructor() { }

  ngOnInit() {
  }

  public enableLocationTap() {
    geolocation.isEnabled().then(function (isEnabled) {
      if (!isEnabled) {
        geolocation.enableLocationRequest(true, true).then(() => {
          console.log('User Enabled Location Service');
        }, (e) => {
          console.log('Error: ' + (e.message || e));
        }).catch(ex => {
          console.log('Unable to Enable Location', ex);
        });
      }
    }, function (e) {
      console.log('Error: ' + (e.message || e));
    });
  }

  public buttonGetLocationTap() {
    const that = this;
    geolocation.getCurrentLocation({
      desiredAccuracy: Accuracy.high,
      maximumAge: 5000,
      timeout: 10000
    }).then(function (loc) {
      if (loc) {
        that.locations.push(loc);
      }
    }, function (e) {
      console.log('Error: ' + (e.message || e));
    });
  }

  public buttonStartTap() {
    try {
      const that = this;
      this.watchIds.push(geolocation.watchLocation(
        function (loc) {
          if (loc) {
            that.locations.push(loc);
          }
        },
        function (e) {
          console.log('Error: ' + e.message);
        },
        {
          desiredAccuracy: Accuracy.high,
          updateDistance: 1,
          updateTime: 3000,
          minimumUpdateTime: 100
        }));
    } catch (ex) {
      console.log('Error: ' + ex.message);
    }
  }

  public buttonStopTap() {
    let watchId = this.watchIds.pop();
    while (watchId != null) {
      geolocation.clearWatch(watchId);
      watchId = this.watchIds.pop();
    }
  }

  public buttonClearTap() {
    this.locations.splice(0, this.locations.length);
  }

}
