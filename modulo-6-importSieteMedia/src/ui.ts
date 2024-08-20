import { SIETE_Y_MEDIA, EstadosPartida, partida } from "./modelo";
import {
  dameCarta,
  mostrarCarta,
  sumaPuntuacion,
  valorCarta,
  comprobarPuntuacion,
  mensajeComprobacion,
} from "./motor";

export const apagaBoton = (id: string) => {
  const elementoApagar = document.getElementById(id);
  if (elementoApagar instanceof HTMLButtonElement) {
    elementoApagar.disabled = true;
  }
};

export const enciendeBoton = (id: string) => {
  const elementoEncender = document.getElementById(id);
  if (elementoEncender instanceof HTMLButtonElement) {
    elementoEncender.disabled = false;
  }
};

export const muestraPuntuacion = (puntuacion: number) => {
  const elementoPuntuacion = document.getElementById("puntuacion");
  if (elementoPuntuacion) {
    elementoPuntuacion.innerHTML = puntuacion.toString();
  }
};
export const sumaCarta = () => {
  // primero pedimos carta
  const numerocarta = dameCarta();
  //pedimos que cambie la src
  cambiarScr(numerocarta);
  //ahora debe sumar los valores
  const valordeCarta = valorCarta(numerocarta);
  sumaPuntuacion(valordeCarta);
  muestraPuntuacion(partida.puntuacion);
  gestionarGameOver(partida.puntuacion);
  ganasteEljuego(partida.puntuacion);
};



export const gestionarGameOver = (puntuacion: number) => {
  if (puntuacion > SIETE_Y_MEDIA) {
    apagaBoton("dameCarta");
    apagaBoton("Plantarse");

    partida.estadoPartida = "Perdido";
    muestraMensajeComprobacion(partida.estadoPartida);
  }
};
export const resetGame = () => {
  partida.puntuacion = 0;
  muestraPuntuacion(partida.puntuacion);
  cambiarScr(partida.puntuacion);
  partida.estadoPartida = "Jugando";
  muestraMensajeComprobacion(partida.estadoPartida);
  enciendeBoton("dameCarta");
  apagaBoton("muestraResultado");
  enciendeBoton("Plantarse");
};

export const mePlanto = () => {
  comprobarPuntuacion(partida.puntuacion);
  muestraMensajeComprobacion(partida.estadoPartida);
  apagaBoton("dameCarta");
  enciendeBoton("muestraResultado");
  apagaBoton("Plantarse");
};

export const ganasteEljuego = (puntuacion: number) => {
  if (puntuacion === SIETE_Y_MEDIA) {
    apagaBoton("dameCarta");
    apagaBoton("Plantarse");
    apagaBoton("muestraResultado");
    muestraMensajeComprobacion("Ganado");
  }
};

// cambiar src -apartado carrousel
export const cambiarScr = (carta: number) => {
  let cartaPrincipal = document.getElementById("CartaPrincipal");
  const cartaNueva = mostrarCarta(carta);
  if (cartaPrincipal && cartaPrincipal instanceof HTMLImageElement)
    cartaPrincipal.src = cartaNueva;
};

export const muestraMensajeComprobacion = (estadoPartida: EstadosPartida) => {
  const elementoResultado = document.getElementById("resultado");
  if (elementoResultado) {
    elementoResultado.innerHTML = mensajeComprobacion(estadoPartida);
  }
};
