import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../spaces/service/data.service';
import { SpaceListing } from '../spaces/domain/space';
import sort from 'fast-sort';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnDestroy {

  public searchTerm: string = "";

  listingSubscription: Subscription;
  listings: SpaceListing[];

  constructor(private dataService: DataService){}

  ngOnInit(): void 
  {
    this.listingSubscription = this.dataService.fetchSpaceDirectory().subscribe(response => this.directoryResponse(response));
  }

  directoryResponse(response: any): void 
  {
    let sortedListings = sort(<SpaceListing[]>response).asc(u => u.space);

    this.dataService.setDirectoryListings(sortedListings);

    this.setFilteredItems();
  }

  setFilteredItems() {
    this.listings = this.dataService.filterItems(this.searchTerm);
  }

  ngOnDestroy(): void 
  {
    this.listingSubscription?.unsubscribe();
  }
}
