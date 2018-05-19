// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../core/tsSupport/decorateHelper ../../../core/Error ../../../core/ObjectPool ../../../core/promiseUtils ../../../core/accessorSupport/decorators ../engine/Bitmap ../engine/BitmapContainer ../engine/BitmapSource ../engine/Canvas2DContainer ../engine/Tiled ./LayerView2D ../tiling/TileInfoView ../tiling/TileKey ../tiling/TileQueue ../tiling/TileStrategy ../../layers/RefreshableLayerView".split(" "),function(C,D,e,m,f,n,p,g,q,r,t,u,
v,w,x,y,z,A,B){var h=function(d){function b(a){a=d.call(this,a)||this;a.key=new y(0,0,0,0);return a}e(b,d);b.prototype.acquire=function(a){};b.prototype.release=function(){this.key.set(0,0,0,0)};b.pool=new n(b,!0);return b}(v(q)),k=[0,0];return function(d){function b(){var a=null!==d&&d.apply(this,arguments)||this;a._tileStrategy=null;a._tileInfoView=null;a._fetchQueue=null;a._tileRequests=new Map;a.container=new u;a.layer=null;return a}e(b,d);b.prototype.initialize=function(){var a=this.layer.tileInfo,
a=a&&a.spatialReference,c;a||(c=new f("layerview:tiling-information-missing","The layer doesn't provide tiling information",{layer:this.layer}));a.equals(this.view.spatialReference)||(c=new f("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}));c&&this.addResolvingPromise(p.reject(c))};b.prototype.hitTest=function(a,c){return null};b.prototype.update=function(a){this._fetchQueue.pause();this._fetchQueue.state=
a.state;this._tileStrategy.update(a);this._fetchQueue.resume();this.notifyChange("updating")};b.prototype.attach=function(){var a=this;this._tileContainer=new r;this.container.addChild(this._tileContainer);this._tileInfoView=new x(this.layer.tileInfo,this.layer.fullExtent);this._fetchQueue=new z({tileInfoView:this._tileInfoView,tileServers:this.layer.tileServers,concurrency:this.layer.url&&-1!==this.layer.url.indexOf("tiles.arcgis.com")?12:6,process:function(c,b){return a.fetchTile(c,b)}});this._tileStrategy=
new A({cachePolicy:"keep",acquireTile:function(c){return a.acquireTile(c)},releaseTile:function(c){return a.releaseTile(c)},tileInfoView:this._tileInfoView})};b.prototype.detach=function(){this._tileStrategy.destroy();this._fetchQueue.clear();this.container.removeChild(this._tileContainer);this._fetchQueue=this._tileStrategy=this._tileInfoView=this._tileContainer=null};b.prototype.moveStart=function(){this.requestUpdate()};b.prototype.viewChange=function(){this.requestUpdate()};b.prototype.moveEnd=
function(){this.requestUpdate()};b.prototype.doRefresh=function(){var a=this;this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(function(c){return a._enqueueTileFetch(c)}),this.notifyChange("updating"))};b.prototype.isUpdating=function(){var a=!0;this._tileRequests.forEach(function(c){a=a&&c.isFulfilled()});return!a};b.prototype.getTileBounds=function(a,c){return this._tileInfoView.getTileBounds(a,c)};b.prototype.getTileCoords=function(a,c){return this._tileInfoView.getTileCoords(a,
c)};b.prototype.getTileResolution=function(a){return this._tileInfoView.getTileResolution(a)};b.prototype.acquireTile=function(a){var c=h.pool.acquire();c.key.set(a);a=this._tileInfoView.getTileCoords(k,c.key);c.x=a[0];c.y=a[1];c.resolution=this._tileInfoView.getTileResolution(c.key);a=this._tileInfoView.tileInfo.size;c.width=a[0];c.height=a[1];this._enqueueTileFetch(c);this.requestUpdate();return c};b.prototype.releaseTile=function(a){var c=this,b=this._tileRequests.get(a);b&&!b.isFulfilled()&&b.cancel();
this._tileRequests.delete(a);this._tileContainer.removeChild(a);a.once("detach",function(){h.pool.release(a);c.requestUpdate()});this.requestUpdate()};b.prototype.fetchTile=function(a,c){var b=this;if(c=this.layer.tilemapCache){var l=a.level,d=a.row,e=a.col;return c.fetchAvailabilityUpsample(l,d,e,a).then(function(){return b._fetchImage(a)}).catch(function(){a.level=l;a.row=d;a.col=e;return b._fetchImage(a)})}return this._fetchImage(a)};b.prototype._enqueueTileFetch=function(a){var c=this;if(!this._fetchQueue.has(a.key)){var b=
this._fetchQueue.push(a.key).then(function(b){a.source=b;a.once("attach",function(){return c.requestUpdate()});c._tileContainer.addChild(a);c.requestUpdate()});this._tileRequests.set(a,b)}};b.prototype._fetchImage=function(a){var c=this;return this.layer.fetchTile(a.level,a.row,a.col,{timestamp:this.refreshTimestamp}).then(function(b){b=t.default.pool.acquire(b);d=c.getTileCoords(k,a);b.x=d[0];b.y=d[1];b.resolution=c.getTileResolution(a);return b;var d})};return b=m([g.subclass("mapgis.views.2d.layers.TiledLayerView2D")],
b)}(g.declared(w,B))});