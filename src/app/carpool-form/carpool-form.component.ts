import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

import { Carpool } from '../carpool';

@Component({
  selector: 'app-carpool-form',
  templateUrl: './carpool-form.component.html',
  styleUrls: ['./carpool-form.component.scss']
})
export class CarpoolFormComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  model = new Carpool('', '', '');

  constructor() { }

  ngOnInit() {
  }

}
