
const div = document.getElementById("pacientes");
const nombreInput = document.getElementById("NombreInput");

paciente.datosPaciente.forEach(elemento=>{
    const persona = new Paciente(elemento.nombre, elemento.rut, elemento.edad, elemento.diagnostico); 
    div.innerHTML +=  persona.getNombre() + "<br>" + persona.getRut() + "<br>" + persona.getEdad() + "<br>" + persona.getDiagnostico()+ "<br>"+ "<br>";
})


function encontrar(){
     
    div.innerHTML = 'Paciente: ' + pacienteEncontrado[0].nombre + '<br>' + 'Rut: '  + pacienteEncontrado[0].rut + '<br>' + 'Edad: ' +  pacienteEncontrado[0].edad + '<br>' + 'Diagnostico: ' + pacienteEncontrado[0].diagnostico ;
}
