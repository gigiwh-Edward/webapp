// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper dojo/i18n!../nls/common dojo/i18n!./CoordinateConversion/nls/CoordinateConversion dojo/keys ../core/Logger ../core/accessorSupport/decorators ./Widget ./CoordinateConversion/CoordinateConversionViewModel ./CoordinateConversion/support/Conversion ./support/widget".split(" "),function(x,y,t,d,m,e,u,v,h,w,n,p,b){var q=v.getLogger("mapgis.widgets.CoordinateConversion");return function(r){function c(a){a=r.call(this)||
this;a._popupMessage=null;a._popupId=null;a._coordinateInput=null;a._badInput=!1;a._goToEnabled=!1;a._conversionFormat=null;a._settingsFormat=null;a._previewConversion=null;a._expanded=!1;a._popupVisible=!1;a._settingsVisible=!1;a._inputVisible=!1;a.conversions=null;a.currentLocation=null;a.formats=null;a.mode=null;a.orientation="auto";a.requestDelay=null;a.view=null;a.viewModel=new n;return a}t(c,r);Object.defineProperty(c.prototype,"multipleConversions",{get:function(){var a=this._get("multipleConversions");
return"boolean"===typeof a?a:!0},set:function(a){!1===a&&(this._expanded=!1,this.conversions.splice(1,this.conversions.length-1));this._set("multipleConversions",a)},enumerable:!0,configurable:!0});c.prototype.reverseConvert=function(a,b){return null};c.prototype.render=function(){var a=this.get("viewModel.state"),k="disabled"===a?b.tsx("div",{key:"mapgis-coordinate__no-basemap"},e.noBasemap):null,c=!k&&this._inputVisible?this._renderInputForm():null,g=!k&&this._settingsVisible?this._renderSettings():
null,f=k||c||g?null:this._renderConversionsView(),l=this._popupVisible?this._renderPopup():null,a=(d={},d["mapgis-coordinate-conversion--capture-mode"]="capture"===this.mode,d["mapgis-disabled"]="loading"===a,d["mapgis-coordinate-conversion--no-basemap"]="disabled"===a,d);return b.tsx("div",{class:"mapgis-coordinate-conversion mapgis-widget",classes:a},l,k,f,g,c);var d};c.prototype._addConversion=function(a){a=a.target;var b=a["data-index"],c=new p({format:a.options[a.options.selectedIndex]["data-format"]});
a.options.selectedIndex=0;0<=b&&this.conversions.removeAt(b);this.conversions.add(c,b)};c.prototype._findSettingsFormat=function(){return this._settingsFormat||this.conversions.reduceRight(function(a,b,c){b=b.format;return b.get("hasDisplayProperties")?b:a},null)||this.formats.find(function(a){return a.hasDisplayProperties})};c.prototype._hidePopup=function(){this._popupId&&(clearTimeout(this._popupId),this._popupId=null);this._popupVisible=!1;this._popupMessage=null;this.scheduleRender()};c.prototype._onConvertComplete=
function(){this._inputVisible=!1;this._coordinateInput.value=""};c.prototype._onCopy=function(a){var b=a.target["data-conversion"].displayCoordinate;"clipboardData"in window?window.clipboardData.setData("text",b):a.clipboardData.setData("text/plain",b);this._showPopup(e.copySuccessMessage);a.preventDefault()};c.prototype._processUserInput=function(a){var b=this;a=a.keyCode;var c=this.viewModel;a!==u.ENTER&&a?this._badInput&&(this._badInput=!1):this._reverseConvert(this._coordinateInput.value,this._coordinateInput["data-format"]).then(function(a){"capture"===
b.mode?c.resume():b.mode="capture";b.currentLocation=a;c.setLocation(a);b._onConvertComplete()}).catch(function(a){q.error(a);b._showPopup(e.invalidCoordinate);b._badInput=!0})};c.prototype._reverseConvert=function(a,b){var c=this,k=this.viewModel;return k.reverseConvert(a,b).then(function(a){c._goToEnabled&&k.goToLocation(a).catch(function(a){q.warn(a);c._showPopup(e.locationOffBasemap)});return a})};c.prototype._setInputFormat=function(a){a=a.target;this._conversionFormat=a[a.options.selectedIndex]["data-format"]};
c.prototype._setPreviewConversion=function(){var a=this._findSettingsFormat(),b=this.viewModel;if(a){var c=this.conversions.find(function(b){return b.format===a});this._previewConversion=new p({format:a,position:{location:this.currentLocation,coordinate:c&&c.position.coordinate}});this._previewConversion.position.coordinate||b.previewConversion(this._previewConversion)}};c.prototype._setSettingsFormat=function(a){a=a.target;this._settingsFormat=a[a.options.selectedIndex]["data-format"];this._setPreviewConversion()};
c.prototype._showPopup=function(a,b){var c=this;void 0===b&&(b=2500);this._popupMessage=a;this._popupVisible?clearTimeout(this._popupId):this._popupVisible=!0;this.scheduleRender();this._popupId=setTimeout(function(){c._popupId=null;c._hidePopup()},b)};c.prototype._toggleGoTo=function(){this._goToEnabled=!this._goToEnabled};c.prototype._updateCurrentPattern=function(a){a.stopPropagation();a=a.target;var b=this._findSettingsFormat();b&&(b.currentPattern=a.value)};c.prototype._renderConversion=function(a,
c){var k=this.id+"__list-item-"+c,g=a.format.name+" "+e.conversionOutputSuffix,f=0===c,d=f||this._expanded,h=f?this._renderFirstConversion(a,k):this._renderTools(c,a,k),f=f&&!a.displayCoordinate?e.noLocation:a.displayCoordinate,f=b.tsx("div",{"aria-label":f,class:"mapgis-coordinate-conversion__display","data-conversion":a,role:"listitem",tabindex:"0",title:f},f),m=this._renderOptions(this.formats.filter(function(b){return b!==a.format}));return d?b.tsx("li",{"aria-label":g,class:"mapgis-coordinate-conversion__row",
id:k,key:a,role:"group",title:g,tabindex:"0"},b.tsx("select",{"aria-controls":k,"aria-label":e.selectFormat,class:b.join("mapgis-select","mapgis-coordinate-conversion__select-row"),bind:this,"data-index":c,onchange:this._addConversion,title:e.selectFormat},b.tsx("option",{"aria-label":a.format.name,selected:!0,title:a.format.name},a.format.name.toUpperCase()),m),f,h):null};c.prototype._renderCopyButton=function(a){return b.tsx("li",{"aria-label":m.copy,bind:this,class:b.join("mapgis-icon-duplicate","mapgis-widget-button"),
"data-conversion":a,onclick:this._copyCoordinateOutput,onkeydown:this._copyCoordinateOutput,oncopy:this._onCopy,role:"button",tabindex:"0",title:m.copy})};c.prototype._renderFirstConversion=function(a,c){c=this.id;var k=(d={},d["mapgis-icon-up"]=!this._expanded,d["mapgis-icon-down"]=this._expanded,d),d="live"===this.mode?e.captureMode:e.liveMode,f=this._expanded?m.collapse:m.expand;a=a.displayCoordinate?this._renderCopyButton(a):null;c=this.multipleConversions?b.tsx("li",{"aria-controls":c+"__esri-coordinate-conversion__conversion-list",
"aria-label":f,bind:this,class:"mapgis-widget-button",classes:k,key:"mapgis-coordinate-conversion__expand-button",onclick:this._toggleExpand,onkeydown:this._toggleExpand,role:"button",tabindex:"0",title:f}):b.tsx("li",{"aria-label":d,bind:this,class:b.join("mapgis-icon-map-pin","mapgis-widget-button"),key:"mapgis-coordinate-conversion__mode-toggle",onclick:this._toggleMode,onkeydown:this._toggleMode,role:"button",tabindex:"0",title:d});return b.tsx("ul",{class:"mapgis-coordinate-conversion__tools"},a,c);var d};
c.prototype._renderInputForm=function(){var a=this._conversionFormat||this.conversions.getItemAt(0).format,c=this.formats.findIndex(function(b){return b.name===a.name}),d=this.id,g=d+"__esri-coordinate-conversion__input-coordinate",d=d+"__esri-coordinate-conversion__input-coordinate__header",c=this._renderOptions(this.formats,!0,c),f=(l={},l["mapgis-coordinate-conversion__input-coordinate--rejected"]=this._badInput,l);return b.tsx("div",{"aria-labelledby":d,class:"mapgis-coordinate-conversion__input-form",
key:"mapgis-coordinate-conversion__input-form",role:"search"},b.tsx("div",{class:"mapgis-coordinate-conversion__heading"},b.tsx("div",{"aria-label":m.back,bind:this,class:b.join("mapgis-widget-button","mapgis-icon-left-arrow","mapgis-coordinate-conversion__back-button"),onclick:this._toggleInputVisibility,onkeydown:this._toggleInputVisibility,role:"button",tabindex:"0",title:m.back}),b.tsx("h4",{id:d},e.inputCoordTitle)),b.tsx("div",{class:"mapgis-coordinate-conversion__input-group"},b.tsx("select",{"aria-controls":g,
"aria-label":e.selectFormat,bind:this,class:b.join("mapgis-select","mapgis-coordinate-conversion__select-row"),onchange:this._setInputFormat,title:e.selectFormat},c),b.tsx("input",{afterCreate:b.storeNode,"aria-labelledby":d,"aria-required":"true",bind:this,class:this.classes("mapgis-coordinate-conversion__input-coordinate","mapgis-input",f),"data-format":a,"data-node-ref":"_coordinateInput",id:g,onkeydown:this._processUserInput,placeholder:e.inputCoordTitle,role:"textbox",spellcheck:!1,title:e.inputCoordTitle,
type:"text"})),b.tsx("div",{class:"mapgis-coordinate-conversion__input-group"},b.tsx("label",{"aria-label":e.goTo},b.tsx("input",{bind:this,checked:this._goToEnabled,onclick:this._toggleGoTo,title:e.goTo,type:"checkbox"}),e.goTo),b.tsx("button",{"aria-label":e.convert,bind:this,class:this.classes("mapgis-coordinate-conversion__button","mapgis-button"),onclick:this._processUserInput,title:e.convert,type:"button"},e.convert)));var l};c.prototype._renderConversionsView=function(){var a=this,c=this.id+"__esri-coordinate-conversion__conversion-list",
d=this._renderPrimaryTools(),g=this._renderOptions(this.formats),f=this.conversions.map(function(b,c){return a._renderConversion(b,c)}).toArray(),d=this._expanded?b.tsx("div",{class:"mapgis-coordinate-conversion__row"},b.tsx("select",{"aria-controls":c,"aria-label":e.addConversion,bind:this,class:b.join("mapgis-select","mapgis-coordinate-conversion__select-primary"),onchange:this._addConversion,title:e.addConversion},b.tsx("option",{disabled:!0,selected:!0,value:""},e.addConversion),g),d):null,g=(l={},
l["mapgis-coordinate-conversion__conversions-view--expanded"]=this._expanded,l["mapgis-coordinate-conversion__conversions-view--expand-up"]="expand-up"===this.orientation,l["mapgis-coordinate-conversion__conversions-view--expand-down"]="expand-down"===this.orientation,l);return b.tsx("div",{class:"mapgis-coordinate-conversion__conversions-view",classes:g,key:"mapgis-coordinate-conversion__main-view"},b.tsx("ul",{"aria-expanded":this._expanded?"true":"false",class:"mapgis-coordinate-conversion__conversion-list",
id:c},f),d);var l};c.prototype._renderOptions=function(a,c,d){var e=this,k=this.conversions.getItemAt(0);return a.map(function(a,f){var g=c||!k?!1:k.format.name===a.name||e.conversions.map(function(a){return a.format.name}).includes(a.name);return b.tsx("option",{"aria-label":a.name,"data-format":a,disabled:g,selected:f===d,value:a.name},a.name.toUpperCase())}).toArray()};c.prototype._renderPopup=function(){return b.tsx("div",{class:"mapgis-coordinate-conversion__popup",role:"alert"},this._popupMessage)};
c.prototype._renderPrimaryTools=function(){var a="live"===this.mode?e.captureMode:e.liveMode;return b.tsx("ul",{class:"mapgis-coordinate-conversion__tools"},b.tsx("li",{bind:this,class:b.join("mapgis-icon-edit","mapgis-widget-button"),onclick:this._toggleInputVisibility,onkeydown:this._toggleInputVisibility,role:"button",tabindex:"0",title:e.inputCoordTitle}),b.tsx("li",{bind:this,class:b.join("mapgis-icon-map-pin","mapgis-widget-button"),onclick:this._toggleMode,onkeydown:this._toggleMode,role:"button",tabindex:"0",
title:a}),b.tsx("li",{bind:this,class:b.join("mapgis-icon-settings2","mapgis-widget-button"),onclick:this._toggleSettingsVisibility,onkeydown:this._toggleSettingsVisibility,role:"button",tabindex:"0",title:e.settingsTitle}))};c.prototype._renderSettings=function(){var a=this.id,c=a+"__esri-coordinate-conversion__pattern-input",d=a+"__esri-coordinate-conversion__pattern-input__header",a=a+"__esri-coordinate-conversion__preview-coordinate",g=this.formats.filter(function(a){return a.hasDisplayProperties}),
f=this._findSettingsFormat(),h=g.indexOf(f),g=this._renderOptions(g,!0,h),f=f.get("currentPattern");return b.tsx("div",{"aria-labelledby":d,class:"mapgis-coordinate__settings",key:"mapgis-coordinate-conversion__settings"},b.tsx("div",{class:"mapgis-coordinate-conversion__heading"},b.tsx("div",{bind:this,class:b.join("mapgis-widget-button","mapgis-icon-left-arrow","mapgis-coordinate-conversion__back-button"),onclick:this._toggleSettingsVisibility,onkeydown:this._toggleSettingsVisibility,role:"button",tabindex:"0",
title:m.back}),b.tsx("h4",{id:d},e.settingsTitle)),b.tsx("div",{class:"mapgis-coordinate-conversion__settings-group"},b.tsx("label",{for:c},e.changeCoordinateDisplay),b.tsx("select",{"aria-label":e.selectFormat,class:"mapgis-select",bind:this,onchange:this._setSettingsFormat,title:e.selectFormat},g),b.tsx("div",{class:"mapgis-coordinate-conversion__settings-group-horizontal"},b.tsx("input",{"aria-controls":a,bind:this,class:this.classes("mapgis-coordinate-conversion__pattern-input","mapgis-input"),id:c,oninput:this._updateCurrentPattern,
spellcheck:!1,title:e.changeCoordinateDisplay,type:"text",value:f}),b.tsx("div",{"aria-controls":c,bind:this,class:b.join("mapgis-widget-button","mapgis-icon-refresh"),onclick:this._setDefaultPattern,onkeydown:this._setDefaultPattern,role:"button",tabindex:"0",title:e.defaultPattern}))),b.tsx("div",{class:"mapgis-coordinate-conversion__settings-group"},b.tsx("label",null,m.preview,b.tsx("div",{class:"mapgis-coordinate-conversion__preview-coordinate",id:a,tabindex:"0"},this._previewConversion.displayCoordinate))))};
c.prototype._renderTools=function(a,c,d){c=c.displayCoordinate?this._renderCopyButton(c):null;return b.tsx("ul",{class:"mapgis-coordinate-conversion__tools",role:"listitem"},c,b.tsx("li",{"aria-controls":d,"aria-label":e.removeConversion,bind:this,class:b.join("mapgis-icon-close","mapgis-widget-button"),"data-index":a,key:d+"__esri-widget-button",onclick:this._removeConversion,onkeydown:this._removeConversion,tabindex:"0",role:"button",title:e.removeConversion}))};c.prototype._copyCoordinateOutput=function(a){a=
a.target;if(!("createTextRange"in document.body)){var b=window.getSelection(),c=document.createRange();c.selectNodeContents(a);b.removeAllRanges();b.addRange(c)}document.execCommand("copy")};c.prototype._removeConversion=function(a){this.conversions.removeAt(a.target["data-index"])};c.prototype._setDefaultPattern=function(a){a.stopPropagation();if(a=this._findSettingsFormat())a.currentPattern=a.get("defaultPattern")};c.prototype._toggleExpand=function(){this._expanded=!this._expanded};c.prototype._toggleInputVisibility=
function(a){this._inputVisible=!this._inputVisible;this._popupVisible&&this._hidePopup();this._inputVisible?this.viewModel.pause():this.viewModel.resume()};c.prototype._toggleMode=function(){this.mode="live"===this.mode?"capture":"live"};c.prototype._toggleSettingsVisibility=function(){this._settingsVisible=!this._settingsVisible;this._popupVisible&&this._hidePopup();this._settingsVisible?(this._setPreviewConversion(),this.viewModel.pause()):this.viewModel.resume()};d([h.aliasOf("viewModel.conversions")],
c.prototype,"conversions",void 0);d([h.aliasOf("viewModel.currentLocation"),b.renderable()],c.prototype,"currentLocation",void 0);d([h.aliasOf("viewModel.formats"),b.renderable()],c.prototype,"formats",void 0);d([h.aliasOf("viewModel.mode"),b.renderable()],c.prototype,"mode",void 0);d([h.property(),b.renderable()],c.prototype,"orientation",void 0);d([h.aliasOf("viewModel.requestDelay")],c.prototype,"requestDelay",void 0);d([h.property(),b.renderable()],c.prototype,"multipleConversions",null);d([h.aliasOf("viewModel.locationSymbol")],
c.prototype,"locationSymbol",void 0);d([h.aliasOf("viewModel.view"),b.renderable()],c.prototype,"view",void 0);d([h.property({type:n}),b.renderable(["viewModel.state","viewModel.waitingForConversions"])],c.prototype,"viewModel",void 0);d([h.aliasOf("viewModel.reverseConvert")],c.prototype,"reverseConvert",null);d([b.accessibleHandler()],c.prototype,"_copyCoordinateOutput",null);d([b.accessibleHandler()],c.prototype,"_removeConversion",null);d([b.accessibleHandler()],c.prototype,"_setDefaultPattern",
null);d([b.accessibleHandler()],c.prototype,"_toggleExpand",null);d([b.accessibleHandler()],c.prototype,"_toggleInputVisibility",null);d([b.accessibleHandler()],c.prototype,"_toggleMode",null);d([b.accessibleHandler()],c.prototype,"_toggleSettingsVisibility",null);return c=d([h.subclass("mapgis.widgets.CoordinateConversion")],c)}(h.declared(w))});