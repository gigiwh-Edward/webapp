// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define(["./TileBase","./TileGeometryFactory","../../../core/ObjectPool","../support/mathUtils","../lib/glMatrix"],function(h,l,m,k,b){var n=b.vec3d.createFrom(0,0,1);b=function(a,p,b,c){h.call(this);this.tileUp=n;void 0!==a&&this.init(a,p,b,c)};b.prototype=new h;b.prototype.constructor=b;b.prototype.init=function(a,b,d,c){h.prototype.init.call(this,a,b,d,c);this.edgeLen=this.extent[2]-this.extent[0];this.curvatureHeight=0;this.centerAtSeaLevel[0]=k.lerp(this.extent[0],this.extent[2],.5);this.centerAtSeaLevel[1]=
k.lerp(this.extent[1],this.extent[3],.5);this.centerAtSeaLevel[2]=0;this.updateRadiusAndCenter()};b.prototype.updateRadiusAndCenter=function(){h.prototype.updateRadiusAndCenter.call(this);var a=(this.extent[2]-this.extent[0])*Math.SQRT1_2,b=.5*(this.elevationBounds[0]-this.elevationBounds[1]);this.radius=Math.sqrt(a*a+b*b)};b.prototype.isVisible=function(a){if(!this.intersectsClippingArea)return!1;var b=this.extent[0],d=this.extent[1],c=this.elevationBounds[0],e=this.extent[2],f=this.extent[3],g=
this.elevationBounds[1];return 0<a[0][0]*(0<a[0][0]?b:e)+a[0][1]*(0<a[0][1]?d:f)+a[0][2]*(0<a[0][2]?c:g)+a[0][3]||0<a[1][0]*(0<a[1][0]?b:e)+a[1][1]*(0<a[1][1]?d:f)+a[1][2]*(0<a[1][2]?c:g)+a[1][3]||0<a[2][0]*(0<a[2][0]?b:e)+a[2][1]*(0<a[2][1]?d:f)+a[2][2]*(0<a[2][2]?c:g)+a[2][3]||0<a[3][0]*(0<a[3][0]?b:e)+a[3][1]*(0<a[3][1]?d:f)+a[3][2]*(0<a[3][2]?c:g)+a[3][3]||0<a[4][0]*(0<a[4][0]?b:e)+a[4][1]*(0<a[4][1]?d:f)+a[4][2]*(0<a[4][2]?c:g)+a[4][3]||0<a[5][0]*(0<a[5][0]?b:e)+a[5][1]*(0<a[5][1]?d:f)+a[5][2]*
(0<a[5][2]?c:g)+a[5][3]?!1:!0};b.prototype._numSubdivisionsAtLevel=[2,2,2,2,2,2,2,2];b.prototype.createGeometry=function(a,b,d,c){a.needsUpdate=!1;l.createPlanarGlobeTile(a.numVertsPerRow,this.extent,a.samplerData,b,d,a.clippingArea,c)};b.Pool=new m(b);return b});