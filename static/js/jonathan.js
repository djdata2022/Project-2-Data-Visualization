// Read in data from Flask
const url = "http://127.0.0.1:5000/api"

d3.json(url).then(function(data) {
    // City Large Array    
    function selectCityLarge(school) {
        return school.ulocale === "11-City: Large"
    };
    let CL = data.filter(selectCityLarge);

    // City Small Array
    function selectCitySmall(school) {
        return school.ulocale === "13-City: Small"
    };
    let CS = data.filter(selectCitySmall);

    // Suburb Large Array
    function selectSuburbLarge(school) {
        return school.ulocale === "21-Suburb: Large"
    };
    let SL = data.filter(selectSuburbLarge);
    
    // Suburb Mid-Size Array
    function selectSuburbMid(school) {
        return school.ulocale === "22-Suburb: Mid-size"
    };
    let SM = data.filter(selectSuburbMid);
    
    // Suburb Small Array
    function selectSuburbSmall(school) {
        return school.ulocale === "23-Suburb: Small"
    };
    let SS = data.filter(selectSuburbSmall);

    // Town Fringe Array
    function selectTownFringe(school) {
        return school.ulocale === "31-Town: Fringe"
    };
    let TF = data.filter(selectTownFringe);

    // Town Distant Array
    function selectTownDistant(school) {
        return school.ulocale === "32-Town: Distant"
    };
    let TD = data.filter(selectTownDistant);

    // Rural Fringe Array
    function selectRuralFringe(school) {
        return school.ulocale === "41-Rural: Fringe"
    };
    let RF = data.filter(selectRuralFringe);

    // Rural Distant Array
    function selectRuralDistant(school) {
        return school.ulocale === "42-Rural: Distant"
    };
    let RD = data.filter(selectRuralDistant);

    // Call updatePlotly() when a change is made at dropdown menu
    d3.select("#selDataset").on("change", updatePlotly);

    function updatePlotly() {
        let dropdownMenu = d3.select("#selDataset");
        let locale = dropdownMenu.property("value");

        if (locale === "CL") {
            // Add coordinates based on CL data and do so for each locale
            // x = 
            // y =
        }

        else if (locale === "CS") {

        }

        else if (locale === "SL") {

        }

        else if (locale === "SM") {
            
        }
        
        else if (locale === "SS") {

        }

        else if (locale === "TF") {
            
        }

        else if (locale === "TD") {

        }

        else if (locale === "RF") {
            
        }

        else if (locale === "TD") {
            
        }

        // Restyle the Plotly chart
        // 
        // 
    };
// Close the .then function
});