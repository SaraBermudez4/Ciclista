import {sumar, pi} from './js/functions.js'
import Ciclista from './js/ciclista.js'

const ciclistas = []

/*
let ciclista = new CiclistaCarlos();
ciclista.nombre = "Juan Carlos"
ciclista.registrarTiempo("carrera2", 80)
//let promedio = ciclista.registroTiempos()
console.log(ciclista)
//console.log(promedio)
console.log(sumar(2,pi))
console.log(ciclista.correr())
*/

function llenarArregloCiclistas(){
    let juan = new Ciclista()
    juan.nombre = "Juan Perez"
    registrarTiempos(juan)
    ciclistas.push(juan)
}

function registrarTiempos(c){
    for(let i=1; i<=5; i++){
        c.registrarTiempo('carrera'+ i, Math.random()*100)
    }
}

window.addEventListener('load', e => {
    llenarArregloCiclistas()
    console.log(ciclistas)
})

/*llenarArregloCiclistas()
function llenarArregloCiclistas(){
    console.log("Llenando arreglo")
}*/

