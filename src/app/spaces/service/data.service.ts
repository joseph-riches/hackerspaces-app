import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpaceListing } from '../domain/space';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public directoryListings: SpaceListing[];

  constructor(private http: HttpClient){}

  fetchSpaceDirectory (): Observable<SpaceListing[]>
  {
    var httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

    return this.http.get<SpaceListing[]>('https://api.spaceapi.io/v2', httpOptions);
  }

  setDirectoryListings(directoryListings: SpaceListing[])
  {
    this.directoryListings = directoryListings;
  }

  filterItems(searchTerm) {
    return this.directoryListings.filter(item => {
      return item.space.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
}
