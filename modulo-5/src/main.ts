// Juego 7 1/2

// esta es la variable de la puntuacion
let puntuacion = 0;
let carta = "";

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
  console.log(generaCarta);
  if (generaCarta && generaCarta > 7) {
    return generaCarta + 2;
  }

  return generaCarta;
};

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

//DAMos valor a las carta >7
const valorCarta = (carta: number): number => (carta > 7 ? 0.5 : carta);

const sumaPuntuacion = (ValorCarta: number): number => {
  return (puntuacion = puntuacion + ValorCarta);
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
//creamos una funcion auxiliar que corte el juego con 7.5 puntos
const ganasteEljuego = (puntuacion: number) => {
  if (puntuacion === 7.5) {
    apagaBoton("dameCarta");
    apagaBoton("Plantarse");
    apagaBoton("muestraResultado");
  }
};
/*
const ganasteEljuego = (puntuacion: number) => {
  if (botonDameCarta instanceof HTMLButtonElement && puntuacion === 7.5) {
    botonDameCarta.disabled = true;
  }
  if (botonPlantarse instanceof HTMLButtonElement && puntuacion === 7.5) {
    botonPlantarse.disabled = true;
  }
  if (botonResultado instanceof HTMLButtonElement && puntuacion === 7.5) {
    botonResultado.disabled = true;
  }
};
*/
// aqui vamos a hacer el apartado 4 y 5 al mismo tiempo para mostrar mensajes y posibles situaicones
const Menor_Cuatro = 0;
const Num_cinco = 1;
const Seis_siete = 2;
const Siete_media = 3;
const imposible = 4;

const GAME_OVER_MAXIMO_INTENTOS = 7.5;

type Estado =
  | "Menor_Cuatro"
  | "Num_cinco"
  | "Seis_siete"
  | "Siete_media"
  | "GAME_OVER_MAXIMO_INTENTOS"
  | "imposible"
  | "cero";

const hasSuperadoPuntuacion = (): boolean =>
  puntuacion > GAME_OVER_MAXIMO_INTENTOS;

const muestraMensajeComprobacion = (estado: Estado) => {
  let mensaje = "";
  switch (estado) {
    case `Menor_Cuatro`:
      mensaje = "Has sido muy conservador";
      break;
    case `Num_cinco`:
      mensaje = "Te ha entrado el canguelo eh?";
      break;
    case `Seis_siete`:
      mensaje = "Casi casi...";
      break;
    case `Siete_media`:
      mensaje = "¡ Lo has clavado! ¡Enhorabuena!";
      break;
    case `GAME_OVER_MAXIMO_INTENTOS`:
      mensaje = "Que pringaooo!! 🎉🎉🎉";
      break;

    case `imposible`:
      mensaje = `No se que ha pasado, pero no deberías estar aquí`;
      break;
    case `cero`:
      mensaje: `  `;
      break;
    default:
      mensaje = `No se que ha pasado, pero no deberías estar aquí`;
      break;
  }
  const elementoResultado = document.getElementById("resultado");
  if (elementoResultado) {
    elementoResultado.innerHTML = mensaje;
  }
};
// gestionamos boton game over con el boton dame carta
const gestionarGameOver = (puntuacion: number) => {
  if (puntuacion === 7.5) {
    apagaBoton("Plantarse");
    muestraMensajeComprobacion("Siete_media");
  }
  if (puntuacion > 7.5) {
    apagaBoton("dameCarta");
    apagaBoton("Plantarse");
    muestraMensajeComprobacion("GAME_OVER_MAXIMO_INTENTOS");
  }
};
/*
const gestionarGameOver = (puntuacion: number) => {
  if (puntuacion === 7.5) {
    if (botonPlantarse instanceof HTMLButtonElement) {
      botonPlantarse.disabled = true;
    }
    muestraMensajeComprobacion("Siete_media");
  }
  if (puntuacion > 7.5) {
    const elementodameCarta = document.getElementById("dameCarta");
    if (elementodameCarta && elementodameCarta instanceof HTMLButtonElement) {
      elementodameCarta.disabled = true;
    }
    if (botonPlantarse instanceof HTMLButtonElement) {
      botonPlantarse.disabled = true;
    }
    muestraMensajeComprobacion("GAME_OVER_MAXIMO_INTENTOS");
  }
};
*/
//mesajes comprobacion
const comprobarPuntuacion = (numero: number): Estado => {
  if (numero <= 4.5) {
    return `Menor_Cuatro`;
  }
  if (numero >= 5 && numero < 6) {
    return `Num_cinco`;
  }
  if (numero >= 6 && numero < 7) {
    return `Seis_siete`;
  }
  if (numero === 7) {
    return `Seis_siete`;
  }
  if (numero === 7.5) {
    return `Siete_media`;
  }
  return `imposible`;
};
const muestraMensajeMePlanto = () => {
  const estado = comprobarPuntuacion(puntuacion);
  muestraMensajeComprobacion(estado);
  apagaBoton("dameCarta");
  enciendeBoton("muestraResultado");
  apagaBoton("Plantarse");
};
/*
const muestraMensajeMePlanto = () => {
  const estado = comprobarPuntuacion(puntuacion);
  muestraMensajeComprobacion(estado);
  if (botonDameCarta && botonDameCarta instanceof HTMLButtonElement) {
    botonDameCarta.disabled = true;
  }
  if (botonResultado && botonResultado instanceof HTMLButtonElement) {
    botonResultado.disabled = false;
  }
};
*/
//funcion reset juego
const resetGame = () => {
  puntuacion = 0;
  muestraPuntuacion(puntuacion);
  cambiarScr(puntuacion);
  muestraMensajeComprobacion(`cero`);
  enciendeBoton("dameCarta");
  apagaBoton("muestraResultado");
  enciendeBoton("Plantarse");
};
/*
const resetGame = () => {
  puntuacion = 0;
  muestraPuntuacion(puntuacion);
  cambiarScr(puntuacion);
  muestraMensajeComprobacion(`cero`);
  const elementodameCarta = document.getElementById("dameCarta");
  if (elementodameCarta && elementodameCarta instanceof HTMLButtonElement) {
    elementodameCarta.disabled = false;
  }
  if (botonResultado && botonResultado instanceof HTMLButtonElement) {
    botonResultado.disabled = true;
  }
  if (botonPlantarse instanceof HTMLButtonElement) {
    botonPlantarse.disabled = false;
  }
};
*/
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
    botonPlantarse.addEventListener("click", muestraMensajeMePlanto);
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
      sumaCarta(), (botonResultado.disabled = true);
    });
  }
};
//
document.addEventListener("DOMContentLoaded", () => {
  muestraPuntuacion(puntuacion);
  iniciarBotones();
});
