// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/mapgis/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper dojo/i18n!../nls/common dojo/i18n!./LayerList/nls/LayerList ../core/Handles ../core/watchUtils ../core/accessorSupport/decorators ./Widget ./LayerList/LayerListViewModel ./support/widget".split(" "), function(C, H, D, e, v, u, E, q, g, F, w, d) {
    function x(d) {
        var c = d.children;
        d.actionsOpen && (d.actionsOpen = !1);
        c.forEach(function(a) { return x(a) })
    }
    var G = C.toUrl("./LayerList/images/default-action.svg");
    return function(B) {
        function c() {
            var a =
                B.call(this) || this;
            a._handles = new E;
            a.iconClass = "mapgis-icon-layers";
            a.statusIndicatorsVisible = !0;
            a.label = u.widgetLabel;
            a.listItemCreatedFunction = null;
            a.operationalItems = null;
            a.view = null;
            a.viewModel = new w;
            return a
        }
        D(c, B);
        c.prototype.postInitialize = function() {
            var a = this,
                b = this.operationalItems;
            this.own(q.on(this, "operationalItems", "change", function() { return a._itemsChanged(b) }))
        };
        c.prototype.destroy = function() {
            this._handles.destroy();
            this._handles = null
        };
        c.prototype.triggerAction = function(a, b) {};
        c.prototype.render =
            function() {
                var a = this,
                    b = this._getItems(),
                    c = this.get("viewModel.state"),
                    b = 0 === b.length ? d.tsx("div", { class: "mapgis-layer-list__no-items" }, u.noItemsToDisplay) : d.tsx("ul", { class: d.join("mapgis-layer-list__list", "mapgis-layer-list__list--root", "mapgis-layer-list__list--independent") }, b.map(function(b, d) { return a._renderItem(b, null) })),
                    c = (h = {}, h["mapgis-hidden"] = "loading" === c, h["mapgis-disabled"] = "disabled" === c, h);
                return d.tsx("div", { class: "mapgis-layer-list mapgis-widget mapgis-widget--panel", classes: c }, b);
                var h
            };
        c.prototype._getItems =
            function() { var a = this; return this.operationalItems.toArray().filter(function(b) { return a.errorsVisible || !b.error }) };
        c.prototype._renderItem = function(a, b) {
            var c = this,
                h = this.id + "_" + a.uid,
                f = h + "_actions",
                e = h + "__list",
                h = h + "__title",
                g = !!a.children.length,
                y = !!a.error,
                q = y ? u.layerError : "",
                n = a.visibilityMode,
                z = a.children && a.children.toArray(),
                w = (p = {}, p["mapgis-layer-list__list--exclusive"] = "exclusive" === n, p["mapgis-layer-list__list--inherited"] = "inherited" === n, p["mapgis-layer-list__list--independent"] = "inherited" !==
                    n && "exclusive" !== n, p),
                p = (m = {}, m["mapgis-layer-list__item--has-children"] = g, m["mapgis-layer-list__item--error"] = !!q, m["mapgis-layer-list__item--updating"] = a.updating && !b && this.statusIndicatorsVisible, m["mapgis-layer-list__item--invisible-at-scale"] = !a.visibleAtCurrentScale, m),
                A = this._countActions(a.actionsSections),
                l = a.panel,
                m = l && l.open ? l.render() : null,
                l = l && l.visible ? this._renderPanelButton(l) : null,
                x = (k = {}, k["mapgis-layer-list__item-actions-menu-item--active"] = a.actionsOpen, k),
                k = a.actionsOpen ? v.close : v.open,
                k = A ? d.tsx("div", { key: "mapgis-layer-list__actions-menu-toggle", "data-item": a, bind: this, onclick: this._toggleActionsOpen, onkeydown: this._toggleActionsOpen, class: "mapgis-layer-list__item-actions-menu-item", classes: x, tabindex: "0", role: "button", "aria-controls": f, "aria-label": k, title: k }, d.tsx("span", { "aria-hidden": "true", class: "mapgis-icon-handle-horizontal" })) : null,
                k = A || l ? d.tsx("div", { key: "mapgis-layer-list__actions-menu", class: "mapgis-layer-list__item-actions-menu" }, l, k) : null,
                f = A ? this._renderActionsSections(a, a.actionsSections,
                    f) : null,
                n = g ? d.tsx("ul", { key: "mapgis-layer-list__list-items", id: e, class: "mapgis-layer-list__list", classes: w, "aria-expanded": a.open ? "true" : "false", role: "exclusive" === n ? "radiogroup" : "group", hidden: a.open ? null : !0 }, z.map(function(b, d) { return c._renderItem(b, a) })) : null,
                z = (t = {}, t["mapgis-layer-list__child-toggle--open"] = a.open, t),
                t = a.open ? v.collapse : v.expand,
                e = g ? d.tsx("span", {
                    onclick: this._toggleChildrenClick,
                    onkeydown: this._toggleChildrenClick,
                    "data-item": a,
                    key: "mapgis-layer-list__toggle-children",
                    class: "mapgis-layer-list__child-toggle",
                    classes: z,
                    tabindex: "0",
                    role: "button",
                    "aria-controls": e,
                    "aria-label": t,
                    title: t
                }, d.tsx("span", { "aria-hidden": "true", class: d.join("mapgis-layer-list__child-toggle-icon--closed", "mapgis-icon-right-triangle-arrow") }), d.tsx("span", { "aria-hidden": "true", class: d.join("mapgis-layer-list__child-toggle-icon--opened", "mapgis-icon-down-arrow") }), d.tsx("span", { "aria-hidden": "true", class: d.join("mapgis-layer-list__child-toggle-icon--closed-rtl", "mapgis-icon-left-triangle-arrow") })) : null;
            b = this._createLabelNode(a, b, h);
            y = y ? d.tsx("div", { key: "mapgis-layer-list__error", class: "mapgis-layer-list__item-error-message", role: "alert" }, d.tsx("span", { "aria-hidden": "true", class: "mapgis-icon-notice-triangle" }), d.tsx("span", null, q)) : null;
            return d.tsx("li", { key: a, class: "mapgis-layer-list__item", classes: p, "aria-labelledby": h }, d.tsx("div", { key: "mapgis-layer-list__list-item-container", class: "mapgis-layer-list__item-container" }, e, b, k), y, f, m, n);
            var p, m, k, t
        };
        c.prototype._createLabelNode = function(a, b, c) {
            b = b && b.visibilityMode;
            var h = (f = {}, f["mapgis-icon-radio-checked"] =
                    "exclusive" === b && a.visible, f["mapgis-icon-radio-unchecked"] = "exclusive" === b && !a.visible, f["mapgis-icon-visible"] = "exclusive" !== b && a.visible, f["mapgis-icon-non-visible"] = "exclusive" !== b && !a.visible, f),
                f = "exclusive" === b ? "radio" : "checkbox",
                r = a.title || u.untitledLayer,
                e = a.visibleAtCurrentScale ? r : r + " (" + u.layerInvisibleAtScale + ")",
                r = d.tsx("span", { id: c, title: e, "aria-label": e, class: "mapgis-layer-list__item-title" }, r),
                //add by czl 
                z = a.layer && a.layer.base64IconData ? d.tsx("img", { class: "mapgis-layer-list__item-legend", src: "data:image/png;base64," + a.layer.base64IconData }) : null;

            return "inherited" === b ? d.tsx("div", { key: a, class: "mapgis-layer-list__item-label" }, r) : d.tsx("div", {
                key: a,
                onclick: this._labelClick,
                onkeydown: this._labelClick,
                "data-item": a,
                "data-parent-visibility": b,
                tabindex: "0",
                "aria-checked": a.visible ? "true" : "false",
                role: f,
                "aria-labelledby": c,
                class: "mapgis-layer-list__item-label"
            }, d.tsx("span", { class: "mapgis-layer-list__item-toggle" }, d.tsx("span", { class: "mapgis-layer-list__item-toggle-icon", "aria-hidden": "true", classes: h })), z, r); //modify by czl (z为图例)
            var f
        };
        c.prototype._renderPanelButton = function(a) {
            var b = a.className,
                c = a.open,
                h = a.title,
                f = this._getIconImageStyles(a),
                c = (e = {}, e["mapgis-layer-list__item-actions-menu-item--active"] =
                    c, e),
                b = (g = {}, g[b] = !!b, g["mapgis-layer-list__item-action-image"] = !!f["background-image"], g);
            return d.tsx("div", { key: a, bind: this, "data-panel": a, onclick: this._triggerPanel, onkeydown: this._triggerPanel, class: "mapgis-layer-list__item-actions-menu-item", classes: c, role: "button", tabindex: "0", title: h, "aria-label": h }, d.tsx("span", { classes: b, styles: f }));
            var e, g
        };
        c.prototype._watchActionSectionChanges = function(a, b) {
            var c = this,
                d = "action-section" + b;
            this._handles.add(a.on("change", this.scheduleRender.bind(this)), d);
            a.forEach(function(a) { return c._renderOnActionChanges(a, b) })
        };
        c.prototype._renderOnActionChanges = function(a, b) {
            var c = this;
            b = "actions" + b;
            this._handles.add([q.init(a, "className, image, id, title, visible", function() { return c.scheduleRender() })], b)
        };
        c.prototype._renderOnItemChanges = function(a) {
            var b = this,
                c = a.uid,
                d = "items" + c;
            this._handles.add([q.init(a, "actionsOpen visible open updating title visibleAtCurrentScale error visibilityMode panel panel.title panel.content panel.className".split(" "), function() { return b.scheduleRender() }),
                a.actionsSections.on("change", function() { return b.scheduleRender() }), a.children.on("change", function() { return b.scheduleRender() })
            ], d);
            a.children.forEach(function(a) { return b._renderOnItemChanges(a) });
            a.actionsSections.forEach(function(a) { return b._watchActionSectionChanges(a, c) })
        };
        c.prototype._itemsChanged = function(a) {
            var b = this;
            this._handles.removeAll();
            a.forEach(function(a) { return b._renderOnItemChanges(a) });
            this.scheduleRender()
        };
        c.prototype._renderActionsSections = function(a, b, c) {
            var e = this;
            b =
                b.toArray().map(function(b) { return d.tsx("ul", { key: b, class: "mapgis-layer-list__item-actions-list" }, e._renderActionSection(a, b)) });
            return d.tsx("div", { role: "group", "aria-expanded": a.actionsOpen ? "true" : "false", key: "mapgis-layer-list__actions-section", id: c, class: "mapgis-layer-list__item-actions", hidden: a.actionsOpen ? null : !0 }, b)
        };
        c.prototype._renderActionSection = function(a, b) { var c = this; return (b && b.toArray()).map(function(b) { return c._renderAction(a, b) }) };
        c.prototype._renderAction = function(a, b) {
            var c = this._getIconImageStyles(b),
                e = (f = {}, f[b.className] = !!b.className, f["mapgis-layer-list__item-action-image"] = !!c["background-image"], f);
            return d.tsx("li", { bind: this, "data-item": a, "data-action": b, key: b, onclick: this._triggerAction, onkeydown: this._triggerAction, class: "mapgis-layer-list__item-action", tabindex: "0", role: "button", title: b.title, "aria-label": b.title }, d.tsx("span", { "aria-hidden": "true", class: "mapgis-layer-list__item-action-icon", classes: e, styles: c }), d.tsx("span", { class: "mapgis-layer-list__item-action-title" }, b.title));
            var f
        };
        c.prototype._countActions =
            function(a) { return a.reduce(function(a, c) { return a + c.length }, 0) };
        c.prototype._getIconImageStyles = function(a) {
            var b = a.image || null;
            a.className || b || (b = G);
            return { "background-image": b ? 'url("' + b + '")' : null }
        };
        c.prototype._toggleActionsOpen = function(a) {
            a = a.currentTarget["data-item"];
            var b = !a.actionsOpen;
            b && this.operationalItems.forEach(function(a) { return x(a) });
            a.actionsOpen = b
        };
        c.prototype._triggerPanel = function(a) { if (a = a.currentTarget["data-panel"]) a.open = !a.open };
        c.prototype._triggerAction = function(a) {
            a =
                a.currentTarget;
            this.triggerAction(a["data-action"], a["data-item"])
        };
        c.prototype._labelClick = function(a) {
            var b = a.currentTarget;
            a = b.getAttribute("data-parent-visibility");
            b = b["data-item"];
            "exclusive" === a && b.visible || (b.visible = !b.visible)
        };
        c.prototype._toggleChildrenClick = function(a) {
            a = a.currentTarget["data-item"];
            a.open = !a.open
        };
        e([g.property()], c.prototype, "iconClass", void 0);
        e([g.property(), d.renderable()], c.prototype, "statusIndicatorsVisible", void 0);
        e([g.property(), d.renderable()], c.prototype,
            "errorsVisible", void 0);
        e([g.property()], c.prototype, "label", void 0);
        e([g.aliasOf("viewModel.listItemCreatedFunction"), d.renderable()], c.prototype, "listItemCreatedFunction", void 0);
        e([g.aliasOf("viewModel.operationalItems"), d.renderable()], c.prototype, "operationalItems", void 0);
        e([g.aliasOf("viewModel.view"), d.renderable()], c.prototype, "view", void 0);
        e([d.vmEvent("trigger-action"), g.property({ type: w }), d.renderable("viewModel.state")], c.prototype, "viewModel", void 0);
        e([g.aliasOf("viewModel.triggerAction")],
            c.prototype, "triggerAction", null);
        e([d.accessibleHandler()], c.prototype, "_toggleActionsOpen", null);
        e([d.accessibleHandler()], c.prototype, "_triggerPanel", null);
        e([d.accessibleHandler()], c.prototype, "_triggerAction", null);
        e([d.accessibleHandler()], c.prototype, "_labelClick", null);
        e([d.accessibleHandler()], c.prototype, "_toggleChildrenClick", null);
        return c = e([g.subclass("mapgis.widgets.LayerList")], c)
    }(g.declared(F))
});