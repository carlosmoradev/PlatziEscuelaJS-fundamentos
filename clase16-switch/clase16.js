let signo = prompt('¿Cual es tu signo?')

const MENSAJE_PERSONALIZADO = (` Querido ${signo}:  SALUD: Los astros te sonríen. DINERO: Los astros se rien. SEXO: Los astros se descojonan!!.`)


switch(signo){
    case 'acuario':
        console.log(MENSAJE_PERSONALIZADO)
    break

    case 'piscis':
        console.log(MENSAJE_PERSONALIZADO)
    break
    
    case 'virgo':
        console.log(MENSAJE_PERSONALIZADO)
    break
    
    case 'aries':
        console.log(MENSAJE_PERSONALIZADO)
    break
    
    case 'leo':
        console.log(MENSAJE_PERSONALIZADO)
    break
    
    case 'geminis':
        console.log(MENSAJE_PERSONALIZADO)
    break
    
    case 'escorpio':
        console.log(MENSAJE_PERSONALIZADO)
    break
    
    default:
        console.log('Estas completamente jodido')
    break
    
}

