// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/accessorSupport/decorators ./Symbol3DLayer ./edges/utils ./support/Symbol3DFillMaterial ./support/Symbol3DOutline".split(" "),function(m,n,f,c,b,g,h,k,l){return function(e){function a(a){a=e.call(this)||this;a.type="fill";a.material=null;a.outline=null;a.edges=null;return a}f(a,e);d=a;a.prototype.clone=function(){return new d({edges:this.edges&&this.edges.clone(),enabled:this.enabled,elevationInfo:this.elevationInfo&&
this.elevationInfo.clone(),material:this.material&&this.material.clone(),outline:this.outline&&this.outline.clone()})};c([b.property()],a.prototype,"type",void 0);c([b.property({type:k.default})],a.prototype,"material",void 0);c([b.property({type:l.default,json:{write:!0}})],a.prototype,"outline",void 0);c([b.property(h.symbol3dEdgesProperty)],a.prototype,"edges",void 0);return a=d=c([b.subclass("mapgis.symbols.FillSymbol3DLayer")],a);var d}(b.declared(g))});