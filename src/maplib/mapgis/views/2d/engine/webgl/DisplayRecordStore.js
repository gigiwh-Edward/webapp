// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define(["require","exports","dojo/has","./FreeList"],function(m,t,u,n){function v(c){c=c.getStrides();var a={},b;for(b in c)a[p[b]]=c[b];return a}Object.defineProperty(t,"__esModule",{value:!0});var p=["FILL","LINE","MARKER","TEXT"];m=function(){function c(a,b,e){this._strides=a;this._displayList=b;this._vertexAlignments={};this._freeListsAndStorage={};for(var g in a){var c=b=!1;this._freeListsAndStorage[g]={vtxFreeList:e?new n.FreeList(e):null,idxFreeList:e?new n.FreeList(e):null,vertexBuffers:{},
indexBuffer:e?new Uint32Array(e):null};for(var d in a[g])this._freeListsAndStorage[g].vertexBuffers[d]={data:e?new Uint32Array(Math.floor(e*a[g][d]/4)):null,stride:a[g][d]},2===a[g][d]%4?b=!0:0!==a[g][d]%4&&(c=!0);this._vertexAlignments[g]=c?4:b?2:1}}c.fromTileData=function(a){var b=v(a),e=[0,0,0,0],g=[0,0,0,0],l=[];a.tileDisplayData.displayObjectRegistry.forEach(function(a){l.push(a)});for(var d=0;d<l.length;d++)for(var f=0,k=l[d].displayRecords;f<k.length;f++){var h=k[f];e[h.geometryType]=Math.max(e[h.geometryType],
h.vertexFrom+h.vertexCount);g[h.geometryType]=Math.max(g[h.geometryType],h.indexFrom+h.indexCount)}b=new c(b,a.tileDisplayData.displayList,null);for(d=0;d<a.tileBufferData.geometries.length;++d){var f=e[d],q=g[d],h=a.tileBufferData.geometries[d],k=b._storageFor(p[d]),m=a.tileBufferData.geometries[d].indexBuffer;k.indexBuffer=m;k.idxFreeList=new n.FreeList(m.length);k.idxFreeList.allocate(q);var q=void 0,r;for(r in h.vertexBuffer)h=a.tileBufferData.geometries[d].vertexBuffer[r],k.vertexBuffers[r].data=
h.data,k.vertexBuffers[r].stride=h.stride,q=4*h.data.length/h.stride;k.vtxFreeList=new n.FreeList(q);k.vtxFreeList.allocate(f)}return b};c.prototype.delete=function(a){var b=p[a.geometryType];this._freeVertices(b,a.vertexFrom,a.vertexCount);this._freeIndices(b,a.indexFrom,a.indexCount);this._displayList.removeFromList(a);a.vertexFrom=void 0;a.indexFrom=void 0};c.prototype.commit=function(a){var b=p[a.geometryType];if(!a.meshData)return!0;var e=a.meshData.vertexCount,g=a.meshData.indexData.length,
c=a.vertexFrom,d=a.indexFrom,f=0,f=0,k=!1;void 0===a.vertexFrom?(f=this._align(b,e),c=this._allocateVertices(b,f),a.meshData.vertexCount=f,-1!==c&&(a.vertexFrom=c,a.vertexCount=f)):e>a.vertexCount?(this._freeVertices(b,a.vertexFrom,a.vertexCount),f=this._align(b,e),c=this._allocateVertices(b,f),a.meshData.vertexCount=f,-1!==c&&(a.vertexFrom=c,a.vertexCount=f)):e!==a.vertexCount&&(this._freeVertices(b,a.vertexFrom+e,a.vertexCount-e),a.vertexCount=e);void 0===a.indexFrom?(k=!0,f=g,d=this._allocateIndices(b,
f),-1!==d&&(a.indexFrom=d,a.indexCount=f)):g>a.indexCount?(k=!0,this._displayList.removeFromList(a),this._freeIndices(b,a.indexFrom,a.indexCount),f=g,d=this._allocateIndices(b,f),-1!==d&&(a.indexFrom=d,a.indexCount=f)):g!==a.indexCount&&(k=!0,this._displayList.removeFromList(a),this._freeIndices(b,a.indexFrom+g,a.indexCount-g),a.indexCount=g);return-1!==c&&-1!==d?(b=this._storageFor(b),a.writeMeshDataToBuffers(a.vertexFrom,b.vertexBuffers,a.indexFrom,b.indexBuffer),a.meshData=null,k&&this._displayList.addToList(a),
!0):!1};c.prototype._allocateVertices=function(a,b){a=this._storageFor(a);b=a.vtxFreeList.allocate(b);return-1===b||.5<a.vtxFreeList.fragmentation?-1:b};c.prototype._freeVertices=function(a,b,e){var c=this._storageFor(a);c.vtxFreeList.free(b,e);if(u("mapgis-feature-tiles-debug"))for(var l in c.vertexBuffers)for(var d=c.vertexBuffers[l].data,f=this._stridesFor(a,l),k=b*f/4,f=e*f/4,h=k;h<k+f;++h)d[h]=0};c.prototype._freeIndices=function(a,b,c){a=this._storageFor(a);a.idxFreeList.free(b,c);if(u("mapgis-feature-tiles-debug")){a=
a.indexBuffer;for(var e=b;e<b+c;++e)a[e]=0}};c.prototype._align=function(a,b){var c=b%this._vertexAlignments[a];return 0===c?b:b+(this._vertexAlignments[a]-c)};c.prototype._allocateIndices=function(a,b){a=this._storageFor(a);b=a.idxFreeList.allocate(b);return-1===b||.5<a.idxFreeList.fragmentation?-1:b};c.prototype._storageFor=function(a){return this._freeListsAndStorage[a]};c.prototype._stridesFor=function(a,b){return this._strides[a][b]};return c}();t.default=m});