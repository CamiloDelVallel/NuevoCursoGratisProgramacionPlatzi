const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

const jugadores = []

class Jugador {
    constructor(id){
        this.id = id
    }

    asignarMokepon(mokepon){
        this.mokepon = mokepon
    }
}

class Mokepon {
    constructor(nombre) {
        this.id = id
        console.log(id)
    }

    //asignarMokepon(mokepon){
    //    this.mokepon = mokepon
    //    console.log(mokepon)

    //}
}

app.get("/unirse", (req, res)=> {
    const id = `${Math.random()}`    
    
    const jugador = new Jugador(id)

    jugadores.push(jugador)

    res.setHeader("Access-Control-Allow-Origin", "*")

    res.send(id)
    console.log(id)
    console.log(jugadores)
})

app.post("/mokepon/:jugadorId", (req, res)=>{
    const jugadorId = req.params.jugadorId || ""
    const nombre = req.body.mokepon || ""
    const mokepon = new Mokepon(nombre)
    
    const jugadorIndex = jugadores.findIndex((jugador) => 
    jugadorId == jugador.id)

    if (jugadorIndex >= 0){
        jugadores[jugadorIndex].asignarMokepon(makapon)
    }

    console.log(jugadores)
    console.log(jugadorId)
    res.end()
})

    app.listen(8080, () => {
        console.log("Servidor funcionando")
})
