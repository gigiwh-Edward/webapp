// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports dojo/Deferred dojo/_base/lang dojo/errors/CancelError ../../../../core/promiseUtils ../../../../core/urlUtils ./I3SBinaryReader ./I3SUtil ../../webgl-engine/lib/Util".split(" "),function(l,x,r,u,v,p,n,q,t,w){l=function(){function e(a,c,b,d,g){this.logger=c;this.defaultGeometrySchema=b;this.requiredAttributes=d;this.options=g;this.loadShared=function(a){if(null==a.sharedResource)return p.resolve({});var b=n.makeAbsolute(a.sharedResource.href,a.baseUrl);return this.loadJSON(b).then(function(a){e.fixTextureEncodings(a);
e.addAbsoluteHrefTexture(a,b);return a})};this.loader=a;this.cancelled=!1}e.prototype.cancel=function(){this.cancelled=!0};e.prototype.loadJSON=function(a){var c=this.loader.request(a,"json"),b=new r;c.then(function(a,c){b.resolve(c)},function(d){b.reject(Error("Failed to load: "+a))});return b.promise};e.prototype.loadBinary=function(a){var c=this.loader.request(a,"binary"),b=new r;c.then(function(a,c){b.resolve(c)},function(d){b.reject(Error("Failed to load: "+a))});return b.promise};e.prototype.loadImage=
function(a){var c=this.loader.request(a,"image"),b=new r;c.then(function(a,c){b.resolve(c)},function(d){b.reject(Error("Failed to load: "+a))});return b.promise};e.prototype.loadAttribute=function(a,c,b){a=n.makeAbsolute(b,a);return this.loadBinary(a).then(function(a){return q.readBinaryAttribute(c,a)})};e.prototype.loadAttributes=function(a,c,b){var d=this,g=b.map(function(b){return null==a.attributeData||null==a.attributeData[b.index]?(d.logger.error("Missing attributeData for '"+b.name+"' on node '"+
a.id+"'"),p.resolve(null)):d.loadAttribute(c,b.attributeStorageInfo,a.attributeData[b.index].href).catch(function(c){d.logger.error("Failed to load attributeData for '"+b.name+"' on node '"+a.id+"'");return null})});return p.all(g).then(function(a){for(var c={},d=0;d<b.length;++d)a[d]&&(c[b[d].name]=a[d]);return c})};e.prototype.prepareBinaryGeometryData=function(a,c,b,d){u.mixin(a.geometries[0].params,b);d||null!=b.vertexAttributes.region||delete b.vertexAttributes.region;if(null!=b.featureAttributes){d=
b.featureAttributes;if(d.faceRange){var g=q.createTypedView(c,d.faceRange);a.componentOffsets=t.convertFlatRangesToOffsets(g,b.header.fields.featureCount,d.faceRange.valuesPerElement)}if(d.id){a.featureIds=[];var g=1,f=q.valueType2TypedArrayClassMap[d.id.valueType];"UInt64"===d.id.valueType&&(f=Uint32Array,g=2);c=new f(c,d.id.byteOffset,d.id.count*d.id.valuesPerElement*g);for(f=0;f<b.header.fields.featureCount;f++)if(a.featureIds[f]=c[f*d.id.valuesPerElement*g],2===g){var e=c[f*d.id.valuesPerElement*
g+1];if(2097150<=e)throw Error("ID exceeded maximum range supported by javascript (max \x3d 53bit-1 \x3d 9007199254740991)");a.featureIds[f]+=4294967296*e}}}};e.prototype.loadBundleData=function(a,c){var b=this,d=a.baseUrl,e=null,f=this.loadShared(a),k=null;null!=this.requiredAttributes&&(k=this.loadAttributes(a,d,this.requiredAttributes));var h=null;null!=a.geometryData&&(d=n.makeAbsolute(a.geometryData[c].href,d),h=this.loadBinary(d));return f.then(function(d){b.handleCancelled();return(b.options.loadFeatureData?
b.loadFeatureData(a,c):p.resolve(null)).then(function(c){b.handleCancelled();var f=b.options.loadFeatureData?b.collectGeometries(a,c,d):b.meshPyramidGeometryData(a,d);c=null!=h?h.then(function(a){e=a;var c=Object.keys(d.materialDefinitions)[0],c=d.materialDefinitions[c].params.vertexRegions,g=q.createGeometryDataIndex(a,b.defaultGeometrySchema,c);b.prepareBinaryGeometryData(f[0],a,g,c);return f}):p.resolve(f);var g=b.loadTextures(f,d);return p.all([g,c,k])}).then(function(a){var c=a[0],f=a[1];a=a[2];
b.handleCancelled();var g=null;a&&(g={attributeData:a,loadedAttributes:b.requiredAttributes});return{allGeometryData:f,attributeDataInfo:g,geometryBuffer:e,sharedResource:d,textureData:c}})})};e.addAbsoluteHrefTexture=function(a,c){a=a.textureDefinitions;if(null!=a)for(var b=0,d=Object.keys(a);b<d.length;b++)for(var g=0,f=a[d[b]].images;g<f.length;g++){var e=f[g];Array.isArray(e.href)?e.hrefConcat=e.href.map(function(a){return n.makeAbsolute(a,c)}):e.hrefConcat=n.makeAbsolute(e.href,c)}};e.fixTextureEncodings=
function(a){a=a.textureDefinitions;if(null!=a)for(var c in a){var b=a[c];if(Array.isArray(b.encoding))for(var d=0;d<b.encoding.length;d++){var e=b.encoding[d];"data:"===e.substring(0,5)&&(b.encoding[d]=e.substring(5))}else e=b.encoding,"data:"===e.substring(0,5)&&(b.encoding=e.substring(5))}};e.prototype.loadTexture=function(a,c,b,d){var e=this;return d===t.DDS_ENCODING_STRING?this.loadBinary(a).then(function(a){e.handleCancelled();return{i3sTexId:c,data:a,encoding:d}}):this.loadImage(a).then(function(a){var f=
a;e.handleCancelled();if(b&&4096<=a.width*a.height){var f=Math.ceil(a.width/2),g=Math.ceil(a.height/2),m=document.createElement("canvas");m.width=f;m.height=g;m.getContext("2d").drawImage(a,0,0,f,g);f=m}return{i3sTexId:c,data:f,encoding:d}})};e.prototype.loadTextures=function(a,c){for(var b=[],d=0;d<a.length;d++){var g=a[d].geometries;if(null!=g)for(var f=0;f<g.length;f++){var k=g[f].params.textureID||"none";if("none"!==k){null!=c.textureDefinitions&&null!=c.textureDefinitions[k]||this.logger.warn("textureDefinitions missing in shared resource. i3sTexId: "+
k);var h=c.textureDefinitions[k];w.assert(void 0!==h,"geometry wants unknown texture "+k);if(0!==h.images.length){var m=h.images[h.images.length-1],n=this.options.textureFormat===e.TextureFormat.Downsampled,l=t.getAppropriateTextureEncoding(h.encoding,this.options.textureFormat===e.TextureFormat.Compressed),h=-1<l?h.encoding[l]:h.encoding,m=-1<l?m.hrefConcat[l]:m.hrefConcat;this.options.loadTextureData?b.push(this.loadTexture(m,k,n,h)):b.push({i3sTexId:k,encoding:h,data:null})}}}}return p.all(b)};
e.prototype.meshPyramidGeometryData=function(a,c){a=c.materialDefinitions?Object.keys(c.materialDefinitions)[0]:null;c=c.textureDefinitions?Object.keys(c.textureDefinitions)[0]:null;return[{featureIds:[],geometries:[{type:"ArrayBufferView",params:{materialID:a,textureID:c}}],featureDataPosition:[0,0,0]}]};e.prototype.collectGeometries=function(a,c,b){a=[];b=0;for(c=c.featureData;b<c.length;b++){var d=c[b],e=d.geometries;if(null!=e)for(var f=0;f<e.length;f++)a.push({featureIds:[d.id],featureDataPosition:d.position,
geometries:[d.geometries[f]]});else null!=d.position&&a.push({featureIds:[d.id],featureDataPosition:d.position,geometries:null})}return a};e.prototype.loadFeatureData=function(a,c){a=n.makeAbsolute(a.featureData[c].href,a.baseUrl);return this.loadJSON(a)};e.prototype.handleCancelled=function(){if(this.cancelled)throw new v;};return e}();(function(e){e=e.TextureFormat||(e.TextureFormat={});e[e.Compressed=0]="Compressed";e[e.Normal=1]="Normal";e[e.Downsampled=2]="Downsampled"})(l||(l={}));return l});