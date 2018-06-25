import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Carpool } from '../carpool';
import { CarpoolService } from '../carpool.service';

@Component({
  selector: 'carpool',
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
    this.getCarpool(id);
  }

  getCarpool(id: string): void {
    this.carpool = this.carpoolService.getCarpool(id);
  }

  }
