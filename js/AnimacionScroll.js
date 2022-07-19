/*Scroll - Header*/

$(document).ready(function(){


$("#icono-busqueda").click(mostrar_buscador);

$("#fondo").click(ocultar_buscador);

    var ir_a = $("desplazar");
   
    ir_a.click(function(evento){
        evento.preventDefault();
        $("body, html").animate(
            {
                scrollTop: $(this.hash).offset().top,
            }, 600
        );
    })
})
