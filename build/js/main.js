ymaps.ready(function () {
    var center = [51.65099076275837,39.28873186441802];
    var myMap = new ymaps.Map('map', {
        center: center,
        zoom: 15,
        controls: ['zoomControl']
    });
    myMap.behaviors.disable('scrollZoom');

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {

    }, {
        iconLayout: 'default#image',
        iconImageHref: '../images/svg/icon-metka.svg',
        iconImageSize: [35, 50]
    });


    myMap.geoObjects.add(myPlacemark);

});

$(document).ready(function() {
    $('.js-inputmask-phone').mask("+7 (999) 999-99-99");

    $(".header-phone__icon").click(function(){
        $('.header-phone').addClass("opened");
    });

    $(".feedback-popup__close, .header-phone__overlay").click(function(){
        $('.header-phone').removeClass("opened");
    });

    $(".js-mobile-menu-open").click(function(){
       $(".site-wrapper__mobile-menu").addClass('opened');
       $(".site-wrapper__overlay").fadeIn(400);
    });


    $(".site-wrapper__overlay, .mobile-menu__close").click(function(){
        $(".site-wrapper__mobile-menu").removeClass('opened');
        $(".site-wrapper__overlay").fadeOut(400);
    });

});