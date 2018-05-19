// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/declareExtendsHelper ../../../../../core/tsSupport/decorateHelper ../../../../../core/tsSupport/assignHelper dojo/has ../../../../../geometry ../../../../../core/Error ../../../../../core/Logger ../../../../../core/promiseUtils ../../../../../core/promiseUtils ../../../../../core/accessorSupport/decorators ../../../../../geometry/support/spatialReferenceUtils ../../../../../layers/graphics/data/FeatureSetReader ../../../../../layers/graphics/data/FeatureStore ../../../../../layers/support/FeatureProcessing ../../../../../tasks/operations/query ../../../../../tasks/support/QuantizationParameters ../../../../../tasks/support/Query ../../../ViewState ./BaseController ../../../tiling/TileInfoView ../../../tiling/TileQueue".split(" "),
function(h,r,x,l,t,y,z,A,B,C,u,m,v,D,E,F,G,H,p,I,q,J,K){Object.defineProperty(r,"__esModule",{value:!0});var L=B.getLogger("mapgis.views.2d.layers.features.controllers.OnDemandController"),w=(h=y("mapgis-featurelayer-webgl"))?"object"===typeof h&&null!=h.maxDrillLevel?h.maxDrillLevel:5:5,M=h?"object"===typeof h&&null!=h.maxRecordCountFactor?h.maxRecordCountFactor:1:1;q=function(h){function c(){var a=null!==h&&h.apply(this,arguments)||this;a.type="on-demand";a._queryInfoHash=null;a._processingInMainThread=
!1;a._promises=new Map;a._readers=new Map;return a}x(c,h);c.prototype.initialize=function(){var a=this;this._tileQueue=new K({tileInfoView:new J(this.tileStore.tileInfo),process:function(f){return a._fetchFeatureSet(f)}});this.handles.add(this.watch("processor",this._switchProcessor.bind(this)))};c.prototype.destroy=function(){this._promises.forEach(function(a){return a.cancel()});this._promises.clear();this.store&&(this.store.destroy(),this._set("store",null));this._readers.clear()};Object.defineProperty(c.prototype,
"processing",{get:function(){return F.fromWorker(this.configuration.processing)},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"updating",{get:function(){return 0<this._promises.size},enumerable:!0,configurable:!0});c.prototype.setViewState=function(a){this._tileQueue.pause();this._tileQueue.state=I.fromJSON(a);this._tileQueue.resume()};c.prototype.queryFeatures=function(a){return this.store.executeQuery(p.fromJSON(a))};c.prototype.queryFeatureCount=function(a){return this.store.executeQueryForCount(p.fromJSON(a))};
c.prototype.queryObjectIds=function(a){return this.store.executeQueryForIds(p.fromJSON(a))};c.prototype.queryExtent=function(a){return this.store.executeQueryForExtent(p.fromJSON(a))};c.prototype.tileAdded=function(a){this._fetchTile(a)};c.prototype.tileRemoved=function(a){var f=this._promises.get(a),b=this._readers.get(a);this._readers.delete(a);f&&(f.cancel(),this._promises.delete(a),this.notifyChange("updating"));b&&this.store.unload(b)};c.prototype._switchProcessor=function(a,f){this.handles.remove("processor");
var b=a.queryInfo,k=b.orderByFields,d=b.outFields;a=b.definitionExpression;f=b.gdbVersion;b=b.historicMoment;d&&d.sort();k&&k.sort();k=JSON.stringify({definitionExpression:a,outFields:d,orderByFields:k,gdbVersion:f,historicMoment:b});this._tileQueue.pause();this._queryInfoHash!==k&&(this._readers.clear(),this.store&&this.store.destroy(),this._set("store",new E.default({definitionExpression:a,fields:this.service.fields,geometryType:this.service.geometryType,objectIdField:this.service.objectIdField,
hasM:!1,hasZ:!1,spatialReference:this.spatialReference,cacheSpatialQueries:!0,gdbVersion:f,historicMoment:null!=b&&new Date(b)})),this._queryInfoHash=k);this._tileQueue.reset();a=0;for(f=this.tileStore.tiles;a<f.length;a++)k=f[a],this._tileQueue.has(k.key)||this._fetchTile(k);this._tileQueue.resume()};c.prototype._fetchTile=function(a){var f=this,b=this._tileQueue.push(a.key).then(function(b){f._cleanupPromise(a);f.processor.featureSetReady(a,b)}).catch(function(b){f._cleanupPromise(a);"cancel"!==
b.dojoType&&(f.processor.featureSetReady(a,null,b.message),L.error("query-error",{error:b}));return u.reject(b)});this._promises.set(a,b);this.notifyChange("updating")};c.prototype._fetchFeatureSet=function(a){var f=this,b=this.tileStore.findByKey(a),k=this._getQuantizationParameters(b),d=this.processor.queryInfo;a=d.pixelBuffer*b.resolution;var g=b.bounds.slice(),c=new Set;g[0]-=a;g[1]-=a;g[2]+=a;g[3]+=a;return this._readers.has(b)?this.store.executeQuery(this._createQuery(g,k,d)):this._drillQuery({geometryType:null,
features:null,fields:null,transform:null,spatialReference:null},c,g,d,k).then(function(a){var b=d.orderByFields;if(b){var b=b[0].split(" "),e=b[0];"DESC"===b[1]&&a.features.sort(function(a,b){return b.attributes[e]-a.attributes[e]})}return a}).then(function(a){return f._wrapPoints(a,d)}).then(function(a){return a.features.length?a:null}).then(function(a){var e=a?D.createFeatureSetReader(a):null;e&&f.store.load(e);f._readers.set(b,e);var c=f.service.objectIdField;if(a&&d.returnCentroid){var n=new Map,
e=f._createQuery(g,k,d);e.objectIds=[];for(var h=0,m=a.features;h<m.length;h++){var l=m[h];if(!l.centroid){var p=l.attributes[c];n.set(p,l);e.objectIds.push(p)}}return e.objectIds.length?f.store.executeQuery(e).then(function(b){var d=0;for(b=b.features;d<b.length;d++){var e=b[d];n.get(e.attributes[c]).centroid=e.centroid}return a}):a}return a})};c.prototype._drillQuery=function(a,f,b,k,d,g){var c=this;void 0===g&&(g=0);return this._query(b,k,d,g===w).then(function(e){if(!a.geometryType){a.fields=
e.fields;a.geometryType=e.geometryType;a.objectIdFieldName=e.objectIdFieldName;a.transform=e.transform;a.spatialReference=e.spatialReference;if(!e.exceededTransferLimit){a.features=e.features;return}a.features=[]}if(g<w&&e.exceededTransferLimit){g++;var h=(b[2]-b[0])/2,n=(b[3]-b[1])/2;e=[b[0]+h,b[1]+n,b[2],b[3]];var l=[b[0],b[1],b[2]-h,b[3]-n],m=[b[0]+h,b[1],b[2],b[3]-n];return C.all([c._drillQuery(a,f,[b[0],b[1]+n,b[2]-h,b[3]],k,d,g),c._drillQuery(a,f,e,k,d,g),c._drillQuery(a,f,l,k,d,g),c._drillQuery(a,
f,m,k,d,g)])}if("esriGeometryPoint"!==e.geometryType)for(h=c.service.objectIdField,n=0,e=e.features;n<e.length;n++)l=e[n],m=l.attributes[h],f.has(m)||(f.add(m),a.features.push(l));else a.features=a.features.concat(e.features.concat())}).then(function(){return a})};c.prototype._query=function(a,f,b,c){var d=this;void 0===c&&(c=!0);var g=this._createQuery(a,b,f,c);return G.executeQuery(this.service.source,g).then(function(a){return a.data}).then(function(a){return d._applyProcessing(a,g)})};c.prototype._createQuery=
function(a,f,b,c){void 0===c&&(c=!0);var d=new p,g=this.processor.queryInfo.historicMoment;d.maxRecordCountFactor=M;d.gdbVersion=this.processor.queryInfo.gdbVersion;d.historicMoment=null!=g?new Date(g):null;d.outFields=this.processor.queryInfo.outFields;d.where=this.processor.queryInfo.definitionExpression||"1\x3d1";d.geometry=z.Extent.fromJSON({xmin:a[0],ymin:a[1],xmax:a[2],ymax:a[3],spatialReference:this.spatialReference});this.service.capabilities.query.supportsQuantization?(d.quantizationParameters=
f,"esriGeometryPolyline"===this.service.geometryType&&(d.maxAllowableOffset=f.tolerance)):d.maxAllowableOffset=f.tolerance;d.resultType="tile";d.returnExceededLimitFeatures=c;d.returnGeometry=!0;d.returnCentroid=b.returnCentroid;d.orderByFields=b.orderByFields;return d};c.prototype._applyProcessing=function(a,f){var b=this.processing;if(!b)return a;if(this._processingInMainThread)return this.remoteClient.invoke("executeProcessing",{query:f.toJSON(),featureSet:JSON.stringify(a)}).then(function(a){return JSON.parse(a)});
try{var c=b.process(a,f,b.options);return c?c:u.reject(new A("FeatureLayer","invalid processing.process() method, returns nothing"))}catch(d){return this._processingInMainThread=!0,this.remoteClient.invoke("executeProcessing",{query:f.toJSON(),featureSet:JSON.stringify(a)}).then(function(a){return JSON.parse(a)})}};c.prototype._getQuantizationParameters=function(a){return H.default.fromJSON({mode:"view",originPosition:"upperLeft",tolerance:a.resolution,extent:{xmin:a.bounds[0],ymin:a.bounds[1],xmax:a.bounds[2],
ymax:a.bounds[3],spatialReference:this.spatialReference}})};c.prototype._wrapPoints=function(a,c){if(0===a.features.length)return a;var b=c.returnCentroid;c=c.pixelBuffer;var f=a.geometryType,d=a.spatialReference,g=a.transform;if("esriGeometryPoint"!==f&&"esriGeometryMultipoint"!==f&&!b||!v.isWrappable(d))return a;b=a.features;d=v.getInfo(d);g=Math.round((d.valid[1]-d.valid[0])/g.scale[0]);if(512===g){d=[];for(f=0;f<b.length;f++){var h=b[f],e=h.geometry,h=h.attributes;e&&(e.x<c?(e={geometry:t({},
e),attributes:h},e.geometry.x+=g,d.push(e)):e.x>512-c&&(e={geometry:t({},e),attributes:h},e.geometry.x-=g,d.push(e)))}b.push.apply(b,d)}else for(d=0;d<b.length;d++)if(e=b[d].geometry)e.x<-c?e.x+=g:e.x>512+c&&(e.x-=g);return a};c.prototype._cleanupPromise=function(a){this._promises.delete(a);this.notifyChange("updating")};l([m.property()],c.prototype,"configuration",void 0);l([m.property({readOnly:!0,dependsOn:["configuration"]})],c.prototype,"processing",null);l([m.property({readOnly:!0})],c.prototype,
"store",void 0);l([m.property()],c.prototype,"updating",null);return c=l([m.subclass()],c)}(m.declared(q.default));r.default=q});