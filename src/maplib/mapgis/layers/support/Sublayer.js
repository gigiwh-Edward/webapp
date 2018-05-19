// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/paramHelper dojo/io-query ../../PopupTemplate ../../core/Collection ../../core/JSONSupport ../../core/lang ../../core/Logger ../../core/accessorSupport/decorators ../../core/accessorSupport/ensureType ../../core/accessorSupport/write ../FeatureLayer ./LabelClass ./layerSourceUtils ../../renderers/support/jsonUtils ../../renderers/support/typeUtils ../../symbols/Symbol3D ../../tasks/QueryTask ../../tasks/support/Query".split(" "),
    function(G, H, q, f, r, t, u, v, w, h, x, e, y, m, z, A, g, B, C, D, E, n) {
        var p = x.getLogger("mapgis.layers.support.Sublayer"),
            F = 0;
        return function(l) {
            function b() {
                var a = null !== l && l.apply(this, arguments) || this;
                a._sublayersHandles = null;
                a.popupEnabled = !0;
                return a
            }
            q(b, l);
            k = b;
            Object.defineProperty(b.prototype, "definitionExpression", { get: function() { return this._get("definitionExpression") }, set: function(a) { this._setAndNotifyLayer("definitionExpression", a) }, enumerable: !0, configurable: !0 });
            Object.defineProperty(b.prototype, "id", { get: function() { var a = this._get("id"); return null == a ? F++ : a }, set: function(a) { this._set("id", a) }, enumerable: !0, configurable: !0 });
            Object.defineProperty(b.prototype, "labelingInfo", { get: function() { return this._get("labelingInfo") }, set: function(a) { this._setAndNotifyLayer("labelingInfo", a) }, enumerable: !0, configurable: !0 });
            b.prototype.writeLabelingInfo = function(a, b, d, c) {
                (!c || c.writeAsDynamic) && a && a.length && (b.layerDefinition = { drawingInfo: { labelingInfo: a.map(function(a) { return a.write({}, c) }) } })
            };
            Object.defineProperty(b.prototype,
                "labelsVisible", { get: function() { return this._get("labelsVisible") }, set: function(a) { this._setAndNotifyLayer("labelsVisible", a) }, enumerable: !0, configurable: !0 });
            b.prototype.writeLabelsVisible = function(a, b, d, c) { if (!c || c.writeAsDynamic) b.showLabels = a };
            Object.defineProperty(b.prototype, "legendEnabled", { get: function() { return this._get("legendEnabled") }, set: function(a) { this._set("legendEnabled", a) }, enumerable: !0, configurable: !0 });
            Object.defineProperty(b.prototype, "layer", {
                set: function(a) {
                    this._set("layer",
                        a);
                    this.sublayers && this.sublayers.forEach(function(b) { return b.layer = a })
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(b.prototype, "minScale", { get: function() { return this._get("minScale") }, set: function(a) { this._set("minScale", a) }, enumerable: !0, configurable: !0 });
            b.prototype.readMinScale = function(a, b) { return b.minScale || b.layerDefinition && b.layerDefinition.minScale || 0 };
            b.prototype.writeMinScale = function(a, b, d, c) {
                if (c && c.writeOverridesOnly && (d = c && c.serviceSublayer) && d.minScale === a && d.maxScale ===
                    this.maxScale) return;
                b.minScale = a
            };
            Object.defineProperty(b.prototype, "maxScale", { get: function() { return this._get("maxScale") }, set: function(a) { this._set("maxScale", a) }, enumerable: !0, configurable: !0 });
            b.prototype.readMaxScale = function(a, b) { return b.maxScale || b.layerDefinition && b.layerDefinition.maxScale || 0 };
            b.prototype.writeMaxScale = function(a, b, d, c) {
                if (c && c.writeOverridesOnly && (d = c && c.serviceSublayer) && d.maxScale === a && d.minScale === this.minScale) return;
                b.maxScale = a
            };
            Object.defineProperty(b.prototype,
                "opacity", { get: function() { return this._get("opacity") }, set: function(a) { this._setAndNotifyLayer("opacity", a) }, enumerable: !0, configurable: !0 });
            b.prototype.readOpacity = function(a, b) { a = b.layerDefinition; return 1 - .01 * (null != a.transparency ? a.transparency : a.drawingInfo.transparency) };
            b.prototype.writeOpacity = function(a, b, d, c) { if (!c || c.writeAsDynamic) b.layerDefinition = { drawingInfo: { transparency: 100 - 100 * a } } };
            b.prototype.writeParent = function(a, b, d, c) {
                c && c.writeOverridesOnly || (b.parentLayerId = this.parent && this.parent !==
                    this.layer ? this.parent.id : -1)
            };
            Object.defineProperty(b.prototype, "popupTemplate", { get: function() { return this._get("popupTemplate") }, set: function(a) { this._set("popupTemplate", a) }, enumerable: !0, configurable: !0 });
            Object.defineProperty(b.prototype, "renderer", {
                get: function() { return this._get("renderer") },
                set: function(a) {
                    if (a)
                        for (var b = 0, d = a.getSymbols(); b < d.length; b++)
                            if (d[b].isInstanceOf(D)) { p.warn("Sublayer renderer should use 2D symbols"); break }
                    this._setAndNotifyLayer("renderer", a)
                },
                enumerable: !0,
                configurable: !0
            });
            b.prototype.readRenderer = function(a, b, d) { if (a = b.layerDefinition.drawingInfo.renderer || void 0)(a = B.read(a, b, d) || void 0) || p.error("Failed to create renderer", { rendererDefinition: b.drawingInfo.renderer, layer: this, context: d }); return a };
            b.prototype.writeRenderer = function(a, b, d, c) { if (!c || c.writeAsDynamic) b.layerDefinition = { drawingInfo: { renderer: a.toJSON() } } };
            Object.defineProperty(b.prototype, "source", {
                get: function() { return this._get("source") || { mapLayerId: this.id, type: g.MAPLAYER } },
                set: function(a) {
                    this._setAndNotifyLayer("source",
                        a)
                },
                enumerable: !0,
                configurable: !0
            });
            b.prototype.writeSource = function(a, b, d, c) { c && !c.writeAsDynamic && c.writeOverridesOnly || (b.layerDefinition = { source: g.sourceToJSON(a) }) };
            Object.defineProperty(b.prototype, "sublayers", {
                set: function(a) {
                    var b = this,
                        d = this._get("sublayers");
                    d && (d.forEach(function(a) {
                        a.parent = null;
                        a.layer = null
                    }), this._sublayersHandles.forEach(function(a) { return a.remove() }), this._sublayersHandles = null);
                    a && (a.forEach(function(a) {
                        a.parent = b;
                        a.layer = b.layer
                    }), this._sublayersHandles = [a.on("after-add",
                        function(a) {
                            a = a.item;
                            a.parent = b;
                            a.layer = b.layer
                        }), a.on("after-remove", function(a) {
                        a = a.item;
                        a.parent = null;
                        a.layer = null
                    })]);
                    this._set("sublayers", a)
                },
                enumerable: !0,
                configurable: !0
            });
            b.prototype.castSublayers = function(a) { return y.default(v.ofType(k), a) };
            b.prototype.writeSublayers = function(a, b, d, c) { c && c.writeOverridesOnly || (b[d] = this.get("sublayers.length") ? this.sublayers.map(function(a) { return a.id }).toArray().reverse() : null) };
            Object.defineProperty(b.prototype, "title", {
                get: function() { return this._get("title") },
                set: function(a) { this._set("title", a) },
                enumerable: !0,
                configurable: !0
            });
            b.prototype.writeTitle = function(a, b, d, c) {
                if (c && c.writeOverridesOnly && (c = c && c.serviceSublayer) && c.title === a) return;
                b[d] = a
            };
            Object.defineProperty(b.prototype, "url", {
                get: function() {
                    var a = this.layer,
                        b = this.source;
                    if (!a) return null;
                    if (g.isMapLayerSource(b)) return a.parsedUrl.path + "/" + b.mapLayerId;
                    b = { layer: JSON.stringify({ source: g.sourceToJSON(this.source) }) };
                    return a.parsedUrl.path + "/dynamicLayer?" + t.objectToQuery(b)
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(b.prototype, "visible", { get: function() { return this._get("visible") }, set: function(a) { this._setAndNotifyLayer("visible", a) }, enumerable: !0, configurable: !0 });
            b.prototype.writeVisible = function(a, b, d, c) {
                if (c && c.writeOverridesOnly && (c = c && c.serviceSublayer) && c.visible === a) return;
                b[d] = a
            };
            b.prototype.clone = function() {
                var a = new k;
                this.hasOwnProperty("definitionExpression") && (a.definitionExpression = this.definitionExpression);
                this.hasOwnProperty("id") && (a.id = this.id);
                this.hasOwnProperty("labelingInfo") &&
                    (a.labelingInfo = h.clone(this.labelingInfo));
                this.hasOwnProperty("labelsVisible") && (a.labelsVisible = this.labelsVisible);
                this.hasOwnProperty("legendEnabled") && (a.legendEnabled = this.legendEnabled);
                this.hasOwnProperty("visible") && (a.visible = this.visible);
                this.hasOwnProperty("layer") && (a.layer = this.layer);
                this.hasOwnProperty("minScale") && (a.minScale = this.minScale);
                this.hasOwnProperty("maxScale") && (a.maxScale = this.maxScale);
                this.hasOwnProperty("opacity") && (a.opacity = this.opacity);
                this.hasOwnProperty("parent") &&
                    (a.parent = this.parent);
                this.hasOwnProperty("popupEnabled") && (a.popupEnabled = this.popupEnabled);
                this.hasOwnProperty("popupTemplate") && (a.popupTemplate = this.popupTemplate.clone());
                this.hasOwnProperty("renderer") && (a.renderer = this.renderer.clone());
                this.hasOwnProperty("source") && (a.source = h.clone(this.source));
                this.hasOwnProperty("sublayers") && (a.sublayers = this.sublayers.clone());
                this.hasOwnProperty("title") && (a.title = this.title);
                //add by czl
                this.hasOwnProperty("civFeatureType") && (a.civFeatureType = this.civFeatureType);
                this.hasOwnProperty("civFeatureMetaType") && (a.civFeatureMetaType = this.civFeatureMetaType);
                this.hasOwnProperty("base64IconData") && (a.base64IconData = this.base64IconData);
                return a
            };
            b.prototype.createQuery = function() {
                return new n({
                    returnGeometry: !0,
                    where: this.definitionExpression || "1\x3d1"
                })
            };
            b.prototype.createFeatureLayer = function() {
                if (this.hasOwnProperty("sublayers")) return null;
                var a = this.layer && this.layer.parsedUrl,
                    b = this.source,
                    d = null;
                a && (d = g.isMapLayerSource(b) ? a.path + "/" + b.mapLayerId : a.path + "/dynamicLayer");
                a = new z({ url: d });
                this.hasOwnProperty("definitionExpression") && (a.definitionExpression = this.definitionExpression);
                this.hasOwnProperty("labelingInfo") && (a.labelingInfo = h.clone(this.labelingInfo));
                this.hasOwnProperty("labelsVisible") &&
                    (a.labelsVisible = this.labelsVisible);
                this.hasOwnProperty("legendEnabled") && (a.legendEnabled = this.legendEnabled);
                this.hasOwnProperty("visible") && (a.visible = this.visible);
                this.hasOwnProperty("minScale") && (a.minScale = this.minScale);
                this.hasOwnProperty("maxScale") && (a.maxScale = this.maxScale);
                this.hasOwnProperty("opacity") && (a.opacity = this.opacity);
                this.hasOwnProperty("popupTemplate") && (a.popupTemplate = this.popupTemplate.clone());
                this.hasOwnProperty("renderer") && (a.renderer = this.renderer.clone());
                this.hasOwnProperty("source") &&
                    g.isDataLayerSource(this.source) && (a.dynamicDataSource = h.clone(this.source));
                this.hasOwnProperty("title") && (a.title = this.title);
                return a
            };
            b.prototype.queryFeatures = function(a) {
                var b = this;
                void 0 === a && (a = this.createQuery());
                return (new E({ url: this.url })).execute(a).then(function(a) {
                    a && a.features && a.features.forEach(function(a) {
                        a.popupTemplate = b.popupTemplate;
                        a.sourceLayer = b
                    });
                    return a
                })
            };
            b.prototype.toExportImageJSON = function() {
                var a = { id: this.id, source: g.sourceToJSON(this.source) };
                this.definitionExpression &&
                    (a.definitionExpression = this.definitionExpression);
                if (this.renderer || this.labelingInfo || null != this.opacity || null != this.labelsVisible) {
                    var b = a.drawingInfo = {};
                    this.renderer && (b.renderer = this.renderer.toJSON());
                    null != this.labelsVisible && (b.showLabels = this.labelsVisible);
                    !1 !== this.labelsVisible && this.labelingInfo && (b.labelingInfo = this.labelingInfo.map(function(a) { return a.write({}, { origin: "service" }) }));
                    null != this.opacity && (b.transparency = 100 - 100 * this.opacity)
                }
                return a
            };
            b.prototype._setAndNotifyLayer =
                function(a, b) {
                    var d = this.layer;
                    this._get(a) !== b && (this._set(a, b), d && d.emit("sublayer-update", { propertyName: a }))
                };
            f([e.property({ type: String, value: null, json: { read: { source: "layerDefinition.definitionExpression" }, write: { target: "layerDefinition.definitionExpression" } } })], b.prototype, "definitionExpression", null);
            f([e.property({ type: Number, json: { write: { ignoreOrigin: !0 } } })], b.prototype, "id", null);
            f([e.property({ value: null, type: [A], json: { read: { source: "layerDefinition.drawingInfo.labelingInfo" } } })], b.prototype,
                "labelingInfo", null);
            f([e.writer("labelingInfo")], b.prototype, "writeLabelingInfo", null);
            f([e.property({ type: Boolean, json: { read: { source: "showLabels" } } })], b.prototype, "labelsVisible", null);
            f([e.writer("labelsVisible")], b.prototype, "writeLabelsVisible", null);
            f([e.property({ type: Boolean, value: !0, json: { read: { source: "showLegend" }, write: { target: "showLegend" } } })], b.prototype, "legendEnabled", null);
            f([e.property({ value: null })], b.prototype, "layer", null);
            f([e.property({
                type: Number,
                value: 0,
                json: {
                    write: {
                        overridePolicy: function(a,
                            b, d) { if (m.willPropertyWrite(this, "maxScale", {}, d)) return { ignoreOrigin: !0 } }
                    }
                }
            })], b.prototype, "minScale", null);
            f([e.reader("portal-item", "minScale", ["minScale", "layerDefinition.minScale"])], b.prototype, "readMinScale", null);
            f([e.writer("minScale")], b.prototype, "writeMinScale", null);
            f([e.property({ type: Number, value: 0, json: { write: { overridePolicy: function(a, b, d) { if (m.willPropertyWrite(this, "minScale", {}, d)) return { ignoreOrigin: !0 } } } } })], b.prototype, "maxScale", null);
            f([e.reader("portal-item", "maxScale", ["maxScale",
                "layerDefinition.maxScale"
            ])], b.prototype, "readMaxScale", null);
            f([e.writer("maxScale")], b.prototype, "writeMaxScale", null);
            f([e.property({ type: Number })], b.prototype, "opacity", null);
            f([e.reader("opacity", ["layerDefinition.drawingInfo.transparency", "layerDefinition.transparency"])], b.prototype, "readOpacity", null);
            f([e.writer("opacity")], b.prototype, "writeOpacity", null);
            f([e.property({ json: { type: Number, write: { target: "parentLayerId", allowNull: !0 } } })], b.prototype, "parent", void 0);
            f([e.writer("parent")],
                b.prototype, "writeParent", null);
            f([e.property({ type: Boolean })], b.prototype, "popupEnabled", void 0);
            f([e.property({ value: null, type: u, json: { read: { source: "popupInfo" }, write: { target: "popupInfo" } } })], b.prototype, "popupTemplate", null);
            f([e.property({ types: C.types, value: null, json: { write: { target: "layerDefinition.drawingInfo.renderer" } } })], b.prototype, "renderer", null);
            f([e.reader("renderer", ["layerDefinition.drawingInfo.renderer"])], b.prototype, "readRenderer", null);
            f([e.writer("renderer")], b.prototype, "writeRenderer",
                null);
            f([e.property({ cast: g.castSource, json: { read: { source: "layerDefinition.source", reader: g.sourceFromJSON }, write: { target: "layerDefinition.source" } } })], b.prototype, "source", null);
            f([e.writer("source")], b.prototype, "writeSource", null);
            f([e.property({ value: null, json: { type: [Number], write: { target: "subLayerIds", allowNull: !0 } } })], b.prototype, "sublayers", null);
            f([e.cast("sublayers")], b.prototype, "castSublayers", null);
            f([e.writer("sublayers")], b.prototype, "writeSublayers", null);
            f([e.property({
                type: String,
                value: null,
                json: { read: { source: "name" }, write: { target: "name", allowNull: !0, ignoreOrigin: !0 } }
            })], b.prototype, "title", null);
            f([e.writer("title")], b.prototype, "writeTitle", null);
            f([e.property({ readOnly: !0, dependsOn: ["layer", "source"] })], b.prototype, "url", null);
            f([e.property({ type: Boolean, value: !0, json: { read: { source: "defaultVisibility" }, write: { target: "defaultVisibility" } } })], b.prototype, "visible", null);
            f([e.writer("visible")], b.prototype, "writeVisible", null);
            f([r(0, e.cast(n))], b.prototype, "queryFeatures",
                null);
            //add by czl
            f([e.property()], b.prototype, "civFeatureType", void 0);
            f([e.property()], b.prototype, "civFeatureMetaType", void 0);
            f([e.property()], b.prototype, "base64IconData", void 0);
            return b = k = f([e.subclass("mapgis.layers.support.Sublayer")], b);
            var k
        }(e.declared(w))
    });