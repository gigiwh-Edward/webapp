// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
require({cache:{"url:mapgis/widgets/UnivariateColorSizeSlider/templates/UnivariateColorSizeSlider.html":'\x3cdiv class\x3d"${_css.container}"\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"_containerNode"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_titleNode"\x3e\x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_sliderNode"\x3e\x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_scaleNode"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("./Widgette ../core/numberUtils ../renderers/support/utils ../widgets/RendererSlider ../widgets/RendererSlider/sliderUtils ../Color dijit/_TemplatedMixin dojo/_base/array dojo/_base/lang dojo/debounce dojo/dom-style dojo/dom-construct dojo/dom-class dojox/gfx dojo/text!./UnivariateColorSizeSlider/templates/UnivariateColorSizeSlider.html".split(" "),function(n,p,q,r,k,m,t,l,h,u,e,v,w,g,x){return n.createSubclass([t],{_rampNode:null,_sliderHeight:null,_barsGroup:null,_updateTimer:null,_css:null,
_defaultHeight:200,_handles:[0,1],declaredClass:"mapgis.widgets.UnivariateColorSizeSlider",templateString:x,properties:{visualVariables:[],values:null,minValue:{dependsOn:["statistics"],get:function(){return this.get("statistics.min")||0},set:function(a){if(void 0===a)return this._clearOverride("minValue");this._override("minValue",a)}},maxValue:{dependsOn:["statistics"],get:function(){return this.get("statistics.max")||100},set:function(a){if(void 0===a)return this._clearOverride("maxValue");this._override("maxValue",
a)}},minSize:null,maxSize:null,histogram:null,statistics:null,zoomOptions:null,histogramVisible:!0,statisticsVisible:!0,labelsVisible:!0,ticksVisible:!0,handlesVisible:!0,histogramWidth:100,rampWidth:26,symbolWidth:50},constructor:function(){this._css={container:"mapgis-color-and-size-slider",handlerTickSize:"mapgis-handler-tick-size"};this._attachSymbols=u(this._attachSymbols,0)},postCreate:function(){this.inherited(arguments);this._setUpDataDefaults()},startup:function(){this.inherited(arguments);this._slider=
new r({type:"UnivariateColorSizeSlider",values:this.values,isDate:this.isDate,minimum:this.zoomOptions?this.zoomOptions.minSliderValue:this.minValue,maximum:this.zoomOptions?this.zoomOptions.maxSliderValue:this.maxValue,_minZoomLabel:this.zoomOptions?this.minValue:null,_maxZoomLabel:this.zoomOptions?this.maxValue:null,_isZoomed:this.zoomOptions?!0:!1,labelsVisible:this.labelsVisible,ticksVisible:this.ticksVisible,handlesVisible:this.handlesVisible,handles:this._handles},this._sliderNode);this._slider.startup();
this._rampNode=this._slider._sliderAreaRight;this._sliderHeight=e.get(this._rampNode,"height")||this._defaultHeight;this._createSVGSurfaces();this._slider.on("slide",h.hitch(this,function(a){this._colorInfoAutoAdjust();this._fillRamp(a.values)}));this._slider.on("data-change",h.hitch(this,function(a){a=a.values;var b=this._getSizeVisualVariable();b.minDataValue=a[0];b.maxDataValue=a[1];this.values=a;this._colorInfoAutoAdjust();this._fillRamp();this.emit("data-change",{})}));this._slider.on("handle-value-change",
h.hitch(this,function(a){a=a.values;var b=this._getSizeVisualVariable();b.minDataValue=a[0];b.maxDataValue=a[1];this.values=a;this._updateRendererSlider();this.emit("handle-value-change",{})}));this._slider.on("data-value-change",h.hitch(this,function(a){this.set({minValue:a.min,maxValue:a.max});this._updateRendererSlider();this.emit("data-value-change",{})}));this._slider.on("stop",h.hitch(this,function(){this.emit("handle-value-change",{})}));this._slider.on("zoom-out",h.hitch(this,function(){this.zoomOptions=
null}));this.statistics&&this.statisticsVisible&&this._generateStatistics();this.histogramVisible&&(this.histogram||this.zoomOptions&&this.zoomOptions.histogram)&&this._generateHistogram();this.watch("minValue, maxValue, symbol, visualVariables, minSize, maxSize, statistics, histogram, zoomOptions",this._updateTimeout);this.watch("histogramVisible",this._toggleHistogram);this.watch("zoomOptions",this._zoomEventHandler)},destroy:function(){this._slider&&this._slider.destroy();this._avgHandleObjs&&
this._avgHandleObjs.avgHandleTooltip&&this._avgHandleObjs.avgHandleTooltip.destroy();this.countTooltips&&l.forEach(this.countTooltips,function(a){a.destroy()})},refresh:function(){this._updateTimeout()},_updateTimeout:function(){this._updateRendererSlider()},_updateRendererSlider:function(){var a=this._getSizeVisualVariable();this.set({minSize:a.minSize,maxSize:a.maxSize,values:[a.minDataValue,a.maxDataValue]});this.minValue===this.maxValue&&(0===this.minValue?this.set({maxValue:100,values:[20,80]}):
null===this.minValue?this.set({minValue:0,maxValue:100,values:[20,80]}):this.set({minValue:0,maxValue:2*this.minValue,values:[this.maxValue/5,this.maxValue/5*4]}));null!==this.zoomOptions&&!1!==this.zoomOptions?(this.toggleSliderBottom=this.zoomOptions.minSliderValue>this.minValue,this.toggleSliderTop=this.zoomOptions.maxSliderValue<this.maxValue,this._slider.set({minimum:this.zoomOptions.minSliderValue,maximum:this.zoomOptions.maxSliderValue})):(this._slider.set({minimum:this.minValue,maximum:this.maxValue}),
this._maxZoomLabel=this._minZoomLabel=null,this._isZoomed=!0);this._slider.set("values",this.values);this._slider._reset();this._slider._updateRoundedLabels();this._slider._generateMoveables();this._clearRect();this._createSVGSurfaces();this.statistics&&this.statisticsVisible&&this._generateStatistics();this.histogramVisible&&(this.histogram||this.zoomOptions&&this.zoomOptions.histogram)&&this._generateHistogram()},_zoomEventHandler:function(){this.emit("zoom",{zoomed:!!this.zoomOptions})},_setUpDataDefaults:function(){var a=
this._getSizeVisualVariable();this.set({minSize:a.minSize,maxSize:a.maxSize});null!==this.zoomOptions&&!1!==this.zoomOptions&&(this.toggleSliderBottom=this.zoomOptions.minSliderValue>this.minValue,this.toggleSliderTop=this.zoomOptions.maxSliderValue<this.maxValue);null===a.minDataValue&&null===a.maxDataValue||0===a.minDataValue&&0===a.maxDataValue?null===this.minValue&&null===this.maxValue&&this.set({minValue:0,maxValue:100,values:[20,80]}):this.minValue===this.maxValue?0===this.minValue?this.set({maxValue:100,
values:[20,80]}):null===this.minValue?this.set({minValue:0,maxValue:100,values:[20,80]}):this.set({minValue:0,maxValue:2*this.minValue,values:[this.maxValue/5,this.maxValue/5*4]}):this.values=[a.minDataValue,a.maxDataValue];null===this.minValue&&(this.minValue=0);null===this.maxValue&&(this.maxValue=100)},_colorInfoAutoAdjust:function(){var a=this._getColorVisualVariable().stops,b=a.length-1,c=this._slider.values,d=a[0].value=c[0],f=a[b].value=c[1],c=l.map(a,function(a,c){return{value:d*(b-c)/b+f*
c/b,index:c}});q.updateColorStops({stops:a,changes:c,isDate:this.isDate})},_getSizeVisualVariable:function(){var a;l.some(this.visualVariables,function(b){if("size"===b.type)return a=b,!0});return a},_getColorVisualVariable:function(){var a;l.some(this.visualVariables,function(b){if("color"===b.type)return a=b,!0});return a},_createSVGSurfaces:function(){this._proportionalSymbolSurface=g.createSurface(this._rampNode,this.rampWidth,this._sliderHeight);this._surfaceRect=this._proportionalSymbolSurface.createRect({width:this.rampWidth,
height:this._sliderHeight});this._histogramSurface=k.generateHistogramSurface(this._rampNode,this.histogramWidth,this._sliderHeight,this.rampWidth);this._fillRamp();this._attachSymbols()},_attachSymbols:function(){this._attachSymbol(this._slider.moveables[0],this.minSize,"min");this._attachSymbol(this._slider.moveables[1],this.maxSize,"max")},_attachSymbol:function(a,b){var c=e.get(a.handleContainer,"height"),d=this.symbol||{type:"custom"};a.symbol||(a.symbol=v.create("div",{style:"position: absolute; left: 10px;"},
a));switch(d.type){case "simple-line":b=b===this.minSize?5:13;this._generateLineSymbol(a,b,c);break;case "simple-marker":b=b===this.minSize?12:48;this._generateCircleSymbol(a.symbol,b,c);break;default:b=b===this.minSize?12:48,this._generateCircleSymbol(a.symbol,b,c)}return a.symbol},_generateLineSymbol:function(a,b,c){var d=a.symbol;w.add(a.tick,this._css.handlerTickSize);e.set(d,"top",c/2-b+"px");e.set(d,"height",2*b+"px");e.set(d,"width",b-4+"px");d.innerHTML="";a=g.createSurface(d);a.rawNode.style.position=
"absolute";a.rawNode.style.top=1===b?"1px":b/2+"px";this.isLeftToRight()||(a.rawNode.style.left="-45px");a.setDimensions(this.rampWidth,b);a.createRect({width:this.rampWidth,height:b}).setFill(new m([0,0,0,.4]));return a},_generateCircleSymbol:function(a,b,c){var d=b/2;b=12===b?!0:!1;var f=this.isLeftToRight();e.set(a,"top",c/2-(d+1)+"px");e.set(a,"height",2*(d+1)+"px");e.set(a,"width",b?2*(d+1):d+"px");e.set(a,"left",b?"8px":"10px");a.innerHTML="";a=g.createSurface(a);a.rawNode.style.position="absolute";
this.isLeftToRight()||(a.rawNode.style.left=b?"-35px":"-53px");b?(a.setDimensions(2*(d+1),2*(d+1)),a.createCircle({cx:7,cy:d+1,r:d}).setFill(new m([0,0,0,.4])).setStroke("#FFF")):(a.setDimensions(d+1,2*(d+1)),a.createCircle({cx:f?0:23,cy:d+1,r:d}).setFill(new m([0,0,0,.2])).setStroke("#FFF"));return a},_fillRamp:function(a){var b=this._getGradientColorStops(),c=this._slider,d=this._sliderHeight,f=Math.round(d-((a?a[0]:c.values[0])-c.minimum)/(c.maximum-c.minimum)*d);a=Math.round(d-((a?a[1]:c.values[1])-
c.minimum)/(c.maximum-c.minimum)*d);c=this.rampWidth;this.isLeftToRight()?(this._proportionalSymbolSurface.clear(),this._proportionalSymbolSurface.createPath().moveTo(c,0).lineTo(c,a).lineTo(10,f).lineTo(10,d).lineTo(0,d).lineTo(0,0).closePath().setStroke("#FFF").setFill({type:"linear",x1:0,y1:0,x2:0,y2:d,colors:b})):(this._proportionalSymbolSurface.clear(),this._proportionalSymbolSurface.createPath().moveTo(c,0).lineTo(c,d).lineTo(c-10,d).lineTo(c-10,f).lineTo(0,a).lineTo(0,0).closePath().setStroke("#FFF").setFill({type:"linear",
x1:0,y1:0,x2:0,y2:d,colors:b}));e.set(this._proportionalSymbolSurface.rawNode,"overflow","visible");e.set(this._proportionalSymbolSurface.rawNode,"background-color","#d9d9d9");b={color:"#FFF",width:3};null!==this.zoomOptions&&!1!==this.zoomOptions&&(this.toggleSliderBottom&&this.toggleSliderTop?(this._proportionalSymbolSurface.createPath("M0,1 L6.25,-1 L12.5,1 L18.75,-1 L25,1").setStroke(b).setTransform(g.matrix.translate(0,5)),this._proportionalSymbolSurface.createPath("M0,1 L6.25,-1 L12.5,1 L18.75,-1 L25,1").setStroke(b).setTransform(g.matrix.translate(0,
195))):this.toggleSliderBottom?this._proportionalSymbolSurface.createPath("M0,1 L6.25,-1 L12.5,1 L18.75,-1 L25,1").setStroke(b).setTransform(g.matrix.translate(0,195)):this.toggleSliderTop&&this._proportionalSymbolSurface.createPath("M0,1 L6.25,-1 L12.5,1 L18.75,-1 L25,1").setStroke(b).setTransform(g.matrix.translate(0,5)))},_getGradientColorStops:function(){var a=this._getColorVisualVariable(),b=this._slider.minimum,c=this._slider.maximum;return a.stops.slice().map(function(a){return{color:a.color,
offset:(c-a.value)/(c-b)}}).reverse()},_clearRect:function(){this._proportionalSymbolSurface.destroy();this._histogramSurface.destroy()},_showHistogram:function(){this.histogram||this.zoomOptions&&this.zoomOptions.histogram?this._generateHistogram():this._barsGroup&&(this._barsGroup.destroy(),this._barsGroup=null)},_toggleHistogram:function(){this.histogramVisible?(e.set(this._barsGroup.rawNode,"display","inline-block"),this._showHistogram()):e.set(this._barsGroup.rawNode,"display","none")},_generateHistogram:function(){var a=
this.zoomOptions&&this.zoomOptions.histogram?this.zoomOptions.histogram:this.histogram;this._barsGroup=k.generateHistogram(this._histogramSurface,a,this.histogramWidth,this.rampWidth,this.isLeftToRight());this.countTooltips=k.generateCountTooltips(a,this._barsGroup)},_generateStatistics:function(){if(!(2>this.statistics.count||isNaN(this.statistics.avg))){var a,b=this.statistics;a=this._slider;var c=this.zoomOptions||null,d=k.getPrecision(this.maxValue),f,e;b.min===b.max&&b.min===b.avg?(f=0,e=2*b.avg):
(f=b.min,e=b.max);if(f!==a.minimum||e!==a.maximum)f=a.minimum,e=a.maximum;c&&(f=c.minSliderValue,e=c.maxSliderValue);a=this._sliderHeight*(e-b.avg)/(e-f);b=p.round([b.avg,e,f])[0];this._avgHandleObjs=k.generateAvgLine(this._histogramSurface,b,a,d,this.isLeftToRight(),this.isDate)}}})});