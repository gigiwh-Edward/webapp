// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define(["require","exports","dojo/Deferred","dojo/promise/Promise"],function(A,d,x,y){function z(b,a){Array.isArray(b)?b.forEach(a):a(b)}function h(b,a,e,c,d){d=b.watch(a,function(a,d,k,g){c&&!c(a)||e.call(b,a,d,k,g)},d);z(a,function(a){var d=b.get(a);c&&c(d)&&e.call(b,d,d,a,b)});return d}function m(b,a,e,c,d){function l(){k&&(k.remove(),k=null)}var n=!1,k,g=new x(l),f=new y;f.cancel=g.cancel;f.isCanceled=g.isCanceled;f.isFulfilled=g.isFulfilled;f.isRejected=g.isRejected;f.isResolved=g.isResolved;
f.then=g.then;f.remove=l;Object.freeze(f);k=h(b,a,function(a,c,d,f){n=!0;l();e&&e.call(b,a,c,d,f);g.resolve({value:a,oldValue:c,propertyName:d,target:f})},c,d);n&&k.remove();return f}function p(b){return!!b}function q(b){return!b}function r(b){return!0===b}function t(b){return!1===b}function u(b){return void 0!==b}function v(b){return void 0===b}function w(b,a,e,c){var d=Array.isArray(a)?a:-1<a.indexOf(",")?a.split(","):[a];a=b.watch(a,e,c);d.forEach(function(a){a=a.trim();var c=b.get(a);e.call(b,
c,c,a,b)});return a}Object.defineProperty(d,"__esModule",{value:!0});d.init=w;d.watch=function(b,a,e,c){return b.watch(a,e,c)};d.once=function(b,a,e,c){return m(b,a,e,null,c)};d.when=function(b,a,e,c){return h(b,a,e,p,c)};d.whenOnce=function(b,a,e,c){return m(b,a,e,p,c)};d.whenNot=function(b,a,e,c){return h(b,a,e,q,c)};d.whenNotOnce=function(b,a,e,c){return m(b,a,e,q,c)};d.whenTrue=function(b,a,e,c){return h(b,a,e,r,c)};d.whenTrueOnce=function(b,a,e,c){return m(b,a,e,r,c)};d.whenFalse=function(b,
a,e,c){return h(b,a,e,t,c)};d.whenFalseOnce=function(b,a,e,c){return m(b,a,e,t,c)};d.whenDefined=function(b,a,e,c){return h(b,a,e,u,c)};d.whenDefinedOnce=function(b,a,e,c){return m(b,a,e,u,c)};d.whenUndefined=function(b,a,e,c){return h(b,a,e,v,c)};d.whenUndefinedOnce=function(b,a,e,c){return m(b,a,e,v,c)};d.pausable=function(b,a,e,c){var d=!1,l=b.watch(a,function(a,c,g,f){d||e.call(b,a,c,g,f)},c);return{remove:function(){l.remove()},pause:function(){d=!0},resume:function(){d=!1}}};d.on=function(b,
a,e,c,d,l,h){function k(a){var c=g[a];c&&(l&&l(c.target,a,b,e),c.handle.remove(),delete g[a])}var g={},f=w(b,a,function(a,f,h){k(h);a&&"function"===typeof a.on&&(g[h]={handle:a.on(e,c),target:a},d&&d(a,h,b,e))},h);return{remove:function(){f.remove();for(var a in g)k(a)}}}});