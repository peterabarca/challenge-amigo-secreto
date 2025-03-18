// Lista de los amigos
let listaAmigos = [];

/**
 * Incorpora texto a un elemento del DOM.
 */
function asignarTextoElemento(elemento, texto) {
    const elementoHTML = document.querySelector(elemento);
    if (elementoHTML) {
        elementoHTML.innerHTML = texto;
    }
}

/**
 * Incorpora un amigo a la lista.
 */
function agregarAmigo() {
    const nombre = document.getElementById('amigo').value.trim();

    if (!nombre) {
        alert('Por favor, ingrese un nombre válido');
        return;
    }

    listaAmigos.push(nombre);
    actualizarLista();
    limpiarCaja();
}

/**
 * Limpia el campo.
 */
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

/**
 * Actualiza lista de amigos en el DOM.
 */
function actualizarLista() {
    const ul = document.querySelector('#listaAmigos');
    ul.innerHTML = '';

    listaAmigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        ul.appendChild(li);
    });
}

/**
 * Se efectua un sorteo de amigo secreto y muestra un resultado.
 */
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Agrega amigos antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoGanador = listaAmigos[indiceAleatorio];

    mostrarResultado(amigoGanador);
    limpiarLista();
}

/**
 * Muestra el resultado del sorteo en el DOM.
  */
function mostrarResultado(amigoGanador) {
    const ulResultado = document.querySelector('#resultado');
    ulResultado.innerHTML = '';

    const li = document.createElement('li');
    li.textContent = ` El amigo secreto sorteado es: ${amigoGanador}`;
    ulResultado.appendChild(li);
}

/**
 * Limpia la lista 
 */
function limpiarLista() {
    listaAmigos = [];
    actualizarLista();
}
