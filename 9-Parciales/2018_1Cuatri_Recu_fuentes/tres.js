function mostrar()
{
     
    var precio;
    var descuento;
    var precioConDescuento;
    var porcentajeDescuento;
    
    
    precio=prompt("Ingrese un precio");
    precio=parseInt(precio);
    
    porcentajeDescuento=prompt("Ingrese el descuento");
    porcentajeDescuento=parseInt(porcentajeDescuento);

    descuento=precio*porcentajeDescuento/100;
    
    precioConDescuento=precio-descuento;
    
    
    document.getElementById("elPrecioFinal").value = precioConDescuento;

    

}
