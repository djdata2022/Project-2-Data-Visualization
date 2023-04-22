
// Create an array of each local's numbers

let city_large = Object.values(data.CL);
let city_small = Object.values(data.CS);
let sub_med = Object.values(data.SM);
let sub_small = Object.values(data.SS);
let town_fringe = Object.values(data.TF);
let town_distant = Object.values(data.TD);
let rural_fringe = Object.values(data.RF);
let rural_distant = Object.values(data.RD);

// Create an array of category labels
let labels = Object.keys(data.CL);
// Display the default plot
function init() {
  let data = [{
    values: CL,
    labels: labels,
    type: "pie"
  }];
  let layout = {
    height: 600,
    width: 800
  };
  Plotly.newPlot("pie", data, layout);
}
// On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);
// Function called by DOM changes
function getData() {
  let dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a letiable
  let dataset = dropdownMenu.property("value");
  // Initialize an empty array for the country's data
  let data = [];
  if (dataset == 'CL') {
      data = CL;
  }
  else if (dataset == 'CS') {
      data = CS;
  }
  else if (dataset == 'SM') {
      data = SM;
  }
  else if (dataset == 'SS') {
    data = SS;
  }
  else if (dataset == 'TD') {
      data = TD;
  }
  else if (dataset == 'TF') {
    data = TF;
  }
  else if (dataset == 'RD') {
    data = RD;
  }
  else if (dataset == 'RF') {
  data = RF;
}
// Call function to update the chart
  updatePlotly(data);
}
// Update the restyled plot's values
function updatePlotly(newdata) {
  Plotly.restyle("pie", "values", [newdata]);
}
init();