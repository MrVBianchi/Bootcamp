import { EstadosPartida, partida, SIETE_Y_MEDIA } from "./modelo";

export const dameCarta = ():number => {
  const generaCarta = Math.ceil(Math.random() * 10);
  if (generaCarta && generaCarta > 7) {
    return generaCarta + 2;
  }

  return generaCarta;
};

export const mostrarCarta = (carta: number): string => {
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

export const valorCarta = (carta: number): number => (carta > 7 ? 0.5 : carta);

export const sumaPuntuacion = (ValorCarta: number): number => {
  return (partida.puntuacion = partida.puntuacion + ValorCarta);
};

export const comprobarPuntuacion = (numero: number): EstadosPartida => {
  if (numero <= 4.5) {
    return "Plantado_Menor_Cuatro";
  }
  if (numero >= 5 && numero < 6) {
    return "Plantado_Menor_Cinco";
  }
  if (numero >= 6 && numero <= 7) {
    return "Plantado_Seis_siete";
  }
  if (numero === SIETE_Y_MEDIA) {
    return "Ganado";
  }

  return "Perdido";
};

export const mensajeComprobacion = (estado: EstadosPartida) => {
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
