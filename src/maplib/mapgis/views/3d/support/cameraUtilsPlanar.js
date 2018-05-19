// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../../../geometry/Extent ../lib/glMatrix ./cameraUtilsInternal ./mathUtils ./projectionUtils".split(" "),function(t,e,p,a,q,h,k){function l(d,b,r){d=a.vec3d.create();var c=a.vec3d.create();a.mat4d.identity(g);a.mat4d.rotateZ(g,-h.deg2rad(b));a.mat4d.rotateX(g,h.deg2rad(r));a.mat4d.multiplyVec3(g,m,d);a.vec3d.scale(d,-1);a.mat4d.multiplyVec3(g,n,c);return{direction:d,up:c}}Object.defineProperty(e,"__esModule",{value:!0});var n=a.vec3d.createFrom(0,1,0),m=a.vec3d.createFrom(0,
0,1),g=a.mat4d.create(),b=a.vec3d.create(),c=a.vec3d.create();e.headingTiltToDirectionUp=l;e.directionToHeadingTilt=function(d,a,c,b){return q.directionToHeadingTilt(a,c,b,m,n)};e.eyeForCenterWithHeadingTilt=function(d,c,b,e){var f=l(d,b,e);d=a.vec3d.add(a.vec3d.scale(f.direction,-c,a.vec3d.create()),d);return{up:f.up,eye:d,heading:b,tilt:e}};e.lookAtTiltToEyeTilt=function(d,a,b){return h.rad2deg(b)};e.eyeTiltToLookAtTilt=function(d,b,a){return h.deg2rad(a)};e.toExtent=function(a,e,g,h,f){var d=a.renderSpatialReference;
a=a.map&&a.spatialReference||e.spatialReference;k.pointToVector(e,b,d);k.pointToVector(e,c,d);b[0]-=g/2;c[0]+=g/2;b[1]-=h/2;c[1]+=h/2;k.vectorToVector(b,d,b,a);k.vectorToVector(c,d,c,a);f?(f.xmin=b[0],f.ymin=b[1],f.xmax=c[0],f.ymax=c[1],f.spatialReference=a):f=new p(b[0],b[1],c[0],c[1],a);return f}});