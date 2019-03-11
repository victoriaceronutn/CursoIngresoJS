function mostrar()
{
    var continente;
    var cantDias =0;
    var descuento =0;
    var precioSinDescuento=0;
    var precioConDescuento=0; 
    var metodoDePago;
    var precioPorDia =100;
    

    continente=document.getElementById("Continente").value;
    continente=prompt("Ingrese un continente");

    cantDias=parseInt(prompt("Ingrese la cantidad de dias"));

    metodoDePago=document.getElementById("metodoDePago").value;

    precioConDescuento=precioPorDia*cantDias;
    
    switch(continente)
    {
        case "America":
        descuento=50;

        switch(metodoDePago)
        {
            case "mercadoPago":
            case "Debito":
            descuento=descuento+10;
            break;
        }

        case "Africa":
        descuento=60;

        switch(metodoDePago)
        {
            case "mercadoPago":
            case "Efectivo":
            descuento=descuento+15;
            break;
        }

        case "Europa":
        descuento=20;

        switch(metodoDePago)
        {
            case "Debito":
            descuento=descuento+15;

            case "mercadoPago":
            descuento=descuento+10;

            break;
            default:
            descuento=descuento+5;
            break;
        }
        precioConDescuento=precioSinDescuento-precioSinDescuento*descuento/100;
        default:
        precioConDescuento=precioSinDescuento+precioSinDescuento*20/100;
        break;
    }
     alert("El precio sin descuento es " + precioSinDescuento + ", el porcentaje de desceunto es " + descuento + " y el precio con descuento es " + precioConDescuento);
    
    
    /*var planeta;
    planeta=prompt("Ingrese un planeta");

    switch(planeta)
    {
        case "mercurio":
        case "venus":  
        alert("Aca hace mas calor");
        break;

        case "tierra":
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
        case "pluton":
        alert("Aca hace mas frio");
        break;
        default:
        alert("No ingreso un planeta valido");

    }*/
}
