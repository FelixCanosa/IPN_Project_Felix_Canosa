
// si seleciono producto se vera el talle y color, en caso contrario, se ocultara,
$(document).ready(function () {
    $(".cambiador-todo select").on('change', function () {
        if ($(this).val() === "Articulo") {
            $(".producto").hide();
        } else {
            $(".producto").show();
        }
    });
});


$(document).ready(function () {
    $("#color").on('change', function () {
        if ($(this).val() === "otro") {
            $("#otro-color").show();
        } else {
            $("#otro-color").hide();
        }
    });
});