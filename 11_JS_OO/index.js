/*Objetos en JavaScript
    - Atributos
    - Metodos
*/
//Object Literal
var persona = {nombre:"Juan", apellido: "Perez", edad:23, nombreCompleto: function(){ return this.nombre+" "+this.apellido}};

/*console.log("Datos: ",persona);
console.log("Nombre: ", persona.nombre);
console.log("Nombre: ", persona["nombre"]);
console.log("Nombre completo: ", persona.nombreCompleto());
console.log("Nombre completo: ", persona.nombreCompleto().toLocaleUpperCase());*/

for (var atributo in persona){
    console.log(persona[atributo]);
}