/*
const generaNumAl = (): number => Math.floor(Math.random() * 101);
const NumparaAcertar: number = generaNumAl();
console.log(NumparaAcertar);

type Estado =
  | "NO_ES_UN_NUMERO"
  | "EL_NUMERO_ES_MAYOR"
  | "EL_NUMERO_ES_MENOR"
  | "ES_EL_NUMERO_SECRETO"
  | "GAME_OVER_MAXIMO_INTENTOS";

const MAXIMO_INTENTOS = 5;
let numeroDeIntentos = 0;
const HasSuperadoElNumeroMaximoDeIntentos = (): boolean =>
  numeroDeIntentos > MAXIMO_INTENTOS;

const muestraNumeroDeIntentos = () => {
  const elementoIntentos = document.getElementById("intentos");
  if (elementoIntentos) {
    elementoIntentos.innerHTML = `${numeroDeIntentos} de ${MAXIMO_INTENTOS}`;
  } else {
    console.error(
      "muestraNumeroDeIntento: No se ha encontrado el elemento con id intentos"
    );
  }
};
document.addEventListener("DOMContentLoaded", muestraNumeroDeIntentos);

const gestionarGameOver = (estado: Estado) => {
  if (estado === "GAME_OVER_MAXIMO_INTENTOS") {
    const elementoComprobar = document.getElementById("comprobar");
    if (elementoComprobar && elementoComprobar instanceof HTMLButtonElement) {
      elementoComprobar.disabled = true;
    } else {
      console.error(
        "gestionarGameOver: No se ha encontrado el elemento con id comprobar"
      );
    }
  }
};
const muestraMensajeComprobacion = (texto: string, estado: Estado) => {
  let mensaje: string = "";
  switch (estado) {
    case "NO_ES_UN_NUMERO":
      mensaje = `"${texto}" no es un número 🤨, prueba otra vez`;
      break;
    case "EL_NUMERO_ES_MAYOR":
      mensaje = `UUYYY ! El número ${texto} es MAYOR que el número secreto`;
      break;
    case "EL_NUMERO_ES_MENOR":
      mensaje = `UUYYY ! El número ${texto} es MENOR que el número secreto`;
      break;
    case "GAME_OVER_MAXIMO_INTENTOS":
      mensaje = `🪦 GAME OVER, has superado el número máximo de intentos`;
      break;
    case "ES_EL_NUMERO_SECRETO":
      mensaje = `¡¡¡Enhorabuena, has acertado el número!!! 🎉🎉🎉`;
      break;
    default:
      mensaje = "No se que ha pasado, pero no deberías estar aquí";
      break;
  }
  const elementoResultado = document.getElementById("resultado");
  if (elementoResultado) {
    elementoResultado.innerHTML = mensaje;
  } else {
    console.error(
      "muestraMensajeComprobacion: No se ha encontrado el elemento con id resultado"
    );
  }
};

const comprobarNumero = (texto: string) => {
  const numero = parseInt(texto);
  const esUnNumero = !isNaN(numero);

  if (!esUnNumero) {
    return "NO_ES_UN_NUMERO";
  }
  if (numero === NumparaAcertar) {
    return "ES_EL_NUMERO_SECRETO";
  }

  if (HasSuperadoElNumeroMaximoDeIntentos()) {
    return "GAME_OVER_MAXIMO_INTENTOS";
  }
  return numero > NumparaAcertar ? "EL_NUMERO_ES_MAYOR" : "EL_NUMERO_ES_MENOR";
};
const handleCompruebaClick = () => {
  let texto: string = "";
  const inputElement = document.getElementById("numero");
  if (inputElement && inputElement instanceof HTMLInputElement) {
    texto = inputElement.value;
  }
  const estado: Estado = comprobarNumero(texto);
  muestraMensajeComprobacion(texto, estado);
  numeroDeIntentos++;
  muestraNumeroDeIntentos();
  gestionarGameOver(estado);
};
const botonComprobar = document.getElementById("comprobar");
if (botonComprobar && botonComprobar instanceof HTMLButtonElement) {
  botonComprobar.addEventListener("click", handleCompruebaClick);
}
*/

// Juego 7 1/2

// esta es la variable de la puntuacion
let puntuacion = 0;
let carta = "";
// esta es la funcion que identifica el div de la puntuacion y lo representa
const muestraPuntuacion = () => {
  const elementoPuntuacion = document.getElementById("puntuacion");
  if (elementoPuntuacion) {
    elementoPuntuacion.innerHTML = puntuacion.toString();
  }
  console.log(puntuacion);
};

// amos a escribir la funcion para cuando el usuario pide carta
const dameCarta = () => {
  const generaCarta = Math.floor(Math.random() * 11);
  if (generaCarta && generaCarta >= 7) {
    return generaCarta + 2;
  }
  console.log(dameCarta);
  return generaCarta;
};

