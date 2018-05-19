// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper dojo/i18n!../nls/common ../core/accessorSupport/decorators ./Widget ./Expand/ExpandViewModel ./support/widget".split(" "),function(u,v,r,d,n,e,t,p,c){return function(q){function b(a){a=q.call(this)||this;a.autoCollapse=null;a.collapseTooltip="";a.content="";a.expanded=null;a.expandTooltip="";a.group=null;a.iconNumber=0;a.mode="auto";a.view=null;a.viewModel=new p;return a}r(b,q);Object.defineProperty(b.prototype,
"collapseIconClass",{get:function(){return"mapgis-icon-collapse"},set:function(a){a?this._override("collapseIconClass",a):this._clearOverride("collapseIconClass")},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"expandIconClass",{get:function(){return c.isWidget(this.content)?this.content.iconClass:"mapgis-icon-expand"},set:function(a){a?this._override("expandIconClass",a):this._clearOverride("expandIconClass")},enumerable:!0,configurable:!0});b.prototype.expand=function(){this.viewModel.expanded=
!0};b.prototype.collapse=function(){this.viewModel.expanded=!1};b.prototype.toggle=function(){this.viewModel.expanded=!this.viewModel.expanded};b.prototype.render=function(){var a=this.viewModel.expanded,b=this.mode,d=this.expandTooltip||n.expand,e=this.collapseTooltip||n.collapse,d=a?e:d,e=this.collapseIconClass,g=this.expandIconClass,e=(f={},f["mapgis-expand__icon--expanded"]=a,f[e]=a,f[g]=!a,f),f=(h={},h["mapgis-expand__container--expanded"]=a,h),h=(k={},k["mapgis-expand__content--expanded"]=a,k),k=
(l={},l["mapgis-expand__mask--expanded"]=a,l),l=(g=this.iconNumber)&&!a?c.tsx("span",{key:"expand__icon-number",class:"mapgis-expand__icon-number"},g):null,a=g&&a?c.tsx("span",{key:"expand__expand-icon-number",class:c.join("mapgis-expand__icon-number","mapgis-expand__icon-number--expanded")},g):null,b=(m={},m["mapgis-expand--auto"]="auto"===b,m["mapgis-expand--drawer"]="drawer"===b,m["mapgis-expand--floating"]="floating"===b,m);return c.tsx("div",{class:"mapgis-expand mapgis-widget",classes:b},c.tsx("div",{bind:this,
onclick:this._toggle,class:"mapgis-expand__mask",classes:k}),c.tsx("div",{class:"mapgis-expand__container",classes:f},c.tsx("div",{class:"mapgis-expand__panel"},c.tsx("div",{bind:this,onclick:this._toggle,onkeydown:this._toggle,"aria-label":d,title:d,role:"button",tabindex:"0",class:"mapgis-widget-button"},l,c.tsx("span",{"aria-hidden":"true",class:"mapgis-collapse__icon",classes:e}),c.tsx("span",{class:"mapgis-icon-font-fallback-text"},d)),a),c.tsx("div",{class:"mapgis-expand__content",classes:h,bind:this},this._renderContent())));
var f,h,k,l,m};b.prototype._toggle=function(){this.toggle()};b.prototype._renderContent=function(){var a=this.content;return"string"===typeof a?c.tsx("div",{innerHTML:a}):c.isWidget(a)?a.render():a instanceof HTMLElement?c.tsx("div",{bind:a,afterCreate:this._attachToNode}):c.isWidgetBase(a)?c.tsx("div",{bind:a.domNode,afterCreate:this._attachToNode}):null};b.prototype._attachToNode=function(a){a.appendChild(this)};d([e.aliasOf("viewModel.autoCollapse")],b.prototype,"autoCollapse",void 0);d([e.property({dependsOn:["content"]}),
c.renderable()],b.prototype,"collapseIconClass",null);d([e.property(),c.renderable()],b.prototype,"collapseTooltip",void 0);d([e.property(),c.renderable()],b.prototype,"content",void 0);d([e.aliasOf("viewModel.expanded"),c.renderable()],b.prototype,"expanded",void 0);d([e.property({dependsOn:["content"]}),c.renderable()],b.prototype,"expandIconClass",null);d([e.property(),c.renderable()],b.prototype,"expandTooltip",void 0);d([e.aliasOf("viewModel.group")],b.prototype,"group",void 0);d([e.property(),
c.renderable()],b.prototype,"iconNumber",void 0);d([e.property(),c.renderable()],b.prototype,"mode",void 0);d([e.aliasOf("viewModel.view"),c.renderable()],b.prototype,"view",void 0);d([e.property({type:p}),c.renderable("viewModel.state")],b.prototype,"viewModel",void 0);d([c.accessibleHandler()],b.prototype,"_toggle",null);return b=d([e.subclass("mapgis.widgets.Expand")],b)}(e.declared(t))});