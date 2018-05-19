// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/Error ../core/promiseUtils ../core/accessorSupport/decorators ../geometry/Extent ../geometry/SpatialReference ./Layer ./support/TileInfo".split(" "),function(m,r,n,c,h,k,b,p,f,q,l){var d={id:"0/0/0",level:0,row:0,col:0,extent:null};return function(g){function a(){var a=null!==g&&g.apply(this,arguments)||this;a.tileInfo=l.create({spatialReference:f.WebMercator,size:256});a.fullExtent=new p(-2.0037508342787E7,
-2.003750834278E7,2.003750834278E7,2.0037508342787E7,f.WebMercator);a.spatialReference=f.WebMercator;a.type="base-elevation";return a}n(a,g);a.prototype.getTileBounds=function(a,b,c,e){e=e||[0,0,0,0];d.level=a;d.row=b;d.col=c;d.extent=e;this.tileInfo.updateTileInfo(d);d.extent=null;return e};a.prototype.fetchTile=function(a,b,c,d){throw new h("BaseElevationLayer:fetchtile-not-implemented","fetchTile() is not implemented");};a.prototype.importLayerViewModule=function(a){switch(a.type){case "2d":return k.reject(new h("base-elevation-layer:view-not-supported",
"BaseElevationLayer is only supported in 3D"));case "3d":return k.create(function(a){return m(["../views/3d/layers/ElevationLayerView3D"],a)})}};c([b.property({type:l})],a.prototype,"tileInfo",void 0);c([b.property()],a.prototype,"fullExtent",void 0);c([b.property()],a.prototype,"spatialReference",void 0);c([b.property({readOnly:!0,value:"base-elevation"})],a.prototype,"type",void 0);return a=c([b.subclass("mapgis.layers.BaseElevationLayer")],a)}(b.declared(q))});