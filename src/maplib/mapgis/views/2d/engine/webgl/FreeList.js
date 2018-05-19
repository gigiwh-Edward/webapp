// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define(["require","exports"],function(h,k){Object.defineProperty(k,"__esModule",{value:!0});var l=function(){function d(a){this._largestRange=null;this._parent=a;this._updateLargestRange()}Object.defineProperty(d.prototype,"largestRange",{get:function(){return this._largestRange},enumerable:!0,configurable:!0});d.prototype.rangeCreated=function(a){if(!this._largestRange||a.count>this._largestRange.count)this._largestRange=a};d.prototype.rangeResized=function(a,b,c){if(a===this._largestRange)a.count<
c&&this._updateLargestRange();else if(!this._largestRange||a.count>this._largestRange.count)this._largestRange=a};d.prototype.findBestRange=function(a){for(var b=this._parent._freeHead,c=null;null!==b;)b.count>=a&&(!c||b.count-a<c.count-a)&&(c=b),b=b.next;return c};d.prototype.findAdjacentRanges=function(a,b){for(var c=!0,d=!1,f=null,g=this._parent._freeHead;c&&!d;){var h=null!==g?g.from:this._parent._size;a>=(null!==f?f.from+f.count:0)&&a+b<=h?(c=!1,d=!0):null!==g?(f=g,g=g.next):c=!1}return[f,g]};
d.prototype._updateLargestRange=function(){for(var a=null,b=this._parent._freeHead;null!==b;){if(!a||b.count>a.count)a=b;b=b.next}this._largestRange=a};return d}();h=function(){function d(a,b){this._allocated=0;this._size=a;this._freeHead=0<a?{from:0,count:a,prev:null,next:null}:null;this._bookKeeper=b||new l(this);this._freeHead&&this._bookKeeper.rangeCreated(this._freeHead)}d.prototype.allocate=function(a){var b=this._bookKeeper.findBestRange(a);if(null===b)return-1;var c=b.from,e=b.count;b.from+=
a;b.count-=a;this._bookKeeper.rangeResized(b,c,e);this._allocated+=a;0===b.count&&(a=null!==b.prev?this._freeHead:b.next,d._removeRange(b),this._freeHead=a);return c};d.prototype.free=function(a,b){var c=this._bookKeeper.findAdjacentRanges(a,b),e=c[0],c=c[1];a={from:a,count:b,prev:e,next:c};null!==e&&(e.next=a);null!==c&&(c.prev=a);this._bookKeeper.rangeCreated(a);this._allocated-=b;if(null!==c&&a.from+a.count===c.from){b=a.from;var f=a.count;d._fuse(a,c);d._removeRange(c);this._bookKeeper.rangeResized(a,
b,f);this._bookKeeper.rangeResized(c,void 0,0)}null!==e&&e.from+e.count===a.from&&(b=e.from,f=e.count,d._fuse(e,a),d._removeRange(a),this._bookKeeper.rangeResized(e,b,f),this._bookKeeper.rangeResized(a,void 0,0));this._freeHead=null!==a.prev?this._freeHead:a};Object.defineProperty(d.prototype,"fragmentation",{get:function(){var a=this._size-this._allocated;return 0===a?0:1-this._bookKeeper.largestRange.count/a},enumerable:!0,configurable:!0});d._removeRange=function(a){null!==a.prev?null!==a.next?
(a.prev.next=a.next,a.next.prev=a.prev):a.prev.next=null:null!==a.next&&(a.next.prev=null)};d._fuse=function(a,b){a.count+=b.count;a.next=b.next;b.from+=b.count;b.count=0;null!==b.next&&(b.next.prev=a)};return d}();k.FreeList=h});