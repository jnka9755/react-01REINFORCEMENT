const useState = (character: string) => [character, (name: string) => {console.log(name)}] as const;

const [name, setName] = useState('Ironman');

console.log(name);
setName('Tony Stark');
