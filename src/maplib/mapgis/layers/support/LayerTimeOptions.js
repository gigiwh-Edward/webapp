// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define(["../../core/declare","dojo/_base/lang","../../core/lang"],function(b,c,d){return b(null,{declaredClass:"mapgis.layers.support.LayerTimeOptions",constructor:function(a){a&&c.mixin(this,a)},toJSON:function(){return d.fixJson({timeDataCumulative:this.timeDataCumulative,timeOffset:this.timeOffset,timeOffsetUnits:this.timeOffsetUnits,useTime:this.useTime})}})});