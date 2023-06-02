const person = {
    name: 'Tony',
    age: 45, 
    codeName: 'Iron Man',
    //power: 'Dinero'
}
console.log(person.name);
console.log(person.age);
console.log(person.codeName);
console.log('---------------');

const {age, name, codeName, power = 'No tiene poder'} = person;
console.log(name);
console.log(age);
console.log(codeName);
console.log(power);
console.log('---------------');

const createHero = ({name, age, codeName, power}) =>
    //const {name, age, codeName, power} = person
    //Ponemos () en vez de un return
    ({
        id: 1234567,
        //name: name,
        name,
        //age: age,
        age,
        //codeName: codeName,
        codeName,
        //power: power
        power
    })

console.log(createHero(person));