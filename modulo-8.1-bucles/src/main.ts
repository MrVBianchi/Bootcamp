type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 101,
    especialidad: "Pediatra",
    edad: 11,
  },
];

// creo un bucle for en la funcion que detecta los pacientes de la especialidad: pediatria
const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  // creo un array vacío para los pacientes de pediatría y un let de pediatria para comprobar si es true

  const pacientesDePediatria: Pacientes[] = [];

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacientesDePediatria.push(pacientes[i]);
    }
  }
  return pacientesDePediatria;
};
console.log(obtenPacientesAsignadosAPediatria(pacientes));
// queremos obtener los pacientes de pediatria menores de 10 años
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  //creamos un bucle y creamos la condiciones para el push
  const pediatriaMenorDeDiezAnios: Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
      pediatriaMenorDeDiezAnios.push(pacientes[i]);
    }
  }
  return pediatriaMenorDeDiezAnios;
};
console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

//apartado 2, activar protocolo en ritmo cardiaco mayor a 100 pulsaciones y temperatura superior a 39
const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;
  // creamos un let booleano para que el protocolo se active o no cuando se cumplan AMBAS condiciones
  for (let i = 0; i < pacientes.length; i++) {
    if (
      pacientes[i].frecuenciaCardiaca > 100 &&
      pacientes[i].temperatura > 39
    ) {
      activarProctolo = true;
      break;
    }
  }
  return activarProctolo;
};
console.log(activarProtocoloUrgencia(pacientes), "Protocolo de Emergencia");

// apartado 3, reasignacion de pediatria a medico de familia

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  // creamos nuevo array, guardamos el array anterior con ... ; y en el nuevo array modificamos la especialidad
  const pacientesActualizados = [...pacientes];

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientesActualizados[i].especialidad === "Pediatra") {
      pacientesActualizados[i] = {
        ...pacientesActualizados[i],
        especialidad: "Medico de familia",
      };
    }
  }
  return pacientesActualizados;
};
console.log(reasignaPacientesAMedicoFamilia(pacientes));
console.log(pacientes);
// apartado 4, queremos ver si podemos mandar al pediatra a casa, revisamos pacientes
const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  // Comprobamos que en toda la lista no hay pediatria, entonces activamos el pediatraPuedeIrse
  let elPediatraTienePacientes = false;
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad !== "Pediatra") {
      elPediatraTienePacientes = true;
    }
  }
  return elPediatraTienePacientes;
};
console.log("¿Hay pacientes en pediatría?", HayPacientesDePediatria(pacientes));

// Apartado 5 opcional, queremos ver cuantos pacientes hay en la especialidad de Medico de familia
interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  // creamos 3 let para los totales
  let totalPacientesMedicoDeFamilia = 0;
  let totalPacientesPediatria = 0;
  let totalPacientesCardiologia = 0;
  // creamos 3 if, porque soy un cagao y me da miedo ponerlo en uno solo y compilar
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Medico de familia") {
      totalPacientesMedicoDeFamilia++;
    }
    if (pacientes[i].especialidad === "Pediatra") {
      totalPacientesPediatria++;
    }
    if (pacientes[i].especialidad === "Cardiólogo") {
      totalPacientesCardiologia++;
    }
  }
  // nos tienes que devolver los valores para la interface
  return {
    medicoDeFamilia: totalPacientesMedicoDeFamilia,
    pediatria: totalPacientesPediatria,
    cardiologia: totalPacientesCardiologia,
  };
};
console.log(cuentaPacientesPorEspecialidad(pacientes));
