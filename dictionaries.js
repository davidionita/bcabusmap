let townLocDict = {};

/*1. Run loop to update dictionary.
2. Run loop to update update markers.*/

const posCoordDict = {
    // As lat increases, it goes up
    // As lng increases, it goes right
    // I hardcoded the positions for now. A loop would, of course, be much better.
    "E1" : {lat: 40.90030, lng: -74.033900},
    "E2" : {lat: 40.90035, lng: -74.033873},
    "E3" : {lat: 40.90040, lng: -74.033846},
    "E4" : {lat: 40.90045, lng: -74.033819},
    "E5" : {lat: 40.90050, lng: -74.033792},
    "E6" : {lat: 40.90055, lng: -74.033765},
    "E7" : {lat: 40.90060, lng: -74.033738},
    "D1" : {lat: 40.90030 - 0.00003, lng: -74.033900 + 0.00005},
    "D2" : {lat: 40.90035 - 0.00003, lng: -74.033873 + 0.00005},
    "D3" : {lat: 40.90040 - 0.00003, lng: -74.033846 + 0.00005},
    "D4" : {lat: 40.90045 - 0.00003, lng: -74.033819 + 0.00005},
    "D5" : {lat: 40.90050 - 0.00003, lng: -74.033792 + 0.00005},
    "D6" : {lat: 40.90055 - 0.00003, lng: -74.033765 + 0.00005},
    "D7" : {lat: 40.90060 - 0.00003, lng: -74.033738 + 0.00005},
    "C1" : {lat: 40.90030 - 0.00003 * 2, lng: -74.033900 + 0.00005 * 2},
    "C2" : {lat: 40.90035 - 0.00003 * 2, lng: -74.033873 + 0.00005 * 2},
    "C3" : {lat: 40.90040 - 0.00003 * 2, lng: -74.033846 + 0.00005 * 2},
    "C4" : {lat: 40.90045 - 0.00003 * 2, lng: -74.033819 + 0.00005 * 2},
    "C5" : {lat: 40.90050 - 0.00003 * 2, lng: -74.033792 + 0.00005 * 2},
    "C6" : {lat: 40.90055 - 0.00003 * 2, lng: -74.033765 + 0.00005 * 2},
    "C7" : {lat: 40.90060 - 0.00003 * 2, lng: -74.033738 + 0.00005 * 2},
    "B1" : {lat: 40.90030 - 0.00003 * 3, lng: -74.033900 + 0.00005 * 3},
    "B2" : {lat: 40.90035 - 0.00003 * 3, lng: -74.033873 + 0.00005 * 3},
    "B3" : {lat: 40.90040 - 0.00003 * 3, lng: -74.033846 + 0.00005 * 3},
    "B4" : {lat: 40.90045 - 0.00003 * 3, lng: -74.033819 + 0.00005 * 3},
    "B5" : {lat: 40.90050 - 0.00003 * 3, lng: -74.033792 + 0.00005 * 3},
    "B6" : {lat: 40.90055 - 0.00003 * 3, lng: -74.033765 + 0.00005 * 3},
    "B7" : {lat: 40.90060 - 0.00003 * 3, lng: -74.033738 + 0.00005 * 3},
    "A1" : {lat: 40.90030 - 0.00003 * 4, lng: -74.033900 + 0.00005 * 4},
    "A2" : {lat: 40.90035 - 0.00003 * 4, lng: -74.033873 + 0.00005 * 4},
    "A3" : {lat: 40.90040 - 0.00003 * 4, lng: -74.033846 + 0.00005 * 4},
    "A4" : {lat: 40.90045 - 0.00003 * 4, lng: -74.033819 + 0.00005 * 4},
    "A5" : {lat: 40.90050 - 0.00003 * 4, lng: -74.033792 + 0.00005 * 4},
    "A6" : {lat: 40.90055 - 0.00003 * 4, lng: -74.033765 + 0.00005 * 4},
    "A7" : {lat: 40.90060 - 0.00003 * 4, lng: -74.033738 + 0.00005 * 4},
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
    "G1" : {lat: 40.9007 - 0.00005, lng: -74.03364},
    "G2" : {lat: 40.9007 - 0.00005, lng: -74.03364 + 0.00009},
    "G3" : {lat: 40.9007 - 0.00005, lng: -74.03364 + 0.00009 * 2},
    "G4" : {lat: 40.9007 - 0.00005, lng: -74.03364 + 0.00009 * 3},
    "G5" : {lat: 40.9007 - 0.00005, lng: -74.03364 + 0.00009 * 4},
    "G6" : {lat: 40.9007 - 0.00005, lng: -74.03364 + 0.00009 * 5},
    "G7" : {lat: 40.9007 - 0.00005, lng: -74.03364 + 0.00009 * 6},
    "G8" : {lat: 40.9007 - 0.00005, lng: -74.03364 + 0.00009 * 7},
    "G9" : {lat: 40.9007 - 0.00005, lng: -74.03364 + 0.00009 * 8},
    "G10" : {lat: 40.9007 - 0.00005, lng: -74.03364 + 0.00009 * 9},
    "H1" : {lat: 40.9007 - 0.00005 * 2, lng: -74.03363},
    "H2" : {lat: 40.9007 - 0.00005 * 2, lng: -74.03363 + 0.00009},
    "H3" : {lat: 40.9007 - 0.00005 * 2, lng: -74.03363 + 0.00009 * 2},
    "H4" : {lat: 40.9007 - 0.00005 * 2, lng: -74.03363 + 0.00009 * 3},
    "H5" : {lat: 40.9007 - 0.00005 * 2, lng: -74.03363 + 0.00009 * 4},
    "H6" : {lat: 40.9007 - 0.00005 * 2, lng: -74.03363 + 0.00009 * 5},
    "H7" : {lat: 40.9007 - 0.00005 * 2, lng: -74.03363 + 0.00009 * 6},
    "H8" : {lat: 40.9007 - 0.00005 * 2, lng: -74.03363 + 0.00009 * 7},
    "H9" : {lat: 40.9007 - 0.00005 * 2, lng: -74.03363 + 0.00009 * 8},
    "H10" : {lat: 40.9007 - 0.00005 * 2, lng: -74.03363 + 0.00009 * 9},
    "I1" : {lat: 40.9007 - 0.00005 * 3, lng: -74.03362},
    "I2" : {lat: 40.9007 - 0.00005 * 3, lng: -74.03362 + 0.00009},
    "I3" : {lat: 40.9007 - 0.00005 * 3, lng: -74.03362 + 0.00009 * 2},
    "I4" : {lat: 40.9007 - 0.00005 * 3, lng: -74.03362 + 0.00009 * 3},
    "I5" : {lat: 40.9007 - 0.00005 * 3, lng: -74.03362 + 0.00009 * 4},
    "I6" : {lat: 40.9007 - 0.00005 * 3, lng: -74.03362 + 0.00009 * 5},
    "I7" : {lat: 40.9007 - 0.00005 * 3, lng: -74.03362 + 0.00009 * 6},
    "I8" : {lat: 40.9007 - 0.00005 * 3, lng: -74.03362 + 0.00009 * 7},
    "I9" : {lat: 40.9007 - 0.00005 * 3, lng: -74.03362 + 0.00009 * 8},
    "I10" : {lat: 40.9007 - 0.00005 * 3, lng: -74.03362 + 0.00009 * 9},
    "J1" : {lat: 40.9007 - 0.00005 * 4, lng: -74.03358},
    "J2" : {lat: 40.9007 - 0.00005 * 4, lng: -74.03358 + 0.00009},
    "J3" : {lat: 40.9007 - 0.00005 * 4, lng: -74.03358 + 0.00009 * 2},
    "J4" : {lat: 40.9007 - 0.00005 * 4, lng: -74.03358 + 0.00009 * 3},
    "J5" : {lat: 40.9007 - 0.00005 * 4, lng: -74.03358 + 0.00009 * 4},
    "J6" : {lat: 40.9007 - 0.00005 * 4, lng: -74.03358 + 0.00009 * 5},
    "J7" : {lat: 40.9007 - 0.00005 * 4, lng: -74.03358 + 0.00009 * 6},
    "J8" : {lat: 40.9007 - 0.00005 * 4, lng: -74.03358 + 0.00009 * 7},
    "J9" : {lat: 40.9007 - 0.00005 * 4, lng: -74.03358 + 0.00009 * 8},
    "J10" : {lat: 40.9007 - 0.00005 * 4, lng: -74.03358 + 0.00009 * 9},
    "K1" : {lat: 40.90069 - 0.00005 * 5, lng: -74.033900 + 0.00005 * 22},
    "K2" : {lat: 40.90069 - 0.00005 * 6, lng: -74.033900 + 0.00005 * 21.7},
    "K3" : {lat: 40.90069 - 0.00005 * 7, lng: -74.033900 + 0.00005 * 21.4},
    "K4" : {lat: 40.90069 - 0.00005 * 8, lng: -74.033900 + 0.00005 * 21.1},
    "K5" : {lat: 40.90069 - 0.00005 * 9, lng: -74.033900 + 0.00005 * 20.8},
    "K6" : {lat: 40.90069 - 0.00005 * 10, lng: -74.033900 + 0.00005 * 20.5},
    "K7" : {lat: 40.90069 - 0.00005 * 11, lng: -74.033900 + 0.00005 * 20.2},
    "K8" : {lat: 40.90069 - 0.00005 * 12, lng: -74.033900 + 0.00005 * 19.9},
    "K9" : {lat: 40.90069 - 0.00005 * 13, lng: -74.033900 + 0.00005 * 19.6},
    "K10" : {lat: 40.90069 - 0.00005 * 14, lng: -74.033900 + 0.00005 * 19.3},
    "L1" : {lat: 40.9007 - 0.00005 * 5, lng: -74.03365 + 0.00009},
    "L2" : {lat: 40.9007 - 0.00005 * 5, lng: -74.03365 + 0.00009 * 2},
    "L3" : {lat: 40.9007 - 0.00005 * 5, lng: -74.03365 + 0.00009 * 3},
    "L4" : {lat: 40.9007 - 0.00005 * 5, lng: -74.03365 + 0.00009 * 4},
    "L5" : {lat: 40.9007 - 0.00005 * 5, lng: -74.03365 + 0.00009 * 5},
    "L6" : {lat: 40.9007 - 0.00005 * 5, lng: -74.03365 + 0.00009 * 6},
    "L7" : {lat: 40.9007 - 0.00005 * 5, lng: -74.03365 + 0.00009 * 7},
    "L8" : {lat: 40.9007 - 0.00005 * 5, lng: -74.03365 + 0.00009 * 8},
    "L9" : {lat: 40.9007 - 0.00005 * 5, lng: -74.03365 + 0.00009 * 9},
    "L10" : {lat: 40.9007 - 0.00005 * 5, lng: -74.03365 + 0.00009 * 10},
    "Not here yet!" : {lat:0, lng: 0}
};