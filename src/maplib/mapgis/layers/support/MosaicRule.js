// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define(["../../core/kebabDictionary","../../core/JSONSupport","../../core/lang","../../geometry/Point"],function(d,h,k,l){var e=d({MT_FIRST:"first",MT_LAST:"last",MT_MIN:"min",MT_MAX:"max",MT_MEAN:"mean",MT_BLEND:"blend",MT_SUM:"sum"}),f=d({esriMosaicNone:"none",esriMosaicCenter:"center",esriMosaicNadir:"nadir",esriMosaicViewpoint:"viewpoint",esriMosaicAttribute:"attribute",esriMosaicLockRaster:"lock-raster",esriMosaicNorthwest:"northwest",esriMosaicSeamline:"seamline"}),g=h.createSubclass({declaredClass:"mapgis.layers.support.MosaicRule",
properties:{ascending:{value:!0},lockRasterIds:{value:null},method:{value:null,json:{read:{source:["mosaicMethod","defaultMosaicMethod"],reader:function(a,b){a=b.mosaicMethod||b.defaultMosaicMethod;"byattribute"===a.toLowerCase()?a="attribute":"lockraster"===a.toLowerCase()&&(a="lock-raster");return f.fromJSON(a)}}}},multidimensionalDefinition:{value:[]},objectIds:{value:null,json:{read:{source:["fids"],reader:function(a,b){return b.fids}}}},operation:{value:null,json:{read:{source:["mosaicOperation",
"mosaicOperator"],reader:function(a,b){return e.fromJSON(b.mosaicOperation||b.mosaicOperator.toLowerCase())}}}},sortField:{value:null},sortValue:{value:null},viewpoint:{value:null,type:l},where:{value:null}},clone:function(){return g.fromJSON(this.toJSON())},toJSON:function(){var a=null,b=this.multidimensionalDefinition?this.multidimensionalDefinition.length:0;if(b)for(var a=[],c=0;c<b;c++)a.push("mapgis.layers.support.DimensionalDefinition"===this.multidimensionalDefinition[c].declaredClass?this.multidimensionalDefinition[c].toJSON():
this.multidimensionalDefinition[c]);b=this.ascending?null:!1;a={mosaicMethod:this.method?f.toJSON(this.method.toLowerCase()):null,where:this.where,sortField:this.sortField,sortValue:this.sortValue,ascending:b,lockRasterIds:this.lockRasterIds,viewpoint:this.viewpoint?this.viewpoint.toJSON():null,fids:this.objectIds,mosaicOperation:this.operation?e.toJSON(this.operation.toLowerCase()):null,multidimensionalDefinition:a};return k.filter(a,function(a){return null!=a})}});return g});