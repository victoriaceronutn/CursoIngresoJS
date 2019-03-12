
function mostrar()
{
    var largo;
    var ancho;
    var perimetro;

    largo=parseFloat(prompt("Ingrese el largo"));
    ancho=parseFloat(prompt("Ingrese el ancho"));


    perimetro=2*(ancho+largo);

    alert(" su perimetro es " + perimetro);

}
