
const div = document.getElementById("pacientes");
const nombreInput = document.getElementById("NombreInput");


paciente.datosPaciente.forEach(elemento=>{
    const persona = new Paciente(elemento.nombre, elemento.rut, elemento.edad, elemento.diagnostico); 
    div.innerHTML +=  persona.getNombre() + "<br>" + persona.getRut() + "<br>" + persona.getEdad() + "<br>" + persona.getDiagnostico()+ "<br>"+ "<br>";
})

function encontrar(){
    let sapu = new Consultorio("miraflores", paciente);
    let Paciente1 = sapu.buscarPaciente(nombreInput.value) 
    console.log(Paciente1)
    }

    



