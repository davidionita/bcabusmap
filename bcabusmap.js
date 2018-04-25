let response;
let cellValues;
let townLocDict = {};

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

    let ranges = [
        "A2:B24",
        "C2:D25"
    ];
    gapi.client.sheets.spreadsheets.values.batchGet({
        // Test:  1-0WV-jPKdRStzM6U0XbLKexWPrlK-c9hAWgaVQMhKks
        // Real:  1S5v7kTbSiqV8GottWVi5tzpqLdTrEgWEY4ND4zvyV3o
        spreadsheetId: "1-0WV-jPKdRStzM6U0XbLKexWPrlK-c9hAWgaVQMhKks",
        ranges: ranges
    }).then((response) => {
        let result = response.result;
        console.log(`${result.valueRanges.length} ranges retrieved.`);

        // For each ValueRange object
        for (let i = 0; i < result.valueRanges.length; i++) {
            // For each town - location list pair
            for (let j = 0; j < result.valueRanges[i].values.length; j++) {
                if (result.valueRanges[i].values[j][1] === undefined){
                    townLocDict[result.valueRanges[i].values[j][0]] = "Not here yet!";
                }
                else{
                    townLocDict[result.valueRanges[i].values[j][0]] = result.valueRanges[i].values[j][1];
                }
            }
        }
        console.log(townLocDict);
    });

    /*for (town in townLocDict) {
        console.log(town);
        console.log(townLocDict[town]);
    }*/


}

function sheets() {

}

gapi.load("client");

setInterval(function () {
    execute();
    setMarkers();
}, 3000);
