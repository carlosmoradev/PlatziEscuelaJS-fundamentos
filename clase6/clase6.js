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
    var nombre = persona.apellido.toUpperCase()
    console.log(nombre)
}

imprimirNombreEnMayuscula(carlos)
imprimirNombreEnMayuscula(federico)
