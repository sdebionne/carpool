import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Carpool } from '../carpool';
import { CarpoolService } from '../carpool.service';
import { Person } from '../person';

@Component({
  selector: 'app-carpool',
  templateUrl: './carpool.component.html',
  styleUrls: ['./carpool.component.scss']
})
export class CarpoolComponent implements OnInit {

  private title = 'Carpool';

  carpool: Carpool;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private route: ActivatedRoute,
    private carpoolService: CarpoolService,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.carpool = this.carpoolService.get('123') ?? new Carpool("0", "New Event", new Date(), "");
    ;
  }

  showInfo() { console.log(this); }

}
