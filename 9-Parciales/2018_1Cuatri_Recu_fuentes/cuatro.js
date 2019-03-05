function mostrar()
{
    var numero1;
    var numero2;
    
    var resultado;

    numero1=prompt("Ingrese un numero");
    numero2=prompt("Ingrese otro numero");

    numero1=parseInt(numero1);
    numero2=parseInt(numero2);
    
    if (numero1==numero2)
    {
        /*alert(resultado);*/
        alert(numero1 + "y" + numero2);
    }
    else
    {

        if (numero1>numero2)
        {
            /*alert(numero1 / numero2);*/
            alert(numero1 / numero2);
        }
        else
        {
            if (numero1<numero2)
            {
                /*alert(numero1+numero2);*/
                alert(numero1 + numero2);
            }
                suma=numero1+numero2;
                alert(suma);

                if (suma<=50)
                {
                    alert(" la suma es " + suma + " y es menor a 50 ");
                }
        }
    }
}
