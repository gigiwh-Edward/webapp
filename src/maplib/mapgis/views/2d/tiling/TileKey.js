// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define(["require","exports","../../../core/ObjectPool"],function(g,h,e){return function(){function b(a,b,c,d){this.set(a,b,c,d)}b.from=function(a,f,c,d){return b.pool.acquire(a,f,c,d)};b.getId=function(a,b,c,d){return"object"===typeof a?a.level+"/"+a.row+"/"+a.col+"/"+a.world:a+"/"+b+"/"+c+"/"+d};Object.defineProperty(b.prototype,"id",{get:function(){return this.toString()},enumerable:!0,configurable:!0});b.prototype.equals=function(a){return this.level===a.level&&this.row===a.row&&this.col===a.col&&
this.world===a.world};b.prototype.release=function(){this.world=this.col=this.row=this.level=0};b.prototype.set=function(a,b,c,d){null==a?this.world=this.col=this.row=this.level=0:"object"===typeof a?(this.level=a.level||0,this.row=a.row||0,this.col=a.col||0,this.world=a.world||0):"string"===typeof a?(a=a.split("/"),b=a[1],c=a[2],d=a[3],this.level=parseFloat(a[0]),this.row=parseFloat(b),this.col=parseFloat(c),this.world=parseFloat(d)):(this.level=+a,this.row=+b,this.col=+c,this.world=+d||0);return this};
b.prototype.toString=function(){return this.level+"/"+this.row+"/"+this.col+"/"+this.world};b.pool=new e(b,!0,null,25,50);return b}()});