//>>built
define(["dojo/_base/array","dojo/_base/declare","dojox/color"],function(g,d,e){return d("dojox.color.SimpleColorModel",null,{_startColor:null,_endColor:null,constructor:function(b,a){void 0!=a?(this._startColor=b,this._endColor=a):(a=b.toHsl(),a.s=100,a.l=85,this._startColor=e.fromHsl(a.h,a.s,a.l),this._startColor.a=b.a,a.l=15,this._endColor=e.fromHsl(a.h,a.s,a.l),this._endColor.a=b.a)},_getInterpoledValue:function(b,a,c){return b+(a-b)*c},getNormalizedValue:function(b){},getColor:function(b){var a=
this.getNormalizedValue(b),c=this._startColor.toHsl(),f=this._endColor.toHsl();b=this._getInterpoledValue(c.h,f.h,a);var d=this._getInterpoledValue(c.s,f.s,a),c=this._getInterpoledValue(c.l,f.l,a),a=this._getInterpoledValue(this._startColor.a,this._endColor.a,a);b=e.fromHsl(b,d,c);b.a=a;return b}})});