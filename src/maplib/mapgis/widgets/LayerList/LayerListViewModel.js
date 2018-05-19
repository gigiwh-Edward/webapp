// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
require({
    cache: {
        "dojo/debounce": function() {
            define([], function() {
                return function(q, g) {
                    var m;
                    return function() {
                        m && clearTimeout(m);
                        var a = this,
                            n = arguments;
                        m = setTimeout(function() { q.apply(a, n) }, g)
                    }
                }
            })
        },
        "mapgis/widgets/LayerList/ListItem": function() {
            define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Accessor ../../core/Collection ../../core/Handles ../../core/Identifiable ../../core/watchUtils ../../core/accessorSupport/decorators ../../layers/support/Sublayer ../../support/Action ./ListItemPanel ./support/layerListUtils".split(" "),
                function(q, g, m, a, n, f, p, r, l, h, k, d, u, e) {
                    var v = f.ofType(f.ofType(d));
                    return function(d) {
                        function b(b) {
                            b = d.call(this) || this;
                            b._handles = new p;
                            b.actionsSections = new v;
                            b.actionsOpen = !1;
                            b.children = new(f.ofType(t));
                            b.error = null;
                            b.layer = null;
                            b.open = !1;
                            b.panel = null;
                            b.parent = null;
                            b.view = null;
                            b.visible = null;
                            return b
                        }
                        m(b, d);
                        t = b;
                        b.prototype.initialize = function() {
                            var b = this;
                            this._handles.add([l.init(this, "layer", function(a) { return b._watchLayerProperties(a) }), l.init(this, "view", function(a) { return b._updateChildren(a) }),
                                l.init(this, "panel", function(a) { return b._setListItemOnPanel(a) })
                            ])
                        };
                        b.prototype.destroy = function() {
                            this._handles.destroy();
                            this.view = this._handles = null
                        };
                        Object.defineProperty(b.prototype, "layerView", { get: function() { return this._findLayerView(this.layer) || null }, enumerable: !0, configurable: !0 });
                        b.prototype.castPanel = function(b) { this.get("panel.open") && !b.hasOwnProperty("open") && (b.open = !0); return b ? new u(b) : null };
                        Object.defineProperty(b.prototype, "title", {
                            get: function() {
                                var b = this.get("layer.layer");
                                return (!b || b && this.get("layer.layer.loaded")) && this.get("layer.title") || ""
                            },
                            set: function(b) { void 0 === b ? this._clearOverride("title") : this._override("title", b) },
                            enumerable: !0,
                            configurable: !0
                        });
                        Object.defineProperty(b.prototype, "updating", { get: function() { var b = this.layerView; return b ? b.updating : this._isLayerUpdating(this.layer) }, enumerable: !0, configurable: !0 });
                        Object.defineProperty(b.prototype, "visibleAtCurrentScale", {
                            get: function() { return !e.isLayerOutsideScaleRange(this.layer, this.get("view.scale")) },
                            enumerable: !0,
                            configurable: !0
                        });
                        Object.defineProperty(b.prototype, "visibilityMode", { get: function() { return e.findLayerVisibilityMode(this.layer) || "independent" }, enumerable: !0, configurable: !0 });
                        b.prototype.clone = function() { return new t({ actionsSections: this.actionsSections.clone(), actionsOpen: this.actionsOpen, children: this.children.clone(), layer: this.layer, open: this.open, panel: this.panel, title: this.title, view: this.view, visible: this.visible }) };
                        b.prototype._setListItemOnPanel = function(b) {
                            b && (b.listItem =
                                this)
                        };
                        b.prototype._updateChildren = function(b) {
                            var a = this.children;
                            a && a.forEach(function(a) { return a.view = b })
                        };
                        b.prototype._addChildren = function(b) {
                            var a = this;
                            this.children.removeAll();
                            if (b) {
                                var f = [];
                                b.forEach(function(b) { e.canDisplayLayer(b) && (b = new t({ layer: b, parent: a, view: a.view }), f.unshift(b)) });
                                this.children.addMany(f)
                            }
                        };
                        b.prototype._watchSublayerChanges = function(b) {
                            var a = this;
                            b && this._handles.add(b.on("change", function() { a._addChildren(b) }), "layer")
                        };
                        b.prototype._initializeChildLayers = function(b) {
                            this._addChildren(b);
                            this._watchSublayerChanges(b)
                        };
                        b.prototype._watchLayerProperties = function(b) {
                            var a = this;
                            if (this._handles && (this._handles.remove("layer"), b)) {
                                var f = e.getNormalizedChildLayerProperty(b);
                                f && this._handles.add(l.init(b, f, function() { b.hasOwnProperty(f) && a._initializeChildLayers(b[f]) }), "layer")
                            }
                        };
                        b.prototype._findLayerView = function(b) { if (b) { var a = this.get("view.allLayerViews"); if (a) return a.find(function(a) { return a.layer === b }) } };
                        b.prototype._isLayerUpdating = function(b) {
                            return b instanceof k ? !1 : "loading" ===
                                b.loadStatus
                        };
                        a([h.property({ type: v })], b.prototype, "actionsSections", void 0);
                        a([h.property()], b.prototype, "actionsOpen", void 0);
                        a([h.property({ type: f })], b.prototype, "children", void 0);
                        a([h.aliasOf("layer.loadError")], b.prototype, "error", void 0);
                        a([h.property()], b.prototype, "layer", void 0);
                        a([h.property({ dependsOn: ["layer", "view"], readOnly: !0 })], b.prototype, "layerView", null);
                        a([h.property()], b.prototype, "open", void 0);
                        a([h.property({ type: u })], b.prototype, "panel", void 0);
                        a([h.cast("panel")], b.prototype,
                            "castPanel", null);
                        a([h.property()], b.prototype, "parent", void 0);
                        a([h.property({ dependsOn: ["layer.layer.loaded", "layer.title"] })], b.prototype, "title", null);
                        a([h.property({ dependsOn: ["layer.loadStatus", "layerView.updating"], readOnly: !0 })], b.prototype, "updating", null);
                        a([h.property({ value: null })], b.prototype, "view", void 0);
                        a([h.aliasOf("layer.visible")], b.prototype, "visible", void 0);
                        a([h.property({ dependsOn: ["layer.minScale", "layer.maxScale", "view.scale"], readOnly: !0 })], b.prototype, "visibleAtCurrentScale",
                            null);
                        a([h.property({ dependsOn: ["layer.visibilityMode"], readOnly: !0 })], b.prototype, "visibilityMode", null);
                        return b = t = a([h.subclass("mapgis.widgets.LayerList.ListItem")], b);
                        var t
                    }(h.declared(n, r))
                })
        },
        "mapgis/widgets/LayerList/ListItemPanel": function() {
            define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Handles ../../core/Identifiable ../../core/requireUtils ../../core/watchUtils ../../core/accessorSupport/decorators ../../widgets/Widget ../support/widget".split(" "), function(q, g, m, a, n, f, p, r, l, h, k) {
                return function(f) {
                    function d(a) {
                        a = f.call(this) ||
                            this;
                        a._legend = null;
                        a._handles = new n;
                        a.content = null;
                        a.image = null;
                        a.listItem = null;
                        a.open = !1;
                        a.visible = !0;
                        return a
                    }
                    m(d, f);
                    d.prototype.postInitialize = function() {
                        var a = this;
                        this.own([r.init(this, "content", function(e) { return a._createLegend(e) })])
                    };
                    d.prototype.destroy = function() {
                        var a = this._legend;
                        a && a.destroy();
                        this._legend = null
                    };
                    Object.defineProperty(d.prototype, "className", {
                        get: function() {
                            var a = this.image,
                                d = this._getFirstWidget();
                            return this._get("className") || !a && d ? d.iconClass : ""
                        },
                        set: function(a) {
                            void 0 ===
                                a ? this._clearOverride("className") : this._override("className", a)
                        },
                        enumerable: !0,
                        configurable: !0
                    });
                    Object.defineProperty(d.prototype, "title", { get: function() { var a = this._getFirstWidget(); return this._get("title") || a ? a.label : "" }, set: function(a) { void 0 === a ? this._clearOverride("title") : this._override("title", a) }, enumerable: !0, configurable: !0 });
                    d.prototype.render = function() { return k.tsx("div", { class: "mapgis-layer-list-panel" }, this._renderContents()) };
                    d.prototype._renderContent = function(a, d) {
                        d = this._legend;
                        var e = this.listItem;
                        return a ? "legend" === a && e && e.view && e.layer ? k.tsx("div", { class: k.join("mapgis-layer-list-panel__content", "mapgis-layer-list-panel__content--legend"), key: a }, d && d.render()) : "string" === typeof a ? k.tsx("div", { class: k.join("mapgis-layer-list-panel__content", "mapgis-layer-list-panel__content--string"), key: a, innerHTML: a }) : k.isWidget(a) ? k.tsx("div", { class: k.join("mapgis-layer-list-panel__content", "mapgis-layer-list-panel__content--widget"), key: a }, a.render()) : a instanceof HTMLElement ? k.tsx("div", {
                            class: k.join("mapgis-layer-list-panel__content",
                                "mapgis-layer-list-panel__content--html-element"),
                            key: a,
                            bind: a,
                            afterCreate: this._attachToNode
                        }) : null : null
                    };
                    d.prototype._renderContents = function() {
                        var a = this,
                            d = this.content;
                        return Array.isArray(d) ? d.map(function(e, b) { return a._renderContent(e, b) }) : this._renderContent(d, 0)
                    };
                    d.prototype._getLegendOptions = function(a) {
                        if (a) {
                            var d = a.layer;
                            a = a.view;
                            if (d && a) return { view: a, layerInfos: [{ layer: d, title: "" }] }
                        }
                    };
                    d.prototype._createLegend = function(a) {
                        var d = this;
                        this._hasLegend(a) && !this._legend && p.when(q, "../Legend").then(function(a) {
                            var b =
                                d._handles,
                                e = new a(d._getLegendOptions(d.listItem));
                            d._legend = e;
                            d.notifyChange("className");
                            d.notifyChange("title");
                            a = r.init(d, ["listItem.view", "listItem.layer"], function() { return d._updateLegend(e) });
                            b.add(a, "legends");
                            d.scheduleRender()
                        })
                    };
                    d.prototype._hasLegend = function(a) { return "legend" === a ? !0 : Array.isArray(a) ? a.some(function(a) { return "legend" === a }) : !1 };
                    d.prototype._attachToNode = function(a) { a.appendChild(this) };
                    d.prototype._updateLegend = function(a) {
                        var d = this.listItem;
                        if (d) {
                            var e = d.layer;
                            a.view =
                                d.view;
                            a.layerInfos = [{ layer: e, title: null }]
                        }
                    };
                    d.prototype._getWidget = function(a) { return "legend" === a ? this._legend : k.isWidget(a) ? a : null };
                    d.prototype._getFirstWidget = function() {
                        var a = this,
                            d = this.content;
                        if (Array.isArray(d)) {
                            var f = null;
                            d.some(function(b) {
                                (b = a._getWidget(b)) && (f = b);
                                return !!b
                            });
                            return f
                        }
                        return this._getWidget(d)
                    };
                    a([l.property({ dependsOn: ["content", "image"] })], d.prototype, "className", null);
                    a([l.property(), k.renderable()], d.prototype, "content", void 0);
                    a([l.property()], d.prototype, "image",
                        void 0);
                    a([l.property()], d.prototype, "listItem", void 0);
                    a([l.property({ dependsOn: ["content"] })], d.prototype, "title", null);
                    a([l.property(), k.renderable()], d.prototype, "open", void 0);
                    a([l.property()], d.prototype, "visible", void 0);
                    return d = a([l.subclass("mapgis.widgets.LayerList.ListItemPanel")], d)
                }(l.declared(h, f))
            })
        },
        "mapgis/core/requireUtils": function() {
            define(["require", "exports", "dojo/Deferred"], function(q, g, m) {
                function a(g, f) {
                    if (Array.isArray(f)) {
                        var p = new m;
                        g(f, function() {
                            for (var a = [], f = 0; f < arguments.length; f++) a[f] =
                                arguments[f];
                            p.resolve(a)
                        });
                        return p.promise
                    }
                    return a(g, [f]).then(function(a) { return a[0] })
                }
                Object.defineProperty(g, "__esModule", { value: !0 });
                g.when = a;
                g.getAbsMid = function(a, f, g) { return f.toAbsMid ? f.toAbsMid(a) : g.id.replace(/\/[^\/]*$/ig, "/") + a }
            })
        },
        "mapgis/widgets/LayerList/support/layerListUtils": function() {
            define(["require", "exports"], function(q, g) {
                function m(a) { if (a) return a.hasOwnProperty("listMode") ? a.listMode : void 0 }

                function a(a) { if (a) return a.hasOwnProperty("minScale") ? a.minScale : void 0 }

                function n(a) {
                    if (a) return a.hasOwnProperty("maxScale") ?
                        a.maxScale : void 0
                }
                Object.defineProperty(g, "__esModule", { value: !0 });
                g.findLayerListMode = m;
                g.findLayerMinScale = a;
                g.findLayerMaxScale = n;
                g.findLayerVisibilityMode = function(a) { if (a) { var f = a.get("layer.capabilities"); return f && -1 === f.indexOf("supportsSublayerVisibility") ? "inherited" : a.hasOwnProperty("visibilityMode") ? a.visibilityMode : void 0 } };
                g.getNormalizedChildLayerProperty = function(a) { if (a && "hide-children" !== a.listMode && "wmts" !== a.type) return "group" === a.type ? "layers" : "sublayers" };
                g.canDisplayLayer = function(a) {
                    return "hide" !==
                        m(a)
                };
                g.isLayerOutsideScaleRange = function(f, g) {
                    if (!f || isNaN(g)) return !1;
                    var m = a(f);
                    f = n(f);
                    m = !isNaN(m) && 0 < m && g >= m;
                    g = !isNaN(f) && 0 < f && g <= f;
                    return m || g
                }
            })
        },
        "*noref": 1
    }
});
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper dojo/debounce ../../core/Accessor ../../core/Collection ../../core/Evented ../../core/Handles ../../core/watchUtils ../../core/accessorSupport/decorators ./ListItem ./support/layerListUtils".split(" "), function(q, g, m, a, n, f, p, r, l, h, k, d, u) {
    var e = p.ofType(d);
    return function(f) {
        function g(b) {
            var a = f.call(this) || this;
            a._handles = new l;
            a.listItemCreatedFunction = null;
            a.operationalItems = new e;
            a.view = null;
            a._handles.add(h.init(a, "view", function() { return a._viewHandles() }), "view");
            a._compileList = n(a._compileList, 0);
            return a
        }
        m(g, f);
        g.prototype.destroy = function() {
            this._handles.destroy();
            this.view = this._handles = null;
            this.operationalItems.removeAll()
        };
        Object.defineProperty(g.prototype, "state", { get: function() { var b = this.get("view"); return this.get("view.ready") ? "ready" : b ? "loading" : "disabled" }, enumerable: !0, configurable: !0 });
        g.prototype.triggerAction = function(b, a) {
            b && this.emit("trigger-action", {
                action: b,
                item: a
            })
        };
        g.prototype._createMapHandles = function(b) {
            var a = this,
                d = this._handles;
            d.remove("map");
            var e = b && b.get("map.layers");
            e && (e = e.on("change", function() { return a._compileList(b) }), d.add(e, "map"))
        };
        g.prototype._resetMapItems = function(b) {
            this._createMapHandles(b);
            this._compileList(b)
        };
        g.prototype._watchItemProperties = function(b) {
            var a = this;
            this._handles.add([b.children.on("change", function() { a._modifyListItemChildren(b.children) })], "children-change-" + b.uid)
        };
        g.prototype._modifyListItemChildren = function(b) {
            var a =
                this;
            b.forEach(function(b) { return a._modifyListItem(b) })
        };
        g.prototype._modifyListItem = function(b) {
            "function" === typeof this.listItemCreatedFunction && this.listItemCreatedFunction.call(null, { item: b });
            this._modifyListItemChildren(b.children)
        };
        g.prototype._createListItem = function(b) {
            b = new d({ layer: b, view: this.view });
            this._watchItemProperties(b);
            return b
        };
        g.prototype._removeAllItems = function() {
            var b = this._handles,
                a = this.operationalItems;
            a.forEach(function(a) { b.remove("children-change-" + a.uid) });
            a.removeAll()
        };
        g.prototype._compileList = function(b) {
            var a = this;
            if (!this.destroyed) {
                var d = this._handles,
                    e = this.operationalItems,
                    f = b && b.get("map.layers");
                if (f) {
                    var g = f.filter(function(b) { return "hide" !== u.findLayerListMode(b) });
                    d.remove("layer-list-mode");
                    f.forEach(function(e) { d.add(h.watch(e, "listMode", function() { return a._compileList(b) }), "layer-list-mode") });
                    this._createNewItems(e, g);
                    this._modifyItems(e, g);
                    this._sortItems(e, g)
                } else this._removeAllItems()
            }
        };
        g.prototype._createNewItems = function(b, a) {
            var d = this;
            a.forEach(function(a) {
                b.find(function(b) {
                    return b.layer ===
                        a
                }) || b.add(d._createListItem(a))
            })
        };
        g.prototype._modifyItems = function(b, a) {
            var d = this,
                e = this._handles;
            b.forEach(function(f) { f && (a.find(function(a) { return f.layer === a }) ? d._modifyListItem(f) : (e.remove("children-change-" + f.uid), b.remove(f))) })
        };
        g.prototype._sortItems = function(a, d) {
            a.sort(function(a, b) {
                a = d.indexOf(a.layer);
                b = d.indexOf(b.layer);
                return a > b ? -1 : a < b ? 1 : 0
            })
        };
        g.prototype._viewHandles = function() {
            var a = this,
                d = this._handles,
                e = this.view;
            d.remove("layers");
            d.remove("layer-list-mode");
            this._resetMapItems(e);
            e && e.when(function() { d.add([h.init(e, "map", function() { return a._resetMapItems(e) }), e.layerViews.on("change", function() { return a._compileList(e) }), h.init(a, "listItemCreatedFunction", function() { return a._compileList(e) })], "layers") })
        };
        a([k.property()], g.prototype, "listItemCreatedFunction", void 0);
        a([k.property({ type: e })], g.prototype, "operationalItems", void 0);
        a([k.property({ dependsOn: ["view.ready"], readOnly: !0 })], g.prototype, "state", null);
        a([k.property()], g.prototype, "view", void 0);
        a([k.property()],
            g.prototype, "triggerAction", null);
        return g = a([k.subclass("mapgis.widgets.LayerList.LayerListViewModel")], g)
    }(k.declared(f, r))
});