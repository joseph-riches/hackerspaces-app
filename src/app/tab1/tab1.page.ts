import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../spaces/service/data.service';
import { Space } from '../spaces/domain/space';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  isDark: boolean = false;
  space: Observable<Space>;

  constructor(private dataService: DataService){}

  ngOnInit(): void 
  {
    this.isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    this.space = this.dataService.fetchSpace("http://space.nurdspace.nl/spaceapi/status.json");
  }

  toggleDarkTheme(shouldAdd) {
    document.body.classList.toggle('dark', shouldAdd);
  }

  doRefresh(event)
  {
    event.target.complete();
  }
}
