// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../../../core/Error ../../../core/promiseUtils ../../../geometry/projection ../../../geometry/support/spatialReferenceUtils ../../../geometry/support/webMercatorUtils".split(" "),function(x,h,v,k,l,f,g){function p(c,a){if(!a)return null;if("x"in a){var b={x:0,y:0};c=c(a.x,a.y,m,0);b.x=c[0];b.y=c[1];null!=a.z&&(b.z=a.z);null!=a.m&&(b.m=a.m);return b}if("xmin"in a)return b={xmin:0,ymin:0,xmax:0,ymax:0},e=c(a.xmin,a.ymin,m,0),b.xmin=e[0],b.ymin=e[1],c=c(a.xmax,a.ymax,m,0),b.xmax=
c[0],b.ymax=c[1],a.hasZ&&(b.zmin=a.zmin,b.zmax=a.zmax,b.hasZ=!0),a.hasM&&(b.mmin=a.mmin,b.mmax=a.mmax,b.hasM=!0),b;if("rings"in a)return{rings:q(a.rings,c),hasM:a.hasM,hasZ:a.hasZ};if("paths"in a)return{paths:q(a.paths,c),hasM:a.hasM,hasZ:a.hasZ};if("points"in a)return{points:r(a.points,c),hasM:a.hasM,hasZ:a.hasZ};var e}function q(c,a){for(var b=[],e=0;e<c.length;e++)b.push(r(c[e],a));return b}function r(c,a){for(var b=[],e=0;e<c.length;e++){var d=c[e],n=a(d[0],d[1],[0,0],0);b.push(n);2<d.length&&
n.push(d[2]);3<d.length&&n.push(d[3])}return b}Object.defineProperty(h,"__esModule",{value:!0});var m=[0,0];h.checkProjectionSupport=function(c,a,b){return!a||!b||f.equals(a,b)||g.canProject(a,b)?k.resolve():l.isSupported()?l.load():k.reject(new v("feature-store:unsupported-query","projection not supported",{query:c}))};var t=p.bind(null,g.lngLatToXY),u=p.bind(null,g.xyToLngLat);h.project=function(c,a,b){return a&&b&&!f.equals(a,b)?g.canProject(a,b)?f.isWebMercator(b)?t(c):u(c):l.projectMany([c],
a,b,null,!0)[0]:c};var w=new (function(){function c(){this._jobs=[];this._timer=null;this._process=this._process.bind(this)}c.prototype.push=function(a,b,c){var d=this;a&&a.length&&b&&c&&!f.equals(b,c)||k.resolve(a);var e={geometries:a,inSpatialReference:b,outSpatialReference:c,resolve:null};this._jobs.push(e);return k.create(function(a){e.resolve=a;null===d._timer&&(d._timer=setTimeout(d._process,10))},function(){var a=d._jobs.indexOf(e);-1<a&&d._jobs.splice(a,1)})};c.prototype._process=function(){this._timer=
null;var a=this._jobs.shift();if(a){var b=a.geometries,c=a.inSpatialReference,d=a.outSpatialReference,a=a.resolve;g.canProject(c,d)?f.isWebMercator(d)?a(b.map(t)):a(b.map(u)):a(l.projectMany(b,c,d,null,!0));0<this._jobs.length&&(this._timer=setTimeout(this._process,10))}};return c}());h.projectMany=function(c,a,b){return w.push(c,a,b)}});