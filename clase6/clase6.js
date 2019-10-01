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

function imprimirNombreEnMayuscula({ nombre }) {
    var nombre = nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombreEnMayuscula(carlos)
imprimirNombreEnMayuscula(federico)
