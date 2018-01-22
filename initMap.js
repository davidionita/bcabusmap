/*1. Run loop to update dictionary.
2. Run loop to update update markers.*/

var map;

function initMap() {
    // Create a map object and specify the DOM element for display.
    var centerPos = {lat: 40.900572, lng: -74.033430};
    var posCoordDict = {
        // As lat increases, it goes up
        // As lng increases, it goes right
        // I hardcoded the positions for now. A loop would, of course, be much better.
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
        "F1" : {lat: 40.9007, lng: -74.03365},
        "F2" : {lat: 40.9007, lng: -74.03365 + 0.00009},
        "F3" : {lat: 40.9007, lng: -74.03365 + 0.00009 * 2},
        "F4" : {lat: 40.9007, lng: -74.03365 + 0.00009 * 3},
        "F5" : {lat: 40.9007, lng: -74.03365 + 0.00009 * 4},
        "F6" : {lat: 40.9007, lng: -74.03365 + 0.00009 * 5},
        "F7" : {lat: 40.9007, lng: -74.03365 + 0.00009 * 6},
        "F8" : {lat: 40.9007, lng: -74.03365 + 0.00009 * 7},
        "F9" : {lat: 40.9007, lng: -74.03365 + 0.00009 * 8},
        "F10" : {lat: 40.9007, lng: -74.03365 + 0.00009 * 9},
        "G1" : {lat: 40.9007 - 0.00005, lng: -74.03365},
        "G2" : {lat: 40.9007 - 0.00005, lng: -74.03365 + 0.00009},
        "G3" : {lat: 40.9007 - 0.00005, lng: -74.03365 + 0.00009 * 2},
        "G4" : {lat: 40.9007 - 0.00005, lng: -74.03365 + 0.00009 * 3},
        "G5" : {lat: 40.9007 - 0.00005, lng: -74.03365 + 0.00009 * 4},
        "G6" : {lat: 40.9007 - 0.00005, lng: -74.03365 + 0.00009 * 5},
        "G7" : {lat: 40.9007 - 0.00005, lng: -74.03365 + 0.00009 * 6},
        "G8" : {lat: 40.9007 - 0.00005, lng: -74.03365 + 0.00009 * 7},
        "G9" : {lat: 40.9007 - 0.00005, lng: -74.03365 + 0.00009 * 8},
        "G10" : {lat: 40.9007 - 0.00005, lng: -74.03365 + 0.00009 * 9},
        "H1" : {lat: 40.9007 - 0.00005 * 2, lng: -74.03365},
        "H2" : {lat: 40.9007 - 0.00005 * 2, lng: -74.03365 + 0.00009},
        "H3" : {lat: 40.9007 - 0.00005 * 2, lng: -74.03365 + 0.00009 * 2},
        "H4" : {lat: 40.9007 - 0.00005 * 2, lng: -74.03365 + 0.00009 * 3},
        "H5" : {lat: 40.9007 - 0.00005 * 2, lng: -74.03365 + 0.00009 * 4},
        "H6" : {lat: 40.9007 - 0.00005 * 2, lng: -74.03365 + 0.00009 * 5},
        "H7" : {lat: 40.9007 - 0.00005 * 2, lng: -74.03365 + 0.00009 * 6},
        "H8" : {lat: 40.9007 - 0.00005 * 2, lng: -74.03365 + 0.00009 * 7},
        "H9" : {lat: 40.9007 - 0.00005 * 2, lng: -74.03365 + 0.00009 * 8},
        "H10" : {lat: 40.9007 - 0.00005 * 2, lng: -74.03365 + 0.00009 * 9},
        "I1" : {lat: 40.9007 - 0.00005 * 3, lng: -74.03365 + 0.00009},
        "I2" : {lat: 40.9007 - 0.00005 * 3, lng: -74.03365 + 0.00009 * 2},
        "I3" : {lat: 40.9007 - 0.00005 * 3, lng: -74.03365 + 0.00009 * 3},
        "I4" : {lat: 40.9007 - 0.00005 * 3, lng: -74.03365 + 0.00009 * 4},
        "I5" : {lat: 40.9007 - 0.00005 * 3, lng: -74.03365 + 0.00009 * 5},
        "I6" : {lat: 40.9007 - 0.00005 * 3, lng: -74.03365 + 0.00009 * 6},
        "I7" : {lat: 40.9007 - 0.00005 * 3, lng: -74.03365 + 0.00009 * 7},
        "I8" : {lat: 40.9007 - 0.00005 * 3, lng: -74.03365 + 0.00009 * 8},
        "I9" : {lat: 40.9007 - 0.00005 * 3, lng: -74.03365 + 0.00009 * 9},
        "I10" : {lat: 40.9007 - 0.00005 * 3, lng: -74.03365 + 0.00009 * 10},
        "J1" : {lat: 40.9007 - 0.00005 * 4, lng: -74.03365 + 0.00009},
        "J2" : {lat: 40.9007 - 0.00005 * 4, lng: -74.03365 + 0.00009 * 2},
        "J3" : {lat: 40.9007 - 0.00005 * 4, lng: -74.03365 + 0.00009 * 3},
        "J4" : {lat: 40.9007 - 0.00005 * 4, lng: -74.03365 + 0.00009 * 4},
        "J5" : {lat: 40.9007 - 0.00005 * 4, lng: -74.03365 + 0.00009 * 5},
        "J6" : {lat: 40.9007 - 0.00005 * 4, lng: -74.03365 + 0.00009 * 6},
        "J7" : {lat: 40.9007 - 0.00005 * 4, lng: -74.03365 + 0.00009 * 7},
        "J8" : {lat: 40.9007 - 0.00005 * 4, lng: -74.03365 + 0.00009 * 8},
        "J9" : {lat: 40.9007 - 0.00005 * 4, lng: -74.03365 + 0.00009 * 9},
        "J10" : {lat: 40.9007 - 0.00005 * 4, lng: -74.03365 + 0.00009 * 10},
    };

    var map = new google.maps.Map(document.getElementById('map'), {
        center: centerPos,
        // Set mapTypeId to SATELLITE in order
        // to activate satellite imagery.
        mapTypeId: 'satellite',
        zoom: 19
    });

    posKeys = posCoordDict.keys;
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
    var marker7 = new google.maps.Marker({
        position: posCoordDict["D1"],
        map: map,
        title: 'D1'
    });
    var marker8 = new google.maps.Marker({
        position: posCoordDict["C1"],
        map: map,
        title: 'C1'
    });
    var marker9 = new google.maps.Marker({
        position: posCoordDict["B1"],
        map: map,
        title: 'B1'
    });
    var marker10 = new google.maps.Marker({
        position: posCoordDict["A1"],
        map: map,
        title: 'A1'
    });
    var marker11 = new google.maps.Marker({
        position: posCoordDict["A6"],
        map: map,
        title: 'A6'
    });
    var marker12 = new google.maps.Marker({
        position: posCoordDict["F1"],
        map: map,
        title: 'F1'
    });
    var marker13 = new google.maps.Marker({
        position: posCoordDict["F2"],
        map: map,
        title: 'F2'
    });
    var marker13 = new google.maps.Marker({
        position: posCoordDict["F10"],
        map: map,
        title: 'F10'
    });
    var marker12 = new google.maps.Marker({
        position: posCoordDict["G1"],
        map: map,
        title: 'G1'
    });
    var marker13 = new google.maps.Marker({
        position: posCoordDict["G2"],
        map: map,
        title: 'G2'
    });
    var marker13 = new google.maps.Marker({
        position: posCoordDict["G10"],
        map: map,
        title: 'G10'
    });
    var marker12 = new google.maps.Marker({
        position: posCoordDict["H1"],
        map: map,
        title: 'H1'
    });
    var marker13 = new google.maps.Marker({
        position: posCoordDict["H2"],
        map: map,
        title: 'H2'
    });
    var marker13 = new google.maps.Marker({
        position: posCoordDict["H10"],
        map: map,
        title: 'H10'
    });
    var marker12 = new google.maps.Marker({
        position: posCoordDict["I1"],
        map: map,
        title: 'I1'
    });
    var marker13 = new google.maps.Marker({
        position: posCoordDict["I2"],
        map: map,
        title: 'I2'
    });
    var marker13 = new google.maps.Marker({
        position: posCoordDict["I10"],
        map: map,
        title: 'I10'
    });
    var marker12 = new google.maps.Marker({
        position: posCoordDict["J1"],
        map: map,
        title: 'J1'
    });
    var marker13 = new google.maps.Marker({
        position: posCoordDict["J2"],
        map: map,
        title: 'J2'
    });
    var marker13 = new google.maps.Marker({
        position: posCoordDict["J10"],
        map: map,
        title: 'J10'
    });
}