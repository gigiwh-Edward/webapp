// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/promiseUtils ../../../core/accessorSupport/decorators ../engine/DOMContainer ./LayerView2D ./support/FeaturesView2D".split(" "),function(n,p,g,h,e,f,k,l,m){return function(d){function b(){var a=null!==d&&d.apply(this,arguments)||this;a._popupTemplates=new Map;a.container=new k;a.featuresViews=[];return a}g(b,d);b.prototype.hitTest=function(a,b){var c=this;if(this.suspended||!this.featuresViews.length)return e.resolve();
var d=this.featuresViews.map(function(c){return c.hitTest(a,b)});return e.all(d).then(function(a){return a.filter(function(a,b){a&&(a.popupTemplate=c._popupTemplates.get(c.featuresViews[b]),a.layer=c.layer,a.sourceLayer=c.layer);return!!a})[0]||null})};b.prototype.update=function(a){};b.prototype.attach=function(){var a=this;this.layer.featureCollections.forEach(function(b){var c=new m;c.graphics=b.source;c.mapView=a.view;c.renderer=b.renderer;a._popupTemplates.set(c,b.popupTemplate);a.featuresViews.push(c);
a.container.addChild(c.container)})};b.prototype.detach=function(){this.container.removeAllChildren();this.featuresViews.forEach(function(a){a.graphics=null;a.mapView=null;a=a.renderer=null});this._popupTemplates=null};b.prototype.moveStart=function(){};b.prototype.viewChange=function(){};b.prototype.moveEnd=function(){};return b=h([f.subclass("mapgis.views.2d.layers.MapNotesLayerView2D")],b)}(f.declared(l))});