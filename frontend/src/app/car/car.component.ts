import { Component, OnInit, Input } from '@angular/core';

import { Car } from '../car'
import { Person } from '../person';

@Component({
  selector: 'car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  @Input() car: Car;

  id: number = 0;

  constructor() { }

  ngOnInit() {
  }

  showInfo(passenger: Person) { console.log(passenger); }
}
