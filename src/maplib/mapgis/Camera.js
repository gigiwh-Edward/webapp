// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ./core/tsSupport/declareExtendsHelper ./core/tsSupport/decorateHelper ./core/JSONSupport ./core/accessorSupport/decorators ./geometry/Point ./views/3d/support/mathUtils".split(" "),function(m,n,k,d,l,c,f,g){return function(h){function b(a,b,c,d){a=h.call(this)||this;a.position=null;a.heading=0;a.tilt=0;a.fov=55;return a}k(b,h);e=b;b.prototype.getDefaults=function(a){if(!a.position)return{position:new f([0,0,0])}};b.prototype.normalizeCtorArgs=function(a,b,c,d){a&&"object"===
typeof a&&("x"in a||Array.isArray(a))&&(a={position:a},null!=b&&(a.heading=b),null!=c&&(a.tilt=c),null!=d&&(a.fov=d));return a};b.prototype.equals=function(a){return a?this.tilt===a.tilt&&this.heading===a.heading&&this.fov===a.fov&&this.position.equals(a.position):!1};b.prototype.clone=function(){return new e({position:this.position.clone(),heading:this.heading,tilt:this.tilt,fov:this.fov})};d([c.property({type:f,json:{write:{isRequired:!0}}})],b.prototype,"position",void 0);d([c.property({type:Number,
json:{write:{isRequired:!0}}}),c.cast(g.cyclicalDeg.normalize)],b.prototype,"heading",void 0);d([c.property({type:Number,json:{write:{isRequired:!0}}}),c.cast(function(a){return g.clamp(a,-180,180)})],b.prototype,"tilt",void 0);d([c.property({json:{read:!1,write:!1}})],b.prototype,"fov",void 0);return b=e=d([c.subclass("mapgis.Camera")],b);var e}(c.declared(l))});