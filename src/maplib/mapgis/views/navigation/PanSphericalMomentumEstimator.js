// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/extendsHelper ../3d/lib/glMatrix ../../views/3d/state/utils/navigationUtils ./FilteredFiniteDifference ./FilteredValue ./Momentum".split(" "),function(g,d,k,e,l,f,m,n){Object.defineProperty(d,"__esModule",{value:!0});var h=function(b){function a(c,a,e,d,f){c=b.call(this,c,a,e)||this;c.angularVelocity=d;c.axis=f;return c}k(a,b);a.prototype.value=function(a){return b.prototype.valueFromInitialVelocity.call(this,this.angularVelocity,a)};return a}(n.Momentum);
d.PanSphericalMomentum=h;g=function(){function b(a,c,b){void 0===a&&(a=300);void 0===c&&(c=12);void 0===b&&(b=.84);this.minimumInitialVelocity=a;this.stopVelocity=c;this.friction=b;this.tmpAxis=e.vec3d.create();this.time=new f.FilteredFiniteDifference(.3);this.screen=[new f.FilteredFiniteDifference(.4),new f.FilteredFiniteDifference(.4)];this.angle=new m.FilteredValue(.6);this.axis=e.vec3d.create();this.lastScene=e.vec3d.create()}b.prototype.add=function(a,c,b){if(this.time.hasLastValue){if(.01>this.time.computeDelta(b))return;
var d=l.rotationAndAxisFromPoints(this.lastScene,c,this.tmpAxis);1E-5>e.vec3d.length2(this.tmpAxis)?d=0:e.vec3d.normalize(this.tmpAxis,this.axis);this.angle.update(d);e.vec3d.set(c,this.lastScene)}this.screen[0].update(a[0]);this.screen[1].update(a[1]);this.time.update(b)};b.prototype.reset=function(){this.screen[0].reset();this.screen[1].reset();this.angle.reset();this.time.reset()};b.prototype.evaluateMomentum=function(){if(!this.screen[0].hasFilteredDelta)return null;var a=this.screen[0].filteredDelta,
c=this.screen[1].filteredDelta,a=Math.sqrt(a*a+c*c)/this.time.filteredDelta;return Math.abs(a)<this.minimumInitialVelocity?null:this.createMomentum(a,this.stopVelocity,this.friction)};b.prototype.createMomentum=function(a,c,b){return new h(a,c,b,this.angle.filteredValue/this.time.filteredDelta,this.axis)};return b}();d.PanSphericalMomentumEstimator=g});