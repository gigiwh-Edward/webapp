// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require ../core/Accessor ../core/Collection ../core/promiseUtils ./Layer ./mixins/ScaleRangeLayer ../Graphic dojo/_base/lang".split(" "), function(f, g, h, e, k, l, m, n) {
    var p = g.createSubclass({ properties: { layer: null, layerView: null, graphics: null } });
    return k.createSubclass([l], {
        declaredClass: "mapgis.layers.GraphicsLayer",
        getDefaults: function(a) { return n.mixin(this.inherited(arguments), { graphics: [], listMode: "hide" }) }, //modify by czl
        _gfxHdl: null,
        properties: {
            elevationInfo: null,
            graphics: {
                type: h.ofType(m),
                set: function(a) { var b = this._get("graphics");
                    b || (a.forEach(function(a) { a.layer = this }, this), this._gfxHdl = a.on("change", function(a) { var b, c, d;
                        d = a.added; for (b = 0; c = d[b]; b++) c.layer = this;
                        d = a.removed; for (b = 0; c = d[b]; b++) c.layer = null }.bind(this)), this._set("graphics", a), b = a);
                    b.removeAll();
                    b.addMany(a) }
            },
            screenSizePerspectiveEnabled: !0,
            order: "", //add by czl,
            type: { readOnly: !0, value: "graphics" }
        },
        add: function(a) { this.graphics.add(a); return this },
        addMany: function(a) { this.graphics.addMany(a); return this },
        removeAll: function() {
            this.graphics.removeAll();
            return this
        },
        createGraphicsController: function(a) { return e.resolve(new p({ layer: this, layerView: a.layerView, graphics: this.graphics })) },
        remove: function(a) { this.graphics.remove(a) },
        removeMany: function(a) { this.graphics.removeMany(a) },
        importLayerViewModule: function(a) { switch (a.type) {
                case "2d":
                    return e.create(function(a) { f(["../views/2d/layers/GraphicsLayerView2D"], a) });
                case "3d":
                    return e.create(function(a) { f(["../views/3d/layers/FeatureLayerView3D"], a) }) } },
        graphicChanged: function(a) {
            this.emit("graphic-update",
                a)
        }
    })
});