import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

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

  carpool: Observable<Carpool> = this.store.select(state => state.carpool);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private route: ActivatedRoute,
    private carpoolService: CarpoolService,
    private store: Store<{ carpool: Carpool }>,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.store.dispatch({ type: '[Carpool Page] Load Carpool' });
  }

  showInfo(passenger: Person) { console.log(passenger); }

}
