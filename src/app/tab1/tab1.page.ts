import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DataService } from '../spaces/service/data.service';
import { Space } from '../spaces/domain/space';
import { Listing } from '../spaces/domain/listing';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  isDark: boolean = false;
  isCompact: boolean = true;

  subscriptions: Subscription[] = [];
  savedListings: Listing[] = [];

  spaces: Space[] = [];

  constructor(private dataService: DataService)
  {
    this.subscriptions.push(this.dataService.savedListings.subscribe(savedListings => savedListings ? this.loadSavedSpaces(savedListings) : []));
  }

  loadSavedSpaces(savedListings: Listing[])
  {
    this.spaces = [];
    
    this.savedListings = savedListings;

    if(savedListings != null)
    {
      savedListings.forEach(element =>  { console.log(element); this.subscriptions.push(this.dataService.fetchSpace(element.url).subscribe(space => { this.spaces.push(space) })) });
    }
  }

  ngOnInit(): void 
  {
    this.isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  toggleDarkTheme(shouldAdd) {
    document.body.classList.toggle('dark', shouldAdd);
  }

  doRefresh(event)
  {
    //this.space.subscribe(() => event.target.complete());
  }
}


