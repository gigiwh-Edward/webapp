// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../Point ../Polygon ../Polyline ../SpatialReference".split(" "),function(H,v,D,E,F,G){function y(a,p,e,g){var n=1/298.257223563,t=Math.sin(e);e=Math.cos(e);var b=(1-n)*Math.tan(a);a=1/Math.sqrt(1+b*b);for(var f=b*a,h=Math.atan2(b,e),b=a*t*a*t,c=1-b,d=2.7233160610754688E11*c/4.040829998466145E13,k=1+d/16384*(4096+d*(-768+d*(320-175*d))),u=d/1024*(256+d*(-128+d*(74-47*d))),d=g/(6356752.31424518*k),r=2*Math.PI,m,l,q,v;1E-12<Math.abs(d-r);)q=Math.cos(2*h+d),m=Math.sin(d),l=Math.cos(d),
v=u*m*(q+u/4*(l*(-1+2*q*q)-u/6*q*(-3+4*m*m)*(-3+4*q*q))),r=d,d=g/(6356752.31424518*k)+v;g=f*m-a*l*e;c=n/16*c*(4+n*(4-3*c));return new D((p+(Math.atan2(m*t,a*l-f*m*e)-(1-c)*n*Math.sqrt(b)*(d+c*m*(q+c*l*(-1+2*q*q)))))/(Math.PI/180),Math.atan2(f*l+a*m*e,(1-n)*Math.sqrt(b+g*g))/(Math.PI/180),new G({wkid:4326}))}function A(a,p,e,g){var n=1/298.257223563,t=g-p,b=Math.atan((1-n)*Math.tan(a)),f=Math.atan((1-n)*Math.tan(e)),h=Math.sin(b),b=Math.cos(b),c=Math.sin(f),f=Math.cos(f),d=1E3,k=t,u,r,m,l,q,v,w,x;
do{l=Math.sin(k);q=Math.cos(k);m=Math.sqrt(f*l*f*l+(b*c-h*f*q)*(b*c-h*f*q));if(0===m)return{geodesicDistance:0};q=h*c+b*f*q;v=Math.atan2(m,q);w=b*f*l/m;r=1-w*w;l=q-2*h*c/r;isNaN(l)&&(l=0);x=n/16*r*(4+n*(4-3*r));u=k;k=t+(1-x)*n*w*(v+x*m*(l+x*q*(-1+2*l*l)))}while(1E-12<Math.abs(k-u)&&0<--d);if(0===d)return h=g-p,{geodesicDistance:6371009*Math.acos(Math.sin(a)*Math.sin(e)+Math.cos(a)*Math.cos(e)*Math.cos(g-p)),azimuth:Math.atan2(Math.sin(h)*Math.cos(e),Math.cos(a)*Math.sin(e)-Math.sin(a)*Math.cos(e)*
Math.cos(h))};a=2.7233160610754688E11*r/4.040829998466145E13;p=a/1024*(256+a*(-128+a*(74-47*a)));return{geodesicDistance:6356752.31424518*(1+a/16384*(4096+a*(-768+a*(320-175*a))))*(v-p*m*(l+p/4*(q*(-1+2*l*l)-p/6*l*(-3+4*m*m)*(-3+4*l*l)))),azimuth:Math.atan2(f*Math.sin(k),b*c-h*f*Math.cos(k)),reverseAzimuth:Math.atan2(b*Math.sin(k),b*c*Math.cos(k)-h*f)}}function B(a,p){var e=Math.PI/180;637.100877151506>p&&(p=637.100877151506);if("polyline"!==a.type&&"polygon"!==a.type)throw console.error("_geodesicDensify: the input geometry is neither polyline nor polygon"),
Error("_geodesicDensify: the input geometry is neither polyline nor polygon");for(var g=[],n=0,t="polyline"===a.type?a.paths:a.rings;n<t.length;n++){var b=t[n],f=[];g.push(f);f.push([b[0][0],b[0][1]]);for(var h=b[0][0]*e,c=b[0][1]*e,d=void 0,k=void 0,u=0;u<b.length-1;u++)if(d=b[u+1][0]*e,k=b[u+1][1]*e,h!==d||c!==k){var k=A(c,h,k,d),d=k.azimuth,k=k.geodesicDistance,r=k/p;if(1<r){for(var m=1;m<=r-1;m++){var l=y(c,h,d,m*p);f.push([l.x,l.y])}r=y(c,h,d,(k+Math.floor(r-1)*p)/2);f.push([r.x,r.y])}c=y(c,
h,d,k);f.push([c.x,c.y]);h=c.x*e;c=c.y*e}}return"polyline"===a.type?new F({paths:g,spatialReference:a.spatialReference}):new E({rings:g,spatialReference:a.spatialReference})}function z(a,p){var e=Math.PI/180,g=Math.sin(p[1]*e),g=.9933056200098026*(g/(1-.006694379990197414*g*g)-6.111035746609262*Math.log((1-.0818191908429643*g)/(1+.0818191908429643*g)));a[0]=6378137*p[0]*e;a[1]=3189068.5*g;return a}Object.defineProperty(v,"__esModule",{value:!0});var C={esriMiles:1,esriKilometers:1.609344,esriFeet:5280,
esriMeters:1609.34,esriYards:1760,esriNauticalMiles:.869,esriCentimeters:160934,esriDecimeters:16093.4,esriInches:63360,esriMillimeters:1609340,esriAcres:1,esriAres:40.4685642,esriSquareKilometers:.00404685642,esriSquareMiles:.0015625,esriSquareFeet:43560,esriSquareMeters:4046.85642,esriHectares:.404685642,esriSquareYards:4840,esriSquareInches:6272640,esriSquareMillimeters:4046856420,esriSquareCentimeters:4.04685642E7,esriSquareDecimeters:404685.642};v.directGeodeticSolver=y;v.inverseGeodeticSolver=
A;v.geodesicDensify=B;v.geodesicLengths=function(a,p){for(var e=Math.PI/180,g=[],n=0;n<a.length;n++){for(var t=a[n].paths,b=0,f=0;f<t.length;f++){for(var h=t[f],c=0,d=1;d<h.length;d++){var k=h[d-1][0]*e,u=h[d][0]*e,r=h[d-1][1]*e,m=h[d][1]*e;if(r!==m||k!==u)k=A(r,k,m,u),c+=k.geodesicDistance/1609.344}b+=c}b*=C[p];g.push(b)}return g};var w=[0,0],x=[0,0];v.geodesicAreas=function(a,p){for(var e=[],g=0;g<a.length;g++){var n=B(a[g],1E4);e.push(n)}a=[];for(g=0;g<e.length;g++){for(var n=e[g].rings,t=0,b=
0;b<n.length;b++){var f=n[b];z(w,f[0]);z(x,f[f.length-1]);for(var h=x[0]*w[1]-w[0]*x[1],c=0;c<f.length-1;c++)z(w,f[c+1]),z(x,f[c]),h+=x[0]*w[1]-w[0]*x[1];h/=4046.87;t+=h}t*=C[p];a.push(t/-2)}return a}});