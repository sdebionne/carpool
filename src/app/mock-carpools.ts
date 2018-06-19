import { Carpool } from './carpool';

export const CARPOOLS: Array<Carpool> = [
    {
        id: '123',
        event: 'Ma sortie louveteau',
        date: new Date('2018-06-06'),
        email: 'toto@google.com',
        persons: [{name: 'Toto'}, {name: 'Titi'}],
        cars: [{
            name: 'Foo',
            contact: 'foo@bar.com',
            date: new Date(),
            location: 'Fontaine',
            infos: 'No pets',
            passengers: [{name: 'Toto'}, {name: 'Titi'}],
        },
        {
            name: 'Bar',
            contact: 'foo@bar.com',
            date: new Date(),
            location: 'Fontaine',
            infos: 'No pets',
            passengers: [{name: 'Toto'}, {name: 'Titi'}],
        }],
    } as Carpool,
]