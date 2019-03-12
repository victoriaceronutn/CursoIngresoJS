function mostrar()
{

    var numero =0;
    var letra;
    var respuesta ="si";
    var contadorPares =0;
    var contadorImpar =0;
    var contadorCeros =0;
    var contadorPositivos =0;
    var contadorNegativos =0;
    var sumaNegativos =0;
    var sumaPositivos =0;
    var numeroMax;
    var numeroMin;
    var letraMax;
    var letraMin;
    var promedioPositivos;
    var contador =0;


    while(respuesta!= "no")
    {
        letra=prompt("Ingrese una letra");
        numero=parseInt(prompt("Ingrese un numero: "));
        while(numero< -100 || numero>100 )
        {
            numero=parseInt(prompt("Reingrese un numero: "));
        }
        
        if(numero % 2 == 0)
        {
            contadorPares++;
        }
        else
        {
            contadorImpar++;
        }
        if(numero==0)
        {
            contadorCeros++;
        }
        else
        {
        if(numero>0)
        {
            contadorPositivos++;
            sumaPositivos=sumaPositivos+numero;
        }
        else
        {
            contadorNegativos++;
            sumaNegativos=sumaNegativos+numero;
        }
        if(contador==0)
        {
            numeroMax=numero;
            letraMax=letra;
            numeroMin=numero;
            letraMin=letra;
        }
        else
        {
            if(numero<= numeroMin)
            {
                numeroMin=numero;
                letraMin=letra;
            }
            else
            {
                numeroMax=numero;
                letraMax=letra;
            }
        }
        
        contador++;
        sumaNegativos++;
        sumaPositivos++;
        respuesta= prompt("Desea ingresar otro numero?");
    }
}

    promedioPositivos=sumaPositivos / contadorPositivos;

    document.write("La cantidad de numeros pares es igual a " + contadorPares);
    document.write("La cantidad de números impares" + contadorImpar);
    document.write("La cantidad de ceros" + contadorCeros);
    document.write("El promedio de todos los números positivos ingresados" + promedioPositivos);
    document.write("La suma de todos los números negativos" + sumaNegativos);
    document.write("El número maximo es " + numeroMax + " y la letra del máximo es " + letraMax);
    document.write("El número minimo es " + numeroMin + " y la letra del minimo es " + letraMin);

}