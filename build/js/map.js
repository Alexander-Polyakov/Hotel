function initMap() {
    var mapZoom;
    if (window.outerWidth > 767) {
        mapZoom = 17;
    } else {
        mapZoom = 16;
    }

    var center = {lat: 46.4032, lng: 8.137};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: mapZoom,
        center: center,
        mapTypeId: 'hybrid'
    });

    var marker = new google.maps.Marker({
        position: {lat: 46.4027, lng: 8.13693},
        map: map
    });

    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(center);
    });
}