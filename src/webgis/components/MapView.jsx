import React, { Component } from 'react';
import esriLoader from 'esri-loader';
import '../styles/MapView.css';

export default class MapView extends Component {

    async componentDidMount() {
        await esriLoader.loadCss('maplib/mapgis/css/main.css');
        await import('script-loader!@/maplib/init');
        const [MapView, Map] = await esriLoader.loadModules(['mapgis/views/MapView', 'mapgis/Map']);
        let map = new Map({
            basemap: "topo"
        });
        let view = new MapView({
            map: map,
            container: 'viewDiv'
        });
    }

    render() {
        return (
            <div id="viewDiv"></div>
        );
    }
}