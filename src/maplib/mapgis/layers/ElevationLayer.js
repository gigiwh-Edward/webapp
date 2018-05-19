// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper dojo/_base/kernel dojo/_base/lang ../request ../core/Error ../core/promiseUtils ../core/urlUtils ../core/accessorSupport/decorators ../geometry/HeightModelInfo ./TiledLayer ./mixins/ArcGISCachedService ./mixins/ArcGISMapService ./mixins/OperationalLayer ./mixins/PortalLayer ./support/rasterFormats/LercCodec".split(" "),function(h,A,q,d,k,l,m,n,e,r,c,t,u,v,w,x,y,z){return function(p){function b(a){a=p.call(this)||
this;a.heightModelInfo=null;a.type="elevation";a.url=null;a.opacity=1;a.operationalLayerType="ArcGISTiledElevationServiceLayer";return a}q(b,p);b.prototype.normalizeCtorArgs=function(a,b){return"string"===typeof a?l.mixin({},{url:a},b):a};Object.defineProperty(b.prototype,"minScale",{get:function(){},set:function(a){k.deprecated(this.declaredClass+".minScale support has been removed.","","4.5")},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"maxScale",{get:function(){},set:function(a){k.deprecated(this.declaredClass+
".maxScale support has been removed.","","4.5")},enumerable:!0,configurable:!0});b.prototype.load=function(){var a=this;this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:function(a){for(var b=0;b<a.typeKeywords.length;b++)if("elevation 3d layer"===a.typeKeywords[b].toLowerCase())return!0;throw new n("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"});
}}).always(function(){return a._fetchImageService()}));return this.when()};b.prototype.fetchTile=function(a,b,c,g){var f=this;void 0===g&&(g=0);return this.load().then(function(){return f._fetchTileAvailability(a,b,c)}).then(function(){var g=f.getTileUrl(a,b,c);return m(g,{responseType:"array-buffer",failOk:!0})}).then(function(a){a=z.decode(a.data,{noDataValue:g,returnFileInfo:!0});return{values:a.pixelData,width:a.width,height:a.height,maxZError:a.fileInfo.maxZError,noDataValue:a.noDataValue}})};
b.prototype.queryElevation=function(a,b){var c=this;return e.create(function(a){return h(["./support/ElevationQuery"],a)}).then(function(f){return(new f.ElevationQuery).query(c,a,b)})};b.prototype.createElevationSampler=function(a,b){var c=this;return e.create(function(a){return h(["./support/ElevationQuery"],a)}).then(function(f){return(new f.ElevationQuery).createSampler(c,a,b)})};b.prototype.importLayerViewModule=function(a){switch(a.type){case "2d":return e.reject(new n("elevation-layer:view-not-supported",
"ElevationLayer is only supported in 3D"));case "3d":return e.create(function(a){return h(["../views/3d/layers/ElevationLayerView3D"],a)})}};b.prototype._fetchTileAvailability=function(a,b,c){return this.tilemapCache?this.tilemapCache.fetchAvailability(a,b,c):e.resolve("unknown")};b.prototype._fetchImageService=function(){var a=this;return e.resolve().then(function(){if(a.resourceInfo)return a.resourceInfo;var b={query:l.mixin({f:"json"},a.parsedUrl.query),responseType:"json",callbackParamName:"callback"};
return m(a.parsedUrl.path,b)}).then(function(b){b.ssl&&(a.url=a.url.replace(/^http:/i,"https:"));a.read(b.data,{origin:"service",url:a.parsedUrl})})};d([c.property({readOnly:!0,type:t})],b.prototype,"heightModelInfo",void 0);d([c.property({json:{read:!1,write:!1}})],b.prototype,"minScale",null);d([c.property({json:{read:!1,write:!1}})],b.prototype,"maxScale",null);d([c.property()],b.prototype,"resourceInfo",void 0);d([c.property({json:{read:!1},value:"elevation",readOnly:!0})],b.prototype,"type",
void 0);d([c.property({json:{origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,writer:r.writeOperationalLayerUrl}}}}})],b.prototype,"url",void 0);d([c.property({json:{read:!1,write:!1}})],b.prototype,"opacity",void 0);d([c.property()],b.prototype,"operationalLayerType",void 0);return b=d([c.subclass("mapgis.layers.ElevationLayer")],b)}(c.declared(u,w,v,x,y))});