function saludar(nombre) {
    return 'Hola ' + nombre
}
const nombre = 'Tony'

console.log(saludar(nombre));

//* Arrow function
/*Opcion 1
const saludar2 = (xyz) => {
    return `Hola ${xyz}`
}*/

//Opcion 2
const saludar2 = (xyz) => `Hola ${xyz}`
console.log(saludar2);

const getUser = () => {
    return {
        uid: 'ABC1234',
        username: 'Pedro'
    }
}
console.log(getUser());

const heroes = [{
    id: 1,
    name: 'Batman'
    },
    {
    id: 2,
    name: 'Superman'
}]

const existe = heroes.some( (heroe) => heroe.id === 1)
console.log(existe);

const existe2 = heroes.find( (heroe) => heroe.id === 1)
console.log(existe2);