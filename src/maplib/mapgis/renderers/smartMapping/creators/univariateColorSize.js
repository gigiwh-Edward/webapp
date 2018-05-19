// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports dojo/_base/lang ../../../core/promiseUtils ./color ./size ./support/utils ../support/utils ../../support/AuthoringInfo ../../support/utils".split(" "),function(x,l,d,f,r,m,g,k,t,n){function u(a){if(!(a&&a.layer&&(a.field||a.valueExpression||a.sqlExpression)))return f.reject(g.createError("univariate-colorsize-visual-variables:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required"));if(a.valueExpression&&!a.sqlExpression&&!a.view)return f.reject(g.createError("univariate-colorsize-visual-variables:missing-parameters",
"View is required when 'valueExpression' is specified"));var b=d.mixin({},a);a=[0,1,2];var e=k.createLayerAdapter(b.layer,a);return(b.layer=e)?e.load().then(function(){var a=k.getFieldsList({field:b.field,normalizationField:b.normalizationField,valueExpression:b.valueExpression});return(a=g.verifyBasicFieldValidity(e,a,"univariate-colorsize-visual-variables:invalid-parameters"))?f.reject(a):b}):f.reject(g.createError("univariate-colorsize-visual-variables:invalid-parameters","'layer' must be one of these types: "+
k.getLayerTypeLabels(a).join(", ")))}function p(a,b){a=d.mixin({},a);b=0===b?a.colorOptions:a.sizeOptions;delete a.sizeOptions;delete a.colorOptions;return d.mixin(a,b)}function v(a){if(!(a&&a.layer&&(a.field||a.valueExpression||a.sqlExpression)))return f.reject(g.createError("univariate-colorsize-continuous-renderer:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required"));if(a.valueExpression&&!a.sqlExpression&&!a.view)return f.reject(g.createError("univariate-colorsize-continuous-renderer:missing-parameters",
"View is required when 'valueExpression' is specified"));var b=d.mixin({},a);b.symbolType=b.symbolType||"2d";a=[0,1,2];var e=k.createLayerAdapter(b.layer,a);return(b.layer=e)?e.load().then(function(){var a=k.getFieldsList({field:b.field,normalizationField:b.normalizationField,valueExpression:b.valueExpression});return(a=g.verifyBasicFieldValidity(e,a,"univariate-colorsize-continuous-renderer:invalid-parameters"))?f.reject(a):b}):f.reject(g.createError("univariate-colorsize-continuous-renderer:invalid-parameters",
"'layer' must be one of these types: "+k.getLayerTypeLabels(a).join(", ")))}function w(a){a=d.mixin({},a);var b=a.sizeOptions;delete a.sizeOptions;delete a.colorOptions;return d.mixin(a,b)}function q(a){return u(a).then(function(a){var b;return r.createVisualVariable(p(a,0)).then(function(h){var c=p(a,1);c.statistics=h.statistics;b=h;return m.createVisualVariables(c)}).then(function(a){var c=b.visualVariable,h=a.visualVariables,e=c.stops.length;h.forEach(function(a){null!=a.minDataValue&&(a.minDataValue=
c.stops[0].value,a.maxDataValue=c.stops[e-1].value)});var d=a.authoringInfo.visualVariables[0],d=new t({type:"univariate-color-size",visualVariables:[b.authoringInfo.visualVariables[0].clone(),d.clone()]});return{basemapId:a.basemapId,statistics:b.statistics,defaultValuesUsed:b.defaultValuesUsed,color:{visualVariable:c,colorScheme:b.colorScheme},size:{visualVariables:h,sizeScheme:a.sizeScheme},authoringInfo:d}})})}Object.defineProperty(l,"__esModule",{value:!0});l.createVisualVariables=q;l.createContinuousRenderer=
function(a){return v(a).then(function(a){var b;return m.createContinuousRenderer(w(a)).then(function(h){var c=d.mixin({},a),e=c.symbolType,f=-1<e.indexOf("3d-volumetric");delete c.symbolType;delete c.defaultSymbolEnabled;if(c.worldScale=f)c.sizeOptions=d.mixin({},c.sizeOptions),c.sizeOptions.axis="3d-volumetric-uniform"===e?"all":"height";c.statistics=h.statistics;b=h;return q(c)}).then(function(a){var c=b.renderer,d=a.size.visualVariables.map(function(a){return n.cloneSizeVariable(a)});d.push(n.cloneColorVariable(a.color.visualVariable));
c.visualVariables=d;c.authoringInfo=a.authoringInfo&&a.authoringInfo.clone();return{renderer:c,statistics:b.statistics,defaultValuesUsed:b.defaultValuesUsed,color:a.color,size:a.size,basemapId:a.basemapId}})})}});