// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/extendsHelper","../../state/controllers/global/PanContinuousController","../../../input/InputHandler"],function(g,h,k,e,l){Object.defineProperty(h,"__esModule",{value:!0});g=function(g){function c(b,a,c){var f=g.call(this,!0)||this;f.view=b;f.keyToDirection=(d={},d[a.left]=e.Direction.LEFT,d[a.right]=e.Direction.RIGHT,d[a.forward]=e.Direction.FORWARD,d[a.backward]=e.Direction.BACKWARD,d[a.up]=e.Direction.UP,d[a.down]=e.Direction.DOWN,d);b.state.isGlobal&&
(f.registerIncoming("key-down",c,function(a){return f.handleKeyDown(a)}),f.registerIncoming("key-up",c,function(a){return f.handleKeyUp(a)}));return f;var d}k(c,g);c.prototype.handleKeyDown=function(b){if(!b.data.repeat){var a=this.keyToDirection[b.data.key];null!=a&&(this.cameraController&&this.cameraController.active||(this.cameraController=new e.PanContinuousController(this.view),this.view.state.switchCameraController(this.cameraController)),this.cameraController.active&&this.handleKey(b,a,!0))}};
c.prototype.handleKeyUp=function(b){var a=this.keyToDirection[b.data.key];null!=a&&this.cameraController&&this.cameraController.active&&this.handleKey(b,a,!1)};c.prototype.handleKey=function(b,a,c){c?this.cameraController.addDirection(a):this.cameraController.removeDirection(a);b.stopPropagation()};return c}(l.InputHandler);h.KeyPan=g});