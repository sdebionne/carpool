import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Carpool } from '../carpool';
import { CarpoolService } from '../carpool.service';

@Component({
  selector: 'organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.css']
})
export class OrganizerComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private carpoolService: CarpoolService,
  ) { }

  carpool: Carpool;
  
  getCarpool(id: string): void {
    this.carpool = this.carpoolService.getCarpool(id);
  }

  cards = [
    { title: 'Card 1', cols: 2, rows: 1 },
    { title: 'Card 2', cols: 1, rows: 1 },
    { title: 'Card 3', cols: 1, rows: 2 },
    { title: 'Card 4', cols: 1, rows: 1 }
  ];

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getCarpool(id);
  }
  
}
