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
let ataqueJugador = []
let ataqueEnemigo =[]
let opcionDeMokepones
let inputHipoge
let inputCapipepo
let inputRatigueya
let mascotaJugador
let ataquesMokepon
let botonFuego
let botonAgua
let botonTierra
let botones=[]
let ataquesMokeponEnemigo
let indexAtaqueJugador
let indexAtaqueEnemigo


let victoriasJugador = 0
let victoriasEnemigo = 0

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
    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
    sectionSeleccionarAtaque.style.display = "flex"
    sectionSeleccionarMascota.style.display = "none"

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
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon

    })

    botonFuego = document.getElementById("boton-fuego")
    botonAgua= document.getElementById("boton-agua")
    botonTierra= document.getElementById("boton-tierra")
    botones = document.querySelectorAll(".BAtaque")
}

function secuenciaAtaque(){
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if(e.target.textContent === "🔥"){
                ataqueJugador.push("Fuego")
                console.log(ataqueJugador)
                boton.style.background = "#000000"
                boton.disabled=true
            } else if(e.target.textContent === "🌊"){
                ataqueJugador.push("Agua")
                console.log(ataqueJugador)
                boton.style.background = "#000000"
                boton.disabled=true

            } else {
                ataqueJugador.push("Tierra")
                console.log(ataqueJugador)
                boton.style.background = "#000000"
                boton.disabled=true

            }
            ataqueAleatorioEnemigo()
        })
    })
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(0,mokepones.length-1)
    
    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques
    secuenciaAtaque()

}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(0,mokepones.length-1)
    
    if(ataqueAleatorio==0 || ataqueAleatorio==1){
        ataqueEnemigo.push("Fuego")
    } else if (ataqueAleatorio==2 || ataqueAleatorio==3 ){
        ataqueEnemigo.push("Agua")
    } else {
        ataqueEnemigo.push("Tierra")
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea(){
    if(ataqueJugador.length === 5){
        batalla()
    }
    else {
    }
}

function indexAmbosOponentes(jugador, enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]

}

function batalla(){

    for (let i = 0; i < ataqueJugador.length; i++) {
        if(ataqueJugador[i]==ataqueEnemigo[i]){
            indexAmbosOponentes(i, i)
            crearMensaje()
        } else if((ataqueJugador[i]=="Fuego" && ataqueEnemigo[i]=="Tierra")||(ataqueJugador[i]=="Agua" && ataqueEnemigo[i]=="Fuego")||(ataqueJugador[i]=="Tierra" && ataqueEnemigo[i]=="Agua")){
            indexAmbosOponentes(i, i)
            crearMensaje()
            victoriasJugador++
            spanVidasJugador.innerHTML=victoriasJugador
        } else {
            indexAmbosOponentes(i, i)
            crearMensaje()
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML=victoriasEnemigo
        }
        revisarVidas()
    }
}


function revisarVidas(){
    if(victoriasEnemigo>victoriasJugador){
       crearMensajeFinal("Lo siento, perdiste")
    } else if(victoriasEnemigo<victoriasJugador){
        crearMensajeFinal("Ganaste, felicitaciones")
    } 
    else{
        crearMensajeFinal("Empataste")
    }
}

function crearMensaje(resultado){
    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal){
    sectionMensajes.innerHTML = resultadoFinal
    sectionReiniciar.style.display = "flex"
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min,max){
    return Math.floor((Math.random() * (max-min+1) + min))
}

window.addEventListener("load",iniciarJuego)