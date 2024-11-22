





$(document).ready(function () {


  // Validacion de todos los campos de Form
  (() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
  })()


  // si seleciono producto se vera el talle y color, en caso contrario, se ocultara
  $(".cambiador-todo select").on('change', function () {
    if ($(this).val() === "Articulo") {
      $(".producto").hide();
    } else {
      $(".producto").show();
    }
  });

  // Funcion para agrgar mas articulos y productos en relacion a talle, color, stock y imagen
  $("#agregar-columna").click(function () {
    var nuevaFila = $("<tr>");

    var celdaStock = $("<td>");
    celdaStock.html(`
      <div class="form-group mb-3">
        <input type="number" class="form-control" required data-invalid-feedback="Falta cantidad de stock">
        <div class="invalid-feedback">
          Falta cantidad de stock
        </div>
      </div>
    `);

    var celdaTalle = $("<td class='producto'>");
    celdaTalle.html(`
      <div class="form-group mb-3">
        <div class="checkbox-group">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="opcion1" value="opcion1" required>
            <label class="form-check-label" for="opcion1">Extra pequeño (XS)</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="opcion2" value="opcion2" required>
            <label class="form-check-label" for="opcion2">Pequeño (S)</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="opcion3" value="opcion3" required>
            <label class="form-check-label" for="opcion3">Mediano (M)</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="opcion4" value="opcion4" required>
            <label class="form-check-label" for="opcion4">Grande (L)</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="opcion5" value="opcion5" required>
            <label class="form-check-label" for="opcion5">Doble extra grande (XXL)</label>
          </div>
        </div>
      </div>
    `);

    var celdaColor = $("<td class='producto'>");
    celdaColor.html(`
      <select name="color" id="color" >
        <option value="">Seleccione un color</option>
        <option value="#FF0000">Rojo</option>
        <option value="#008000">Verde</option>
        <option value="#0000FF">Azul</option>
        <option value="#FFFF00">Amarillo</option>
        <option value="#808080">Gris</option>
      </select>
    `);

    var celdaImagen = $("<td>");
    celdaImagen.html(`
      <label class="form-label" for="imagen-frontal">Imagen frontal:</label>
      <input type="text" class="form-control" id="imagen-frontal" placeholder="URL">
      <br>
      <label class="form-label" for="imagen-trasera">Imagen trasera:</label>
      <input type="text" class="form-control" id="imagen-trasera" placeholder="URL">
      <br>
      <label class="form-label" for="imagen-detalles">Imagen detalles:</label>
      <input type="text" class="form-control" id="imagen-detalles" placeholder="URL">
    `);

    nuevaFila.append(celdaStock);
    nuevaFila.append(celdaTalle);
    nuevaFila.append(celdaColor);
    nuevaFila.append(celdaImagen);

    $("#tabla-productos tbody").append(nuevaFila);
  });






});


$(document).ready(function () {
  // Manejador para el botón Agregar
  $("#AddButtonHome").click(function () {
    localStorage.setItem('formAction', 'Agregar');
    window.location.href = 'AddEdit.html';
  });

  // Manejador para el botón Modificar
  $("#ModifyButtonHome").click(function () {
    localStorage.setItem('formAction', 'Modificar');
    window.location.href = 'AddEdit.html';
  });

  // Actualizar el título en la página AddEdit.html
  if (window.location.pathname.includes('AddEdit.html')) {
    const action = localStorage.getItem('formAction');
    if (action) {
      $("#Title-from").text(action);
    }
  }
});

