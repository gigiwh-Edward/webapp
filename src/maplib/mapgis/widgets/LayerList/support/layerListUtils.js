// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define(["require","exports"],function(g,b){function d(a){if(a)return a.hasOwnProperty("listMode")?a.listMode:void 0}function e(a){if(a)return a.hasOwnProperty("minScale")?a.minScale:void 0}function f(a){if(a)return a.hasOwnProperty("maxScale")?a.maxScale:void 0}Object.defineProperty(b,"__esModule",{value:!0});b.findLayerListMode=d;b.findLayerMinScale=e;b.findLayerMaxScale=f;b.findLayerVisibilityMode=function(a){if(a){var b=a.get("layer.capabilities");return b&&-1===b.indexOf("supportsSublayerVisibility")?
"inherited":a.hasOwnProperty("visibilityMode")?a.visibilityMode:void 0}};b.getNormalizedChildLayerProperty=function(a){if(a&&"hide-children"!==a.listMode&&"wmts"!==a.type)return"group"===a.type?"layers":"sublayers"};b.canDisplayLayer=function(a){return"hide"!==d(a)};b.isLayerOutsideScaleRange=function(a,b){if(!a||isNaN(b))return!1;var c=e(a);a=f(a);c=!isNaN(c)&&0<c&&b>=c;b=!isNaN(a)&&0<a&&b<=a;return c||b}});