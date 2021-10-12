var contador;
//capturo el id de cada estrella
function calificar(item) {
  console.log(item);
  //captura primer caracter
  contador = item.id[0];
  let nombre = item.id.substring(1); //esto hace que me capture todo menos primer caracter
  //hago bucle para recorrer las estrellas
  for (let i = 0; i < 6; i++) {
    //i=0
    //i=1
    //i=2
    //i=3
    //i=4

    if (i < contador) {
      //aca le digo que me pinte de color rosado. Le pongo i+1 porque i es igual a 0 y va sumando los numero mas el nombre.
      //primera vez 0+1=1star
      //segunda vez 1+1=2star ....etc
      document.getElementById(i + 1 + nombre).style.color = "violet";
    } else {
      //doy vuelta el bucle
      document.getElementById(i + 1 + nombre).style.color = "black";
    }
  }
}

//funcion anular pantalla
var anular = document.getElementById("bloqueo");

var cuerpo = document.getElementById("cuerpo");

window.addEventListener("click", function (e) {
  //capturo cualquier click en cualquier sitio "e" es el nombre argument
  if (!document.getElementById("estrellas").contains(e.target)) {
    //si el click NO está dentro del div, limpiar todo

    cuerpo.style.background = "rgba(0,0,0,0.5)";
    //cuerpo.style.position = "absolute";
    anular.style.pointerEvents = "none";
  }

  /* anular.disabled = true;
  } else {
    anular.disabled = false;
  }
*/
  // document.getElementById("bloqueo").remove();
  // document.getElementById("bloqueo").style.display = "none";
  // document.getElementById("bloqueo").style.visibility = "hidden";
  // document.getElementById("bloqueo").innerHTML = "";
});
