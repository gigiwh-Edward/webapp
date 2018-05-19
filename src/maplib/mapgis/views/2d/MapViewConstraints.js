// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Accessor ../../core/Evented ../../core/accessorSupport/decorators ../../layers/support/LOD ./constraints/RotationConstraint ./constraints/ZoomConstraint".split(" "),function(n,p,h,d,k,l,b,m,f,g){return function(e){function a(){var c=null!==e&&e.apply(this,arguments)||this;c.enabled=!0;c.lods=null;c.minScale=0;c.maxScale=0;c.minZoom=-1;c.maxZoom=-1;c.rotationEnabled=!0;c.snapToZoom=!0;return c}
h(a,e);a.prototype.initialize=function(){this.watch("_zoom, _rotation",this.emit.bind(this,"update"),!0)};a.prototype.destroy=function(){this.view=null;this._set("_zoom",null);this._set("_rotation",null)};Object.defineProperty(a.prototype,"_rotation",{get:function(){return new f({rotationEnabled:this.rotationEnabled})},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"_defaultLODs",{get:function(){var c=this.get("view.defaultsFromMap.tileInfo"),a=this.get("view.spatialReference");
return c&&a&&c.spatialReference.equals(a)?c.lods:null},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"_zoom",{get:function(){return new g({lods:this.lods||this._defaultLODs,minZoom:this.minZoom,maxZoom:this.maxZoom,minScale:this.minScale,maxScale:this.maxScale,snapToZoom:this.snapToZoom})},enumerable:!0,configurable:!0});a.prototype.canZoomInTo=function(a){var c=this.effectiveMaxScale;return 0===c||a>=c};a.prototype.canZoomOutTo=function(a){var c=this.effectiveMinScale;return 0===
c||a<=c};a.prototype.constrain=function(a,b){if(!this.enabled)return a;this._zoom.constrain(a,b);this._rotation.constrain(a,b);return a};a.prototype.fit=function(a){if(!this.enabled||!this.snapToZoom)return a;this._zoom.fit(a);return a};a.prototype.zoomToScale=function(a){return this._zoom.zoomToScale(a)};a.prototype.scaleToZoom=function(a){return this._zoom.scaleToZoom(a)};a.prototype.snapScale=function(a){return this._zoom.snapToClosestScale(a)};a.prototype.snapToNextScale=function(a){return this._zoom.snapToNextScale(a)};
a.prototype.snapToPreviousScale=function(a){return this._zoom.snapToPreviousScale(a)};d([b.property({readOnly:!0,aliasOf:"_zoom.effectiveLODs"})],a.prototype,"effectiveLODs",void 0);d([b.property({readOnly:!0,aliasOf:"_zoom.effectiveMinScale"})],a.prototype,"effectiveMinScale",void 0);d([b.property({readOnly:!0,aliasOf:"_zoom.effectiveMaxScale"})],a.prototype,"effectiveMaxScale",void 0);d([b.property({readOnly:!0,aliasOf:"_zoom.effectiveMinZoom"})],a.prototype,"effectiveMinZoom",void 0);d([b.property({readOnly:!0,
aliasOf:"_zoom.effectiveMaxZoom"})],a.prototype,"effectiveMaxZoom",void 0);d([b.property()],a.prototype,"enabled",void 0);d([b.property({type:[m]})],a.prototype,"lods",void 0);d([b.property()],a.prototype,"minScale",void 0);d([b.property()],a.prototype,"maxScale",void 0);d([b.property()],a.prototype,"minZoom",void 0);d([b.property()],a.prototype,"maxZoom",void 0);d([b.property()],a.prototype,"rotationEnabled",void 0);d([b.property()],a.prototype,"snapToZoom",void 0);d([b.property()],a.prototype,"view",
void 0);d([b.property({type:f,dependsOn:["rotationEnabled"]})],a.prototype,"_rotation",null);d([b.property({dependsOn:["view.spatialReference","view.defaultsFromMap.tileInfo"]})],a.prototype,"_defaultLODs",null);d([b.property({readOnly:!0,type:g,dependsOn:"lods minZoom maxZoom minScale maxScale snapToZoom _defaultLODs".split(" ")})],a.prototype,"_zoom",null);return a=d([b.subclass("mapgis.views.2d.MapViewConstraints")],a)}(b.declared(k,l))});