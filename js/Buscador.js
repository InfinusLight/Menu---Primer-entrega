function mostrar_buscador(){

 let BarraBusqueda = document.getElementById("contenedor_barra_busqueda");
 let InputBusqueda = document.getElementById("inputBusqueda");

  BarraBusqueda.style.top = "80px"; /*Baja el buscador*/ 
  InputBusqueda.focus(); /*El input esta preparado para escribir*/ 
 
}

/*Funcion para ocultar el buscador*/

function ocultar_buscador(){

  let BarraBusqueda = document.getElementById("contenedor_barra_busqueda");
  let InputBusqueda = document.getElementById("inputBusqueda");

  BarraBusqueda.style.top = "-80px";
  InputBusqueda.value = "";
 
}





