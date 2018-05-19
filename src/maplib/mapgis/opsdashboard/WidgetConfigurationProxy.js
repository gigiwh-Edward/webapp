// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/extendsHelper ../core/tsSupport/decorateHelper ../core/typescript ./core/errorMessages ./core/ExtensionConfigurationBase".split(" "),function(m,n,h,f,g,k,l){return function(e){function b(){var a=null!==e&&e.apply(this,arguments)||this;a.config=null;return a}h(b,e);b.prototype._initializeResponseReceived=function(a){var c=this;return this.inherited(arguments).then(function(){c.config.dataSourceConfigs||(c.config.dataSourceConfigs=[])})};b.prototype._messageReceived=
function(a){switch(a.functionName.toLowerCase()){case "datasourceselected":return this._dataSourceSelectionChanged(a.args);case "mapWidgetSelected":return this._mapWidgetSelectionChanged(a.args.mapWidgetId)}};b.prototype.getDataSourceConfig=function(a){if(!this._isHostInitialized())throw Error(k.hostNotReady);var c=a;"object"===typeof a&&(c=a.id);for(a=0;a<this.config.dataSourceConfigs.length;a++)if(this.config.dataSourceConfigs[a].dataSourceId===c)return this.config.dataSourceConfigs[a];return null};
b.prototype._dataSourceSelectionChanged=function(a){var c=this;a=a.dataSourceId;for(var b=0;b<this.config.dataSourceConfigs.length;b++)if(this.config.dataSourceConfigs[b].dataSourceId!==a){this.config.dataSourceConfigs.splice(b,1);break}var d=this.getDataSourceConfig(a);d||(d={dataSourceId:a},this.config.dataSourceConfigs.push(d));this.getDataSourceProxy(a).then(function(a){c.dataSourceSelectionChanged(a,d);c.emit("data-source-selection-changed",{dataSourceProxy:a,dataSourceConfig:d})})};b.prototype.dataSourceSelectionChanged=
function(a,b){};b.prototype._mapWidgetSelectionChanged=function(a){var b=this;this.getMapWidgetProxy(a).then(function(a){b.mapWidgetSelectionChanged(a);b.emit("map-widget-selection-changed",{mapWidgetProxy:a})})};b.prototype.mapWidgetSelectionChanged=function(a){};f([g.shared("mapgis.opsdashboard.WidgetConfigurationProxy")],b.prototype,"declaredClass",void 0);return b=f([g.subclass()],b)}(l)});