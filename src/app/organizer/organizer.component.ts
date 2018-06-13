import { Component } from '@angular/core';

import { Carpool } from '../carpool';
import { CarpoolService } from '../carpool.service';

@Component({
  selector: 'organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.css']
})
export class OrganizerComponent {

  constructor(private carpoolService: CarpoolService) { }

  carpool: Carpool;
  
  getHeroes(id: string): void {
    this.carpool = this.carpoolService.getCarpool(id);
  }

  cards = [
    { title: 'Card 1', cols: 2, rows: 1 },
    { title: 'Card 2', cols: 1, rows: 1 },
    { title: 'Card 3', cols: 1, rows: 2 },
    { title: 'Card 4', cols: 1, rows: 1 }
  ];
  
}
