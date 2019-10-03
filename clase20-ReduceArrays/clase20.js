var pedro = {
    nombre: 'pedro',
    apellido: 'perez',
    altura: 1.68,
    cantidadDeLibros: 182
}

var vicky = {
    nombre: 'vicky',
    apellido: 'Lopez',
    altura: 1.57,
    cantidadDeLibros: 90
}

var Josefa = {
    nombre: 'Josefa',
    apellido: 'pelaez',
    altura: 1.41,
    cantidadDeLibros: 18
}

var Proculo = {
    nombre: 'Proculo',
    apellido: 'Esperolo',
    altura: 1.78,
    cantidadDeLibros: 12
}

const esAlta = persona => persona.altura > 1.7
const esBaja = ({altura}) => altura <= 1.7

const pasarAlturaACms = persona => persona.altura *= 100


var personas = [pedro, vicky, Josefa, Proculo]

var personasAltas = personas.filter(esAlta)

var personasBajas = personas.filter(esBaja)

var personasACms = personas.map(pasarAlturaACms)


var acum = 0

for (var i = 0; i < personas.length; i++) {
    acum = acum + personas[i].cantidadDeLibros
}
console.log(`En total todos tienen ${acum} libros (en ciclo for)`)


const reducer = (acum, persona) => acum + persona.cantidadDeLibros

var totalDeLibros = personas.reduce(reducer, 0)  //!recibe un reducer y el valor inicial del acumulador

console.log(`En total todos tienen ${totalDeLibros} libros (en reducer)`)
// console.log(personasAltas)
// console.log(personasACms)