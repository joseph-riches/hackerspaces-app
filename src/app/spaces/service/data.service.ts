import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Listing } from '../domain/listing';
import { Space } from '../domain/space';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private spaceStatusSubject: BehaviorSubject<Space[]>;
  public spaceStatus: Observable<Space[]>;

  constructor(private http: HttpClient)
  {
    this.spaceStatusSubject = new BehaviorSubject<Space[]>(JSON.parse(localStorage.getItem('spaceStatus')));
    this.spaceStatus = this.spaceStatusSubject.asObservable();
  }

  public get status(): Space[]
  {
    return this.spaceStatusSubject.value;
  }

  fetchLatestStatus (): Observable<Space[]>
  {
    return this.http.get<Space[]>('https://hackerspace-resources.s3.eu-central-1.amazonaws.com/data/latest.json');
  }
}
