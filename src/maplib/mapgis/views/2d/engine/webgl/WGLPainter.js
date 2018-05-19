// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/assignHelper dojo/has ../../../../core/libs/gl-matrix/mat4 ./enums ./GeometryUtils ./MaterialManager ./Utils ./brushes/WGLBrushInfo ./brushes/WGLBrushStencil ./brushes/WGLGeometryBrushFill ./brushes/WGLGeometryBrushLine ./brushes/WGLGeometryBrushMarker ./brushes/WGLGeometryBrushText ./painter/WGLHighlightPainter ./../../../webgl/FramebufferObject".split(" "),function(h,n,t,u,g,e,v,w,p,x,y,z,A,B,C,D,E){Object.defineProperty(n,"__esModule",{value:!0});
h=function(){function c(){this._initialized=!1}c.prototype.registerPass=function(a,d){this._initialize();for(var b=0;b<d.length;b++)this._passMap.set(d[b],a);return this};c.prototype.getPaintPassTs=function(a){this._initialize();return this._passMap.has(a)?[this._passMap.get(a)]:[]};c.prototype._initialize=function(){this._initialized||(this._passMap=new Map,this._initialized=!0)};return c}();n.WGLPainterOptions=h;var q=new Uint8Array(4*p.C_HITTEST_SEARCH_SIZE*p.C_HITTEST_SEARCH_SIZE),F=new Uint32Array(q.buffer);
h=function(){function c(){this._hlPainter=new D;this._extrudeMatrix=new Float32Array(16);this._extrudeNoRotationMatrix=new Float32Array(16);this._extrudeRotateVector=new Float32Array([0,0,1]);this._extrudeScaleVector=new Float32Array([1,1,1]);this._state={rotation:0,width:0,height:0};this._cachedRotation=this._cachedHeight=this._cachedWidth=0;this.materialManager=new w}c.allGeometryPhases=function(){return[e.WGLDrawPhase.FILL,e.WGLDrawPhase.LINE,e.WGLDrawPhase.MARKER,e.WGLDrawPhase.TEXT]};Object.defineProperty(c.prototype,
"extrudeMatrix",{get:function(){return this._extrudeMatrix},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"extrudeNoRotationMatrix",{get:function(){return this._extrudeNoRotationMatrix},enumerable:!0,configurable:!0});c.prototype.initialize=function(a){this.materialManager.initialize(a)};c.prototype.update=function(a,d){this._state=a;if(this._state.width!==this._cachedWidth||this._state.height!==this._cachedHeight||this._state.rotation!==this._cachedRotation)this._extrudeScaleVector[0]=
2/a.width,this._extrudeScaleVector[1]=-2/a.height,g.identity(this._extrudeMatrix),g.rotate(this._extrudeMatrix,this._extrudeMatrix,-a.rotation*v.C_DEG_TO_RAD,this._extrudeRotateVector),g.scale(this._extrudeMatrix,this._extrudeMatrix,this._extrudeScaleVector),g.transpose(this._extrudeMatrix,this._extrudeMatrix),g.identity(this._extrudeNoRotationMatrix),g.scale(this._extrudeNoRotationMatrix,this._extrudeNoRotationMatrix,this._extrudeScaleVector),g.transpose(this._extrudeNoRotationMatrix,this._extrudeNoRotationMatrix),
this._cachedWidth=this._state.width,this._cachedHeight=this._state.height,this._cachedRotation=this._state.rotation};c.prototype.getBrushes=function(a){if(!this._brushes){var d=new z.default,b=new B.default,c=new A.default,k=new C.default,f=new x.default,m=new y.default;this._brushes=new Map;this._brushes.set(e.WGLDrawPhase.FILL,[d]);this._brushes.set(e.WGLDrawPhase.MARKER,[b]);this._brushes.set(e.WGLDrawPhase.LINE,[c]);this._brushes.set(e.WGLDrawPhase.TEXT,[k]);this._brushes.set(e.WGLDrawPhase.HITTEST,
[d,b,c,k]);this._brushes.set(e.WGLDrawPhase.HIGHLIGHT,[d,b,c,k]);this._brushes.set(e.WGLDrawPhase.CLIP,[m]);this._brushes.set(e.WGLDrawPhase.DEBUG,[f])}if(!this._brushes.has(a))throw Error("WGLPainter: Tried to get brush for unknown phase: "+a);return this._brushes.get(a)};c.prototype.bindTextureManager=function(a){this.textureManager=a};c.prototype.draw=function(a,d,b,c){this._drawClippingRects(a,d);var e=a.context;e.setBlendingEnabled(!0);e.setStencilWriteMask(0);e.setBlendFunctionSeparate(1,771,
1,771);this._drawPhases(a,d,b,c);this._debugTiles(a,d)};c.prototype.setHighlightOptions=function(a){this._hlPainter.setHighlightOptions(a)};c.prototype.highlight=function(a,d){var b=a.context,c=b.getViewport();this._hlPainter.setup(b,c.width,c.height);this._hlPainter.startMaskDraw(b);this._drawClippingRects(a,d);b.setBlendingEnabled(!0);b.setStencilWriteMask(0);b.setBlendFunctionSeparate(1,771,1,771);this._drawPhases(a,d,[e.WGLDrawPhase.HIGHLIGHT]);this._hlPainter.draw(b)};c.prototype.hitTest=function(a,
d){var b=p.C_HITTEST_SEARCH_SIZE,c=[0,0],k=[0,0],f=a.state;f.toMap(c,[0,0]);f.toMap(k,[b,b]);if(0===d.filter(function(a){return!(c[0]>a.bounds[2]||k[0]<a.bounds[0]||c[1]<a.bounds[1]||k[1]>a.bounds[3])}).length)return[];f=a.context;this._hittestFBO||(this._hittestFBO=E.create(f,{colorTarget:0,depthStencilTarget:3,width:b,height:b}));var m=f.getViewport(),g=f.getBoundFramebufferObject();f.bindFramebuffer(this._hittestFBO);f.setViewport(0,0,b,b);this._drawClippingRects(a,d);var l=f.gl;f.setClearColor(1,
1,1,1);f.clear(l.COLOR_BUFFER_BIT);f.setBlendingEnabled(!1);f.setStencilWriteMask(0);this._drawPhases(a,d,[e.WGLDrawPhase.HITTEST]);f.setBlendingEnabled(!0);this._hittestFBO.readPixels(0,0,b,b,6408,5121,q);a=b*b;d=new Set;for(b=0;b<a;b++)l=F[b],4294967295!==l&&d.add(l);f.bindFramebuffer(g);f.setViewport(m.x,m.y,m.width,m.height);var r=[];d.forEach(function(a){r.push(a)});return r};c.prototype._getPaintPass=function(a){this._passes||(this._passes=new Map);if(!this._passes.has(a))try{this._passes.set(a,
new a)}catch(d){throw Error("Tried to instantiate WGLPaintPass with unknown constructor: "+a+",\n"+d);}return this._passes.get(a)};c.prototype._getPaintPasses=function(a,c){var b=this;return c.getPaintPassTs(a).map(function(a){return b._getPaintPass(a)})};c.prototype._drawPhases=function(a,c,b,e){a.context.setStencilTestEnabled(!0);for(var d=0;d<b.length;d++){var f=b[d],g=e?this._getPaintPasses(f,e):[],f=t({},a,{drawPhase:f});g.forEach(function(b){return b.preRender(a,a.rendererInfo)});for(var h=
0,l=c;h<l.length;h++)l[h].doRender(f);g.reverse().forEach(function(b){return b.postRender(a,a.rendererInfo)})}a.context.setStencilTestEnabled(!1)};c.prototype._debugTiles=function(a,c){u("mapgis-feature-tiles-debug")&&this._drawPhases(a,c,[e.WGLDrawPhase.DEBUG])};c.prototype._drawClippingRects=function(a,c){if(0!==c.length){var b=a.context;b.setDepthWriteEnabled(!1);b.setDepthTestEnabled(!1);b.setStencilTestEnabled(!0);b.setBlendingEnabled(!1);b.setColorMask(!1,!1,!1,!1);b.setStencilOp(7680,7680,7681);
b.setClearStencil(0);b.clear(b.gl.STENCIL_BUFFER_BIT);b.setStencilWriteMask(255);for(var b=0,d=c.length;b<c.length;b++,d--)c[b].stencilRef=d;this._drawPhases(a,c,[e.WGLDrawPhase.CLIP]);a.context.setColorMask(!0,!0,!0,!0)}};return c}();n.default=h});