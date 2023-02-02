
const div = document.getElementById("pacientes");
const nombreInput = document.getElementById("NombreInput");

paciente.datosPaciente.forEach(elemento=>{


    const persona = new Paciente(elemento.nombre, elemento.rut, elemento.edad, elemento.diagnostico); 
    console.log(persona)
    div.innerHTML +=  persona.nombrar();
})

function encontrar(){
    let pacienteEncontrado = paciente.datosPaciente.filter(elemento=>elemento.nombre === nombreInput.value)
    const persona = new Paciente(elemento.nombre, elemento.rut, elemento.edad, elemento.diagnostico); 
    console.log(persona)
    div.innerHTML = persona.nombrar()
    // 'Paciente: ' + pacienteEncontrado[0].nombre + '<br>' + 'Rut: '  + pacienteEncontrado[0].rut + '<br>' + 'Edad: ' +  pacienteEncontrado[0].edad + '<br>' + 'Diagnostico: ' + pacienteEncontrado[0].diagnostico ;
} 