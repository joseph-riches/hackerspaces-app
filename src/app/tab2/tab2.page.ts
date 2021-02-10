import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Map, tileLayer, marker } from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DataService } from '../spaces/service/data.service';
import { Subscription } from 'rxjs';
import { Space } from '../spaces/domain/space';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  spaceSubscription: Subscription;

  constructor(public http: HttpClient, public plt: Platform, private dataService: DataService, public router: Router) {}

  ngAfterViewInit() {
    this.plt.ready().then(() => {
      this.spaceSubscription = this.dataService.fetchLatestStatus().subscribe(response => this.initMap(response));
    });
  }

  initMap(response: Space[]) {
    const map = new Map('map').setView([0, 0], 3);

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    response.forEach((space) => {
      if(space.location)
        marker([space.location.lat, space.location.lon]).bindPopup(`<b>${space.space}</b>`, { autoClose: true }).addTo(map).openPopup();
    });
  }

}
