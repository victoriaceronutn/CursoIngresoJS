function mostrar()
{
//tomo la edad  
var edad;
var estadoCivil;
edad=document.getElementById("edad").value;
edad=parseInt(edad);
estadocivil=document.getElementById("estadoCivil").value;
estadocivil=parseInt(estadocivil);

if (edad<18&&estadoCivil!="soltero") {

    alerta("es muy pequeño para no ser soltero");
}

}//FIN DE LA FUNCIÓN