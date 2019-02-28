function mostrar()
{
//tomo la edad  
var mesDelAño 
mesDelAño = document.getElementById('mes').value;


switch(mesDelAño)
{
    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
        mesDelAño="Falta para el invierno"
        break;
    case "Julio":
    case "Agosto":
        mesDelAño="Abrigate que hace frio"
        break;
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
        mesDelAño="Ya pasamos el frio, ahora el calor!!"
        break;   
}

alert(mesDelAño);

}//FIN DE LA FUNCIÓN