// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/Accessor ../../../core/Handles ../../../core/watchUtils ../../../core/accessorSupport/decorators".split(" "),function(l,m,f,d,g,h,k,c){return function(e){function a(b){b=e.call(this)||this;b._handles=new h;b.compatibilityFunction=null;b.error=null;b.state="loading";b.view=null;return b}f(a,e);a.prototype.initialize=function(){var b=this;this._handles.add(k.init(this,["basemap.loadStatus",
"compatibilityFunction","view.basemapTerrain.tilingScheme","view.ready","view.spatialReference"],function(){return b.refresh()}))};a.prototype.destroy=function(){this._cancelCompatibilityCheck();this._handles.destroy();this.view=this.compatibilityFunction=this.basemap=this._handles=null};Object.defineProperty(a.prototype,"basemap",{set:function(b){var a=this._get("basemap");a&&a.cancelLoad();b&&b.load();this._set("basemap",b)},enumerable:!0,configurable:!0});a.prototype.refresh=function(){var b=this;
this._cancelCompatibilityCheck();this._set("state","loading");var a=this.get("basemap.loadStatus");if("loaded"===a||"failed"===a)if(this.compatibilityFunction){var c=!1,d=this.compatibilityFunction(this).then(function(){c||(b._set("state","ready"),b._set("error",null))}).catch(function(a){c||(b._set("state","error"),b._set("error",a))});this._lastCompatibilityCheck={cancel:function(){c=!0;d.cancel()}}}else"loaded"===a?(this._set("state","ready"),this._set("error",null)):(this._set("state","error"),
this._set("error",this.basemap.loadError))};a.prototype._cancelCompatibilityCheck=function(){this._lastCompatibilityCheck&&(this._lastCompatibilityCheck.cancel(),this._lastCompatibilityCheck=null)};d([c.property()],a.prototype,"basemap",null);d([c.property()],a.prototype,"compatibilityFunction",void 0);d([c.property({readOnly:!0})],a.prototype,"error",void 0);d([c.property({readOnly:!0})],a.prototype,"state",void 0);d([c.property()],a.prototype,"view",void 0);return a=d([c.subclass("mapgis.widgets.BasemapGallery.support.BasemapGalleryItem")],
a)}(c.declared(g))});