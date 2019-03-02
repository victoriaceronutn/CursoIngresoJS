function mostrar()
{
    var unNumero;
    var otroNumero;
    var suma;

    unNumero=prompt("Ingrese un numero");
    otroNumero=prompt("ingrese otro numero");

    unNumero=parseInt(unNumero);
    otroNumero=parseInt(otroNumero);

    if(unNumero==otroNumero)
    {
        alert(unNumero + "y" + otroNumero);        
    }
    else
    {
        if(unNumero>otroNumero)
        {
            alert(unNumero-otroNumero);
        }
        else
        {
            if(otroNumero<unNumero);
            {
                alert(otroNumero+unNumero);
            }
            suma=otroNumero+unNumero;
            alert(suma);
            if(suma>10)
            {
                alert(" la suma es " + suma + " y supero el 10 ");
            }
        }
    }
}
