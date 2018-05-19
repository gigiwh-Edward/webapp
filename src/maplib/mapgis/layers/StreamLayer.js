// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require dojo/_base/lang ../core/sniff ../core/Collection ../core/Logger ../core/promiseUtils ../Graphic ../geometry/SpatialReference ../geometry/Extent ./FeatureLayer ./support/arcgisLayerUrl".split(" "),function(h,d,k,m,n,g,p,l,q,r,t){var u=n.getLogger("mapgis.layers.StreamLayer");return r.createSubclass({declaredClass:"mapgis.layers.StreamLayer",constructor:function(a){a&&(a.definitionExpression&&console.warn("StreamLayer.definitionExpression is deprecated. Use the filter.where property"),a.geometryDefinition&&
console.warn("StreamLayer.geometryDefinition is deprecated. Use the filter.geometry property"));this._set("type","stream");this._set("operationalLayerType","ArcGISStreamLayer");"WebSocket"in window||(this.loadError=Error("WebSocket is not supported in this browser"),console.log("WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))},normalizeCtorArgs:function(a,b){if("string"===typeof a)return d.mixin({},{url:a},b);if(a&&a.layerDefinition)return d.mixin({},
{collectionLayer:a},b);a&&a.filter&&(a.filter=this._makeFilter({where:a.filter.where||null,geometry:a.filter.geometry||null}),delete a.geometryDefinition,delete a.definitionExpression);return a},getDefaults:function(a){return d.mixin(this.inherited(arguments)||{},{outFields:["*"]})},properties:{definitionExpression:{value:null,get:function(){this.loaded&&console.warn("StreamLayer.definitionExpression is deprecated. Access the filter.where property");return this.filter.where},set:function(a){this.loaded&&
console.warn("StreamLayer.definitionExpression is deprecated. Use the updateFilter method to change the attribute filter");a=this._makeFilter({where:a});this._set("filter",a)}},geometryDefinition:{value:null,get:function(){this.loaded&&console.warn("StreamLayer.geometryDefinition is deprecated. Access the filter.geometry property");return this.filter.geometry},set:function(a){this.loaded&&console.warn("StreamLayer.geometryDefinition is deprecated. Use the updateFilter method to change the spatial filter");
a=this._makeFilter({geometry:a});this._set("filter",a)}},filter:{value:{geometry:null,where:null},constructOnly:!0},maxReconnectAttempts:10,maximumTrackPoints:1,operationalLayerType:"ArcGISStreamLayer",purgeOptions:{value:{},set:function(a){var b=this._get("purgeOptions"),c={},e=!1;if(a&&"object"===typeof a&&b!==a&&(a.hasOwnProperty("displayCount")&&0<a.displayCount&&(c.displayCount=a.displayCount,e=!0),a.hasOwnProperty("age")&&0<=a.age&&(c.age=a.age,e=!0),e))return this._set("purgeOptions",c)}},
socketDirection:"subscribe",spatialReference:{value:l.WGS84,type:l,json:{origins:{service:{read:{source:"spatialReference"}}}}},type:{value:"stream",json:{read:!1}},url:{set:function(a){a=t.sanitizeUrlWithLayerId(this,a,u);this._set("url",a.url);null!=a.layerId&&this._set("layerId",a.layerId)}}},createGraphicsSource:function(){return g.create(function(a){h(["./graphics/sources/StreamLayerSource"],a)}).then(function(a){var b=new a({layer:this});return b.when(function(){this.emit("graphics-source-create",
{graphicsSource:b});return b}.bind(this))}.bind(this))},createGraphicsController:function(a){var b=a.layerView,c=b.view.map,e=m.ofType(p),c=c.view===b.view?this.graphics:new e,f=d.mixin(a.options||{},{layer:this,layerView:b,graphics:c});return g.create(function(a){h(["./graphics/controllers/StreamController"],a)}).then(function(a){var b=new a(f);return b.when(function(){this.emit("graphics-controller-create",{graphicsController:b});return b}.bind(this))}.bind(this))},loadFromPortal:function(a){a=
d.mixin(a,{supportedTypes:["Stream Service"]});return this.inherited(arguments,[a])},updateFilter:function(a){return g.create(function(b,c){try{var e=this._makeFilter(a);this._set("filter",e);b({filter:this.filter})}catch(f){c(f)}}.bind(this))},importLayerViewModule:function(a){switch(a.type){case "2d":return g.create(function(a){h(["../views/2d/layers/StreamLayerView2D"],a)});case "3d":return g.create(function(a){h(["../views/3d/layers/StreamLayerView3D"],a)})}},_initLayerProperties:function(a){this.source=
a;var b=this.source.relatedFeaturesInfo;b&&(this.objectIdField=b.joinField,this.source.relatedFeaturesInfo.outFields=this.outFields?this.outFields.splice(0):null);a=a.layerDefinition;this.read(a,{origin:"service",url:this.parsedUrl});if(b&&b.outFields&&"*"!==b.outFields[0]){var c=b.outFields.map(function(a){return a.toLowerCase()});(this.requiredFields||[]).forEach(function(a){-1===c.indexOf(a.toLowerCase())&&b.outFields.push(a)})}a._ssl&&(this.url=this.url.replace(this.reHttp,"https:"));this._verifyFields();
this._addSymbolUrlTokens();this.useQueryTimestamp=k("ie")||k("safari")},_makeFilter:function(a){var b;if(a){b=a.hasOwnProperty("where")?a.where:this.filter.where;if(a.hasOwnProperty("geometry")){if((a=a.geometry)&&!a.hasOwnProperty("xmin"))throw console.log("geometry is not an extent: ",a),Error("Cannot set filter. Only Extent is supported for the geometry filter");a&&!a.declaredClass&&(a=new q(a))}else a=this.filter.geometry;b={where:b,geometry:a}}else b={geometry:null,where:null};return b},_readObjectIdField:function(a){if(a.objectIdField)return a.objectIdField;
if(a.fields){a=a.fields;for(var b,c=0,e=a.length;c<e;c++){var f=a[c];if("esriFieldTypeOID"===f.type){b=f.name;break}}if(!b){b=1;var d=[];a.forEach(function(a){"objectid"===a.name.split("_")[0]&&d.push(a.name)});if(d.length)for(;-1!==d.indexOf("objectid_"+b);)b+=1;b="objectid_"+b}return b}},_verifyFields:function(){}})});