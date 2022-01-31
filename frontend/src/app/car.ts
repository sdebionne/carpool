import { Person } from './person';

export class Car {

    name: string;
    contact: string;
    date: Date;
    location: string;
    infos: string;
    max_passengers: number;
    passengers: Array<Person> = [];

    constructor(
        name?: string,
        contact?: string,
        date?: Date,
        location?: string,
        infos?: string,
        max_passengers?: number,
        passengers: Person[] = [],
      ) {  }

}
