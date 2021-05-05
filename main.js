var map = L.map("map",{ minZoom: 7 });

$.getJSON("./nepal_province.geojson").then(function(geoJSON) {
  var osm = new L.TileLayer.BoundaryCanvas("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    boundary: geoJSON,
    attribution: '&copy; kaditya97'
  });
  map.addLayer(osm);
  var nepal = L.geoJSON(geoJSON);
  var bounds = nepal.getBounds();
  map.fitBounds(bounds);
  map.setMaxBounds(bounds);
  map.on('drag', function() {
    map.panInsideBounds(bounds, { animate: false });
  });
});