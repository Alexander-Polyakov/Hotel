$(document).ready(function() {
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