//Funcion que recibe dos parametros a y b, luego realiza la suma.
function suma(a, b) {
    console.log(a + b);
}

//suma(10, 15); // Llamado al metodo suma. Se le pasa dos argumentos.

//Funcion que retorna un valor
function resta(a, b) {
    var resultado = a - b;
    return resultado;
}

console.log('El resultado de restar 2 de 5 es : ',resta(5, 2));

//Funcion como valor
var resultadoResta = resta(10, 2);
console.log('Funcion como valor: ', resultadoResta);

//Funcion como expression

var calcular = function(a, b) {// Funcion anonima
    return a * b;
}

//Funcion utilizanddo un constructor
var miFuncion = new Function("a", "b", "return a % b");
console.log("Utilizando el constructor de funciones: ", miFuncion(19, 5));

//console.log('Valor calculado: ', calcular(10, 3));
//Funcion anonima que se auto invoca
console.log('El valor calulado es: ', function(a, b) { return a - b}(5, 1));

//Funcion con parametro por defecto
function dividir(a, b) {
    if(b === undefined){
        b = 2;
    }
    return a/b;
    
}
 console.log('Dividir', dividir(8));