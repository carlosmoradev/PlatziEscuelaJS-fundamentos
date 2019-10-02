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

var personas = [pedro, vicky, Josefa, Proculo]

for (var i = 0; i < personas.length; i++) {
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura} mts` )
}