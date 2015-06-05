$(document).ready(function () {
    "use strict";
    
    $('#date').text(new Date().getFullYear());
    
    $('.left').slick({
        mobileFirst: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor:'.right'
    });
    
    $('.right').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.left',
      focusOnSelect: true
    });
    
});