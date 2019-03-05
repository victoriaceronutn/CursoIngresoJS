function mostrar()
{
    var pais;
    var territorio;
    var contador;
    var respuesta;
    
    var superficieImpar;
    var superficeMenorCien;
    var superficeIgualCien;

    var contadorPais;
    var primerPais;
    var contadorKm;
    var sumaKm;
    var promedioKm;
    var territorioMin;
    var paisMin;
    
    contador =0;
    respuesta ="si";

    superficieImpar =0;
    superficeMenorCien =0;
    superficeIgualCien =0;

    contadorPais =0;
    contadorKm =0;
    sumaKm =0;

    while(respuesta!= "no")
    {
        pais=prompt("Ingrese un pais");

        territorio=prompt("Ingrese un territorio");
        territorio=parseInt(territorio);

        while(territorio<1)
        {
            territorio=prompt("Reingrese el territorio");

        }
        if(territorio%2!=0) /* %2 = es para saber si es par */
        {                   /* %2! = para saber numero impar */
            superficieImpar++;
        }
        if(territorio<100)
        {
            superficeMenorCien++;
        }
        if(territorio==100)
        {
            superficeIgualCien++;
        }
        if(territorio>100)
        {
            contadorPais++;

            if(contadorPais==1)
            {
                primerPais=pais;
            }
        }
        if(contador=0)
        {
            territorioMin=territorio;
            paisMin=pais;
        }
        else
        {
            if(territorio<territorioMin)
            {
                territorioMin=territorio;
                paisMin=pais;
            }
        }
        contador++;
        contadorKm++;
        sumaKm=sumaKm+territorio;
        respuesta=prompt("Desea seguir?");

    }

promedioKm=sumaKm/contadorKm;

    document.write("La cantidad de paises con superficie impar : " + superficieImpar );
    document.write("La cantidad de paises con superficie menor a 100 : " + superficeMenorCien);
    document.write("La cantidad de paises con superficie igual a 100 : " + superficeIgualCien);
    document.write("El nombre del primer pais que supero los 100 de superficie : " + primerPais);
    document.write("El promedio de km ingresados : " + promedioKm );
    document.write("El nombre del que menos territorio tiene : " + paisMin);

}
