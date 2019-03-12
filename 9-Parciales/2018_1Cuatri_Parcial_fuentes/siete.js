function mostrar()
{
    var altura =0;
    var sexo =0;
    var contador =0;
    var promedio;
    var alturaMinima =0;
    var sexoMin =0;
    var alturaMaxMujeres =0;
    var sexoMujer =0;
    var sumaAltura =0;
    var contadorAltura =0;
    var cantidadMujeres =0;
    var sexoMax =0;
    var sumaNegativos =0;
    var sumaPositivos =0;
    var contadorNegativos =0;
    var contadorPositivos =0;
    var respuesta ="si";
    var acumulador;

    contador=0;
    while(contador<5)
    {
        altura=parseFloat(prompt("Ingrese una altura en cm"));
        contador++;
        while(altura<0 || altura>250 )
        {
            altura=prompt("ERROR, vuelva a ingresar");
        }


        sexo=prompt("Ingrese un sexo ");
        while(sexo != "f" && sexo != "m")
        {
            sexo=prompt("ERROR, vuelva a ingresar");
        }

        console.log(sexo);
        console.log(altura);
        if(contador==0 || altura<alturaMinima)
        {
            alturaMinima=altura;
            sexoMin=sexo;
        }

        if(sexo="f" && altura>=190)
        {
            alturaMaxMujeres=altura;
            cantidadMujeres++;
        }
        acumulador=acumulador/altura;
        
    }
    promedio=acumulador+altura;

    alert("El promedio de las alturas totales " + promedio);
    alert("La altura mas baja" + alturaMinima + " y el sexo es " + sexoMin);
    alert("La cantidad de mujeres que su altura supere los 190 centimetros es de " + cantidadMujeres);

}



    /*var nota =0;
    var sexo =0;
    var notaMin =0;
    var sumaNotas =0;
    var sexoNotaMin =0;
    var contadorVarones = 0;
    var contadorDeNotas = 0;
    var contador =0;
    var promedioNotas;

    
    while(contador<5)
    {
        nota = parseInt(prompt("Ingrese nota: "));
        while(nota < 0 || nota > 10 || isNaN(nota))
        {
            nota = parseInt(prompt("Error, reingrese nota: "));
        }

        sexo = prompt("Ingrese sexo: ");
        while(sexo !="f" && sexo !="m")
        {
            sexo= prompt("Error, reingrese sexo: ");
        }  
        if(contador==0 || nota<notaMin)
        {
            notaMin=nota;
            sexoNotaMin=sexo;
        }
        else
        {
            if(nota<notaMin)
            {
                notaMin=nota;
                sexoNotaMin=sexo;
            }
        }
        if( nota>=6 && sexo=="m" )
        {
            contadorVarones++;
        }

        contador++;
        contadorDeNotas++;
        sumaNotas++;
    }    

promedioNotas=sumaNotas/contadorDeNotas;    
alert("El promedio final de las notas fue de " + promedioNotas + " puntos ");
alert("La nota mas baja fue de " + notaMin + " puntos " );
alert("La cantidad de varones con notas mayores o iguales a 6 fue de " + contadorVarones + " alumnos ");*/


