import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Carpool, Car, Person } from '../carpool';
import { CarpoolService } from '../carpool.service';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent implements OnInit {

  carpool: Carpool;

  constructor(
    private route: ActivatedRoute,
    private carpoolService: CarpoolService,
  ) {
  }

  ngOnInit() {
    const id = this.route.parent?.snapshot.paramMap.get('id');
    if (id) {
      this.carpool = this.carpoolService.get(id)?? new Carpool("0", "New Event", new Date(), "");
    }
  }


  addCar() {
    this.carpool.addCar(new Car());
  }

  addPerson() {
    this.carpool.addPerson(new Person());
  }
}
