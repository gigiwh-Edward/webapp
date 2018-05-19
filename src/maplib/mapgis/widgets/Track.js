// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper dojo/i18n!./Track/nls/Track ../core/accessorSupport/decorators ./Widget ./Track/TrackViewModel ./support/widget".split(" "),function(n,p,l,d,g,c,m,h,f){return function(k){function b(a){a=k.call(this)||this;a.geolocationOptions=null;a.goToLocationEnabled=null;a.graphic=null;a.iconClass="mapgis-icon-tracking";a.label=g.widgetLabel;a.scale=null;a.tracking=null;a.useHeadingEnabled=null;a.view=null;a.viewModel=
new h;return a}l(b,k);b.prototype.start=function(){};b.prototype.stop=function(){};b.prototype.render=function(){var a=this.get("viewModel.state"),b=(c={},c["mapgis-disabled"]="disabled"===a,c["mapgis-hidden"]="feature-unsupported"===a,c),d="tracking"===a,c=(e={},e["mapgis-icon-tracking"]=!d&&"waiting"!==a,e["mapgis-icon-pause"]=d,e["mapgis-rotating"]="waiting"===a,e["mapgis-icon-loading-indicator"]="waiting"===a,e),e=d?g.stopTracking:g.startTracking;return f.tsx("div",{bind:this,class:"mapgis-track mapgis-widget-button mapgis-widget",
classes:b,hidden:"feature-unsupported"===a,onclick:this._toggleTracking,onkeydown:this._toggleTracking,role:"button",tabIndex:0,"aria-label":e,title:e},f.tsx("span",{classes:c,"aria-hidden":"true",class:f.join("mapgis-icon","mapgis-icon-tracking")}),f.tsx("span",{class:"mapgis-icon-font-fallback-text"},e));var c,e};b.prototype._toggleTracking=function(){var a=this.viewModel;a&&(a.tracking?this.viewModel.stop():this.viewModel.start())};d([c.aliasOf("viewModel.geolocationOptions")],b.prototype,"geolocationOptions",
void 0);d([c.aliasOf("viewModel.goToLocationEnabled")],b.prototype,"goToLocationEnabled",void 0);d([c.aliasOf("viewModel.graphic")],b.prototype,"graphic",void 0);d([c.property()],b.prototype,"iconClass",void 0);d([c.property()],b.prototype,"label",void 0);d([c.aliasOf("viewModel.scale")],b.prototype,"scale",void 0);d([c.aliasOf("viewModel.tracking")],b.prototype,"tracking",void 0);d([c.aliasOf("viewModel.useHeadingEnabled")],b.prototype,"useHeadingEnabled",void 0);d([c.aliasOf("viewModel.view"),f.renderable()],
b.prototype,"view",void 0);d([c.property({type:h}),f.renderable("viewModel.state"),f.vmEvent(["track","track-error"])],b.prototype,"viewModel",void 0);d([c.aliasOf("viewModel.start")],b.prototype,"start",null);d([c.aliasOf("viewModel.stop")],b.prototype,"stop",null);d([f.accessibleHandler()],b.prototype,"_toggleTracking",null);return b=d([c.subclass("mapgis.widgets.Track")],b)}(c.declared(m))});