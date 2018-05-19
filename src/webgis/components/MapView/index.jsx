import React, { Component } from 'react';
import esriLoader from 'esri-loader';
import './index.css';

export default class MapView extends Component {

    async componentDidMount() {
        window._config = {};
        esriLoader.loadCss('/maplib/mapgis/css/main.css');
        await import('script-loader!@/maplib/init');
        esriLoader.loadModules(['mapgis/views/MapView', 'mapgis/Map'])
            .then(([MapView, Map]) => {
                var map = new Map({
                    basemap: "topo"
                });
                var view = new MapView({
                    map: map,
                    container: 'viewDiv'
                });
            })
            .catch(err => {
                console.error(err);
            });

    }

    render() {
        return (
            <div id="viewDiv"></div>
        );
    }
}
