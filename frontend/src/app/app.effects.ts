import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CarpoolService } from './carpool.service';

@Injectable()
export class AppEffects {

  @Effect()
loadCarpool$ = this.actions$
  .pipe(
    ofType('[Carpool Page] Load Carpool'),
    mergeMap(() => this.carpoolService.get('123')
      .pipe(
        map(carpool => ({ type: '[Carpool API] Carpool Loaded Success', payload: carpool })),
        catchError(() => EMPTY)
      )
    )
  );

constructor(
  private actions$: Actions,
  private carpoolService: CarpoolService
) {}

}

