// Use the D3 library to read in data from Flask API
const url = "http://127.0.0.1:5000/api";
d3.json(url).then(function(data) {
console.log(data)

        let name = data.map((row)=>row.sch_name);
        let stRatio = data.map((row)=>row.sstuteratio);
        let city = data.map((row)=>row.lcity);
        let locale = data.map((row)=>row.ulocale);


        // Test pie chart with values hard coded - works
        // var localeInfo = [{
        //         values: [25, 23, 75,17,6, 10, 41],
        //         labels: ['Large Cities', 'Small Cities', 'Large Suburbs', 'Midsize Suburbs', 'Small Suburbs', 'Towns', 'Rural Areas'],
        //         textinfo: "label+value",
        //         type: 'pie'
        // }];
        
        // var layout = {
        //         title: 'Number of High Schools in Each Locale',
        //         height: 400,
        //         width: 500
        // };
        
        // Plotly.newPlot('bar2', localeInfo, layout);

      // Pie chart without hard-coded values
        var localeInfo = [{
                values: locale.length,
                labels: locale,
                textinfo: "value+percent",
                type: 'pie'
        }];
        
        var layout = {
                title: 'Number of High Schools in Each Locale',
                height: 400,
                width: 500
        };
      
        Plotly.newPlot('pie', localeInfo, layout);
        

});