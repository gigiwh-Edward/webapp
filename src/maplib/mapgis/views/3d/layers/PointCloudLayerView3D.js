// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../core/tsSupport/decorateHelper dojo/errors/CancelError dojo/promise/all ../../../request ../../../core/arrayUtils ../../../core/Handles ../../../core/Logger ../../../core/promiseUtils ../../../core/requireUtils ../../../core/screenUtils ../../../core/watchUtils ../../../core/workers ../../../core/accessorSupport/decorators ../../../geometry/support/scaleUtils ../../../symbols/support/unitConversionUtils ./LayerView3D ./PointCloudWorker ./i3s/I3SUtil ./i3s/IdleQueue ./i3s/LoDUtil ./i3s/PagedNodeIndex ./i3s/PointCloudRendererUtil ./i3s/PointRenderer ./support/LayerViewUpdatingPercentage ../lib/glMatrix ../support/orientedBoundingBox ../support/projectionUtils ../webgl-engine/lib/RenderSlot module".split(" "),
function(z,T,A,h,B,v,w,C,D,E,p,F,x,e,G,g,H,y,I,J,l,K,q,L,k,M,N,r,O,P,Q,R){var t=E.getLogger("mapgis.views.3d.layers.PointCloudLayerView3D"),S=r.vec4d.create();return function(u){function b(){var a=null!==u&&u.apply(this,arguments)||this;a.maximumPointCount=4E6;a._renderer=null;a._rendererAdded=!1;a._renderedNodes=new Set;a._updateViewNeeded=!0;a._idleUpdatesEnabled=!0;a._lodFactor=1;a._worker=new J;a._workerThread=null;a._processLambda=null;a._maxLoggedBoxWarnings=5;a._pageMultiplier=1;a._handles=new D;
a._indexQueue=[];a._workQueue=[];a._idleQueue=new K.IdleQueue;a._indexPagesLoading=new Map;a._loadingNodes=new Map;a._layerIsVisible=!1;a._totalWork=0;a._index=null;a._loadingInitNodePage=!1;a._nodeIdArray=[];return a}A(b,u);Object.defineProperty(b.prototype,"pointScale",{get:function(){var a=k.getSplatSizeAlgorithm(this.layer.renderer);return a&&null!=a.scaleFactor?a.scaleFactor:1},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"pointMinSize",{get:function(){return k.getMinSize(this.layer.renderer)},
enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"useRealWorldSymbolSizes",{get:function(){var a=k.getFixedSizeAlgorithm(this.layer.renderer);return a&&null!=a.useRealWorldSymbolSizes?a.useRealWorldSymbolSizes:!1},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"pointSize",{get:function(){var a=k.getFixedSizeAlgorithm(this.layer.renderer);return a&&null!=a.size?a.size:0},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"inverseDensity",{get:function(){return this.layer.renderer?
96/this.layer.renderer.pointsPerInch:5},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"_clippingBox",{get:function(){var a=[];return P.extentToBoundingBox(this.view.clippingArea,a,this.view.renderSpatialReference)?a:null},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"_elevationOffset",{get:function(){var a=this.layer.elevationInfo;if(a&&"absolute-height"===a.mode){var c=H.getMetersPerVerticalUnitForSR(this.layer.spatialReference),b=y.getMetersPerUnit(a.unit);
return(a.offset||0)*b/c}return 0},enumerable:!0,configurable:!0});b.prototype.initialize=function(){var a=this;l.checkPointCloudLayerValid(this.layer);l.checkPointCloudLayerCompatibleWithView(this.layer,this.view);this._initRenderer();var c=this._initNodePages(),b={idleBegin:function(){return a._idleBegin()},idleEnd:function(){return a._idleEnd()},needsUpdate:function(){return!0},idleFrame:function(c){return a._process(c)}},d={idleBegin:function(){return a._idleBegin()},idleEnd:function(){return a._idleEnd()},
needsUpdate:function(){return a._updateViewNeeded||0<a._workQueue.length},idleFrame:function(c){return a._processWhileSuspended(c)}};G.open(F.getAbsMid("./PointCloudWorker",z,R),{client:this}).then(function(c){a.destroyed?c.close():a._workerThread=c});this._handles.add(e.init(this,"_clippingBox",function(){return a._updateViewNeeded=!0}));this._handles.add(e.init(this.layer,"elevationInfo",function(){return a._elevationInfoChanged()}));this._handles.add(e.init(this,"_elevationOffset",function(){return a._elevationOffsetChanged()}));
this._handles.add(e.init(this.layer,"renderer",function(){return a._rendererChanged()}));this._handles.add(e.init(this,"clippingArea",function(){a._updateViewNeeded=!0}));this._handles.add(this.view.state.watch("camera",function(){a._updateViewNeeded=!0}));this.view.resourceController.getMemoryEvents().on("quality-changed",function(){return a._updateViewNeeded=!0});this.addResolvingPromise(c);this.when(function(){a._processLambda=a._frame.bind(a);a.view.resourceController.registerFrameWorker(a._processLambda);
a._handles.add(e.init(a,"suspended",function(c){c?(a.view.resourceController.deregisterIdleFrameWorker(a),a.view.resourceController.registerIdleFrameWorker(a,d)):(a.view.resourceController.deregisterIdleFrameWorker(a),a.view.resourceController.registerIdleFrameWorker(a,b))}))})};b.prototype.destroy=function(){this._cancelNodeLoading();this._workerThread&&(this._workerThread.close(),this._workerThread=null);this.view.resourceController.deregisterIdleFrameWorker(this);this.view.resourceController.deregisterFrameWorker(this._processLambda);
this._handles.destroy();this._destroyRenderer()};b.prototype._initRenderer=function(){var a=this;this._renderer=new M;this._renderer.layerUid=this.layer.uid;this._handles.add(e.init(this,"_clippingBox",function(c){a._renderer.clippingBox=c}));this._handles.add(e.init(this,"_clippingBox",function(c){a._renderer.clippingBox=c}));this._handles.add(e.init(this,"suspended",function(c){a._setPointsVisible(!c)}));this._handles.add(e.init(this,"pointScale",function(c){a._renderer.scaleFactor=c}));this._handles.add(e.init(this,
"pointMinSize",function(c){c=x.pt2px(c);a._renderer.minSizePx=c}));this._handles.add(e.init(this,"useRealWorldSymbolSizes",function(c){a._renderer.useRealWorldSymbolSizes=c}));this._handles.add(e.init(this,"pointSize",function(c){var b=x.pt2px(c);a._renderer.size=c;a._renderer.sizePx=b}));this._handles.add(e.init(this,["inverseDensity","maximumPointCount"],function(){a._updateViewNeeded=!0}));this._handles.add(e.init(this.view,"qualitySettings.sceneService.pointCloud.lodFactor",function(c){a._lodFactor=
c;a._updateViewNeeded=!0}))};b.prototype._destroyRenderer=function(){this._setPointsVisible(!1)};b.prototype._setPointsVisible=function(a){a&&!this._rendererAdded?(this.view._stage.addExternalRenderer([Q.OPAQUE_EXTERNAL],this._renderer),this._rendererAdded=!0):!a&&this._rendererAdded&&(this.view._stage.removeExternalRenderer(this._renderer),this._rendererAdded=!1)};b.prototype._rendererChanged=function(){this._clearNodeState();this._renderer.useFixedSizes=k.rendererUsesFixedSizes(this.layer.renderer);
this._updateViewNeeded=!0};b.prototype._elevationInfoChanged=function(){var a=this.layer.elevationInfo&&this.layer.elevationInfo.unit;a&&!y.supportsUnit(a)&&t.warn("elevationInfo.unit","'"+a+"' is not a valid unit")};b.prototype._elevationOffsetChanged=function(){var a=this;this._clearNodeState();this._initNodePages().then(function(){a._updateViewNeeded=!0})};b.prototype.displayNodes=function(a){this._workQueue=q.nodeDiff(l.setToKeys(this._renderedNodes),a,this._index);q.sortFrontToBack(this._workQueue,
this.view.state.camera.viewForward,this._index);q.splitWorkEntries(this._workQueue,8,this._index);this._updateQueues();this._totalWork=this._computeWork();this._updateLoading();this._layerIsVisible=0<a.length;this.notifyChange("suspended")};b.prototype.cancelLoading=function(){this._cancelNodeLoading();this._cancelIndexLoading()};b.prototype._cancelNodeLoading=function(){var a=[];this._loadingNodes.forEach(function(c){return a.push(c)});this._loadingNodes.clear();for(var c=0;c<a.length;c++)a[c].cancel();
this._workQueue=[];this._idleQueue.cancelAll();this._totalWork=this._computeWork();this._updateLoading()};b.prototype._updateQueues=function(){var a=this,c=new Set;this._workQueue.forEach(function(a){a.load.forEach(function(a){c.add(a)})});var b=[],d=new Map;this._loadingNodes.forEach(function(a,m){c.has(m)?d.set(m,a):b.push(a)});this._loadingNodes=d;for(var f=0;f<b.length;f++)b[f].cancel();this._workQueue=this._workQueue.filter(function(c){var b=0;for(c=c.load;b<c.length;b++)if(a._loadingNodes.has(c[b]))return!1;
return!0});this._totalWork=this._computeWork();this._updateLoading()};b.prototype._cancelIndexLoading=function(){this._indexQueue=[];this._indexPagesLoading.forEach(function(a){return a.cancel()});this._indexPagesLoading.clear();this._totalWork=this._computeWork();this._updateLoading()};b.prototype._clearNodeState=function(){var a=this;this._renderedNodes.forEach(function(c){return a._removeFromRenderer(c)});this._cancelNodeLoading()};b.prototype._idleBegin=function(){this._updateViewNeeded=!0};b.prototype._idleEnd=
function(){this._updateViewNeeded=!0};b.prototype._frame=function(a){this.suspended?this._processWhileSuspended(a):this._process(a)};b.prototype._process=function(a){if(this._idleUpdatesEnabled){for(this._updateViewNeeded&&!a.done()&&this._updateWorkQueues();0<this._indexQueue.length&&!a.done();)this._processIndexQueue();for(this._processWorkQueue(a);0<this._idleQueue.length()&&!a.done();)this._idleQueue.process()}};b.prototype._processWhileSuspended=function(a){if(this._idleUpdatesEnabled)for(this._cancelNodeLoading(),
this._updateViewNeeded&&!a.done()&&this._updateWorkQueues();0<this._workQueue.length&&!a.done();)this._processWorkQueueRemoveOnly()};b.prototype._processIndexQueue=function(){var a=this,c=this._indexQueue.shift();this._indexPagesLoading.set(c,this._loadNodePage(c));this._indexPagesLoading.get(c).then(function(b){a._index.addPage(c,b,a._elevationOffset);a._updateViewNeeded=!0}).always(function(){a._indexPagesLoading.delete(c)})};b.prototype._processWorkQueue=function(a){for(;!a.done();){var c=this._scheduleWorkEntry();
if(!c)break;this._processWorkEntry(c)}};b.prototype._scheduleWorkEntry=function(){var a=this;if(8<=this._loadingNodes.size)return null;for(var c=0;c<this._workQueue.length;++c){var b=this._workQueue[c];if(!C.find(b.remove,function(c){return!a._renderedNodes.has(c)})){for(;0<c;--c)this._workQueue[c]=this._workQueue[c-1];this._workQueue.shift();return b}}return null};b.prototype._processWorkEntry=function(a){var c=this;if(0===a.load.length)for(var b=0;b<a.remove.length;b++)this._removeFromRenderer(a.remove[b]);
else v(a.load.map(function(a){c._loadingNodes.has(a)||c._loadingNodes.set(a,c.loadNode(a));return c._loadingNodes.get(a)})).then(function(b){for(var d=0;d<a.load.length;d++)c._addToRenderer(a.load[d],b[d]);for(d=0;d<a.remove.length;d++)c._removeFromRenderer(a.remove[d])}).always(function(){for(var b=0;b<a.load.length;b++)c._loadingNodes.delete(a.load[b]);c._updateLoading()}),this._updateLoading()};b.prototype._processWorkQueueRemoveOnly=function(){for(var a=this._workQueue.shift(),c=0;c<a.remove.length;c++)this._removeFromRenderer(a.remove[c]);
this._updateLoading()};b.prototype._computeWork=function(){var a=0;if(!this.suspended){for(var c=0;c<this._workQueue.length;c++)a+=this._workQueue[c].load.length;a+=this._loadingNodes.size;a+=(this._indexQueue.length+this._indexPagesLoading.size)*this._index.pageSize;a+=this._loadingInitNodePage?100:0}return a+=this._updateViewNeeded?100:0};Object.defineProperty(b.prototype,"updating",{get:function(){return 0<this._computeWork()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"updatingPercentageValue",
{get:function(){var a=this._computeWork();return 100*Math.min(this._totalWork,a)/this._totalWork},enumerable:!0,configurable:!0});b.prototype._updateLoading=function(){this.notifyChange("updating");this.notifyChange("updatingPercentageValue")};b.prototype.canResume=function(){return this.inherited(arguments)&&this._layerIsVisible};b.prototype._initNodePages=function(){var a=this,c=this.layer.store.index;this._index=new L(this.layer.spatialReference,this.view.renderCoordsHelper.spatialReference,c.nodesPerPage||
c.nodePerIndexBlock);this._cancelIndexLoading();this._traverseVisible=this._index.createVisibilityTraverse();this._loadingInitNodePage=!0;this._updateLoading();this._pageMultiplier=null!=c.nodesPerPage?1:c.nodePerIndexBlock;return this._loadNodePage(0).then(function(c){a._index.addPage(0,c,a._elevationOffset);a._loadingInitNodePage=!1;a._updateLoading()})};b.prototype._loadNodePage=function(a){var c=this;return this._requestJSON(this.baseUrl+"/nodepages/"+a*this._pageMultiplier).then(function(b){return b.data.nodes.map(function(b,
m){return{resourceId:null!=b.resourceId?b.resourceId:a*c._index.pageSize+m,obb:b.obb,firstChild:b.firstChild,childCount:b.childCount,vertexCount:null!=b.vertexCount?b.vertexCount:b.pointCount,lodThreshold:null!=b.lodThreshold?b.lodThreshold:b.effectiveArea}})})};b.prototype._updateWorkQueues=function(){for(var a=this.inverseDensity/this._lodFactor*this._getLodMemoryFactor(),c=this.maximumPointCount*this._lodFactor*this._getLodMemoryFactor(),b=this._computeNodesForMinimumDensity(a),d=this._computePointCount(b),
f=Math.sqrt(d/(.75*c));d>c;)a*=f,b=this._computeNodesForMinimumDensity(a),d=this._computePointCount(b),f=Math.sqrt(2);this.displayNodes(b);this._updateViewNeeded=!1};b.prototype._computePointCount=function(a){for(var c=0,b=0;b<a.length;b++){var d=this._index.getNode(a[b]);d&&(c+=d.vertexCount)}return c};b.prototype._getLodMemoryFactor=function(){return this.view.resourceController.getMemoryFactor()};b.prototype._computeNodesForMinimumDensity=function(a){var c=this,b=this.view.state.camera,d=b.frustumPlanes,
f=this._clippingBox,n=b.viewForward,e=r.vec3d.dot(n,b.eye),g=r.vec4d.set4(n[0],n[1],n[2],-e,S),h=b.perPixelRatio,l=a*a,k=this._nodeIdArray;k.length=0;this._traverseVisible({frustumPlanes:d,clippingBox:f},{predicate:function(a,b,d){if(!d)return!1;if(0===b.childCount)return k.push(a),!1;d=c._index.getRenderObb(a);return c._computeAveragePixelArea(d,b.lodThreshold,b.vertexCount,g,h)<=l?(k.push(a),!1):!0},pageMiss:function(a,b){k.push(a);0>c._indexQueue.indexOf(b)&&c._indexQueue.push(b)}});return k};
b.prototype._computeAveragePixelArea=function(a,c,b,d,f){a=Math.max(1E-7,O.minimumDistancePlane(a,d));return c/(a*a)/(4*f*f)/b};b.prototype.loadNode=function(a){var c=this,b=this._index.getNode(a),d=k.getRendererInfo(this.layer),f=[];return this._idleQueue.push().then(function(){var a=b.resourceId,e=c.loadGeometry(a),g=c.loadAttribute(a,d.primaryAttribute),a=c.loadAttribute(a,d.modulationAttribute);f=[e,g,a];return v(f)}).then(function(b){var f=b[0],e=b[1],g=b[2];b=[f];e&&b.push(e);g&&b.push(g);f=
{geometryBuffer:f,primaryAttribute:e,modulationAttribute:g,schema:c.layer.store.defaultGeometrySchema,rendererInfo:d,obb:c._index.getRenderObb(a),elevationOffset:c._elevationOffset,inSR:c.layer.spatialReference.toJSON(),outSR:c.view.renderCoordsHelper.spatialReference.toJSON()};return c._workerThread?c._workerThread.invoke("process",f,b):p.resolve(c._worker.transform(f))}).catch(function(a){if(a instanceof B)for(var b=0,c=f;b<c.length;b++)c[b].cancel();else console.error(a);return p.reject(a)})};
b.prototype.loadGeometry=function(a){return this._requestBinary(this.baseUrl+"/nodes/"+a+"/geometries/0").then(function(a){return a.data})};b.prototype.loadAttribute=function(a,b){return b&&b.storageInfo?this._requestBinary(this.baseUrl+"/nodes/"+a+"/attributes/"+b.storageInfo.key).then(function(a){return a.data}):p.resolve(null)};b.prototype._requestJSON=function(a){return w(a,{query:{f:"json"},responseType:"json"})};b.prototype._requestBinary=function(a){return w(a,{responseType:"array-buffer"})};
b.prototype._removeFromRenderer=function(a){this._renderedNodes.has(a)&&(this._renderer.removeNode(""+a),this._renderedNodes.delete(a))};b.prototype._addToRenderer=function(a,b){if(!this._renderedNodes.has(a)){this._renderedNodes.add(a);var c=this._index.getNode(a),d=this._index.getRenderObb(a);if(b.obb.halfSize[0]>d.halfSize[0]||b.obb.halfSize[1]>d.halfSize[1]||b.obb.halfSize[2]>d.halfSize[2])0<this._maxLoggedBoxWarnings&&(t.warn("Node",a,"reported bounding box too small, got",d,"but points cover",
b.obb),0===--this._maxLoggedBoxWarnings&&t.warn("  Too many bounding box errors, stopping reporting for this layer.")),this._index.setRenderObb(a,b.obb);this._renderer.addNode({id:""+a,coordinates:b.points,origin:d.center,rgb:b.rgb,splatSize:Math.sqrt(c.lodThreshold/c.vertexCount),obb:d,isLeaf:0===c.childCount})}};b.prototype.removeCachedData=function(){var a=this;this._renderedNodes.forEach(function(b){return a._removeFromRenderer(b)})};b.prototype.getUsedMemory=function(){var a=this;return l.setToKeys(this._renderedNodes).reduce(function(b,
e){return b+15*a._index.getNode(e).vertexCount+128},0)/1024/1024};b.prototype.getUnloadedMemory=function(){var a=this,b=this._renderedNodes.size;if(4>b)return 0;for(var e=l.setToKeys(this._renderedNodes).reduce(function(b,c){return b+a._index.getNode(c).vertexCount}),d=this._loadingNodes.size,f=0;f<this._workQueue.length;f++)d+=this._workQueue[f].load.length,d-=this._workQueue[f].remove.length;return 0>d?0:(d*e/b*15+128*d)/1024/1024};b.prototype.getStats=function(){var a=this;return{"Rendered Nodes":this._renderedNodes.size,
"Rendered Points":l.setToKeys(this._renderedNodes).reduce(function(b,e){return b+a._index.getNode(e).vertexCount},0),"Loading Nodes":this._loadingNodes.size,"Index Queue":this._indexQueue.length,"Work Queue":this._workQueue.length,"Idle Queue":this._idleQueue.length()}};h([g.property()],b.prototype,"layer",void 0);h([g.property({readOnly:!0,aliasOf:"layer.parsedUrl.path"})],b.prototype,"baseUrl",void 0);h([g.property({readOnly:!0,dependsOn:["layer.renderer"]})],b.prototype,"pointScale",null);h([g.property({readOnly:!0,
dependsOn:["layer.renderer"]})],b.prototype,"pointMinSize",null);h([g.property({readOnly:!0,dependsOn:["layer.renderer"]})],b.prototype,"useRealWorldSymbolSizes",null);h([g.property({readOnly:!0,dependsOn:["layer.renderer"]})],b.prototype,"pointSize",null);h([g.property({readOnly:!0,dependsOn:["layer.renderer"]})],b.prototype,"inverseDensity",null);h([g.property()],b.prototype,"maximumPointCount",void 0);h([g.property({readOnly:!0,dependsOn:["view.clippingArea"]})],b.prototype,"_clippingBox",null);
h([g.property({readOnly:!0,dependsOn:["layer.elevationInfo"]})],b.prototype,"_elevationOffset",null);h([g.property()],b.prototype,"updating",null);h([g.property()],b.prototype,"updatingPercentageValue",null);return b=h([g.subclass("mapgis.views.3d.layers.PointCloudLayerView3D")],b)}(g.declared(I,N))});