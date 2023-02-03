function Consultorio(nombre, paciente){
    this.nombre = nombre
    this.paciente = paciente

    Consultorio.prototype.getNombre = function(){
        return   this.nombre 
    }  
    Consultorio.prototype.getFiltro = function(){
        return paciente.datosPaciente.filter(elemento=>elemento.nombre === nombreInput.value)
    } 
    
}


