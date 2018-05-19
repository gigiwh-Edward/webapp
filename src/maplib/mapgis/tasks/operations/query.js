// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/assignHelper ../../request ../../core/urlUtils ../../geometry/support/jsonUtils ../../geometry/support/normalizeUtils ./urlUtils".split(" "),function(q,d,f,k,l,m,n,p){function g(a){var b=a.geometry;a=a.toJSON();b&&(a.geometry=JSON.stringify(b),a.geometryType=m.getJsonType(b),a.inSR=b.spatialReference.wkid||JSON.stringify(b.spatialReference));a.groupByFieldsForStatistics&&(a.groupByFieldsForStatistics=a.groupByFieldsForStatistics.join(","));a.objectIds&&
(a.objectIds=a.objectIds.join(","));a.orderByFields&&(a.orderByFields=a.orderByFields.join(","));a.outFields&&(a.outFields=a.outFields.join(","));a.outSR?a.outSR=a.outSR.wkid||JSON.stringify(a.outSR):b&&(a.returnGeometry||a.returnCentroid)&&(a.outSR=a.inSR);a.returnGeometry&&delete a.returnGeometry;a.outStatistics&&(a.outStatistics=JSON.stringify(a.outStatistics));a.pixelSize&&(a.pixelSize=JSON.stringify(a.pixelSize));a.quantizationParameters&&(a.quantizationParameters=JSON.stringify(a.quantizationParameters));
a.source&&(a.layer=JSON.stringify({source:a.source}),delete a.source);a.timeExtent&&(b=a.timeExtent,a.time=[null!=b.startTime?b.startTime:"null",null!=b.endTime?b.endTime:"null"],delete a.timeExtent);return a}function e(a,b,c,d){var h="string"===typeof a?l.urlToObject(a):a;return n.normalizeCentralMeridian(b.geometry?[b.geometry]:[]).then(function(a){if(a=a&&a[0])b=b.clone(),b.geometry=a;a=p.mapParameters(f({},h.query,{f:"json"},d,g(b)));return k(h.path+"/query",f({},c,{query:a,callbackParamName:"callback"}))})}
Object.defineProperty(d,"__esModule",{value:!0});d.queryToQueryStringParameters=g;d.executeQuery=function(a,b,c){return e(a,b,c)};d.executeQueryForIds=function(a,b,c){return e(a,b,c,{returnIdsOnly:!0})};d.executeQueryForCount=function(a,b,c){return e(a,b,c,{returnIdsOnly:!0,returnCountOnly:!0})};d.executeQueryForExtent=function(a,b,c){return e(a,b,c,{returnExtentOnly:!0,returnCountOnly:!0}).then(function(a){var b=a.data;if(!b.hasOwnProperty("extent")){if(b.features)throw Error("Layer does not support extent calculation.");
if(b.hasOwnProperty("count"))throw Error("Layer does not support extent calculation.");}return a})}});