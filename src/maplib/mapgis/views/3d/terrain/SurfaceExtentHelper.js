// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/Accessor ../../../core/arrayUtils ../../../core/Handles ../../../core/accessorSupport/decorators ../../../geometry/support/webMercatorUtils ../../../views/3d/support/aaBoundingRect ./TerrainConst ./terrainUtils".split(" "),function(g,h,k,c,l,m,t,b,n,f,p,q){function r(d,a){d&&!d.spatialReference.equals(a)&&(d=n.canProject(d.spatialReference,a)?n.project(d,a):null);return d}Object.defineProperty(h,
"__esModule",{value:!0});g=function(d){function a(a){a=d.call(this,a)||this;a._changeListeners=new t;return a}k(a,d);a.prototype.initialize=function(){var a=this;this._changeListeners.add([this.layerViews.on("change",function(){return a.notifyChange("stencilEnabledExtents")})])};a.prototype.destroy=function(){this._changeListeners.destroy();this._changeListeners=null};Object.defineProperty(a.prototype,"layerViewsExtent",{get:function(){return this._computeLayerViewsExtent()},enumerable:!0,configurable:!0});
Object.defineProperty(a.prototype,"tiledLayersExtent",{get:function(){return this._computeTiledLayersExtent()},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"stencilEnabledExtents",{get:function(){return this._computeStencilEnabledExtents(this.layerViews,this.spatialReference)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"spatialReference",{set:function(a){this.tilingScheme||this._set("spatialReference",a)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,
"tilingScheme",{set:function(a){this._set("tilingScheme",a);this._set("spatialReference",a.spatialReference)},enumerable:!0,configurable:!0});a.prototype._computeStencilEnabledExtents=function(a,d){var b=[],c=0;for(a=a.items;c<a.length;c++){var e=a[c].layer;"IntegratedMeshLayer"===e.operationalLayerType&&null!=d&&(e=r(e.fullExtent,d),null!=e&&b.push([e.xmin,e.ymin,e.xmax,e.ymax]))}return b};c([b.property({readOnly:!0})],a.prototype,"layerViewsExtent",null);c([b.property({readOnly:!0,dependsOn:["spatialReference",
"tilingScheme"]})],a.prototype,"tiledLayersExtent",null);c([b.property({readOnly:!0,dependsOn:["spatialReference"]})],a.prototype,"stencilEnabledExtents",null);c([b.property()],a.prototype,"spatialReference",null);c([b.property()],a.prototype,"tilingScheme",null);c([b.property()],a.prototype,"defaultTiledLayersExtent",void 0);c([b.property({constructOnly:!0})],a.prototype,"layers",void 0);c([b.property({constructOnly:!0})],a.prototype,"layerViews",void 0);return a=c([b.subclass()],a)}(b.declared(l));
l=function(d){function a(){return null!==d&&d.apply(this,arguments)||this}k(a,d);a.prototype._computeLayerViewsExtent=function(){return this._getGlobalExtent()};a.prototype._computeTiledLayersExtent=function(){return this._getGlobalExtent()};a.prototype._getGlobalExtent=function(){return this.spatialReference.isWebMercator?p.WEBMERCATOR_WORLD_EXTENT:p.GEOGRAPHIC_WORLD_EXTENT};c([b.property({dependsOn:["spatialReference"]})],a.prototype,"layerViewsExtent",void 0);return a=c([b.subclass()],a)}(b.declared(g));
h.SurfaceExtentHelperGlobal=l;g=function(d){function a(){return null!==d&&d.apply(this,arguments)||this}k(a,d);a.prototype.initialize=function(){var a=this;this._changeListeners.add([this.layers.on("change",function(){return a.notifyChange("tiledLayersExtent")}),this.layerViews.on("change",function(){return a.notifyChange("layerViewsExtent")})])};a.prototype._computeLayerViewsExtent=function(){var a=f.create(f.NEGATIVE_INFINITY),d=this.spatialReference;this.layerViews.forEach(function(b){b.isResolved()&&
(b=b.fullExtentInViewSpatialReference||b.layer.fullExtent,(b=r(b,d))&&f.expand(a,b))});var b=f.allFinite(a)?a:null,c=this._get("layerViewsExtent");return m.equals(b,c)?c:b};a.prototype._computeTiledLayersExtent=function(){var a=this.tilingScheme;if(!a)return null;var b=this.spatialReference,d=f.create(f.NEGATIVE_INFINITY);this.layers.forEach(function(c){if(c.loaded&&q.isTiledLayer(c)){var e=q.getTiledLayerInfo(c,b,"local");c=e.tileInfo;e=e.fullExtent;c&&a.compatibleWith(c)&&e&&e.spatialReference.equals(b)&&
f.expand(d,e)}});this.defaultTiledLayersExtent&&f.expand(d,this.defaultTiledLayersExtent);var c=f.allFinite(d)?d:null,e=this._get("tiledLayersExtent");return m.equals(c,e)?e:c};return a=c([b.subclass()],a)}(b.declared(g));h.SurfaceExtentHelperLocal=g});