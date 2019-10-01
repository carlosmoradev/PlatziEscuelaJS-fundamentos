var carlos = {
    nombre: 'Carlos',
    apellido: 'mora',
    edad: 40
}

var federico = {
    nombre: 'Federico',
    apellido: 'Mora',
    Edad: 13
}

function imprimirNombreEnMayuscula(persona) {
    //var nombre = persona.nombre
    var { nombre } = persona //!es la misma declaracion de la linea anterior
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayuscula(carlos)
imprimirNombreEnMayuscula(federico)
imprimirNombreEnMayuscula({nombre: 'Pedro'})
