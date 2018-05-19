// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/Logger","./Util","../../../webgl/Texture"],function(q,r,l,h,k){var m=l.getLogger("mapgis.views.3d.webgl-engine.lib.GLTextureRep"),n=function(){function b(a){this._glTexture=null;this._refCount=0;this._glTexture=a}b.prototype.incRefCnt=function(){++this._refCount};b.prototype.decRefCnt=function(){--this._refCount;h.assert(0<=this._refCount)};b.prototype.getRefCnt=function(){return this._refCount};b.prototype.setGLTexture=function(a){this._glTexture=a};b.prototype.getGLTexture=
function(){return this._glTexture};return b}();return function(){function b(a,c,b,g){this.NUM_PARALLEL=8;this.textures=a;this._programRepository=c;this.getViewportToRestore=b;this._rctx=g;this.NUM_PARALLEL=8;this.id2textureRef={};this.loading={};this._queue=[];this.listeners=[];this.maxMaxAnisotropy=(this.afExt=g.capabilities.textureFilterAnisotropic)?g.parameters.maxMaxAnisotropy:1;this.maxAnisotropy=Math.min(8,this.maxMaxAnisotropy);this._needsRender=!0;this._fallbackTextureData=new Uint8Array(256);
this._fallbackTextureTransparentData=new Uint8Array(256);for(a=0;a<this._fallbackTextureData.length;++a)this._fallbackTextureData[a]=255,this._fallbackTextureTransparentData[a]=0!==(a+1)%4?255:0;this._fallbackTextureDesc={target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,width:8,height:8,maxAnisotropy:8}}b.prototype.resetNeedsRender=function(){this._needsRender=!1};b.prototype.needsRender=function(){return this._needsRender};b.prototype.aquire=function(a,c,b){var g=this,d=this.id2textureRef[a];
if(null==d){var e=this.textures[a];h.assert(void 0!==e);e.setUnloadFunc(this._unload.bind(this));c=!0===c;var f=this._createGLTextureDescription(e),d=new n(null);h.assert(null==this.id2textureRef[a]);this.id2textureRef[a]=d;if(e.initializeThroughRender)a=e.initializeThroughRender(this._rctx,f),d.setGLTexture(a),b&&b(d);else if(e.deferredLoading())this.getLoadingCount()<this.NUM_PARALLEL?this._loadImage(a,f,b):this._queue.push([a,f,b]);else try{e.initializeThroughUpload(this._rctx,f,this._programRepository,
this.getViewportToRestore(),function(a){d.setGLTexture(a);g._needsRender=!0;b&&b(d)})}catch(p){m.error("#aquire","Error loading texture: "+p.toString())}null==d.getGLTexture()&&d.setGLTexture(c?new k(this._rctx,this._fallbackTextureDesc,this._fallbackTextureTransparentData):new k(this._rctx,this._fallbackTextureDesc,this._fallbackTextureData));this._needsRender=!0}d.incRefCnt();return d};b.prototype.release=function(a){a=this.id2textureRef[a];void 0!==a&&(a.decRefCnt(),h.assert(0<=a.getRefCnt()))};
b.prototype.getLoadingCount=function(){return Object.keys(this.loading).length};b.prototype.getIsLoaded=function(a){if(null==this.id2textureRef[a]||void 0!==this.loading[a])return!1;for(var b=0;b<this._queue.length;++b)if(this._queue[b][0]===a)return!1;return!0};b.prototype.addTextureListener=function(a){h.assert(-1===this.listeners.indexOf(a));this.listeners.push(a)};b.prototype.removeTextureListener=function(a){a=this.listeners.indexOf(a);h.assert(-1!==a);this.listeners.splice(a,1)};b.prototype.getTexture=
function(a){return this.textures[a]};b.prototype.getMaxAnisotropy=function(){return this.maxAnisotropy};b.prototype._unload=function(a){var b=this.id2textureRef[a];void 0!==b&&((b=b.getGLTexture())&&b.dispose(),delete this.id2textureRef[a]);this.next(a)};b.prototype._createGLTextureDescription=function(a){return{target:3553,pixelFormat:6408,dataType:5121,maxAnisotropy:this.afExt&&a.params&&a.params.mipmap&&!a.params.disableAnisotropy?this.maxAnisotropy:void 0,wrapMode:a.params&&a.params.wrapClamp?
33071:void 0}};b.prototype.next=function(a){if(a in this.loading){delete this.loading[a];var b=Object.keys(this.id2textureRef),f=Object.keys(this.loading);this.listeners.forEach(function(c){c(a,b,f)});this.processQueue()}};b.prototype._loadImage=function(a,b,f){var c=this;h.assert(null==this.loading[a]);this.loading[a]=!0;var d=this.textures[a];h.assert(void 0!==d);setTimeout(function(){var e=c.id2textureRef[a];e&&e.getRefCnt()&&d.initializeThroughUpload(c._rctx,b,c._programRepository,c.getViewportToRestore(),
function(b){c.next(a);c._needsRender=!0;e&&e.getRefCnt()&&(e.setGLTexture(b),f&&f(e))})},0)};b.prototype.processQueue=function(){for(var a=[],b=0;b<this._queue.length;++b){var f=this._queue[b][0],g=this.id2textureRef[f];void 0!==g&&(0===g.getRefCnt()?(g.getGLTexture().dispose(),delete this.id2textureRef[f]):a.push(this._queue[b]))}this._queue=a;a=Math.min(this.NUM_PARALLEL-Object.keys(this.loading).length,this._queue.length);for(b=0;b<a;++b)this._loadImage(this._queue[b][0],this._queue[b][1],this._queue[b][2]);
this._queue.splice(0,a)};return b}()});