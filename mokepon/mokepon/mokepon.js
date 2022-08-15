let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3
let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
let sectionReiniciar = document.getElementById("reiniciar")
let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
let sectionMensajes = document.getElementById("resultado")






function iniciarJuego(){
    sectionSeleccionarAtaque.style.display = "none"
    sectionReiniciar.style.display = "none"

    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click",seleccionarMascotaJugador)
    let botonFuego = document.getElementById("botonFuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua= document.getElementById("botonAgua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra= document.getElementById("botonTierra")
    botonTierra.addEventListener("click",ataqueTierra)

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)
}


function seleccionarMascotaJugador(){
    let inputHipoge=document.getElementById("Hipodoge")
    let inputCapipepo=document.getElementById("Capipepo")
    let inputRatigueya=document.getElementById("Ratigueya")
    let spanMascotaJugador=document.getElementById("mascota-jugador")

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
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")
    
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
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")
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
    let ataqueDelJugador = document.getElementById("ataques-del-jugador")
    let ataqueDelEnemigo = document.getElementById("ataques-del-enemigo")
    
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

    let botonFuego = document.getElementById("botonFuego")
    botonFuego.disabled = true
    let botonAgua= document.getElementById("botonAgua")
    botonAgua.disabled = true
    let botonTierra= document.getElementById("botonTierra")
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "flex"
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min,max){
    return Math.floor((Math.random() * (max-min+1) + min))
}

window.addEventListener("load",iniciarJuego)