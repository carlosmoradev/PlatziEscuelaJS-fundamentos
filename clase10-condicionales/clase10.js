var pedro = {
    nombre: 'Pedro',
    apellido: 'Perez',
    edad: 30,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: true,
    guiarrista: false,
    drone: false
}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es: `)

    if (persona.ingeniero) {
        console.log('ingeniero')
    }

    if(persona.cocinero){
        console.log('cocinero')
    }

    if(persona.dj) {
        console.log('DJ')
    }

    if (persona.cantante){
        console.log('cantante')
    }

    if (persona.guitarrista) {
        console.log('guitarrista')
    }

    if (persona.drone) {
        console.log('Pilotea Drones')
    }

}

imprimirProfesiones(pedro)

function imprimirSiEsMayorDeEdad(persona) {
    if (persona.edad > 18){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}

imprimirSiEsMayorDeEdad(pedro)