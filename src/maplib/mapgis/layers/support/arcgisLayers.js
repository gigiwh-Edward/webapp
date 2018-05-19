// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports dojo/when dojo/_base/lang ../../request ../../core/Error ../../core/promiseUtils ./arcgisLayerUrl ./arcgisLayerUrl ./lazyLayerLoader".split(" "),function(l,f,m,d,g,n,e,p,q,r){function t(a,b){return a.sublayerIds.map(function(c){return new a.Constructor(d.mixin({},b,{layerId:c,sublayerTitleMode:"service-name"}))})}function u(a){var b=q.parse(a);if(!b)return e.reject(new n("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:a}));var c=b.serverType,
k=b.sublayer,v={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(c){case "MapServer":c=null!=k?"FeatureLayer":w(a).then(function(a){return a?"TileLayer":"MapImageLayer"});break;case "ImageServer":c=h(a).then(function(a){var b=a.tileInfo&&a.tileInfo.format;return a.tileInfo?b&&"LERC"===b.toUpperCase()&&a.cacheType&&"elevation"===a.cacheType.toLowerCase()?"ElevationLayer":"TileLayer":"ImageryLayer"});break;case "SceneServer":c=h(b.url.path).then(function(a){var b=
{Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer"};return a&&Array.isArray(a.layers)&&0<a.layers.length&&(a=a.layers[0].layerType,null!=b[a])?b[a]:"SceneLayer"});break;default:c=v[c]}var f={FeatureLayer:!0,SceneLayer:!0},d={parsedUrl:b,Constructor:null,sublayerIds:null},g;return m(c).then(function(b){g=b;if(f[b]&&null==k)return x(a).then(function(a){1!==a.length&&(d.sublayerIds=a)})}).then(function(){return(0,r.layerLookupMap[g])()}).then(function(a){d.Constructor=
a;return d})}function x(a){return h(a).then(function(a){return a&&Array.isArray(a.layers)?a.layers.map(function(a){return a.id}).reverse():[]})}function w(a){return h(a).then(function(a){return a.tileInfo})}function y(a,b){a=a.Constructor.prototype.declaredClass;return"mapgis.layers.FeatureLayer"===a||"mapgis.layers.StreamLayer"===a?d.mixin({returnZ:!0,outFields:["*"]},b):b}function h(a){return g(a,{responseType:"json",callbackParamName:"callback",query:{f:"json"}}).then(function(a){return a.data})}Object.defineProperty(f,
"__esModule",{value:!0});f.fromUrl=function(a){return u(a.url).then(function(b){var c=y(b,d.mixin({},a.properties,{url:a.url}));return b.sublayerIds?e.create(function(a){return l(["../GroupLayer"],a)}).then(function(a){var d=new a({title:b.parsedUrl.title});t(b,c).forEach(function(a){return d.add(a)});return e.resolve(d)}):e.resolve(new b.Constructor(c))})};f.fetchServerVersion=function(a){if(!p.test(a))return e.reject();a=a.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return g(a,{query:{f:"json"},responseType:"json",
callbackParamName:"callback"}).then(function(a){return a.data&&a.data.currentVersion?a.data.currentVersion:e.reject()})}});