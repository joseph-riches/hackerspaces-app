import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Listing } from '../spaces/domain/listing';
import { Space } from '../spaces/domain/space';
import { DataService } from '../spaces/service/data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  spaceSubscription: Subscription;
  spaces: Space[] = [];

  constructor(private dataService: DataService){}

  ngOnInit(): void 
  {
    this.spaceSubscription = this.dataService.fetchLatestStatus().subscribe(response => this.sortStatusResponse(response));
  }

  sortStatusResponse(response: Space[])
  {
    this.spaces = response.sort((a, b) => (a.state?.open === b.state?.open) ? 0 : a.state?.open ? -1 : 1);
  }
}
