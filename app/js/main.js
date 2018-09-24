console.log('main.js');
function getZapatos() {
  $(document).ready(function() {
    $.getJSON('zapato.json', function(data){
      data.forEach(function(zapato){
        console.log(zapato);
        textToAdd = '<div class="col-6 col-lg-3 my-3">';
          textToAdd += '<div class="row">';
            textToAdd += '<div class="col">';
              textToAdd += '<img src="images/'+zapato.foto+'" class="product-image"> </img>';
            textToAdd += '</div>';
          textToAdd += '</div>';
          textToAdd += '<div class="row">';
            textToAdd += '<div class="col text-center">';
              textToAdd += '<h1 class="title-shoes" style="font-size: 23px;">'+zapato.nombre+'</h1>';
              textToAdd += '<h2 class="price-shoes" style="font-size: 20px;">'+zapato.precio+'</h2>';
            textToAdd += '</div>';
          textToAdd += '</div>';
          textToAdd += '<div class="row">';
            textToAdd += '<div class="col text-center">';
              textToAdd += '<button type="button" name="button" class="add-button">AÑADIR AL CARRITO</button>';
            textToAdd += '</div>';
          textToAdd += '</div>';
        textToAdd += '</div>';
        $(textToAdd).appendTo("#zapatos_js");
      })
    });
  });
}

function selectedOptionSize(option){
  console.log(option);
  $(document).ready(function() {
    $("#option_5").removeClass("size-style-selected");
    $("#option_55").removeClass("size-style-selected");
    $("#option_6").removeClass("size-style-selected");
    $("#option_65").removeClass("size-style-selected");
    $("#option_7").removeClass("size-style-selected");
    $("#option_75").removeClass("size-style-selected");
    $("#option_8").removeClass("size-style-selected");
    $("#option_85").removeClass("size-style-selected");
    $("#option_9").removeClass("size-style-selected");
    $("#option_95").removeClass("size-style-selected");
    $("#option_"+option).addClass("size-style-selected");
  });
}

function editImage(imageName){
  $(document).ready(function() {
    $("#product_img").attr("src", "images/"+imageName);
  });
}
