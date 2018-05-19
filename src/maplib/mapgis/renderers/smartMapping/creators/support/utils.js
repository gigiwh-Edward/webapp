// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports dojo/_base/lang ../../../../Color ../../../../core/Error ../../../../core/numberUtils ../../../../core/promiseUtils ../../statistics/classBreaks ../../../support/pointCloud/PointSizeSplatAlgorithm ../../../../symbols/FillSymbol3DLayer ../../../../symbols/IconSymbol3DLayer ../../../../symbols/MeshSymbol3D ../../../../symbols/ObjectSymbol3DLayer ../../../../symbols/PointSymbol3D ../../../../symbols/SimpleFillSymbol ../../../../symbols/SimpleLineSymbol ../../../../symbols/SimpleMarkerSymbol".split(" "),
function(I,f,t,u,v,l,w,m,x,y,z,A,B,n,C,D,E){function k(a,b){return new v(a,b)}function p(a,b,c){var d,g,f;(b=(d={statistics:a,isDate:b},d.statistics))||(b={});var h,e;null==b.min?d.isDate?(e=q(),h=e[0],e=e[1]):(h=0,e=100):b.min===b.max&&(d.isDate?(e=q(b.min),h=e[0],e=e[1]):0>b.min?(h=2*b.min,e=0):0<b.min?(h=0,e=2*b.min):(h=0,e=100));d=null!=h?h:b.min;b=null!=e?e:b.max;null!=h||null!=e?(g=d,f=b):!c||null!=a.avg&&a.stddev||(g=a.min,f=a.max);return null!=g?[g,f]:null}function q(a){var b=("number"===
typeof a?new Date(a):new Date).getUTCFullYear(),c=Date.UTC(b,0,1,12,0,0,0),b=Date.UTC(b,11,31,12,0,0,0);"number"===typeof a&&(a<c&&(c=a),a>b&&(b=a));return[c,b]}function F(a){var b=a.layer;return a.fields.filter(function(a){return!b.getField(a)})}function G(a){var b=a.layer;return a.fields.filter(function(a){a=b.getFieldUsageInfo(a);return!a||!a.supportsRenderer})}Object.defineProperty(f,"__esModule",{value:!0});var r=/^(\d+(\.\d+)?)\s*(%)$/i,H=[0,0,0,.4];f.createError=k;f.getDefaultDataRange=p;f.createColors=
function(a,b){for(var c=[],d=a.length,g=0;g<b;g++)c.push(new u(a[g%d]));return c};f.createStopValues=function(a,b){void 0===b&&(b=!0);var c=a.avg,d=c-a.stddev,g=c+a.stddev;d<a.min&&(d=a.min);g>a.max&&(g=a.max);b&&(c=d+(g-d)/2);a=l.round([d,g],{strictBounds:!0});d=a[0];g=a[1];a=[d,d+(c-d)/2,c,c+(g-c)/2,g];return l.round(a,{strictBounds:!0})};f.createSymbol=function(a,b,c,d,g,f,h){var e;switch(c){case "point":case "multipoint":c=null!=h?h:a.size;"2d"===d?e=new E({color:b,size:c,outline:{color:a.outline.color,
width:a.outline.width}}):"3d-flat"===d?e=new n({symbolLayers:[new z({size:c,resource:{primitive:"circle"},material:{color:b},outline:{color:a.outline.color,size:a.outline.width}})]}):-1<d.indexOf("3d-volumetric")&&(e=new n({symbolLayers:[new B({height:c,resource:{primitive:"3d-volumetric-uniform"===d?"sphere":"cylinder"},material:{color:b}})]}));break;case "polyline":a=null!=h?h:a.width;"2d"===d&&(e=new D({color:b,width:a}));break;case "polygon":"2d"===d&&(e=new C({color:b,outline:{color:a.outline.color,
width:a.outline.width}}));break;case "mesh":e=new A({symbolLayers:[new y({material:{color:b,colorMixMode:g},edges:null==f||"none"===f?null:{type:f,color:H}})]})}return e};f.verifyBasicFieldValidity=function(a,b,c){var d=F({layer:a,fields:b});if(d.length)return k(c,"Unknown fields: "+d.join(", ")+". You can only use fields defined in the layer schema");a=G({layer:a,fields:b});if(a.length)return k(c,"Unsupported fields: "+a.join(", ")+". You can only use fields that are accessible to the renderer i.e. FieldUsageInfo.supportsRenderer must be true")};
f.getClassBreaks=function(a){return m(a).then(function(b){var c=p({min:b.minValue,max:b.maxValue,avg:null,stddev:null},!1,!1);return(c?m(t.mixin(a,{classificationMethod:"equal-interval",numClasses:1,analyzeData:!1,minValue:c[0],maxValue:c[1],normalizationTotal:c[0]+c[1]})):w.resolve(b)).then(function(a){return{result:a,defaultValuesUsed:!!c}})})};f.getSizeRangeForAxis=function(a,b){var c=a.minSize;a=a.maxSize;"height"===b&&(c=((a-c)/2+c)/4.6,a*=2);return{minSize:c,maxSize:a}};f.isValidPointSize=function(a){return r.test(a)};
f.getPointSizeAlgorithm=function(a){a=a.match(r);var b=Number(a[1]);if("%"===a[3])return new x.default({scaleFactor:b/100,minSize:1.1})}});