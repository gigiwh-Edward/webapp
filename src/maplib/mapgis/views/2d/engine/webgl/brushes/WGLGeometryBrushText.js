// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/extendsHelper ../enums ../Utils ./WGLGeometryBrush ../../../../webgl/VertexArrayObject".split(" "),function(n,p,t,u,q,v,r){Object.defineProperty(p,"__esModule",{value:!0});n=function(m){function h(){var a=null!==m&&m.apply(this,arguments)||this;a._attributeLocations={a_pos:0,a_id:1,a_color:2,a_vertexOffset:3,a_texFontSize:4,a_visible:5};a._attributeLocationsVV={a_pos:0,a_id:1,a_color:2,a_vertexOffset:3,a_texFontSize:4,a_vv:5,a_visible:6};a._vertexAttributeLayout=
{geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:20,normalized:!1,divisor:0},{name:"a_id",count:4,type:5121,offset:4,stride:20,normalized:!0,divisor:0},{name:"a_color",count:4,type:5121,offset:8,stride:20,normalized:!0,divisor:0},{name:"a_vertexOffset",count:2,type:5122,offset:12,stride:20,normalized:!1,divisor:0},{name:"a_texFontSize",count:4,type:5120,offset:16,stride:20,normalized:!1,divisor:0}],visibility:[{name:"a_visible",count:1,type:5121,offset:0,stride:1,normalized:!0,divisor:0}]};
a._vertexAttributeLayoutVV={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:36,normalized:!1,divisor:0},{name:"a_id",count:4,type:5121,offset:4,stride:36,normalized:!0,divisor:0},{name:"a_color",count:4,type:5121,offset:8,stride:36,normalized:!0,divisor:0},{name:"a_vertexOffset",count:2,type:5122,offset:12,stride:36,normalized:!1,divisor:0},{name:"a_texFontSize",count:4,type:5120,offset:16,stride:36,normalized:!1,divisor:0},{name:"a_vv",count:4,type:5126,offset:20,stride:36,normalized:!1,
divisor:0}],visibility:[{name:"a_visible",count:1,type:5121,offset:0,stride:1,normalized:!0,divisor:0}]};a._glyphsTextureSize=new Float32Array(2);return a}t(h,m);h.prototype.getGeometryType=function(){return u.WGLGeometryType.TEXT};h.prototype.drawGeometry=function(a,d,k,e){e=a.context;var g=a.painter,b=a.rendererInfo,f=k.materialInfo,h=k.indexCount;k=k.indexFrom;var c=f.materialKeyInfo,l=c.vvSizeMinMaxValue||c.vvSizeScaleStops||c.vvSizeFieldStops||c.vvSizeUnitValue||c.vvColor||c.vvRotation||c.vvOpacity;
if(a=g.materialManager.getProgram(f.materialKey,a.drawPhase,l?this._attributeLocationsVV:this._attributeLocations))e.bindProgram(a),l=this._getVAO(e,d,l),e.bindVAO(l),f=f.texBindingInfo[0],g.textureManager.bindGlyphsPage(e,f.pageId,f.unit),a.setUniform1i(f.semantic,f.unit),f=g.textureManager.glyphs,this._glyphsTextureSize[0]=f.width/4,this._glyphsTextureSize[1]=f.height/4,g=b.vvMaterialParameters.vvRotationEnabled&&"geographic"===b.vvMaterialParameters.vvRotationType?g.extrudeMatrix:g.extrudeNoRotationMatrix,
a.setUniformMatrix4fv("u_transformMatrix",d.tileTransform.transform),a.setUniformMatrix4fv("u_extrudeMatrix",g),a.setUniform2fv("u_normalized_origin",d.tileTransform.displayCoord),a.setUniform2fv("u_mosaicSize",this._glyphsTextureSize),a.setUniform1f("u_pixelRatio",1),a.setUniform1f("u_opacity",1),c.vvSizeMinMaxValue&&a.setUniform4fv("u_vvSizeMinMaxValue",b.vvSizeMinMaxValue),c.vvSizeScaleStops&&a.setUniform1f("u_vvSizeScaleStopsValue",b.vvSizeScaleStopsValue),c.vvSizeFieldStops&&(a.setUniform1fv("u_vvSizeFieldStopsValues",
b.vvSizeFieldStopsValues),a.setUniform1fv("u_vvSizeFieldStopsSizes",b.vvSizeFieldStopsSizes)),c.vvSizeUnitValue&&a.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio",b.vvSizeUnitValueToPixelsRatio),c.vvColor&&(a.setUniform1fv("u_vvColorValues",b.vvColorValues),a.setUniform4fv("u_vvColors",b.vvColors)),c.vvOpacity&&(a.setUniform1fv("u_vvOpacityValues",b.vvOpacityValues),a.setUniform1fv("u_vvOpacities",b.vvOpacities)),c.vvRotation&&a.setUniform1f("u_vvRotationType","geographic"===b.vvMaterialParameters.vvRotationType?
0:1),e.drawElements(4,h,5125,4*k),e.bindVAO(null)};h.prototype._getVAO=function(a,d,h){if(d.textGeometry.vao)return d.textGeometry.vao;var e=d.textGeometry.vertexBufferMap[q.C_VBO_GEOMETRY],g=d.textGeometry.vertexBufferMap[q.C_VBO_VISIBILITY],b=d.textGeometry.indexBuffer;if(!e||!b)return null;d.textGeometry.vao=h?new r(a,this._attributeLocationsVV,this._vertexAttributeLayoutVV,{geometry:e,visibility:g},b):new r(a,this._attributeLocations,this._vertexAttributeLayout,{geometry:e,visibility:g},b);return d.textGeometry.vao};
return h}(v.default);p.default=n});