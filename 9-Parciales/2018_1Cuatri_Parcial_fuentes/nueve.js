function mostrar()
{
    var marca;
    var peso;
    var temperatura;
    var contadorTemperaturaPar =0;
    var maxPeso=0;
    var minPeso=0;
    var maxMarca;
    var flagPesoMaximo;
    var contadorTemperaturaMenosCero;
    var promedioPeso;
    var contadorPeso=0;
    var acumuladorPeso=0;
    var respuesta=true;
    var minMarca;
    var flagPesoMinimo;


/*do while=hace y despues evalua. si no lo vimos, no se usa.*/ 

    while(respuesta==true) /*evalua y despues hace.*/
    {
        marca=prompt("Ingrese marca");
        peso=prompt("Ingrese peso");

        while(peso<1 || peso>100)
        {
            peso=prompt("Reingrese peso");
        }
        temperatura=prompt("Ingrese temperatura");
        while(temperatura< -30 || temperatura>30)
        {
            temperatura=prompt("Reingrese temperatura");
        }
        /*...*/
        /*a. cantidad de temp pares*/
        if(temperatura%2==0)/*esto te dice si es numero par*/
        {
            contadorTemperaturaPar++;
        }
        if(flagPesoMaximo==false || peso>maxPeso)
        {
            maxMarca=marca;
            maxPeso=peso;
            flagPesoMaximo=true;
        }
        if(flagPesoMaximo==false || peso<minPeso)
        {
            minMarca=marca;
            minPeso=peso;
            flagPesoMinimo=true;

        }
        contadorPeso++;
        acumuladorPeso=acumuladorPeso+peso;

        respuesta=confirm("Desea ingresar otro producto?");
    }
    promedioPeso=acumuladorPeso/contadorPeso;
    document.write("Cantidad de temperaturas pares " + contadorTemperaturaPar);
    document.write("El producto maximo es: " + maxMarca );
    document.write("cantidad de productos a menos de oº" + contadorTemperaturaMenosCero);
    document.write("el promedio es: " + promedioPeso);
    document.write("el maximo peso es: " + maxPeso + " y el minimo peso es: "+ minPeso);

}
