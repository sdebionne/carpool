import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  model = new Carpool('', '', '');

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required,]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: this.emailFormControl
    });
  }

  createCarpool() {

  }

}
