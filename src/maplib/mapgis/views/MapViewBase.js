// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper dojo/_base/lang ../geometry ../Viewpoint ../core/Error ../core/Handles ../core/Logger ../core/promiseUtils ../core/accessorSupport/decorators ../geometry/support/webMercatorUtils ./View ./ViewAnimation ./2d/AnimationManager ./2d/FrameTask ./2d/MapViewConstraints ./2d/PaddedViewState ./2d/viewpointUtils".split(" "),function(F,G,x,f,n,g,q,r,y,z,t,d,m,A,B,C,D,u,E,k){var h=z.getLogger("mapgis.views.MapView");
return function(v){function c(a){var b=v.call(this,a)||this;b._frameTask=new D(b);b._mapViewBaseHandles=new y;b._setup=!1;b.fullOpacity=1;b.interacting=!1;b.initialExtent=null;b.resizeAlign="center";b.type="2d";b.constraints=new u;b.padding={top:0,right:0,bottom:0,left:0};var p=function(){this._set("updating",this.layerViewManager.factory.working||this.allLayerViews.some(function(a){return!0===a.updating}))}.bind(b),c=b._mapViewBaseHandles;c.add([b.watch("viewpoint",function(a){return b._flipStationary()},
!0),b.on("resize",function(a){return b._resizeHandler(a)}),b.watch("animationManager.animation",function(a){b.animation=a}),b.allLayerViews.on("change",function(){p();c.remove("layerViewsUpdating");c.add(b.allLayerViews.map(function(a){return a.watch("updating",p)}).toArray(),"layerViewsUpdating")})]);b.watch("ready",function(a){a?b._startup():b._tearDown()});return b}x(c,v);c.prototype.destroy=function(){this.destroyed||(this._set("ready",!1),this._mapViewBaseHandles.removeAll(),this.layerViewManager.clear(),
this._frameTask.destroy(),this._tearDown(),this._gotoTask=this._mapViewBaseHandles=this._frameTask=null)};Object.defineProperty(c.prototype,"animation",{set:function(a){var b=this,c=this._get("animation");a!==c&&(c&&c.stop(),!a||a.isFulfilled()?this._set("animation",null):(this._set("animation",a),c=function(){a===b._get("animation")&&(b._set("animation",null),b._frameTask.requestFrame())},a.when(c,c,function(a){b.state&&(b.state.viewpoint=a)})))},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,
"center",{get:function(){if(!this._setup)return this._get("center");var a=this.content.center;return new g.Point({x:a[0],y:a[1],spatialReference:this.content.spatialReference})},set:function(a){if(null!=a)if(this._normalizeInput(a))if(this._setup){var b=this.viewpoint;k.centerAt(b,b,a);this.viewpoint=b}else this._set("center",a),this.notifyChange("initialExtentRequired");else h.error("#center","incompatible spatialReference "+JSON.stringify(a.spatialReference)+" with view's spatialReference "+JSON.stringify(this.spatialReference))},
enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"constraints",{set:function(a){var b=this,c=this._get("constraints");c&&(this._mapViewBaseHandles.remove("constraints"),c.destroy());this._set("constraints",a);a&&(this._setup&&(a.view=this,this.state.viewpoint=a.fit(this.content.viewpoint)),this._mapViewBaseHandles.add(a.on("update",function(){b._setup&&b.state&&(b.state.viewpoint=a.fit(b.content.viewpoint))}),"constraints"))},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,
"extent",{get:function(){return this._setup?this.content.extent.clone():this._get("extent")},set:function(a){if(null!=a){var b=this._normalizeInput(a);b?b.width&&b.height?this._setup?(a=this.viewpoint,k.setExtent(a,a,b,this.size,{constraints:this.constraints}),this.viewpoint=a):(this._set("extent",b),this._set("center",null),this._set("viewpoint",null),this._set("scale",0),this._set("zoom",-1),this.notifyChange("initialExtentRequired")):h.error("#extent","invalid extent size"):h.error("#center","incompatible spatialReference "+
JSON.stringify(a.spatialReference)+" with view's spatialReference "+JSON.stringify(this.spatialReference))}},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"initialExtentRequired",{get:function(){var a=this.extent,b=this.center,c=this.scale,e=this.viewpoint,d=this.zoom;return this.get("map.initialViewProperties.viewpoint")||a||b&&(0!==c||-1!==d)||e?!1:!0},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"padding",{get:function(){return this._setup?this.state.padding:
this._get("padding")},set:function(a){this._setup?(this.state.padding=a,this._set("padding",this.state.padding)):this._set("padding",a)},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"rotation",{get:function(){return this._setup?this.content.rotation:this._get("rotation")},set:function(a){if(!isNaN(a))if(this._setup){var b=this.viewpoint;k.rotateTo(b,b,a);this.viewpoint=b}else this._set("rotation",a)},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"scale",{get:function(){return this._setup?
this.content.scale:this._get("scale")},set:function(a){if(a&&!isNaN(a))if(this._setup){var b=this.viewpoint;k.scaleTo(b,b,a);this.viewpoint=b}else{this._set("scale",a);this._set("zoom",-1);if(a=this._get("extent"))this._set("extent",null),this._set("center",a.center);this.notifyChange("initialExtentRequired")}},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"stationary",{get:function(){return!this.animation&&!this.interacting&&!this._get("resizing")&&!this._stationaryTimer},enumerable:!0,
configurable:!0});Object.defineProperty(c.prototype,"viewpoint",{get:function(){if(!this._setup)return this._get("viewpoint");var a=this.content;return a&&a.viewpoint.clone()},set:function(a){if(null!=a){var b=this._normalizeInput(a);b?this._setup?(a=k.create(),k.copy(a,b),this.constraints.constrain(a,this.content.viewpoint),this.state.viewpoint=a,this._frameTask.requestFrame(),this._set("viewpoint",a)):(this._set("viewpoint",b),this._set("extent",null),this._set("center",null),this._set("zoom",-1),
this._set("scale",0),this.notifyChange("initialExtentRequired")):!a.scale||isNaN(a.scale)?h.error("#viewpoint","invalid scale value of "+a.scale):a.targetGeometry?h.error("#viewpoint","incompatible spatialReference "+JSON.stringify(a.targetGeometry.spatialReference)+" with view's spatialReference "+JSON.stringify(this.spatialReference)):h.error("#viewpoint","geometry not defined")}},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"zoom",{get:function(){return this._setup?this.constraints.scaleToZoom(this.scale):
this._get("zoom")},set:function(a){if(null!=a){if(!this._setup){this.notifyChange("initialExtentRequired");this._set("zoom",a);this._set("scale",0);var b=this._get("extent");b&&(this._set("extent",null),this._set("center",b.center))}this.constraints.effectiveLODs&&(b=this.viewpoint,k.scaleTo(b,b,this.constraints.zoomToScale(a)),this.viewpoint=b,this._set("zoom",this.constraints.scaleToZoom(this.scale)))}},enumerable:!0,configurable:!0});c.prototype.goTo=function(a,b){this.animation&&(this.animation=
null);if(this._setup)return b=n.mixin({animate:!0},b),a=k.createAsync(a,this),this._gotoTask={},b.animate?this._gotoAnimated(a,b):this._gotoImmediate(a,b);h.error("#goTo()","MapView cannot be used before it is ready")};c.prototype.hitTest=function(a,b){return t.reject("Should be implemented by subclasses")};c.prototype.toMap=function(a,b,c){if(!this._setup)return null;a&&null!=a.x&&(c=b,b=a.y,a=a.x);var e=[0,0];this.state.toMap(e,[a,b]);c=c||new g.Point;c.x=e[0];c.y=e[1];c.spatialReference=this.spatialReference;
return c};c.prototype.isTileInfoRequired=function(){return!0};c.prototype.toScreen=function(a,b,c,e){if(!this._setup)return null;a&&"object"===typeof a?(e=b||new g.ScreenPoint,a=this._normalizeInput(a),b=a.y,a=a.x):e="number"===typeof c||null==c?e||new g.ScreenPoint:c||new g.ScreenPoint;a=[a,b];this.state.toScreen(a,a);e.x=a[0];e.y=a[1];return e};c.prototype.pixelSizeAt=function(a,b){if(!this._setup)return NaN;a&&null!=a.x&&(b=a.y,a=a.x);return this.content.pixelSizeAt([a,b])};c.prototype.requestLayerViewUpdate=
function(a){this._setup&&this._frameTask.requestLayerViewUpdate(a)};c.prototype.getDefaultSpatialReference=function(){return this.get("map.initialViewProperties.spatialReference")||this.get("defaultsFromMap.spatialReference")||null};c.prototype.isSpatialReferenceSupported=function(a,b){if(b||this._get("ready"))return!0;b=this._normalizeInput(this._get("center"),a);var c=this._normalizeInput(this._get("extent"),a),e=this._normalizeInput(this._get("viewpoint"),a),d=this._userSpatialReference,f=null,
w=null;(e=e&&e.targetGeometry)&&("extent"===e.type?f=e:"point"===e.type&&(w=e));e=this._normalizeInput(this.get("map.initialViewProperties.viewpoint.targetGeometry.extent"),a);a=this._normalizeInput(this.initialExtent,a);a=c||f||e||a;return b||w||a&&a.center?!0:(d&&h.error("The view could not be initialized with the spatialReference "+d.wkid+".","Try specifying an extent or a center and scale"),!1)};c.prototype._createOrReplaceAnimation=function(a){if(!this.animation||this.animation.done)this.animation=
new B;this.animation.update(a);return this.animation};c.prototype._cancellableGoTo=function(a,b,c){var e=this,p=c.then(function(){a===e._gotoTask&&(e.animation=null)}).catch(function(c){a===e._gotoTask&&(e.animation=null,b.done||b.stop());throw c;}),d=t.create(function(a){return a(p)},function(){a!==e._gotoTask||b.done||b.stop()});b.catch(function(){a===e._gotoTask&&d.cancel()});return d};c.prototype._gotoImmediate=function(a,b){var c=this,e=this._gotoTask,d=this._createOrReplaceAnimation(a);a=a.then(function(a){if(e!==
c._gotoTask)throw new r("view:goto-interrupted","Goto was interrupted");c.viewpoint=d.target=a;d.finish()});return this._cancellableGoTo(e,d,a)};c.prototype._gotoAnimated=function(a,b){var c=this,e=this._gotoTask,d=this._createOrReplaceAnimation(a);a=a.then(function(a){if(e!==c._gotoTask)throw new r("view:goto-interrupted","Goto was interrupted");d.update(a);c.animationManager.animate(d,c.viewpoint,b);return d.when().then(function(){})});return this._cancellableGoTo(e,d,a)};c.prototype._resizeHandler=
function(a){var b=this.state;if(b){var c=this.content.viewpoint,e=this.content.size.concat();b.size=[a.width,a.height];k.resize(c,c,e,this.content.size,this.resizeAlign);c=this.constraints.constrain(c,null);this.state.viewpoint=c}};c.prototype._startup=function(){if(!this._setup){var a=this.constraints,b=this._get("zoom"),c=this._get("scale"),e=this._normalizeInput(this._get("center")),d=this._normalizeInput(this._get("extent")),f=this._get("rotation"),g=this._normalizeInput(this._get("viewpoint"));
a.view=this;a.effectiveLODs?-1!==b&&(c=a.zoomToScale(b)):b=-1;var h=null,m=null,n=0,b=g&&g.rotation,l=g&&g.targetGeometry;l&&("extent"===l.type?h=l:"point"===l.type&&(m=l,n=g.scale));g=this._normalizeInput(this.get("map.initialViewProperties.viewpoint.targetGeometry.extent"));l=this._normalizeInput(this.initialExtent);d=d||h||g||l;e=e||m||d&&d.center;c=c||n||d&&k.extentToScale(d,this.size);f=new q({targetGeometry:e,scale:c,rotation:f||b||0});a.fit(f);this._set("animationManager",new C);this._set("state",
new E({padding:this._get("padding"),size:this.size,viewpoint:f}));this._set("content",this.state.content);this._setup=!0}};c.prototype._tearDown=function(){if(this._setup){this._setup=!1;this._stationaryTimer&&(clearTimeout(this._stationaryTimer),this._stationaryTimer=null,this.notifyChange("stationary"));var a=this._get("content"),b=a.center,c=a.spatialReference,b=new g.Point({x:b[0],y:b[1],spatialReference:c});this._set("viewpoint",null);this._set("extent",null);this._set("center",b);this._set("zoom",
-1);this._set("rotation",a.rotation);this._set("scale",a.scale);this._set("spatialReference",c);this.constraints.view=null;this.animationManager.destroy();this._set("animationManager",null);this._set("state",null);this._set("content",null);this.animation=null}};c.prototype._flipStationary=function(){var a=this;this._stationaryTimer&&clearTimeout(this._stationaryTimer);this._stationaryTimer=setTimeout(function(){a._stationaryTimer=null;a.notifyChange("stationary")},160);this.notifyChange("stationary")};
c.prototype._normalizeInput=function(a,b){void 0===b&&(b=this.spatialReference);var c=a&&a.targetGeometry||a;return b?c?b.equals(c.spatialReference)?a:m.canProject(c,b)?a&&"mapgis.Viewpoint"===a.declaredClass?(a.targetGeometry=m.project(c,b),a):m.project(c,b):null:null:a};f([d.property()],c.prototype,"animation",null);f([d.property({readOnly:!0})],c.prototype,"animationManager",void 0);f([d.property({value:null,type:g.Point,dependsOn:["content.center"]})],c.prototype,"center",null);f([d.property({type:u})],
c.prototype,"constraints",null);f([d.property({readOnly:!0})],c.prototype,"content",void 0);f([d.property({value:null,type:g.Extent,dependsOn:["content.extent"]})],c.prototype,"extent",null);f([d.property()],c.prototype,"fullOpacity",void 0);f([d.property({readOnly:!0})],c.prototype,"interacting",void 0);f([d.property({type:g.Extent})],c.prototype,"initialExtent",void 0);f([d.property({dependsOn:["map.initialViewProperties.viewpoint"]})],c.prototype,"initialExtentRequired",null);f([d.property({value:{top:0,
right:0,bottom:0,left:0},cast:function(a){return n.mixin({top:0,right:0,bottom:0,left:0},a)}})],c.prototype,"padding",null);f([d.property()],c.prototype,"resizeAlign",void 0);f([d.property({value:0,type:Number,dependsOn:["content.rotation"]})],c.prototype,"rotation",null);f([d.property({value:0,type:Number,dependsOn:["content.scale"]})],c.prototype,"scale",null);f([d.property({type:g.SpatialReference,dependsOn:["map.initialViewProperties.spatialReference","defaultsFromMap.isSpatialReferenceDone"]})],
c.prototype,"spatialReference",void 0);f([d.property({readOnly:!0})],c.prototype,"state",void 0);f([d.property()],c.prototype,"stationary",null);f([d.property({readOnly:!0})],c.prototype,"type",void 0);f([d.property({value:null,type:q,dependsOn:["content.viewpoint"]})],c.prototype,"viewpoint",null);f([d.property({value:-1,dependsOn:["content.scale"]})],c.prototype,"zoom",null);return c=f([d.subclass("mapgis.views.MapViewBase")],c)}(d.declared(A))});