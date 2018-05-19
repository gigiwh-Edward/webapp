// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define(["require","exports"],function(l,m){return function(){function d(a,c,b){this.layerViewRequiredFunctions=a;this.layerViewOptionalFunctions=c;this.lodGlobalDirtyChanged=b}d.prototype.startNodeLoading=function(a,c,b,d,e,f){this._lodGlobalDirty=!1;this._maxLodLevel=f.maxLodLevel;this._nodeIndex=d;this._rootId=e;this._nodeTraversalState=b;this._isNodeVisible=a;this._isGeometryVisible=c;this.lodGlobalDirtyChanged(this._lodGlobalDirty)};d.prototype.shouldLoadNode=function(a){var c=this._nodeTraversalState(a.id);
return c.isChosen?c.lodLevel===this._maxLodLevel?!0:this.childrenEmpty(a):!1};d.prototype.setLodGlobalDirty=function(){this._lodGlobalDirty=!0;this.lodGlobalDirtyChanged(this._lodGlobalDirty)};d.prototype.lodSwapBundleLoaded=function(a){this.setLodGlobalDirty()};Object.defineProperty(d.prototype,"requiresLODGlobalHandling",{get:function(){return null!=this._rootId&&(!0===this._lodGlobalDirty||1.1<this.layerViewRequiredFunctions.getMemoryUsage())},enumerable:!0,configurable:!0});d.prototype.lodGlobalHandling=
function(){if(this.requiresLODGlobalHandling){var a=this._rootId,c=this.layerViewRequiredFunctions.getMemoryUsage();this._lodGlobalHandlingRecursion(a,{removeNodes:Math.max(0,Math.floor(10*(c-1)))});this._lodGlobalDirty=!1;this.lodGlobalDirtyChanged(this._lodGlobalDirty)}};d.prototype._lodGlobalHandlingRecursion=function(a,c){var b=this._nodeIndex[a];if(null==b)return!1;a=this._nodeTraversalState(a);var d=a.isChosen&&(!a.nodeHasLOD||a.lodLevel===this._maxLodLevel);(a=this.layerViewRequiredFunctions.isBundleLoaded(b))&&
null!=this.layerViewOptionalFunctions.setPolygonOffset&&this.layerViewOptionalFunctions.setPolygonOffset(b,!d);if(d&&a)return this._removeChildrenRecursive(b),!0;var e=!1;if(null!=b.children&&0!==b.children.length)for(var e=!0,f=0,h=b.children;f<h.length;f++){var g=h[f],k=this._nodeIndex[g.id];if(k?this._isGeometryVisible(k):this._isNodeVisible(g))g=this._lodGlobalHandlingRecursion(g.id,c),e=e&&g}a&&!d&&(e||0<c.removeNodes)&&(this.layerViewRequiredFunctions.removeNodeData(b),c.removeNodes--,a=!1);
c=!b.featureData||0===b.featureData.length;return e||a||c};d.prototype._removeChildrenRecursive=function(a){if(null!=a.children){var c=0;for(a=a.children;c<a.length;c++){var b=this._nodeIndex[a[c].id];null!=b&&(this._removeChildrenRecursive(b),this.layerViewRequiredFunctions.removeNodeData(b))}}};d.prototype._subtreeEmpty=function(a){return this.layerViewRequiredFunctions.isBundleLoaded(a)?!1:this.childrenEmpty(a)};d.prototype.childrenEmpty=function(a){if(null==a.children)return!0;var c=0;for(a=a.children;c<
a.length;c++){var b=a[c];if(this._isNodeVisible(b)&&(b=this._nodeIndex[b.id],null!=b&&!this._subtreeEmpty(b)))return!1}return!0};return d}()});