// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../../geometry ../../core/Logger ../../geometry/support/scaleUtils ../../geometry/support/webMercatorUtils".split(" "),function(g,d,n,u,v,p){function h(b,a){var c=k(b,a.spatialReference);if(!c)return null;switch(b.type){case "point":b.z=a.elevationAt(c)||0;break;case "polyline":f.spatialReference=c.spatialReference;for(var e=0;e<b.paths.length;e++)for(var l=b.paths[e],d=c.paths[e],m=0;m<l.length;m++){var h=l[m],g=d[m];f.x=g[0];f.y=g[1];h[2]=a.elevationAt(f)||0}b.hasZ=!0;break;
case "multipoint":f.spatialReference=c.spatialReference;for(e=0;e<b.points.length;e++)l=b.points[e],d=c.points[e],f.x=d[0],f.y=d[1],l[2]=a.elevationAt(f)||0;b.hasZ=!0}return b}function q(b,a){return new n.Extent({xmin:b[0],ymin:b[1],xmax:b[2],ymax:b[3],spatialReference:a})}function k(b,a){var c=b.spatialReference;return c.equals(a)?b:p.canProject(c,a)?p.project(b,a):(w.error("Cannot project geometry spatial reference (wkid:"+c.wkid+") to elevation sampler spatial reference (wkid:"+a.wkid+")"),null)}
Object.defineProperty(d,"__esModule",{value:!0});var w=u.getLogger("mapgis.layers.support.ElevationSampler"),t=function(){function b(a,b){this.tile=a;this.extent=q(a.tile.extent,b.spatialReference);var c=v.getMetersPerUnitForSR(b.spatialReference);a=b.lodAt(a.tile.level).resolution*c;this.demResolution={min:a,max:a}}Object.defineProperty(b.prototype,"spatialReference",{get:function(){return this.extent.spatialReference},enumerable:!0,configurable:!0});b.prototype.contains=function(a){var b=k(a,this.spatialReference);
a=b.x;b=b.y;return a>=this.extent.xmin&&a<this.extent.xmax&&b>=this.extent.ymin&&b<this.extent.ymax};b.prototype.elevationAt=function(a){return(a=k(a,this.spatialReference))?this.tile.sample(a.x,a.y):null};b.prototype.queryElevation=function(a){return h(a.clone(),this)};b.prototype.on=function(a,b){return r};return b}();d.TileElevationSampler=t;g=function(){function b(a,b){this.samplers=b?a.map(function(a){return new t(a,b)}):a;if(a=this.samplers[0])for(this.extent=a.extent.clone(),a=a.demResolution,
this.demResolution={min:a.min,max:a.max},a=1;a<this.samplers.length;a++){var c=this.samplers[a];this.extent.union(c.extent);this.demResolution.min=Math.min(this.demResolution.min,c.demResolution.min);this.demResolution.max=Math.max(this.demResolution.max,c.demResolution.max)}else this.extent=q([0,0,0,0],b.spatialReference),this.demResolution={min:0,max:0}}Object.defineProperty(b.prototype,"spatialReference",{get:function(){return this.extent.spatialReference},enumerable:!0,configurable:!0});b.prototype.elevationAt=
function(a){a=k(a,this.spatialReference);if(!a)return null;for(var b=0,e=this.samplers;b<e.length;b++){var d=e[b];if(d.contains(a))return d.elevationAt(a)}return null};b.prototype.queryElevation=function(a){return h(a.clone(),this)};b.prototype.on=function(a,b){return r};return b}();d.MultiTileElevationSampler=g;d.updateGeometryElevation=h;var f=new n.Point,r={remove:function(){}}});