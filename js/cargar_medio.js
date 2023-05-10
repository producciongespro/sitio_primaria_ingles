
// ************Es el modo estricto de las variables, evita escribir con errores las variables**********
"use strict"

// ****************************
$(document).ready(function () {
console.log("ready");
	// EVENTO CLIC, al hacer clic a la imagen .card-img-top va a hacer el evento cargarMedio
	$(".card-img-modal").click(function () {
		// Cargar el video en el MODAL
		// EVENTO QUELO LLAMA AL METODO
			cargarMedio(this);
	});
	//Evento clic a toda la clase nav link
	// $(".nav-link").click(function () {
	// 		event.preventDefault();
	// 	ReproducirEfecto(this)
	// })
})

// METODO QUE CARGA si es MP3, SI ES VIDEO DE YOUTUBE O SI ES UN PDF
function cargarMedio(Objeto) {
	var ruta = $(Objeto).attr("ruta"), opcion = $(Objeto).attr("tipo") , controlMedio;
console.log(opcion);
	switch (opcion) {

		case "mp3":
		controlMedio = $("<audio controls='true' preload='true'> </audio>");
 		$(controlMedio).attr("src" ,ruta);
			break;

			case "youtube":
			controlMedio = $("<iframe width='600px' height='400px' src='"+ ruta +"' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>");
				break;

				case "pdf":
				controlMedio = $("<embed id='currentMedio' src='"+ ruta +"' type='application/pdf' width='100%' height='100%'></embed>");
				$(controlMedio).css("height", "420px");
				$("#pLinkDirecto").html("Trouble downloading?  <a href='"+ ruta +"' >  Try here. </a>"    );
					break;


					case "ppt":
					controlMedio = $("<embed id='currentMedio' src='"+ ruta +"' type='application/ppt' width='100%' height='100%'></embed>");
					$(controlMedio).css("height", "420px");
						break;

		default:
		console.log("extension no encontrada");
	}

		if (opcion!="doc") {
			$("#contenedorPlayer").html(controlMedio);
			$("#modalMedios").modal();
		}



}

// ****************************************
