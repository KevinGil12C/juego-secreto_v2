let numeroMax = 10;
let numeroSecreto;
let contadorIntentos;
let listaNumerosSorteados = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let num = parseInt(document.getElementById('numeroUsuario').value);
    //console.log(numeroSecreto);
    if (num === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número secreto en ${contadorIntentos} ${(contadorIntentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto

        if (num < numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es mayor');
        } else {
            asignarTextoElemento('p', 'El número secreto es menor');
        }
        contadorIntentos++;
        limpiarCaja();
    }
    return;
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMax}`);
    numeroSecreto = generarNumeroSecreto();
    contadorIntentos = 1;
}

function reiniciarJuego() {
    /*
     * limpiar caja
     * indicar mensaje de inicio
     * indicar mensaje de pedir numero
     * reiniciar contador
     * generar otro número aleatorio
     * Deshabilitar el boton de nuevo juego
     */
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

function limpiarCaja() {
    document.querySelector('#numeroUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * 10) + 1;
    //console.log(numeroGenerado);
    //console.log(listaNumerosSorteados);

    //Si ya se sortearon todos los numeros
    if (listaNumerosSorteados.length == numeroMax) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        //SI el numero esta en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            //Lo agrega a la lista y lo regresa
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

condicionesIniciales();