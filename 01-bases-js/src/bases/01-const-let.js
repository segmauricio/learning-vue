const nombre = 'Tony'
const apellido = 'Stark'

if (true){
    console.log(nombre);
}
console.log(nombre, apellido)

const nombreCompleto = nombre + ' ' + apellido
const nombreCompleto2 = `${nombre} ${apellido}`
console.log(nombreCompleto);
console.log(`Resultado: ${1 + 5}`);

function getSaludo(nombre){
    return 'Hola ' + nombre
}
console.log(`Este es un texto: ${getSaludo(nombre)}`);