import { Car } from './car';

export class Carpool {

  constructor(
    public id: string,
    public name: string,
    public email: string,
    public cars: Array<Car> = [],
  ) {  }

  addCar(
    car: Car,
  ) {
    this.cars.push(car);
  }

}
