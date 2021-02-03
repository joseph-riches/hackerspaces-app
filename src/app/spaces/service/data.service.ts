import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Listing } from '../domain/listing';
import { Space } from '../domain/space';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private savedListingsSubject: BehaviorSubject<Listing[]>;
  public savedListings: Observable<Listing[]>;

  public directoryListings: Listing[];

  constructor(private http: HttpClient)
  {
    this.savedListingsSubject = new BehaviorSubject<Listing[]>(JSON.parse(localStorage.getItem('savedListings')));
    this.savedListings = this.savedListingsSubject.asObservable();
  }

  public get savedListingsValue(): Listing[] 
  {
    return this.savedListingsSubject.value;
  }

  toggleListing (listing: Listing)
  {
    let savedListings = this.savedListingsValue ? this.savedListingsValue : [];

    if(!savedListings.some(element => element.url === listing.url))
    {
      savedListings.push(listing);
      localStorage.setItem('savedListings', JSON.stringify(savedListings));
      this.savedListingsSubject.next(savedListings);
    }
    else
    {
      savedListings = savedListings.filter(element => element.url !== listing.url);
      localStorage.setItem('savedListings', JSON.stringify(savedListings));
      this.savedListingsSubject.next(savedListings);
    }
  }

  fetchSpaceDirectory (): Observable<Listing[]>
  {
    return this.http.get<Listing[]>('https://api.spaceapi.io/v2');
  }

  setDirectoryListings(directoryListings: Listing[])
  {
    this.directoryListings = directoryListings;
  }

  filterSpaceDirectory(searchTerm) {
    return this.directoryListings.filter(item => {
      return item.space.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  fetchSpace (url: string): Observable<Space>
  {
    return this.http.get<Space>(url);
  }
}
