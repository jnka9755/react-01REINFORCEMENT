const person = {
    name: 'John Doe',
    age: 30,
    key: 'ABC123'
}

const name1 = person.name;
const age1 = person.age;
const key1 = person.key;
 
console.log({name1, age1, key1});


const { name: namePerson1 , age, key } = person;
console.log({ namePerson1, age, key });


interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}


const userContext = ({key, name, age, rank}: Hero) => {

    return {
        keyName: key,
        user:{
            name,
            age,
        },
        rank: rank || 'No rank'
    }
}

const {
     rank, 
     keyName, 
     //user: { name } 
    } = userContext(person);


    const { user: { name } } = userContext(person);


console.log({ rank, keyName, name });
