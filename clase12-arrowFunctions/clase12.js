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

const MAYORIA_EDAD = 18

// var esMayorDeEdad = function(persona) {
//     return persona.edad >= MAYORIA_EDAD
// }

const esMayorDeEdad = (persona) => { //! funcion igual a la anterior como arrow function
    return persona.edad >= MAYORIA_EDAD  
}


function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}

imprimirSiEsMayorDeEdad(pedro)