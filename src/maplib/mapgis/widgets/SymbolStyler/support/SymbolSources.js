// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper dojo/dom-construct dojo/i18n!../nls/SymbolStyler ../../../Color ../../../core/Accessor ../../../core/promiseUtils ../../../core/urlUtils ../../../core/accessorSupport/decorators ../../../symbols/WebStyleSymbol ../../../symbols/support/gfxUtils ../../../symbols/support/jsonUtils ../../../symbols/support/styleUtils ../../../symbols/support/symbolPreview".split(" "),
function(g,h,w,k,d,q,e,x,l,f,y,c,z,r,t,u,p){function A(b){var a=b.get("data.thumbnail.href"),m=b.data.title,c=q.create("div");if(!a)return c.appendChild(v(m)),f.resolve(c);a=new z({name:b.data.name,styleUrl:b.portalItem.url+"/data",thumbnail:{url:a?y.makeAbsolute(a,b.get("portalItem.itemUrl")):null}});return p.renderPreviewHTML(a,{node:c,size:"flat"===b.data.dimensionality?24:48,disableUpsampling:!0}).then(function(a){return c}).catch(function(){c.appendChild(v(m));return c})}function v(b){void 0===
b&&(b=e.noTitle);return q.create("span",{innerHTML:b,alt:""})}function B(b,a,m){var c=u.styleNameFromItem(m),d=null;c||(d=m.itemUrl+"/data");return u.fetchSymbolFromStyle({data:b,baseUrl:m.itemUrl,styleName:c,styleUrl:d},a,{portal:m.portal})}Object.defineProperty(h,"__esModule",{value:!0});var C=[{name:"Circle",type:"esriSMS",style:"esriSMSCircle",color:[0,0,128,128],size:18,outline:{color:[0,0,128,255],width:1}},{name:"Square",type:"esriSMS",style:"esriSMSSquare",color:[0,0,128,128],size:18,outline:{color:[0,
0,128,255],width:1}},{name:"Diamond",type:"esriSMS",style:"esriSMSDiamond",color:[0,0,128,128],size:18,outline:{color:[0,0,128,255],width:1}},{name:"Cross",type:"esriSMS",style:"esriSMSCross",color:[0,0,128,128],size:18,outline:{color:[0,0,128,255],width:1}},{name:"X",type:"esriSMS",style:"esriSMSX",color:[0,0,128,128],size:18,outline:{color:[0,0,128,255],width:1}}];g=[{name:e.sphere,primitive:"sphere"},{name:e.tallCylinder,primitive:"cylinder",mixins:{width:5,height:10,depth:5}},{name:e.cylinder,
primitive:"cylinder"},{name:e.tallCube,primitive:"cube",mixins:{width:5,height:10,depth:5,anchor:"bottom"}},{name:e.cube,primitive:"cube"},{name:e.tallCone,primitive:"cone",mixins:{width:5,height:10,depth:5}},{name:e.cone,primitive:"cone"},{name:e.invertedCone,primitive:"inverted-cone"},{name:e.diamond,primitive:"diamond"},{name:e.tetrahedron,primitive:"tetrahedron"}];var D=[{name:e.circle,primitive:"circle"},{name:e.square,primitive:"square"},{name:e.cross,primitive:"cross"},{name:e.x,primitive:"x"},
{name:e.kite,primitive:"kite"}].map(function(b){return{dimensionality:"flat",title:b.name,type:"PointSymbol3D",symbolLayers:[{type:"Icon",resource:{primitive:b.primitive},material:{color:r.defaultThematicColor},outline:{color:[0,0,0]}}]}}),E=g.map(function(b){return{dimensionality:"volumetric",title:b.name,type:"PointSymbol3D",symbolLayers:[w({type:"Object",resource:{primitive:b.primitive}},b.mixins)]}}),F={getSymbol:function(b){return B(b.parentData,b.data.name,b.portalItem).then(function(a){"point-3d"===
a.type&&a.symbolLayers.forEach(function(a){a.get("material.color")&&("icon"===a.type?a.material.color=r.defaultThematicColor.clone():"object"===a.type&&(a.material.color=a.material.color||new x([255,255,255])))});return a})},getThumbnail:function(b){return A(b)}},G={getSymbol:function(b){return f.resolve(t.fromJSON(b.data))},getThumbnail:function(b){return b.getSymbol().then(function(a){return p.renderPreviewHTML(a,{size:24})})}},H={getSymbol:function(b){return f.resolve(t.fromJSON(b.data))},getThumbnail:function(b){return b.getSymbol().then(function(a){return p.renderPreviewHTML(a,
{size:48})})}},n=function(b){function a(){return null!==b&&b.apply(this,arguments)||this}k(a,b);a.prototype.getSymbol=function(){var a=this;return this._symbol?f.resolve(this._symbol):this.strategy.getSymbol(this).then(function(b){return a._symbol=b})};a.prototype.getThumbnail=function(a){var b=this;return this._thumbnail?(a.appendChild(this._thumbnail),f.resolve()):this.strategy.getThumbnail(this).then(function(c){b._thumbnail=c;a.appendChild(b._thumbnail)})};d([c.property()],a.prototype,"strategy",
void 0);d([c.property()],a.prototype,"data",void 0);d([c.property()],a.prototype,"parentData",void 0);d([c.property()],a.prototype,"portalItem",void 0);return a=d([c.subclass("mapgis.widgets.SymbolStyler.SymbolItem")],a)}(c.declared(l));h.SymbolItem=n;g=function(b){function a(){return null!==b&&b.apply(this,arguments)||this}k(a,b);a.prototype.fetchData=function(){var a=this;return this.data?f.resolve(this.data):this.portalItem.fetchData().then(function(b){a._set("data",b);return b})};d([c.property({readOnly:!0})],
a.prototype,"data",void 0);d([c.property({aliasOf:"portalItem.id"})],a.prototype,"id",void 0);d([c.property({aliasOf:"portalItem.name"})],a.prototype,"name",void 0);d([c.property({aliasOf:"portalItem.title"})],a.prototype,"title",void 0);d([c.property()],a.prototype,"portalItem",void 0);return a=d([c.subclass("mapgis.widgets.SymbolStyler.PortalItemSymbolSourceBase")],a)}(c.declared(l));var I=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.type="symbol-set";return a}k(a,b);a.prototype.getItems=
function(){return f.resolve(null)};d([c.property({readOnly:!0})],a.prototype,"type",void 0);return a=d([c.subclass("mapgis.widgets.SymbolStyler.SymbolSetSymbolSource")],a)}(c.declared(g));h.SymbolSetSymbolSource=I;g=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.type="web-style";return a}k(a,b);a.prototype.getItems=function(){var a=this;return this._items?f.resolve(this._items):this.fetchData().then(function(b){return b.items.map(function(c){return new n({data:c,parentData:b,
portalItem:a.portalItem,strategy:F})})}).then(function(b){return a._items=b})};d([c.property({readOnly:!0})],a.prototype,"type",void 0);return a=d([c.subclass("mapgis.widgets.SymbolStyler.WebStyleSymbolSource")],a)}(c.declared(g));h.WebStyleSymbolSource=g;g=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.data=C;a.id="basic-symbol-set";a.name="Basic";a.title=e.basic;a.type="symbol-set";return a}k(a,b);a.prototype.getItems=function(){return f.resolve(null)};d([c.property()],a.prototype,
"data",void 0);d([c.property()],a.prototype,"id",void 0);d([c.property()],a.prototype,"name",void 0);d([c.property()],a.prototype,"title",void 0);d([c.property({readOnly:!0})],a.prototype,"type",void 0);return a=d([c.subclass("mapgis.widgets.SymbolStyler.BasicSymbolSetSource")],a)}(c.declared(l));h.BasicSymbolSetSource=g;g=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.data={items:D};a.id="basic-web-style:flat";a.name="Basic";a.title=e.basic;a.type="web-style";return a}k(a,
b);a.prototype.getItems=function(){if(this._items)return f.resolve(this._items);var a=this.data.items.map(function(a){return new n({data:a,strategy:G})});return f.resolve(this._items=a)};d([c.property()],a.prototype,"data",void 0);d([c.property()],a.prototype,"id",void 0);d([c.property()],a.prototype,"name",void 0);d([c.property()],a.prototype,"title",void 0);d([c.property({readOnly:!0})],a.prototype,"type",void 0);return a=d([c.subclass("mapgis.widgets.SymbolStyler.IconPrimitiveWebStyleSource")],a)}(c.declared(l));
h.IconPrimitiveWebStyleSource=g;l=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.data={items:E};a.id="basic-web-style:volumetric";a.name="Basic";a.title=e.basic;a.type="web-style";return a}k(a,b);a.prototype.getItems=function(){var a=this;if(this._items)return f.resolve(this._items);var b=this.data.items.map(function(b){return new n({data:b,parentData:a.data,strategy:H})});return f.resolve(this._items=b)};d([c.property()],a.prototype,"data",void 0);d([c.property()],a.prototype,
"id",void 0);d([c.property()],a.prototype,"name",void 0);d([c.property()],a.prototype,"title",void 0);d([c.property({readOnly:!0})],a.prototype,"type",void 0);return a=d([c.subclass("mapgis.widgets.SymbolStyler.ObjectPrimitiveWebStyleSource")],a)}(c.declared(l));h.ObjectPrimitiveWebStyleSource=l});