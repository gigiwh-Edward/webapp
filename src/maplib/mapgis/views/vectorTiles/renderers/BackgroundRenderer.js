// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../../../core/libs/gl-matrix/mat3 ../../../core/libs/gl-matrix/vec4 ../MemoryBuffer ./rendererUtils ./vtShaderSnippets ../../webgl/BufferObject ../../webgl/ShaderVariations ../../webgl/VertexArrayObject".split(" "),function(y,z,r,w,h,x,k,t,u,v){return function(){function f(){this._solidAttributeLocations={a_pos:0};this._attributeLocations={a_pos:0,a_id:1};this._patternMatrix=r.create();this._color=w.create();this._rendererInitialized=this._solidrendererInitialized=!1;this._color.set([1,
0,0,1])}f.prototype.dispose=function(){this._solidVertexArrayObject&&(this._solidVertexArrayObject.dispose(),this._solidVertexArrayObject=null);this._vertexArrayObject&&(this._vertexArrayObject.dispose(),this._vertexArrayObject=null)};f.prototype.renderSolidColor=function(b,a){this._solidrendererInitialized||this._initializeSolidRenderer(b);b.bindVAO(this._solidVertexArrayObject);var d=this._shaderVariations.getProgram([!1,!1],void 0,void 0,this._solidAttributeLocations);b.bindProgram(d);d.setUniformMatrix4fv("u_transformMatrix",
a.u_matrix);d.setUniform2fv("u_normalized_origin",a.u_normalized_origin);d.setUniform1f("u_coord_range",a.u_coord_range||4096);d.setUniform1f("u_depth",a.u_depth||0);d.setUniform4fv("u_color",a.u_color||this._color);b.drawArrays(5,0,4);b.bindVAO()};f.prototype.render=function(b,a,d,c,g,e,f,h,p){this._rendererInitialized||this._initialize(b);var n=e.getPaintValue("background-color",d);p*=e.getPaintValue("background-opacity",d);var k=e.getPaintValue("background-pattern",d),q=void 0!==k,l=n[3]*p,m=q||
1>l;if(!m||0!==c)if(m||1!==c){m=3===c;c=this._shaderVariations.getProgram([q,m],void 0,void 0,this._attributeLocations);b.bindVAO(this._vertexArrayObject);b.bindProgram(c);c.setUniform1f("u_coord_range",g.coordRange);c.setUniform1f("u_depth",e.z||0);c.setUniformMatrix4fv("u_transformMatrix",g.tileTransform.transform);c.setUniform2fv("u_normalized_origin",g.tileTransform.displayCoord);if(q){e=f.getMosaicItemPosition(k,!0);if(!e)return;d=g.coordRange/512/Math.pow(2,Math.floor(d)-g.key.level)/h;r.identity(this._patternMatrix);
g=1/(e.size[1]*d);this._patternMatrix[0]=1/(e.size[0]*d);this._patternMatrix[4]=g;f.bind(b,9729,0);c.setUniformMatrix3fv("u_pattern_matrix",this._patternMatrix);c.setUniform1f("u_opacity",p);c.setUniform2f("u_pattern_tl",e.tl[0],e.tl[1]);c.setUniform2f("u_pattern_br",e.br[0],e.br[1]);c.setUniform1i("u_texture",0)}else this._color[0]=l*n[0],this._color[1]=l*n[1],this._color[2]=l*n[2],this._color[3]=l,c.setUniform4fv("u_color",this._color);m&&(a=x.int32To4Bytes(a.layerID),c.setUniform4f("u_id",a[0],
a[1],a[2],a[3]));b.drawArrays(5,0,4);b.bindVAO()}};f.prototype._initializeSolidRenderer=function(b){if(this._solidrendererInitialized)return!0;if(!this._shaderVariations){var a=new u("background",["backgroundVS","backgroundFS"],[],k,b);a.addDefine("PATTERN","PATTERN",[!0,!0],"PATTERN");a.addDefine("ID","ID",[!0,!0],"ID");this._shaderVariations=a}a=new Int8Array([0,0,1,0,0,1,1,1]);a=t.createVertex(b,35044,a);this._solidVertexArrayObject=new v(b,{a_pos:0},{geometry:[{name:"a_pos",count:2,type:5120,
offset:0,stride:2,normalized:!1,divisor:0}]},{geometry:a});return this._solidrendererInitialized=!0};f.prototype._initialize=function(b){if(this._rendererInitialized)return!0;if(!this._shaderVariations){var a=new u("background",["backgroundVS","backgroundFS"],[],k,b);a.addDefine("PATTERN","PATTERN",[!0,!0],"PATTERN");a.addDefine("ID","ID",[!0,!0],"ID");this._shaderVariations=a}a=[];a.push(h.i1616to32(0,0));a.push(h.i1616to32(1,0));a.push(h.i1616to32(0,1));a.push(h.i1616to32(1,1));a=new Uint32Array(a);
a=t.createVertex(b,35044,a);this._vertexArrayObject=new v(b,{a_pos:0},{geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:4,normalized:!1,divisor:0}]},{geometry:a});return this._rendererInitialized=!0};return f}()});