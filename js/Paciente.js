function Paciente(nombre, rut, edad, diagnostico){
    this.nombre = nombre ;
    this.rut = rut;
    this.edad = edad;
    this.diagnostico = diagnostico;

    Paciente.prototype.getNombre = function(){
        return   this.nombre 
    }  
    Paciente.prototype.getRut = function(){
        return   this.rut 
    } 
    Paciente.prototype.getEdad = function(){
        return   this.edad 
    } 
    Paciente.prototype.getDiagnostico = function(){
        return   this.diagnostico
    } 
    
}
       


