import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Space } from '../domain/space';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  savedSpaces = new BehaviorSubject<Space[]>([]);

  constructor(){}

  addSavedSpace(savedSpace: Space)
  {
    const currentValue = this.savedSpaces.value;
    const updatedValue = [...currentValue, savedSpace];
    this.savedSpaces.next(updatedValue);
  }

  removeSavedSpace(savedSpace: Space)
  {
    let updatedValue: any[] = [...this.savedSpaces.value]
  
    updatedValue.forEach((item, index) => {
      if (item === savedSpace) { updatedValue.splice(index, 1); }
    });
  
    this.savedSpaces.next(updatedValue);
  }

  setSavedSpaces(savedSpaces: Space[])
  {
    this.savedSpaces.next(savedSpaces);
  }

  getSavedSpaces(): Observable<Space[]> {
    return this.savedSpaces.asObservable();
  }
}
