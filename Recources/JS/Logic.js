//cambio dinamico de imgenes en detalle de producto/articulo

$(document).ready(function () {
  $(selector).click(function () {
    var NewIMG = $(this).data("img-src");

    $(".main-image").fadeOut(300, function () {
      $(this).attr("src", NewIMG).fadeOut(300);
    });
  });
});
