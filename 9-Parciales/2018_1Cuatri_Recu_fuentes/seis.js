function mostrar()
{
    var hora;
    hora=document.getElementById("laHora").value;

    var flag;

    hora=parseInt(hora);

    switch(hora)
    {
        case 6:
        case 7: 
        case 8:
        case 9:
        case 10:
        case 11:
            alert("Es de mañana");
            break;
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        alert("Es de tarde");
        break;
        default:
        
        if(hora>=20 && hora<=24 || hora>=1 && hora<=5)
        {
            if(hora>5)
            {
                alert("A dormir");
            }
            alert("Es de noche");    
        }
        else
        {
            alert("No es valida la hora");
        }   
    }
}
