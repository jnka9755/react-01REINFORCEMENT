const charactersNames = ['Goku', 'Vegeta', 'Trunks'];

const[character1, character2, character3] = charactersNames;

console.log({character1, character2, character3}); // Goku, Vegeta, Trunks


const names = ['Juan', 'Pedro', 'Maria', 'Ana'];

const [, , , name4] = names;

console.log({name4}); // Ana



const returnsArray = () => ['ABC', 123] as const;

const [letters, numbers] = returnsArray();

console.log({letters, numbers}); // ABC, 123