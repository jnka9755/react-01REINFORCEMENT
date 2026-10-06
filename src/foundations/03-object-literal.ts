const person = {
    firstName: 'Nombre',
    lastName: 'Aperrllido',
    age: 0,
    address: {
        street: 'Calle 123',
        city: 'Ciudad',
        country: 'País'
    }
};

const me  = structuredClone(person);

me.firstName = 'Juan';
me.lastName = 'Santana';
me.age = 25;
me.address.street = 'Calle 10';


console.log(person, me );