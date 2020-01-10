import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  static EVENTS : string[] = ["Events", "Scout Trips", "Soccer Games", "Weddings"];
  event: string = "Events";
  item: number = 0;

  intervalId = 0;

  constructor() { }

  ngOnInit()    { this.start(); }
  ngOnDestroy() { this.clearTimer(); }

  start() { this.rotate(); }
  stop()  { this.clearTimer(); }

  clearTimer() { clearInterval(this.intervalId); }

  private rotate() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.item += 1;

      if (this.item >= HomeComponent.EVENTS.length) { this.item = 0; } // reset
      this.event = HomeComponent.EVENTS[this.item];
    }, 1000);
  }
}
