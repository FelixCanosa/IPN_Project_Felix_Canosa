<<<<<<< HEAD

$(document).ready(function() {
    // Número de filas por página
    var filasPorPagina = 10;
  
    // Obtener filas de la tabla
    var filas = $("#tabla-productos tbody tr");
  
    // Calcular número de páginas
    var numPaginas = Math.ceil(filas.length / filasPorPagina);
  
    // Generar números de página
    for (var i = 1; i <= numPaginas; i++) {
      $("#paginacion").append("<li class='list-unstyled btn btn-primary mr-2'onclick='cambiarPagina(" + i + ")'>" + i + "</li>");
    }
  
    // Mostrar primera página
    cambiarPagina(1);
  });
  
  // Función para cambiar de página
  function cambiarPagina(pagina) {
    // Obtener filas de la tabla
    var filas = $("#tabla-productos tbody tr");
  
    // Calcular índice de inicio y fin de la página
    var inicio = (pagina - 1) * 10;
    var fin = inicio + 10;
  
    // Ocultar todas las filas
    filas.hide();
  
    // Mostrar filas de la página actual
    for (var i = inicio; i < fin; i++) {
      $(filas[i]).show();
    }
  }
=======
//cambio dinamico de imgenes en detalle de producto/articulo

$(document).ready(function () {
  $(selector).click(function () {
    var NewIMG = $(this).data("img-src");

    $(".main-image").fadeOut(300, function () {
      $(this).attr("src", NewIMG).fadeOut(300);
    });
  });
});
>>>>>>> 2bfecacaed9397b770c0a1189174ca4bf653510c
