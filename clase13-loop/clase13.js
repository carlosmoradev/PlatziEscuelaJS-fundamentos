var pedro = {
    nombre: 'Pedro',
    apellido: 'Perez',
    edad: 28,
    peso: 75
}

// function aumentarPeso(persona){
//     return persona.peso += 200
// }

const variacionPeso = 0.2

const aumentarPeso = persona =>  persona.peso += variacionPeso  //* Arrow function equivalente a la funcion anterior

const reducePeso = persona => persona.peso += variacionPeso

console.log(`Al inicio del año ${pedro.nombre} pesa ${pedro.peso}.`)


for (var i = 1; i <= 365; i++) {
    var random = Math.random()

    // if (random < 0.25 ){
        //aumenta de peso
        // aumentarPeso(pedro)
    // } else if (random < 0.50){
        //Adelgaza
        // reducePeso(pedro)
    random < 0.25 ? aumentarPeso(pedro):reducePeso(pedro)
}


console.log(`Al final del año ${pedro.nombre} pesa ${pedro.peso.toFixed(1)} Kg.`)