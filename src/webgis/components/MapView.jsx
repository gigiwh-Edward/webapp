import React, { Component } from 'react';
import esriLoader from 'esri-loader';
import '../styles/MapView.css';

export default class MapView extends Component {

    async componentDidMount() {
        await import('script-loader!@/maplib/ext/LercDecode');
        await esriLoader.loadCss('/maplib/mapgis/css/main.css');
        await import('script-loader!@/maplib/init');
        const [SceneView, Map, ElevationLayer, TileLayer, mapgisConfig] = await esriLoader.loadModules([
            'mapgis/views/SceneView', 
            'mapgis/Map',
            'mapgis/layers/ElevationLayer',
            'mapgis/layers/TileLayer',
            "mapgis/config"
        ]);

        mapgisConfig.request.corsEnabledServers.push("172.16.10.122:8010");
        let elevLyr = new ElevationLayer({url:"http://172.16.10.122:8010/CityInterface/rest/services/ImageServer.svc/HuaXi"});
        let tileLyr = new TileLayer({url:"http://172.16.10.122:8010/Cityinterface/rest/services/MapServer.svc/HuaXi"});
        let map = new Map({
            basemap: {
                baseLayers: [tileLyr],
                title: "花溪地图",
                id: "myBasemap"
            }
        });
        map.ground.layers.add(elevLyr);
        let extent = { "xmin": 667000, "ymin": 2914988, "xmax": 670871, "ymax": 2919526, "spatialReference": { "wkid": 102100} };
        let view = new SceneView({
            map: map,
            container: 'viewDiv',
            viewingMode: "local",
            clippingArea: extent,
			  extent: extent
        });
    }

    render() {
        return (
            <div id="viewDiv"></div>
        );
    }
}
