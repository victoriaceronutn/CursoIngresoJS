function mostrar()
{
    var numero;
    var cantPares;
    var cantNumeros;
    var suma;
    var maximo;
    var minimo;
    var promedio;
    var seguir;
    var flag =1;

    while(true)
    {
        numero=parseInt(prompt("Ingrese un numero: "));
        while(numero<0 || isNaN(numero))
        {
            numero=parseInt(prompt("Reingrese un numero: "));
        }
        
        if(flag ==1)
        {
            minimo=numero; 
            maximo=numero;
            flag=0;
        }

        if(numero<= minimo)
        {
            minimo=numero;
        }
        if(numero>= maximo)
        {
            maximo=numero;
        }
        if(numero % 2 == 0)
        {
            cantPares++;
        }

        cantNumeros++;
        suma+= numero;

        seguir = prompt("Desea ingresar otro numero?");
    
    }
    while(seguir == "s");
    
    promedio=suma / cantNumeros;

    document.write("La cantidad de numeros pares es igual a " + cantPares);
    document.write("El promedio de todos los numeros es igual a " + promedio);
    document.write("La suma de todos los numeros es igual a " + suma);
    document.write("El numero maximo es igual a " + maximo);
    document.write("El numero minimo es igual a " + minimo);

}
