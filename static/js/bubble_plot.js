// // Get the endpoint
// const belly = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.";

// // Fetch the JSON data and console log it
// d3.json(belly).then(function(data) {
//   console.log(data);
// });

function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");
  
    // Use the list of sample names to populate the select options
    d3.json("samples.json").then((data) => {
      var sampleNames = LSTATE;
  
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  
      // Use the first sample from the list to build the initial plots
      var firstSample = sampleNames[0];
      buildCharts(firstSample);
      buildMetadata(firstSample);
    });
  }
  
  // Initialize the dashboard
  init();
  function optionChanged(newSample) {
    // Fetch new data each time a new sample is selected
    buildMetadata(newSample);
    buildCharts(newSample);
    
  }

//   // Demographics Panel 
// function buildMetadata(sample) {
//     d3.json("samples.json").then((data) => {
//       var metadata = data.metadata;
//       // Filter the data for the object with the desired sample number
//       var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
//       var result = resultArray[0];
//       // Use d3 to select the panel with id of `#sample-metadata`
//       var PANEL = d3.select("#sample-metadata");
  
//       // Use `.html("") to clear any existing metadata
//       PANEL.html("");
  
//       Object.entries(result).forEach(([key, value]) => {
//         PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
//       });
  
//     });
//   }

//   // Create the buildCharts function.
// function buildCharts(sample) {
//     // Use d3.json to load and retrieve the samples.json file 
//     d3.json("samples.json").then((data) => {
//       // Create a variable to hold the samples array. 
//       var samples = data.samples;
//       // Create a variable to hold the filters the samples for the desired sample number.
//       var resultArray = samples.filter(sampleObj => sampleObj.id == sample);
//       // Create a variable that filters the metadata array for the desired sample number.


//       // Create a variable to hold the first sample in the array.
//       var result = resultArray[0];
//       console.log(result)


//       // Create variables to hold the otu_ids, otu_labels, and sample_values.
//       var otuId = result.otu_ids;
//       var otuLabel = result.otu_labels;
//       var sampleValue = result.sample_values;
//       console.log(sampleValue.slice(0,10));

//       // Create the yticks for the bar chart.
//      var yticks = otuId.slice(0,10).map((i) => `OTU ID ${i}`)
   
//       console.log(yticks.toString().split(","));
//       // Create the trace for the bar chart. 
//       var barData1 = [{
//         x: sampleValue.slice(0,10).reverse(),
//         y: yticks,
//         type: "bar",
//         orientation: "h",
//         text: otuLabel.slice(0,10).reverse(),
//         hoverinfo: "text"
//       }];
//       // Create the layout for the bar chart. 
//       var barLayout = {
//        title: "Navel Bacteria Count",
//        margin: {
//         t: 50,
//         l: 150,
//        },
//        yaxis: {
//         title: "Bacteria otu ID",
//        },
//        xaxis: {
//         title: "Number of Bacteria Present in Belly Button",
//        }
//       };
//       // Use Plotly to plot the data. 
//       Plotly.newPlot("bar", barData1, barLayout);
      
//     //   Bubble Chart
//       var bubbleData = [{
//         x: otuId,
//         y: sampleValue,
//         text: otuLabel,
//         mode: "markers",
//         marker: {
//           size: sampleValue,
//           color: otuId,
//           colorscale: "Earth",
//         },
//         type: "bubble"
//       }
//       ];
  
//       // Create the layout for the bubble chart.
//       var bubbleLayout = {
//         title: "Bubble Chart of Bacteria",
//         showLegend: true,
//         xaxis: {
//           title: "Bacteria otu ID"
//         }
//       };
  
//       // Plotly to plot the data with the layout.
//       Plotly.newPlot("bubble", bubbleData, bubbleLayout);


// // Bonus Gauge Chart plot

//      // Create a variable that filters the metadata array for the desired sample number.
//       var filteredMeta = data.metadata.filter(i => i.id == sample);
//         console.log(filteredMeta);
//       // Create a variable to hold the first sample in the metadata array.
//       var metaResult = filteredMeta[0];
//       // Create the trace for the gauge chart.
//       var gaugeData = [{
//         value: metaResult.wfreq,
//         type: "indicator",
//         mode: "gauge+number",
//         gauge: {
//           axis: {range: [0,10]},
//           bar: {color: "black"},
//           steps: [
//             { range: [0,2], color: "green"},
//             { range: [2,4], color: "yellow"},
//             { range: [4,6], color: "orange"},
//             { range: [6,8], color: "pink"},
//             { range: [8,10], color: "red"},
//           ],
//         },
//         title: {text: "Weekly Washing Frequency"}
//       }
//       ];
      
//       // Create the layout for the gauge chart.
//       var gaugeLayout = { 
//         width: 450,
//         height: 300,
//         margin: {
//           t: 0,
//           b: 0
//         },     
//       };
  
//       //Use Plotly to plot the gauge data and layout.
//       Plotly.newPlot("gauge", gaugeData, gaugeLayout);
//     });
//   }
