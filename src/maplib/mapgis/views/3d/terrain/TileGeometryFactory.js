// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../support/aaBoundingBox ../support/ArrayPool ../support/earthUtils ../support/mathUtils ./TerrainConst".split(" "),function(Z,C,M,Y,N,O,G){function P(e,l,g){for(var h=0;h<g.length;h++){var t=g[h];if(t){var p=t.safeWidth,d=t.width,q=t.pixelData,w=O.clamp(t.dy*(t.y1-l),0,p),t=O.clamp(t.dx*(e-t.x0),0,p),p=Math.floor(w),a=Math.floor(t),z=p*d+a,u=z+d,A=q[z],d=q[u],z=q[z+1],q=q[u+1];if(A+d+z+q<.5*G.ELEVATION_NODATA_VALUE)return w-=p,t-=a,e=A+(z-A)*t,e+(d+(q-d)*t-e)*w}}return null}
function R(e,l,g,h){var t=0<(g&2),p=l+(h?1024:0)+(t?2048:0),d=J[p];if(!d){var d=l-1,q=l-1,w=l*l,a=2*d+2*q,z=d*q*6,u=6*a,A=6*(2*d+q-1);h&&(z*=2,u*=2,A*=2);for(var a=65536<w+a?new Uint32Array(z+u):new Uint16Array(z+u),B=0,c=0,k=z,f,n,m,r,x=0,v=0;v<=q;v++){t&&(x=0===v?A:v===q?-A:0);for(var k=k+x,b=0;b<=d;b++)r=n=-1,0===v&&(n=w+b,b!==d&&(r=B+1)),b===d&&(n=w+d+v,v<q&&(r=B+d+1)),v===q&&(n=w+d+q+(d-b),0<b&&(r=B-1)),0===b&&0<v&&(n=w+2*d+q+(q-v),r=B-(d+1)),-1<n&&(m=0===b&&1===v?w:n+1,-1<r&&(f=B,h?(a[k+0]=
f,a[k+1]=n,a[k+2]=n,a[k+3]=m,a[k+4]=m,a[k+5]=f,a[k+6]=m,a[k+7]=r,a[k+8]=r,a[k+9]=f,a[k+10]=f,a[k+11]=m,k+=12):(a[k+0]=f,a[k+1]=n,a[k+2]=m,a[k+3]=m,a[k+4]=r,a[k+5]=f,k+=6))),++B,b<d&&v<q&&(f=v*(d+1)+b,n=f+1,m=n+(d+1),r=m-1,h?(a[c+0]=f,a[c+1]=n,a[c+2]=n,a[c+3]=m,a[c+4]=m,a[c+5]=f,a[c+6]=m,a[c+7]=r,a[c+8]=r,a[c+9]=f,a[c+10]=f,a[c+11]=m,c+=12):(a[c+0]=f,a[c+1]=n,a[c+2]=m,a[c+3]=m,a[c+4]=r,a[c+5]=f,c+=6));k-=x}d={values:a,numSurfaceIndices:z,numSkirtIndices:u};J[p]=d}e.indices=d.values;e.numSurfaceIndices=
d.numSurfaceIndices;e.numSkirtIndices=d.numSkirtIndices;e.numWithoutSkirtIndices=e.numSurfaceIndices+(g?6*(l-1)*(h?2:1):0)}function K(e,l,g,h){e<h[0]&&(h[0]=e);e>h[3]&&(h[3]=e);l<h[1]&&(h[1]=l);l>h[4]&&(h[4]=l);g<h[2]&&(h[2]=g);g>h[5]&&(h[5]=g)}function S(e,l,g,h,t){e*=N.earthRadius;for(var p=0;p<=l;p++)g[5*h]=0,g[5*h+1]=0,g[5*h+2]=e,K(0,0,e,t),h++}Object.defineProperty(C,"__esModule",{value:!0});var Q=new Y.ArrayPool(Float32Array);C.releaseGeometry=function(e){Q.put(e.vertexAttributes);e.vertexAttributes=
null;e.indices=null};C.elevationSampler=P;C.createSphericalGlobeTile=function(e,l,g,h,t,p,d,q,w){var a=g[0],z=g[1],u=g[2],A=g[3],B=Math.max(.9,1-.5*(u-a));g=e-1;var c=e-1,k=e*e,f=Q.get(5*(k+(2*g+2*c))),n=w.boundingBox;M.set(n,M.NEGATIVE_INFINITY);var m=l[2]-l[0],r=l[3]-l[1],x=u-a,u=p[0],v=p[1];p=p[2];for(var b=0;b<=g;b++){var E=b/g,L=a+E*x;T[b]=Math.sin(L);U[b]=Math.cos(L);V[b]=E;W[b]=l[0]+E*m}for(m=a=0;m<=c;m++){var x=m/c,b=O.lerp(z,A,x),L=Math.cos(b),D=Math.sin(b),C=void 0;h?(C=N.earthRadius/2*
Math.log((1+D)/(1-D)),x=(C-l[1])/r):C=180*b/Math.PI;for(b=0;b<=g;b++){var E=V[b],H=T[b],I=U[b],F=N.earthRadius;t&&(F+=P(W[b],C,t)||0);var I=I*L*F,H=H*L*F,F=D*F,G=I-u,J=H-v,X=F-p;K(G,J,X,n);var y=5*a;f[y+0]=G;f[y+1]=J;f[y+2]=X;f[y+3]=E;f[y+4]=x;y=-1;0===m&&(y=k+b);b===g&&(y=k+g+m);m===c&&(y=k+g+c+(g-b));0===b&&0<m&&(y=k+2*g+c+(c-m));-1<y&&(I=I*B-u,H=H*B-v,F=F*B-p,K(I,H,F,n),y*=5,f[y+0]=I,f[y+1]=H,f[y+2]=F,f[y+3]=E,f[y+4]=x);++a}}h&&(l=!!(d&2),d&1&&S(-1,g,f,k,n),l&&S(1,g,f,k+g+c,n));w.numVertsPerRow=
e;w.vertexAttributes=f;R(w,e,h?d:0,q)};C.createPlanarGlobeTile=function(e,l,g,h,t,p,d){var q=l[0],w=l[1],a=l[2]-q;l=l[3]-w;var z=.1*a,u=e-1,A=e-1,B=e*e,c=Q.get(5*(B+(2*u+2*A))),k=d.boundingBox;M.set(k,M.NEGATIVE_INFINITY);for(var f=0,n=0;n<=A;n++){var m=n/A,r=w+m*l;p&&(r<p[1]?(r=p[1],m=(r-w)/l):r>p[3]&&(r=p[3],m=(r-w)/l));for(var x=0;x<=u;x++){var v=x/u,b=q+v*a;p&&(b<p[0]?(b=p[0],v=(b-q)/a):b>p[2]&&(b=p[2],v=(b-q)/a));var E=g?P(b,r,g)||0:0,b=b-h[0],C=r-h[1],E=E-h[2];K(b,C,E,k);c[5*f]=b;c[5*f+1]=C;
c[5*f+2]=E;c[5*f+3]=v;c[5*f+4]=m;var D=-1;0===n&&(D=B+x);x===u&&(D=B+u+n);n===A&&(D=B+u+A+(u-x));0===x&&0<n&&(D=B+2*u+A+(A-n));-1<D&&(c[5*D]=b,c[5*D+1]=C,c[5*D+2]=E-z,c[5*D+3]=v,c[5*D+4]=m,K(b,C,E-z,k));++f}}d.numVertsPerRow=e;d.vertexAttributes=c;R(d,e,0,t)};var J=[],T=Array(G.MAX_TILE_TESSELATION+1),U=Array(G.MAX_TILE_TESSELATION+1),V=Array(G.MAX_TILE_TESSELATION+1),W=Array(G.MAX_TILE_TESSELATION+1)});