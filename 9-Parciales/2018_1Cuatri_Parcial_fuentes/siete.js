function mostrar()
{
    var nota;
    var sexo;
    var notaBaja;
    var contadorVaronesMas6 = 0;
    var acumuladorNotas = 0;
    var i;
    var promedio;

    
    for(i = 1; i <=6; i++)
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
        if(i==1)
        {
            notaBaja=nota;
        }
        if(nota <= notaBaja)
        {
            notaBaja=nota;
        }
        if(sexo=="m" && nota >= 6)
        {
            contadorVaronesMas6++;
        }

        acumuladorNotas+= nota;
        promedio=acumuladorNotas/i;
    }    

    

alert("El promedio final de las notas fue de " + promedio + " puntos ");
alert("La nota mas baja fue de " + notaBaja + " puntos " );
alert("La cantidad de varones con notas mayores o iguales a 6 fue de " + contadorVaronesMas6 + " alumnos ");

}
