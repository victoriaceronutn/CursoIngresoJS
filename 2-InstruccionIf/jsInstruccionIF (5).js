function mostrar()
{
//tomo la edad  
var edad
 edad=document.getElementById("edad").value;
 edad=parseInt(edad);

 if (edad>=13 || edad<=17) {
alert("no es adolescente");
 }

}//FIN DE LA FUNCIÓN