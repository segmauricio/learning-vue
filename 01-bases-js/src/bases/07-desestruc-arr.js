const characters = ['Goku', 'Vegeta', 'Trunks', 'Goten']
/*
const g = characters[0]
const v = characters[1]
const t = characters[2]
*/
const [g, , t, goten, yamcha = 'No tiene valor'] = characters
console.log(g + ' - ' + t + ' - ' + goten + ' - ' + yamcha);

const returnArray = () => {
    return ['ABC' + ' - ' + 123]
}

const [letras, numeros] = returnArray();
console.log(letras, numeros);

const returnArray2 = ([letters, numbers]) => {
    return [letters, numbers]
}
const [letters, numbers] = returnArray2(['XYZ', 456]);
console.log(letters, numbers);