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
    for (let i = 0; i < newThing.length; i++) {
        if (newThing[i].location === "") continue;

        let contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h4 id="fourthHeading" class="fourthHeading">' + newThing[i].name + '</h4>'+
            '<div id="bodyContent">'+
            '<p>' + newThing[i].location + '</p>'+
            '</div>'+
            '</div>';

        let infoWindow = new google.maps.InfoWindow({
            content: contentString
        });

        let iconChoice = {};

        if (searchResult.length < 47 && searchResult.some(e => e.name === newThing[i].name)) {
            iconChoice = sIcon;
        } else {
            iconChoice = nIcon
        }

        let marker = new google.maps.Marker({
            position: posCoordDict[newThing[i].location],
            map: map,
            title: newThing[i].name,
            icon: iconChoice
        });

        bindInfoWindow(marker, map, infoWindow);

        if (before[newThing[i].name] !== undefined){
            marker.setMap(null);
        } else {
            before[newThing[i].name] = marker;
        }

        if (marker.getPosition().lat() !== before[newThing[i].name].getPosition().lat() ||
            marker.getPosition().lng() !== before[newThing[i].name].getPosition().lng() ||
            marker.getIcon().url !== before[newThing[i].name].getIcon().url) {
            before[newThing[i].name].setMap(null);
            before[newThing[i].name] = marker;
            before[newThing[i].name].setMap(map);
        }

    }
}

