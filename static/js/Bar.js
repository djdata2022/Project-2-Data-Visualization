<!DOCTYPE html>
<html>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>
<body>

<canvas id="bar1" style="width:100%;max-width:600px"></canvas>

<script>
var xValues = ["Baltimore", "Cumberland", "Frostburg", "Annapolis", "Gambrils", "Edgewater", "Pasadena", "Glen Burnie", "Ft.Meade", "Millersville", "Severna Park", "Hardwood", "Hanover", "Randalstown", "Sparow Point", "Towson", "Owings Mill", "Parktown", "Prince Federick", "Huntingtown", "Federalsburg", "Westminster", "Skyville", "Manchester", "Chesapeake City", "Frederick", "Damascus", "Columbia", "Rockville", "Gaithersburg", "Silverspring", "Poolesville", "Germantown", "Bethesda","Potomac" ];
var yValues = [17, 16, 16, 17, 19, 17, 16, 16, 16, 17, 19, 16, 16, 15, 16, 17, 13, 17, 17, 18, 14, 16, 18, 17, 13, 18, 15, 17, 16, 14, 17, 19, 14, 19, 17  ];
var barColors = [""];

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
      text: "Maryland Public Schools"
    },
    scales: {
      xAxes: [{ticks: {min: 10, max:20}}]
    }
  }
});
</script>

</body>
</html>



