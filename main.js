let dia = prompt("Ingrese un dia de la semana en minusculas");

alert("Ingresaste el dia: " + dia);
if(dia == "lunes" || dia == "martes" || dia == "miercoles" || dia == "jueves" || dia == "viernes"){
    alert("Es un dia laboral")
}
else if(dia == "sabado" || dia == "domingo"){
    alert("Es un dia de descanso")
}
else{
    alert("Eso no es un dia de la semana valido")
}



