function mostrar()
{
    var precio;
    var porcentajeDescuento;
    var precioConDescuento;
    var descuento;

    precio=parseFloat(prompt("Ingrese el precio del producto"));
    porcentajeDescuento=parseFloat(prompt("Ingrese el descuento"));


    descuento=precio*porcentajeDescuento/100;
    
    precioConDescuento=precio-descuento;

    document.getElementById("elPrecioFinal").value = precioConDescuento;

}
