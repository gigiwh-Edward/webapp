// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define(["require","exports","./Util","../../../webgl/FramebufferObject"],function(e,f,c,d){return function(){function a(b){this._rctx=b;this.height=this.width=this.viewportToRestore=this.fbo2=this.fbo=null}a.prototype.setEnableState=function(b){b!==this.getEnableState()&&(b?this.enable():this.disable())};a.prototype.getEnableState=function(){return null!==this.fbo};a.prototype.getHighlightFBO=function(){return this.fbo};a.prototype.getBlurFBO=function(){return this.fbo2};a.prototype.enable=function(){c.assert(!this.getEnableState());
this.fbo=d.createWithAttachments(this._rctx,{target:3553,pixelFormat:6408,dataType:32819,samplingMode:9729,wrapMode:33071,width:0,height:0},{colorTarget:0,depthStencilTarget:1})};a.prototype.disable=function(){c.assert(this.getEnableState());this.fbo.dispose();this.fbo=null};a.prototype.setupFBOs=function(b){c.assert(this.getEnableState());this.viewportToRestore=b=b.fullViewport;this.width=b[2];this.height=b[3];this._rctx.setViewport(0,0,this.width,this.height)};a.prototype.prepareHighlightPass=function(){c.assert(this.getEnableState());
var b=this._rctx,a=b.gl;this.fbo.resize(this.width,this.height);b.bindFramebuffer(this.fbo);b.setClearColor(0,0,0,0);b.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT)};a.prototype.finish=function(b){var a=this._rctx;a.bindFramebuffer(b);a.setViewport(this.viewportToRestore[0],this.viewportToRestore[1],this.viewportToRestore[2],this.viewportToRestore[3])};return a}()});