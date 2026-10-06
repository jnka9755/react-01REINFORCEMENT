function greet1(name: string): string {
  return `Hello, ${name}!`;
}

const greet2 = (name: string): string => {
    return `Hello, ${name}!`;
}

const greet3 = (name: string): string => `Hello, ${name}!`;

const message = greet1('Juan');
const message2 = greet2('Camilo');
const message3 = greet3('Andres');

console.log(message);
console.log(message2);
console.log(message3);


interface User {
    uid: string;
    username: string;
}

function getUser1(): User {
    return {
        uid: 'ABC123',
        username: 'JnKa55'
    };
}

const getUser2 = (): User => {
    return {
        uid: 'ABC123',
        username: 'JnKa97'
    };
}

const getUser3 = (): User => ({
        uid: 'ABC123',
        username: 'JnKa97'
    });


const user1 = getUser1();
console.log(user1);

const user2 = getUser2();
console.log(user2);

const user3 = getUser3();
console.log(user3);

const myNumbers: number[] = [1, 2, 3, 4, 5];

myNumbers.forEach(function (number) {
    console.log({number});
});

myNumbers.forEach((number) => {
    console.log({number});
});

myNumbers.forEach(console.log);
