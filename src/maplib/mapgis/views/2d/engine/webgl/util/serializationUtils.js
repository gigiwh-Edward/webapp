// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define(["require","exports"],function(f,a){Object.defineProperty(a,"__esModule",{value:!0});a.serializeList=function(b,c){if(null===c)b.writeInt32(0);else{b.writeInt32(c.length);for(var d=0;d<c.length;d++)c[d].serialize(b);return b}};a.deserializeList=function(b,c,d){for(var e=b.readInt32(),e=Array(e),a=0;a<e.length;a++)e[a]=c.deserialize(b,d);return e}});