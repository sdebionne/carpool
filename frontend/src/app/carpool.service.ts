import { Injectable } from '@angular/core';

import { Carpool } from './carpool';
import { CARPOOLS } from './mock-carpools';

@Injectable({
  providedIn: 'root'
})
export class CarpoolService {

  constructor() { }

  get(id: string) :  Carpool | undefined {
    console.log(CARPOOLS);
    return CARPOOLS.find((c): boolean => { return c.id === id; });
    // return HttpClient.get<Hero[]>();
  }
}
