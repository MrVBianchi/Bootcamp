//funcion para barajar cartas
interface InfoCarta {
  idFoto: number;
  imagen: string;
}
const Cartas: InfoCarta = [
  {
    idFoto: 1,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png",
  },
  {
    idFoto: 2,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png",
  },
  {
    idFoto: 3,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/3.png",
  },
  {
    idFoto: 4,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/4.png",
  },
  {
    idFoto: 5,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/5.png",
  },
  {
    idFoto: 6,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/6.png",
  },
];
const barajarMazo = (cartas: Cartas[]): Cartas[] => {
  for (let i = cartas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); //esto genera un numero aleatorio y redondea hacia abajo
    //multiplica por el indice de i+1
    [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
    //esto intercambia el valor j que hemos creado por un nuevo valor i que sera el nuevo indice que devuelve
  }
  return cartas;
};
const mazoMezclado = barajarMazo(Cartas);

//funcion crear div y hacer una carta voltearse
const crearDivCarta = (
  cartaBocaAbajo: string,
  cartaBocaArriba: string /*parametro carta bocarriba, y bocabajo*/
): HTMLDivElement => {
  const contenedorCartas = document.getElementById("contenedorCartas");

  for(contenedorCartas) { //bucle for para crear div por cada carta o elemento
    mazoMezclado.forEach
  const carta = document.createElement("div"); //crea un div
  carta.className = "carta"; //asigna clase carta al div

  const imagenCarta = document.createElement("img"); //crea elemento imagen
  imagenCarta.src = cartaBocaAbajo; //asigna srcbocaabajo a la imagen creada
  imagenCarta.alt = "Carta"; //le pone el alt = carta

  carta.appendChild(imagenCarta); //añade imagen carta al div de clase carta

  carta.addEventListener("click", () => {
    carta.classList.toggle("flip"); //esto- toggle comprueba que esta encendido o apagado flip en toda la lista de clases "carta"
    imagenCarta.src = carta.classList.contains("flip") //comprueba si la carta esta flip o no
      ? cartaBocaArriba //si tiene flip devuelve esta src
      : cartaBocaAbajo; // si no tiene flip devuelve esta src
  });

  return carta;
};
};
