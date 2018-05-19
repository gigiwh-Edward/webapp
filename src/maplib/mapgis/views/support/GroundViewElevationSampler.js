// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Accessor ../../core/Evented ../../core/Logger ../../core/accessorSupport/decorators ../../geometry/support/webMercatorUtils ../../layers/support/ElevationSampler".split(" "),function(p,q,f,d,g,h,k,b,l,m){var n=k.getLogger("mapgis.views.support.GroundViewElevationSampler");return function(e){function a(c){c=e.call(this,c)||this;c.demResolution={min:-1,max:-1};return c}f(a,e);a.prototype.initialize=
function(){var c=this;this.view.basemapTerrain.on("elevation-change",function(){return c.emit("changed",{})})};a.prototype.elevationAt=function(c){var a=c.spatialReference,b=this.spatialReference;return l.canProject(a,b)?this.view.basemapTerrain.getElevation(c):(n.error("Cannot sample elevation at a location with spatial reference ("+(a?a.wkid:"unknown")+") different from the view ("+b.wkid+")"),null)};a.prototype.queryElevation=function(a){return m.updateGeometryElevation(a.clone(),this)};d([b.property({readOnly:!0})],
a.prototype,"demResolution",void 0);d([b.property({readOnly:!0,aliasOf:"view.basemapTerrain.extent"})],a.prototype,"extent",void 0);d([b.property({readOnly:!0,aliasOf:"view.basemapTerrain.spatialReference"})],a.prototype,"spatialReference",void 0);d([b.property({constructOnly:!0})],a.prototype,"view",void 0);return a=d([b.subclass("mapgis.views.support.GroundViewElevationSampler")],a)}(b.declared(g,h))});