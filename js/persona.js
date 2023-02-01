function Paciente(nombre, rut, edad, diagnostico){
    this.nombre = nombre;
    this.rut = rut;
    this.edad = edad;
    this.diagnostico = diagnostico;

    this.nombrar = function(){
        return "Paciente : " + nombre  + " <br>" + "Rut : " +rut + "<br>"+"Edad : " + edad + "<br>" + "diagnostico : " +diagnostico + "<br>"+"<br>";
    }
    
}