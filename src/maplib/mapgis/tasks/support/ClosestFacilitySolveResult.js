// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("dojo/_base/array ../../Graphic ../../core/JSONSupport ../../geometry/SpatialReference ./DirectionsFeatureSet ./NAMessage".split(" "),function(c,d,b,e,f,g){return b.createSubclass({declaredClass:"mapgis.tasks.support.ClosestFacilitySolveResult",properties:{directions:{value:null,type:[f]},facilities:{value:null,json:{read:function(a){return a&&this._graphicsFromJson(a)}}},incidents:{value:null,json:{read:function(a){return a&&this._graphicsFromJson(a)}}},messages:{value:null,type:[g]},pointBarriers:{value:null,
json:{read:function(a){return a&&this._graphicsFromJson(a)}}},polylineBarriers:{value:null,json:{read:function(a){return a&&this._graphicsFromJson(a)}}},polygonBarriers:{value:null,json:{read:function(a){return a&&this._graphicsFromJson(a)}}},routes:{value:null,json:{read:function(a){return a&&this._graphicsFromJson(a)}}}},_graphicsFromJson:function(a){var b=e.fromJSON(a.spatialReference);return c.map(a.features,function(a){a=d.fromJSON(a);a.geometry.set("spatialReference",b);return a})}})});