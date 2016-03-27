$(document).ready(function() {

  $(window).scroll(function () {
      console.log($(window).scrollTop());
    if ($(window).scrollTop() > 0) {
      $('#nav_bar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 0) {
      $('#nav_bar').removeClass('navbar-fixed');
    }
  });
});

var imagecount = 1;
var total = 4;

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
