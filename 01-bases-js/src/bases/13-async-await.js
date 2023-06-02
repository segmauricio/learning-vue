const miPromesa = () => {
    return new Promise( resolve => {
        setTimeout(() => {
            resolve('Tenemos un valor en la promesa')
        }, 3000);
    })
}

const medirTiempoAsync = async() => {
    try {
        console.log('Inicio')
        //miPromesa().then(console.log)
        const respuesta = await miPromesa()
        console.log(respuesta);
        console.log('Fin')

    return 'Fin de medirTiempoAsync'
    
    } catch (error) {
        throw 'Error en medirTiempoAsync'
        //return 'Catch en  medirTiempoAsync'
    }
    
}

medirTiempoAsync()
    .then( valor => console.log(valor) )
    .catch( err => console.log(err) )
