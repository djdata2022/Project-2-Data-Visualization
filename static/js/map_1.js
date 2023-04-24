function createMap(schools) {

    // Create the tile layer that will be the background of our map.
    var streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
  
  
    // Create a baseMaps object to hold the streetmap layer.
    var baseMaps = {
      "Street Map": streetmap
    };
  
    // Create an overlayMaps object to hold the school local layer.
    var overlayMaps = {
      "School_Locals": schools
    };
  
    // Create the map object with options.
    var map = L.map("bubble", {
      center: [38.83487, -76.31982],
      zoom: 7,
      layers: [streetmap, schools]
    });
  
    // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
    L.control.layers(baseMaps, overlayMaps, {
      collapsed: false
    }).addTo(map);
  }
  
  function createMarkers(response) {
  
    // Pull the "school" property from response.data.
    var station = response;
  
    // Initialize an array to hold school markers.
    var schoolMarkers = [];
  
    // Loop through the school array.
    for (var index = 0; index < response.length; index++) {
      var High_school = response[index];
  
      // For each school, create a marker, and bind a popup with the school's name.
      var schoolMarker = L.marker([High_school.latcod, High_school.loncod])
        .bindPopup("<h2>" + High_school.sch_name + "<h2><h3>Address: " + 
          High_school.lstreet1 + ", " + High_school.lcity + 
          "</h3><p> Total enroled students: " + High_school.total + "</p> <p> Student Student Ratio: " + High_school.stuteratio + "</p>");
  
      // Add the marker to the school marker array.
      schoolMarkers.push(schoolMarker);
    }
  
    // Create a layer group that's made from the school markers array, and pass it to the createMap function.
    createMap(L.layerGroup(schoolMarkers));
  }
  
  
  // Perform an API call to the API to get the school information. Call createMarkers when it completes.
  d3.json("http://127.0.0.1:5000/api").then(createMarkers);