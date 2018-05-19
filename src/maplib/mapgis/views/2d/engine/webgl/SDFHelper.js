// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define(["require","exports","./Geometry","./Rect"],function(E,D,G,H){function v(b){return b-Math.floor(b)}function F(b,a,c){0>b?b=0:.9999991<b&&(b=.9999991);var f=v(b*z[0]),d=v(b*z[1]),l=v(b*z[2]);b=v(b*z[3]);a[c+0]=256*(f-f*C[0]);a[c+1]=256*(d-f*C[1]);a[c+2]=256*(l-d*C[2]);a[c+3]=256*(b-l*C[3])}Object.defineProperty(D,"__esModule",{value:!0});var z=[16777216,65536,256,1],C=[0,1/256,1/256,1/256];D.packFloat=F;E=function(){function b(){}b.checkSDF=function(a){return!0};b.prototype._extractGeometry=
function(a){if(!a)return null;a=a.symbolLayers;if(!a||1!==a.length)return null;a=a[0];if(!a)return null;a=a.markerGraphics;if(!a||1!==a.length)return null;a=a[0];if(!a)return null;var c=a.geometry;if(!c||!c.rings)return null;a=[];for(var f=0,c=c.rings;f<c.length;f++){for(var d=[],l=0,b=c[f];l<b.length;l++){var m=b[l];d.push(new G.Point(m[0],m[1]))}a.push(d)}return a};b.prototype._getEnvelope=function(a){for(var c=Infinity,f=-Infinity,d=Infinity,l=-Infinity,b=0;b<a.length;b++)for(var m=0,h=a[b];m<
h.length;m++){var k=h[m];k.x<c&&(c=k.x);k.x>f&&(f=k.x);k.y<d&&(d=k.y);k.y>l&&(l=k.y)}return new H(c,d,f-c,l-d)};b.prototype.buildSDF=function(a){a=this._extractGeometry(a);if(!a)return null;var c=this._getEnvelope(a);if(0>=c.width||0>=c.height)return null;for(var f=Math.floor(31.5),d=(128-2*(f+0+1))/Math.max(c.width,c.height),b=Math.round(c.width*d),w=Math.round(c.height*d),m=b+2*f,h=w+2*f,k=0;k<a.length;k++)for(var q=0,g=a[k];q<g.length;q++){var e=g[q];e.x-=c.x;e.y-=c.y;e.x*=d;e.y*=d;e.x+=f-.5;e.y+=
f-.5}c=this._dist_map(a,m,h,f);this._sign_dist_map(a,m,h,f,c);return[this._encodeDistMap(c,f),m,h,b,w,d]};b.prototype._dist_map=function(a,c,b,d){for(var f=c*b,w=new Float32Array(f),m=d*d+1,h=0;h<f;++h)w[h]=m;for(m=0;m<a.length;m++)for(var k=a[m],q=k.length,h=1;h<q;++h){var g=k[h-1],e=k[h],r=void 0,n=void 0;g.x<e.x?(r=g.x,n=e.x):(r=e.x,n=g.x);var t=void 0,u=void 0;g.y<e.y?(t=g.y,u=e.y):(t=e.y,u=g.y);var p=Math.floor(r)-d,n=Math.floor(n)+d,t=Math.floor(t)-d,u=Math.floor(u)+d;0>p&&(p=0);n>c&&(n=c);
0>t&&(t=0);u>b&&(u=b);for(var r=e.x-g.x,v=e.y-g.y,z=r*r+v*v;p<n;p++)for(var A=t;A<u;A++){var x=(p-g.x)*r+(A-g.y)*v,y=void 0,B=void 0;0>x?(y=g.x,B=g.y):x>z?(y=e.x,B=e.y):(x/=z,y=g.x+x*r,B=g.y+x*v);x=(p-y)*(p-y)+(A-B)*(A-B);y=(b-A-1)*c+p;x<w[y]&&(w[y]=x)}}for(h=0;h<f;++h)w[h]=Math.sqrt(w[h]);return w};b.prototype._sign_dist_map=function(a,c,b,d,l){for(var f=0;f<a.length;f++)for(var m=a[f],h=m.length,k=1;k<h;++k){var q=m[k-1],g=m[k],e=void 0,r=void 0;q.x<g.x?(e=q.x,r=g.x):(e=g.x,r=q.x);var n=void 0,
t=void 0;q.y<g.y?(n=q.y,t=g.y):(n=g.y,t=q.y);e=Math.floor(e);r=Math.floor(r)+1;n=Math.floor(n);t=Math.floor(t)+1;e<d&&(e=d);r>c-d&&(r=c-d);n<d&&(n=d);for(t>b-d&&(t=b-d);n<t;++n)if(q.y>n!==g.y>n){for(var u=(b-n-1)*c,p=e;p<r;++p)p<(g.x-q.x)*(n-q.y)/(g.y-q.y)+q.x&&(l[u+p]=-l[u+p]);for(p=d;p<e;++p)l[u+p]=-l[u+p]}}};b.prototype._encodeDistMap=function(a,b){b*=2;for(var c=a.length,d=new Uint8Array(4*c),l=0;l<c;++l)F(.5-a[l]/b,d,4*l);return d};return b}();D.SDFHelper=E});