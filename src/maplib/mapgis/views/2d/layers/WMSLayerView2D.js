// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../core/tsSupport/decorateHelper dojo/_base/lang ../../../core/Handles ../../../core/accessorSupport/decorators ../../../geometry/Extent ../../../layers/support/ExportWMSImageParameters ../engine/BitmapSource ../engine/Canvas2DContainer ./LayerView2D ./support/ExportStrategy ../../layers/RefreshableLayerView".split(" "),function(B,C,p,q,r,t,f,u,v,w,x,y,z,A){return function(c){function b(){var a=null!==c&&c.apply(this,arguments)||
this;a._handles=new t;a.container=new x;return a}p(b,c);b.prototype.hitTest=function(a,b){return null};b.prototype.getPopupData=function(a){var b=this;a=a.center;if(!this.layer.popupEnabled)return null;var k=a.x,e=a.y,d=null,h=0,c=0;this.container.children.some(function(a){var m=a.width,f=a.height,g=a.resolution,l=a.x;a=a.y;var n=l+g*m,g=a-g*f;return k>=l&&k<=n&&e<=a&&e>=g?(d=new u({xmin:l,ymin:g,xmax:n,ymax:a,spatialReference:b.view.spatialReference}),h=m,c=f,!0):!1});return d&&h&&c?(a=d.width/h,
(a=this.layer.fetchFeatureInfo(d,h,c,Math.round((k-d.xmin)/a),Math.round((d.ymax-e)/a)))&&a.then(function(a){return[a]})):null};b.prototype.update=function(a){this.strategy.update(a);this.notifyChange("updating")};b.prototype.attach=function(){var a=this,b=this.layer,c=b.imageMaxHeight,b=b.imageMaxWidth;this.strategy=new z({container:this.container,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:c,imageMaxWidth:b,imageRotationSupported:!1,imageNormalizationSupported:!1,
hidpi:!1});this._exportWMSImageParameters=new v({layer:this.layer});this._handles.add(this._exportWMSImageParameters.watch("version",function(b){a._exportImageVersion!==b&&(a._exportImageVersion=b,a._exportWMSImageParameters.layers?a.requestUpdate():a.container.removeAllChildren())}))};b.prototype.detach=function(){this.container.removeAllChildren();this.strategy.destroy();this._handles.removeAll();this._exportWMSImageParameters.layer=null;this._exportWMSImageParameters.destroy();this._exportWMSImageParameters=
null};b.prototype.moveStart=function(){};b.prototype.viewChange=function(){};b.prototype.moveEnd=function(){this.requestUpdate()};b.prototype.doRefresh=function(){this.requestUpdate()};b.prototype.isUpdating=function(){return this.attached&&(this.strategy.updating||this.updateRequested)};b.prototype.fetchImage=function(a,b,c,e){var d=this;e=r.mixin({timestamp:this.refreshTimestamp},e);return this.layer.fetchImage(a,b,c,e).then(function(a){d.notifyChange("updating");return new w.default(a)})};return b=
q([f.subclass("mapgis.views.2d.layers.WMSLayerView2D")],b)}(f.declared(y,A))});