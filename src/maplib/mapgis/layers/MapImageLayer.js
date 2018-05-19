// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
require({
    cache: {
        "mapgis/layers/DynamicLayer": function() {
            define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../request ../core/Error ../core/promiseUtils ../core/accessorSupport/decorators ./Layer".split(" "), function(w, u, p, b, k, g, f, e, h) {
                return function(h) {
                    function d() { return null !== h && h.apply(this, arguments) || this }
                    p(d, h);
                    d.prototype.getImageUrl = function(a, b, e, f) { throw new g("dynamiclayer:getImageUrl-not-implemented", "getImageUrl() is not implemented"); };
                    d.prototype.fetchImage =
                        function(a, b, e, d) {
                            a = this.getImageUrl(a, b, e, d);
                            var h = { responseType: "image", allowImageDataAccess: d && d.allowImageDataAccess || !1 };
                            d && d.timestamp && (h.query = { _ts: d.timestamp });
                            var q;
                            "string" === typeof a ? (q = a, d = k(a, h)) : d = a.then(function(a) { q = a; return k(q, h) });
                            return d.then(function(a) { return a.data }).catch(function(a) {
                                return a && "cancel" === a.dojoType ? f.reject(a) : q ? f.reject(new g("dynamiclayer:image-fetch-error", "Unable to load image: " + q, { error: a })) : f.reject(new g("dynamiclayer:getImageUrl-error", "Unable to create image url", { error: a }))
                            })
                        };
                    d.prototype.importLayerViewModule = function(a) {
                        switch (a.type) {
                            case "2d":
                                return f.create(function(a) { return w(["../views/2d/layers/MapImageLayerView2D"], a) });
                            case "3d":
                                return f.create(function(a) { return w(["../views/3d/layers/MapImageLayerView3D"], a) })
                        }
                    };
                    return d = b([e.subclass("mapgis.layers.DynamicLayer")], d)
                }(e.declared(h))
            })
        },
        "mapgis/layers/mixins/ArcGISDynamicMapService": function() {
            define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper dojo/_base/lang ../../core/Collection ../../core/CollectionFlattener ../../core/accessorSupport/decorators ../../core/accessorSupport/PropertyOrigin ../../geometry/support/scaleUtils ./ArcGISMapService ./ScaleRangeLayer ../support/ExportImageParameters ../support/Sublayer ../support/sublayerUtils".split(" "),
                function(w, u, p, b, k, g, f, e, h, v, d, a, q, r, x) {
                    function y(a, b, t) {
                        var m = [],
                            n = {};
                        a.forEach(function(a) {
                            var e = new r;
                            e.read(a, b);
                            t && (-1 === t.indexOf(e.id) ? e.visible = !1 : e.visible = !0);
                            n[e.id] = e;
                            null != a.parentLayerId && -1 !== a.parentLayerId ? (a = n[a.parentLayerId], a.sublayers || (a.sublayers = []), a.sublayers.unshift(e)) : m.unshift(e)
                        });
                        return m
                    }

                    function l(a, b) {
                        var t = b.get(a.id);
                        t ? (k.mixin(a.__accessor__.store._values, t.__accessor__.store._values), t.sublayers && (a.sublayers = t.sublayers.map(function(a) { return l(a, b) }))) : a.sublayers &&
                            a.sublayers.forEach(function(a) { return l(a, b) });
                        return a
                    }
                    return function(a) {
                        function d() {
                            var b = a.call(this) || this;
                            b.allSublayers = new f({ root: b, rootCollectionNames: ["sublayers"], getChildrenFunction: function(a) { return a.sublayers } });
                            b.dpi = 96;
                            b.gdbVersion = null;
                            b.imageFormat = "png24";
                            b.imageMaxHeight = 2048;
                            b.imageMaxWidth = 2048;
                            b.imageTransparency = !0;
                            b.loaded = !1;
                            b.sublayers = null;
                            b.watch("sublayers", function(a, d) {
                                d && (d.forEach(function(a) {
                                        a.parent = null;
                                        a.layer = null
                                    }), b._sublayersHandles.forEach(function(a) { return a.remove() }),
                                    b._sublayersHandles = null);
                                a && (a.forEach(function(a) {
                                    a.parent = b;
                                    a.layer = b
                                }), b._sublayersHandles = [a.on("after-add", function(a) {
                                    a = a.item;
                                    a.parent = b;
                                    a.layer = b
                                }), a.on("after-remove", function(a) {
                                    a = a.item;
                                    a.parent = null;
                                    a.layer = null
                                })])
                            }, !0);
                            return b
                        }
                        p(d, a);
                        d.prototype.readCapabilities = function(a, b) {
                            a = (a = a && a.split(",").map(function(a) { return a.trim() })) || [];
                            b.supportsDynamicLayers && a.push("DynamicLayers");
                            b.tileInfo && !b.supportsDynamicLayers || a.push("supportsSublayerVisibility", "supportsSublayerDefinitionExpression");
                            return a
                        };
                        d.prototype.readImageFormat = function(a, b) { return (a = b.supportedImageFormatTypes) && -1 < a.indexOf("PNG32") ? "png32" : "png24" };
                        d.prototype.readServiceSublayers = function(a, b, d) { return y(b.layers, d) };
                        d.prototype.readSublayersFromItemOrWebMap = function(a, b, d) { return !b.layers && b.visibleLayers ? b.visibleLayers.map(function(a) { return { id: a } }) : y(b.layers, d, b.visibleLayers) };
                        d.prototype.readSublayers = function(a, b, d) {
                            a = y(b.layers, d);
                            this._updateSublayersForOrigin(h.OriginId.PORTAL_ITEM, a);
                            this._updateSublayersForOrigin(h.OriginId.WEB_MAP,
                                a);
                            this._updateSublayersForOrigin(h.OriginId.WEB_SCENE, a);
                            return a
                        };
                        d.prototype.writeSublayers = function(a, b, d, e) {
                            a = a.flatten(function(a) { return (a = a.sublayers) && a.toArray().reverse() }).toArray().reverse();
                            var n = this.serviceSublayers.flatten(function(a) { return (a = a.sublayers) && a.toArray().reverse() }).toArray().reduce(function(a, z) { a.set(z.id, z); return a }, new Map),
                                f = !1,
                                c = !0;
                            this.capabilities && -1 !== this.capabilities.indexOf("DynamicLayers") ? (f = x.isExportDynamic(a, this.serviceSublayers, this), c = !f && x.sameStructureAsService(a,
                                this.serviceSublayers)) : c = x.sameStructureAsService(a, this.serviceSublayers);
                            b.layers = [];
                            a.forEach(function(a) {
                                var z = n.get(a.id),
                                    z = k.mixin({ writeAsDynamic: f, writeOverridesOnly: c, serviceSublayer: z }, e);
                                a = a.write({}, z);
                                (!c || c && 1 < Object.keys(a).length) && b.layers.push(a)
                            });
                            b.visibleLayers = a.filter(function(a) { return a.visible }).map(function(a) { return a.id })
                        };
                        d.prototype.findSublayerById = function(a) { return this.allSublayers.find(function(b) { return b.id === a }) };
                        d.prototype.createServiceSublayers = function() { return this.serviceSublayers.map(function(a) { return a.clone() }) };
                        d.prototype.createExportImageParameters = function(a, b, d, e) {
                            a && 10 <= this.version && (a = a.clone().shiftCentralMeridian());
                            var f = new q({ layer: this, scale: v.getScale({ extent: a, width: b }) }),
                                n = f.toJSON();
                            f.layer = null;
                            f.destroy();
                            var f = !e || !e.rotation || 10.3 > this.version ? {} : { rotation: -e.rotation },
                                c = a && a.spatialReference,
                                c = c.wkid || JSON.stringify(c.toJSON());
                            e && null != e.pixelRatio && (n.dpi *= e.pixelRatio);
                            return k.mixin({ bbox: a && a.xmin + "," + a.ymin + "," + a.xmax + "," + a.ymax, bboxSR: c, imageSR: c, size: b + "," + d }, n, f)
                        };
                        d.prototype._updateSublayersForOrigin =
                            function(a, b) {
                                var d = this.__accessor__.store;
                                if (d.has("sublayers", a)) {
                                    var e = d.get("sublayers", a).flatten(function(a) { return a.sublayers });
                                    if (e.every(function(a) { return !a.__accessor__.store._values.hasOwnProperty("minScale") })) {
                                        var f = e.reduce(function(a, b) { a.set(b.id, b); return a }, new Map);
                                        b = b.map(function(a) { return l(a.clone(), f) });
                                        d.set("sublayers", new(g.ofType(r))(b), a)
                                    }
                                }
                            };
                        b([e.property({ readOnly: !0 })], d.prototype, "allSublayers", void 0);
                        b([e.property({ readOnly: !0 })], d.prototype, "capabilities", void 0);
                        b([e.reader("service", "capabilities", ["capabilities", "supportsDynamicLayers", "tileInfo"])], d.prototype, "readCapabilities", null);
                        b([e.property()], d.prototype, "dpi", void 0);
                        b([e.property()], d.prototype, "gdbVersion", void 0);
                        b([e.property()], d.prototype, "imageFormat", void 0);
                        b([e.reader("imageFormat", ["supportedImageFormatTypes"])], d.prototype, "readImageFormat", null);
                        b([e.property({ json: { origins: { service: { read: { source: "maxImageHeight" } } } } })], d.prototype, "imageMaxHeight", void 0);
                        b([e.property({ json: { origins: { service: { read: { source: "maxImageWidth" } } } } })],
                            d.prototype, "imageMaxWidth", void 0);
                        b([e.property()], d.prototype, "imageTransparency", void 0);
                        b([e.property()], d.prototype, "loaded", void 0);
                        b([e.property({ readOnly: !0, type: g.ofType(r) })], d.prototype, "serviceSublayers", void 0);
                        b([e.reader("service", "serviceSublayers", ["layers"])], d.prototype, "readServiceSublayers", null);
                        b([e.property({ type: g.ofType(r) })], d.prototype, "sublayers", void 0);
                        b([e.reader(["web-map", "web-scene", "portal-item"], "sublayers", ["layers", "visibleLayers"])], d.prototype, "readSublayersFromItemOrWebMap",
                            null);
                        b([e.reader("service", "sublayers", ["layers"])], d.prototype, "readSublayers", null);
                        b([e.writer(["web-map", "web-scene", "portal-item"], "sublayers")], d.prototype, "writeSublayers", null);
                        return d = b([e.subclass("mapgis.layers.mixins.ArcGISDynamicMapService")], d)
                    }(e.declared(d, a))
                })
        },
        "mapgis/layers/support/ExportImageParameters": function() {
            define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper dojo/_base/lang ../../core/Accessor ../../core/accessorSupport/decorators ./sublayerUtils".split(" "),
                function(w, u, p, b, k, g, f, e) {
                    var h = { visible: "visibleSublayers", definitionExpression: "layerDefs", labelsVisible: "hasDynamicLayers", labelingInfo: "hasDynamicLayers", opacity: "hasDynamicLayers", renderer: "hasDynamicLayers", source: "hasDynamicLayers" };
                    return function(g) {
                        function d() {
                            var a = null !== g && g.apply(this, arguments) || this;
                            a.scale = 0;
                            return a
                        }
                        p(d, g);
                        Object.defineProperty(d.prototype, "dynamicLayers", {
                            get: function() {
                                if (!this.hasDynamicLayers) return null;
                                var a = this.visibleSublayers.map(function(a) { return a.toExportImageJSON() });
                                return a.length ? JSON.stringify(a) : null
                            },
                            enumerable: !0,
                            configurable: !0
                        });
                        Object.defineProperty(d.prototype, "hasDynamicLayers", { get: function() { return e.isExportDynamic(this.visibleSublayers, this.layer.serviceSublayers, this.layer) }, enumerable: !0, configurable: !0 });
                        Object.defineProperty(d.prototype, "layer", {
                            set: function(a) {
                                var b = this;
                                this._get("layer") !== a && (this._set("layer", a), this._layerHandles && (this._layerHandles.forEach(function(a) { return a.remove() }), this._layerHandles.length = 0), a && (this._layerHandles = [a.allSublayers.on("change", function() { return b.notifyChange("visibleSublayers") }), a.on("sublayer-update", function(a) { return b.notifyChange(h[a.propertyName]) })]))
                            },
                            enumerable: !0,
                            configurable: !0
                        });
                        Object.defineProperty(d.prototype, "layers", { get: function() { var a = this.visibleSublayers; return a ? a.length ? "show:" + a.map(function(a) { return a.id }).join(",") : "show:-1" : null }, enumerable: !0, configurable: !0 });
                        Object.defineProperty(d.prototype, "layerDefs", {
                            get: function() {
                                var a = this.visibleSublayers.filter(function(a) {
                                    return null !=
                                        a.definitionExpression
                                });
                                return a.length ? JSON.stringify(a.reduce(function(a, b) { a[b.id] = b.definitionExpression; return a }, {})) : null
                            },
                            enumerable: !0,
                            configurable: !0
                        });
                        Object.defineProperty(d.prototype, "version", { get: function() { return (this._get("version") || 0) + 1 }, set: function(a) { this._set("version", a) }, enumerable: !0, configurable: !0 });
                        Object.defineProperty(d.prototype, "visibleSublayers", {
                            get: function() {
                                var a = this,
                                    b = this.layer.sublayers,
                                    d = [],
                                    e = function(b) {
                                        var f = a.scale,
                                            h = 0 === b.minScale || f <= b.minScale,
                                            g = 0 ===
                                            b.maxScale || f >= b.maxScale;
                                        b.visible && (0 === f || h && g) && (b.sublayers ? b.sublayers.forEach(e) : d.unshift(b))
                                    };
                                b && b.forEach(e);
                                return d
                            },
                            enumerable: !0,
                            configurable: !0
                        });
                        d.prototype.toJSON = function() {
                            var a = this.layer,
                                a = { dpi: a.dpi, format: a.imageFormat, transparent: a.imageTransparency, gdbVersion: a.gdbVersion || null };
                            this.hasDynamicLayers && this.dynamicLayers ? a.dynamicLayers = this.dynamicLayers : k.mixin(a, { layers: this.layers, layerDefs: this.layerDefs });
                            return a
                        };
                        b([f.property({
                            readOnly: !0,
                            dependsOn: ["hasDynamicLayers",
                                "visibleSublayers"
                            ]
                        })], d.prototype, "dynamicLayers", null);
                        b([f.property({ readOnly: !0, dependsOn: ["visibleSublayers", "layer.serviceSublayers", "layer.capabilities"] })], d.prototype, "hasDynamicLayers", null);
                        b([f.property()], d.prototype, "layer", null);
                        b([f.property({ readOnly: !0, dependsOn: ["visibleSublayers"] })], d.prototype, "layers", null);
                        b([f.property({ readOnly: !0, dependsOn: ["visibleSublayers"] })], d.prototype, "layerDefs", null);
                        b([f.property({ type: Number })], d.prototype, "scale", void 0);
                        b([f.property({ dependsOn: "layers layerDefs dynamicLayers layer.dpi layer.imageFormat layer.imageTransparency layer.gdbVersion".split(" ") })],
                            d.prototype, "version", null);
                        b([f.property({ readOnly: !0, dependsOn: ["layer.sublayers", "scale"] })], d.prototype, "visibleSublayers", null);
                        return d = b([f.subclass("mapgis.layers.mixins.ExportImageParameters")], d)
                    }(f.declared(g))
                })
        },
        "mapgis/layers/support/sublayerUtils": function() {
            define(["require", "exports", "./layerSourceUtils"], function(w, u, p) {
                function b(b, g) {
                    function f(a) {
                        var b = a.sublayers;
                        e.unshift(a.id);
                        b && b.forEach(f)
                    }
                    if (!b || !b.length) return !0;
                    var e = [];
                    g.forEach(f);
                    if (b.length > e.length) return !1;
                    g = 0;
                    for (var h =
                            e.length, k = 0; k < b.length; k++) { for (var d = b[k].id; g < h && e[g] !== d;) g++; if (g >= h) return !1 }
                    return !0
                }
                Object.defineProperty(u, "__esModule", { value: !0 });
                u.isExportDynamic = function(k, g, f) { return k.some(function(b) { var e = b.source; return !(!e || e.type === p.MAPLAYER && e.mapLayerId === b.id && (!e.gdbVersion || e.gdbVersion === f.gdbVersion)) || null != b.renderer || null != b.labelingInfo || b.hasOwnProperty("opacity") && null != b.opacity || b.hasOwnProperty("labelsVisible") && null != b.labelsVisible }) ? !0 : !b(k, g) };
                u.sameStructureAsService = function(b,
                    g) { return g.flatten(function(b) { return (b = b.sublayers) && b.toArray().reverse() }).toArray().reverse().every(function(f, e) { return (e = b[e]) && f.id === e.id && (null == f.sublayers && null == e.sublayers || null != f.sublayers && null != e.sublayers && f.sublayers.map(function(b) { return b.id }).join(",") === e.sublayers.map(function(b) { return b.id }).join(",")) }) }
            })
        },
        "*noref": 1
    }
});
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/paramHelper dojo/io-query dojo/_base/lang ../config ../request ../core/Error ../core/promiseUtils ../core/accessorSupport/decorators ../geometry/Extent ./DynamicLayer ./mixins/ArcGISDynamicMapService ./mixins/OperationalLayer ./mixins/PortalLayer ./mixins/RefreshableLayer ./mixins/ScaleRangeLayer".split(" "), function(w, u, p, b, k, g, f, e, h, v, d, a, q, r, x, y, l, A, B) {
    return function(l) {
        function m(a,
            b) {
            a = l.call(this) || this;
            a.alwaysRefetch = !1;
            a.legendEnabled = !0;
            a.operationalLayerType = "ArcGISMapServiceLayer";
            a.type = "map-image";
            return a
        }
        p(m, l);
        m.prototype.normalizeCtorArgs = function(a, b) { return "string" === typeof a ? f.mixin({ url: a }, b) : a };
        m.prototype.load = function() {
            var a = this;
            // this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Map Service"] }).then(function() { return a._fetchService() }));
            //modify by czl 添加skipmetadata判断 跳过元属性请求
            this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Map Service"] }).then(function() { return a.skipMetaData ? d.resolve() : a._fetchService() }));
            return this.when()
        };
        m.prototype.getImageUrl = function(a, b, k, l) {
            var c = this,
                //n = this.parsedUrl.path + "/export";
                //modify by czl 添加出图方法名设置
                n = this.parsedUrl.path + (this.exportMethod || "/export");
            // a = f.mixin({}, this.parsedUrl.query, this.createExportImageParameters(a, b, k, l), { f: "image", token: this.token, _ts: this.alwaysRefetch ? (new Date).getTime() : null });

            //modify by czl 添加自定义参数
            a = f.mixin({}, this.parsedUrl.query, this.createExportImageParameters(a, b, k, l), { f: "image", token: this.token, client: this.client, _ts: this.alwaysRefetch ? (new Date).getTime() : null }, this.query);

            if (null != a.dynamicLayers && -1 === this.capabilities.indexOf("DynamicLayers")) return d.reject(new v("mapimagelayer:dynamiclayer-not-supported", "service " + this.url + " doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.", { query: a }));
            b = n + "?" + g.objectToQuery(a);
            return b.length > e.request.maxUrlLength ?
                (a.f = "json", h(n, { query: a, responseType: "json", callbackParamName: "callback" }).then(function(a) {
                    if ("imageData" in a.data) return a = a.data, "data:" + (a.contentType || "image") + ";base64," + a.imageData;
                    a = a.data.href;
                    return c.token ? a + (-1 === a.indexOf("?") ? "?token\x3d" + c.token : "\x26token\x3d" + c.token) : a
                })) : b
        };
        m.prototype._fetchService = function() {
            var a = this;
            return d.resolve().then(function() {
                return a.resourceInfo ? { ssl: !1, data: a.resourceInfo } : h(a.parsedUrl.path, {
                    query: f.mixin({ f: "json" }, a.parsedUrl.query),
                    responseType: "json",
                    callbackParamName: "callback"
                })
            }).then(function(b) {
                b.ssl && (a.url = a.url.replace(/^http:/i, "https:"));
                a.read(b.data, { origin: "service", url: a.parsedUrl })
            })
        };
        b([a.property()], m.prototype, "alwaysRefetch", void 0);
        b([a.property({ type: Boolean, json: { origins: { service: { read: { enabled: !1 } } }, read: { source: "showLegend" }, write: { target: "showLegend" } } })], m.prototype, "legendEnabled", void 0);
        b([a.property()], m.prototype, "operationalLayerType", void 0);
        b([a.property({ json: { read: !1 }, readOnly: !0, value: "map-image" })], m.prototype,
            "type", void 0);
        b([k(0, a.cast(q))], m.prototype, "getImageUrl", null);
        return m = b([a.subclass("mapgis.layers.MapImageLayer")], m)
    }(a.declared(r, x, y, l, A, B))
});