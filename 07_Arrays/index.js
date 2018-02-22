// Un array es utilizado para almacenar multiples valores en una sola variable
var dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
console.log("Dias de la semana: ", dias);

var marcas = new Array("Toyota", "Nissan", "Kia");
console.log("Marcas de autos:", marcas);

//Acceder a un elemento del array
console.log("El peor dia de la semana es ", dias[0]);
console.log("El mejor dia de la semana es ", dias[4]);

//Acceder a todos los elemnetos del array
document.getElementById("valores").innerHTML = marcas;

//Propiedades y metodos de los arrays
console.log("Cunatos dias tiene una semana:", dias.length);// contar los elementos de un array

var clientes = [
    "Andres Martinez",
    "Juan Perez",
    "Carlos Ramirez",
    "Martin Serratti"
]
//Impresion del array original
console.log("Array sin ordenar", clientes);
//Impresion del array ordenado
console.log("Array sin ordenar", clientes.sort());
//Impresion del array invertido
console.log("Array invertido", clientes.sort().reverse());

//Agregar un elemento al array
clientes.push("Carlos Perez"); // agrega un elemento al final del array
console.log("Array sin ordenar", clientes.sort());

//Eliminando un elemento del array
clientes.pop(); //elimina el ultimo elemento del array
clientes.shift(); //elimina el primer elemento del array
console.log("Array sin ordenar", clientes.sort());

//Array vacio
var ventas = [];
//Como saber si una variable es un array
console.log(Array.isArray(clientes));

//Convertir un array a string
console.log("COnvertir array a string: ", clientes.toString());
//Pasar un array a string indicando el separador
console.log("COnvertir array a string: ", clientes.join("-"));

//Cambiando un elemento

marcas[0] = "Suzuki";
console.log("Marcas actualizado ", marcas);
