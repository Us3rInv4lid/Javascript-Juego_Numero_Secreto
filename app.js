let numeroSecreto = 0;
let intentos = 5;
let numeroUsuario = 0;
let nroMaximo = 10;
let listaNrosOrteados = [];
function asignarTextoElemento(elemento, texto){
    let  elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
function verificarIntento() {
    numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if ((numeroUsuario != numeroSecreto) && (intentos > 0)) {
        if (numeroUsuario == 0) {
            asignarTextoElemento('p','Debes ingresar un valor mayor a 0');
            limpiarCaja();
        }
        else if (numeroUsuario > numeroSecreto) {
            intentos--;
            asignarTextoElemento('p',`Fallaste, el número secreto es menor. Te quedan ${intentos} ${(intentos > 1) ? 'intentos' : 'intento'}.`); 
        limpiarCaja();
        }
        else {
            intentos--;
            asignarTextoElemento('p',`Fallaste, el número secreto es mayor. Te quedan ${intentos} ${(intentos > 1) ? 'intentos' : 'intento'}.`);   
        limpiarCaja();
        }
    } 
     else if ((numeroUsuario === numeroSecreto) && (intentos > 0)) {
        asignarTextoElemento('p','Felicidades, acertaste!');
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else if (intentos == 0) {
        asignarTextoElemento('p',`Te has quedado sin intentos y perdiste. El número secreto era ${numeroSecreto}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumero(){
    let numeroGenerado = Math.floor(Math.random()*nroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNrosOrteados);
    if (listaNrosOrteados.length == nroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles.');
    } else {
        //Si el numero generado esta dentro de la lista:
         if (listaNrosOrteados.includes(numeroGenerado)) {
            return generarNumero();
        } else {
            listaNrosOrteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p',`Elije un número del 1 al ${nroMaximo}, tienes 5 intentos`);
    numeroSecreto = generarNumero();
    intentos = 5;
}

function reiniciarJuego() {
    //Limpiar Caja
    limpiarCaja();
    //Cargamos las condiciones y msjes
    condicionesIniciales();
    //Deshabilitar boton reiniciar juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
