
const div = document.getElementById("pacientes");


paciente.datosPaciente.forEach(elemento=>{
    const persona = new Paciente(elemento.nombre, elemento.rut, elemento.edad, elemento.diagnostico); 
    console.log(persona)
    div.innerHTML +=  persona.nombrar();
})