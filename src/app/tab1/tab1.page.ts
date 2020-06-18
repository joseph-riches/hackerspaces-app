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

  space: Observable<Space>;

  constructor(private dataService: DataService){}

  ngOnInit(): void 
  {
    this.space = this.dataService.fetchSpace("http://space.nurdspace.nl/spaceapi/status.json");
  }
}
