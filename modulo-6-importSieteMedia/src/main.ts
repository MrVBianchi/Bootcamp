import { partida } from "./modelo";
import { muestraPuntuacion, sumaCarta, resetGame, mePlanto } from "./ui";

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
    muestraPuntuacion(partida.puntuacion);
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
  muestraPuntuacion(partida.puntuacion);
  iniciarBotones();
});
