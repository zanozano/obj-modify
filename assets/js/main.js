//CONSULTORIO
function Consultorio(nombre, paciente) {
	this.nombre = nombre;
	this.paciente = paciente || [];
}
//PACIENTE
function Paciente(nombre, edad, rut, diagnostico) {
	this.nombre = nombre;
	this.edad = edad;
	this.rut = rut;
	this.diagnostico = diagnostico;
}
//
//GET NOMBRE
Consultorio.prototype.getNombre = function () {
	return this.nombre;
};
//SET PACIENTE
Consultorio.prototype.setPaciente = function (newPaciente) {
	this.paciente = newPaciente;
};
//AGREGAR PERSONAS AL CONSULTORIO
Consultorio.prototype.addPerson = function (paciente) {
	this.paciente.push = paciente;
};
//
//GET NOMBRE
Paciente.prototype.getNombre = function () {
	return this.nombre;
};
//GET EDAD
Paciente.prototype.getEdad = function () {
	return this.edad;
};
//GET RUT
Paciente.prototype.getRut = function () {
	return this.rut;
};
//GET DIAGNOSTICO
Paciente.prototype.getDiagnostico = function () {
	return this.diagnostico;
};
//SET NOMBRE
Paciente.prototype.setNombre = function (newNombre) {
	this.nombre = newNombre;
};
//SET EDAD
Paciente.prototype.setEdad = function (newEdad) {
	this.edad = newEdad;
};
//SET RUT
Paciente.prototype.setRut = function (newRut) {
	this.rut = newRut;
};
//SET DIAGNOSTICO
Paciente.prototype.setDiagnostico = function (newDiagnostico) {
	this.diagnostico = newDiagnostico;
};
// ITERADOR DE PACIENTES
Consultorio.prototype.getPacientes = function () {
	this.paciente.forEach(function (element, index) {
		console.log('------------------');
		console.log('Paciente :' + index);
		console.log('Nombre: ' + element.nombre);
		console.log('Edad: ' + element.edad);
		console.log('RUT: ' + element.rut);
		console.log('Diagnostico: ' + element.diagnostico);
	});
};
//
Consultorio.prototype.getPacientesByName = function (busquedaNombre) {
	console.log('------------------');
	this.paciente.forEach(function (element, index) {
		if (element.nombre == busquedaNombre) {
			console.log('Paciente :' + index);
			console.log('Nombre: ' + element.nombre);
			console.log('Edad: ' + element.edad);
			console.log('RUT: ' + element.rut);
			console.log('Diagnostico: ' + element.diagnostico);
		}
	});
};
//PACIENTES NUEVOS
var paciente1 = new Paciente('Juan', 32, '16.564145-4', 'Cancer terminal');
var paciente2 = new Paciente('Diego', 24, '22.366726-4', 'Dolor de espalda');
var paciente3 = new Paciente('Pedro', 60, '8.6256492-2', 'Fractura de pierna');
var paciente4 = new Paciente('Matias', 36, '16.534755-4', 'Problemas a la vista');
var paciente5 = new Paciente('Gerardo', 17, '17.564745-k', 'Diabetes');
var paciente6 = new Paciente('Camilo', 38, '14.548735-k', 'Obesidad');
//CONSULTORIO NUEVO
var consultorio1 = new Consultorio('Hospital Clinico de Chile', [
	paciente1,
	paciente2,
	paciente3,
	paciente4,
	paciente5,
	paciente6,
]);
console.log(consultorio1);
console.log(consultorio1.getNombre());
console.log(paciente1.getEdad());
consultorio1.getPacientes();
consultorio1.getPacientesByName('Matias');
paciente1.setEdad(90);
console.log(paciente1.getEdad());
