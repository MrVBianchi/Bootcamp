import { comprobarPuntuacion, dameCarta, valorCarta } from "./motor";
import { EstadosPartida } from "./modelo";
import { vi } from "vitest";

describe("comprobarPuntuacion", () => {
  // vamos a crear la bateria de tests con respecto de los casos que existen en la funcion principal
  //Este apartado será comrpobado varias veces
  // plantado_menor_cuatro ; numero <= 4.5
  it("Debe de devolver Plantado_Menor_Cuatro cuando el numero o puntuacion <= 4.5", () => {
    //Arrange
    const puntuacion = 4.5;
    const estadoPartida: EstadosPartida = "Plantado_Menor_Cuatro";
    //Act
    const resultado = comprobarPuntuacion(puntuacion);
    //Assert
    expect(resultado).toBe(estadoPartida);
  });
  // plantado_menor_cinco ; numero >= 5 && numero <=6
  it("Deberia de devolver Plantado_Menor_Cinco", () => {
    //Arrange
    const puntuacion = 5.5;
    const estadoPartida: EstadosPartida = "Plantado_Menor_Cinco";
    //Act
    const resultado = comprobarPuntuacion(puntuacion);
    //Assert
    expect(resultado).toBe(estadoPartida);
  });
  // plantado_seis_siete ; numero >=6 && numero <=7
  it("Deberia de devoler Plantado_Seis_siete", () => {
    //Arrange
    const puntuacion = 6.5;
    const estadoPartida: EstadosPartida = "Plantado_Seis_siete";
    //Act
    const resultado = comprobarPuntuacion(puntuacion);
    //Assert
    expect(resultado).toBe(estadoPartida);
  });

  // ganado ; numero === 7.5
  it("deberia de devolver SIETE_Y_MEDIA al igualar la puntuacion a la ganadora", () => {
    //Arrange
    const puntuacion = 7.5;
    const estadoPartida: EstadosPartida = "Ganado";
    //Act
    const resultado = comprobarPuntuacion(puntuacion);
    //Assert
    expect(resultado).toBe(estadoPartida);
  });
  // game_over ; numero >7.5
  it("Deberia de devolver Perdido", () => {
    //Arrange
    const puntuacion = 8;
    const estadoPartida: EstadosPartida = "Perdido";
    //Act
    const resultado = comprobarPuntuacion(puntuacion);
    //Assert
    expect(resultado).toBe(estadoPartida);
  });
});
/*
Ahora vamos a iniciar una pequeña batería de tests para la funcion
que se encarga de generar un numero aleatorio el 1 al 10
*/
describe("dameCarta", () => {
  it("Deberia de generar el numero indicado", () => {
    //Arrange
    const numeroAleatorio = 6;
    vi.spyOn(Math, "random").mockReturnValue(numeroAleatorio / 10);
    //Act
    const resultado = dameCarta();
    //Assert
    expect(resultado).toBe(numeroAleatorio);
  });
  // El siguiente es para un caso donde el numero es mayor que 7
  it("Debe de devovler el numeroAleatorio + 2", () => {
    //Arrange
    const numeroAleatorio = 8;
    vi.spyOn(Math, "random").mockReturnValue(numeroAleatorio / 10);
    //Act
    const resultado = dameCarta();
    //Assert
    expect(resultado).toBe(numeroAleatorio + 2);
  });
});
describe("valorCarta", () => {
  /*
    En este caso vamos a ver que el valor que le damos coincide con el valor
    de la propia carta
    */
  it("Debe devolver el valor actual de la carta", () => {
    //Arrange
    const cartaTest = 5;
    //Act
    const resultado = valorCarta(cartaTest);
    //Assert
    expect(resultado).toBe(cartaTest);
  });
  /*
  En este caso vamos a ver que el valor de las cartas superiores a 7
  se le reasigne un valor de 0.5 para que al sumar la puntuación sea
  acorde a la dinamica del juego
*/
  it("Debe devolver el valor de la carta +2", () => {
    //Arrange
    const cartaTest = 8;
    const valorEsperado = 0.5;
    //Act
    const resultado = valorCarta(cartaTest);
    //Assert
    expect(resultado).toBe(valorEsperado);
  });
});
