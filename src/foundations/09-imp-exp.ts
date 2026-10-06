import { heroes, type Hero } from "./data/heroes.data"

const getHeroById = (id: number): Hero => {

    const hero = heroes.find(hero => hero.id === id);
    if (!hero) {
        throw new Error(`Hero with id ${id} not found`);
    }
    return hero;
}

console.log(getHeroById(1));