// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../core/tsSupport/decorateHelper dojo/promise/all ../../../core/promiseUtils ../../../core/watchUtils ../../../core/accessorSupport/decorators ./TiledLayerView3D ../../vectorTiles/SchemaHelper ../../vectorTiles/TileHandler ../../vectorTiles/renderers/Renderer".split(" "),function(t,u,h,f,k,l,m,b,n,p,q,r){return function(g){function a(c){return g.call(this)||this}h(a,g);a.prototype.initialize=function(){var c=this,a=this._getTileInfoSupportError(this.layer.compatibleTileInfo256,
this.layer.fullExtent),d;a?this.addResolvingPromise(l.reject(a)):d=m.whenTrueOnce(this.view,"basemapTerrain.tilingSchemeLocked").then(function(){var a=c.view.basemapTerrain.tilingScheme,b=a.pixelSize[0];c.schemeHelper=new p(b,c.view.spatialReference.isWGS84);b=256===b?c.layer.compatibleTileInfo256:c.view.spatialReference.isWGS84?c.layer.compatibleTileInfo512:c.layer.tileInfo;if(a=c._getTileInfoCompatibilityError(b,a))throw a;c.tileInfo=b;c._updateMinMaxDataLevel()});var b,a=this._initializeTileHandler();
this.tileHandler=a[0];this.renderer=a[1];this._tileHandlerPromise=b=a[2];this.watch("layer.currentStyleInfo",function(){var a,d,e;c._tileHandlerPromise.isFulfilled()||c._tileHandlerPromise.cancel();e=c._initializeTileHandler();a=e[0];d=e[1];e=e[2];c._tileHandlerPromise=b;e.then(function(){var b=c.tileHandler;c.renderer=d;c.tileHandler=a;c.emit("data-changed");b.destroy()})});d=k([d,b]);this.addResolvingPromise(d)};a.prototype.destroy=function(){this.renderer=null;this.tileHandler.destroy();this.tileHandler=
null};a.prototype._initializeTileHandler=function(){var a=new q(this.layer,function(){},1),b=new r,d=a.start();d.then(function(){b.initialize(a.spriteMosaic,a.glyphMosaic,!1)});return[a,b,d]};f([b.property({aliasOf:"layer.fullExtent"})],a.prototype,"fullExtent",void 0);f([b.property()],a.prototype,"layer",void 0);f([b.property()],a.prototype,"updatingPercentageValue",void 0);return a=f([b.subclass("mapgis.views.3d.layers.VectorTileLayerView3D")],a)}(b.declared(n))});