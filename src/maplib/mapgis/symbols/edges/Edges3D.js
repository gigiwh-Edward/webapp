// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/assignHelper dojo/_base/lang ../../Color ../../core/JSONSupport ../../core/lang ../../core/screenUtils ../../core/accessorSupport/decorators ../support/materialUtils".split(" "),function(q,r,g,d,h,k,l,m,n,p,c,e){return function(f){function b(a){a=f.call(this)||this;a.color=new l([0,0,0,1]);a.extensionLength=0;a.size=p.px2pt(1);return a}g(b,f);b.prototype.normalizeCtorArgs=function(a){a&&
a.type&&(a=k.mixin({},a),delete a.type);return a};b.prototype.clone=function(){};b.prototype.cloneProperties=function(){return{color:n.clone(this.color),size:this.size,extensionLength:this.extensionLength}};d([c.property({type:String,readOnly:!0,json:{read:!0,write:{ignoreOrigin:!0}}})],b.prototype,"type",void 0);d([c.property(e.colorAndTransparencyProperty)],b.prototype,"color",void 0);d([c.property(h({},e.screenSizeProperty,{json:{write:{overridePolicy:function(a){return{enabled:!!a}}}}}))],b.prototype,
"extensionLength",void 0);d([c.property(e.screenSizeProperty)],b.prototype,"size",void 0);return b=d([c.subclass("mapgis.symbols.edges.Edges3D")],b)}(c.declared(m))});