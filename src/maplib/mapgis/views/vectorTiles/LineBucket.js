// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/extendsHelper ../../core/tsSupport/decorateHelper ../2d/engine/webgl/LineTess ./Bucket ./style/StyleLayer".split(" "),function(u,v,q,w,l,r,t){var n=new l.Tessellator({distanceAlongCorrection:!0});return function(p){function h(b,a,c,d){a=p.call(this,b,a)||this;a.extrudeVectorsDoubleBuffer=[l.allocExtrudeVectors(),l.allocExtrudeVectors()];a.firstExtrudeVectors=l.allocExtrudeVectors();a.recycledTriangleBridge=l.allocTriangles(20);a.recycledTrianglePie=l.allocTriangles(20);
if(b.hasDataDrivenLine!==c.isDataDriven())throw Error("incompatible line buffer");a._lineVertexBuffer=c;a._lineIndexBuffer=d;return a}q(h,p);Object.defineProperty(h.prototype,"lineIndexStart",{get:function(){return this._lineIndexStart},enumerable:!0,configurable:!0});Object.defineProperty(h.prototype,"lineIndexCount",{get:function(){return this._lineIndexCount},enumerable:!0,configurable:!0});h.prototype.assignBufferInfo=function(b){b._lineIndexStart=this._lineIndexStart;b._lineIndexCount=this._lineIndexCount};
h.prototype.processFeatures=function(b,a){this._lineIndexStart=this._lineIndexBuffer.index;this._lineIndexCount=0;a=this.layer;var c=this.zoom,d=a.hasDataDrivenLine;b&&b.setExtent(this.layerExtent);for(var g=a.getPaintValue("line-pattern",c),e=0,k=this._features;e<k.length;e++){var f=k[e],l=new t.LineLayout(a,c,f),m=void 0;if(d&&(m={color:g?[1,1,1,1]:a.getPaintValue("line-color",c,f),opacity:a.getPaintValue("line-opacity",c,f),size:Math.max(Math.min(a.getPaintValue("line-width",c,f),256),0)},0>=m.size||
0>=m.opacity||0>=m.color[3]))continue;f=f.getGeometry(b);this._processFeature(l,f,m)}};h.prototype._processFeature=function(b,a,c){if(a)for(var d=a.length,g=0;g<d;g++)this._processGeometry(a[g],b,c)};h.prototype._processGeometry=function(b,a,c){if(!(2>b.length)){for(var d=b[0],g=b[b.length-1],e=g.x-d.x,g=g.y-d.y,d=1E-6>e*e+g*g,k=b[0],f=1;f<b.length;)e=b[f].x-k.x,g=b[f].y-k.y,1E-6>e*e+g*g?b.splice(f,1):(k=b[f],++f);if(!(2>b.length)){this.vertices=b;this.verticesLen=b.length;this.isClosed=d;this.cap=
a.cap;this.join=a.join;this.almostParallelRads=.05;this.veryShallowRads=.1;this.miterSafeRads=l.MITER_SAFE_RADS;this.miterLimitMag=Math.min(a.miterLimit,l.SYSTEM_MAG_LIMIT);this.roundLimitRads=Math.min(a.roundLimit,.5);this.newRoundJoinsSafeRads=2.3;a=this._lineIndexBuffer.index;for(var e=0,h=void 0,g=this.verticesLen,k=0;k<g;++k){var f=b[k],m=b[(k+g-1)%g],n=d&&this._isClipEdge(m,f),m=h===this.extrudeVectorsDoubleBuffer[k%2]?this.extrudeVectorsDoubleBuffer[(k+1)%2]:this.extrudeVectorsDoubleBuffer[k%
2];k<g-1||!d||this.hasPattern?(this._computeExtrudeVectors(m,k),this._writeGPUVertices(f.x,f.y,e,m,c),!m.capCenter||d&&k===g-1||this._writeGPUPieElements(m,n),d&&0===k&&!this.hasPattern&&l.copyExtrudeVectors(this.firstExtrudeVectors,m)):l.copyExtrudeVectors(m,this.firstExtrudeVectors);h&&this._writeGPUBridgeElements(h,m,n);k<g-1&&(h=b[k+1],f=l.length([h.x-f.x,h.y-f.y]),e+=f);h=m}this._lineIndexCount+=3*(this._lineIndexBuffer.index-a)}}};h.prototype._computeExtrudeVectors=function(b,a){var c=this.vertices,
d=this.verticesLen,g=this.isClosed,e=c[a],k=[void 0,void 0],f=[void 0,void 0];if(0<a&&a<d-1){var h=c[(a+d-1)%d],m=c[(a+1)%d];l.normalize(k,[e.x-h.x,e.y-h.y]);l.normalize(f,[m.x-e.x,m.y-e.y])}else if(0===a)m=c[(a+1)%d],l.normalize(f,[m.x-e.x,m.y-e.y]),g?(c=c[d-2],l.normalize(k,[e.x-c.x,e.y-c.y])):k=f;else if(a===d-1)h=c[(a+d-1)%d],l.normalize(k,[e.x-h.x,e.y-h.y]),g?(c=c[1],l.normalize(f,[c.x-e.x,c.y-e.y])):f=k;else{console.error("Vertex index 'i' out of range.");return}g||0!==a?g||a!==d-1?this._computeJoinExtrudeVectors(b,
k,f):this._computeCapExtrudeVectors(b,k,f,l.CapPosition.END):this._computeCapExtrudeVectors(b,k,f,l.CapPosition.START)};h.prototype._computeCapExtrudeVectors=function(b,a,c,d){0===this.cap?n.buttCap(b,a,c):1===this.cap?n.roundCap(b,a,c,d,l.getNumberOfSlices(Math.PI),d===l.CapPosition.START?-1:1):2===this.cap?n.squareCap(b,a,c,d):n.buttCap(b,a,c)};h.prototype._computeJoinExtrudeVectors=function(b,a,c){var d=l.getRads(a,c);if(d>Math.PI-this.almostParallelRads)n.rectJoin(b,a,c);else if(0===this.join&&
d>=this.veryShallowRads)n.bevelJoin(b,a,c,1);else if(1===this.join&&d>=this.veryShallowRads){var g=l.getNumberOfSlices(d);d<this.newRoundJoinsSafeRads?2>g||d<this.roundLimitRads?n.bevelJoin(b,a,c,1):n.roundJoin(b,a,c,g):n.unitRoundJoin(b,a,c,g)}else d<this.almostParallelRads?n.fastMiterJoin(b,a,c):d<this.miterSafeRads?n.miterJoin(b,a,c):n.bevelJoin(b,a,c,this.miterLimitMag)};h.prototype._writeGPUVertices=function(b,a,c,d,g){for(var e=0;e<d.vectors.count;++e){var k=d.vectors.items[e].vector[0],f=d.vectors.items[e].vector[1],
h=d.vectors.items[e].texCoords[0],l=d.vectors.items[e].texCoords[1];d.vectors.items[e].base=this._lineVertexBuffer.index;this._lineVertexBuffer.add(b,a,k,f,h,l,c,g)}};h.prototype._writeGPUBridgeElements=function(b,a,c){n.bridge(this.recycledTriangleBridge,b,a);if(!c)for(b=0;b<this.recycledTriangleBridge.count;++b)a=this.recycledTriangleBridge.items[b],this._lineIndexBuffer.add(a.v1.base,a.v2.base,a.v3.base)};h.prototype._writeGPUPieElements=function(b,a){n.pie(this.recycledTrianglePie,b);if(!a)for(b=
0;b<this.recycledTrianglePie.count;++b)a=this.recycledTrianglePie.items[b],this._lineIndexBuffer.add(a.v1.base,a.v2.base,a.v3.base)};h.prototype._isClipEdge=function(b,a){return b.x===a.x?-64>=b.x||4160<=b.x:b.y===a.y?-64>=b.y||4160<=b.y:!1};return h}(r)});