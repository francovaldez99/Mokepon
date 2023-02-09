let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
let botonMascotaJugador = document.getElementById("boton-mascota")
let botonFuego  =document.getElementById("boton-fuego")
let botonAgua  = document.getElementById("boton-agua")
let botonTierra  = document.getElementById("boton-tierra")
let botonReiniciar = document.getElementById("reiniciar")
//let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
let sectionSeleccionarMascota= document.getElementById("seleccionar-mascota")
let inputHipodoge = document.getElementById("hipodoge")
let inputCapipepo = document.getElementById("capipepo")
let inputRatigueya = document.getElementById("ratigueya")
let spanMascotaJugador = document.getElementById("mascota-jugador")


let ataqueJugador;
let ataqueEnemigo;
let vidasJugador=3;
let vidasEnemigo=3;

function iniciarJuego() {
    sectionSeleccionarAtaque.style.display="none"
    botonReiniciar.style.display ="none"
    botonMascotaJugador.addEventListener("click" ,seleccionarMascotaJugador)
    botonFuego.addEventListener("click" , ataquefuego)
    
    botonAgua.addEventListener("click" , ataqueagua)
    
    botonTierra.addEventListener("click" , ataquetierra)
   

    botonReiniciar.addEventListener("click" , reiniciarJuego)
}



function seleccionarMascotaJugador() {
    sectionSeleccionarAtaque.style.display="flex"
    sectionSeleccionarMascota.style.display="none"
    let labelHipodoge = document.getElementById('label-hipodoge')
    let labelCapipepo = document.getElementById('label-capipepo')
    let labelRatigueya = document.getElementById('label-ratigueya')

    let contenedorImgJugador =document.getElementById("contenedor-img-jugador")
    
  

    if (inputHipodoge.checked) {
        
        spanMascotaJugador.innerHTML ="Hipodoge"
        let imgjugador = document.createElement("img")
         imgjugador.src ="img/descarga.jpg"
         imgjugador.style.height="140px"
        contenedorImgJugador.appendChild(imgjugador)
       

    }else if (inputCapipepo.checked) {
     
        spanMascotaJugador.innerHTML ="Capipepo"
        let imgjugador = document.createElement("img")
        imgjugador.src ="img/capipepo.jpg"
        contenedorImgJugador.appendChild(imgjugador)
        imgjugador.style.height="140px"
        imgjugador.style.transform="scaleX(-1)"
    } else if (inputRatigueya.checked) {
    
        spanMascotaJugador.innerHTML ="Ratigueya"
        let imgjugador = document.createElement("img")
        imgjugador.src ="img/ratigueya.jpg"
        contenedorImgJugador.appendChild(imgjugador)
        imgjugador.style.height="140px"
        imgjugador.style.transform="scaleX(-1)"
   
    }
    
      
    seleccionarMascotaEnemigo()
}
 
