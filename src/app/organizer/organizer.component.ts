import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Carpool } from '../carpool';
import { CarpoolService } from '../carpool.service';
import { AddCar } from '../reducers/carpool.action';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent implements OnInit {

  carpool: Observable<Carpool>;

  constructor(
    private store: Store<{ carpool: Carpool }>,
    private route: ActivatedRoute,
    private carpoolService: CarpoolService,
  ) {
    this.carpool = store.pipe(select('carpool'));
  }

  // getCarpool(id: string): void {
  //   this.carpoolService.getCarpool(id)
  //     .subscribe(carpool => this.carpool = carpool);
  // }

  ngOnInit() {
    const id = this.route.parent.snapshot.paramMap.get('id');
    // this.getCarpool(id);
  }


  addCar() {
    this.store.dispatch(new AddCar());
  }

  // addPerson() {
  //   this.carpool.addPerson();
  // }
}
