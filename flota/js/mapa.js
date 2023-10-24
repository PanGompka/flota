function punkt(){
    var marker = L.marker([51.5, -0.09], {icon: greenIcon}).addTo(map);
}

var greenIcon = L.icon({
    iconUrl: 'img/green_car.png',

    iconSize:     [38, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});