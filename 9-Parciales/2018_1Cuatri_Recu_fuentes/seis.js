function mostrar()
{
    var hora;
    var temprano;
    var dia;

    temprano=6, 7, 8, 9, 10, 11;
    dia=12, 13, 14, 15, 16, 17, 18, 19; 
    noche=20, 21, 22, 23, 24;

    hora=document.getElementById("laHora").value;
    

    switch (hora)
    {
        case 1:
            if(hora==temprano)
            {
                alert("es de mañana"+laHora);
            }
            break;

        case 2:
            if(hora==dia)
            {
                alert("es de tarde"+laHora);
            }
            break;

        case 3:
            if(hora==noche)
            {
                alert("es de noche"+laHora);
            }
            break;
            default:    
    }
}
