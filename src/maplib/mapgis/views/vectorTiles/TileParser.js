// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports dojo/promise/all ../../core/executeAsync ../../core/pbf ../../core/promiseUtils ../2d/engine/webgl/TileClipper ./BackgroundBucket ./CircleBucket ./Feature ./FillBucket ./LineBucket ./SourceLayerData ./SymbolBucket".split(" "),function(O,P,H,D,v,E,l,w,I,J,K,L,M,N){return function(){function e(b,a,g){this._pbfTile=new v(new Uint8Array(b),new DataView(b));this._tile=a;this._connection=g;this._layers=a.getLayers();g=a.tileKey.split("/").map(parseFloat);var c=g[0];b=g[1];g=g[2];
this._level=c;a.refKey&&(a=a.refKey.split("/").map(parseFloat)[0],a=c-a,0<a&&(c=(1<<a)-1,this._tileClipper=new l.TileClipper(a,b&c,g&c)));this._tileClipper||(this._tileClipper=new l.SimpleBuilder)}e.prototype.parse=function(){for(var b=this,a=this._parseTileData(this._pbfTile),g=this._layers,c=g.length,e=this._level,d,h=[],m={},l=new Set,c=c-1;0<=c;c--)if(d=g[c],!(d.minzoom&&e<d.minzoom||d.maxzoom&&e>=d.maxzoom||d.layout&&"none"===d.layout.visibility))if(0===d.type)d=this._createBucket(d),d.layerIndex=
c,h.push(d);else{var r=d.sourceLayer,n=a[r];n&&(l.add(r),d=this._createBucket(d))&&(d.layerIndex=c,d.layerExtent=n.extent,(n=m[r])||(n=m[r]=[]),n.push(d))}var v=10*this._level,w=10*(this._level+1),p=[],x=[],t=[],F=[],y=this._tileClipper,z=new Set,A={},B=[];l.forEach(function(b){return B.push(b)});var u=0,q=0,C=B.length;return D(function(){if(6===b._tile.status)return!0;switch(u){case 0:if(q<C){var d=B[q++],g=a[d],k=m[d];if(k&&0!==k.length)for(d=g.getData();d.next(2);){var c=new J(d.getMessage(),g),
f=c.values;if(f){var e=f._minzoom;if(e&&e>=w)continue;if((f=f._maxzoom)&&f<=v)continue}for(var e=0,G=k;e<G.length;e++)f=G[e],f.pushFeature(c)}}else{g=b._tile;for(d in m)for(k=m[d],c=0;c<k.length;c++)f=k[c],f.hasFeatures()&&(3===f.layer.type?(p.push(f),g.addBucket(f)):f.layer.refLayerId?t.push(f):(x.push(f),F[f.layer.id]=f));u=1;q=0;C=p.length}break;case 1:q<C?p[q++].getResources(y,z,A):u=2}return 2===u}).then(function(){if(6===b._tile.status)return[];var a=[],d=b._tile.getWorkerTileHandler(),c;0<
z.size&&(c=d.fetchSprites(z,b._connection),a.push(c));for(var e in A)c=A[e],0<c.size&&(c=d.fetchGlyphs(b._tile.tileKey,e,c,b._connection),a.push(c));return H(a).then(function(a){if(6===b._tile.status)return[];var d=0,c=0,e=x.length;return D(function(){if(6===b._tile.status)return!0;switch(d){case 0:if(c<e){var a=x[c++];a.processFeatures(y,b._tile);h.push(a)}else d=1,c=0,e=t.length;break;case 1:for(var f=0;f<t.length;f++){var a=t[f],g=F[a.layer.refLayerId];g&&(g.assignBufferInfo(a),h.push(a))}d=2;
c=0;e=p.length;break;case 2:c<e?(a=p[c++],a.processFeatures(y,b._tile),h.push(a)):d=3}return 3===d}).then(function(){h.sort(function(a,b){return a.layerIndex-b.layerIndex});return h})}).catch(function(a){return E.reject(Error(a))})}).catch(function(a){return E.reject(Error(a))})};e.prototype._parseTileData=function(b){for(var a={};b.next();)switch(b.tag()){case 3:var e=new M(b.getMessage());a[e.name]=e;break;default:b.skip()}return a};e.prototype._createBucket=function(b){switch(b.type){case 0:return this._createBackgroundBucket(b);
case 1:return this._createFillBucket(b);case 2:return this._createLineBucket(b);case 4:return this._createCircleBucket(b);case 3:return this._createSymbolBucket(b)}};e.prototype._createBackgroundBucket=function(b){return new w(b,this._level)};e.prototype._createFillBucket=function(b){var a=this._tile;return new K(b,this._level,b.hasDataDrivenFill?a.fillDDVertexBuffer:a.fillVertexBuffer,a.fillIndexBuffer,b.hasDataDrivenOutline?a.outlineDDVertexBuffer:a.outlineVertexBuffer,a.outlineIndexBuffer)};e.prototype._createLineBucket=
function(b){var a=this._tile;return new L(b,this._level,b.hasDataDrivenLine?a.lineDDVertexBuffer:a.lineVertexBuffer,a.lineIndexBuffer)};e.prototype._createCircleBucket=function(b){var a=this._tile;return new I(b,this._level,a.circleVertexBuffer,a.circleIndexBuffer)};e.prototype._createSymbolBucket=function(b){var a=this._tile;return new N(b,this._level,b.hasDataDrivenIcon?a.iconDDVertexBuffer:a.iconVertexBuffer,a.iconIndexBuffer,b.hasDataDrivenText?a.textDDVertexBuffer:a.textVertexBuffer,a.textIndexBuffer,
a.placementEngine,a.getWorkerTileHandler())};return e}()});