// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/generatorHelper ../core/tsSupport/awaiterHelper ../Basemap ../Ground ../WebScene ../core/JSONSupport ../core/MultiOriginJSONSupport ../core/accessorSupport/ensureType ../core/accessorSupport/extensions/serializableProperty/type ../layers/GroupLayer ../layers/mixins/OperationalLayer".split(" "),function(X,v,f,e,J,K,L,M,N,D,O,E,F){function q(b,a){return e(this,void 0,void 0,function(){var d;return f(this,function(c){switch(c.label){case 0:d=b.typeName;switch(d){case "array":return[3,
1];case "union":return[3,3];case "json":return[3,5];case "native":return[3,7]}return[3,9];case 1:return[4,P(b,a)];case 2:return c.sent(),[3,9];case 3:return[4,Q(b,a)];case 4:return c.sent(),[3,9];case 5:return[4,r(b,a)];case 6:return c.sent(),[3,9];case 7:return[4,R(b,a)];case 8:return c.sent(),[3,9];case 9:return[2]}})})}function R(b,a){return e(this,void 0,void 0,function(){return f(this,function(d){a.addProperty({path:a.pathString,type:t(b)});return[2]})})}function P(b,a){return e(this,void 0,
void 0,function(){return f(this,function(d){switch(d.label){case 0:return a.pushPath(a.popPath()+"[]"),[4,q(b.elementType,a)];case 1:return d.sent(),[2]}})})}function S(b){return T[b]||b}function Q(b,a){return e(this,void 0,void 0,function(){var d,c,g,u,k,l;return f(this,function(m){switch(m.label){case 0:d=a.pathString,c=a.popPath(),g=[],u=0,k=b.types,m.label=1;case 1:if(!(u<k.length))return[3,5];l=k[u];if("native"!==l.type.typeName)return[3,2];g.push(l.type);return[3,4];case 2:return a.pushPath(c+
"\x3c"+S(l.value)+"\x3e"),[4,q(l.type,a)];case 3:m.sent(),a.popPath(),m.label=4;case 4:return u++,[3,1];case 5:return g.length&&a.addProperty({type:g.map(t).join("|"),path:d}),a.pushPath(c),[2]}})})}function U(b,a,d){return e(this,void 0,void 0,function(){return f(this,function(c){switch(c.label){case 0:return b.type!==L||"layers"!==a?[3,2]:[4,p("web-scene/operational-layers")];case 1:return[2,c.sent()];case 2:return b.type!==J||"baseLayers"!==a?[3,4]:[4,p("web-scene/basemap")];case 3:return[2,c.sent()];
case 4:return b.type!==K||"layers"!==a?[3,6]:[4,p("web-scene/ground")];case 5:return[2,c.sent()];case 6:return b.type!==E||"layers"!==a?[3,8]:[4,p("web-scene/operational-layers",function(a){return a!==E})];case 7:return[2,c.sent()];case 8:return[2,V(d)]}})})}function r(b,a){return e(this,void 0,void 0,function(){var d,c,g,u,k,l,m,e,G,h,t,p,A,x,y,w,v,q,B,r;return f(this,function(n){switch(n.label){case 0:d=b.type.__accessorMetadata__;c=b.type.prototype.declaredClass.replace(/\./g,"/");g=d&&d.properties;
c&&a.classPaths&&(a.classPaths[a.pathString]=c);if(!g)return a.addProperty({path:a.pathString,type:"unknown"}),[2];if(u=a.seen.get(b.type)){k=0;for(l=u;k<l.length;k++)m=l[k],a.pushPath(m.path),a.addProperty({path:a.pathString,type:m.type}),a.popPath();return[2]}e=a.flatProperties.length;G=a.pathString;h=[];for(t in g)h.push(t);p=0;n.label=1;case 1:if(!(p<h.length))return[3,7];A=h[p];x=g[A];if(x.json){n=x.json.origins;var f=x.json.write,z=n&&n["web-document"]&&n["web-document"].write;y=n&&n["web-scene"]&&
n["web-scene"].write||z||f||null}else y=null;if(!y||!y.enabled)return[3,6];w=y.target;return"string"!==typeof w&&null!=w?[3,4]:[4,U(b,A,x)];case 2:return(v=n.sent())?[4,H(v,"string"===typeof w?w:A,a)]:[3,6];case 3:return n.sent(),[3,6];case 4:return[4,W(w,a)];case 5:n.sent(),n.label=6;case 6:return p++,[3,1];case 7:if(a.flatProperties.length===e)return a.addProperty({path:a.pathString,type:"unknown"}),[2];q=[];for(B=e;B<a.flatProperties.length;B++)r=a.flatProperties[B],q.push({path:r.path.slice(G.length+
1),type:r.type});a.addSeen(b.type,q);return[2]}})})}function H(b,a,d){return e(this,void 0,void 0,function(){return f(this,function(c){switch(c.label){case 0:return d.pushPath(a),[4,q(b,d)];case 1:return c.sent(),d.popPath(),[2]}})})}function W(b,a){return e(this,void 0,void 0,function(){var d,c,g;return f(this,function(e){for(d in b)c=b[d],g=void 0,g=c.types?z(c.types):h(c.type),H(g,d,a);return[2]})})}function p(b,a){return e(this,void 0,void 0,function(){var d,c,g,e,k,l,m,h;return f(this,function(f){switch(f.label){case 0:d=
F.supportedTypes[b];c={typeName:"union",key:"layerType",types:[]};g=[];for(e in d)g.push(e);k=0;f.label=1;case 1:if(!(k<g.length))return[3,4];l=g[k];return[4,F.typeModuleMap[l]()];case 2:m=f.sent();if(!m||a&&!a(m))return[3,3];c.types.push({type:{typeName:"json",type:m},value:l});f.label=3;case 3:return k++,[3,1];case 4:if(0===c.types.length)return[2,null];h={typeName:"array",elementType:1===c.types.length?c.types[0].type:c};return[2,h]}})})}function t(b){switch(b.typeName){case "array":return t(b.elementType)+
"[]";case "union":return""+b.types.map(function(a){return t(a.type)}).join(" | ");case "native":switch(b.type){case Number:return"number";case D.Integer:return"integer";case String:return"string";case Boolean:return"boolean";default:return"unknown"}case "json":return b.type.prototype.declaredClass}}function V(b){return b.types?z(b.types):h(b.json&&b.json.type||b.type)}function z(b){if(Array.isArray(b))return{typeName:"array",elementType:z(b[0])};var a=[],d;for(d in b.typeMap){var c=b.typeMap[d];a.push({type:h(c),
value:C(c)?null:d})}return 1===a.length?a[0].type:{typeName:"union",key:"string"===typeof b.key?b.key:"type",types:a}}function h(b){if(!b)return{typeName:"native",type:null};if(Array.isArray(b))return{typeName:"array",elementType:h(b[0])};if(O.isCollection(b)){var a;if(b=b.prototype.itemType&&b.prototype.itemType.Type)if("function"===typeof b)a={typeName:"array",elementType:h(b)};else if(b.typeMap){var d=[];for(a in b.typeMap){var c=b.typeMap[a];d.push({type:h(c),value:C(c)?null:a})}a={typeName:"array",
elementType:{typeName:"union",key:"string"===typeof b.key?b.key:"type",types:d}}}else a=void 0;else a={typeName:"array",elementType:{typeName:"native",type:null}};return a}if(C(b))return{typeName:"native",type:b};a=(a=b._meta&&b._meta.bases)?-1!==a.indexOf(M)||-1!==a.indexOf(N):!1;return a?{typeName:"json",type:b}:{typeName:"native",type:null}}function C(b){return b===String||b===Boolean||b===Number||b===D.Integer}Object.defineProperty(v,"__esModule",{value:!0});v.scan=function(b){return e(this,void 0,
void 0,function(){var a,d;return f(this,function(c){switch(c.label){case 0:return a=new I,[4,r({typeName:"json",type:b},a)];case 1:return c.sent(),d=a.flatProperties,d.sort(function(a,b){return a.path.localeCompare(b.path)}),[2,d]}})})};v.collectClassPaths=function(b){return e(this,void 0,void 0,function(){var a;return f(this,function(d){switch(d.label){case 0:return a=new I({classPaths:{},cacheEnabled:!1}),[4,r({typeName:"json",type:b},a)];case 1:return d.sent(),[2,a.classPaths]}})})};var T={"unique-value":"uniqueValue",
"class-breaks":"classBreaks","point-3d":"PointSymbol3D","line-3d":"LineSymbol3D","mesh-3d":"MeshSymbol3D","polygon-3d":"PolygonSymbol3D","label-3d":"LabelSymbol3D","web-style":"styleSymbolReference",text:"Text",object:"Object",icon:"Icon",fill:"Fill",extrude:"Extrude",line:"Line",path:"Path","point-cloud-class-breaks":"pointCloudClassBreaksRenderer","point-cloud-rgb":"pointCloudRGBRenderer","point-cloud-stretch":"pointCloudStretchRenderer","point-cloud-unique-value":"pointCloudUniqueValueRenderer",
"fixed-size":"pointCloudFixedSizeAlgorithm",splat:"pointCloudSplatAlgorithm",bitfield:"pointCloudBitfieldFilter","return":"pointCloudReturnFilter",value:"pointCloudValueFilter"},I=function(){function b(a){this.flatProperties=[];this.path=[];this.seen=new Map;a&&a.classPaths&&(this.classPaths=a.classPaths);this.cacheEnabled=!(!a||!a.cacheEnabled)}b.prototype.addProperty=function(a){this.flatProperties.push(a)};b.prototype.addSeen=function(a,b){this.cacheEnabled&&this.seen.set(a,b)};b.prototype.pushPath=
function(a){this.path.push(a)};b.prototype.popPath=function(){return this.path.pop()};Object.defineProperty(b.prototype,"pathString",{get:function(){return this.path.join(".")},enumerable:!0,configurable:!0});return b}()});