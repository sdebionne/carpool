import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Carpool } from '../carpool';
import { CarpoolService } from '../carpool.service';

@Component({
  selector: 'organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent implements OnInit {

  carpool: Carpool;

  constructor(
    private route: ActivatedRoute,
    private carpoolService: CarpoolService,
  ) { }
  
  getCarpool(id: string): void {
    this.carpool = this.carpoolService.getCarpool(id);
  }

  ngOnInit() {
    const id = this.route.parent.snapshot.paramMap.get('id');
    this.getCarpool(id);
  }
  

  addCar() {
    //this.carpool.addCar();
  }

  addPerson() {
    this.carpool.addPerson();
  }
}
