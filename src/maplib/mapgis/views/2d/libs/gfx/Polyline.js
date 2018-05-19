// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/extendsHelper","dojox/gfx/_base","./Shape"],function(e,k,l,f,m){Object.defineProperty(k,"__esModule",{value:!0});e=function(e){function c(b){var d=e.call(this)||this;d.shape=f.getDefault("Polyline");d.rawNode=b;return d}l(c,e);c.prototype.setShape=function(b,d){Array.isArray(b)?(this.shape=f.makeParameters(this.shape,{points:b}),d&&this.shape.points.length&&this.shape.points.push(this.shape.points[0])):this.shape=f.makeParameters(this.shape,
b);this.bbox=null;this._normalizePoints();b=[];d=this.shape.points;for(var a=0;a<d.length;++a)b.push(d[a].x.toFixed(8),d[a].y.toFixed(8));this.rawNode.setAttribute("points",b.join(" "));return this};c.prototype.getBoundingBox=function(){if(!this.bbox&&this.shape.points.length){for(var b=this.shape.points,d=b.length,a=b[0],g=a.x,c=a.y,e=a.x,f=a.y,h=1;h<d;++h)a=b[h],g>a.x&&(g=a.x),e<a.x&&(e=a.x),c>a.y&&(c=a.y),f<a.y&&(f=a.y);this.bbox={x:g,y:c,width:e-g,height:f-c}}return this.bbox};c.prototype._normalizePoints=
function(){var b=this.shape.points,d=b&&b.length;if(d&&"number"===typeof b[0]){for(var a=[],c=0;c<d;c+=2)a.push({x:b[c],y:b[c+1]});this.shape.points=a}};c.nodeType="polyline";return c}(m.default);k.Polyline=e});