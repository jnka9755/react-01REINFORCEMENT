interface Person{
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
}

interface Address {
    street: string;
    city: string;
    country: string;
}

const me: Person = {
    firstName: 'Juan',
    lastName: 'Santana',
    age: 29,
    address: {
        street: 'Calle 10',
        city: 'Mosquera',
        country: 'Colombia'
    }
};

const brother: Person = {
    firstName: 'David',
    lastName: 'Santana',
    age: 27,
    address: {
        street: 'Calle 12',
        city: 'Mosquera',
        country: 'Colombia'
    }
};

console.log(me);
console.log(brother);