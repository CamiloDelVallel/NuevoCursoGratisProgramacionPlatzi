const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
const sectionMensajes = document.getElementById("resultado")

const botonMascotaJugador = document.getElementById("boton-mascota")
const botonFuego = document.getElementById("botonFuego")
const botonAgua= document.getElementById("botonAgua")
const botonTierra= document.getElementById("botonTierra")
const botonReiniciar = document.getElementById("boton-reiniciar")

const inputHipoge=document.getElementById("Hipodoge")
const inputCapipepo=document.getElementById("Capipepo")
const inputRatigueya=document.getElementById("Ratigueya")
const spanMascotaJugador=document.getElementById("mascota-jugador")

const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const ataqueDelJugador = document.getElementById("ataques-del-jugador")
const ataqueDelEnemigo = document.getElementById("ataques-del-enemigo")

let mokepones = []
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vida){
    this.nombre = nombre
    this.foto = foto
    this.vida = vida
    this.ataques = []
    }
}

let hipodoge = new Mokepon("Hipodoge", "./mokepon/Imagenes/mokepons_mokepon_hipodoge_attack.webp", 5)
let capepipo = new Mokepon("Capepipo", "./mokepon/Imagenes/mokepons_mokepon_capipepo_attack.webp", 5)
let ratigueya = new Mokepon("Ratigueya", "./mokepon/Imagenes/mokepons_mokepon_ratigueya_attack.webp", 5)

mokepones.push(hipodoge, capepipo, ratigueya)

hipodoge.ataques.push(
    { nombre: "🌊", id: "boton-agua"},
    { nombre: "🌊", id: "boton-agua"},
    { nombre: "🌊", id: "boton-agua"},
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "🌿", id: "boton-tierra"},
)

capepipo.ataques.push(
    { nombre: "🌿", id: "boton-tierra"},
    { nombre: "🌿", id: "boton-tierra"},
    { nombre: "🌿", id: "boton-tierra"},
    { nombre: "🌊", id: "boton-agua"},
    { nombre: "🔥", id: "boton-fuego"},
)

ratigueya.ataques.push(
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "🌿", id: "boton-tierra"},
    { nombre: "🌊", id: "boton-agua"},
)


function iniciarJuego(){
    sectionSeleccionarAtaque.style.display = "none"
    sectionReiniciar.style.display = "none"
    botonMascotaJugador.addEventListener("click",seleccionarMascotaJugador)
    botonFuego.addEventListener("click", ataqueFuego)
    botonAgua.addEventListener("click", ataqueAgua)
    botonTierra.addEventListener("click",ataqueTierra)
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarMascotaJugador(){

    if(inputHipoge.checked==true){
        spanMascotaJugador.innerHTML="Hipodoge"
    } else if(inputCapipepo.checked==true){
        spanMascotaJugador.innerHTML="Capipepo"
    } else if(inputRatigueya.checked==true){
        spanMascotaJugador.innerHTML="Ratigueya"
    } else {
        return alert("No Elegiste nada")
    }
    
    seleccionarMascotaEnemigo()
    sectionSeleccionarAtaque.style.display = "flex"
    sectionSeleccionarMascota.style.display = "none"
}

function seleccionarMascotaEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    
    if(ataqueAleatorio==1){
        spanMascotaEnemigo.innerHTML = "Hipodoge"        
    } else if (ataqueAleatorio==2){
        spanMascotaEnemigo.innerHTML = "Capipepo"
    } else {
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    }

}

function ataqueFuego(){
    ataqueJugador = "Fuego"
    AtaqueAleatorioEnemigo()
    batalla()
}

function ataqueAgua(){
    ataqueJugador = "Agua"
    AtaqueAleatorioEnemigo()
    batalla()
}

function ataqueTierra(){
    ataqueJugador = "Tierra"
    AtaqueAleatorioEnemigo()
    batalla()
}

function AtaqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    let spanAtaqueEnemigo = document.getElementById("ataqueEnemigo")
    
    if(ataqueAleatorio==1){
        ataqueEnemigo="Fuego"
    } else if (ataqueAleatorio==2){
        ataqueEnemigo="Agua"
    } else {
        ataqueEnemigo="Tierra"
    }

}


function batalla(){
    if(vidasEnemigo>0 && vidasJugador>0){
        if(ataqueJugador==ataqueEnemigo){
            crearMensaje("Empate")
        } else if((ataqueJugador=="Fuego" && ataqueEnemigo=="Tierra")||(ataqueJugador=="Agua" && ataqueEnemigo=="Fuego")||(ataqueJugador=="Tierra" && ataqueEnemigo=="Agua")){
            crearMensaje("Ganaste")
            vidasEnemigo--
            spanVidasEnemigo.innerHTML=vidasEnemigo
        } else {
            crearMensaje("Perdiste")
            vidasJugador--
            spanVidasJugador.innerHTML=vidasJugador
        }
        revisarVidas()
    } else {
        alert("Partida terminada")
    }
}

function revisarVidas(){
    if(vidasJugador==0){
       crearMensajeFinal("Lo siento, perdiste")
    } else if(vidasEnemigo==0){
        crearMensajeFinal("Ganaste, felicitaciones")
    } 
}

function crearMensaje(resultado){
    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal){
    sectionMensajes.innerHTML = resultadoFinal
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
    sectionReiniciar.style.display = "flex"
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min,max){
    return Math.floor((Math.random() * (max-min+1) + min))
}

window.addEventListener("load",iniciarJuego)