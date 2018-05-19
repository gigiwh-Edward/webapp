// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define(["require","exports"],function(e,f){return function(){function d(){this.items=[]}d.prototype.addObject=function(a,b){this.items.push({type:"object",highlightId:b,object:a})};d.prototype.addRenderGeometry=function(a,b,c){this.items.push({type:"renderGeometry",highlightId:c,renderGeometry:a,renderer:b})};d.prototype.removeObject=function(a){for(var b=this.items.length-1;0<=b;--b){var c=this.items[b];"object"===c.type&&c.object===a&&(c.object.removeHighlights(c.highlightId),this.items.splice(b,
1))}};d.prototype.removeRenderGeometry=function(a){for(var b=this.items.length-1;0<=b;--b){var c=this.items[b];"renderGeometry"===c.type&&c.renderGeometry===a&&(c.renderer.removeRenderGeometryHighlight(c.renderGeometry,c.highlightId),this.items.splice(b,1))}};d.prototype.removeAll=function(){this.items.forEach(function(a){"object"===a.type?a.object.removeHighlights(a.highlightId):"renderGeometry"===a.type&&a.renderer.removeRenderGeometryHighlight(a.renderGeometry,a.highlightId)});this.items=[]};return d}()});