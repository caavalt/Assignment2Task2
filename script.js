require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/CSVLayer",
  "esri/Graphic",
  "esri/symbols/SimpleMarkerSymbol",
  "esri/renderers/SimpleRenderer",
  "dojo/domReady!"
], function(Map, MapView, CSVLayer, Graphic, SimpleMarkerSymbol, SimpleRenderer) {
  var map = new Map({
    basemap: "streets"
  });

  var view = new MapView({
    container: "viewDiv",
    map: map,
    zoom: 12, 
    center: [-90.1994, 38.6270] // St. Louis coordinates
  });

  var url = "https://raw.githubusercontent.com/orhuna/WebGIS_SLU_M1/main/Module%202/stl_crime_wgs_84.csv";

  var renderer = new SimpleRenderer({
    symbol: new SimpleMarkerSymbol({
      color: [226, 119, 40], 
      outline: {
        width: 0.5,
        color: [255, 255, 255]
      }
    })
  });

  var layer = new CSVLayer({
    url: url,
    renderer: renderer,
    popupTemplate: {
      title: "Crime Report",
      content: "{*}" 
    }
  });

  map.add(layer);
});
