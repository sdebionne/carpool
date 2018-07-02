import { Car } from './car';
import { Person } from './person';

export class Carpool {

  constructor(
    public id: string,
    public event: string,
    public date: Date,
    public email: string,
    public persons: Array<Person> = [],
    public cars: Array<Car> = [],    
  ) {  }

  addCar(
    car: Car = null,
  ) {
    this.cars.push(car);
  }

  public addPerson(
    person: Person = new Person(''),
  ) {
    this.persons.push(person);
  }

}
