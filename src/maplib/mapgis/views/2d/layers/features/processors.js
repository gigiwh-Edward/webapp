// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../core/promiseUtils"],function(d,c,e,f){Object.defineProperty(c,"__esModule",{value:!0});var g={symbol:function(){return f.create(function(a){return d(["./processors/SymbolProcessor"],a)})}};c.createProcessor=function(a,b){return g[a]().then(function(a){return a.default}).then(function(a){return new a(e({},b.serviceAndViewInfo,{tileStore:b.tileStore,remoteClient:b.remoteClient}))})}});