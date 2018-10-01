/*1. Run loop to update dictionary.
2. Run loop to update update markers.*/

let map;

let markers = [];
let before = {};
let first = true;

function initMap() {
    // Create a map object and specify the DOM element for display.
    let centerPos = {lat: 40.900464, lng: -74.0333};

    let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    map = new google.maps.Map(document.getElementById('map'), {
        center: centerPos,
        // Set mapTypeId to SATELLITE in order
        // to activate satellite imagery.
        zoom: 18.5,
        mapTypeId: 'satellite',
    });


    if (isMobile) {
        map.setZoom(18.5);
    }
    else {
        map.setZoom(20);
    }


}

function bindInfoWindow(marker, map, infowindow, html) {
    marker.addListener('click', function() {
        infowindow.open(map, this);
    });
}

function setMarkers() {
    let nIcon = {
        url: 'images/yellow_school_bus.png',
        scaledSize: new google.maps.Size(40, 40)
    };
    let sIcon = {
        url: 'images/green_school_bus.png',
        scaledSize: new google.maps.Size(40, 40)
    };
    let fIcon = {
        url: 'images/red_school_bus.png',
        scaledSize: new google.maps.Size(40, 40)
    };
    for (let i = 0; i < jsTowns.length; i++) {

        if (jsTowns[i].location === "") continue;

        let contentString = '<divr>'+
            '<div>'+
            '</div>'+
            '<h5>' + jsTowns[i].name + '</h5>'+
            '<div>'+
            '<p>' + jsTowns[i].location + '</p>'+
            '</div>'+
            '</divr>';

        let infoWindow = new google.maps.InfoWindow({
            content: contentString
        });

        let iconChoice = {};

        iconChoice = nIcon;

        if (searchResult.length < 47 && searchResult.some(e => e.name === jsTowns[i].name)) {
            iconChoice = sIcon;
        }

        if ((window.jsFavArray !== true && window.jsFavArray !== false && window.jsFavArray !== undefined) &&
            window.jsFavArray.some(e => e.name === jsTowns[i].name)) {
            iconChoice = fIcon;
        }

        let marker = new google.maps.Marker({
            position: posCoordDict[jsTowns[i].location],
            map: map,
            title: jsTowns[i].name,
            icon: iconChoice
        });

        bindInfoWindow(marker, map, infoWindow);

        if (before[jsTowns[i].name] !== undefined){
            marker.setMap(null);
        } else {
            before[jsTowns[i].name] = marker;
        }

        if (marker.getPosition().lat() !== before[jsTowns[i].name].getPosition().lat() ||
            marker.getPosition().lng() !== before[jsTowns[i].name].getPosition().lng() ||
            marker.getIcon().url !== before[jsTowns[i].name].getIcon().url) {
            before[jsTowns[i].name].setMap(null);
            before[jsTowns[i].name] = marker;
            before[jsTowns[i].name].setMap(map);
        }

    }
}

// Unstable test below - Location GPS


function setLocation() {
    navigator.geolocation.getCurrentPosition(function(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        // var accuracy = position.coords.accuracy;

        var currentPosition = new google.maps.LatLng(latitude, longitude);


        if (locationMarker) {
            // Marker already created - Move it
            locationMarker.setPosition(currentPosition);
            // circle.setPosition(currentPosition);
        }
        else {
            // Marker does not exist - Create it

            var locationMarker = new google.maps.Marker({
                position: currentPosition,
                map: map,
                icon: "images/bluedot.png"
            });
/*
            var circle = new google.maps.Circle({
                center: currentPosition,
                radius: accuracy,
                map: map,
                fillColor: '#0080FF',
                fillOpacity: 0.1,
                strokeColor: '#002eff',
                strokeOpacity: 0.1
            });
*/

//set the zoom level to the circle's size

            //set the zoom level to the circle's size
        }

        // Center the map on the new position
        // map.setCenter(newPoint);
    }, function() {}, {maximumAge:600000, timeout:5000, enableHighAccuracy: true});

    // Call the autoUpdate() function every 0.1 seconds
    setTimeout(setLocation, 100);
}

setLocation();

