// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define(["../../core/Accessor","../../core/kebabDictionary","dojo/_base/array"],function(c,d,e){var f=d({preserveShape:"preserve-shape"});return c.createSubclass({declaredClass:"mapgis.tasks.support.LengthsParameters",properties:{calculationType:null,geodesic:null,lengthUnit:null,polylines:null},toJSON:function(){var b=e.map(this.polylines,function(a){return a.toJSON()}),a={};a.polylines=JSON.stringify(b);b=this.polylines[0].spatialReference;a.sr=b.wkid?b.wkid:JSON.stringify(b.toJSON());this.lengthUnit&&
(a.lengthUnit=this.lengthUnit);this.geodesic&&(a.geodesic=this.geodesic);this.calculationType&&(a.calculationType=f.toJSON(this.calculationType));return a}})});