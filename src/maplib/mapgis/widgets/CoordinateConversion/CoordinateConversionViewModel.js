// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper dojo/has dojo/_base/config ../../Graphic ../../core/Accessor ../../core/Collection ../../core/Error ../../core/Evented ../../core/Handles ../../core/Logger ../../core/promiseUtils ../../core/watchUtils ../../core/accessorSupport/decorators ../../geometry/coordinateFormatter ../../geometry/Point ../../geometry/SpatialReference ../../geometry/support/webMercatorUtils ../../portal/support/geometryServiceUtils ../../symbols/PictureMarkerSymbol ./support/Conversion ./support/coordinateConversionUtils".split(" "),
function(B,O,C,k,D,E,F,G,v,l,H,I,J,h,u,d,m,w,p,K,L,M,x,g){var N=new w([0,0,500]),y=window.location.pathname+"__coordinateConversionWidgetState",q=J.getLogger("mapgis.widgets.CoordinateConversion.CoordinateConversionViewModel"),z=0,t=[];return function(A){function c(a){a=A.call(this,a)||this;a._conversionPromise=null;a._formatterAvailable=!1;a._handles=new I;a._locationGraphic=null;a._geometryServicePromise=null;a._locale=E.locale;a._pointerCount=0;a.conversions=new v([]);a.formats=new v(g.generateDefaultFormats());
a.requestDelay=300;a.locationSymbol=new M({url:B.toUrl(D("trident")?"../../images/search/search-symbol-32.png":"../../images/search/search-symbol-32.svg"),size:12,width:12,height:12});a.view=null;a._instanceNumber=z;z++;a._saveWidgetState=a._saveWidgetState.bind(a);a._handleFormatChange=a._handleFormatChange.bind(a);a._handleConversionChange=a._handleConversionChange.bind(a);a._handleViewChange=a._handleViewChange.bind(a);a._onClick=a._onClick.bind(a);a._onPointerMove=a._onPointerMove.bind(a);a._onPointerDown=
a._onPointerDown.bind(a);a._onPointerUp=a._onPointerUp.bind(a);return a}C(c,A);c.prototype.initialize=function(){var a=this;this._loadWidgetState();this.formats.forEach(function(b){a._handles.add(b.watch("currentPattern",a._saveWidgetState),b.name)});this._handles.add(this.conversions.on("change",this._handleConversionChange),"conversions");this._handles.add(this.formats.on("change",this._handleFormatChange),"formats");this._handles.add(u.init(this,"view.map",function(b){a._geometryServicePromise=
L.create(a.get("view.map.portalItem"))}),"view-change");m.isSupported()?m.load().then(function(){a._formatterAvailable=!0}).catch(function(b){q.error(new l("coordinate-conversion:formatter-load-failed","Failed to load the coordinateFormatter.",{error:b}));a._formatterAvailable=!1}).always(function(){return a._handles.add(u.init(a,"view",a._handleViewChange),"view-change")}):(this._formatterAvailable=!1,this._handles.add(u.init(this,"view",this._handleViewChange),"view-change"));if(0===this.conversions.length){var b=
this.formats.find(function(a){return"xy"===a.name})||this.formats.getItemAt(0);this.conversions.add(new x({format:b}))}};c.prototype.destroy=function(){this._handles.removeAll();this._cleanUpView(this.view);this.view=null};Object.defineProperty(c.prototype,"currentLocation",{get:function(){return this._get("currentLocation")||null},set:function(a){this._set("currentLocation",a);this._updateConversions()},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"mode",{get:function(){return this._get("mode")||
"live"},set:function(a){switch(a){case "capture":this.currentLocation=null;this._startCaptureMode();this._set("mode",a);break;case "live":this._startLiveMode(),this._set("mode",a)}},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"state",{get:function(){var a=this.get("view");return this.get("view.ready")?"ready":a?"loading":"disabled"},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"waitingForConversions",{get:function(){var a=this._conversionPromise;return a?
!a.isFulfilled():!1},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"_debouncedConvert",{get:function(){var a=this;return g.debounceDeferred(function(b,c){return h.eachAlways(b.map(function(b){return a._convertServer(b,c)}))},this,this.requestDelay)},enumerable:!0,configurable:!0});c.prototype.setLocation=function(a){this.view.graphics.remove(this._locationGraphic);a&&(a=a.clone(),a.hasZ&&(a.z=void 0),this._locationGraphic=new F({geometry:a,symbol:this.get("locationSymbol")}),this.view.graphics.add(this._locationGraphic))};
c.prototype.convert=function(a,b){return g.isValidPoint(b)?"client"===this._determineConversionStrategy(a,b.spatialReference)?this._convertClient(a,b):this._convertServer(a,b):h.reject(new l("coordinate-conversion:invalid-point","Invalid point cannot be converted.",{point:b}))};c.prototype.goToLocation=function(a){if(this.get("view.clippingArea")||0<this.get("view.map.basemap.baseLayers.length")){var b=this.get("view.clippingArea")||this.view.map.basemap.baseLayers.getItemAt(0).fullExtent;return b?
b.contains(a)?this.view.goTo({target:a}):h.reject(new l("coordinate-conversion:go-to-failed","Point outside basemap extent.",{point:a})):this.view.goTo({target:a})}return this.view.goTo({target:a})};c.prototype.isSupportedNotation=function(a){return"dd"===a||"dms"===a||"ddm"===a||"mgrs"===a||"usng"===a||"utm"===a};c.prototype.pause=function(){this.currentLocation=null;this._handles.remove("view");this.view&&(this.view.cursor="default",this.view.graphics.remove(this._locationGraphic))};c.prototype.previewConversion=
function(a,b){void 0===b&&(b=this.currentLocation||N);return this._convertMany([a],b).then(function(b){return a.displayCoordinate})};c.prototype.resume=function(){"capture"===this.mode?this._startCaptureMode():this._startLiveMode()};c.prototype.reverseConvert=function(a,b,c){void 0===c&&(c=this.get("view.spatialReference")||p.WGS84);var n=b.name,r=b.parseUserInput(a),f=b.get("conversionInfo.reverseConvert"),d;if(f)d=f(a,n);else if("xy"===n)d=g.fromXY(r);else if("basemap"===n)d=g.fromXY(r,c);else if(this.isSupportedNotation(n)&&
this._formatterAvailable)d=this._reverseConvert(b,r);else if(this.isSupportedNotation(n))return g.fromGeoCoordinateString({formatName:n,coordinate:r,spatialReference:c,geometryServicePromise:this._geometryServicePromise});return d?g.project({location:d,spatialReference:c,geometryServicePromise:this._geometryServicePromise}).then(function(a){return a.location.normalize()}):h.reject(new l("coordinate-conversion:input-parse-failed","Failed to parse input.",{input:a}))};c.prototype.updateConversions=
function(a,b){return b&&b.type&&"point"===b.type?this._convertMany(a,b).then(function(a){return a.client.concat(a.server)}):(this._clearConversions(this.conversions),h.reject(new l("coordinate-conversion:invalid-input-point","Point is invalid, conversions cannot be updated.",{point:b})))};c.prototype._cleanUpView=function(a){a&&(a.graphics.remove(this._locationGraphic),this._handles.remove("view"),this.view.cursor="default")};c.prototype._clearConversions=function(a){a.forEach(function(a){a.position=
{location:null,coordinate:null}})};c.prototype._convertClient=function(a,b){var c=a.name,e=b.spatialReference.isWebMercator?K.webMercatorToGeographic(b):b,r=g.getDegreePrecision(this.get("view.scale")),f={location:b,coordinate:null};if(a.get("conversionInfo.convert"))return(f=a.convert(b))?h.resolve(f):h.reject(new l("coordinate-conversion:could-not-convert-client","Custom convert method failed.",{format:a}));switch(c){case "basemap":f.coordinate=g.pointToCoordinate(f.location,this.get("view.scale"));
break;case "xy":f.location=e;f.coordinate=g.pointToCoordinate(e,this.get("view.scale"));break;case "dd":case "ddm":case "dms":f.coordinate=m.toLatitudeLongitude(e,c,r);break;case "mgrs":f.coordinate=m.toMgrs(e,"automatic",5,!1);break;case "usng":f.coordinate=m.toUsng(e,5,!1);break;case "utm":f.coordinate=m.toUtm(e,"latitude-band-indicators",!0);break;default:f=null}return f?h.resolve(f):h.reject(new l("coordinate-conversion:could-not-convert-client","Unsupported format in client mode.",{format:a}))};
c.prototype._convertMany=function(a,b){var c=this;a=this._sortConversions(a,b.spatialReference);var e=a.server;a=h.all(a.client.map(function(a){return c._convertClient(a.format,b).then(function(b){a.position=b;return a}).catch(function(b){q.error(b);return a})}));this._conversionPromise=0<e.length?this._debouncedConvert(e.map(function(a){return a.format}),b).always(function(a){if(!a)return[];c.notifyChange("waitingForConversions");return a.map(function(a,b){b=e[b];if(a.error)return q.error(a.error),
b;b.position=a.value;return b})}):h.resolve([]);this.waitingForConversions||this.notifyChange("waitingForConversions");return h.all([a,this._conversionPromise]).then(function(a){return{client:a[0],server:a[1]}})};c.prototype._convertServer=function(a,b){var c=this,e=a.name;if(a.get("conversionInfo.convertDeferred"))b=a.convertDeferred(b);else if("basemap"===e)b=g.project({location:b,spatialReference:this.get("view.spatialReference"),geometryServicePromise:this._geometryServicePromise,scale:this.get("view.scale")});
else if("xy"===e)b=g.project({location:b,spatialReference:p.WGS84,geometryServicePromise:this._geometryServicePromise,scale:this.get("view.scale")});else if(this.isSupportedNotation(e)&&!this._formatterAvailable)b=g.toGeoCoordinateString({location:b,formatName:e,geometryServicePromise:this._geometryServicePromise});else if(this.isSupportedNotation(e)&&this._formatterAvailable)b=g.project({location:b,spatialReference:p.WGS84,geometryServicePromise:this._geometryServicePromise,scale:this.get("view.scale")}).then(function(b){return c._convertClient(a,
b.location)});else if(a.get("conversionInfo.spatialReference"))b=g.project({location:b,spatialReference:a.conversionInfo.spatialReference,geometryServicePromise:this._geometryServicePromise,scale:this.get("view.scale")});else return h.reject(new l("coordinate-conversion:could-not-convert-server","Unsupported format in server mode.",{format:a}));return b};c.prototype._determineConversionStrategy=function(a,b){var c=a.name,e=this.get("view.spatialReference.isWebMercator")||this.get("view.spatialReference.isWGS84"),
d=this._formatterAvailable,f=this.isSupportedNotation(c);return a.get("conversionInfo.convert")?"client":a.get("conversionInfo.convertDeferred")?"server":b.isGeographic&&b.wkt&&d&&f?"client":"xy"===c?e?"client":"server":"basemap"===c?b.wkid===this.get("view.spatialReference.wkid")||(b.isWebMercator||b.isWGS84)&&e?"client":"server":d&&f&&e?"client":"server"};c.prototype._handleConversionChange=function(a){var b=this;a.added.forEach(function(a){var c=a.format;b.currentLocation&&b.convert(c,b.currentLocation).then(function(b){a.position=
b})});this._saveWidgetState()};c.prototype._handleFormatChange=function(a){var b=this;a.added.forEach(function(a){b._handles.add(a.watch("currentPattern",b._saveWidgetState),a.name)});a.removed.forEach(function(a){b._handles.remove(a.name)})};c.prototype._loadWidgetState=function(){if(0===this._instanceNumber)try{var a=JSON.parse(localStorage.getItem(y));a&&(t=a)}catch(b){q.error(new l("coordinate-conversion:invalid-local-storage-json","Could not read from localStorge.",{error:b}))}this._setWidgetState()};
c.prototype._reverseConvert=function(a,b){switch(a.name){case "dd":case "dms":case "ddm":return m.fromLatitudeLongitude(b);case "mgrs":return m.fromMgrs(b,p.WGS84,"automatic");case "usng":return m.fromUsng(b,p.WGS84);case "utm":return b=b.replace(/\ /g,""),m.fromUtm(b,p.WGS84,"latitude-band-indicators");default:return null}};c.prototype._startCaptureMode=function(){this._handles.remove("view");this.view&&(this.view.cursor="crosshair",this.currentLocation&&this.setLocation(this.currentLocation),this._handles.add(this.view.on("click",
this._onClick),"view"))};c.prototype._startLiveMode=function(){this._pointerCount=0;this._handles.remove("view");this.view&&(this.view.cursor="default",this.view.graphics.remove(this._locationGraphic),this._handles.add([this.view.on("pointer-down",this._onPointerDown),this.view.on("pointer-up",this._onPointerUp),this.view.on("pointer-move",this._onPointerMove)],"view"))};c.prototype._handleViewChange=function(a,b){b&&b!==a&&this._cleanUpView(b);a&&("capture"===this.mode&&this._startCaptureMode(),
this._startLiveMode())};c.prototype._onClick=function(a){0===a.button&&(a=(a=this.view.toMap(a))&&a.normalize(),this.setLocation(a),this.currentLocation=a)};c.prototype._onPointerDown=function(a){var b=a.pointerType;this._pointerCount++;"touch"!==b&&"pen"!==b||1!==this._pointerCount||(this.currentLocation=(a=this.view.toMap(a))&&a.normalize())};c.prototype._onPointerMove=function(a){if("mouse"===a.pointerType||1===this._pointerCount)this.currentLocation=(a=this.view.toMap(a))&&a.normalize()};c.prototype._onPointerUp=
function(a){this._pointerCount--};c.prototype._setWidgetState=function(){var a=this,b=t[this._instanceNumber];try{b.formats.forEach(function(c){var e=a.formats.find(function(a){return a.name===c.name});b.locale===a._locale&&c.currentPattern&&(e.currentPattern=c.currentPattern);0<=c.index&&a.conversions.add(new x({format:a.formats.find(function(a){return a.name===c.name})}))})}catch(n){q.warn(new l("coordinate-conversion:local-storage-read-error","Could not get widget state from stored JSON.",{error:n})),
t[this._instanceNumber]={formats:[],locale:this._locale}}};c.prototype._sortConversions=function(a,b){var c=this;return a.reduce(function(a,d){"client"===c._determineConversionStrategy(d.format,b)?a.client.push(d):a.server.push(d);return a},{server:[],client:[]})};c.prototype._saveWidgetState=function(){var a=this._toJSON();t[this._instanceNumber]={formats:a,locale:this._locale};try{localStorage.setItem(y,JSON.stringify(t))}catch(b){q.error(new l("coordinate-conversion:local-storage-write-error",
"Could not write to localStorage.",{error:b}))}};c.prototype._updateConversions=function(){var a=this.conversions.toArray();return this.updateConversions(a,this.currentLocation)};c.prototype._toJSON=function(){var a=this;return this.formats.filter(function(b){b=b.name;return"xy"===b||"basemap"===b||a.isSupportedNotation(b)}).map(function(b){return{name:b.name,currentPattern:b.currentPattern,index:a.conversions.findIndex(function(a){return a.format===b})}}).sort(function(a,c){return a.index-c.index}).toArray()};
k([d.property()],c.prototype,"conversions",void 0);k([d.property({type:w})],c.prototype,"currentLocation",null);k([d.property()],c.prototype,"formats",void 0);k([d.property()],c.prototype,"mode",null);k([d.property()],c.prototype,"requestDelay",void 0);k([d.property({dependsOn:["view.ready"],readOnly:!0})],c.prototype,"state",null);k([d.property()],c.prototype,"locationSymbol",void 0);k([d.property({readOnly:!0})],c.prototype,"waitingForConversions",null);k([d.property()],c.prototype,"view",void 0);
k([d.property({readOnly:!0,dependsOn:["requestDelay"]})],c.prototype,"_debouncedConvert",null);return c=k([d.subclass("mapgis.widgets.CoordinateConversion.CoordinateConversionViewModel")],c)}(d.declared(G,H))});