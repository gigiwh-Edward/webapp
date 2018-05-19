// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../geometry ../../../../geometry/support/spatialReferenceUtils ../../../../geometry/support/webMercatorUtils ../DisplayObject ./gfxUtils".split(" "),function(y,z,m,v,w,l,x,g){var n=new Set,h=[];return function(k){function b(){var a=null!==k&&k.apply(this,arguments)||this;a._prevStateId=null;a.visible=!0;return a}m(b,k);Object.defineProperty(b.prototype,"graphic",{get:function(){return this._graphic},set:function(a){this._geometry=
(this._graphic=a)&&a.geometry||null;this._projected=null;this.requestRender()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"geometry",{get:function(){return this._geometry},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"isPolygonMarkerSymbol",{get:function(){var a=this.renderingInfo.symbol.type,c=this.geometry;return c&&"polygon"===c.type&&("simple-marker"===a||"picture-marker"===a||"text"===a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"renderingInfo",{get:function(){return this._renderingInfo},set:function(a){this._renderingInfo=a;this.requestRender()},enumerable:!0,configurable:!0});b.prototype.detach=function(){this._removeShape();this._drawInfo=this._projected=null};b.prototype.doRender=function(a){var c=a.surface,f=a.state,p=a.projector,e=this._prevStateId!==f.id;if(this.renderRequested||e)if(e&&a.stationary&&(this._prevStateId=f.id),this.visible)if(e=this._projectGeometry(this.geometry,a.state.spatialReference),a=this._getScreenOffsets([],
a.state),g.isShapeInvalid(this.renderingInfo.symbol,this._shape)&&this._removeShape(),a.length){var d=this._shape,b=e.type;if(!d||this._showRedraw(a,f))"point"===b?(d=g.drawPoint(p,c,e,d,this.renderingInfo,f.rotation,a),g.stylePoint(d,this.renderingInfo)):"multipoint"===b?(d=g.drawMarkers(p,c,e,d,this.renderingInfo,f.rotation,a,this),g.styleMarkers(d,this.renderingInfo)):(d=g.drawShape(p,c,e,d,a),g.styleShape(d,this.renderingInfo)),this._shape=d,d.getNode().gfxObject=this}else this._removeShape();
else this._removeShape()};b.prototype._getScreenOffsets=function(a,c){var f=c.clippedExtent,b=this._projected.outExtent,e=c.spatialReference;a.length=0;if(!b)return a;if(e.isWrappable){var e=w.getInfo(e),d=b.cache._partwise,f=f._getParts(e);h.length=0;if(d&&d.length)for(b=0;b<d.length;b++)h.push.apply(h,d[b]._getParts(e));else h.push.apply(h,b._getParts(e));c=c.worldScreenWidth;a.length=0;n.clear();b=h.length;for(e=0;e<b;e++)for(var g=h[e],d=g.extent,g=g.frameIds,k=g.length,l=f.length,q=0;q<l;q++){var u=
f[q];if(u.extent.intersects(d))for(var m=k,r=0;r<m;r++){var t=(u.frameIds[0]-g[r])*c;n.has(t)||(a.push(t),n.add(t))}}a.sort()}else f.intersects(b)&&a.push(0);return a};b.prototype._projectGeometry=function(a,c){var b=this._projected;a=this.isPolygonMarkerSymbol?a.centroid:a;if(b&&b.inGeometry===a&&b.outSpatialReference===c)return b.outGeometry;a&&a.spatialReference.equals(c)?this._projected={inGeometry:a,outGeometry:a,outSpatialReference:c,outExtent:this._getExtent(a)}:l.canProject(a,c)?this._projected=
{inGeometry:a,outGeometry:l.project(a,c),outSpatialReference:c,outExtent:this._getExtent(a)}:this._projected={inGeometry:a,outGeometry:null,outSpatialReference:c,outExtent:null};return this._projected.outGeometry};b.prototype._getExtent=function(a){var b=a.extent;if(!b){var f=b=void 0;"mapgis.geometry.Point"===a.declaredClass?(b=a.x,f=a.y):"mapgis.geometry.Multipoint"===a.declaredClass&&(b=a.points[0][0],f=a.points[0][1]);b=new v.Extent(b,f,b,f,a.spatialReference)}return b};b.prototype._removeShape=function(){var a=
this._shape;a&&(a.removeShape(),a.getNode().gfxObject=null,a.destroy());this._shape=this._drawInfo=null};b.prototype._showRedraw=function(a,b){return!0};return b}(x)});