// 3- funcion mostrar carta
const mostrarCarta = (carta: number): string => {
  let CartaActual: string = "";
  switch (carta) {
    case 1:
      CartaActual = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg`;
      break;
    case 2:
      CartaActual = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg`;
      break;
    case 3:
      CartaActual = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg`;
      break;
    case 4:
      CartaActual = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg`;
      break;
    case 5:
      CartaActual = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg`;
      break;
    case 6:
      CartaActual = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg`;
      break;
    case 7:
      CartaActual = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg`;
      break;
    case 10:
      CartaActual = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg`;
      break;
    case 11:
      CartaActual = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg`;
      break;
    case 12:
      CartaActual = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg`;
      break;
  }
  return CartaActual;
};

// cambiar src -apartado carrousel
const cambiarScr = (carta: number) => {
  let cartaPrincipal = document.getElementById("CartaPrincipal");
  const CartaNueva = mostrarCarta(carta);
  if (cartaPrincipal && cartaPrincipal instanceof HTMLImageElement)
    cartaPrincipal.src = CartaNueva;
};

//DAMos valor a las carta >7
const ValorCarta = (carta: number): number => {
  if (carta > 7) {
    return 0.5;
  } else {
    return carta;
  }
};
const sumaPuntuacion = (ValorCarta: number) => {
  return (puntuacion = puntuacion + ValorCarta);
};
/*
//funcion que convoque todas las funciones individuales
const sumaCarta = () => {
  // primero pedimos carta
  dameCarta();
  // luego que asigne un caso al nª generado
  mostrarCarta = (carta: number): string ;
  //pedimos que cambie la src
  cambiarScr = (carta: number);
  //ahora debe sumar los valores
  sumaPuntuacion = (ValorCarta: number)
};
*/

// aqui vamos a hacer el apartado 4 y 5 al mismo tiempo para mostrar mensajes y posibles situaicones
const Menor_Cuatro = 0;
const Num_cinco = 1;
const Seis_siete = 2;
const Siete_media = 3;

const GAME_OVER_MAXIMO_INTENTOS = 7.5;

type Estado =
  | "Menor_Cuatro"
  | "Num_cinco"
  | "Seis_siete"
  | "Siete_media"
  | "GAME_OVER_MAXIMO_INTENTOS";

const HasSuperadoPuntuacion = (): boolean =>
  puntuacion > GAME_OVER_MAXIMO_INTENTOS;

const muestraMensajeComprobacion = (texto: string, estado: Estado) => {
  let mensaje = "";
  switch (estado) {
    case "Menor_Cuatro":
      mensaje = "Has sido muy conservador";
      break;
    case "Num_cinco":
      mensaje = "Te ha entrado el canguelo eh?";
      break;
    case "Seis_siete":
      mensaje = "Casi casi...";
      break;
    case "Siete_media":
      mensaje = "¡ Lo has clavado! ¡Enhorabuena!";
      break;
    case "GAME_OVER_MAXIMO_INTENTOS":
      mensaje = "Que pringaooo!! 🎉🎉🎉";
      break;
    default:
      mensaje = "No se que ha pasado, pero no deberías estar aquí";
      break;
  }
  const elementoResultado = document.getElementById("resultado");
  if (elementoResultado) {
    elementoResultado.innerHTML = mensaje;
  }
};
// gestionamos boton game over con el boton dame carta
const gestionarGameOver = (puntuacion: number) => {
  if (puntuacion >= 7.5) {
    const elementodameCarta = document.getElementById("dameCarta");
    if (elementodameCarta && elementodameCarta instanceof HTMLButtonElement) {
      elementodameCarta.disabled = true;
    }
  }
};
//mesajes comprobacion
const comprobarPuntuacion = () => {
  const Numero = puntuacion;

  if (Numero < 4) {
    return Menor_Cuatro;
  }
  if (Numero === 5) {
    return Num_cinco;
  }
  if (Numero === 6) {
    return Seis_siete;
  }
  if (Numero === 7) {
    return Seis_siete;
  }
  if (Numero === 7.5) {
    return Siete_media;
  }
};
//funcion reset juego
const ResetGame = () => {
puntuacion = 0;
}

//boton dame carta llama a funcion
const botonDameCarta = document.getElementById("dameCarta");
if (botonDameCarta && botonDameCarta instanceof HTMLButtonElement) {
  botonDameCarta.addEventListener("click", () => {});
}
// boton resultado para mostrar carta
//esto no es un boton es un div que muestra resultado
const botonResultado = document.getElementById("muestraResultado");
if (botonResultado && botonResultado instanceof HTMLButtonElement) {
  botonResultado.addEventListener("click", () => {});
}
// boton para plantarse
const botonPlantarse = document.getElementById("Plantarse");
if (botonPlantarse && botonPlantarse instanceof HTMLButtonElement) {
  botonPlantarse.addEventListener("click", comprobarPuntuacion);
}
//boton reset
const botonReset = document.getElementById("Reset");
if(botonReset && botonReset instanceof HTMLButtonElement){
  botonReset.addEventListener ("click", ()=>{})
}
