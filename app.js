let numeroSecreto;
let intentos = 1;
let numeroMaximo = 10;
let listaNumeros = [];

operacionesIniciales();

function asignarTextoElemento(lugar, texto){
    let temp = document.querySelector(lugar);
    temp.innerHTML = texto;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos ===1)?'intento':'intentos'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p',"El numero secreto es menor");
        }else{
            asignarTextoElemento('p',"El numero secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja(){
   document.querySelector('#valorUsuario').value = '';
}
function generarNumeroSecreto() {
    let numero = Math.floor(Math.random()*numeroMaximo)+1;
    if (listaNumeros.length == numeroMaximo){
        asignarTextoElemento('p',"Ya se sortearon todos los numeros posibles");
    }else{
        console.log(numero);
        if (listaNumeros.includes(numero)){
            return generarNumeroSecreto();
        }else{
            listaNumeros.push(numero);
            return numero;
        }
    }
}
function operacionesIniciales(){
    asignarTextoElemento('h1', "Juego del numero secreto");
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
}
function reiniciarJuego(){
    limpiarCaja();
    operacionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    intentos = 1;

}
