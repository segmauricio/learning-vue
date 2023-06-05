describe('Example Component', () => {
  test('Debe ser mayor a 10', () => {
    //Arreglar
    let value = 9

    //Estimula
    value = value+2

    //Observar el resultado
    /*
    if(value>10){
      // TODO: todo bien
    }else{
      throw `${value} no es mayor a 10`
    }*/
    expect(value).toBeGreaterThan(10)
  })
})