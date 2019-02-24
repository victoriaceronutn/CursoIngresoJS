function mostrar()
{
var precio;
var propina;
var amigos;
var cadauno;
var descuento;
var resultado;


propina=descuento+((descuento*10)/100);

descuento=precio-((precio*25)/100);

cadauno=amigos/propina;

resultado=cadauno;

prompt("precio"+precio);
precio=parseInt(precio);

prompt("amigos"+amigos);
amigos=parseInt(amigos);

preciofinal=document.getElementById("elPrecioFinal").value;

alert(" cada uno en total debe pagar " + resultado );


}
