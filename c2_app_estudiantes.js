const readlineSync = require('readline-sync');
const {mostrarEstudiantes} = require('./lista_estudiantes')

const registrarEstudiantes = () => {
    console.log("Iniciando Registro de estudiantes");
	
	const cantidadEstudiantes = readlineSync.question("Ingrese la cantidad de estudiantes a registrar: ");
	
	console.log("Cantidad de estudiantes a registrar: " + cantidadEstudiantes)
	
	const estudiantes = [];
	
	for(let i = 0; i < cantidadEstudiantes; i++) {
	    const nombreEstudiante = readlineSync.question (" Ingrese el nombre del estudiante Nº" + (i+1) + ": ");
	    const edadEstudiante = readlineSync.question ("Ingrese la edad de " + nombreEstudiante + ": ");
	    
	    const estudiante = {
	        nombre: nombreEstudiante,
	        edad: edadEstudiante
	    }
	    
	    estudiantes.push(estudiante);
	}
	
    mostrarEstudiantes(estudiantes);
};



// Ejecutando la función
registrarEstudiantes();