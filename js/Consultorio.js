
function Consultorio(nombre, paciente){
    this.nombre = nombre
    this.paciente = paciente

    Consultorio.prototype.getNombre = function(){
        return   this.nombre 
    }  
    Consultorio.prototype.buscarPaciente = function(nombre){
        return paciente.datosPaciente.filter(elemento=>elemento.nombre === nombre)
    } 
}

// AGREGAR FORMULARIO HTLMMPARA AGRAGAR PACIENTES 