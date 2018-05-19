// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/Accessor ../../../../core/Error ../../../../core/promiseUtils ../../../../core/accessorSupport/decorators".split(" "),function(l,m,g,d,h,k,f,c){return function(e){function a(){return null!==e&&e.apply(this,arguments)||this}g(a,e);a.prototype.updateControllerConfiguration=function(){var a=this,b=this.layerView.layer,c=b.source;return c&&"mapgis.layers.graphics.sources.CSVSource"===
c.declaredClass?f.resolve().then(function(){a._set("controllerConfiguration",{type:"memory",processing:b.processing&&b.processing.toWorker()||null})}):this._checkSupport().then(function(){a._set("controllerConfiguration",{type:"on-demand",gdbVersion:b.gdbVersion,historicMoment:b.historicMoment&&b.historicMoment.getTime(),processing:b.processing&&b.processing.toWorker()||null})})};a.prototype._checkSupport=function(){var a=this;return this.layerView.layer.source.parsedUrl?this.layerView.layer.when(function(){a._verifyCapabilities()}):
f.reject()};a.prototype._verifyCapabilities=function(){if(!this.layerView.layer.capabilities.operations.supportsQuery)throw new k("graphicscontroller:query-capability-required","Service requires query capabilities to be used as a feature layer",{layer:this.layerView.layer});};d([c.property()],a.prototype,"layerView",void 0);d([c.property({readOnly:!0})],a.prototype,"controllerConfiguration",void 0);return a=d([c.subclass("mapgis.views.2d.layers.support.StaticControllerConfigurator")],a)}(c.declared(h))});