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

  listingSubscription: Subscription;
  listings: Listing[];

  spaceSubscriptions: Subscription[] = [];
  spaces: Space[] = [];

  constructor(private dataService: DataService){}

  ngOnInit(): void 
  {
    this.listingSubscription = this.dataService.fetchSpaceDirectory().subscribe(response => this.directoryResponse(response));
  }

  directoryResponse(response: any): void 
  {
    response.forEach(element =>  { console.log(element); this.spaceSubscriptions.push(this.dataService.fetchSpace(element.url).subscribe(space => { space ? this.spaces.push(space) : null } )) });
  }
}
