interface Partida {
  puntuacion: number;
  estadoPartida: EstadosPartida;
}
export const partida: Partida = {
  puntuacion: 0,
  estadoPartida: "Jugando",
};
export const SIETE_Y_MEDIA = 7.5;

export type EstadosPartida =
  | "Jugando"
  | "Plantado_Menor_Cuatro"
  | "Plantado_Menor_Cinco"
  | "Plantado_Seis_siete"
  | "Ganado"
  | "Perdido";

export const setEstadoPartida = (estado: EstadosPartida) => {
  partida.estadoPartida = estado;
};
