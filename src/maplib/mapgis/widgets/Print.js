// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper dojo/i18n!./Print/nls/Print ../core/Logger ../core/urlUtils ../core/watchUtils ../core/accessorSupport/decorators ../tasks/support/PrintTemplate ./Widget ./Print/FileLink ./Print/PrintViewModel ./Print/TemplateOptions ./support/widget".split(" "),function(D,E,x,g,c,y,z,k,h,A,B,C,u,q,a){var m=y.getLogger("mapgis.widgets.Print");return function(w){function d(a){a=w.call(this)||this;a._exportedFileNameMap={};
a._layoutTabSelected=!0;a._advancedOptionsVisibleForLayout=!1;a._advancedOptionsVisibleForMapOnly=!1;a._pendingExportScroll=!1;a._rootNode=null;a._templatesInfo=null;a._awaitingServerResponse=!1;a.iconClass="mapgis-icon-printer";a.label=c.widgetLabel;a.templateOptions=new q;a.printServiceUrl=null;a.view=null;a.viewModel=new u;return a}x(d,w);d.prototype.postInitialize=function(){var a=this,b=this.templateOptions,c=b.format,d=b.height,f=b.layout,g=b.scale,h=b.scaleEnabled,b=b.width;this.own([k.init(this,
"viewModel.templatesInfo",function(b){if(b){a._templatesInfo=b;var e=f===b.layout.defaultValue||f&&"MAP_ONLY"===f.toUpperCase()||b.layout.choiceList&&-1<b.layout.choiceList.indexOf(f);b=c===b.format.defaultValue||b.format.choiceList&&-1<b.format.choiceList.indexOf(c);e||(f&&m.warn("User sets an invalid layout, resetting it to the default valid one..."),a.templateOptions.layout=a._templatesInfo.layout.defaultValue);b||(c&&m.warn("User sets an invalid format, resetting it to the default valid one..."),
a.templateOptions.format=a._templatesInfo.format.defaultValue);f&&"MAP_ONLY"===f.toUpperCase()&&(a._layoutTabSelected=!1)}}),k.init(this,"templateOptions.format",function(b){if(a._templatesInfo&&b){var e=!1;a._templatesInfo.format.choiceList&&a._templatesInfo.format.choiceList.forEach(function(c){c.toUpperCase()===b.toUpperCase()&&(a.templateOptions.format=c,e=!0)});e||(a.templateOptions.format=a._templatesInfo.format.defaultValue,m.warn("User sets an invalid format, resetting it to the default valid one..."));
a.scheduleRender()}}),k.init(this,"templateOptions.layout",function(b){if(a._templatesInfo&&b){a._layoutTabSelected="MAP_ONLY"!==b.toUpperCase();var e=!a._layoutTabSelected;e||a._templatesInfo.layout.choiceList&&a._templatesInfo.layout.choiceList.forEach(function(c){c.toUpperCase()===b.toUpperCase()&&(a.templateOptions.layout=c,e=!0)});e||(a.templateOptions.layout=a._templatesInfo.layout.defaultValue,m.warn("User sets an invalid layout, resetting it to the default valid one..."));a.scheduleRender()}}),
k.init(this,"templateOptions.dpi",function(b){0>=b?a.templateOptions.dpi=1:a.scheduleRender()}),k.init(this,"viewModel.view.scale",function(b){h&&g||(a.templateOptions.scale=b)}),k.whenOnce(this,"printServiceUrl",function(){var b=setTimeout(function(){a._awaitingServerResponse=!0;a.scheduleRender()},500);a.viewModel.load().then(function(){return clearTimeout(b)})})]);this.templateOptions.width=b||800;this.templateOptions.height=d||1100};d.prototype.render=function(){var e=this,b=this.templateOptions,
d=b.attributionEnabled,r=b.author,f=b.copyright,g=b.dpi,h=b.format,k=b.height,m=b.layout,u=b.legendEnabled,v=b.title,t=b.scaleEnabled,q=b.scale,b=b.width,v=a.tsx("div",{class:"mapgis-print__form-section-container"},a.tsx("label",null,this._layoutTabSelected?c.title:c.fileName,a.tsx("input",{type:"text",tabIndex:0,placeholder:this._layoutTabSelected?c.titlePlaceHolder:c.fileNamePlaceHolder,class:this.classes("mapgis-print__input-text","mapgis-input"),value:v,"data-input-name":"title",oninput:this._updateInputValue,
bind:this}))),n=this.get("_templatesInfo.format.choiceList")||[],n=0<n.length?n.map(function(b){return a.tsx("option",{key:b,selected:b===h},b)}):a.tsx("option",{key:"format-default-option"},c.formatDefaultOption),n=a.tsx("div",{class:"mapgis-print__form-section-container"},a.tsx("label",null,c.fileFormatTitle,a.tsx("select",{class:"mapgis-select",onchange:this._updateFromOption,"data-target-property":"format",bind:this},n))),p=this.get("_templatesInfo.layout.choiceList")||[],p=0<p.length?p.map(function(b){return a.tsx("option",
{key:b,bind:e,selected:b===m},b)}):a.tsx("option",{key:"layout-default-option"},c.layoutDefaultOption),p=a.tsx("div",{class:"mapgis-print__form-section-container"},a.tsx("label",null,c.layoutTitle,a.tsx("select",{class:"mapgis-select",onchange:this._updateFromOption,"data-target-property":"layout",bind:this},p))),g=a.tsx("div",{class:"mapgis-print__form-section-container"},a.tsx("label",null,c.dpi,a.tsx("input",{type:"number",class:this.classes("mapgis-print__input-text","mapgis-input"),"data-input-name":"dpi",
oninput:this._updateInputValue,value:""+g,min:"1",tabIndex:0,bind:this}))),t=a.tsx("div",{class:a.join("mapgis-print__scale-info-container","mapgis-print__form-section-container")},a.tsx("label",null,a.tsx("input",{"data-option-name":"scaleEnabled",checked:t,type:"checkbox",tabIndex:0,onchange:this._toggleInputValue,bind:this}),c.scale),a.tsx("div",{class:"mapgis-print__scale-input-container"},a.tsx("input",{"aria-label":c.scaleLabel,"aria-valuenow":""+q,role:"spinbutton",type:"number",class:this.classes("mapgis-print__input-text",
"mapgis-input","mapgis-print__scale-input"),tabIndex:0,"data-input-name":"scale",oninput:this._updateInputValue,disabled:!t,value:""+q,bind:this}),a.tsx("button",{role:"button","aria-label":c.reset,class:a.join("mapgis-widget-button","mapgis-print__refresh-button","mapgis-icon-refresh"),tabIndex:0,onclick:this._resetToCurrentScale,bind:this}))),r=this._advancedOptionsVisibleForLayout?a.tsx("div",{"aria-labelledby":this.id+"__advancedOptionsForLayout",class:"mapgis-print__advanced-options-container"},t,a.tsx("div",
{class:a.join("mapgis-print__author-info-container","mapgis-print__form-section-container")},a.tsx("label",null,c.author,a.tsx("input",{type:"text",value:r,class:this.classes("mapgis-print__input-text","mapgis-input"),tabIndex:0,"data-input-name":"author",oninput:this._updateInputValue,bind:this}))),a.tsx("div",{class:a.join("mapgis-print__copyright-info-container","mapgis-print__form-section-container")},a.tsx("label",null,c.copyright,a.tsx("input",{type:"text",class:this.classes("mapgis-print__input-text","mapgis-input"),
tabIndex:0,value:f,"data-input-name":"copyright",oninput:this._updateInputValue,bind:this}))),g,a.tsx("div",{class:a.join("mapgis-print__legend-info-container","mapgis-print__form-section-container")},a.tsx("label",null,a.tsx("input",{type:"checkbox","data-option-name":"legendEnabled",tabIndex:0,checked:u,onchange:this._toggleInputValue,bind:this}),c.legend))):null,d=this._advancedOptionsVisibleForMapOnly?a.tsx("div",{"aria-labelledby":this.id+"__advancedOptionsForMapOnly",class:"mapgis-print__advanced-options-container"},
t,g,a.tsx("div",{class:"mapgis-print__form-section-container"},a.tsx("label",null,a.tsx("input",{"data-option-name":"attributionEnabled",type:"checkbox",onchange:this._toggleInputValue,tabIndex:0,checked:d,bind:this}),c.attribution))):null,k=this._layoutTabSelected?a.tsx("section",{key:"mapgis-print__layoutContent",id:this.id+"__layoutContent","aria-labelledby":this.id+"__layoutTab",class:"mapgis-print__layout-section",role:"tabpanel","aria-selected":this._layoutTabSelected},a.tsx("div",{class:"mapgis-print__panel-container"},
v,p,this._layoutTabSelected?n:null),a.tsx("div",{class:a.join("mapgis-print__panel-container","mapgis-print__advanced-options-section")},a.tsx("button",{"aria-label":c.advancedOptions,"aria-expanded":this._advancedOptionsVisibleForLayout?"true":"false",role:"button",class:"mapgis-print__advanced-options-button",onclick:this._showAdvancedOptions,bind:this},a.tsx("div",{class:"mapgis-print__advanced-options-button-container"},a.tsx("span",{"aria-hidden":"true",class:a.join("mapgis-icon-right-triangle-arrow",
"mapgis-print__advanced-options-button-icon--closed")}),a.tsx("span",{"aria-hidden":"true",class:a.join("mapgis-icon-left-triangle-arrow","mapgis-print__advanced-options-button-icon--closed-rtl")}),a.tsx("span",{"aria-hidden":"true",class:a.join("mapgis-icon-down-arrow","mapgis-print__advanced-options-button-icon--opened")}),a.tsx("span",{class:"mapgis-print__advanced-options-button-title"},c.advancedOptions))),r)):a.tsx("section",{key:"mapgis-print__mapOnlyContent",id:this.id+"__mapOnlyContent","aria-selected":!this._layoutTabSelected,
"aria-labelledby":this.id+"__mapOnlyTab",class:"mapgis-print__map-only-section",role:"tabpanel"},a.tsx("div",{class:"mapgis-print__panel-container"},v,this._layoutTabSelected?null:n,a.tsx("div",{class:a.join("mapgis-print__size-container","mapgis-print__form-section-container")},a.tsx("div",{class:"mapgis-print__width-container"},a.tsx("label",null,c.width,a.tsx("input",{type:"text",class:this.classes("mapgis-print__input-text","mapgis-input"),"data-input-name":"width",onchange:this._updateInputValue,value:""+
b,tabIndex:0,bind:this}))),a.tsx("div",{class:"mapgis-print__height-container"},a.tsx("label",null,c.height,a.tsx("input",{type:"text",class:this.classes("mapgis-print__input-text","mapgis-input"),"data-input-name":"height",onchange:this._updateInputValue,value:""+k,tabIndex:0,bind:this}))),a.tsx("button",{role:"button","aria-label":c.swap,class:a.join("mapgis-widget-button","mapgis-print__swap-button","mapgis-icon-swap"),onclick:this._switchInput,tabIndex:0,bind:this})),a.tsx("div",{class:a.join("mapgis-print__panel-container",
"mapgis-print__advanced-options-section")},a.tsx("button",{"aria-label":c.advancedOptions,"aria-expanded":this._advancedOptionsVisibleForMapOnly?"true":"false",role:"button",class:"mapgis-print__advanced-options-button",onclick:this._showAdvancedOptions,bind:this},a.tsx("div",{class:"mapgis-print__advanced-options-button-container"},a.tsx("span",{"aria-hidden":"true",class:a.join("mapgis-icon-right-triangle-arrow","mapgis-print__advanced-options-button-icon--closed")}),a.tsx("span",{"aria-hidden":"true",class:a.join("mapgis-icon-left-triangle-arrow",
"mapgis-print__advanced-options-button-icon--closed-rtl")}),a.tsx("span",{"aria-hidden":"true",class:a.join("mapgis-icon-down-arrow","mapgis-print__advanced-options-button-icon--opened")}),a.tsx("span",{class:"mapgis-print__advanced-options-button-title"},c.advancedOptions))),d))),d=this.exportedLinks.toArray(),b=this._renderExportedLink(d),r=(l={},l["mapgis-disabled"]=!m&&!h,l),l=null!=this.get("view")&&"2d"!==this.get("view.type"),f=a.tsx("div",{class:"mapgis-print__panel--error"},l?c.sceneViewError:c.serviceError),
k=a.tsx("div",null,a.tsx("ul",{class:"mapgis-print__layout-tab-list",role:"tablist",onclick:this._toggleLayoutPanel,onkeydown:this._toggleLayoutPanel,bind:this},a.tsx("li",{id:this.id+"__layoutTab","data-tab-id":"layoutTab",class:"mapgis-print__layout-tab",role:"tab",tabIndex:0,"aria-selected":""+this._layoutTabSelected,bind:this},c.layoutTab),a.tsx("li",{id:this.id+"__mapOnlyTab","data-tab-id":"mapOnlyTab",class:"mapgis-print__layout-tab",role:"tab",tabIndex:0,"aria-selected":""+!this._layoutTabSelected,
bind:this},c.mapOnlyTab)),k,a.tsx("button",{"aria-label":c.exportDescription,role:"button",class:this.classes("mapgis-print__export-button","mapgis-button"),tabIndex:0,classes:r,onclick:this._handlePrintMap,bind:this},c.export),a.tsx("div",{class:"mapgis-print__export-panel-container",afterUpdate:this._scrollExportIntoView,onclick:this._removeLink,bind:this},a.tsx("h2",{class:"mapgis-print__export-title"},c.exportText),0<d.length?null:a.tsx("div",null,a.tsx("div",null,c.exportHint)),b)),l=a.tsx("div",null,
a.tsx("div",{class:"mapgis-print__container"},a.tsx("header",{class:"mapgis-print__header-title"},c.export),this.error||!this.printServiceUrl||l||!this.view?f:k)),l="initializing"===this.get("viewModel.state")?this._renderLoader():l;return a.tsx("div",{afterCreate:a.storeNode,bind:this,class:"mapgis-print mapgis-widget mapgis-widget--panel","data-node-ref":"_rootNode"},l);var l};d.prototype._renderLoader=function(){var e=(b={},b["mapgis-print__loader"]=this._awaitingServerResponse,b);return a.tsx("div",{classes:e,
key:"loader"});var b};d.prototype._addFileLink=function(a){var b=a.layoutOptions.titleText||c.untitled;a=a.format.toLowerCase();a=-1<a.indexOf("png")?"png":a;var e=b+a;void 0!==this._exportedFileNameMap[e]?this._exportedFileNameMap[e]++:this._exportedFileNameMap[e]=0;this.exportedLinks.add(new C({name:b,extension:a,count:this._exportedFileNameMap[e]}))};d.prototype._toPrintTemplate=function(a){var b=this.templateOptions;a=b.dpi;var e=b.height,c=b.legendEnabled,d=b.width,b=new A({attributionVisible:b.attributionEnabled,
layoutOptions:{authorText:b.author||"",copyrightText:b.copyright||"",titleText:b.title||""},format:b.format,layout:b.layout,outScale:b.scale});d&&(b.exportOptions.width=d);e&&(b.exportOptions.height=e);a&&(b.exportOptions.dpi=a);c||(b.layoutOptions.legendLayers=[]);return b};d.prototype._resetToCurrentScale=function(){this.templateOptions.scale=this.viewModel.view.scale};d.prototype._updateInputValue=function(a){a=a.target;var b=a.getAttribute("data-input-name");this.templateOptions[b]=a.value};d.prototype._handlePrintMap=
function(){this._pendingExportScroll=!0;var a=this._toPrintTemplate(this.templateOptions);this._addFileLink(a);this.viewModel.print(a)};d.prototype._updateFromOption=function(a){var b=a.target;a=b.selectedOptions?b.selectedOptions.item(0).value:b.options[b.selectedIndex].value;b=b.getAttribute("data-target-property");this.templateOptions[b]=a};d.prototype._switchInput=function(){a=[this.templateOptions.height,this.templateOptions.width];this.templateOptions.width=a[0];this.templateOptions.height=
a[1];var a};d.prototype._showAdvancedOptions=function(){this._layoutTabSelected?this._advancedOptionsVisibleForLayout=!this._advancedOptionsVisibleForLayout:this._advancedOptionsVisibleForMapOnly=!this._advancedOptionsVisibleForMapOnly};d.prototype._scrollExportIntoView=function(){if(this._pendingExportScroll){this._pendingExportScroll=!1;var a=this._rootNode,b=this._rootNode,b=b.scrollHeight-b.clientHeight;0<b&&(a.scrollTop=b)}};d.prototype._toggleInputValue=function(a){a=a.target;var b=a.getAttribute("data-option-name");
this.templateOptions[b]=a.checked;"scaleEnabled"===b&&(this.viewModel.scaleEnabled=this.templateOptions.scaleEnabled,this.templateOptions[b]||this._resetToCurrentScale())};d.prototype._removeLink=function(a){(a=a.target["data-item"])&&"error"===a.state&&this.exportedLinks.remove(a)};d.prototype._renderExportedLink=function(d){return d.map(function(b){var d=(e={},e["mapgis-icon-loading-indicator"]="pending"===b.state,e["mapgis-rotating"]="pending"===b.state,e["mapgis-icon-download"]="ready"===b.state,e["mapgis-icon-error"]=
"error"===b.state,e["mapgis-print__exported-file--error"]="error"===b.state,e),e=(f={},f["mapgis-disabled"]="pending"===b.state,f["mapgis-print__exported-file--error"]="error"===b.state,f);(f=""===b.url?null:b.url)&&(f=z.addProxy(f));return a.tsx("div",{"aria-label":"pending"===b.state?c.pending:"ready"===b.state?c.ready:c.error,key:b.formattedName,class:"mapgis-print__exported-file"},a.tsx("a",{"aria-label":b.formattedName+". "+c.linkReady,href:f,tabIndex:0,target:"_blank",class:"mapgis-print__exported-file-link"},
a.tsx("span",{"data-item":b,classes:d}),a.tsx("span",{"data-item":b,class:"mapgis-print__exported-file-link-title",classes:e},b.formattedName)));var e,f})};d.prototype._resetInputValue=function(){this.templateOptions.title=""};d.prototype._toggleLayoutPanel=function(a){this._resetInputValue();(this._layoutTabSelected="layoutTab"===a.target.getAttribute("data-tab-id"))?(a=this.get("_templatesInfo.layout.choiceList"),this.templateOptions.layout=a&&a[0]):this.templateOptions.layout="MAP_ONLY"};g([h.aliasOf("viewModel.exportedLinks"),
a.renderable()],d.prototype,"exportedLinks",void 0);g([h.property()],d.prototype,"iconClass",void 0);g([h.property()],d.prototype,"label",void 0);g([a.renderable(),h.property({type:q})],d.prototype,"templateOptions",void 0);g([h.aliasOf("viewModel.error")],d.prototype,"error",void 0);g([h.aliasOf("viewModel.printServiceUrl")],d.prototype,"printServiceUrl",void 0);g([h.aliasOf("viewModel.view"),a.renderable()],d.prototype,"view",void 0);g([h.property({type:u}),a.renderable(["viewModel.templatesInfo",
"viewModel.state"])],d.prototype,"viewModel",void 0);g([a.accessibleHandler()],d.prototype,"_toggleLayoutPanel",null);return d=g([h.subclass("mapgis.widgets.Print")],d)}(h.declared(B))});