$(document).ready(function () {
    $('#date').text(new Date().getFullYear());
    $('.left').slick({
        mobileFirst: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500
    });
});