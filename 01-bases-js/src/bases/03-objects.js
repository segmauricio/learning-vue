//* Object Literal
const persona = {
    nombre: 'Tony', 
    apellido: 'Stark', 
    edad: '45',
    direccion: {
        ciudad: 'New York',
        zip: 123456,
        lat: 14.5633,
        lng: 12.3421,
    }
}
console.log(persona);

const persona2 = { ...persona};
persona2.nombre = 'Peter'

console.log(persona2);








