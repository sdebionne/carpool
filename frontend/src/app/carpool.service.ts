import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Carpool } from './carpool';
import { CARPOOLS } from './mock-carpools';

@Injectable({
  providedIn: 'root'
})
export class CarpoolService {

  constructor() { }

  get(id: string): Observable<Carpool> {
       console.log(CARPOOLS);
    return of(CARPOOLS.find((c): boolean => { return c.id === id; }));
    // return HttpClient.get<Hero[]>();
  }
}
