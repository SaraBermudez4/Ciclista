import Persona from './persona.js'

class Ciclista extends Persona {
    constructor() {
        super()
        this.nombre = ""
        this.registroTiempos = {
            carrera1: 0,
            carrera2: 0,
            carrera3: 0,
            carrera4: 0,
            carrera5: 0
        }
        this.promedio = 0
    }

    correr() {
        console.log("corriendo")
    }

    registrarTiempo(carrera, tiempo) {
        this.registroTiempos[carrera] = tiempo
    }

    promedioTiempo() {
        let {
            carrera1,
            carrera2,
            carrera3,
            carrera4,
            carrera5
        } = this.registroTiempos

        this.promedio = Math.floor((parseInt(carrera1,10) + parseInt(carrera2,10) + parseInt(carrera3,10) + parseInt(carrera4,10) + parseInt(carrera5,10)) / 5 )
    }
}

export default Ciclista