function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(1,3);
    let contenedorImgEnemigo =document.getElementById("contenedor-img-enemigo");

    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")
    if (mascotaAleatoria === 1) {
        spanMascotaEnemigo.innerHTML = "Hipodoge"
        let imgEnemigo= document.createElement("img")
        imgEnemigo.src ="img/descarga.jpg"
        imgEnemigo.style.height="140px"
        imgEnemigo.style.transform="scaleX(-1)"
        contenedorImgEnemigo.appendChild(imgEnemigo)
   
    }else if (mascotaAleatoria === 2 ) {

      
      spanMascotaEnemigo.innerHTML = "Capipepo"
      let imgEnemigo= document.createElement("img")
      imgEnemigo.src ="img/capipepo.jpg"
      imgEnemigo.style.height="140px"
      contenedorImgEnemigo.appendChild(imgEnemigo)

 
    } else  {
      
        spanMascotaEnemigo.innerHTML = "Ratigueya"
        let imgEnemigo= document.createElement("img")
        imgEnemigo.src ="img/ratigueya.jpg"
        imgEnemigo.style.height="140px"
        contenedorImgEnemigo.appendChild(imgEnemigo)

   
    }
}
function ataquefuego() {
    ataqueJugador = "FUEGO🔥"

    ataqueAleatorioEnemigo()
}
function ataqueagua() {
    ataqueJugador = "AGUA🌊"
   
    ataqueAleatorioEnemigo()

}
function ataquetierra() {
    ataqueJugador = "TIERRA🌴"
 
    ataqueAleatorioEnemigo()

}
function  ataqueAleatorioEnemigo(){
let ataqueAleatorio = aleatorio(1,3)
    if (ataqueAleatorio === 1) {
        ataqueEnemigo = "FUEGO🔥"
    }else if (ataqueAleatorio ===2) {
        ataqueEnemigo = "AGUA🌊"
    } else {
        ataqueEnemigo = "TIERRA🌴"
        
    }
    crearMensaje()
}
function crearMensaje() {
    let sectionMensajes = document.getElementById("mensajes")
  
    let parrafo = document.createElement("p")
    parrafo.innerHTML = `Tu mascota ataco con ${ataqueJugador}  ,el enemigo ataco con ${ataqueEnemigo}  ➡️ ${combate()} `
    setTimeout(() => {
        parrafo.style.display ="none"
       
    }, 1500);
    sectionMensajes.appendChild(parrafo)
}
function combate() {
    let spanVidasJugador =document.getElementById("vidas-jugador")
    let spanVidasEnemigo =document.getElementById("vidas-enemigo")

     if (ataqueJugador === ataqueEnemigo) {
      
        return "EMPATE"

    }else if (ataqueJugador == "FUEGO🔥" && ataqueEnemigo == "TIERRA🌴") {
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML=`${vidas(vidasEnemigo)}`;
        
        return revisarVidas() ||  "GANASTE"

    }else if (ataqueJugador == "AGUA🌊" && ataqueEnemigo == "FUEGO🔥") {
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML=`${vidas(vidasEnemigo)}`;
        return revisarVidas() ||  "GANASTE"


        
    }else if (ataqueJugador == "TIERRA🌴" && ataqueEnemigo == "AGUA🌊") {
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML=`${vidas(vidasEnemigo)}`;
        return revisarVidas() ||  "GANASTE"

    }else{
        vidasJugador--;
        spanVidasJugador.innerHTML=`${vidas(vidasJugador)}`;
        return revisarVidas() ||  "PERDISTE"


    }
}
function revisarVidas() {
    if (vidasEnemigo===0) {
        //Ganamos
        setTimeout(() => {
            crearMensajeFinal("FELICITACIONES! GANASTE🥳")
            
        }, 1500);

    }else if (vidasJugador===0) {
        //perdimos
        setTimeout(() => {
            crearMensajeFinal("LO SIENTO! PERDISTE😞")
            
        }, 1500);
    }else return false

}
function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById("resultado-final")
    let botonReiniciar = document.getElementById("reiniciar")
    let botonesAtaque = document.getElementById("botones-ataque")
    botonReiniciar.style.display ="block"
    
    let h3 = document.createElement("h3")
    h3.innerHTML = resultadoFinal
    sectionMensajes.appendChild(h3)
    //desabilitar botones
    let botonFuego  =document.getElementById("boton-fuego")
    botonFuego.disabled=true
    let botonAgua  = document.getElementById("boton-agua")
    botonAgua.disabled=true
    let botonTierra  = document.getElementById("boton-tierra")
    botonTierra.disabled=true
    botonesAtaque.style.display="none"
}
const aleatorio=(min , max)=> Math.floor(Math.random()* (max - min +1 ) +min)
function reiniciarJuego() {
    location.reload()
}
window.addEventListener("load" , iniciarJuego)
function vidas(vidasplayer) {
    if (vidasplayer===3) {
        return "💗💗💗"
    }else if (vidasplayer===2) {
        return "💗💗"
    }else if (vidasplayer===1) {
        return "💗"
    }else return "💔"
}
    
        