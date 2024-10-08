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
// a)
const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] =>
  pacientes.filter((paciente) => paciente.especialidad === "Pediatra");
console.log(obtenPacientesAsignadosAPediatria(pacientes));

// b)
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] =>
  pacientes.filter(
    (paciente: Pacientes) =>
      paciente.especialidad === "Pediatra" && paciente.edad < 10
  );
console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

// Apartado 2

const activarProtocoloUrgencia = (pacientes: Pacientes[]) =>
  pacientes.some(
    (paciente: Pacientes) =>
      paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39
  );
console.log(activarProtocoloUrgencia(pacientes));

// Apartado 3

const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] =>
  pacientes.map((paciente: Pacientes): Pacientes => {
    if (paciente.especialidad === "Pediatra") {
      return {
        ...paciente,
        especialidad: "Medico de familia",
      };
    }
    return paciente;
  });
console.log(reasignaPacientesAMedicoFamilia(pacientes));

// Apartado 4

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean =>
  pacientes.some((paciente: Pacientes) => paciente.especialidad === "Pediatra");

console.log(HayPacientesDePediatria(pacientes));

// Apartado 5 opcional
//nº total de pacientes por especialidad
interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const totalPacientesPorEspecialidad = (
  especialidad: Especialidad,
  pacientes: Pacientes[]
) =>
  pacientes.filter(
    (paciente: Pacientes) => paciente.especialidad === especialidad
  ).length;

const cuentaPacientesPorEspecialidad = (
  paciente: Pacientes[]
): NumeroPacientesPorEspecialidad => ({
  medicoDeFamilia: totalPacientesPorEspecialidad("Medico de familia", paciente),
  pediatria: totalPacientesPorEspecialidad("Pediatra", paciente),
  cardiologia: totalPacientesPorEspecialidad("Cardiólogo", paciente),
});

console.log(cuentaPacientesPorEspecialidad(pacientes));

const pacientesPorEspecialidad2 = (pacientes: Pacientes[]) =>
  pacientes.reduce(
    (acc, paciente: Pacientes) => {
      switch (paciente.especialidad) {
        case "Pediatra":
          acc.pediatria++;
          break;
        case "Medico de familia":
          acc.medicoDeFamilia++;
          break;
        case "Cardiólogo":
          acc.cardiologia++;
          break;
      }
      return acc;
    },
    { medicoDeFamilia: 0, pediatria: 0, cardiologia: 0 }
  );
console.log(pacientesPorEspecialidad2(pacientes));
