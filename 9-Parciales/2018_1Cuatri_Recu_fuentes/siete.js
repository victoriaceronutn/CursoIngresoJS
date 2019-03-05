function mostrar()
{
    var velocidad;
    var combustible;
    var contador;
    var promedio;
    var sumaDeVelocidades;
    var velocidadMinima;
    var combustibleVelocidadMasBaja;
    var contadorCombustible;
    var veocidadMaximaSolido;

    velocidad=0;
    combustible=0;
    contador=0;
    sumaDeVelocidades=0;
    velocidadMinima=0;
    combustibleVelocidadMasBaja=0;
    contadorCombustible=0;
    veocidadMaximaSolido=0;

    while(contador<5)
    {
        velocidad=prompt("Ingrese una velocidad en km");
        velocidad=parseInt(velocidad);

        while(velocidad<0 || velocidad>250)
        {
            velocidad=prompt("Error, ingrese de nuevo la velocidad");
            break;
        }
        combustible=prompt("Ingrese el tipo de combustible");
        
        while(combustible !="liquido" || combustible !="solido")
        {
            combustible=prompt("Error, ingrese si es solido o liquido");
            break;
        }
        sumaDeVelocidades=sumaDeVelocidades+velocidad;

        if(velocidad<=velocidadMinima || contador==0)
        {
            velocidadMinima=velocidad;
            combustibleVelocidadMasBaja=combustible;
        }
        else
        {
            if(velocidad<velocidadMinima)
            {
                velocidadMinima=velocidad;
                combustibleVelocidadMasBaja=combustible;
            }
        }
        if(velocidad>100 && combustible=="liquido")
        {
            contadorCombustible++;
        }
        if(velocidad>veocidadMaximaSolido && combustible=="solido")
        {
            veocidadMaximaSolido=velocidad;
        }

    contador++;
    velocidadMinima++;
    veocidadMaximaSolido++;   
    }

promedio=sumaDeVelocidades/5;

alert("El promedio de las velocidades es " + promedio );
alert("La velocidad minima es " + velocidadMinima + " y el combustible es " + combustibleVelocidadMasBaja );
alert("Cantidad de combustible liquido : " + contadorCombustible );
alert("La velocidad mas alta de los solidos es " + veocidadMaximaSolido );


}
