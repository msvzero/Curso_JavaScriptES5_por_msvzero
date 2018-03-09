//Buscamos elementos por el id
//Buscamos el elemento "tituloPagina"
var tituloPagina = document.getElementById("tituloPagina");
console.log("Por id ",tituloPagina);

//Buscando elementos por el nombre de la clase.
//Buscamos los encabezados de cada articulo
var encabezados = document.getElementsByClassName("encabezado");
console.log("Por clases: ", encabezados);

//Buscamos elementos por el nombre del tag
//Buscamos los elementos "p"
var parrafos = document.getElementsByTagName("p");
console.log("Por tag",parrafos);

//Bucamos un elemento por el selector CSS
//var elemento = document.querySelectorAll("h1.tituloArticulo"); //The querySelectorAll() method does not work in Internet Explorer 8 and earlier versions.
//console.log("Por selector", elemento);


var elemento = document.getElementById("contenedor");
console.log(elemento.children);
console.log(elemento.children[0]);
console.log(elemento.children[0].innerHTML);
console.log(elemento.firstElementChild);

var segundoPost = elemento.children[2].children[1];
console.log(segundoPost);
console.log(segundoPost.children[0])




