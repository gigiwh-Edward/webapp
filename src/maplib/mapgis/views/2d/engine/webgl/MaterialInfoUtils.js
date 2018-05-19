// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define(["require","exports","./enums","./MaterialInfo","./MaterialKeyInfo"],function(n,f,e,h,l){function m(a){var b=[];b[0]=a.sdf?!0:!1;b[1]=a.vvSizeMinMaxValue?!0:!1;b[2]=a.vvSizeScaleStops?!0:!1;b[3]=a.vvSizeFieldStops?!0:!1;b[4]=a.vvSizeUnitValue?!0:!1;b[5]=a.vvColor?!0:!1;b[6]=a.vvRotation?!0:!1;b[7]=a.vvOpacity?!0:!1;b[8]=a.visibility?!0:!1;b[9]=a.pattern?!0:!1;b[10]=a.heatmap?!0:!1;return b.reduce(function(a,c,b){c&&(a|=1<<b+2);return a},0)}function k(a){if(a.geometryType===e.WGLGeometryType.UNKNOWN)return-1;
var b=m(a)<<2;return a.geometryType+b}Object.defineProperty(f,"__esModule",{value:!0});f.createTextMaterialInfo=function(a,b){var g=new h.default,c=new l;c.geometryType=e.WGLGeometryType.TEXT;c.sdf=!0;c.pattern=!1;c.visibility=!1;c.heatmap=!1;g.texBindingInfo.push(new h.TexBindingInfo(2,a.page,"u_texture"));0===b?c.vvOpacity=c.vvSizeMinMaxValue=c.vvSizeScaleStops=c.vvSizeFieldStops=c.vvSizeUnitValue=c.vvColor=c.vvRotation=!1:(c.vvOpacity=0!==(b&e.WGLVVFlag.OPACITY),c.vvSizeMinMaxValue=0!==(b&e.WGLVVFlag.SIZE_MINMAX_VALUE),
c.vvSizeScaleStops=0!==(b&e.WGLVVFlag.SIZE_SCALE_STOPS),c.vvSizeFieldStops=0!==(b&e.WGLVVFlag.SIZE_FIELD_STOPS),c.vvSizeUnitValue=0!==(b&e.WGLVVFlag.SIZE_UNIT_VALUE),c.vvColor=0!==(b&e.WGLVVFlag.COLOR),c.vvRotation=0!==(b&e.WGLVVFlag.ROTATION));g.materialKey=k(c);g.materialKeyInfo=c;return g};f.createMaterialInfo=function(a,b,g,c){var f=new h.default,d=new l;d.geometryType=g;(b=b.spriteMosaicItem)?(d.sdf=b.sdf,d.pattern=!0,f.texBindingInfo.push(new h.TexBindingInfo(1,b.page,"u_texture"))):(d.sdf=
!1,d.pattern=!1);0===c?d.vvOpacity=d.vvSizeMinMaxValue=d.vvSizeScaleStops=d.vvSizeFieldStops=d.vvSizeUnitValue=d.vvColor=d.vvRotation=!1:(d.vvOpacity=0!==(c&e.WGLVVFlag.OPACITY),d.vvSizeMinMaxValue=0!==(c&e.WGLVVFlag.SIZE_MINMAX_VALUE),d.vvSizeScaleStops=0!==(c&e.WGLVVFlag.SIZE_SCALE_STOPS),d.vvSizeFieldStops=0!==(c&e.WGLVVFlag.SIZE_FIELD_STOPS),d.vvSizeUnitValue=0!==(c&e.WGLVVFlag.SIZE_UNIT_VALUE),d.vvColor=0!==(c&e.WGLVVFlag.COLOR),d.vvRotation=0!==(c&e.WGLVVFlag.ROTATION));d.visibility=!1;d.heatmap=
null!=a.heatmapInfo;f.materialKey=k(d);f.materialKeyInfo=d;return f};f.getMaterialKey=k;f.getMaterialVariations=function(a){var b=a&3;a>>=2;return{geometryType:b,variations:[0!==(a&1),0!==(a&2),0!==(a&4),0!==(a&8),0!==(a&16),0!==(a&32),0!==(a&64),0!==(a&128),0!==(a&256),0!==(a&512),0!==(a&1024),0!==(a&2048),0!==(a&4096)]}}});