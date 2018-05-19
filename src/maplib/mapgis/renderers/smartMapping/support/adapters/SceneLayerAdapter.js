// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper dojo/_base/lang ../../../../Graphic ../../../../core/Error ../../../../core/Handles ../../../../core/promiseUtils ../../../../core/accessorSupport/decorators ../../../../layers/support/fieldUtils ../../statistics/support/utils ./FeatureLayerAdapter ./LayerAdapter ./support/utils ../../../../tasks/support/FeatureSet".split(" "),function(D,E,x,y,t,p,k,z,e,r,n,A,B,C,l,v){return function(w){function d(a){var b=
w.call(this)||this;b._handles=new z;b._layer=a.layer;return b}x(d,w);d.prototype._hasCachedStatistics=function(a){return this._layer.hasCachedStatistics(a)};d.prototype._fetchFeaturesFromMemory=function(a){var b=this;return a?a.whenLayerView(this._layer).then(function(a){var c=e.create(function(c,f){var m=a.watch("updating",function(){b._handles.remove("layerViewUpdate");a.queryFeatures().then(function(a){c(a.features)}).catch(function(a){f(a)})});b._handles.add(m,"layerViewUpdate")});e.timeout(c,
1E4,null);return c}):e.reject(new k("scene-layer-adapter:insufficient-data","view is required to fetch the features from layerView"))};d.prototype._generateFeatureSetForCachedHistogram=function(a,b,c,f){void 0===b&&(b=a.minimum);void 0===c&&(c=a.maximum);for(var m=[],g=0;g<f;g++)m[g]=0;for(var q=a.counts.length,d=a.minimum,e=a.maximum,g=0;g<q;g++){var h=(g+.5)/q,h=((1-h)*d+h*e-b)/(c-b)*f;0<=h&&h<=f&&(m[h===f?f-1:Math.floor(h)]+=a.counts[g])}var k=[];m.forEach(function(a,c){var b=new p({attributes:{}});
b.attributes.EXPR_1=c+1;b.attributes.countOFExpr=a;k.push(b)});a=new v;a.features=k;return a};d.prototype._getCachedStatistics=function(a,b){var c=this._layer;return a.valueExpression||a.sqlExpression||a.sqlWhere||a.minValue||a.maxValue?e.reject(new k("scene-layer-adapter:not-supported","This Layer does not support calculating statistics when 'valueExpression', 'sqlExpression', 'sqlWhere', 'minValue' or 'maxValue' is specified")):c.queryCachedStatistics(b&&b.name).then(function(a){var b=a.stats;a=
b.min;var c=b.max,f=b.avg,d=b.stddev,e=b.sum,h=b.variance,b=b.count;if(0!==a||0!==c)f=0===f?null:f,e=0===e?null:e,d=0===d?null:d,h=0===h?null:h,b=0===b?null:b;null==b&&null!=e&&null!=f&&(b=Math.round(e/f));return{avg:f,count:b,max:c,min:a,stddev:d,sum:e,variance:h}})};d.prototype._getSummaryStatisticsFromMemory=function(a,b){return(a.features?e.resolve(a.features):this._fetchFeaturesFromMemory(a.view)).then(function(c){if(!c||!c.length)return e.reject(new k("scene-layer-adapter:insufficient-data",
"No features are available to calculate statistics"));var f=n.isDateField(b),d=t.mixin({},a);if("percent-of-total"===d.normalizationType){var g=l.calculateStatsFromMemory({field:d.field},c).sum;if(null==g)return e.reject(new k("scene-layer-adapter:invalid","invalid normalizationTotal"));d.normalizationTotal=g}c=l.calculateStatsFromMemory(d,c,f);return l.processSummaryStatisticsResult(c)})};d.prototype._getCachedStatisticsForUniqueValues=function(a,b){var c=this,f=this._layer,d=b&&b.name,g=b&&this.getFieldDomain(a.field);
return a.valueExpression||a.sqlExpression||a.sqlWhere?e.reject(new k("scene-layer-adapter:not-supported","This Layer does not support calculating statistics when 'valueExpression', 'sqlExpression' or 'sqlWhere' is specified")):f.queryCachedStatistics(d).then(function(e){var g=e.stats;e=e.labels&&e.labels.labels;var m={},h=[];if(g.mostFrequentValues){var k="countOF"+d;g.mostFrequentValues.forEach(function(a){var c=new p({attributes:{}});c.attributes[d]=n.isNumericField(b,f)||n.isDateField(b)?Number(a.value):
a.value;c.attributes[k]=a.count;h.push(c)});e&&e.forEach(function(a){m[a.value]=a.label})}g=new v;g.features=h;return l.getUniqueValuesFromFeatureSet(g,c,a.field,m)}).then(function(b){return l.createUVResult(b,"service-cached-query",g,a.returnAllCodedValues)})};d.prototype._getUniqueValuesFromMemory=function(a,b){var c=b&&this.getFieldDomain(a.field);return(a.features?e.resolve(a.features):this._fetchFeaturesFromMemory(a.view)).then(function(b){return l.calculateUniqueValuesFromMemory(a,b,c)})};d.prototype._getCachedStatisticsForHistogram=
function(a,b){var c=this,f=this._layer;return a.valueExpression||a.sqlExpression||a.sqlWhere||a.normalizationType?e.reject(new k("scene-layer-adapter:not-supported","This Layer does not support calculating statistics when 'valueExpression' or 'sqlExpression' or 'sqlWhere' or 'normalizationType' is specified")):f.queryCachedStatistics(b&&b.name).then(function(b){b=b.stats;var f=a.minValue,d=a.maxValue,f=null!=f?f:b.min,d=null!=d?d:b.max,e=a.numBins||10;b=c._generateFeatureSetForCachedHistogram(b.histogram,
f,d,e);return l.getHistogramFromFeatureSet(b,f,d,e)})};d.prototype._getClassBreaksFromMemory=function(a){return(a.features?e.resolve(a.features):this._fetchFeaturesFromMemory(a.view)).then(function(b){if(!b||!b.length)return e.reject(new k("scene-layer-adapter:insufficient-data","No features are available to calculate statistics"));var c=t.mixin({},a);if("percent-of-total"===c.normalizationType){var f=l.calculateStatsFromMemory({field:c.field},b).sum;if(null==f)return e.reject(new k("scene-layer-adapter:invalid",
"invalid normalizationTotal"));c.normalizationTotal=f}return l.calculateClassBreaksFromMemory(c,b)})};d.prototype._getHistogramFromMemory=function(a){var b=this;return(a.features?e.resolve(a.features):this._fetchFeaturesFromMemory(a.view)).then(function(c){if(!c||!c.length)return e.reject(new k("scene-layer-adapter:insufficient-data","No features are available to calculate histogram"));var f=a.field,d=a.normalizationType,g=a.valueExpression,q=a.classificationMethod,n=a.minValue,p=a.maxValue,h=a.view,
r=null!=n&&null!=p,u=null;q&&"equal-interval"!==q||d?(f=t.mixin({},a),f.features=c,u=b._getBinParamsFromMemory(f)):u=r?e.resolve({min:n,max:p}):b.summaryStatistics({field:f,valueExpression:g,features:c,view:h}).then(function(a){return a.count?{min:a.min,max:a.max}:e.reject(new k("feature-layer-adapter:insufficient-data","No features are available to calculate histogram"))});return u.then(function(b){return l.calculateHistogramFromMemory(a,b,c)})})};d.prototype._getBinParamsFromMemory=function(a){var b=
a.field,c=a.normalizationType,d=a.normalizationField;return this._getClassBreaksFromMemory({field:b,valueExpression:a.valueExpression,normalizationType:c,normalizationField:d,classificationMethod:a.classificationMethod,standardDeviationInterval:a.standardDeviationInterval,minValue:a.minValue,maxValue:a.maxValue,numClasses:a.numBins,features:a.features,view:a.view}).then(function(a){var f=a.normalizationTotal;a=a.classBreakInfos;var e=A.getSQLFilterForNormalization({field:b,normalizationType:c,normalizationField:d});
return l.generateBinParams({field:b,normalizationType:c,normalizationField:d,normalizationTotal:f,classBreaks:a,where:e})})};d.prototype.getField=function(a){void 0===a&&(a="");return this._layer.getField(a)};d.prototype.getFieldUsageInfo=function(a){a=this.getField(a);if(!a)return null;a=this._layer.getFieldUsageInfo(a.name);return{supportsLabelingInfo:a.supportsLabelingInfo,supportsPopupTemplate:a.supportsPopupTemplate,supportsRenderer:a.supportsRenderer,supportsLayerQuery:a.supportsLayerQuery,
supportsStatistics:!0}};d.prototype.getFieldDomain=function(a,b){return this._featureLayerAdapter?this._featureLayerAdapter.getFieldDomain(a,b):null};d.prototype.summaryStatistics=function(a){var b=this,c=this.getField(a.field);return this._featureLayerAdapter?this._featureLayerAdapter.summaryStatistics(a):this._hasCachedStatistics(c&&c.name)?this._getCachedStatistics(a,c).catch(function(d){return b._getSummaryStatisticsFromMemory(a,c)}):this._getSummaryStatisticsFromMemory(a,c)};d.prototype.uniqueValues=
function(a){var b=this,c=this.getField(a.field);return this._featureLayerAdapter?this._featureLayerAdapter.uniqueValues(a):this._hasCachedStatistics(c&&c.name)?this._getCachedStatisticsForUniqueValues(a,c).catch(function(d){return b._getUniqueValuesFromMemory(a,c)}):this._getUniqueValuesFromMemory(a,c)};d.prototype.histogram=function(a){var b=this,c=this.getField(a.field);return this._featureLayerAdapter?this._featureLayerAdapter.histogram(a):this._hasCachedStatistics(c&&c.name)?this._getCachedStatisticsForHistogram(a,
c).catch(function(c){return b._getHistogramFromMemory(a)}):this._getHistogramFromMemory(a)};d.prototype.classBreaks=function(a){var b=this.getField(a.field);return this._featureLayerAdapter?this._featureLayerAdapter.classBreaks(a):this._hasCachedStatistics(b&&b.name)?e.reject(new k("scene-layer-adapter:not-supported","Cached stats not supported")):this._getClassBreaksFromMemory(a)};d.prototype.queryFeatureCount=function(a){return this._featureLayerAdapter?this._featureLayerAdapter.queryFeatureCount(a):
e.reject(new k("scene-layer-adapter:not-supported","SceneLayer without associated FeatureLayer does not support count query"))};d.prototype.generateRenderer=function(a){return this._featureLayerAdapter?this._featureLayerAdapter.generateRenderer(a):e.reject(new k("scene-layer-adapter:not-supported","SceneLayer without associated FeatureLayer does not support generateRenderer operation"))};d.prototype.load=function(){var a=this,b=this._layer,c=b.load().then(function(){var c=b.associatedLayer;a.geometryType=
b.geometryType;if(c)return a._featureLayerAdapter=new B({layer:c}),a._featureLayerAdapter.load().then(function(){a.objectIdField=a._featureLayerAdapter.objectIdField;a.supportsSQLExpression=a._featureLayerAdapter.supportsSQLExpression});a.objectIdField=b.objectIdField;a.supportsSQLExpression=!1});this.addResolvingPromise(c);return this.when()};return d=y([r.subclass()],d)}(r.declared(C))});