// Read in data from Flask
// const url = "http://127.0.0.1:5000/api"

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

    function init() {
        let localeData = CL;
        // Sort CL by total students ascending.
        let sortedLocale = localeData.sort((a, b) => a.total - b.total);
        // Slice the first 5 objects for plotting
        let slicedLocale = sortedLocale.slice(0,5);
        slicedLocale.reverse();

        let trace1 = {
            x: slicedLocale.map(school => school.total),
            y: slicedLocale.map(school => school.sch_name),
            text: slicedLocale.map(school => school.sch_name),
            type: "bar",
            orientation: "h"
        };

        let traceLocale = [trace1];

        let layout = {
            title: "Schools by Total Students",
            width: 600,
            height: 400,
            margin: {
                l: 300,
                r: 50,
                t: 50,
                b: 50
            }
            }
        
        Plotly.newPlot("jonathan", traceLocale, layout);
    };

    d3.select("#selDataset").on("change", updatePlotly);

    function updatePlotly() {
        let dropdownMenu = d3.select("#selDataset");
        let locale = dropdownMenu.property("value");

        let x = [];
        let y = [];
        let text = [];

        if (locale === "CL") {
            localeData = CL;
            // Sort CL by total students ascending.
            let sortedLocale = localeData.sort((a, b) => a.total - b.total);
            // Slice the first 5 objects for plotting
            let slicedLocale = sortedLocale.slice(0,5);
            slicedLocale.reverse();

            x = slicedLocale.map(school => school.total);
            y = slicedLocale.map(school => school.sch_name);
            text = slicedLocale.map(school => school.sch_name);
        }

        else if (locale === "CS") {
            localeData = CS;
            // Sort CS by total students ascending.
            let sortedLocale = localeData.sort((a, b) => a.total - b.total);
            // Slice the first 5 objects for plotting
            let slicedLocale = sortedLocale.slice(0,5);
            slicedLocale.reverse();

            x = slicedLocale.map(school => school.total);
            y = slicedLocale.map(school => school.sch_name);
            text = slicedLocale.map(school => school.sch_name);
        }

        else if (locale === "SL") {
            localeData = SL;
            // Sort SL by total students ascending.
            let sortedLocale = localeData.sort((a, b) => a.total - b.total);
            // Slice the first 5 objects for plotting
            let slicedLocale = sortedLocale.slice(0,5);
            slicedLocale.reverse();

            x = slicedLocale.map(school => school.total);
            y = slicedLocale.map(school => school.sch_name);
            text = slicedLocale.map(school => school.sch_name);
        }

        else if (locale === "SM") {
            localeData = SM;
            // Sort SM by total students ascending.
            let sortedLocale = localeData.sort((a, b) => a.total - b.total);
            // Slice the first 5 objects for plotting
            let slicedLocale = sortedLocale.slice(0,5);
            slicedLocale.reverse();

            x = slicedLocale.map(school => school.total);
            y = slicedLocale.map(school => school.sch_name);
            text = slicedLocale.map(school => school.sch_name);            
        }
        
        else if (locale === "SS") {
            localeData = SS;
            // Sort SS by total students ascending.
            let sortedLocale = localeData.sort((a, b) => a.total - b.total);
            // Slice the first 5 objects for plotting
            let slicedLocale = sortedLocale.slice(0,5);
            slicedLocale.reverse();

            x = slicedLocale.map(school => school.total);
            y = slicedLocale.map(school => school.sch_name);
            text = slicedLocale.map(school => school.sch_name);
        }

        else if (locale === "TF") {
            localeData = TF;
            // Sort TF by total students ascending.
            let sortedLocale = localeData.sort((a, b) => a.total - b.total);
            // Slice the first 5 objects for plotting
            let slicedLocale = sortedLocale.slice(0,5);
            slicedLocale.reverse();

            x = slicedLocale.map(school => school.total);
            y = slicedLocale.map(school => school.sch_name);
            text = slicedLocale.map(school => school.sch_name);            
        }

        else if (locale === "TD") {
            localeData = TD;
            // Sort CL by total students ascending.
            let sortedLocale = localeData.sort((a, b) => a.total - b.total);
            // Slice the first 5 objects for plotting
            let slicedLocale = sortedLocale.slice(0,5);
            slicedLocale.reverse();

            x = slicedLocale.map(school => school.total);
            y = slicedLocale.map(school => school.sch_name);
            text = slicedLocale.map(school => school.sch_name);
        }

        else if (locale === "RF") {
            localeData = RF;
            // Sort RF by total students ascending.
            let sortedLocale = localeData.sort((a, b) => a.total - b.total);
            // Slice the first 5 objects for plotting
            let slicedLocale = sortedLocale.slice(0,5);
            slicedLocale.reverse();

            x = slicedLocale.map(school => school.total);
            y = slicedLocale.map(school => school.sch_name);
            text = slicedLocale.map(school => school.sch_name);            
        }

        else if (locale === "TD") {
            localeData = TD;
            // Sort TD by total students ascending.
            let sortedLocale = localeData.sort((a, b) => a.total - b.total);
            // Slice the first 5 objects for plotting
            let slicedLocale = sortedLocale.slice(0,5);
            slicedLocale.reverse();

            x = slicedLocale.map(school => school.total);
            y = slicedLocale.map(school => school.sch_name);
            text = slicedLocale.map(school => school.sch_name); 
        }

        // Restyle the Plotly chart
        Plotly.restyle("jonathan", "x", [x]);
        Plotly.restyle("jonathan", "y", [y]);
        Plotly.restyle("jonathan", "text", [text]);

    };

    init();
// Close the .then function
});