function mostrar()
{
    var altura =0;
    var sexo =0;
    var contador =0;
    var promedioAlturas;
    var alturaMinima =0;
    var sexoMin =0;
    var alturaMaxMujeres =0;
    var sexoMujer =0;
    var sumaAltura =0;
    var contadorAltura =0;
    var cantidadMujeres =0;
    

    while(contador<5)
    {
        altura=parseFloat(prompt("Ingrese una altura en cm"));
        while(altura<0 || altura>250 )
        {
            prompt("ERROR, vuelva a ingresar");
        }

        sexo=prompt("Ingrese un sexo ");
        while(sexo != "f" && sexo != "m")
        {
            prompt("ERROR, vuelva a ingresar");
        }
        if(contador==0 || altura<alturaMinima)
        {
            alturaMinima=altura;
            sexoMin=sexo;
        }
        else
        {
            if(altura<alturaMinima)
            {
                alturaMinima=altura;
                sexoMin=sexo;
            }
        }
        if(contador==0 || altura>alturaMaxMujeres)
        {
            alturaMaxMujeres=altura;
            sexoMujer= sexo;
        }
        else
        {
            if(altura>alturaMaxMujeres)
            {
                alturaMaxMujeres=altura;
                sexoMujer=sexo;
            }
        }
        if(alturaMaxMujeres=>190)
        {
            cantidadMujeres++;
        }

        contador++;
        sumaAltura++;
        contadorAltura++;
        
    }
    promedioAlturas=sumaAltura/contadorAltura;

    alert("El promedio de las alturas totales " + promedioAlturas);
    alert("La altura mas baja" + alturaMinima + " y el sexo es " + sexoMin);
    alert("La cantidad de mujeres que su altura supere los 190 centimetros es de " + cantidadMujeres);







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

}
