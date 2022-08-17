const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
const sectionMensajes = document.getElementById("resultado")

const botonMascotaJugador = document.getElementById("boton-mascota")
const botonReiniciar = document.getElementById("boton-reiniciar")

const spanMascotaJugador=document.getElementById("mascota-jugador")

const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const ataqueDelJugador = document.getElementById("ataques-del-jugador")
const ataqueDelEnemigo = document.getElementById("ataques-del-enemigo")
const contenedorTarjetas = document.getElementById("contenedor-tarjetas")
const contenedorAtaques=document.getElementById("contenedor-ataques")

let mokepones = []
let ataqueJugador
let ataqueEnemigo
let opcionDeMokepones
let inputHipoge
let inputCapipepo
let inputRatigueya
let mascotaJugador
let ataquesMokepon
let botonFuego
let botonAgua
let botonTierra



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
let capipepo = new Mokepon("Capipepo", "./mokepon/Imagenes/mokepons_mokepon_capipepo_attack.webp", 5)
let ratigueya = new Mokepon("Ratigueya", "./mokepon/Imagenes/mokepons_mokepon_ratigueya_attack.webp", 5)

hipodoge.ataques.push(
    { nombre: "🌊", id: "boton-agua"},
    { nombre: "🌊", id: "boton-agua"},
    { nombre: "🌊", id: "boton-agua"},
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "🌿", id: "boton-tierra"},
)

capipepo.ataques.push(
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

mokepones.push(hipodoge, capipepo, ratigueya)

function iniciarJuego(){
    sectionSeleccionarAtaque.style.display = "none"
    sectionReiniciar.style.display = "none"

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre}>
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDeMokepones
    
    inputHipoge=document.getElementById("Hipodoge")
    inputCapipepo=document.getElementById("Capipepo")
    inputRatigueya=document.getElementById("Ratigueya")


    })

    botonMascotaJugador.addEventListener("click",seleccionarMascotaJugador)
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarMascotaJugador(){

    if(inputHipoge.checked==true){
        spanMascotaJugador.innerHTML=inputHipoge.id
        mascotaJugador = inputHipoge.id
    } else if(inputCapipepo.checked==true){
        spanMascotaJugador.innerHTML=inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } else if(inputRatigueya.checked==true){
        spanMascotaJugador.innerHTML=inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } else {
        return alert("No Elegiste nada")
    }
    
    seleccionarMascotaEnemigo()
    sectionSeleccionarAtaque.style.display = "flex"
    sectionSeleccionarMascota.style.display = "none"

    extraerAtaques(mascotaJugador)
}

function extraerAtaques(mascotaJugador){
    let ataques 
    for (let i = 0; i < mokepones.length; i++) {
        if(mascotaJugador === mokepones[i].nombre){
            ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque)=>{
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-de-ataque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon

    })

    botonFuego = document.getElementById("boton-fuego")
    botonAgua= document.getElementById("boton-agua")
    botonTierra= document.getElementById("boton-tierra")

    botonFuego.addEventListener("click", ataqueFuego)
    botonAgua.addEventListener("click", ataqueAgua)
    botonTierra.addEventListener("click",ataqueTierra)

}

function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(0,mokepones.length-1)
    
    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre

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