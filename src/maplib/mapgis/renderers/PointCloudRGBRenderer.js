// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper dojo/_base/lang ../core/lang ../core/accessorSupport/decorators ./PointCloudRenderer".split(" "),function(l,m,f,c,g,h,b,k){return function(e){function a(a){a=e.call(this)||this;a.type="point-cloud-rgb";a.field=null;return a}f(a,e);d=a;a.prototype.clone=function(){return new d(g.mixin(this.cloneProperties(),{field:h.clone(this.field)}))};c([b.property()],a.prototype,"type",void 0);c([b.property({json:{write:{target:{field:{type:String},
fieldTransformType:{type:String}},enabled:!0}},type:String})],a.prototype,"field",void 0);return a=d=c([b.subclass("mapgis.renderers.PointCloudRGBRenderer")],a);var d}(b.declared(k))});