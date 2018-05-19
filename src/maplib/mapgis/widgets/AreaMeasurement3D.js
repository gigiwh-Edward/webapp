// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper dojo/i18n!./AreaMeasurement3D/nls/AreaMeasurement3D ../core/accessorSupport/decorators ./Widget ./AreaMeasurement3D/AreaMeasurement3DViewModel ./support/widget".split(" "),function(q,r,n,b,e,d,p,l,a){return function(m){function c(a){a=m.call(this)||this;a.view=null;a.visible=null;a.viewModel=new l;a.unitOptions=null;return a}n(c,m);c.prototype.clearMeasurement=function(){};c.prototype.render=function(){var c=
this,b=!this.viewModel.isSupported,d="measuring"===this.viewModel.state,g=this.viewModel.measurement,k="ready"===this.viewModel.state?a.tsx("section",{key:"mapgis-area-measurement-3d__hint",class:"mapgis-area-measurement-3d__hint"},a.tsx("p",null,e.hint)):null,b=b?a.tsx("section",{key:"mapgis-area-measurement-3d__unsupported",class:"mapgis-area-measurement-3d__panel--error"},a.tsx("p",null,e.unsupported)):null,f=function(c,d,b){switch(d.state){case "available":return a.tsx("div",{key:b+"-enabled",class:"mapgis-area-measurement-3d__measurement-item"},
a.tsx("span",{class:"mapgis-area-measurement-3d__measurement-item-title"},c),a.tsx("span",{class:"mapgis-area-measurement-3d__measurement-item-value"},d.text));case "unavailable":return a.tsx("div",{key:b+"-disabled",class:a.join("mapgis-area-measurement-3d__measurement-item","mapgis-area-measurement-3d__measurement-item--disabled")},a.tsx("span",{class:"mapgis-area-measurement-3d__measurement-item-title"},c));case "invalid":return a.tsx("div",{key:b+"-enabled",class:"mapgis-area-measurement-3d__measurement-item"},
a.tsx("span",{class:"mapgis-area-measurement-3d__measurement-item-title"},c),a.tsx("span",{class:"mapgis-area-measurement-3d__measurement-item-value"},e.notApplicable))}},g=d?a.tsx("section",{key:"mapgis-area-measurement-3d__measurement",class:"mapgis-area-measurement-3d__measurement"},f(e.area,g.area,"area"),f(e.perimeterLength,g.perimeterLength,"perimeter-length")):null,h=this.id+"__units",f=a.tsx("label",{class:"mapgis-area-measurement-3d__units-label",for:h},e.unit),h=a.tsx("div",{class:"mapgis-area-measurement-3d__units-select-wrapper"},
a.tsx("select",{class:"mapgis-area-measurement-3d__units-select mapgis-select",id:h,onchange:this._changeUnit,bind:this},this.viewModel.unitOptions.map(function(b){return b===c.viewModel.unit?a.tsx("option",{key:b,value:b,selected:!0},e.units[b]):a.tsx("option",{key:b,value:b},e.units[b])}))),f=d?a.tsx("section",{key:"mapgis-area-measurement-3d__units",class:"mapgis-area-measurement-3d__units"},f,h):null,d=d?a.tsx("button",{class:a.join("mapgis-button","mapgis-area-measurement-3d__clear-button"),bind:this,onclick:this._newMeasurement},
e.newMeasurement):null,k=this.visible?a.tsx("div",{class:"mapgis-area-measurement-3d__container"},b,k,g,f,d):null;return a.tsx("div",{key:"",class:"mapgis-area-measurement-3d mapgis-widget mapgis-widget--panel",role:"presentation"},k)};c.prototype._newMeasurement=function(){this.clearMeasurement()};c.prototype._changeUnit=function(a){a=a.target;if(a=a.options[a.selectedIndex])this.unit=a.value};b([d.aliasOf("viewModel.view")],c.prototype,"view",void 0);b([d.aliasOf("viewModel.visible"),a.renderable()],c.prototype,
"visible",void 0);b([d.property({type:l}),a.renderable(["viewModel.state","viewModel.unitOptions","viewModel.unit","viewModel.measurement"])],c.prototype,"viewModel",void 0);b([d.aliasOf("viewModel.unitOptions")],c.prototype,"unitOptions",void 0);b([d.aliasOf("viewModel.unit")],c.prototype,"unit",void 0);b([d.aliasOf("viewModel.clearMeasurement")],c.prototype,"clearMeasurement",null);b([a.accessibleHandler()],c.prototype,"_newMeasurement",null);b([a.accessibleHandler()],c.prototype,"_changeUnit",
null);return c=b([d.subclass("mapgis.widgets.AreaMeasurement3D")],c)}(d.declared(p))});