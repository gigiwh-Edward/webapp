// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../core/promiseUtils"],function(d,b,f,e){Object.defineProperty(b,"__esModule",{value:!0});b.createController=function(b,c){return("memory"===b?e.create(function(a){return d(["./controllers/MemoryController"],a)}):e.create(function(a){return d(["./controllers/OnDemandController"],a)})).then(function(a){return a.default}).then(function(a){return new a(f({},c.serviceAndViewInfo,{tileStore:c.tileStore,remoteClient:c.remoteClient}))})}});