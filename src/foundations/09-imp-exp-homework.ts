import { heroes, type Hero, Owner} from "./data/heroes.data"

export const getHeroByOwner = (owner: Owner): Hero[] => {

    const heroesByOwner = heroes.filter(hero => hero.owner === owner);
    if (heroesByOwner.length === 0) {
        throw new Error(`No heroes found for owner ${owner}`);
    }
    return heroesByOwner;
}