// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ./DefaultVertexAttributeLocations ./Util ../materials/internal/MaterialUtil ../../../webgl/BufferObject ../../../webgl/Util ../../../webgl/VertexArrayObject".split(" "),function(n,p,g,h,k,l,f,m){return function(){function c(a,b,c,d){this._drawMode=4;this._count=a.indices[h.VertexAttrConstants.POSITION].length;var e=new Float32Array(this._count*f.getStride(b)/4);c?c(a,void 0,void 0,null,b,e,0):k.fillInterleaved(a,void 0,void 0,null,b,e,0);this._rctx=d;this._vao=new m(d,g.Default3D,
{geometry:b},{geometry:l.createVertex(d,35044,e)})}c.prototype.enablePointRendering=function(a){this._drawMode=a?0:4};c.prototype.render=function(a){var b=this._rctx;b.bindVAO(this._vao);f.assertCompatibleVertexAttributeLocations(this._vao,a);b.drawArrays(this._drawMode,0,this._count)};return c}()});