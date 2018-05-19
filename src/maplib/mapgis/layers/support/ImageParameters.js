// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../TimeExtent ../../core/Accessor ../../core/accessorSupport/decorators ../../geometry/Extent ../../geometry/SpatialReference ./LayerTimeOptions ./layerUtils".split(" "),function(r,t,k,d,l,m,c,n,p,q,h){return function(e){function b(a){a=e.call(this)||this;a.extent=null;a.width=null;a.height=null;a.dpi=null;a.format=null;a.imageSpatialReference=null;a.layerDefinitions=[];a.layerOption=null;a.layerIds=
null;a.transparent=!0;a.timeExtent=null;a.layerTimeOptions=null;return a}k(b,e);b.prototype.toJSON=function(){var a=this.extent,b=this.timeExtent,a=a&&a.clone()._normalize(!0),c=this.layerOption,d=a?a.spatialReference.wkid||JSON.stringify(a.spatialReference.toJSON()):null,f=this.imageSpatialReference,g={dpi:this.dpi,format:this.format,transparent:this.transparent,size:null!==this.width&&null!==this.height?this.width+","+this.height:null,bbox:a?a.xmin+","+a.ymin+","+a.xmax+","+a.ymax:null,bboxSR:d,
layers:c?c+":"+this.layerIds.join(","):null,layerDefs:h._serializeLayerDefinitions(this.layerDefinitions),layerTimeOptions:h._serializeTimeOptions(this.layerTimeOptions),imageSR:f?f.wkid||JSON.stringify(f.toJSON()):d,time:b?b.toJSON().join(","):null},e={};Object.keys(g).filter(function(a){return null!==g[a]}).forEach(function(a){return e[a]=g[a]});return e};d([c.property({type:n})],b.prototype,"extent",void 0);d([c.property()],b.prototype,"width",void 0);d([c.property()],b.prototype,"height",void 0);
d([c.property()],b.prototype,"dpi",void 0);d([c.property()],b.prototype,"format",void 0);d([c.property({type:p})],b.prototype,"imageSpatialReference",void 0);d([c.property()],b.prototype,"layerDefinitions",void 0);d([c.property()],b.prototype,"layerOption",void 0);d([c.property()],b.prototype,"layerIds",void 0);d([c.property()],b.prototype,"transparent",void 0);d([c.property({type:l})],b.prototype,"timeExtent",void 0);d([c.property({type:q})],b.prototype,"layerTimeOptions",void 0);return b=d([c.subclass("mapgis.layers.support.ImageParameters")],
b)}(c.declared(m))});