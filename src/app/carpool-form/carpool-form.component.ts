import { Component, OnInit } from '@angular/core';

import { Carpool } from '../carpool';

@Component({
  selector: 'app-carpool-form',
  templateUrl: './carpool-form.component.html',
  styleUrls: ['./carpool-form.component.scss']
})
export class CarpoolFormComponent implements OnInit {

  model = new Carpool('', '', '');

  constructor() { }

  ngOnInit() {
  }

}
