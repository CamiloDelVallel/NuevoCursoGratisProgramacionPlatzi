function iniciarJuego(){
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click",seleccionarMascotaJugador)
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

function aleatorio(min,max){
    return Math.floor((Math.random() * (max-min+1) + min))
}

window.addEventListener("load",iniciarJuego)