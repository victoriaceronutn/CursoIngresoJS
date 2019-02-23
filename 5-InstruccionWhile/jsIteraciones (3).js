function mostrar()
{

      var clave = prompt("ingrese el número clave.");
      var intentos=0,
      
      while(clave!="UTN750")
      {
          alert("Clave incorrecta. Reingrese");
          clave = prompt("Reingrese el número clave.");
          intentos=intentos+1;
          if (intentos==3)
          {
              flag=true;
              break;
          }
          if(flag==false)
          {
            alert("Bienvenidos al sistema");
          }
}

}//FIN DE LA FUNCIÓN
