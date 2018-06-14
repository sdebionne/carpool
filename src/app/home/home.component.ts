import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  static EVENTS : string[] = ["events", "scout trip", "soccer game"];
  event: string = "Events";

  constructor() { }

  ngOnInit() {
  }

}
