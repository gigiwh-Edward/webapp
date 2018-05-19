// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/extendsHelper ../../../camera/constraintUtils ../../../input/util ../../../lib/glMatrix ../InteractiveController ../momentum/PanPlanarMomentumController ../momentum/PanSphericalMomentumController ../momentum/RotationMomentumController ../momentum/ZoomPlanarMomentumController ../momentum/ZoomSphericalMomentumController ../../utils/navigationUtils ../../utils/navigationUtils ../../../webgl-engine/lib/Camera ../../../../navigation/PanPlanarMomentumEstimator ../../../../navigation/PanSphericalMomentumEstimator ../../../../navigation/RotationMomentumEstimator ../../../../navigation/ZoomMomentumEstimator".split(" "),
function(h,l,n,f,m,d,p,q,r,t,u,v,e,k,w,x,y,z,A){Object.defineProperty(l,"__esModule",{value:!0});h=function(h){function g(a,c){var b=h.call(this)||this;b.view=a;b.pickingHelper=c;b.smoothRotation=new m.ExponentialFalloff(.05);b.rotationAxis=d.vec3d.create();b.panningPlane={normal:d.vec3d.create(),d:0};b.smoothScaling=new m.ExponentialFalloff(.05);b.zoomCenterScreen=d.vec2d.create();b.zoomMomentumEstimator=new A.ZoomMomentumEstimator;b.rotationMomentumEstimator=new z.RotationMomentumEstimator;b.panSphericalMomentumEstimator=
new y.PanSphericalMomentumEstimator;b.panPlanarMomentumEstimator=new x.PanPlanarMomentumEstimator;b.adjustedSphere={center:d.vec3d.create(),radius:0};b.tmp2d=d.vec2d.create();b.tmp3d=d.vec3d.create();b.beginScreenPoint=d.vec2d.create();b.beginScenePoint=d.vec3d.create();b.screenPickPoint=d.vec2d.create();b.panMode=k.PanMode.Horizontal;b.tmpInteractionDirection=d.vec3d.create();b.constraintOptions={selection:15,interactionType:0,interactionFactor:0,interactionStartCamera:new w,interactionDirection:null};
return b}n(g,h);g.prototype.begin=function(a){if(this.active){this.beginRadius=a.radius;this.pointerCount=a.pointers.size;this.beginAngle=a.angle;this.smoothRotation.reset();e.navPointToScreenPoint(this.currentCamera,a.center,this.screenPickPoint);d.vec2d.set(this.screenPickPoint,this.beginScreenPoint);var c=e.pickPointAndInitSphere(this.pickingHelper,this.beginCamera,this.screenPickPoint,!0);this.scenePickPoint=c.scenePickPoint;this.sphere=c.sphere;d.vec3d.set(this.scenePickPoint,this.beginScenePoint);
this.panMode=e.decidePanMode(this.beginCamera,this.sphere,this.scenePickPoint);if(this.panMode===k.PanMode.Vertical){d.vec3d.set(this.beginCamera.viewForward,this.panningPlane.normal);d.vec3d.normalize(this.panningPlane.normal);d.vec3d.negate(this.panningPlane.normal);e.setPlane(this.scenePickPoint,this.panningPlane.normal,this.panningPlane);c=d.vec3d.create();d.vec3d.set3(this.screenPickPoint[0],this.currentCamera.fullHeight,0,c);var b=d.vec3d.create(),f=d.vec3d.length(this.beginCamera.eye);this.adjustedSphere.radius=
f<this.sphere.radius?f-100:this.sphere.radius;e.sphereOrSilhouettePointFromScreenPoint(this.adjustedSphere,this.beginCamera,c,b);this.beginCamera.projectPoint(b,c);this.screenPickPoint[1]=Math.min(this.screenPickPoint[1],.9*c[1]);this.pickingHelper.pickPointInScreen(this.screenPickPoint,this.scenePickPoint)&&e.setPlane(this.scenePickPoint,this.panningPlane.normal,this.panningPlane);e.navPointToScreenPoint(this.currentCamera,a.center,this.tmp2d);e.intersectPlaneFromScreenPoint(this.panningPlane,this.beginCamera,
this.tmp2d,this.beginScenePoint)}this.constraintOptions.interactionStartCamera.copyFrom(this.beginCamera)}};g.prototype.update=function(a){if(this.active){this.currentCamera.copyFrom(this.beginCamera);var c=1<a.pointers.size;this.panMode===k.PanMode.Horizontal?(c&&this.zoomSpherical(a),this.panningSpherical(a),c&&this.rotateSpherical(a)):(c&&this.zoomPlanar(a),this.panningPlanar(a),c&&this.rotatePlanar(a));this.currentCamera.markViewDirty()}};g.prototype.end=function(a){a.pointers.size===this.pointerCount&&
this.update(a);this.finishController();if(a=this.zoomMomentumEstimator.evaluateMomentum())return this.panMode===k.PanMode.Horizontal?new v.ZoomSphericalMomentumController(this.view,a,this.zoomCenterScreen,this.beginScenePoint,this.sphere.radius):new u.ZoomPlanarMomentumController(this.view,a,this.beginScenePoint);if(a=this.rotationMomentumEstimator.evaluateMomentum())return new t.RotationMomentumController(this.view,a,this.sphere.center,this.rotationAxis);if(this.panMode===k.PanMode.Horizontal){if(a=
this.panSphericalMomentumEstimator.evaluateMomentum())return new r.PanSphericalMomentumController(this.view,a)}else if(a=this.panPlanarMomentumEstimator.evaluateMomentum())return new q.PanPlanarMomentumController(this.view,a);return null};g.prototype.zoomSpherical=function(a){var c=this.beginRadius/a.radius;this.smoothScaling.gain=.001875*Math.min(Math.max(a.radius,40),120);this.smoothScaling.update(c);e.applyZoomOnSphere(this.sphere,this.currentCamera,this.smoothScaling.value);e.navPointToScreenPoint(this.currentCamera,
a.center,this.zoomCenterScreen);this.zoomMomentumEstimator.add(this.smoothScaling.value,.001*a.timestamp);this.constraintOptions.interactionType=1;this.constraintOptions.interactionFactor=f.pixelDistanceToInteractionFactor(a.radius-this.beginRadius);f.applyAll(this.view,this.currentCamera,this.constraintOptions)};g.prototype.panningSpherical=function(a){e.navPointToScreenPoint(this.currentCamera,a.center,this.tmp2d);e.sphereOrSilhouettePointFromScreenPoint(this.sphere,this.currentCamera,this.tmp2d,
this.tmp3d);e.applyPanSpherical(this.sphere,this.currentCamera,this.beginScenePoint,this.tmp3d);this.panSphericalMomentumEstimator.add(this.tmp2d,this.tmp3d,.001*a.timestamp);this.constraintOptions.interactionType=4;this.constraintOptions.interactionFactor=f.pixelDistanceToInteractionFactor(this.screenPickPoint,this.tmp2d);f.applyAll(this.view,this.currentCamera,this.constraintOptions)};g.prototype.rotateSpherical=function(a){d.vec3d.normalize(this.scenePickPoint,this.rotationAxis);var c=this.smoothRotation.value,
b=e.normalizeRotationDelta(a.angle-c),c=c+b;this.smoothRotation.gain=.00125*Math.min(Math.max(a.radius,40),120);this.smoothRotation.update(c);b=this.smoothRotation.value-this.beginAngle;this.rotationMomentumEstimator.add(b,.001*a.timestamp);e.applyRotation(this.currentCamera,this.sphere.center,this.rotationAxis,b);this.constraintOptions.interactionType=2;this.constraintOptions.interactionFactor=f.pixelDistanceToInteractionFactor(a.radius*c);f.applyAll(this.view,this.currentCamera,this.constraintOptions)};
g.prototype.panningPlanar=function(a){e.navPointToScreenPoint(this.currentCamera,a.center,this.tmp2d);e.intersectPlaneFromScreenPoint(this.panningPlane,this.currentCamera,this.tmp2d,this.tmp3d)&&(e.applyPanPlanar(this.currentCamera,this.beginScenePoint,this.tmp3d),this.panPlanarMomentumEstimator.add(this.tmp2d,this.tmp3d,.001*a.timestamp),this.constraintOptions.interactionType=4,this.constraintOptions.interactionFactor=f.pixelDistanceToInteractionFactor(this.beginScreenPoint,this.tmp2d),this.constraintOptions.interactionDirection=
this.view.renderCoordsHelper.worldUpAtPosition(this.currentCamera.eye,this.tmpInteractionDirection),f.applyAll(this.view,this.currentCamera,this.constraintOptions),this.constraintOptions.interactionDirection=null)};g.prototype.zoomPlanar=function(a){var c=this.beginRadius/a.radius;this.smoothScaling.gain=.001875*Math.min(Math.max(a.radius,40),120);this.smoothScaling.update(c);this.zoomMomentumEstimator.add(this.smoothScaling.value,.001*a.timestamp);e.applyZoomToPoint(this.currentCamera,this.beginScenePoint,
this.smoothScaling.value,this.view.state.constraints.minimumPoiDistance);this.constraintOptions.interactionType=1;this.constraintOptions.interactionFactor=f.pixelDistanceToInteractionFactor(a.radius-this.beginRadius);f.applyAll(this.view,this.currentCamera,this.constraintOptions)};g.prototype.rotatePlanar=function(a){d.vec3d.set(this.beginScenePoint,this.rotationAxis);var c=this.smoothRotation.value,b=a.angle-c,b=e.normalizeRotationDelta(b);this.smoothRotation.gain=.00125*Math.min(Math.max(a.radius,
40),120);this.smoothRotation.update(c+b);c=this.smoothRotation.value-this.beginAngle;this.rotationMomentumEstimator.add(c,.001*a.timestamp);e.applyRotation(this.currentCamera,this.sphere.center,this.rotationAxis,c);this.constraintOptions.interactionType=2;this.constraintOptions.interactionFactor=f.pixelDistanceToInteractionFactor(a.radius*c);f.applyAll(this.view,this.currentCamera,this.constraintOptions)};return g}(p.InteractiveController);l.PinchAndPanController=h});