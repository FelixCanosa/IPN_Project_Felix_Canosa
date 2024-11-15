
// si seleciono producto se vera el talle y color, en caso contrario, se ocultara
$(document).ready(function () {
    $(".cambiador-todo select").on('change', function () {
        if ($(this).val() === "Articulo") {
            $(".producto").hide();
        } else {
            $(".producto").show();
        }
    });

    // se despliega un un input espcial para agregar un nuevo color
    $("#color").on('change', function () {
        if ($(this).val() === "otro") {
            $("#otro-color").show();
        } else {
            $("#otro-color").hide();
        }
    });


});



// Example starter JavaScript for disabling form submissions if there are invalid fields
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
  