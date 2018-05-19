// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports dojo/i18n!../../nls/smartMapping dojo/_base/lang ../../../core/lang ../../../core/promiseUtils ../../PointCloudUniqueValueRenderer ../../UniqueValueRenderer ./support/utils ../statistics/uniqueValues ../support/utils ../symbology/type ../../support/LegendOptions ../../support/utils".split(" "),function(L,l,B,q,v,g,C,D,f,w,h,r,E,t){function F(b){if(!b||!b.layer||!b.field&&!b.valueExpression)return g.reject(f.createError("type-renderer:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required"));
if(b.valueExpression&&!b.view)return g.reject(f.createError("type-renderer:missing-parameters","View is required when 'valueExpression' is specified"));var a=q.mixin({},b);a.symbolType=a.symbolType||"2d";a.numTypes=null==a.numTypes?10:a.numTypes;a.defaultSymbolEnabled=null==a.defaultSymbolEnabled?!0:a.defaultSymbolEnabled;a.sortBy=null==a.sortBy?"count":a.sortBy;a.statistics=v.clone(a.statistics);b=[0,1,2];var c=h.createLayerAdapter(a.layer,b);return(a.layer=c)?c.load().then(function(){var b=c.geometryType,
e=-1<a.symbolType.indexOf("3d");if("mesh"===b)a.symbolType="3d-volumetric",a.colorMixMode=a.colorMixMode||"replace",a.edgesType=a.edgesType||"none";else{if(e&&("polyline"===b||"polygon"===b))return g.reject(f.createError("type-renderer:not-supported","3d symbols are not supported for polyline and polygon layers"));if(-1<a.symbolType.indexOf("3d-volumetric")&&(!a.view||"3d"!==a.view.type))return g.reject(f.createError("type-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'"))}b=
h.getFieldsList({field:a.field,valueExpression:a.valueExpression});return(b=f.verifyBasicFieldValidity(c,b,"type-renderer:invalid-parameters"))?g.reject(b):a}):g.reject(f.createError("type-renderer:invalid-parameters","'layer' must be one of these types: "+h.getLayerTypeLabels(b).join(", ")))}function G(b){if(!(b&&b.layer&&b.field))return g.reject(f.createError("type-point-cloud-class-renderer:missing-parameters","'layer' and 'field' parameters are required"));var a=q.mixin({},b);a.statistics=v.clone(a.statistics);
b=[3];var c=h.createLayerAdapter(a.layer,b);a.layer=c;a.density=a.density||25;a.size=a.size||"100%";return f.isValidPointSize(a.size)?c?c.load().then(function(){var b=h.getFieldsList({field:a.field});return(b=f.verifyBasicFieldValidity(c,b,"type-point-cloud-class-renderer:invalid-parameters"))?g.reject(b):a}):g.reject(f.createError("type-point-cloud-class-renderer:invalid-parameters","'layer' must be one of these types: "+h.getLayerTypeLabels(b).join(", "))):g.reject(f.createError("type-point-cloud-class-renderer:invalid-parameters",
"Invalid 'size' parameter. It should be a string of the form '100%'"))}function x(b){var a=b.typeScheme,c=b.basemap;a?a=r.cloneScheme(a):(a=(b=r.getSchemes({basemap:b.basemap,geometryType:b.geometryType,theme:b.theme,worldScale:b.worldScale,view:b.view}))&&b.primaryScheme,c=b&&b.basemapId);return{scheme:a,basemapId:c}}function y(b,a){return b.label<a.label?-1:b.label>a.label?1:0}function z(b,a){return b.value<a.value?-1:b.value>a.value?1:0}function H(b,a){var c=a.count-b.count;0===c&&(c=y(b,a));return c}
function I(b,a){var c=a.count-b.count;0===c&&(c=z(b,a));return c}function A(b,a,c){var d;"count"===a?(d=I,c&&c.codedValues&&(d=H)):"value"===a&&(d=z,c&&c.codedValues&&(d=y));d&&b.sort(d)}function J(b,a){b=b.uniqueValueInfos;var c=a.layer,d=a.field,e=d?c.getField(d):null,g=e?c.getFieldDomain(e.name):null,h=-1===a.numTypes?b.length:a.numTypes,n=c.geometryType,c=x({basemap:a.basemap,geometryType:n,typeScheme:a.typeScheme,worldScale:-1<a.symbolType.indexOf("3d-volumetric"),view:a.view}),k=c.scheme,d=
new D({field:d}),l=-1,m,p={value:null,domain:g,fieldInfo:e};b.forEach(function(a,b){p.value=a.value;a.label=t.createUniqueValueLabel(p);null===a.value&&(l=b)});-1<l&&(m=b.splice(l,1)[0]);A(b,a.sortBy,g);e&&"date"===e.type&&(e=b.filter(function(a,b){return b<h}).map(function(a){return a.value}),p.dateFormatInterval=t.calculateDateFormatInterval(e));var u=f.createColors(k.colors,b.length);b.forEach(function(b,c){p.value=b.value;b.label=t.createUniqueValueLabel(p);b.symbol=f.createSymbol(k,u[c],n,a.symbolType,
a.colorMixMode,a.edgesType)});a.valueExpression&&(d.valueExpression=a.valueExpression,d.valueExpressionTitle=a.valueExpressionTitle);a.legendOptions&&(d.legendOptions=new E.LegendOptions(a.legendOptions));u=f.createColors(k.colors,h);for(e=0;e<h;e++)(g=b[e])&&d.addUniqueValueInfo({value:g.value,label:g.label,symbol:f.createSymbol(k,u[e],n,a.symbolType,a.colorMixMode,a.edgesType)});a.defaultSymbolEnabled&&(d.defaultSymbol=f.createSymbol(k,k.noDataColor,n,a.symbolType,a.colorMixMode,a.edgesType),d.defaultLabel=
B.other);m&&(m.symbol=f.createSymbol(k,k.noDataColor,n,a.symbolType,a.colorMixMode,a.edgesType),b.push(m));m=[];e=d.uniqueValueInfos.length===b.length?-1:d.uniqueValueInfos.length;if(-1<e)for(;e<b.length;e++)m.push(q.mixin({},b[e]));return{renderer:d,uniqueValueInfos:b,excludedUniqueValueInfos:m,typeScheme:r.cloneScheme(k),basemapId:c.basemapId}}function K(b,a){b=b.uniqueValueInfos;a=(a=x({basemap:"gray",theme:"point-cloud-class",geometryType:"point",typeScheme:a}))&&a.scheme;var c="point-cloud-class"===
a.theme,d=c?a.colors:f.createColors(a.colors,b.length);A(b,"value");return b.map(function(a,b){var f=a.value,e=null;c?(e=d[f])||(e=d[d.length-1]):e=d[b];return{values:[f],color:e,label:a.label}})}Object.defineProperty(l,"__esModule",{value:!0});l.createRenderer=function(b){return F(b).then(function(a){return(null!=a.statistics?g.resolve(a.statistics):w({layer:a.layer,field:a.field,valueExpression:a.valueExpression,returnAllCodedValues:a.returnAllCodedValues,view:a.view})).then(function(b){return J(b,
a)})})};l.createPCClassRenderer=function(b){return G(b).then(function(a){return(null!=a.statistics?g.resolve(a.statistics):w({layer:a.layer,field:a.field})).then(function(b){return{renderer:new C({field:a.field,pointsPerInch:a.density,pointSizeAlgorithm:f.getPointSizeAlgorithm(a.size),colorUniqueValueInfos:K(b,a.typeScheme)})}})})}});