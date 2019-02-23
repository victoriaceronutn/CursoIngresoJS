/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var numeroPrimero;
    var numeroSegundo;
    var suma;

    numeroPrimero=numeroUno.value;
    numeroSegundo=numeroDos.value;

    numeroPrimero=parseInt(numeroPrimero);
    numeroSegundo=parseInt(numeroSegundo);

    suma=numeroPrimero+numeroSegundo;

    alert(" la suma es " + suma);

}

