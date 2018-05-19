// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("../../geometry/Extent ../../geometry/Point ../../geometry/Polyline ../../geometry/SpatialReference ./FeatureSet ../../Graphic dojo/_base/array".split(" "),function(m,n,p,q,r,g,e){return r.createSubclass({declaredClass:"mapgis.tasks.support.DirectionsFeatureSet",properties:{geometryType:"esriGeometryPolyline",extent:{type:m,json:{read:{source:"summary.envelope"}}},features:{value:null,json:{read:function(a,d){a.forEach(function(a){this._decompressFeatureGeometry(a,d.summary.envelope.spatialReference)},
this);var f=q.fromJSON(d.spatialReference);return a.map(function(a){var b=g.fromJSON(a),h=a.geometry&&a.geometry.spatialReference;b.geometry&&!h&&(b.geometry.spatialReference=f);b.strings=a.strings;b.events=(a.events||[]).map(function(c){var b=new g({geometry:new n({x:c.point.x,y:c.point.y,z:c.point.z,hasZ:void 0!==c.point.z,spatialReference:a.geometry&&a.geometry.spatialReference}),attributes:{ETA:c.ETA,arriveTimeUTC:c.arriveTimeUTC}});b.strings=c.strings;return b});return b})}}},mergedGeometry:{value:null,
readOnly:!0,dependsOn:["features","extent.spatialReference"],get:function(){if(!this.features)return null;var a=e.map(this.features,function(a){return a.geometry}),d=this.get("extent.spatialReference");return this._mergePolylinesToSinglePath(a,d)}},routeId:null,routeName:null,strings:{value:null,readOnly:!0,dependsOn:["features"],get:function(){return e.map(this.features,function(a){return a.strings})}},totalDriveTime:{value:null,json:{read:{source:"summary.totalDriveTime"}}},totalLength:{value:null,
json:{read:{source:"summary.totalLength"}}},totalTime:{value:null,json:{read:{source:"summary.totalTime"}}}},_decompressFeatureGeometry:function(a,d){a.geometry=this._decompressGeometry(a.compressedGeometry,d)},_decompressGeometry:function(a,d){var f=0,e=0,b=[],h,c,l;(c=a.match(/((\+|\-)[^\+\-]+)/g))||(c=[]);l=parseInt(c[0],32);for(var k=1;k<c.length;k+=2)f=a=parseInt(c[k],32)+f,e=h=parseInt(c[k+1],32)+e,b.push([a/l,h/l]);return{paths:[b],spatialReference:d}},_mergePolylinesToSinglePath:function(a,
d){var f=[];e.forEach(a,function(a){e.forEach(a.paths,function(a){f=f.concat(a)})});var g=[],b=[0,0];e.forEach(f,function(a){if(a[0]!==b[0]||a[1]!==b[1])g.push(a),b=a});return new p({paths:[g]},d)}})});