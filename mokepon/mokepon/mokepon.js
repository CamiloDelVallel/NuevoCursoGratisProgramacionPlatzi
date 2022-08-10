function iniciarJuego(){
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click",seleccionarMascotaJugador)
}

function seleccionarMascotaJugador(){
    if(document.getElementById("Hipodoge").checked==true){
        return alert("Elegiste Hipodoge")
    }
    else if(document.getElementById("Capipepo").checked==true){
        return alert("Elegiste Capipepo")
    }
    else {
        return alert("Elegiste Ratigueya")
    }
}



window.addEventListener("load",iniciarJuego)