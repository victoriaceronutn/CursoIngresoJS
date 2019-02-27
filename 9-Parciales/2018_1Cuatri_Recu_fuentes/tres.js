function mostrar()
{
var precio;
var descuento;
var preciofinal;

precio=document.getElementById("precio");
descuento=document.getElementById("descuento");
preciofinal=document.getElementById("elPrecioFinal");

precio=prompt("precio");
precio=parseInt(precio);

descuento=prompt("descuento");
descuento=parseInt(descuento);

descuento=precio-(precio*25/100);

preciofinal=precio-(precio*descuento/100);


alert(preciofinal);


}
