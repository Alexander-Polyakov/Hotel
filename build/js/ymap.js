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