import { sumar, pi } from './js/functions.js'
import Ciclista from './js/ciclista.js'

var ciclistas = []
var modalCiclista

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

function llenarArregloCiclistas() {
    let juan = new Ciclista()
    juan.nombre = "Juan Perez"
    registrarTiempos(juan)
    juan.promedioTiempo()

    let pedro = new Ciclista()
    pedro.nombre = "Pedro del rio"
    registrarTiempos(pedro)
    pedro.promedioTiempo()

    let camila = new Ciclista()
    camila.nombre = "Camila Cardenaz"
    registrarTiempos(camila)
    camila.promedioTiempo()

    ciclistas.push(juan, pedro)
    ciclistas.unshift(camila) //Agregarlo al principio
    if (localStorage.getItem('ciclistas')) {
        ciclistas = JSON.parse(localStorage.getItem('ciclistas')).map(c =>
            Object.setPrototypeOf(c, Ciclista.prototype)
        )
    }
    console.log(ciclistas)
    //ciclistas.pop()       //borrar el ultimo elemento
    //ciclistas.splice(0,1) //index y cantidad de elementos
}

function registrarTiempos(c) {
    for (let i = 1; i <= 5; i++) {
        c.registrarTiempo('carrera' + i, Math.floor(Math.random() * 100))
    }
}
function pintarTablaCorredores(arregloCiclistas) {
    document.querySelector("#tbl-ciclistas tbody").innerHTML = ''
    arregloCiclistas.forEach((ciclista, index) => {
        document.querySelector("#tbl-ciclistas tbody").innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${ciclista.nombre}</td>
            <td>${ciclista.registroTiempos.carrera1} min</td>
            <td>${ciclista.registroTiempos.carrera2} min</td>
            <td>${ciclista.registroTiempos.carrera3} min</td>
            <td>${ciclista.registroTiempos.carrera4} min</td>
            <td>${ciclista.registroTiempos.carrera5} min</td>
            <td><a href class ="btn btn-link">Acciones</a></td>
        </tr>`
    })
}
function pintarPromedioCorredores(arregloCiclistas) {
    document.querySelector("#tbl-promedio-ciclistas tbody").innerHTML = ''
    arregloCiclistas.forEach((ciclista, index) => {
        document.querySelector("#tbl-promedio-ciclistas tbody").innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${ciclista.nombre}</td>
            <td>${ciclista.promedio} min</td>
        </tr>`
    })
}
window.addEventListener('load', e => {
    llenarArregloCiclistas()
    pintarTablaCorredores(ciclistas)
    pintarPromedioCorredores(ciclistas)
    //console.log(ciclistas)

    modalCiclista = new bootstrap.Modal(
        document.getElementById('modalAdicionarCiclista'),
        {
            keyboard: false
        }
    )
})

document.querySelector("#frm-ciclista").addEventListener("submit", e => {
    if (document.querySelector("#frm-ciclista").checkValidity()) {
        let corredor = new Ciclista()
        corredor.nombre = document.querySelector("#nombre_ciclista").value
        corredor.registroTiempos["carrera1"] = document.querySelector("#carrera_1_corredor").value
        corredor.registroTiempos["carrera2"] = document.querySelector("#carrera_2_corredor").value
        corredor.registroTiempos["carrera3"] = document.querySelector("#carrera_3_corredor").value
        corredor.registroTiempos["carrera4"] = document.querySelector("#carrera_4_corredor").value
        corredor.registroTiempos["carrera5"] = document.querySelector("#carrera_5_corredor").value
        ciclistas.push(corredor)
        corredor.promedioTiempo()
        pintarPromedioCorredores(ciclistas)
        pintarTablaCorredores(ciclistas)

        modalCiclista.toggle()
        localStorage.setItem('ciclistas', JSON.stringify(ciclistas))
    }
})

document.querySelector("#txt-buscar-ciclistas").addEventListener("keyup", e => {
    let parametrobuscqueda = document.querySelector("#txt-buscar-ciclistas").value

    let arregloBusqueda = ciclistas.filter(ciclista => {
        return ciclista.nombre.toLocaleLowerCase().indexOf(parametrobuscqueda.toLocaleLowerCase()) != -1
    })

    pintarTablaCorredores(arregloBusqueda)
})