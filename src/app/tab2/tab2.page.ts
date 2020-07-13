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

  savedListingsSubscription: Subscription;
  savedListings: Listing[] = [];

  constructor(private dataService: DataService){}

  ngOnInit(): void 
  {
    this.listingSubscription = this.dataService.fetchSpaceDirectory().subscribe(response => this.directoryResponse(response));
    this.savedListingsSubscription = this.dataService.savedListings.subscribe(savedListings => savedListings ? this.savedListings = savedListings : []);
  }

  isSaved(listing: Listing): boolean
  {
    return this.savedListings.some(element => element.url === listing.url);
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

  addToFavourites(listing: Listing)
  {
    this.dataService.toggleListing(listing);
  }

  doRefresh(event)
  {
    this.listingSubscription?.unsubscribe();
    this.listingSubscription = this.dataService.fetchSpaceDirectory().subscribe(response => {
      this.directoryResponse(response);
      event.target.complete();
    });
  }

  ngOnDestroy(): void 
  {
    this.listingSubscription?.unsubscribe();
    this.savedListingsSubscription?.unsubscribe();
  }
}
