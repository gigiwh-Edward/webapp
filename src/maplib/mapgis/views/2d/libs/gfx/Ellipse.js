// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/extendsHelper","dojox/gfx/_base","./Shape"],function(b,c,d,e,f){Object.defineProperty(c,"__esModule",{value:!0});b=function(b){function a(g){var a=b.call(this)||this;a.shape=e.getDefault("Ellipse");a.rawNode=g;return a}d(a,b);a.prototype.getBoundingBox=function(){if(!this.bbox){var a=this.shape;this.bbox={x:a.cx-a.rx,y:a.cy-a.ry,width:2*a.rx,height:2*a.ry}}return this.bbox};a.nodeType="ellipse";return a}(f.default);c.default=b});