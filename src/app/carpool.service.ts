import { Injectable } from '@angular/core';

import { Carpool } from './carpool';
import { CARPOOLS } from './mock-carpools';

@Injectable({
  providedIn: 'root'
})
export class CarpoolService {

  constructor() { }

  getCarpool(id: string): Carpool {
    return CARPOOLS[0] ;
  }
}
