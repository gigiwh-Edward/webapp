// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define(["require","exports","./gl-matrix"],function(d,p,n){var h=n.vec3d;d=function(){function c(a,b){this._origins=[];this._boxSize=a;this._maxNumOrigins=b}c.prototype.getOrigin=function(f){for(var b=this._origins.length,e,d=!1,k=Number.MAX_VALUE,g=0;g<b;g++){var l=this._origins[g];h.subtract(f,l.vec3,a);a[0]=Math.abs(a[0]);a[1]=Math.abs(a[1]);a[2]=Math.abs(a[2]);var m=a[0]+a[1]+a[2];m<k&&(e=l,k=m,d=a[0]<this._boxSize&&a[1]<this._boxSize&&a[2]<this._boxSize)}d||e&&null!=this._maxNumOrigins&&!(this._origins.length<
this._maxNumOrigins)||(b=c.OFFSET,e={vec3:[f[0]+b,f[1]+b,f[2]+b],id:c.ORIGIN_PREFIX+this._origins.length},this._origins.push(e));return e};c.OFFSET=1.11;c.ORIGIN_PREFIX="fb_";return c}();var a=h.create();return d});