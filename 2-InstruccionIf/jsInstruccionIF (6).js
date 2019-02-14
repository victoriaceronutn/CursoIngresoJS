function mostrar()
{

//tomo la edad  

var edad

edad=document.getElementById("edad").value;
edad=parseInt(edad);

if (edad>=18)
{
alert("es mayor");

}
else
{ 
 
    if (edad>13&&edad<17)
    {
    alert("es adolescente");
    }
    else
    {
        if (edad<=13)
        {

            alert("es un niño");
        }
    }    
}

}//FIN DE LA FUNCIÓN