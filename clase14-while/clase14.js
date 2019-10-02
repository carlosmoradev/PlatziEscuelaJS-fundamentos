var pedro = {
    nombre: 'Pedro',
    apellido: 'Perez',
    edad: 28,
    peso: 75
}

// function aumentarPeso(persona){
//     return persona.peso += 200
// }

const variacionPeso = 0.3
const META = pedro.peso - 3

const aumentarPeso = persona =>  persona.peso += variacionPeso  //* Arrow function equivalente a la funcion anterior

const reducePeso = persona => persona.peso -= variacionPeso

const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4
var dias = 0

console.log(`Al inicio del año ${pedro.nombre} pesa ${pedro.peso}.`)


while (pedro.peso > META) {
    // debugger
    if (comeMucho()) {
        aumentarPeso(pedro)
    } 
    if (realizaDeporte) {
        reducePeso(pedro)
    }
    dias += 1
}


console.log(`pasaron ${dias} hasta que  ${pedro.nombre} quedo pesando ${pedro.peso.toFixed(1)} Kg.`)