// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Accessor ../../core/Handles ../../core/Logger ../../core/watchUtils ../../core/accessorSupport/decorators ../../views/3d/interactive/measurementTools/directLineMeasurement3D/DirectLineMeasurement3DTool ../../views/3d/interactive/measurementTools/support/unitUtils".split(" "),function(r,t,h,d,k,l,m,f,c,n,p){var e="metric imperial inches feet yards miles nautical-miles us-feet meters kilometers".split(" "),
q=m.getLogger("mapgis.widgets.DirectLineMeasurement3D.DirectLineMeasurement3DViewModel");return function(g){function b(a){a=g.call(this,a)||this;a._handles=new l;a._userUnitOptions=null;a._userUnit=null;a.view=null;a.visible=!0;a.tool=null;return a}h(b,g);b.prototype.initialize=function(){var a=this;this._handles.add([f.init(this,["view.ready","visible"],function(){a._toggleTool()}),f.init(this,"unit",function(b){a.tool&&(a.tool.unit=b)})])};b.prototype.destroy=function(){this.view=null;this._toggleTool();
this._handles.destroy();this._handles=null};Object.defineProperty(b.prototype,"state",{get:function(){var a=!!this.get("view.ready"),b=this.get("view.type");if(a&&"3d"===b)return this.get("tool.isMeasuring")?"measuring":"ready";a&&"3d"!==b&&q.error("DirectLineMeasurement3D widget is not implemented for MapView");return"disabled"},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"isSupported",{get:function(){return"3d"===this.get("view.type")},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"measurement",{get:function(){if(!this.tool)return null;var a=this.tool.model,b=a.measurementMode,c="geodesic"===b,a=a.validMeasurement;return{mode:b,directDistance:{text:c?null:this.tool.triangleView.directLabel,state:a&&!c?"available":"unavailable"},horizontalDistance:{text:this.tool.triangleView.horizontalLabel,state:a?"available":"unavailable"},verticalDistance:{text:this.tool.triangleView.verticalLabel,state:a?"available":"unavailable"}}},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"defaultUnit",{get:function(){return this.defaultUnitFromPortal||this.defaultUnitFromSpatialReference||"metric"},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"defaultUnitFromSpatialReference",{get:function(){return p.defaultUnitForSpatialReference(this.view&&this.view.spatialReference)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"defaultUnitFromPortal",{get:function(){var a=this.get("view.map.portalItem.portal");if(!a)return null;switch(a.user&&a.user.units||
a.units){case "metric":return"metric";case "english":return"imperial";default:return null}},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"unitOptions",{get:function(){return this._filteredOrAllUnits(this._userUnitOptions)},set:function(a){this._userUnitOptions=a;this._set("unitOptions",this._filteredOrAllUnits(this._userUnitOptions))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"unit",{get:function(){return this._userUnit?this._userUnit=this._findSelectableUnit(this._userUnit,
this.defaultUnit):this._findSelectableUnit(this.defaultUnit)},set:function(a){this._userUnit=this._findSelectableUnit(a,this._userUnit);this.notifyChange("unit")},enumerable:!0,configurable:!0});b.prototype.clearMeasurement=function(){this.tool&&this.tool.clearMeasurement()};b.prototype._toggleTool=function(){this.view&&this.view.ready&&!this.tool&&(this._set("tool",new n({view:this.view,unit:this.unit})),this.visible&&this.tool.start());!this.tool||this.view&&this.view.ready||(this.tool.destroy(),
this._set("tool",null));this.tool&&(this.visible?this.tool.start():(this.tool.stop(),"measured"!==this.tool.model.state&&this.clearMeasurement()))};b.prototype._findSelectableUnit=function(a,b){var c=this.unitOptions;return-1!==c.indexOf(a)?a:b?this._findSelectableUnit(b):c[0]};b.prototype._filteredOrAllUnits=function(a){if(!a)return e.slice();a=a.filter(function(a){return-1!==e.indexOf(a)});return 0===a.length?e.slice():a};d([c.property({dependsOn:["view.ready","tool.isMeasuring"],readOnly:!0})],
b.prototype,"state",null);d([c.property({dependsOn:["view.type"],readOnly:!0})],b.prototype,"isSupported",null);d([c.property()],b.prototype,"view",void 0);d([c.property({dependsOn:"view.ready tool.triangleView tool.model.directDistance tool.model.horizontalDistance tool.model.verticalDistance tool.model.geodesicDistance tool.model.measurementMode".split(" "),readOnly:!0})],b.prototype,"measurement",null);d([c.property()],b.prototype,"visible",void 0);d([c.property({readOnly:!0})],b.prototype,"tool",
void 0);d([c.property({readOnly:!0,dependsOn:["defaultUnitFromPortal","defaultUnitFromSpatialReference"]})],b.prototype,"defaultUnit",null);d([c.property({readOnly:!0,dependsOn:["view.spatialReference"]})],b.prototype,"defaultUnitFromSpatialReference",null);d([c.property({readOnly:!0,dependsOn:["view.map.portalItem.portal.units","view.map.portalItem.portal.user.units"]})],b.prototype,"defaultUnitFromPortal",null);d([c.property({dependsOn:["view.spatialReference"]})],b.prototype,"unitOptions",null);
d([c.property({dependsOn:["unitOptions","defaultUnit"]})],b.prototype,"unit",null);d([c.property()],b.prototype,"clearMeasurement",null);return b=d([c.subclass("mapgis.widgets.DirectLineMeasurement3D.DirectLineMeasurement3DViewModel")],b)}(c.declared(k))});