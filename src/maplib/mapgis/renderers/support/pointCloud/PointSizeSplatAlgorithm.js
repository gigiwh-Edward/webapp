// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/accessorSupport/decorators ./PointSizeAlgorithm".split(" "),function(b,c,f,e,d,g){Object.defineProperty(c,"__esModule",{value:!0});b=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.type="splat";a.minSize=null;a.scaleFactor=1;return a}f(a,b);c=a;a.prototype.clone=function(){return new c({minSize:this.minSize,scaleFactor:this.scaleFactor})};e([d.property()],
a.prototype,"type",void 0);e([d.property({type:Number,json:{write:!0}})],a.prototype,"minSize",void 0);e([d.property({type:Number,value:1,nonNullable:!0,json:{write:!0}})],a.prototype,"scaleFactor",void 0);return a=c=e([d.subclass("mapgis.renderers.support.pointCloud.PointSizeSplatAlgorithm")],a);var c}(d.declared(g.default));c.PointSizeSplatAlgorithm=b;c.default=b});