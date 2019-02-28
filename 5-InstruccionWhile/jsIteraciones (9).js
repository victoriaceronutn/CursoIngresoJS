function mostrar()
{

	var contador=0;
	// declarar variables
	var numero;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	var cantidad;
	var numeroIngresado;
	var bandera;

	respuesta="si";
	cantidad=0;
	numeroMaximo=-9999;
	numeroMinimo=999;
	bandera="es la primera";


	while(respuesta!='no')
	{
		numeroIngresado=prompt("ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);

		if(bandera=="es la primera")
		{
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
			//bandera="lalala";
		}else
		{
			/*numero=prompt("Ingrese un numero");*/
		
			if (numeroIngresado>numeroMaximo)
			{
				numeroMaximo=numeroIngresado;
			}
			if (numeroIngresado<numeroMinimo)
			{
				numeroMinimo=numeroIngresado;
			}
		}

		respuesta=prompt("ingrese no para salir");	
	}
	/*console.log("el maximo es"+numeroMaximo);
	console.log("el minimo es"+numeroMinimo);*/

	document.getElementById("numeroMaximo").value;
	document.getElementById("numeroMinimo").value;

	
}//FIN DE LA FUNCIÓN