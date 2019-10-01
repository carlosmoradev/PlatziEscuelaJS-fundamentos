var carlos = {
    nombre: 'Carlos',
    apellido: 'mora',
    edad: 40
}

var federico = {
    nombre: 'Federico',
    apellido: 'Mora',
    edad: 13
}

function imprimirNombreEnMayuscula(persona) {
    //var nombre = persona.nombre
    var { nombre } = persona //!es la misma declaracion de la linea anterior
    console.log(nombre.toUpperCase())
}

function imprimirNombreEdad(persona) {
    let {nombre} = persona
    let {edad}  = persona
    console.log(`Hola, soy ${nombre} y tengo ${edad} años`)
}

imprimirNombreEdad(federico)

// imprimirNombreEnMayuscula(carlos)
// imprimirNombreEnMayuscula(federico)
// imprimirNombreEnMayuscula({nombre: 'Pedro'})
