var response;
var cellValues;

function loadClient() {
    gapi.client.setApiKey("AIzaSyAq2IohIpGlAaHn9fsxI0Gqzk7rWBvhtss");
    return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/sheets/v4/rest")
        .then(function() {
            console.log("GAPI client loaded for API");
        }, function(error) {
            console.error("Error loading GAPI client for API");
        });
}

function execute() {
    var townLocDict = {};

    var ranges = [
        "A2:B24",
        "C2:D25"
    ];
    gapi.client.sheets.spreadsheets.values.batchGet({
        spreadsheetId: "1-0WV-jPKdRStzM6U0XbLKexWPrlK-c9hAWgaVQMhKks",
        ranges: ranges
    }).then((response) => {
        var result = response.result;
        console.log(`${result.valueRanges.length} ranges retrieved.`);

        // For each ValueRange object
        for (var i = 0; i < result.valueRanges.length; i++) {
            // For each town - location list pair
            for (var j = 0; j < result.valueRanges[i].values.length; j++) {
                townLocDict[result.valueRanges[i].values[j][0]] = result.valueRanges[i].values[j][1];
            }
        }
        console.log(townLocDict);
    });
}

gapi.load("client");

function interval() {
    setTimeout(function(){
        execute();
        interval();
        // initMap();
    }, 2500);}

interval();
