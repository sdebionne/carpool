import { Car } from './car';
import { Person } from './person';

export class Carpool {

  constructor(
    public id: string,
    public event: string,
    public date: Date,
    public email: string,
    public cars: Array<Car> = [],
    public persons: Array<Person> = [],
  ) {  }

  addCar(
    car: Car = null,
  ) {
    this.cars.push(car);
  }

  addPerson(
    person: Person = new Person(''),
  ) {
    this.persons.push(person);
  }

}
