/*1. Run loop to update dictionary.
2. Run loop to update update markers.*/

var map = new google.maps.Map(document.getElementById('map'), {
    center: centerPos,
    // Set mapTypeId to SATELLITE in order
    // to activate satellite imagery.
    mapTypeId: 'satellite',
    zoom: 19
});

function initMap() {
    // Create a map object and specify the DOM element for display.
    var centerPos = {lat: 40.900572, lng: -74.033430};
    var posCoordDict = {
        // As lat increases, it goes up
        // As lng increases, it goes right
        "E1" : {lat: 40.90030, lng: -74.033900},
        "E2" : {lat: 40.90035, lng: -74.033873},
        "E3" : {lat: 40.90040, lng: -74.033846},
        "E4" : {lat: 40.90045, lng: -74.033819},
        "E5" : {lat: 40.90050, lng: -74.033792},
        "E6" : {lat: 40.90055, lng: -74.033765},
        "D1" : {lat: 40.90030 - 0.00003, lng: -74.033900 + 0.00005},
        "D2" : {lat: 40.90035 - 0.00003, lng: -74.033873 + 0.00005},
        "D3" : {lat: 40.90040 - 0.00003, lng: -74.033846 + 0.00005},
        "D4" : {lat: 40.90045 - 0.00003, lng: -74.033819 + 0.00005},
        "D5" : {lat: 40.90050 - 0.00003, lng: -74.033792 + 0.00005},
        "D6" : {lat: 40.90055 - 0.00003, lng: -74.033765 + 0.00005},
        "C1" : {lat: 40.90030 - 0.00003 * 2, lng: -74.033900 + 0.00005 * 2},
        "C2" : {lat: 40.90035 - 0.00003 * 2, lng: -74.033873 + 0.00005 * 2},
        "C3" : {lat: 40.90040 - 0.00003 * 2, lng: -74.033846 + 0.00005 * 2},
        "C4" : {lat: 40.90045 - 0.00003 * 2, lng: -74.033819 + 0.00005 * 2},
        "C5" : {lat: 40.90050 - 0.00003 * 2, lng: -74.033792 + 0.00005 * 2},
        "C6" : {lat: 40.90055 - 0.00003 * 2, lng: -74.033765 + 0.00005 * 2},
        "B1" : {lat: 40.90030 - 0.00003 * 3, lng: -74.033900 + 0.00005 * 3},
        "B2" : {lat: 40.90035 - 0.00003 * 3, lng: -74.033873 + 0.00005 * 3},
        "B3" : {lat: 40.90040 - 0.00003 * 3, lng: -74.033846 + 0.00005 * 3},
        "B4" : {lat: 40.90045 - 0.00003 * 3, lng: -74.033819 + 0.00005 * 3},
        "B5" : {lat: 40.90050 - 0.00003 * 3, lng: -74.033792 + 0.00005 * 3},
        "B6" : {lat: 40.90055 - 0.00003 * 3, lng: -74.033765 + 0.00005 * 3},
        "A1" : {lat: 40.90030 - 0.00003 * 4, lng: -74.033900 + 0.00005 * 4},
        "A2" : {lat: 40.90035 - 0.00003 * 4, lng: -74.033873 + 0.00005 * 4},
        "A3" : {lat: 40.90040 - 0.00003 * 4, lng: -74.033846 + 0.00005 * 4},
        "A4" : {lat: 40.90045 - 0.00003 * 4, lng: -74.033819 + 0.00005 * 4},
        "A5" : {lat: 40.90050 - 0.00003 * 4, lng: -74.033792 + 0.00005 * 4},
        "A6" : {lat: 40.90055 - 0.00003 * 4, lng: -74.033765 + 0.00005 * 4},
    };

    var map = new google.maps.Map(document.getElementById('map'), {
        center: centerPos,
        mapTypeId: 'satellite',
        zoom: 19
    });
    var marker = new google.maps.Marker({
        position: posCoordDict["E1"],
        map: map,
        title: 'E1'
    });var marker2 = new google.maps.Marker({
        position: posCoordDict["E2"],
        map: map,
        title: 'E2'
    });
    var marker3 = new google.maps.Marker({
        position: posCoordDict["E3"],
        map: map,
        title: 'E3'
    });
    var marker4 = new google.maps.Marker({
        position: posCoordDict["E4"],
        map: map,
        title: 'E4'
    });
    var marker5 = new google.maps.Marker({
        position: posCoordDict["E5"],
        map: map,
        title: 'E5'
    });
    var marker6 = new google.maps.Marker({
        position: posCoordDict["E6"],
        map: map,
        title: 'E6'
    });
    var marke7 = new google.maps.Marker({
        position: posCoordDict["F1"],
        map: map,
        title: 'F1'
    });
    var marker8 = new google.maps.Marker({
        position: posCoordDict["F2"],
        map: map,
        title: 'F2'
    });
    var marker9 = new google.maps.Marker({
        position: posCoordDict["F3"],
        map: map,
        title: 'F3'
    });
    var marker10 = new google.maps.Marker({
        position: posCoordDict["F4"],
        map: map,
        title: 'F4'
    });
    var marker11 = new google.maps.Marker({
        position: posCoordDict["F5"],
        map: map,
        title: 'F5'
    });
    var marker12 = new google.maps.Marker({
        position: posCoordDict["F6"],
        map: map,
        title: 'F6'
    });

}