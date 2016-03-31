$(document).ready(function() {
  var tn_array = $(".slides img").map(function () {
      return $(this).attr("src");
      }).get();

  $('#MainImage').attr('src', tn_array[0]); // set first image of the list as the MainImage src
  $('#Previous').css("visibility", "hidden"); // hide the Previous button at the beginning
  var lengthImages = tn_array.length; // Length of the image list
  var CurrImage = 0; // Keep current Image index
  var widthImg = 150; // Width of a image in the list
  var BottomLength = 3; // How many images currently shows in the bottom slide
  var IndexDiff;  //This variable is used in the bottom slider click event as a reference for animate the slider
  $('#Next').click(function () {
    $('#MainImage').fadeOut('slow', function () {
        CurrImage = CurrImage + 1; // Update current image index
        $('#slider .slides').animate({ 'margin-left': '-=' +
        widthImg}, 1000); //animate left margin of the slides list with the value of -widthImg (-200px). So the bottom slider will animate to left side
        $('#MainImage').attr('src', tn_array[CurrImage]); // set next image to Main image
        if (CurrImage == lengthImages - BottomLength) { //This condition is checking whether the bottom slider has comes to end or not.
        $('#Next').css("visibility", "hidden"); // if true then hide
        }
        if ($('#Previous').css("visibility") ==
                "hidden") { // if Previous button is hidden
            $('#Previous').css("visibility",
                "visible"); //then set it to visible
        }
    }).fadeIn(1000);
  });
  $('#Previous').click(function () {
    $('#MainImage').fadeOut('slow', function () {
        CurrImage = CurrImage - 1; // Update the current image index
        $('#slider .slides').animate({ 'margin-left': '+=' + widthImg },
            1000); //animate the bottom slider with += widthImg, it will animate the slider to right
        $('#MainImage').attr('src', tn_array[CurrImage]); // set corresponding image to main image
        if (CurrImage == 0) { // if current slide is the first image
        $('#Previous').css("visibility", "hidden"); // then hide the previous button
        }
        if ($('#Next').css("visibility") == "hidden") { // if next button is hidden
        $('#Next').css("visibility", "visible"); // then set it to visible
        }
    }).fadeIn(1000);
  });
});

var imagecount = 1;
var total = 6;

setInterval(function slideA() {
    var Image = document.getElementById('img');
    imagecount = imagecount + 1;
    if (imagecount > total) {
      imagecount = 1;
    }

    if (imagecount < 1) {
      imagecount = total;
    }

    Image.src = 'images/img' + imagecount + '.jpg';

  }, 7000);
