var chart = new ej.charts.Chart({
  //Initializing Primary X Axis
  primaryXAxis: {
      valueType: "Category",
      title: "Cities in MD"
  },
  //Initializing Primary Y Axis
  primaryYAxis: {
      title: "Avgerage Student Teacher Ratio"
  },
  //Initializing Chart Series
  series: [
      {
          type: "Bar",
          dataSource: [
              { City: "Baltimore", Average Student Teacher Ratio: 17 },
              {City: "Cumberland", Average Student Teacher Ratio: 16 },
              City: "Frostburg", Average Student Teacher Ratio: 16 },
              City: "Annapolis", Average Student Teacher Ratio: 17 },
              City: "Gambrils", Average Student Teacher Ratio: 19 },
              City: "Edgewater", Average Student Teacher Ratio: 17 },
              City: "Pasadena", Average Student Teacher Ratio: 16 },
              City: "Glen Burnie", Average Student Teacher Ratio: 16 },
              City: "FT. Meade", Average Student Teacher Ratio: 16 },
              City: "Millersville", Average Student Teacher Ratio: 17 },
              City: "Severna Park", Average Student Teacher Ratio: 19 },
              City: "Hardwood", Average Student Teacher Ratio: 16 },
              City: "Hanover", Average Student Teacher Ratio: 16 },
              City: "Randalstown", Average Student Teacher Ratio: 15 },
              City: "Sparow Point", Average Student Teacher Ratio: 16 },
              City: "Towson", Average Student Teacher Ratio: 17 },
              City: "Owings Mill", Average Student Teacher Ratio: 13 },
              City: "Parktown", Average Student Teacher Ratio: 17 },
              City: "Prince Federick", Average Student Teacher Ratio: 17 },
              City: "Huntingtown", Average Student Teacher Ratio: 18 },
              City: "Federalsburg", Average Student Teacher Ratio: 14 },
              City: "Westminter", Average Student Teacher Ratio: 16 },
              City: "Skyville", Average Student Teacher Ratio: 18 },
              City: "Manchester", Average Student Teacher Ratio: 17 },
              City: "Chesapeake City", Average Student Teacher Ratio: 13 },
              City: "Frederick", Average Student Teacher Ratio: 18 },
              City: "Damascus", Average Student Teacher Ratio: 15 },
              City: "Columbia", Average Student Teacher Ratio: 17 },
              City: "Rockville", Average Student Teacher Ratio: 16 },
              City: "Gaithersburg", Average Student Teacher Ratio: 14 },
              City: "Silver Spring", Average Student Teacher Ratio: 17 },
              City: "Poolesville", Average Student Teacher Ratio: 19 },
              City: "Germantown", Average Student Teacher Ratio: 14 },
              City: "Bethesda", Average Student Teacher Ratio: 19 },
              City: "Potomac", Average Student Teacher Ratio: 17 },
              



          ],
          xName: "Cities in MD",
          yName: "Avgerage Student Teacher Ratio"
      }
  ]
});


var chart = new ej.charts.Chart({
  title: ' Maryland Public Schools
});
chart.appendTo('#container');
