import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../spaces/service/data.service';
import { Listing } from '../spaces/domain/listing';
import sort from 'fast-sort';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit, OnDestroy {

  public searchTerm: string = "";

  listingSubscription: Subscription;
  listings: Listing[];

  constructor(private dataService: DataService){}

  ngOnInit(): void 
  {
    this.listingSubscription = this.dataService.fetchSpaceDirectory().subscribe(response => this.directoryResponse(response));
  }

  directoryResponse(response: any): void 
  {
    let sortedListings = sort(<Listing[]>response).asc(u => u.space);

    this.dataService.setDirectoryListings(sortedListings);

    this.setFilteredItems();
  }

  setFilteredItems() {
    this.listings = this.dataService.filterSpaceDirectory(this.searchTerm);
  }

  ngOnDestroy(): void 
  {
    this.listingSubscription?.unsubscribe();
  }
}
