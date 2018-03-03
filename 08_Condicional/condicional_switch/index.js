
var dia = new Date().getDay();
switch(dia){
    case 1:
        document.getElementById("contenedor").innerHTML = "Hoy es Lunes";
        break
    case 2:
        document.getElementById("contenedor").innerHTML = "Hoy es Martes";
        break
    case 3:
        document.getElementById("contenedor").innerHTML = "Hoy es Miercoles";
        break
    case 4:
        document.getElementById("contenedor").innerHTML = "Hoy es Jueves";
        break
    case 5:
        document.getElementById("contenedor").innerHTML = "Hoy es Viernes";
        break
    case 6:
        document.getElementById("contenedor").innerHTML = "Hoy es Sabado";
        break
    case 7:
        document.getElementById("contenedor").innerHTML = "Hoy es Domingo";
        break
    default:
        console.log("Nro del dia de la semana: ", new Date().getDay());
}