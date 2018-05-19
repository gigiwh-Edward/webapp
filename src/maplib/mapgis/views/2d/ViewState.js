// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../Viewpoint ../../core/JSONSupport ../../core/accessorSupport/decorators ../../geometry/Extent ./viewpointUtils ./libs/gl-matrix/mat2d ./libs/gl-matrix/vec2".split(" "),function(q,r,m,c,n,p,b,k,e,g,d){var f=[0,0];return function(l){function a(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];a=l.apply(this,a)||this;a.pixelRatio=1;a.size=[0,0];return a}m(a,l);h=a;Object.defineProperty(a.prototype,
"center",{get:function(){var a=this.viewpoint.targetGeometry;return d.set(d.create(),a.x,a.y)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"extent",{get:function(){return e.getExtent(new k,this.viewpoint,this.size)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"height",{get:function(){return this.size?this.size[1]:0},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"id",{get:function(){return this._get("id")+1},enumerable:!0,configurable:!0});
Object.defineProperty(a.prototype,"inverseTransform",{get:function(){return g.invert(g.create(),this.transform)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"latitude",{get:function(){return this.viewpoint.targetGeometry.latitude},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"longitude",{get:function(){return this.viewpoint.targetGeometry.longitude},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"resolution",{get:function(){return e.getResolution(this.viewpoint)},
enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"rotation",{get:function(){return this.viewpoint.rotation},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"scale",{get:function(){return this.viewpoint.scale},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"screenCenter",{get:function(){return d.scale(d.create(),this.size,.5)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"spatialReference",{get:function(){return this.viewpoint.targetGeometry.spatialReference},
enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"transform",{get:function(){return e.getTransform(g.create(),this.viewpoint,this.size,this.pixelRatio)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"transformNoRotation",{get:function(){return e.getTransformNoRotation(g.create(),this.viewpoint,this.size,this.pixelRatio)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"clippedExtent",{get:function(){return e.getClippedExtent(new k,this.viewpoint,
this.size)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"width",{get:function(){return this.size?this.size[0]:0},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"worldScreenWidth",{get:function(){return e.getWorldScreenWidth(this.spatialReference,this.resolution)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"worldWidth",{get:function(){return e.getWorldWidth(this.spatialReference)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,
"wrappable",{get:function(){return!!this.spatialReference&&this.spatialReference.isWrappable},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"x",{get:function(){return this.center[0]},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"y",{get:function(){return this.center[1]},enumerable:!0,configurable:!0});a.prototype.copy=function(a){this.viewpoint&&this.size?(this._set("viewpoint",e.copy(this.viewpoint,a.viewpoint)),this._set("size",d.copy(this.size,a.size))):
(this.viewpoint=a.viewpoint.clone(),d.copy(this.size,a.size));this._set("pixelRatio",a.pixelRatio);return this};a.prototype.clone=function(){return new h({viewpoint:this.viewpoint.clone(),size:d.clone(this.size)})};a.prototype.toMap=function(a,b,c){if(Array.isArray(b))return d.transformMat2d(a,b,this.inverseTransform);f[0]=b;f[1]=c;return d.transformMat2d(a,f,this.inverseTransform)};a.prototype.toScreen=function(a,b,c){if(Array.isArray(b))return d.transformMat2d(a,b,this.transform);f[0]=b;f[1]=c;
return d.transformMat2d(a,f,this.transform)};a.prototype.pixelSizeAt=function(a){return e.pixelSizeAt(a,this.viewpoint,this.size)};c([b.property({dependsOn:["viewpoint"]})],a.prototype,"center",null);c([b.property({readOnly:!0,dependsOn:["viewpoint","size"]})],a.prototype,"extent",null);c([b.property({readOnly:!0,dependsOn:["size"]})],a.prototype,"height",null);c([b.property({value:0,readOnly:!0,dependsOn:["transform"]})],a.prototype,"id",null);c([b.property({readOnly:!0,dependsOn:["transform"]})],
a.prototype,"inverseTransform",null);c([b.property({readOnly:!0,dependsOn:["viewpoint"]})],a.prototype,"latitude",null);c([b.property({readOnly:!0,dependsOn:["viewpoint"]})],a.prototype,"longitude",null);c([b.property({type:Number,json:{write:!0}})],a.prototype,"pixelRatio",void 0);c([b.property({readOnly:!0,dependsOn:["viewpoint"]})],a.prototype,"resolution",null);c([b.property({readOnly:!0,dependsOn:["viewpoint"]})],a.prototype,"rotation",null);c([b.property({readOnly:!0,dependsOn:["viewpoint"]})],
a.prototype,"scale",null);c([b.property({readOnly:!0,dependsOn:["size"]})],a.prototype,"screenCenter",null);c([b.property({json:{write:!0}})],a.prototype,"size",void 0);c([b.property({readOnly:!0,dependsOn:["viewpoint"]})],a.prototype,"spatialReference",null);c([b.property({readOnly:!0,dependsOn:["viewpoint","size","pixelRatio"]})],a.prototype,"transform",null);c([b.property({readOnly:!0,dependsOn:["viewpoint","size","pixelRatio"]})],a.prototype,"transformNoRotation",null);c([b.property({type:n,json:{write:!0}})],
a.prototype,"viewpoint",void 0);c([b.property({readOnly:!0,dependsOn:["viewpoint","size"]})],a.prototype,"clippedExtent",null);c([b.property({readOnly:!0,dependsOn:["size"]})],a.prototype,"width",null);c([b.property({readOnly:!0,dependsOn:["worldWidth","resolution"]})],a.prototype,"worldScreenWidth",null);c([b.property({readOnly:!0,dependsOn:["spatialReference"]})],a.prototype,"worldWidth",null);c([b.property({readOnly:!0,dependsOn:["spatialReference"]})],a.prototype,"wrappable",null);c([b.property({readOnly:!0,
dependsOn:["center"]})],a.prototype,"x",null);c([b.property({readOnly:!0,dependsOn:["center"]})],a.prototype,"y",null);return a=h=c([b.subclass("mapgis.views.2d.ViewState")],a);var h}(b.declared(p))});