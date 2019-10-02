var pedro = {
    nombre: 'pedro',
    apellido: 'perez',
    altura: 1.68
}

var vicky = {
    nombre: 'vicky',
    apellido: 'Lopez',
    altura: 1.57
}

var Josefa = {
    nombre: 'Josefa',
    apellido: 'pelaez',
    altura: 1.41
}

var Proculo = {
    nombre: 'Proculo',
    apellido: 'Esperolo',
    altura: 1.78
}

const esAlta = persona => persona.altura > 1.7
const esBaja = ({altura}) => altura <= 1.7

var personas = [pedro, vicky, Josefa, Proculo]

var personasAltas = personas.filter(esAlta)

var personasBajas = personas.filter(esBaja)

console.log(personasAltas)
console.log(personasBajas)