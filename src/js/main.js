$(document).ready(function() {
    $('.js-inputmask-phone').mask("+7 (999) 999-99-99");

    $(".header-phone__button").click(function(){
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


    $(".js-full-image-open").click(function(){
        var fullImgSrc = $(this).data('full-image-src'),
            fullImgBl = $('.js-full-image');

        fullImgBl.addClass("opened");
        fullImgBl.find('.full-image__image').attr('src', fullImgSrc );
    });

    $(".js-mobile-menu-btn").click(function(e){
        e.preventDefault();
        var thisBl = $(this).closest('.js-mobile-menu');

        thisBl.toggleClass("opened");
        thisBl.find(".js-mobile-menu-dropdown").stop().slideToggle(400);
    });

    $(".js-full-image-close").click(function(){
        $(".js-full-image").removeClass('opened');
    });

});
