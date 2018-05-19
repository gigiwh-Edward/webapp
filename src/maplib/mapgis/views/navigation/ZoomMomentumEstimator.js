// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define(["require","exports","../../core/tsSupport/extendsHelper","./Momentum","./MomentumEstimator"],function(g,d,h,l,m){Object.defineProperty(d,"__esModule",{value:!0});var k=function(c){function a(b,e,a){return c.call(this,b,e,a)||this}h(a,c);a.prototype.value=function(b){b=c.prototype.value.call(this,b);return Math.exp(b)};a.prototype.valueDelta=function(b,a){var e=c.prototype.value.call(this,b);b=c.prototype.value.call(this,b+a);return Math.exp(b-e)};return a}(l.Momentum);d.ZoomMomentum=k;g=function(c){function a(b,
a,f,d){void 0===b&&(b=2.5);void 0===a&&(a=.01);void 0===f&&(f=.95);void 0===d&&(d=12);return c.call(this,b,a,f,d)||this}h(a,c);a.prototype.add=function(b,a){c.prototype.add.call(this,Math.log(b),a)};a.prototype.createMomentum=function(a,c,d){return new k(a,c,d)};return a}(m.MomentumEstimator);d.ZoomMomentumEstimator=g});