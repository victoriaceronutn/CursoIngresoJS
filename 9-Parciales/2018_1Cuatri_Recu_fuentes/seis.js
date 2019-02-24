function mostrar()
{
    var hora
    hora=document.getElementById("laHora").value;
    

    switch (hora)
    {
        case 1:
            if(hora==6-11)
            {
                alert("es de mañana");
            }
            break;

        case 2:
            if(hora==12-19)
            {
                alert("es de tarde");
            }
            break;

        case 3:
            if(hora==20-24)
            {
                alert("es de noche");
            }
            break;
            default:    
    }
}
