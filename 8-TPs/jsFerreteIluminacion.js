/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var marca;
    var cantidad;
    var totalBruto;
    var porcentajeDescuento;
    var totalConDescuento;
    var IIBB=0;

    cantidad=document.getElementById("Cantidad").value;
    marca=document.getElementById("Marca").value;

    cantidad=parseInt(cantidad);
     
    totalBruto=cantidad*35;

           switch(cantidad)
           {
               case 5:
               if(marca=="ArgentinaLuz")
               {
                   porcentajeDescuento=0.4;
               }
               else
               {
                   porcentajeDescuento=0.3;
               }
            }
               break;
               case 4:
               if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
               {
                   porcentajeDescuento=0.25;
                }
                else
                {
                    porcentajeDescuento=0.20; 
                }
                break;
                case 3:
                if (marca=="ArgentinaLuz")
                {
                    porcentajeDescuento=0.15; 
                }
                else
                {

                }


    

                
    if (cantidad>=36)
    {
        porcentajeDescuento=0.5;
    }
    else
    {
        if (cantidad==5)
        {
            if (marca=="ArgentinaLuz")
            {
                porcentajeDescuento=0.4;
            }
            else
            {
                porcentajeDescuento=0.3;
            }
        }
        else
        {
            if (cantidad==4)
            {
                if (marca=="ArgentinaLuz" || marca=="FelipeLamparas")
                {
                    porcentajeDescuento=0.25;
                }
                else
                {
                    porcentajeDescuento=0.20;
                }    
            }
            else
            {
                if (cantidad==3)
                {
                    if (marca=="ArgentinaLuz")
                    {
                        porcentajeDescuento=0.15;
                    }
                    else
                    {
                        if (marca=="FelipeLamparas")
                        {
                            porcentajeDescuento=0.1;
                        }
                        else
                        {
                            porcentajeDescuento=0.05;
                        }
                    }
                }
            }
        }
    }
    totalConDescuento=totalBruto-(totalBruto*porcentajeDescuento);
    
    if(totalConDescuento>120)
    {
        IIBB=(totalConDescuento*0,1);
        alert( "Usted pago" + IIBB + "de IIBB");
    }
    document.getElementById("precioDescuento").value = totalConDescuento+IIBB;

}
