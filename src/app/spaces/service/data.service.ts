import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Listing } from '../domain/listing';
import { Space } from '../domain/space';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public directoryListings: Listing[];

  constructor(private http: HttpClient){}

  fetchSpaceDirectory (): Observable<Listing[]>
  {
    var httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

    return this.http.get<Listing[]>('https://api.spaceapi.io/v2', httpOptions);
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
