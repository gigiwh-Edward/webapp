// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../../../support/aaBoundingBox ../../lib/ComponentUtils ../../lib/gl-matrix ../../lib/screenSizePerspectiveUtils ../../lib/Util ../../../../webgl/Util".split(" "),function(da,g,C,L,r,M,H,Z){function A(a,b,d,c,e,f){if(void 0===e||3!==f)for(e=0;e<f;++e)d[c+e]=a[b+e];else{var E=a[b],l=a[b+1];a=a[b+2];d[c]=e[0]*E+e[4]*l+e[8]*a+e[12];d[c+1]=e[1]*E+e[5]*l+e[9]*a+e[13];d[c+2]=e[2]*E+e[6]*l+e[10]*a+e[14]}return f}function N(a,b,d,c,e,f){for(var E=a.length,l=0;l<E;++l){for(var p=d*
a[l],g=0;g<d;++g)c[e+g]=b[p+g];e+=f}}function O(a,b,d,c,e,f){c=new Uint8Array(c);e*=4;f*=4;var g=a.length;if(4===d)for(d=0;d<g;++d){var l=4*a[d];c[e]=b[l];c[e+1]=b[l+1];c[e+2]=b[l+2];c[e+3]=b[l+3];e+=f}else if(3===d)for(d=0;d<g;++d)l=3*a[d],c[e]=b[l],c[e+1]=b[l+1],c[e+2]=b[l+2],c[e+3]=255,e+=f}function P(a,b,d,c,e){var f=Q(b,d,R);C.setMin(B,a.getBBMin());C.setMax(B,a.getBBMax());if(K(B,b,f,c)){var f=a.getPrimitiveIndices(),g=a.getIndices(),l=a.getPosition(),p=f?f.length:g.length/3;if(1E4<p&&(a=a.getChildren(),
void 0!==a)){for(f=0;8>f;++f)void 0!==a[f]&&P(a[f],b,d,c,e);return}S(b,d,0,p,g,l,f,e)}}function S(a,b,d,c,e,f,g,l){var p=f.data,E=f.offsetIdx;f=f.strideIdx;var m=a[0],k=a[1];a=a[2];var h=b[0]-m,v=b[1]-k;for(b=b[2]-a;d<c;d++){var n=g?g[d]:d,t=E+f*e[3*n],x=E+f*e[3*n+1],q=E+f*e[3*n+2],u=p[t],w=p[t+1],y=p[t+2],t=p[x]-u,A=p[x+1]-w,x=p[x+2]-y,B=p[q]-u,C=p[q+1]-w,q=p[q+2]-y,z=v*q-C*b,F=b*B-q*h,G=h*C-B*v,D=t*z+A*F+x*G,u=m-u,I=k-w,J=a-y,w=I*x-A*J,y=J*t-x*u,H=u*A-t*I;if(D>T){z=u*z+I*F+J*G;if(0>z||z>D)continue;
F=h*w+v*y+b*H;if(0>F||z+F>D)continue}else if(D<-T){z=u*z+I*F+J*G;if(0<z||z<D)continue;F=h*w+v*y+b*H;if(0<F||z+F<D)continue}else continue;D=(B*w+C*y+q*H)/D;0<=D&&(z=aa,r.vec3d.set3(t,A,x,U),r.vec3d.set3(B,C,q,V),t=r.vec3d.normalize(r.vec3d.cross(U,V,z)),l(D,t,n))}}function Q(a,b,d){return r.vec3d.set3(1/(b[0]-a[0]),1/(b[1]-a[1]),1/(b[2]-a[2]),d)}function K(a,b,d,c){var e=(a[0]-c-b[0])*d[0],f=(a[3]+c-b[0])*d[0],g=Math.min(e,f),e=Math.max(e,f),f=(a[1]-c-b[1])*d[1],l=(a[4]+c-b[1])*d[1],g=Math.max(g,Math.min(f,
l)),e=Math.min(e,Math.max(f,l));if(g>e)return!1;f=(a[2]-c-b[2])*d[2];a=(a[5]+c-b[2])*d[2];g=Math.max(g,Math.min(f,a));e=Math.min(e,Math.max(f,a));return g<=e}function W(a,b){b=b?W(b):{};for(var d in a){var c=a[d];c&&c.forEach&&(c=ba(c));null==c&&d in b||(b[d]=c)}return b}function ba(a){var b=[];a.forEach(function(a){return b.push(a)});return b}Object.defineProperty(g,"__esModule",{value:!0});var X=r.mat4d.create(),B=C.create(),G=H.VertexAttrConstants;g.IDENTITY=r.mat4d.identity();g.fill=A;g.fillColor=
function(a,b,d,c,e){for(var f=0;f<e;++f)d[c+f]=a[b+f];return e};g.fillInterleaved=function(a,b,d,c,e,f,g,l){for(var p=Z.getStride(e)/4,r=0;r<e.length;r++){var m=e[r],k=g+m.offset/4,m=m.name,h=a.vertexAttr[m];if(null!=h&&(null==l||null!=l[m]))switch(m){case "uv0":N(a.indices[m],h.data,h.size,f,k,p);break;case "region":for(var m=a.indices[m],v=h.data,n=h.size,h=p,t=new Uint16Array(f.buffer),k=2*k,h=2*h,x=m.length,q=0;q<x;++q){for(var u=n*m[q],w=0;w<n;++w)t[k+w]=v[u+w];k+=h}break;case "color":if(c&&
c.color)if(m=a.indices[m],v=h.data,n=c.color,q=h.size,h=p,t=new Uint8Array(f.buffer),k*=4,h*=4,x=m.length,4===q)for(q=0;q<x;++q)u=4*m[q],t[k]=v[u]*n[0],t[k+1]=v[u+1]*n[1],t[k+2]=v[u+2]*n[2],t[k+3]=v[u+3]*n[3],k+=h;else{if(3===q)for(w=255*n[3],q=0;q<x;++q)u=3*m[q],t[k]=v[u]*n[0],t[k+1]=v[u+1]*n[1],t[k+2]=v[u+2]*n[2],t[k+3]=w,k+=h}else O(a.indices[m],h.data,h.size,f.buffer,k,p);break;case "symbolColor":O(a.indices[m],h.data,h.size,f.buffer,k,p);break;default:if(n=m===G.POSITION?b:m===G.NORMAL?d:void 0,
void 0!==n&&3===h.size)for(m=a.indices[m],v=h.data,h=f,t=p,x=m.length,q=0;q<x;++q){var y=3*m[q],u=v[y],w=v[y+1],y=v[y+2];h[k]=n[0]*u+n[4]*w+n[8]*y+n[12];h[k+1]=n[1]*u+n[5]*w+n[9]*y+n[13];h[k+2]=n[2]*u+n[6]*w+n[10]*y+n[14];k+=t}else N(a.indices[m],h.data,h.size,f,k,p)}}};g.triangleVertexArrayToWireframeLines=function(a,b,d,c){for(d=Math.floor(d/3)-1;0<=d;d--){var e=b+3*d*c,f=b+6*d*c+5*c;A(a,e,a,f,null,c);f-=c;A(a,e+c,a,f,null,c);f-=c;A(a,e+c,a,f,null,c);f-=c;A(a,e+2*c,a,f,null,c);f-=c;A(a,e+2*c,a,
f,null,c);f-=c;A(a,e,a,f,null,c)}};g.intersectTriangleGeometry=function(a,b,d,c,e,f,g){H.assert("triangle"===a.data.primitiveType);b=b.componentVisibilities;c=c.tolerance;var l=a.getBoundingInfo();if(1<a.getComponentCount()){if(d=Q(e,f,R),C.setMin(B,l.getBBMin()),C.setMax(B,l.getBBMax()),K(B,e,d,c))for(var p=a.data,l=a.getComponentCount(),r=p.getIndices(G.POSITION),m=p.getAttribute(G.POSITION),p=p.componentOffsets,k=0;k<l;k++)if(L.getVisibility(b,k)){var h=a.getComponentAABB(k,B);K(h,e,d,c)&&S(e,
f,p[k]/3,p[k+1]/3,r,m,void 0,g)}}else L.getVisibility(b,0)&&P(l,e,f,c,g)};var R=r.vec3d.create(),T=Math.pow(2,-52),aa=r.vec3d.create(),U=r.vec3d.create(),V=r.vec3d.create();g.transformToWorld=function(a,b,d){return r.vec4d.set4(a[0]-b[0],a[1]-b[1],a[2]-b[2],1,d)};g.transformToView=function(a,b,d,c){r.mat4d.translate(d,b,X);d=X;return r.mat4d.multiplyVec4(d,a,c)};g.transformToProjection=function(a,b,d,c){c[0]=a[0]+d[0];c[1]=a[1]+d[1];c[2]=a[2]+d[2];c[3]=a[3];return r.mat4d.multiplyVec4(b,c)};g.transformToNDC=
function(a,b){return r.vec4d.scale(a,1/Math.abs(a[3]),b)};g.applyScreenSizePerspectiveScale=function(a,b,d,c,e){return M.scale(a,c,d,e)};g.verticalOffsetAtDistance=function(a,b,d,c,e){var f=d.screenLength||0;e&&(f=M.scale(f,c,b,e));return H.clamp(f*Math.tan(.5*a.fovY)/(.5*a.fullHeight)*b,d.minWorldLength||0,null!=d.maxWorldLength?d.maxWorldLength:Infinity)};g.aquireIfNotUndefined=function(a,b,d){if(void 0!==a)return b.aquire(a,d)};g.releaseIfNotUndefined=function(a,b){void 0!==a&&b.release(a)};var Y=
r.mat4.create();g.bindView=function(a,b,d){r.mat4d.translate(b,a,Y);d.setUniform3fv("localOrigin",a);d.setUniformMatrix4fv("view",Y)};g.bindCamPos=function(a,b,d){d.setUniform3f("camPos",b[3]-a[0],b[7]-a[1],b[11]-a[2])};g.bindVerticalOffset=function(a,b,d){if(a){var c=b.fovY;b=b.viewport[3];var e=void 0;void 0===e&&(e=ca);e.screenLength=a.screenLength;e.perDistance=Math.tan(.5*c)/(.5*b);e.minWorldLength=a.minWorldLength;e.maxWorldLength=a.maxWorldLength;a=e;d.setUniform4f("verticalOffset",a.screenLength,
a.perDistance,a.minWorldLength,a.maxWorldLength)}};g.bindScreenSizePerspective=function(a,b,d){void 0===d&&(d="screenSizePerspectiveAlignment");if(a){var c=a.parameters;b.setUniform4f(d,c.divisor,c.offset,c.minPixelSize,a.paddingPixelsOverride)}};g.copyParameters=W;g.updateParameters=function(a,b){var d=!1,c;for(c in b){var e=b[c];void 0!==e&&(d=!0,Array.isArray(e)?a[c]=e.slice():a[c]=e)}return d};g.colorMixModes={multiply:1,ignore:2,replace:3,tint:4};var ca={screenLength:0,perDistance:0,minWorldLength:0,
maxWorldLength:0}});