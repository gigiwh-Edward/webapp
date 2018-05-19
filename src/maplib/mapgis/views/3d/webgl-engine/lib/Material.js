// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define(["require","exports","./IdGen","./ModelContentType"],function(e,f,c,d){return function(){function b(a){this._parentStage=null;this._visible=!0;this._renderOccluded=!1;this._renderPriority=0;this.supportsEdges=!1;this.id=b._idGen.gen(a)}Object.defineProperty(b.prototype,"parentStage",{get:function(){return this._parentStage},enumerable:!0,configurable:!0});b.prototype.addParentStage=function(a){this._parentStage=a};b.prototype.removeParentStage=function(a){this._parentStage=null};Object.defineProperty(b.prototype,
"visible",{get:function(){return this._visible},set:function(a){a!==this._visible&&(this._visible=a,this.notifyDirty("matChanged"))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"renderOccluded",{get:function(){return this._renderOccluded},set:function(a){a!==this._renderOccluded&&(this._renderOccluded=a,this.notifyDirty("matChanged"))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"renderPriority",{get:function(){return this._renderPriority},set:function(a){a!==
this._renderPriority&&(this._renderPriority=a,this.notifyDirty("matChanged"))},enumerable:!0,configurable:!0});b.prototype.isVisible=function(){return this._visible};b.prototype.notifyDirty=function(a){this.parentStage&&this.parentStage.notifyDirty(d.MATERIAL,this,a)};b._idGen=new c;return b}()});