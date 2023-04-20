let myMap = L.map("bubble", {
  center: [39.828175, -98.5795],
  zoom: 7
});
// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);




function createMarkers(response) {

  // Pull the "stations" property from response.data.
  var schools_data = response.data.stations;

  // Initialize an array to hold bike markers.
  var school_lat = [];
  var school_lon =[];

  // Loop through the stations array.
  for (var index = 0; index < stations.length; index++) {
    var station = stations[index];

    // For each station, create a marker, and bind a popup with the station's name.
    var bikeMarker = L.marker([station.lat, station.lon])
      .bindPopup("<h3>" + station.name + "<h3><h3>Capacity: " + station.capacity + "</h3>");

    // Add the marker to the bikeMarkers array.
    bikeMarkers.push(bikeMarker);
  }

}


// Perform an API call to the Citi Bike API to get the station information. Call createMarkers when it completes.
d3.json("http://127.0.0.1:5000/api").then(createMarkers);



// const link = "https://data-nces.opendata.arcgis.com/datasets/nces::public-school-characteristics-2020-21.geojson?outSR=%7B%22latestWkid%22%3A4326%2C%22wkid%22%3A4326%7D";

// // Getting our GeoJSON data
// d3.json(link).then(function(data) {
//   // Creating a GeoJSON layer with the retrieved data
//   L.geoJson(data).addTo(myMap);
// });
