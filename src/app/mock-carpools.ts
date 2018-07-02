import { Carpool } from './carpool';

export const CARPOOLS: Array<Carpool> = [
    new Carpool (
        '123',
        'Ma sortie louveteau',
        new Date('2018-06-06'),
        'toto@google.com',
        [{name: 'Toto'}, {name: 'Titi'}],
        [{
            name: 'Foo',
            contact: 'foo@bar.com',
            date: new Date(),
            location: 'Fontaine',
            infos: 'No pets',
            max_passengers: 4,
            passengers: [{name: 'Toto'}, {name: 'Titi'}],
        },
        {
            name: 'Bar',
            contact: 'foo@bar.com',
            date: new Date(),
            location: 'Fontaine',
            infos: 'No pets',
            max_passengers: 6,
            passengers: [{name: 'Toto'}, {name: 'Titi'}],
        }],
     ),
]