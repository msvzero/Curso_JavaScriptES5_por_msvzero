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


var posts = 
[
    {
        titulo: "Programacion en javascript",
        texto: "javaScript is the programming language of HTML and the Web",
    },
    {
        titulo: "Intro a Linux",
        texto: "javaScript is the programming language of HTML and the Web",
    },
    {
        titulo: "No usen Windows pirata",
        texto: "javaScript is the programming language of HTML and the Web",
    },
    

]

//console.log(posts);

/*for(var i = 0; i <= posts.length; i++){
    for(atributo in posts[i]){
        console.log(posts[i][atributo]);
    }
}*/

posts.map(function(post){
    //console.log(post.titulo);
    var titulo = post.titulo;
    var texto = post.texto;

    var contenedor = document.getElementById("contenedor");

    var header = document.createElement("H2");
    var textoTitulo = document.createTextNode(titulo);

    var parrafo = document.createElement("P");
    var textoParrafo = document.createTextNode(texto);



   // console.log(tituloPost)
    header.appendChild(textoTitulo);
    parrafo.appendChild(textoParrafo);

    contenedor.appendChild(header);
    contenedor.appendChild(parrafo);

})