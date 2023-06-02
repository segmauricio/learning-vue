/*
console.log('Inicio');
new Promise( (resolve, reject) => {
    console.log('Cuerpo de la promesa');
    //resolve('Promesa resuelta', true )
    reject('Promesa resuelta con error')

})
.then( msg => console.log(msg) )
.catch(err => console.log(err) );
console.log('Fin');
*/

import { getHeroByid } from "./bases/08-import-export"

const getHeroByIdAsync = (id) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroByid(id)

            if(hero){
                resolve(hero)
            }else{
                reject('Heroe no encontrado')
            }
        }, 1000)
    })
}

getHeroByIdAsync(1)
.then(h => console.log(`El heroe es ${h.name}`))
    .catch(err => console.log(err))
