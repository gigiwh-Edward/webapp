// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define(["dojo/_base/lang","../../request","./WMBaseTask"],function(e,g,a){return a.createSubclass({declaredClass:"mapgis.tasks.workflow.LOILayerTask",properties:{url:{}},_getJobIdField:function(){var f=this.parsedUrl.path,a=this._encode(e.mixin({},this.parsedUrl.query,{f:"json"}));return g(f,{query:a,callbackParamName:"callback"},this.requestOptions).then(function(c){var d=null,b=null;c=c.data.fields;if(null==c)return Error(f+", data fields \x3d null");for(var a=0,e=c.length;a<e;a++)b=c[a].name.toString(),
null!=b&&"JOB_ID"==b.toUpperCase().substring(b.length-6)&&(null==d?d=b:-1!=b.toUpperCase().indexOf("JTX_JOBS_AOI")&&(d=b));return null!=d?d:Error("jobIDField \x3d null")})}})});