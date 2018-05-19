// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/Error ../../../core/promiseUtils ../../../core/accessorSupport/decorators ../engine/BitmapContainer ../engine/BitmapSource ../engine/Canvas2DContainer ./LayerView2D ./support/ExportStrategy ../tiling/TileInfoView ../tiling/TileQueue ../tiling/TileStrategy ../../layers/RefreshableLayerView".split(" "),function(C,D,q,r,m,t,n,p,u,v,w,x,y,z,A,B){return function(l){function a(){var b=
null!==l&&l.apply(this,arguments)||this;b._exportStrategies=[];b._tileStrategies=[];b._updates=new Set;b.container=new v;return b}q(a,l);a.prototype.startExportRendering=function(b){var a=this;if(!b)throw new m("base-layer-view-2d:startExportRendering","renderingOptions parameter missing");var e=this.container,f=this._exportStrategies,d=new p,c=new x({container:d,imageRotationSupported:!1,imageNormalizationSupported:!1,imageDataAccessRequired:!0,hidpi:!0,requestUpdate:function(){a._requestUpdate(c)},
disposeSource:function(a){b.disposeExport&&b.disposeExport(a.data)},fetchSource:function(a,h,d,g){var e=a.xmin,f=a.ymax,c=a.width/h,k=function(a,b,d){a[0]=(b-e)/c;a[1]=(f-d)/c;return a};return t.resolve().then(function(){return b.createExport(a,h,d,{pixelRatio:g.pixelRatio,toScreen:k})}).then(function(a){return new u.default(a)})}});f.push(c);e.addChild(d);return{requestUpdate:function(){a._requestUpdate(c)},requestRender:function(a){for(var b=0,c=d.children;b<c.length;b++){var g=c[b];g.source.data===
a&&g.requestRender()}},stop:function(){f.splice(f.indexOf(c),1);e.removeChild(d);d.removeAllChildren();c.destroy();c=d=null}}};a.prototype.startTileRendering=function(a){var b=this;if(!a)throw new m("base-layer-view-2d:startTileRendering","renderingOptions parameter missing");var e=this.container,f=this._tileStrategies,d=new y(this.layer.tileInfo,this.layer.fullExtent),c=new z({tileInfoView:d,process:function(a){}}),k=new A({cachePolicy:"keep",acquireTile:function(a){return null},releaseTile:function(a){},
tileInfoView:d}),h=new p;f.push(k);e.addChild(h);return{requestUpdate:function(){b._requestUpdate(k)},requestRender:function(a){for(var b=0,c=h.children;b<c.length;b++){var d=c[b];d.source.data===a&&d.requestRender()}},stop:function(){f.splice(f.indexOf(k),1);e.removeChild(h);h.removeAllChildren();k.destroy();c.clear();k=h=c=d=null}}};a.prototype.hitTest=function(a,g){return null};a.prototype.update=function(a){var b=[];this._updates.forEach(function(a){b.push(a)});this._updates.clear();for(var e=
0;e<b.length;e++)b[e].update(a)};a.prototype.attach=function(){};a.prototype.detach=function(){};a.prototype.moveStart=function(){};a.prototype.viewChange=function(){};a.prototype.moveEnd=function(){for(var a=0,g=this._exportStrategies;a<g.length;a++)this._requestUpdate(g[a])};a.prototype._requestUpdate=function(a){a&&!this._updates.has(a)&&(this._updates.add(a),this.requestUpdate())};return a=r([n.subclass("mapgis.views.2d.layers.BaseLayerView2D")],a)}(n.declared(w,B))});