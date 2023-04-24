
var xValues = ["Baltimore", "Cumberland", "Frostburg", "Annapolis", "Gambrils", "Edgewater", "Pasadena", "Glen Burnie", "Ft.Meade", "Millersville", "Severna Park", "Hardwood", "Hanover", "Randalstown", "Sparow Point", "Towson", "Owings Mill", "Parktown", "Prince Federick", "Huntingtown", "Federalsburg", "Westminster", "Skyville", "Manchester", "Chesapeake City", "Frederick", "Damascus", "Columbia", "Rockville", "Gaithersburg", "Silverspring", "Poolesville", "Germantown", "Bethesda","Potomac" ];
var yValues = [17, 16, 16, 17, 19, 17, 16, 16, 16, 17, 19, 16, 16, 15, 16, 17, 13, 17, 17, 18, 14, 16, 18, 17, 13, 18, 15, 17, 16, 14, 17, 19, 14, 19, 17  ];
var barColors = ["blue", "orange", "green", "red","blue", "orange", "green", "red","blue", "orange", "green", "red","blue", "orange", "green", "red","blue", "orange", "green", "red","blue", "orange", "green", "red","blue", "orange", "green", "red","blue", "orange", "green", "red","blue", "orange", "green"];

new Chart("bar1", {
  type: "horizontalBar",
  data: {
  labels: xValues,
  datasets: [{
    backgroundColor: barColors,
    data: yValues
  }]
},
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Average Student-Teacher Ratio for Each City"
    },
    scales: {
      xAxes: [{ticks: {min: 10, max:20}}]
    }
  }
});



