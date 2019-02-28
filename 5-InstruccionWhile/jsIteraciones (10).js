function mostrar()
{
	var contador;
	//declarar contadores y variables 
	
	var respuesta="si";
	var sumaPositivos;
	var sumaNegativos;
	var cantidadNegativos;
	
	respuesta="si";
	sumaNegativos=0;
	sumaPositivos=0;
	cantidadNegativos=0;

	while(respuesta!="no")
	{
		numero=prompt("Ingresa un numero:");
		numero=parseInt(numero);

		if(numero<0)
		{
			sumaNegativos=sumaNegativos+numero;
		}
		if(numero>0)
		{
			sumaPositivos=sumaPositivos+numero;
		}
		respuesta=prompt("Ingrese NO para salir","Escriba aqui");
	}
	console.log("Suma de negativos: "+ negativos);

}//FIN DE LA FUNCIÓN