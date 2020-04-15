// JQuery.
//=require ../../node_modules/jquery/dist/jquery.js
//=require ../../node_modules/jquery/dist/jquery.slim.js

// Slick.
//=require ../../node_modules/slick-carousel/slick/slick.js

// Bootstrap.
//=require ../../node_modules/bootstrap/dist/js/*.js

$(document).ready(function () {
  // Slick slider.
  $('.slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
});
