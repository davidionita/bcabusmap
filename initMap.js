function initMap() {
    // Create a map object and specify the DOM element for display.
    var centerPos = {lat: 40.900572, lng: -74.033430};
    var posCoordDict = {
        "E1" : {lat: 40.900595, lng: -74.033430},
        "E2" : {lat: 40.9008, lng: -74.033430},
        "E3" : {lat: 40.900595, lng: -74.033430},
        "E4" : {lat: 40.900595, lng: -74.033430},
        "E5" : {lat: 40.900595, lng: -74.033430},
        "E6" : {lat: 40.900595, lng: -74.033430},

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
    });
    var marker2 = new google.maps.Marker({
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
}