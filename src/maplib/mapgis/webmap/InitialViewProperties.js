// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../Viewpoint ../core/Accessor ../core/accessorSupport/decorators ../geometry/SpatialReference".split(" "),function(l,m,f,c,g,h,b,k){return function(e){function a(a){a=e.call(this,a)||this;a.spatialReference=null;a.viewpoint=null;return a}f(a,e);d=a;a.prototype.clone=function(){return new d({spatialReference:this.spatialReference?this.spatialReference.clone():null,viewpoint:this.viewpoint?this.viewpoint.clone():
null})};c([b.shared("mapgis.webmap.InitialViewProperties")],a.prototype,"declaredClass",void 0);c([b.property({value:null,type:k})],a.prototype,"spatialReference",void 0);c([b.property({value:null,type:g})],a.prototype,"viewpoint",void 0);return a=d=c([b.subclass()],a);var d}(b.declared(h))});