function mostrar()
{
    var numero1;
    var numero2;
    
    var resultado;

    resultado= numero1 + numero2;
    
    if (resultado==resultado)
    {
        /*alert(resultado);*/
        prompt(resultado);
    }
    else
    {

        if (numero1>numero2)
        {
            /*alert(numero1 / numero2);*/
            prompt(numero1 / numero2);
        }
        else
        {
            if (numero1<numero2)
            {
                /*alert(numero1+numero2);*/
                prompt(numero1+numero2);
            }
            else
            {
                if (resultado<=50)
                {
                    alert("la suma es " + resultado + "y es menor a 50");
                }
            }
        }
    }
}
