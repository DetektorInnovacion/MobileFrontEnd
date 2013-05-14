var map;

function init() {
    map = new OpenLayers.Map({
        div: "map",
        theme: null,
        numZoomLevels: 18,
        controls: [
            new OpenLayers.Control.TouchNavigation({
                dragPanOptions: {
                    enableKinetic: true
                }
            }),
            new OpenLayers.Control.Zoom()
        ],
        layers: [
        new OpenLayers.Layer.KaMap( "Ka-Map WMS", "http://190.216.203.130:8080/ka-mapsm/htdocs/tile.php",
            {map: "gmap", 'i': "png"})
        ]
    });
    
    map.setCenter(new OpenLayers.LonLat(-66.91667,10.5), 10);
}