// establezco punto de partida
let turno = 1;

// crear funcion que muestre el turno
/*
aqui primero llamamos al elemento turno de html
luego le decimos que si la const displayturno es un htmlElement, entonces represente en ese elemento
nuestra variable turno
ésta hay que cambiarla de number a string con ".toString" para que el formato se represente igual
*/
const TurnoActual = () => {
  const displayTurno = document.getElementById("turno");
  if (displayTurno && displayTurno instanceof HTMLElement) {
    displayTurno.innerText = turno.toString().padStart(2, "0");
    // aqui usamos .padStart para usar la funcion de extender la cadena de texto tenga el alcance deseado en longitud
    // se usa .padStart(longitudCadena, "lo que queremos que rellene la cadena")
  }
}

// identificar las constantes de los botones
const anterior = document.getElementById("anterior");
const siguiente = document.getElementById("siguiente");
const reset = document.getElementById("reset");
// añadir clickevent con if
/* 
aqui le decimos que; si siguiente existe && siguiente se verifica que es HTMLButtonElement, entonces añadimos
al evento click, la funcion  botonadelante 
*/
if (siguiente && siguiente instanceof HTMLButtonElement) {
  siguiente.addEventListener("click", () => botonAdelante());
}

if (anterior && anterior instanceof HTMLButtonElement) {
  anterior.addEventListener("click", () => botonAtras());
}

if (reset && anterior instanceof HTMLButtonElement) {
  reset.addEventListener("click", () => botonReset());
}
//añadir funcion para boton siguiente
const botonAdelante = () => {
  turno++;
  TurnoActual();
}
//añadir funcion para boton atras
const botonAtras = () => {
  // que a turno le reste 1
  turno--;
  // y que llame a la funcion
  TurnoActual();
}
// funcion para boton reset
const botonReset = () => {
  turno = 1;
  TurnoActual();
}
//amos a crear una funcion que mande el contenido del input al numero del turno
const input = document.getElementById("input");
const inputButton = document.getElementById("inputButton");
if (inputButton && inputButton instanceof HTMLButtonElement) {
  inputButton.addEventListener("click", () => sendTurno());
}
const sendTurno = () => {
  if (input && input instanceof HTMLInputElement) {
    turno = parseInt(input.value);
    TurnoActual();
  }
}