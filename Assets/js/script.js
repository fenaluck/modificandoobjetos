// creacion de clase
function Consultorio (nombre){
        this.nombre = nombre;
        this.pacientes = [];
    //creacion de nuevo paciente
        this.addPaciente = function(nuevopaciente){
            this.pacientes.push(nuevopaciente);
    }
    //muestra de pacientes
    this.showPacientes = function(){
        for (paciente of this.pacientes){
        paciente.show();
        }
    }

    this.filterPacientes = function (nombre){
        for (paciente of this.pacientes){
            if(paciente.nombre.toUpperCases() == nombre.toUpperCases()){
                paciente.show();
            }
        }
    }
};
// creando pacientes
function Paciente (nombre, rut, diagnostico){
    this.nombre = nombre;
    this.rut = rut;
    this.diagnostico = diagnostico;

    this.show = function(){
        console.log(`Paciente se llama ${this.nombre} y su diagnostico es ${this.diagnostico}`)
    }
}

// creacion de instancias
const centromedico = new Consultorio('centroMedico');
const paciente_1 = new Paciente('pedro picapiedra', '12122222-2', 'estress');
const paciente_2 = new Paciente('juan perez', '2234523-3', 'stress crónico');
const paciente_3= new Paciente('condorito', '2000000-2', 'respiratorios');
const paciente_4 = new Paciente('juan segura', '53234123-9', 'accidente');

//agregar pacientes al centro medico
centromedico.addPaciente(paciente_1);
centromedico.addPaciente(paciente_2);
centromedico.addPaciente(paciente_3);
centromedico.addPaciente(paciente_4);

//borrar paciente o encontrar paciente
this.removePaciente = function(nombre){
    this.pacientes = this.pacientes.filter(p=>p.nombre.toUpperCases() != nombre.toUpperCases())
    console.log(`Paciente fue encontrado`)
}

console.log(centromedico.pacientes[0].nombre)