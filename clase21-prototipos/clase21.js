function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

const LIMITE_ALTURA = 180

function estatura(){
    if (altura >= LIMITE_ALTURA){
        console.log('Soy alto')
    }else{
        console.log('Soy bajo')
    }
}

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function() {
    console.log(`Hola, soy ${this.nombre} ${this.apellido} y ${estatura}`)
}

var pedro = new Persona('Pedro', 'Pérez', 187)
// pedro.saludar()

var camilo = new Persona('Camilo', 'Jimenez', 180)
var federico = new Persona('federico', 'Mora', 170)