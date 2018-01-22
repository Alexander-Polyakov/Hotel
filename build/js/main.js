

$(document).ready(function() {
    $('.language').hover(function(){
        var _this = $(this);
        $(this).addClass('opened');
        if (window.outerWidth < 960) {
            setTimeout(function(){
                _this.removeClass('opened');
            },3000);
        }
    }, function(){
        $(this).removeClass('opened');
    });

    $(".js-gallery").lightGallery({
        download: false,
        share: false
    });

    $(".js-scroll-contacts").click(function(){
       targetOffsetTop =  $("#contacts").offset().top;
        $('html, body').animate({
            scrollTop: targetOffsetTop
        }, 700);
    });

    $(".js-room-popup-close").click(function(){
        $(".page__room-popup-wrapper").removeClass('opened');
        $(".js-rooms-popup").fadeIn(400);
        $(".page__overlay").fadeOut(400);
        $('body').removeClass('ovh');
    });

    $(".js-slider-nav").click(function(){
       var  fullImgSrc = $(this).data('full-img'),
            thisSlider = $(this).closest('.js-slider'),
            fullImageContainer = thisSlider.find(".js-slider-main");
        console.log(fullImgSrc);
        fullImageContainer.attr('src', fullImgSrc);
    });

    $(".js-room-open").click(function(){
        var target = $(this).data('popup-target');
        $(".js-rooms-popup").fadeIn(400);
        $(".page__overlay").fadeIn(400);
        $("[data-popup-block="+target+"]").addClass('opened');
        $('body').addClass('ovh');
    });

    $(".js-mob-menu-open").click(function(){
        $(".page__mobile-menu").addClass('opened');
        $(".page__overlay").fadeIn(400);
    });

    $(".js-mob-menu-close").click(function(){
        $(".page__mobile-menu").removeClass('opened');
        $(".page__overlay").fadeOut(400);
    });



    $( function() {
        var dateFormat = "DD, d MM, yy",
            from = $("#from")
                .datepicker({
                    defaultDate: "+1w",
                    numberOfMonths: 1,
                    closeText: "Закрыть",
                    nextText: "След&#x3E;",
                    currentText: "Сегодня",
                    monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
                        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
                    monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн",
                        "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
                    dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
                    dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
                    dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                    weekHeader: "Нед",
                    dateFormat: "DD, d MM, yy",
                    firstDay: 1
                })
                .on("change", function () {
                    to.datepicker("option", "minDate", getDate(this));
                }),
            to = $("#to").datepicker({
                defaultDate: "+1w",
                numberOfMonths: 1,
                closeText: "Закрыть",
                nextText: "След&#x3E;",
                currentText: "Сегодня",
                monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
                    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
                monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн",
                    "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
                dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
                dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
                dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                weekHeader: "Нед",
                dateFormat: "DD, d MM, yy",
                firstDay: 1
            })
                .on("change", function () {
                    from.datepicker("option", "maxDate", getDate(this));
                });

        function getDate(element) {
            var date;
            try {
                date = $.datepicker.parseDate(dateFormat, element.value);
            } catch (error) {
                date = null;
            }
            return date;
        }

    });


});