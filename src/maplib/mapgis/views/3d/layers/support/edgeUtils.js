// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define(["require","exports","../../../../Color","../../../../core/screenUtils"],function(g,b,f,c){Object.defineProperty(b,"__esModule",{value:!0});b.createMaterial=function(b,a,e){a=a&&a.enabled&&a.edges;if(!a||0===a.color.a||0===e)return null;var d=f.toUnitRGBA(a.color);d[3]*=e;switch(a.type){case "solid":return b.createSolidEdgeMaterial({color:d,size:c.pt2px(a.size),extensionLength:c.pt2px(a.extensionLength)});case "sketch":return b.createSketchEdgeMaterial({color:d,size:c.pt2px(a.size),extensionLength:c.pt2px(a.extensionLength)})}}});