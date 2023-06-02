import heroes, {owners} from '../data/heroes'
//import superheroes from './data/heroes'

//console.log(superheroes);
//console.log(owners);
//console.log(heroes);

export const getHeroByid = (id) =>  heroes.find( (heroes) => heroes.id === id)
//console.log(getHeroByid(2));

export const getHeroesByOwner = (owner) =>  heroes.filter( (heroes) => heroes.owner === owner)
//console.log(getHeroByOwner('DC'));
