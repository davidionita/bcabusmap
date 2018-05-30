/*1. Run loop to update dictionary.
2. Run loop to update update markers.*/

let map;

let markers = [];
let before = {};
let first = true;



function initMap() {
    // Create a map object and specify the DOM element for display.
    let centerPos = {lat: 40.900464, lng: -74.0333};


    map = new google.maps.Map(document.getElementById('map'), {
        center: centerPos,
        // Set mapTypeId to SATELLITE in order
        // to activate satellite imagery.
        mapTypeId: 'satellite',
        zoom: 20
    });
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

        let contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h4 id="fourthHeading" class="fourthHeading">' + jsTowns[i].name + '</h4>'+
            '<div id="bodyContent">'+
            '<p>' + jsTowns[i].location + '</p>'+
            '</div>'+
            '</div>';

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


// Unstable test below

var currentLocation = null;

function autoUpdate() {
    navigator.geolocation.getCurrentPosition(function(position) {
        var newPoint = new google.maps.LatLng(position.coords.latitude,
            position.coords.longitude);

        if (currentLocation) {
            // Marker already created - Move it
            currentLocation.setPosition(newPoint);
        }
        else {
            // Marker does not exist - Create it
            currentLocation = new google.maps.Marker({
                position: newPoint,
                map: map
            });
        }

        // Center the map on the new position
        map.setCenter(newPoint);
    });

    // Call the autoUpdate() function every 5 seconds
    setTimeout(autoUpdate, 100);
}

autoUpdate();
