// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper"],function(c,e,f,d){Object.defineProperty(e,"__esModule",{value:!0});c=function(){return function(b){this.type=b}}();e.RenderBucket=c;d=function(b){function a(){var a=b.call(this,2)||this;a.triangleElementStart=0;a.triangleElementCount=0;return a}f(a,b);a.prototype.hasData=function(){return 0<this.triangleElementCount};return a}(c);e.LineRenderBucket=d;d=function(b){function a(){var a=b.call(this,
1)||this;a.triangleElementStart=0;a.triangleElementCount=0;a.outlineElementStart=0;a.outlineElementCount=0;return a}f(a,b);a.prototype.hasData=function(){return 0<this.triangleElementCount||0<this.outlineElementCount};return a}(c);e.FillRenderBucket=d;d=function(b){function a(){var a=b.call(this,3)||this;a.markerPerPageElementsMap=new Map;a.glyphPerPageElementsMap=new Map;a.isSDF=!1;return a}f(a,b);a.prototype.hasData=function(){return 0<this.markerPerPageElementsMap.size||0<this.glyphPerPageElementsMap.size};
return a}(c);e.SymbolRenderBucket=d;d=function(b){function a(){var a=b.call(this,4)||this;a.triangleElementStart=0;a.triangleElementCount=0;return a}f(a,b);a.prototype.hasData=function(){return 0<this.triangleElementCount};return a}(c);e.CircleRenderBucket=d;c=function(b){function a(){return b.call(this,0)||this}f(a,b);a.prototype.hasData=function(){return!0};return a}(c);e.BackgroundRenderBucket=c});