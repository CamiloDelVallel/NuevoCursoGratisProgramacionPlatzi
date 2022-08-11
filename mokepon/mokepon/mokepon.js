let ataqueJugador
let ataqueEnemigo

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
    document.getElementById("ataqueJugador").innerHTML=ataqueJugador
    AtaqueAleatorioEnemigo()
    batalla(ataqueJugador,ataqueEnemigo)
}

function ataqueAgua(){
    ataqueJugador = "Agua"
    document.getElementById("ataqueJugador").innerHTML=ataqueJugador
    AtaqueAleatorioEnemigo()
    batalla(ataqueJugador,ataqueEnemigo)
}

function ataqueTierra(){
    ataqueJugador = "Tierra"
    document.getElementById("ataqueJugador").innerHTML=ataqueJugador
    AtaqueAleatorioEnemigo()
    batalla(ataqueJugador,ataqueEnemigo)
}

function AtaqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    let spanAtaqueEnemigo = document.getElementById("ataqueEnemigo")
    
    if(ataqueAleatorio==1){
        ataqueEnemigo="Fuego"
        spanAtaqueEnemigo.innerHTML = "Fuego"        
    } else if (ataqueAleatorio==2){
        ataqueEnemigo="Agua"
        spanAtaqueEnemigo.innerHTML = "Agua"
    } else {
        ataqueEnemigo="Tierra"
        spanAtaqueEnemigo.innerHTML = "Tierra"
    }
    crearMensaje()

}

function batalla(ataqueJugador,ataqueEnemigo){
    let spanResultadoBatalla = document.getElementById("resultadoBatalla")
    if(ataqueJugador==ataqueEnemigo){
        spanResultadoBatalla.innerHTML = "Empate"
    } else if((ataqueJugador=="Fuego" && ataqueEnemigo=="Tierra")||(ataqueJugador=="Agua" && ataqueEnemigo=="Fuego")||(ataqueJugador=="Tierra" && ataqueEnemigo=="Agua")){
        spanResultadoBatalla.innerHTML = "Ganaste"
    } else if((ataqueJugador=="Fuego" && ataqueEnemigo=="Agua")||(ataqueJugador=="Agua" && ataqueEnemigo=="Tierra")||(ataqueJugador=="Tierra" && ataqueEnemigo=="Fuego")){
        spanResultadoBatalla.innerHTML = "Perdiste"
    } else {alert("ERROR")
    }
}

function crearMensaje(){
    let sectionMensajes = document.getElementById("mensajes")
    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + ", la mascota del enemigo atacó con " + ataqueEnemigo

    sectionMensajes.appendChild(parrafo)
}




function aleatorio(min,max){
    return Math.floor((Math.random() * (max-min+1) + min))
}

window.addEventListener("load",iniciarJuego)