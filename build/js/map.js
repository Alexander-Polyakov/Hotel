function initMap() {
    var center = {lat: 46.4027, lng: 8.13693};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: center
    });

    var marker = new google.maps.Marker({
        position: center,
        map: map
    });
}