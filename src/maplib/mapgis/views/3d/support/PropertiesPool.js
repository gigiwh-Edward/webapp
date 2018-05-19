// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define(["require","exports","../../../core/ObjectPool","../../../core/accessorSupport/watch"],function(d,g,k,h){Object.defineProperty(g,"__esModule",{value:!0});d=function(){function e(a,b){var c=this;this.owner=b;this.properties={};this.afterDispatchHandle=null;for(var f in a)b=new k(a[f],null,null,2,2),this.properties[f]={pool:b,acquired:[]};this.afterDispatchHandle=h.afterDispatch(function(){return c.release()})}e.prototype.destroy=function(){this.afterDispatchHandle&&(this.afterDispatchHandle.remove(),
this.afterDispatchHandle=null);this.owner=null};e.prototype.get=function(a){var b=this.owner._get(a);a=this.properties[a];var c=a.pool.acquire();for(a.acquired.push(c);c===b;)a.acquired.push(c),c=a.pool.acquire();return c};e.prototype.release=function(){for(var a in this.properties){for(var b=this.properties[a],c=0,f=0,e=b.acquired;f<e.length;f++){var d=e[f];h.isValueInUse(d)?b.acquired[c++]=d:b.pool.release(d)}b.acquired.length=c}};return e}();g.PropertiesPool=d;g.default=d});