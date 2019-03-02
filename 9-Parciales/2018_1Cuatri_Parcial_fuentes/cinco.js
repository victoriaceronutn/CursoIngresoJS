function mostrar()
{
    var planeta;
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

    }
}
