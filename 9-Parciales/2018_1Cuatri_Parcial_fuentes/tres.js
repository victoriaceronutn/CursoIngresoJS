function mostrar()
{
    var precio;
    var porcentajeDescuento;
    var precioConDescuento;
    var descuento;

    precio=prompt("Ingrese el precio del producto");
    porcentajeDescuento=prompt("Ingrese el descuento");

    precio=parseInt(precio);
    /* o precio=parseFloat(precio);*/
    porcentajeDescuento=parseInt(porcentajeDescuento);

    descuento=precio*porcentajeDescuento/100;
    
    precioConDescuento=precio-descuento;

    document.getElementById("elPrecioFinal").value = precioConDescuento;

}
