import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  Roles: string[] = ['Admin', 'Author', 'Reader'];

  selected: string = this.Roles[0];

  constructor() { }

  ngOnInit() {
  }

}
