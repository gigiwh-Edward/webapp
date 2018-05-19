// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/accessorSupport/decorators ./SceneViewAtmosphere ./SceneViewLighting ../../../webscene/Environment ../../../webscene/Lighting".split(" "),function(c,d,k,f,e,h,g,l,m){Object.defineProperty(d,"__esModule",{value:!0});c=function(c){function b(){var a=null!==c&&c.apply(this,arguments)||this;a.atmosphere=new h.default;a.atmosphereEnabled=!0;a.starsEnabled=!0;return a}k(b,c);d=b;Object.defineProperty(b.prototype,
"lighting",{set:function(a){if(a)if(this.lighting)null!=a.date&&(this.lighting.date=a.date),null!=a.defaultDate&&(this.lighting.defaultDate=a.defaultDate),null!=a.displayUTCOffset&&(this.lighting.displayUTCOffset=a.displayUTCOffset),this.lighting.directShadowsEnabled=a.directShadowsEnabled,null!=a.ambientOcclusionEnabled&&(this.lighting.ambientOcclusionEnabled=a.ambientOcclusionEnabled),null!=a.cameraTrackingEnabled&&(this.lighting.cameraTrackingEnabled=a.cameraTrackingEnabled);else if(a instanceof
g.default)this._set("lighting",a);else if(a instanceof m){var b={directShadowsEnabled:a.directShadowsEnabled};null!=a.date&&(b.date=a.date);null!=a.displayUTCOffset&&(b.displayUTCOffset=a.displayUTCOffset);null!=a.defaultDate&&(b.defaultDate=a.defaultDate);this._set("lighting",new g.default(b))}else this._set("lighting",new g.default(a));else this.lighting||this._set("lighting",new g.default)},enumerable:!0,configurable:!0});b.prototype.clone=function(){return new d({lighting:this.lighting.clone(),
atmosphere:this.atmosphere.clone(),atmosphereEnabled:this.atmosphereEnabled,starsEnabled:this.starsEnabled})};f([e.property({type:h.default,json:{read:!1}})],b.prototype,"atmosphere",void 0);f([e.property({type:Boolean,json:{read:!1}})],b.prototype,"atmosphereEnabled",void 0);f([e.property({type:Boolean,json:{read:!1}})],b.prototype,"starsEnabled",void 0);f([e.property()],b.prototype,"lighting",null);return b=d=f([e.subclass("mapgis.views.3d.environment.SceneViewEnvironment")],b);var d}(e.declared(l));
d.SceneViewEnvironment=c;d.default=c});