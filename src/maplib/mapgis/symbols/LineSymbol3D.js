// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/Collection ../core/lang ../core/accessorSupport/decorators ./LineSymbol3DLayer ./PathSymbol3DLayer ./Symbol3D ./TextSymbol3DLayer".split(" "),function(q,r,h,c,k,d,b,l,m,n,p){var f=k.ofType({base:null,key:"type",typeMap:{line:l,text:p,path:m}});return function(g){function a(a){a=g.call(this)||this;a.symbolLayers=new f;a.type="line-3d";return a}h(a,g);e=a;a.prototype.clone=function(){return new e({styleOrigin:d.clone(this.styleOrigin),
symbolLayers:d.clone(this.symbolLayers),thumbnail:d.clone(this.thumbnail)})};c([b.property({type:f})],a.prototype,"symbolLayers",void 0);c([b.property()],a.prototype,"type",void 0);return a=e=c([b.subclass("mapgis.symbols.LineSymbol3D")],a);var e}(b.declared(n))});