function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var Enero;
var Marzo;
var Julio;
var Diciembre;
var mensaje;
switch("mesDelAño")
{
    case "Enero":
      mensaje="que comiences bien el año!!!";
      break;
    
    case "Marzo":
      mensaje="a clases!!!";
      break;

    case "Julio":
      mensaje="se vienen las vacaciones!!!";
      break;
      
    case "Diciembre":
      mensaje="Felices fiestas!!!";
      break;

      alert(mensaje);
}


}//FIN DE LA FUNCIÓN