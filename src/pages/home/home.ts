import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {
  Geolocation,
  GeolocationOptions,
  Geoposition,
  Coordinates
} from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lastPosition: Coordinates | null = null;

  constructor(
    public navCtrl: NavController,
    private geolocation: Geolocation
  ) {}

  getCurrentPosition() {
    const options: GeolocationOptions = {
      enableHighAccuracy: true
    };
    this.geolocation.getCurrentPosition(options).then((value: Geoposition) => {
      console.log(value);
      this.lastPosition = value.coords;
    });
  }
}
