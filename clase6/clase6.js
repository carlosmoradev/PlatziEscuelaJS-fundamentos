var carlos = {
    nombre: 'Carlos',
    Apellido: 'mora',
    edad: 40
}

var federico = {
    nombre: 'Federico',
    Apellido: 'Mora',
    Edad: 13
}

function imprimirNombreEnMayuscula(nombre) {
    nombre = nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombreEnMayuscula(carlos.nombre)
imprimirNombreEnMayuscula(federico.nombre)
