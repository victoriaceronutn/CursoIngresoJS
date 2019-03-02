
function mostrar()
{
    var largo;
    var ancho;
    var perimetro;

    largo=prompt("Ingrese el largo");
    ancho=prompt("Ingrese el ancho");

    largo=parseFloat(largo);
    ancho=parseFloat(ancho);

    perimetro=2*(ancho+largo);

    alert(" su perimetro va a ser " + perimetro);

}
