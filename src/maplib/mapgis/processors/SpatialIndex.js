// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define(["../core/declare","dojo/Deferred","dojo/_base/lang","./Processor","../workers/WorkerClient"],function(n,k,p,q,l){return n([q],{declaredClass:"mapgis.processors.SpatialIndex",index:null,indexType:"rtree",autostart:!1,constructor:function(a){a=a||{};var b=!1!==a.autostart;p.mixin(this,a);this.workerCallback=["./scripts/helpers","./scripts/indexInterface","./indexWorker"];if(!this.fetchWithWorker){var d=this;this.workerClient=new l("./mutableWorker",function(a){this.workerClient=a;this.workerCallback.push("./libs/"+
this.indexType);this.workerClient.importScripts(this.workerCallback).then(function(){d._attachedSystem=!0;b&&d.start()})}.bind(this))}this._featCache={}},destroy:function(){this.workerClient&&this.workerClient.terminate()},addLayer:function(a,b){if(a.graphics&&a.graphics.length||b||"feature"===a.type){var d=this.workerClient;if(!this._attachedSystem&&d.worker){var f=this;this.inherited(arguments,[a,!0]);d.importScripts("./libs/"+this.indexType).then(function(){f.runProcess(a.graphics,a.id);f._attachedSystem=
!0})}else this.inherited(arguments,[a])}},unsetMap:function(){this.stop();this.workerClient.terminate();this.fetchWithWorker||(this.workerClient=new l(this.workerCallback,function(){}));this.inherited(arguments);this.start()},removeLayer:function(a){this.inherited(arguments)},runProcess:function(a,b){if(a&&a.length){var d=this,f=this.workerClient,c=a[0]._graphicsLayer;b||0===b||(b=c?c.id:"rawFeatures_"+Object.keys(this._featCache).length);this._featCache[b]||(this._featCache[b]={});for(var g,e,h=
[],m=a.length,k=c&&c.objectIdField;m--;)e=a[m],g=e.attributes&&k?e.attributes[k]:e.id,null!=g&&this._featCache[b][g]||(this._featCache[b][g]=1,e.declaredClass?h.push({id:g,geometry:e.geometry.toJSON(!0),attributes:e.attributes}):h.push(e));0!==h.length&&(f.postMessage({insert:h,system:this.indexType,options:this.indexOptions,idField:c&&c.objectIdField,layerId:b}).then(function(a){c&&c.emit("process-end",{processor:d,results:{insert:a.insert}})}),c&&c.emit("process-start",{processor:this}))}},_sendFeaturesFromLayer:function(a,
b){b=b.graphic;var d=this.workerClient,f=this,c=b.attributes[a.objectIdField];this._featCache[a.id]||(this._featCache[a.id]={});this._featCache[a.id][c]||(this._featCache[a.id][c]=1,d.postMessage({insert:[{attributes:b.attributes,geometry:b.geometry.toJSON(!0)}],system:this.indexType,options:this.indexOptions,idField:a.objectIdField,layerId:a.id}).then(function(b){a.emit("process-end",{processor:f,results:{insert:b.insert}})}),a.emit("process-start",{processor:f}))},_notifyProcessStart:function(a,
b){},_sendFeaturesFromTask:function(a,b){b=b.featureSet.features;var d=[],f=this.workerClient,c=this,g=b.length,e,h;for(this._featCache[a.id]||(this._featCache[a.id]={});g--;)h=b[g],e=h.attributes[a.objectIdField],this._featCache[a.id][e]||(this._featCache[a.id][e]=1,d.push(h));f.postMessage({insert:d,system:this.indexType,options:this.indexOptions,idField:a.objectIdField,layerId:a.id}).then(function(b){a.emit("process-end",{processor:c,results:{insert:b.insert}})});a.emit("process-start",{processor:c})},
get:function(){},intersects:function(a,b,d,f){return"rtree"!=this.indexType?(console.error("Index.intersects only works with rtree indexes"),a=new k,a.reject({message:"Index.intersects only works with rtree indexes"}),a.promise):this.workerClient.postMessage({search:a,layerId:b,returnNode:d,onlyIds:f})},within:function(a,b,d){if("rtree"!=this.indexType)return console.error("Index.within only works with rtree indexes"),a=new k,a.reject({message:"Index.within only works with rtree indexes"}),a.promise},
nearest:function(a){return"kdtree"!=this.indexType?(console.error("Index.nearest only works with kdtree indexes"),a=new k,a.reject({message:"Index.nearest only works with kdtree indexes"}),a.promise):this.workerClient.postMessage({search:a})}})});