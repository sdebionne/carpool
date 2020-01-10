import { Action } from '@ngrx/store';

export enum ActionTypes {
  AddCar = '[Carpool Component] AddCar',
  RemoveCar = '[Carpool Component] RemoveCar',
  Reset = '[Carpool Component] Reset',
}

export class AddCar implements Action {
  readonly type = ActionTypes.AddCar;
}

export class RemoveCar implements Action {
  readonly type = ActionTypes.RemoveCar;
}

export class Reset implements Action {
    readonly type = ActionTypes.Reset;
}

export type ActionsUnion = AddCar | RemoveCar | Reset;
