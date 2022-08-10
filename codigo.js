function aleatorio(min,max){
    return Math.floor((Math.random() * (max-min+1) + min))
}
function jugar(jugada){
    let resultado=""
    if(jugada==1){
        resultado ="piedra"
    } else if(jugada==2){
        resultado ="papel"
    } else if(jugada==3){
        resultado ="tijera"
    }
    else {
        resultado ="ERROR"
    }
    return resultado
}
//1 es piedra, 2 es papel, 3 es tijera
let pc=0
let jugador=0
let triunfos=0
let perdidas=0

while (triunfos < 3 && perdidas < 3){
    pc=aleatorio(1,3)
    jugador = prompt("Jugador, elije: 1 es piedra, 2 es papel, 3 es tijera")
    
    alert("PC elige " + jugar(pc))
    alert("Tú eliges "+ jugar(jugador))
    
    //Combate
    if(pc==jugador){
        alert("Empate")
    }
    else if((pc==1 && jugador==2)||(pc==2 && jugador==3)||(pc==3 && jugador==1)){
        alert("Ganaste")
        triunfos=triunfos + 1
    } else if((pc==1 && jugador==3)||(pc==2 && jugador==1)||(pc==3 && jugador==2)){
        alert("Perdiste")
        perdidas= perdidas + 1
    }
    else {alert("ERROR")
    }
}
alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces")
        
