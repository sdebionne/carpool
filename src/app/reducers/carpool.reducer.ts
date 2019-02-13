import { Action } from '@ngrx/store';
import { ActionTypes, ActionsUnion } from './carpool.action';

import { Car } from '../car';
import { Person } from '../person';

export interface Carpool {
    id: string;
    event: string;
    date: Date;
    email: string;
    persons: Array<Person>;
    cars: Array<Car>;
}

export const initialState: Carpool = {
    id: '',
    event: '',
    date: new Date(),
    email: '',
    persons: [],
    cars: [],
};

export function carpoolReducer(
    state = initialState,
    action: ActionsUnion
  ): Carpool {
    switch (action.type) {
        case ActionTypes.AddCar:
            return state;
        case ActionTypes.RemoveCar:
            return state;
        default:
            return state;
    }
};
