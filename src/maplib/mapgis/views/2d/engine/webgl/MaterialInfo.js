// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define(["require","exports","./MaterialInfoUtils_updateMaterialVariations","./MaterialKeyInfo","./util/serializationUtils"],function(f,d,l,g,e){Object.defineProperty(d,"__esModule",{value:!0});var h=function(){function b(a,b,d){this.unit=a;this.pageId=b;this.semantic=d}b.prototype.clone=function(){return new b(this.unit,this.pageId,this.semantic)};b.prototype.serialize=function(a){a.writeInt32(this.unit);a.writeInt32(this.pageId);return a};b.deserialize=function(a){var c=a.readInt32();a=a.readInt32();
return new b(c,a,"u_texture")};return b}();d.TexBindingInfo=h;var k=function(){function b(a,b){this.name=a;this.value=b}b.prototype.clone=function(){return new b(this.name,this.value)};b.prototype.serialize=function(a){a.writeInt32(this.value);return a};b.deserialize=function(a){a=a.readInt32();return new b("u_my_param",a)};return b}();d.MaterialParam=k;f=function(){function b(){this.texBindingInfo=[];this.materialParams=[]}b.prototype.copy=function(a){this.materialParams=a.materialParams.map(function(a){return a.clone()});
this.texBindingInfo=a.texBindingInfo.map(function(a){return a.clone()});a.materialKeyInfo&&(this.materialKeyInfo=new g,this.materialKeyInfo.copy(a.materialKeyInfo));this.materialKey=a.materialKey};b.prototype.serialize=function(a){a.writeInt32(this.materialKey);e.serializeList(a,this.texBindingInfo);e.serializeList(a,this.materialParams);return a};b.deserialize=function(a){var c=new b;c.materialKey=a.readInt32();c.texBindingInfo=e.deserializeList(a,h);c.materialParams=e.deserializeList(a,k);c.materialKeyInfo=
new g;l(c.materialKeyInfo,c.materialKey);return c};return b}();d.default=f});