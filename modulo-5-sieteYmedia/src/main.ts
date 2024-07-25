const SIETE_Y_MEDIA = 7.5;
type EstadosPartida =
  | "Jugando"
  | "Plantado_Menor_Cuatro"
  | "Plantado_Menor_Cinco"
  | "Plantado_Seis_siete"
  | "Ganado"
  | "Perdido";

let puntuacion = 0;
let estadoPartida: EstadosPartida = "Jugando";

// crear funcion para encender y apagar un boton
const apagaBoton = (id: string) => {
  const elementoApagar = document.getElementById(id);
  if (elementoApagar instanceof HTMLButtonElement) {
    elementoApagar.disabled = true;
  }
};

const enciendeBoton = (id: string) => {
  const elementoEncender = document.getElementById(id);
  if (elementoEncender instanceof HTMLButtonElement) {
    elementoEncender.disabled = false;
  }
};
// esta es la funcion que identifica el div de la puntuacion y lo representa
const muestraPuntuacion = (puntuacion: number) => {
  const elementoPuntuacion = document.getElementById("puntuacion");
  if (elementoPuntuacion) {
    elementoPuntuacion.innerHTML = puntuacion.toString();
  }
};

// amos a escribir la funcion para cuando el usuario pide carta
const dameCarta = () => {
  const generaCarta = Math.ceil(Math.random() * 10);
  if (generaCarta && generaCarta > 7) {
    return generaCarta + 2;
  }

  return generaCarta;
};
//DAMos valor a las carta >7
const valorCarta = (carta: number): number => (carta > 7 ? 0.5 : carta);

// 3- funcion mostrar carta
const mostrarCarta = (carta: number): string => {
  let cartaActual: string = "";
  switch (carta) {
    case 0:
      cartaActual = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg`;
      break;
    case 1:
      cartaActual = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg`;
      break;
    case 2:
      cartaActual = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg`;
      break;
    case 3:
      cartaActual = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg`;
      break;
    case 4:
      cartaActual = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg`;
      break;
    case 5:
      cartaActual = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg`;
      break;
    case 6:
      cartaActual = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg`;
      break;
    case 7:
      cartaActual = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg`;
      break;
    case 10:
      cartaActual = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg`;
      break;
    case 11:
      cartaActual = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg`;
      break;
    case 12:
      cartaActual = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg`;
      break;
  }
  return cartaActual;
};

// cambiar src -apartado carrousel
const cambiarScr = (carta: number) => {
  let cartaPrincipal = document.getElementById("CartaPrincipal");
  const cartaNueva = mostrarCarta(carta);
  if (cartaPrincipal && cartaPrincipal instanceof HTMLImageElement)
    cartaPrincipal.src = cartaNueva;
};

const sumaPuntuacion = (ValorCarta: number): number => {
  return (puntuacion = puntuacion + ValorCarta);
};
//mesajes comprobacion
const comprobarPuntuacion = (numero: number) => {
  if (numero <= 4.5) {
    estadoPartida = "Plantado_Menor_Cuatro";
  }
  if (numero >= 5 && numero < 6) {
    estadoPartida = "Plantado_Menor_Cinco";
  }
  if (numero >= 6 && numero <= 7) {
    estadoPartida = "Plantado_Seis_siete";
  }
};
//creamos una funcion auxiliar que corte el juego con 7.5 puntos
const ganasteEljuego = (puntuacion: number) => {
  if (puntuacion === SIETE_Y_MEDIA) {
    apagaBoton("dameCarta");
    apagaBoton("Plantarse");
    apagaBoton("muestraResultado");
    muestraMensajeComprobacion("Ganado");
  }
};

const hasSuperadoPuntuacion = (): boolean => puntuacion > SIETE_Y_MEDIA;

const mensajeComprobacion = (estado: EstadosPartida) => {
  let mensaje = "";
  switch (estado) {
    case "Jugando":
      mensaje = "";
      break;
    case "Plantado_Menor_Cuatro":
      mensaje = "Has sido muy conservador";
      break;
    case "Plantado_Menor_Cinco":
      mensaje = "Te ha entrado el canguelo eh?";
      break;
    case "Plantado_Seis_siete":
      mensaje = "Casi casi...";
      break;
    case "Ganado":
      mensaje = "¡ Lo has clavado! ¡Enhorabuena!";
      break;
    case "Perdido":
      mensaje = "Que pringaooo!! 🎉🎉🎉";
      break;

    default:
      mensaje = "No se que ha pasado, pero no deberías estar aquí";
      break;
  }
  return mensaje;
};
const muestraMensajeComprobacion = (estadoPartida: EstadosPartida) => {
  const elementoResultado = document.getElementById("resultado");
  if (elementoResultado) {
    elementoResultado.innerHTML = mensajeComprobacion(estadoPartida);
  }
};
// gestionamos boton game over con el boton dame carta
const gestionarGameOver = (puntuacion: number) => {
  if (puntuacion > SIETE_Y_MEDIA) {
    apagaBoton("dameCarta");
    apagaBoton("Plantarse");

    estadoPartida = "Perdido";
    muestraMensajeComprobacion(estadoPartida);
  }
};

//funcion que convoque todas las funciones individuales
const sumaCarta = () => {
  // primero pedimos carta
  const numerocarta = dameCarta();
  //pedimos que cambie la src
  cambiarScr(numerocarta);
  //ahora debe sumar los valores
  const valordeCarta = valorCarta(numerocarta);
  sumaPuntuacion(valordeCarta);
  muestraPuntuacion(puntuacion);
  gestionarGameOver(puntuacion);
  ganasteEljuego(puntuacion);
};

const mePlanto = () => {
  comprobarPuntuacion(puntuacion);
  muestraMensajeComprobacion(estadoPartida);
  apagaBoton("dameCarta");
  enciendeBoton("muestraResultado");
  apagaBoton("Plantarse");
};

//funcion reset juego
const resetGame = () => {
  puntuacion = 0;
  muestraPuntuacion(puntuacion);
  cambiarScr(puntuacion);
  estadoPartida = "Jugando";
  muestraMensajeComprobacion(estadoPartida);
  enciendeBoton("dameCarta");
  apagaBoton("muestraResultado");
  enciendeBoton("Plantarse");
};

//crear funcion para todos los botones
const iniciarBotones = () => {
  //boton dame carta llama a funcion
  const botonDameCarta = document.getElementById("dameCarta");
  if (botonDameCarta && botonDameCarta instanceof HTMLButtonElement) {
    botonDameCarta.addEventListener("click", sumaCarta);
  }
  // boton para plantarse
  const botonPlantarse = document.getElementById("Plantarse");
  if (botonPlantarse && botonPlantarse instanceof HTMLButtonElement) {
    botonPlantarse.addEventListener("click", mePlanto);
  }
  //boton reset
  const botonReset = document.getElementById("Reset");
  if (botonReset && botonReset instanceof HTMLButtonElement) {
    botonReset.addEventListener("click", resetGame);
  }
  document.addEventListener("DOMContentLoaded", () => {
    muestraPuntuacion(puntuacion);
  });
  // boton muestra resultado para mostrar una carta una vez terminada
  const botonResultado = document.getElementById("muestraResultado");
  if (botonResultado && botonResultado instanceof HTMLButtonElement) {
    botonResultado.disabled = true;
    botonResultado.addEventListener("click", () => {
      sumaCarta();
      botonResultado.disabled = true;
    });
  }
};
//
document.addEventListener("DOMContentLoaded", () => {
  muestraPuntuacion(puntuacion);
  iniciarBotones();
});
