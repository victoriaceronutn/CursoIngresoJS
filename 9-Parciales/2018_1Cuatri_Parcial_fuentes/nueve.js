function mostrar()
{
    var pais;
    var habitantes =0;
    var contadorHabitantes =0;
    var temperatura;
    var tempMin =0;
    var tempMax =0;
    var contadorPares =0;
    var paisMin;
    var paisMax;
    var contadorMax =0;
    var promedio;
    var respuesta ="si";
    var contador =0;
    var contadorPositivos =0;
    var contadorNegativos =0;
    var sumaNegativos =0;
    var sumaPositivos =0;
    var numero =0;
    

    while(respuesta!= "no")
    {
        pais=prompt("Ingrese el nombre de un pais");
        habitantes=parseInt(prompt("Ingrese cantidad de habitantes"));
        while(habitantes<=1 || habitantes>=7000)
        {
            habitantes=prompt("ERROR, ingrese entre 1 y 7000");
        }
        tempMin=parseFloat(prompt("Ingrese la temperatura minima"));
        while(tempMin< -50 || tempMin> 50 )
        {
            tempMin=prompt("ERROR, ingrese de nuevo entre -50 y 50");
        }
        if(habitantes %2 ==0)
        {
            contadorPares++;
        }
        if(habitantes>0)
        {
            contadorPositivos++;
            sumaPositivos++;
        }
        else
        {
            contadorNegativos++;
            sumaNegativos++;
        }
        
        if(contador==0)
        {
            paisMin=pais;
            tempMin=temperatura;
            paisMax=pais;
            tempMax=temperatura;
        }
        else
        {
            if(habitantes<paisMin)
            {
                paisMin=pais;
                tempMin=temperatura;
            }
            else
            {
                paisMax=pais;
                tempMax=temperatura;
            }
        }
        if(temperatura>=40 )
        {
            contadorMax++;
        }
        contador++;
        sumaNegativos++;
        sumaPositivos++;
        respuesta=prompt("Desea ingresar de nuevo?");

    }
    promedio=sumaPositivos/contadorPositivos;
    document.write("la cantidad de temperaturas pares" + contadorPares);
    document.write("el nombre del pais con menos habitantes" + paisMin);
    document.write("la cantidad de paises que superan los 40 grados : " + contadorMax);
    document.write("el promedio de habitantes entre los paises ingresados : " + promedio);
    document.write("la temperatura minima ingresada : " + tempMin + ", y el nombre del pais que registro esa temperatura : " + paisMin);









    /*var marca;
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



    while(respuesta==true) 
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
        
        if(temperatura%2==0)
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
    document.write("el maximo peso es: " + maxPeso + " y el minimo peso es: "+ minPeso);*/

}
