var map;

function init() {
	map = new OpenLayers.Map('map',{allOverlays: false});
	map.addControl(new OpenLayers.Control.LayerSwitcher());
	//detektor map
	var detekmap = new OpenLayers.Layer.KaMap( 
		"Mapas Detektor", 
		"http://190.216.203.130:8080/ka-mapsm/htdocs/tile.php",
		{map: "gmap", 'i': "png"});
	//street view google map
	var gmap = new OpenLayers.Layer.Google(
		"Google Callejero",
		{numZoomLevels: 20, visibility: false}
	);	
	//satellite google map
	var gsat = new OpenLayers.Layer.Google(
		"Google Satelite",
		{type: G_SATELLITE_MAP, numZoomLevels: 22, visibility: false}
	);
	//physical google map
	var gphy = new OpenLayers.Layer.Google(
		"Google Fisico",
		{type: G_PHYSICAL_MAP, visibility: false}
	);
	//hybrid google map
	var ghyb = new OpenLayers.Layer.Google(
		"Google Hibrido",
		{type: G_HYBRID_MAP, numZoomLevels: 20, visibility: false}
	);
	//add layer and center map
	map.addLayers([detekmap, gmap, gphy, ghyb, gsat]);
	map.setCenter(new OpenLayers.LonLat(-66.95137, 1.504016), 5);    
	//animated zoom
    var animate = document.getElementById("animate");
    animate.onclick = function() {
        for (var i=map.layers.length-1; i>=0; --i) {
            map.layers[i].animationEnabled = this.checked;
        }
    };
}
