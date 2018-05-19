// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define(["require","exports","dojo/number","../languageUtils"],function(n,l,m,d){function k(d,e,h){if("undefined"===typeof h||0===+h)return Math[d](e);e=+e;h=+h;if(isNaN(e)||"number"!==typeof h||0!==h%1)return NaN;e=e.toString().split("e");e=Math[d](+(e[0]+"e"+(e[1]?+e[1]-h:-h)));e=e.toString().split("e");return+(e[0]+"e"+(e[1]?+e[1]+h:h))}Object.defineProperty(l,"__esModule",{value:!0});l.registerFunctions=function(g,e){function h(b,c,f){b=d.toNumber(b);return isNaN(b)?b:isNaN(c)||isNaN(f)||c>f?NaN:
b<c?c:b>f?f:b}g.number=function(b,c){return e(b,c,function(f,b,a){d.pcCheck(a,1,2);f=a[0];return d.isNumber(f)?f:null===f?0:d.isDate(f)||d.isBoolean(f)?Number(f):d.isArray(f)?NaN:""===f||void 0===f?Number(f):d.isString(f)?void 0!==a[1]?(a=d.multiReplace(a[1],"\u2030",""),a=d.multiReplace(a,"\u00a4",""),m.parse(f,{pattern:a})):Number(f.trim()):Number(f)})};g.abs=function(b,c){return e(b,c,function(f,b,a){d.pcCheck(a,1,1);return Math.abs(d.toNumber(a[0]))})};g.acos=function(b,c){return e(b,c,function(f,
b,a){d.pcCheck(a,1,1);return Math.acos(d.toNumber(a[0]))})};g.asin=function(b,c){return e(b,c,function(f,b,a){d.pcCheck(a,1,1);return Math.asin(d.toNumber(a[0]))})};g.atan=function(b,c){return e(b,c,function(f,b,a){d.pcCheck(a,1,1);return Math.atan(d.toNumber(a[0]))})};g.atan2=function(b,c){return e(b,c,function(f,b,a){d.pcCheck(a,2,2);return Math.atan2(d.toNumber(a[0]),d.toNumber(a[1]))})};g.ceil=function(b,c){return e(b,c,function(b,c,a){d.pcCheck(a,1,2);return 2===a.length?(b=d.toNumber(a[1]),
isNaN(b)&&(b=0),k("ceil",d.toNumber(a[0]),-1*b)):Math.ceil(d.toNumber(a[0]))})};g.round=function(b,c){return e(b,c,function(b,c,a){d.pcCheck(a,1,2);return 2===a.length?(b=d.toNumber(a[1]),isNaN(b)&&(b=0),k("round",d.toNumber(a[0]),-1*b)):Math.round(d.toNumber(a[0]))})};g.floor=function(b,c){return e(b,c,function(b,c,a){d.pcCheck(a,1,2);return 2===a.length?(b=d.toNumber(a[1]),isNaN(b)&&(b=0),k("floor",d.toNumber(a[0]),-1*b)):Math.floor(d.toNumber(a[0]))})};g.cos=function(b,c){return e(b,c,function(b,
c,a){d.pcCheck(a,1,1);return Math.cos(d.toNumber(a[0]))})};g.isnan=function(b,c){return e(b,c,function(b,c,a){d.pcCheck(a,1,1);return"number"===typeof a[0]&&isNaN(a[0])})};g.exp=function(b,c){return e(b,c,function(b,c,a){d.pcCheck(a,1,1);return Math.exp(d.toNumber(a[0]))})};g.log=function(b,c){return e(b,c,function(b,c,a){d.pcCheck(a,1,1);return Math.log(d.toNumber(a[0]))})};g.pow=function(b,c){return e(b,c,function(b,c,a){d.pcCheck(a,2,2);return Math.pow(d.toNumber(a[0]),d.toNumber(a[1]))})};g.random=
function(b,c){return e(b,c,function(b,c,a){d.pcCheck(a,0,0);return Math.random()})};g.sin=function(b,c){return e(b,c,function(b,c,a){d.pcCheck(a,1,1);return Math.sin(d.toNumber(a[0]))})};g.sqrt=function(b,c){return e(b,c,function(b,c,a){d.pcCheck(a,1,1);return Math.sqrt(d.toNumber(a[0]))})};g.tan=function(b,c){return e(b,c,function(b,c,a){d.pcCheck(a,1,1);return Math.tan(d.toNumber(a[0]))})};g.defaultvalue=function(b,c){return e(b,c,function(b,c,a){d.pcCheck(a,2,2);return null===a[0]||""===a[0]||
void 0===a[0]?a[1]:a[0]})};g.isempty=function(b,c){return e(b,c,function(b,c,a){d.pcCheck(a,1,1);return null===a[0]||""===a[0]||void 0===a[0]?!0:!1})};g["boolean"]=function(b,c){return e(b,c,function(b,c,a){d.pcCheck(a,1,1);return d.toBoolean(a[0])})};g.constrain=function(b,c){return e(b,c,function(b,c,a){d.pcCheck(a,3,3);b=d.toNumber(a[1]);c=d.toNumber(a[2]);if(d.isArray(a[0])){var e=[],f=0;for(a=a[0];f<a.length;f++)e.push(h(a[f],b,c));return e}if(d.isImmutableArray(a[0])){e=[];for(f=0;f<a[0].length();f++)e.push(h(a[0].get(f),
b,c));return e}return h(a[0],b,c)})}}});