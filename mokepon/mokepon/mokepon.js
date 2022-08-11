let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click",seleccionarMascotaJugador)
    let botonFuego = document.getElementById("botonFuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua= document.getElementById("botonAgua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra= document.getElementById("botonTierra")
    botonTierra.addEventListener("click",ataqueTierra)
}


function seleccionarMascotaJugador(){
    let inputHipoge=document.getElementById("Hipodoge")
    let inputCapipepo=document.getElementById("Capipepo")
    let inputRatigueya=document.getElementById("Ratigueya")
    let spanMascotaJugador=document.getElementById("mascotaJugador")

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
}

function seleccionarMascotaEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById("mascotaEnemigo")
    
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
    let spanVidasJugador = document.getElementById("vidasJugador")
    let spanVidasEnemigo = document.getElementById("vidasEnemigo")

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
}

function crearMensaje(resultado){
    let sectionMensajes = document.getElementById("mensajes")
    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + ", la mascota del enemigo atacó con " + ataqueEnemigo + " " + resultado

    sectionMensajes.appendChild(parrafo)
}


function aleatorio(min,max){
    return Math.floor((Math.random() * (max-min+1) + min))
}

window.addEventListener("load",iniciarJuego)