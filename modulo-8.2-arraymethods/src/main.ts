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
    temperatura: 39.8,
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
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

// Apartado 1

// a) Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría
const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  // Tu implementación aquí :)
  let nuevoArrayPacientesPediatria = pacientes.filter(
    (paciente: Pacientes): boolean => {
      return paciente.especialidad === "Pediatra";
    }
  );
  return nuevoArrayPacientesPediatria;
};
console.log(obtenPacientesAsignadosAPediatria(pacientes));

// b) Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  // Tu implementación aquí :)
  let pacientesPediatriaMenor10Anios = pacientes.filter(
    (paciente: Pacientes): boolean =>
      paciente.especialidad === "Pediatra" && paciente.edad < 10
  );
  return pacientesPediatriaMenor10Anios;
};
console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

// Apartado 2

// Activar protocolo de emrgencia => tmpra > 39º && ritmoCardiaco > 100 ppm
const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  //let activarProctolo = false;

  // Tu implementación aquí :)
  const activarProctolo = pacientes.some(
    (paciente: Pacientes): boolean =>
      paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39
  );
  return activarProctolo;
};
console.log(activarProtocoloUrgencia(pacientes));

// Apartado 3

//queremos reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia
const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  // Tu implementación aquí :)
  return pacientes.map((paciente: Pacientes): Pacientes => {
    if (paciente.especialidad === "Pediatra") {
      return {
        ...paciente,
        especialidad: "Medico de familia",
      };
    }
    return paciente;
  });
};
console.log(reasignaPacientesAMedicoFamilia(pacientes));

// Apartado 4
//(si no tiene pacientes asignados pediatria), comprobar si en la lista hay algún paciente asignado a pediatría

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  // Tu implementación aquí :)
  const puedeIrse = pacientes.some(
    (paciente: Pacientes) => paciente.especialidad === "Pediatra"
  );
  return puedeIrse;
};
console.log(HayPacientesDePediatria(pacientes));

// Apartado 5 opcional
//nº total de pacientes por especialidad
interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  // Tu implementación aquí :)
  let totalPacientesMedicoDeFamilia = 0;
  let totalPacientesPediatria = 0;
  let totalPacientesCardiologia = 0;
};
