let dia = prompt("Ingrese un dia de la semana en minusculas");
alert("Ingresaste el dia: " + dia);

switch (dia) {
    case "lunes":
    case "martes":
    case "miercoles": 
    case "jueves":
    case "viernes":
        alert("es un dia laboral");
    break;
    case "sabado":
    case "domingo":
        alert("es un dia de descanso");
    break;
    default:
    alert("eso no es un dia de la semana");
}

