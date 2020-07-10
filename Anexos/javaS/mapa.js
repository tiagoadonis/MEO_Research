var map = new L.Map("oMeuMapa", {center: [38.73086,-9.14553],zoom: 17, scrollWheelZoom: false});
var osmUrl="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
var osmAttrib="Map data OpenStreetMap contributors";
var osm = new L.TileLayer(osmUrl, {attribution: osmAttrib});
map.addLayer(osm);

var pontos = [
L.marker([38.73097,-9.14536]),
];
for(i in pontos) {
pontos[i].addTo(map);
}
