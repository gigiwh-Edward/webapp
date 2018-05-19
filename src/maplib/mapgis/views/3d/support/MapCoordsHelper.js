// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../../../geometry ../../../core/Error ../../../core/promiseUtils ../../../geometry/support/scaleUtils ../../../portal/support/geometryServiceUtils ../../../tasks/support/ProjectParameters".split(" "),function(b,d,e,f,g,h,k,l){Object.defineProperty(d,"__esModule",{value:!0});b=function(){function b(a,b,c){void 0===c&&(c=null);var m=this;this.spatialReference=b;this.unitInMeters=h.getMetersPerUnitForSR(this.spatialReference);(this.geometryService=c)||k.create(a&&a.get("portalItem")).then(function(a){m.geometryService=
a}).catch(function(){})}b.prototype.toGeographic=function(a){var b=this,c=!0;if(!this.geometryService)return g.reject(new f("mapcoordshelper:missing-geometry-service","Must specify geometryService in mapgis/config"));Array.isArray(a[0])&&"number"!==typeof a[0]||(a=[a],c=!1);a=a.map(function(a){return a instanceof e.Point?a:new e.Point(a,b.spatialReference)});a=new l({geometries:a,outSR:e.SpatialReference.WGS84});return this.geometryService.project(a).then(function(a){a=a.map(function(a){if("point"===
a.type)return[a.x,a.y]});return c?a:a[0]})};b.prototype.canProject=function(){return!!this.geometryService};return b}();d.MapCoordsHelper=b;d.default=b});