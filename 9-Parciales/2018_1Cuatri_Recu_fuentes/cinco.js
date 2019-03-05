function mostrar()
{
    var dia;

    dia=prompt("Ingrese un dia");

    switch (dia) 
    {
        case "sabado":
        case "domingo":
        alert ("Buen finde");
        break;

        case "lunes":
        case "martes":
        case "miercoles":
        case "jueves":
        case "viernes":
        alert("A trabajar");
        break;
        default:
        alert("No ingreso un dia valido");
        
    }

    

    /*var importe;
    var mayor;
    var descuento;
    var mensaje;
   
    mayor=40;
    importe=(150-2);

    if (importe>100)
    {
        mensaje="-10 descuento";
        prompt(importe>100);
    }
    else 
    { 

    }
        if (importe>25)
        {
            mensaje="-5 descuento";
            prompt(importe>25);
        }
        else
        {
        }
            if (importe<50)
            {
                mensaje="+15 descuento";
                prompt(importe<50);
            }
            else
            {
            }
            alert("importe"+prompt);*/

}

