// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define(["require","exports","../webgl-engine/lib/Camera","../webgl-engine/lib/gl-matrix"],function(f,g,d,e){var b=e.vec3d;return function(){function c(a){this.view=a;this._renderTargetHelper=null;this.camera=new d;this.sunLight={direction:b.create(),diffuse:{color:b.create(),intensity:1},ambient:{color:b.create(),intensity:1}}}c.prototype.resetWebGLState=function(){null!=this.rctx&&(this.rctx.enforceState(),this._renderTargetHelper&&this._renderTargetHelper.bindFramebuffer())};c.prototype.bindRenderTarget=
function(){if(this._renderTargetHelper){var a=this._renderTargetHelper.getFramebuffer();a.initialize();this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,a.glName)}};return c}()});