import { Person } from './person';

export class Car {

    constructor(
        public name: string,
        public contact: string,
        public date: Date,
        public location: string,
        public infos: string,
        public passengers: Person[] = [],
      ) {  }

}
