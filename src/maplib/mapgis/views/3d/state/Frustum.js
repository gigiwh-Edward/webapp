// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define(["require","exports","../lib/glMatrix","../support/earthUtils","../webgl-engine/lib/Util"],function(f,g,c,h,k){Object.defineProperty(g,"__esModule",{value:!0});f=function(){function d(){this.planes=Array(6);this.points=Array(8);this.lines=Array(12);this.origin=c.vec3d.create();this.direction=c.vec3d.create();this._altitude=null;for(var a=0;6>a;a++)this.planes[a]=c.vec4d.create();for(a=0;8>a;a++)this.points[a]=c.vec3d.create();for(a=0;12>a;a++)this.lines[a]={origin:null,direction:c.vec3d.create(),
endpoint:null}}d.prototype.updateLine=function(a,b,e){a.origin=b;a.endpoint=e;c.vec3d.direction(e,b,a.direction)};d.prototype.update=function(a){k.matrix2frustumPlanes(a.viewMatrix,a.projectionMatrix,this.points,this.planes);for(var b=0;4>b;b++){var e=b,d=b+4;this.updateLine(this.lines[b],this.points[e],this.points[d]);this.updateLine(this.lines[b+4],this.points[e],3===b?this.points[0]:this.points[e+1]);this.updateLine(this.lines[b+8],this.points[d],3===b?this.points[4]:this.points[d+1])}c.vec3d.set(a.eye,
this.origin);c.vec3d.set(a.viewForward,this.direction);this._altitude=c.vec3d.length(this.origin)-h.earthRadius};Object.defineProperty(d.prototype,"altitude",{get:function(){return this._altitude},enumerable:!0,configurable:!0});return d}();g.Frustum=f;g.default=f});