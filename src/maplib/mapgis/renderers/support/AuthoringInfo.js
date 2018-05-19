// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/kebabDictionary ../../core/accessorSupport/decorators ./AuthoringInfoVisualVariable".split(" "),function(n,p,k,d,l,e,c,m){var g=e({esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation"}),h=e({classedSize:"class-breaks-size",
classedColor:"class-breaks-color",univariateColorSize:"univariate-color-size"});return function(e){function a(b){b=e.call(this)||this;b.lengthUnit=null;b.visualVariables=null;return b}k(a,e);f=a;Object.defineProperty(a.prototype,"classificationMethod",{get:function(){if("class-breaks-size"===this.type||"class-breaks-color"===this.type){var b=this._get("classificationMethod");return b?b:"manual"}return null},set:function(b){this._set("classificationMethod",b)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,
"fields",{get:function(){return"predominance"===this.type?this._get("fields"):null},set:function(b){this._set("fields",b)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"standardDeviationInterval",{get:function(){return"standard-deviation"===this.classificationMethod?this._get("standardDeviationInterval"):null},set:function(b){this._set("standardDeviationInterval",b)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"type",{get:function(){return this._get("type")},
set:function(b){var a=b;"classed-size"===b?a="class-breaks-size":"classed-color"===b&&(a="class-breaks-color");this._set("type",a)},enumerable:!0,configurable:!0});a.prototype.clone=function(){return new f({classificationMethod:this.classificationMethod,fields:this.fields&&this.fields.slice(0),lengthUnit:this.lengthUnit,standardDeviationInterval:this.standardDeviationInterval,type:this.type,visualVariables:this.visualVariables&&this.visualVariables.map(function(a){return a.clone()})})};d([c.property({type:String,
value:null,dependsOn:["type"],json:{read:g.read,write:g.write}})],a.prototype,"classificationMethod",null);d([c.property({type:[String],value:null,dependsOn:["type"],json:{write:!0}})],a.prototype,"fields",null);d([c.property({type:String,json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],a.prototype,"lengthUnit",void 0);d([c.property({type:Number,value:null,dependsOn:["classificationMethod"],json:{write:!0}})],a.prototype,"standardDeviationInterval",null);d([c.property({type:String,
value:null,json:{read:h.read,write:h.write}})],a.prototype,"type",null);d([c.property({type:[m],json:{write:!0}})],a.prototype,"visualVariables",void 0);return a=f=d([c.subclass("mapgis.renderers.support.AuthoringInfo")],a);var f}(c.declared(l))});