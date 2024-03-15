import { unref as c, defineComponent as we, mergeDefaults as Be, inject as K, ref as L, watchEffect as ye, toRefs as Ce, computed as D, useSlots as Ee, onBeforeMount as We, onMounted as Se, onUnmounted as Ae, watch as ke, openBlock as P, createBlock as Z, mergeProps as be, withCtx as Le, createElementBlock as J, normalizeClass as Q, normalizeStyle as ee, renderSlot as N, createCommentVNode as x, defineAsyncComponent as $e } from "vue";
import { useTheme as Ge, useDisplay as Ie } from "vuetify";
import { VNavigationDrawer as Me } from "vuetify/components";
import { VIcon as ze } from "vuetify/lib/components/VIcon/index.mjs";
/**
 * @name @wdns/vuetify-resize-drawer
 * @version 3.1.6
 * @description The vuetify-resize-drawer component extends the functionality of the v-navigation-drawer so that it is resizable by the user.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2024, WebDevNerdStuff
 * @homepage https://webdevnerdstuff.github.io/vuetify-resize-drawer/
 * @repository https://github.com/webdevnerdstuff/vuetify-resize-drawer
 * @license MIT License
 */
const y = "v-resize-drawer", Pe = { handleBorderWidth: 8, handleColor: "primary", handleIcon: void 0, handleIconSize: "x-small", handlePosition: "center", height: void 0, location: "start", maxWidth: window.innerWidth, minWidth: 56, modelValue: !0, name: void 0, rail: !1, railWidth: 8, resizable: !0, saveWidth: !0, storageName: `${y}-width`, storageType: "local", tag: "nav", theme: void 0, touchless: !1, width: 256, widthSnapBack: !0 };
function q(s, l) {
  return s === "local" ? localStorage.getItem(l) : s === "session" ? sessionStorage.getItem(l) : "";
}
const V = (s) => {
  const { action: l = "update", rail: r, resizedWidth: o, saveWidth: v, storageName: e, storageType: h } = s;
  if (!v || r)
    return;
  let d = o;
  d = d ?? void 0, l === "set" && (d = q(h, e) ?? "", d = d || o), h === "local" && localStorage.setItem(e, String(d)), h === "session" && sessionStorage.setItem(e, String(d));
}, $ = (s) => {
  const { unit: l = "px", value: r } = s;
  if (r != null && r !== "")
    return +r ? `${Number(r)}${l}` : String(r);
}, A = (s) => {
  const l = window.innerWidth, r = function(o) {
    if (typeof o == "string") {
      const v = /(\d+(\.\d+)?)(\s*([a-zA-Z]+))?/, e = o.match(v);
      if (!e)
        return o;
      const h = parseFloat(e[1]), d = e[4];
      if (!isNaN(h)) {
        const m = Math.round(h);
        return d ? `${m} ${d}` : `${m}`;
      }
      return o;
    }
    return typeof o == "number" ? Math.round(o) : o;
  }(s);
  return typeof s == "string" && s.includes("%") ? Number(s.replace("%", "")) / 100 * l : typeof r == "string" ? Number(r.replace(/\D/g, "")) : r;
};
function ae(s) {
  let l = function(f) {
    const F = { AliceBlue: "#F0F8FF", AntiqueWhite: "#FAEBD7", Aqua: "#00FFFF", Aquamarine: "#7FFFD4", Azure: "#F0FFFF", Beige: "#F5F5DC", Bisque: "#FFE4C4", Black: "#000000", BlanchedAlmond: "#FFEBCD", Blue: "#0000FF", BlueViolet: "#8A2BE2", Brown: "#A52A2A", BurlyWood: "#DEB887", CadetBlue: "#5F9EA0", Chartreuse: "#7FFF00", Chocolate: "#D2691E", Coral: "#FF7F50", CornflowerBlue: "#6495ED", Cornsilk: "#FFF8DC", Crimson: "#DC143C", Cyan: "#00FFFF", DarkBlue: "#00008B", DarkCyan: "#008B8B", DarkGoldenRod: "#B8860B", DarkGray: "#A9A9A9", DarkGreen: "#006400", DarkGrey: "#A9A9A9", DarkKhaki: "#BDB76B", DarkMagenta: "#8B008B", DarkOliveGreen: "#556B2F", DarkOrange: "#FF8C00", DarkOrchid: "#9932CC", DarkRed: "#8B0000", DarkSalmon: "#E9967A", DarkSeaGreen: "#8FBC8F", DarkSlateBlue: "#483D8B", DarkSlateGray: "#2F4F4F", DarkSlateGrey: "#2F4F4F", DarkTurquoise: "#00CED1", DarkViolet: "#9400D3", DeepPink: "#FF1493", DeepSkyBlue: "#00BFFF", DimGray: "#696969", DimGrey: "#696969", DodgerBlue: "#1E90FF", FireBrick: "#B22222", FloralWhite: "#FFFAF0", ForestGreen: "#228B22", Fuchsia: "#FF00FF", Gainsboro: "#DCDCDC", GhostWhite: "#F8F8FF", Gold: "#FFD700", GoldenRod: "#DAA520", Gray: "#808080", Green: "#008000", GreenYellow: "#ADFF2F", Grey: "#808080", HoneyDew: "#F0FFF0", HotPink: "#FF69B4", IndianRed: "#CD5C5C", Indigo: "#4B0082", Ivory: "#FFFFF0", Khaki: "#F0E68C", Lavender: "#E6E6FA", LavenderBlush: "#FFF0F5", LawnGreen: "#7CFC00", LemonChiffon: "#FFFACD", LightBlue: "#ADD8E6", LightCoral: "#F08080", LightCyan: "#E0FFFF", LightGoldenRodYellow: "#FAFAD2", LightGray: "#D3D3D3", LightGreen: "#90EE90", LightGrey: "#D3D3D3", LightPink: "#FFB6C1", LightSalmon: "#FFA07A", LightSeaGreen: "#20B2AA", LightSkyBlue: "#87CEFA", LightSlateGray: "#778899", LightSlateGrey: "#778899", LightSteelBlue: "#B0C4DE", LightYellow: "#FFFFE0", Lime: "#00FF00", LimeGreen: "#32CD32", Linen: "#FAF0E6", Magenta: "#FF00FF", Maroon: "#800000", MediumAquaMarine: "#66CDAA", MediumBlue: "#0000CD", MediumOrchid: "#BA55D3", MediumPurple: "#9370DB", MediumSeaGreen: "#3CB371", MediumSlateBlue: "#7B68EE", MediumSpringGreen: "#00FA9A", MediumTurquoise: "#48D1CC", MediumVioletRed: "#C71585", MidnightBlue: "#191970", MintCream: "#F5FFFA", MistyRose: "#FFE4E1", Moccasin: "#FFE4B5", NavajoWhite: "#FFDEAD", Navy: "#000080", OldLace: "#FDF5E6", Olive: "#808000", OliveDrab: "#6B8E23", Orange: "#FFA500", OrangeRed: "#FF4500", Orchid: "#DA70D6", PaleGoldenRod: "#EEE8AA", PaleGreen: "#98FB98", PaleTurquoise: "#AFEEEE", PaleVioletRed: "#DB7093", PapayaWhip: "#FFEFD5", PeachPuff: "#FFDAB9", Peru: "#CD853F", Pink: "#FFC0CB", Plum: "#DDA0DD", PowderBlue: "#B0E0E6", Purple: "#800080", RebeccaPurple: "#663399", Red: "#FF0000", RosyBrown: "#BC8F8F", RoyalBlue: "#4169E1", SaddleBrown: "#8B4513", Salmon: "#FA8072", SandyBrown: "#F4A460", SeaGreen: "#2E8B57", SeaShell: "#FFF5EE", Sienna: "#A0522D", Silver: "#C0C0C0", SkyBlue: "#87CEEB", SlateBlue: "#6A5ACD", SlateGray: "#708090", SlateGrey: "#708090", Snow: "#FFFAFA", SpringGreen: "#00FF7F", SteelBlue: "#4682B4", Tan: "#D2B48C", Teal: "#008080", Thistle: "#D8BFD8", Tomato: "#FF6347", Turquoise: "#40E0D0", Violet: "#EE82EE", Wheat: "#F5DEB3", White: "#FFFFFF", WhiteSmoke: "#F5F5F5", Yellow: "#FFFF00", YellowGreen: "#9ACD32" };
    let B = f;
    return Object.entries(F).forEach(([W, k]) => {
      f.toLowerCase() != W.toLowerCase() || (B = k);
    }), B;
  }(s), r = 0, o = 0, v = 0, e = 0, h = 0, d = 0;
  if (l.substring(0, 1) === "#")
    l = function(f) {
      let F = f.replace("#", "");
      F.length === 3 && (F = F.split("").map((u) => u + u).join(""));
      const B = parseInt(F.substring(0, 2), 16), W = parseInt(F.substring(2, 4), 16), k = parseInt(F.substring(4, 6), 16);
      return [B, W, k];
    }(l);
  else if (l.includes("rgb"))
    l = [...l.matchAll(/\d+/g)].map(Number);
  else if (l.includes("hsl"))
    return l = [...l.matchAll(/\d+/g)].map(Number), r = l[0], o = l[1], v = l[2], `${r} ${o}% ${v}%`;
  [e, h, d] = l, e /= 255, h /= 255, d /= 255;
  const m = Math.max(e, h, d), w = Math.min(e, h, d);
  if (m === null || !w === null || isNaN(m) || isNaN(w))
    return "0 0% 100% / 12%";
  if (r = (m + w) / 2, o = (m + w) / 2, v = (m + w) / 2, m == w)
    r = o = 0;
  else {
    const f = m - w;
    switch (o = v > 0.5 ? f / (2 - m - w) : f / (m + w), m) {
      case e:
        r = (h - d) / f + (h < d ? 6 : 0);
        break;
      case h:
        r = (d - e) / f + 2;
        break;
      case d:
        r = (e - h) / f + 4;
    }
    r /= 6;
  }
  return r = Math.round(360 * r), o = Math.round(100 * o), v = Math.round(100 * v), `${r} ${o}% ${v}%`;
}
const te = (s, l) => {
  if (/* @__PURE__ */ function(o) {
    return o === "transparent" || o === "none" || o === "inherit" || o === "currentColor" || o === "initial" || o === "unset";
  }(s))
    return s;
  if (function(o) {
    return o.includes("--v-theme");
  }(s))
    return `rgb(var(${s}))`;
  const r = function(o, v) {
    var h;
    const e = ((h = v.global.current.value) == null ? void 0 : h.colors) ?? {};
    return Object.entries(e).find(([d]) => d === o);
  }(s, l);
  return r ? `hsl(${ae(r[1])})` : `hsl(${ae(s)})`;
}, Ne = { default: "1.5em", large: "1.75em", small: "1.25em", "x-large": "2em", "x-small": "1em" }, xe = { fa: { bottom: "fas fa-grip", center: "fas fa-angles-right", top: "fas fa-grip" }, mdi: { bottom: "mdi:mdi-dots-grid", center: "mdi:mdi-chevron-double-right", top: "mdi:mdi-dots-grid" } }, Te = { key: 0, class: "v-resize-drawer--handle-slot" }, Ue = we({ __name: "VResizeDrawer", props: Be({ absolute: {}, expandOnHover: {}, floating: {}, handleBorderWidth: {}, handleColor: {}, handleIcon: {}, handleIconSize: {}, handlePosition: {}, height: {}, image: {}, location: {}, maxWidth: {}, minWidth: {}, modelValue: {}, name: {}, rail: {}, railWidth: {}, resizable: { type: Boolean }, saveWidth: { type: Boolean }, storageName: {}, storageType: {}, tag: {}, temporary: {}, theme: {}, touchless: { type: Boolean }, width: {}, widthSnapBack: { type: Boolean } }, { ...Pe }), emits: ["close", "drawer:mouseenter", "drawer:mouseleave", "handle:click", "handle:dblclick", "handle:drag", "handle:mousedown", "handle:mouseup", "handle:touchend", "handle:touchmove", "handle:touchstart", "update:modelValue"], setup(s, { emit: l }) {
  const r = l, o = s, v = K(ne, {}), e = L({ ...o, ...v });
  ye(() => {
    e.value = { ...o, ...v };
  });
  const { handleIconSize: h, handlePosition: d } = Ce(e.value), m = D(() => e.value), w = K(Symbol.for("vuetify:icons")), f = L(256), F = { mouseDown: !1, mouseUp: !0 }, B = L(!1), W = L(!1), k = L(), u = L(256), T = Ee(), R = Ge(), oe = Ie();
  We(() => {
    e.value.name === void 0 && (e.value.name = String(Math.floor(1e8 * Math.random())));
  }), Se(() => {
    (function() {
      if (e.value.location !== "start" && e.value.location !== "end" && e.value.location !== "left" && e.value.location !== "right")
        throw new Error("[VResizeDrawer]: 'top' and 'bottom' locations are not supported.");
      if (e.value.rail)
        return void (u.value = e.value.railWidth || void 0);
      const a = q(e.value.storageType, e.value.storageName), t = $({ value: e.value.width });
      u.value = t, f.value = u.value, e.value.saveWidth && a && !e.value.rail && (u.value = q(e.value.storageType, e.value.storageName)), u.value = A(u.value), V({ action: "update", rail: e.value.rail, resizedWidth: u.value, saveWidth: e.value.saveWidth, storageName: e.value.storageName, storageType: e.value.storageType });
    })();
  }), Ae(() => {
    document.removeEventListener("mouseup", M, !1), document.removeEventListener("mousemove", O, !1), document.removeEventListener("touchend", z, !1), document.removeEventListener("touchstart", X, !1);
  }), ke(() => o.modelValue, (a) => {
    r("update:modelValue", a), a || r("close");
  });
  const re = D(() => ((a) => {
    const { absolute: t = !1, expandOnHover: n, floating: i, isMouseover: p, location: g, rail: C, railWidth: b, temporary: S } = a;
    return { [`${y}`]: !0, "v-navigation-drawer--absolute": t ?? !1, "v-navigation-drawer--custom-rail": Number(b) !== 56, "v-navigation-drawer--fixed": !t, "v-navigation-drawer--floating": i, "v-navigation-drawer--is-mouseover": c(p), "v-navigation-drawer--left": g === "left" || g === "start" || g === void 0, "v-navigation-drawer--open-on-hover": n, "v-navigation-drawer--rail": C ?? !1, "v-navigation-drawer--right": g === "right" || g === "end", "v-navigation-drawer--temporary": S || !1 };
  })({ absolute: e.value.absolute, expandOnHover: e.value.expandOnHover, floating: e.value.floating, isMouseover: B, location: e.value.location, rail: e.value.rail, railWidth: e.value.railWidth, temporary: e.value.temporary })), ie = D(() => ((a) => {
    const { isMouseDown: t, maxWidth: n, minWidth: i, rail: p, railWidth: g, resizedWidth: C, widthSnapBack: b } = a;
    if (p)
      return {};
    let S = p ? g : c(C);
    return b || (parseInt(S) >= parseInt(n) && (S = parseInt(n)), parseInt(S) <= parseInt(i) && (S = parseInt(i))), { transitionDuration: c(t) ? "0s" : ".2s", width: $({ value: S }) };
  })({ isMouseDown: W, maxWidth: I.value, minWidth: G.value, rail: e.value.rail, railWidth: e.value.railWidth, resizedWidth: u, widthSnapBack: e.value.widthSnapBack })), le = D(() => {
    if (e.value.rail)
      return;
    const a = $({ value: u.value });
    return A(a);
  }), ue = D(() => ((a) => {
    const { drawerLocation: t, handlePosition: n } = a;
    return { [`${y}--handle-container`]: !0, [`${y}--handle-container-position-${n}`]: !0, [`${y}--handle-container-parent-${t}`]: !0 };
  })({ drawerLocation: e.value.location, handlePosition: e.value.handlePosition })), se = D(() => ((a) => {
    const { borderWidth: t, handleColor: n, iconSize: i, position: p, theme: g } = a;
    if (p === "border")
      return { backgroundColor: te(n, g), height: "100%", width: $({ value: t }) };
    const C = Ne[i];
    return { backgroundColor: "transparent", height: C, width: C };
  })({ borderWidth: e.value.handleBorderWidth || 1, handleColor: e.value.handleColor, iconSize: e.value.handleIconSize, position: e.value.handlePosition, theme: R })), de = D(() => (!e.value.touchless || !oe.mobile.value) && !(!e.value.resizable || e.value.rail)), ce = D(() => ((a) => {
    const { color: t, theme: n } = a;
    return { color: te(t, n) };
  })({ color: o.handleColor, theme: R })), he = D(() => ((a) => {
    const { drawerLocation: t, handlePosition: n, iconOptions: i, isUserIcon: p } = a;
    return { [`${y}--handle-container-icon`]: !0, [`${y}--handle-container-icon-${n}-${t}`]: !0, [`${y}--handle-container-icon-user-icon`]: p, [`${y}--handle-container-icon-fa`]: (i == null ? void 0 : i.defaultSet) === "fa", [`${y}--handle-container-icon-fa-${n}`]: (i == null ? void 0 : i.defaultSet) === "fa" };
  })({ drawerLocation: e.value.location, handlePosition: e.value.handlePosition, iconOptions: w, isUserIcon: e.value.handleIcon !== void 0 && e.value.handleIcon !== null })), ve = D(() => ((t) => {
    const { icon: n, iconOptions: i, name: p } = t;
    if (p === "border")
      return;
    if (n)
      return n;
    let g = ((i == null ? void 0 : i.defaultSet) ?? "").toLowerCase();
    g = g === "fa" || g === "fasvg" ? "fa" : g;
    const C = xe[g];
    if (!C)
      throw new Error(`[VResizeDrawer]: No default ${i == null ? void 0 : i.defaultSet} icon set found.`);
    const b = C[p];
    if (!b)
      throw new Error(`[VResizeDrawer]: No ${p} icon found.`);
    return b;
  })({ icon: e.value.handleIcon, iconOptions: w, name: e.value.handlePosition }));
  function me() {
    B.value = !0, r("drawer:mouseenter", B.value);
  }
  function Fe() {
    B.value = !1, r("drawer:mouseleave", B.value);
  }
  function U(a, t) {
    let n = t;
    e.value.location !== "right" && e.value.location !== "end" || (n = document.body.scrollWidth - n), u.value = $({ value: n }) || void 0, document.body.style.cursor = "grabbing", E("handle:touchmove", a), E("handle:drag", a);
  }
  function H(a) {
    var t;
    U(a, ((t = a.touches[0]) == null ? void 0 : t.clientX) ?? 0);
  }
  function O(a) {
    U(a, a.clientX);
  }
  const I = D(() => {
    if (e.value.maxWidth === "100%")
      return window.innerWidth;
    if (String(e.value.maxWidth).includes("%")) {
      const a = parseInt(String(e.value.maxWidth).replace("%", ""));
      return window.innerWidth * a / 100;
    }
    return e.value.maxWidth;
  }), G = D(() => {
    if (e.value.minWidth === "100%")
      return window.innerWidth;
    if (String(e.value.minWidth).includes("%")) {
      const a = parseInt(String(e.value.minWidth).replace("%", ""));
      return window.innerWidth * a / 100;
    }
    return e.value.minWidth;
  });
  function j(a) {
    let t = a;
    parseInt(t) >= parseInt(I.value) && (t = parseInt(I.value)), parseInt(t) <= parseInt(G.value) && (t = parseInt(G.value)), typeof t == "number" && (t = Math.round(t));
    let n = A(t);
    const i = A(I.value), p = A(G.value);
    return n >= i && (n = i), p >= n && (n = p), n;
  }
  function pe(a) {
    E("handle:click", a);
  }
  function ge(a) {
    u.value = A(f.value), V({ rail: e.value.rail, resizedWidth: u.value, saveWidth: e.value.saveWidth, storageName: e.value.storageName, storageType: e.value.storageType }), E("handle:dblclick", a);
  }
  function Y(a, t) {
    a.preventDefault(), a.stopPropagation();
    const n = a.type;
    let i = 25;
    W.value = !0, e.value.handlePosition === "border" && (i = e.value.handleBorderWidth || 1), F.mouseUp = !1, t < i && (n === "touchstart" ? document.addEventListener("touchmove", H, !1) : document.addEventListener("mousemove", O, !1)), F.mouseDown || (F.mouseDown = !0, n === "touchstart" ? (document.addEventListener("touchend", z, !1), E("handle:touchstart", a)) : (document.addEventListener("mouseup", M, !1), E("handle:mousedown", a)));
  }
  function fe(a) {
    Y(a, a.offsetX);
  }
  function X(a) {
    var t;
    Y(a, ((t = a.touches[0]) == null ? void 0 : t.radiusX) ?? 0);
  }
  function _(a) {
    a.preventDefault(), a.stopPropagation();
    const t = a.type, n = k.value;
    W.value = !1, F.mouseDown = !1, u.value = (n == null ? void 0 : n.width) ?? f.value, document.body.style.cursor = "";
    const i = u.value;
    String(i).includes("-") && (u.value = G.value), u.value = j(u.value), u.value = $({ value: u.value }) || void 0, u.value = A(u.value), V({ rail: e.value.rail, resizedWidth: u.value, saveWidth: e.value.saveWidth, storageName: e.value.storageName, storageType: e.value.storageType }), F.mouseUp || (F.mouseUp = !0, t === "touchend" ? (document.removeEventListener("touchend", z, !1), document.removeEventListener("touchmove", H, !1), E("handle:touchend", a)) : (document.removeEventListener("mouseup", M, !1), document.removeEventListener("mousemove", O, !1), E("handle:mouseup", a)));
  }
  function M(a) {
    _(a);
  }
  function z(a) {
    _(a);
  }
  const De = D(() => {
    var a;
    return e.value.theme ? e.value.theme : ((a = R.global.current.value) == null ? void 0 : a.dark) === !0 ? "dark" : "light";
  });
  function E(a, t) {
    const n = parseInt(j(u.value)) ?? 0, i = { e: t, eventName: a, offsetWidth: window.innerWidth - n + "px", resizedWidth: `${n}px`, width: `${n}px` };
    r(a, i);
  }
  return (a, t) => (P(), Z(c(Me), be(c(m), { ref_key: "resizeDrawer", ref: k, class: c(re), location: c(e).location, "model-value": a.modelValue, name: c(e).name, style: c(ie), tag: c(e).tag, theme: c(De), width: c(le), onMouseenter: me, onMouseleave: Fe }), { default: Le(() => [c(de) ? (P(), J("div", { key: 0, class: Q(c(ue)), style: ee(c(se)), onClick: pe, onDblclick: ge, onMousedown: fe, onMouseup: M, onTouchend: z, onTouchstart: X }, [c(T).handle ? (P(), J("div", Te, [N(a.$slots, "handle")])) : c(d) !== "border" ? (P(), Z(ze, { key: 1, class: Q(["v-resize-drawer--handle-icon", c(he)]), icon: c(ve), size: c(h), style: ee(c(ce)) }, null, 8, ["class", "icon", "size", "style"])) : x("", !0)], 38)) : x("", !0), c(T).prepend ? N(a.$slots, "prepend", { key: 1 }) : x("", !0), N(a.$slots, "default"), c(T).append ? N(a.$slots, "append", { key: 2 }) : x("", !0)]), _: 3 }, 16, ["class", "location", "model-value", "name", "style", "tag", "theme", "width"]));
} }), ne = Symbol();
function He(s = {}) {
  return { install: (l) => {
    l.provide(ne, s), l.component("VResizeDrawer", $e(() => import("./VResizeDrawer-CJUYR-yg.mjs")));
  } };
}
export {
  Ue as VResizeDrawer,
  He as createVResizeDrawer,
  Ue as default,
  ne as globalOptions
};
(function(){"use strict";try{if(typeof document<"u"){var n=document.createElement("style");n.appendChild(document.createTextNode(".v-resize-drawer{container-name:v-resize-drawer;container-type:inline-size}.v-resize-drawer--handle-container{align-items:center;cursor:grab;display:flex;justify-content:center;position:absolute;z-index:1}.v-resize-drawer--handle-container-icon-parent-end,.v-resize-drawer--handle-container-icon-parent-right{left:initial;right:0}.v-resize-drawer--handle-container-icon-center-end,.v-resize-drawer--handle-container-icon-center-right{transform:rotate(180deg)}.v-resize-drawer--handle-container-icon-user-icon{transform:none}.v-resize-drawer--handle-container-icon-fa{font-size:.7rem!important}.v-resize-drawer--handle-container-parent-left,.v-resize-drawer--handle-container-parent-start,.v-resize-drawer--handle-container-parent-undefined{right:0}.v-resize-drawer--handle-container-parent-end,.v-resize-drawer--handle-container-parent-right{left:0}.v-resize-drawer--handle-container-position-top{top:0}.v-resize-drawer--handle-container-position-center{top:50%;transform:translateY(-50%)}.v-resize-drawer--handle-container-position-bottom{bottom:0}.v-resize-drawer--handle-container-position-border{cursor:col-resize;height:100%;top:0;width:8px}@container v-resize-drawer (width > 0) and (max-width: 599.98px){.v-col-xs-12{flex:0 0 100%!important;flex-basis:0;flex-grow:1;max-width:100%!important}}@container v-resize-drawer (min-width: 600px){.v-col-sm-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-sm-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-sm-3{flex:0 0 25%;max-width:25%}.v-col-sm-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-sm-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-sm-6{flex:0 0 50%;max-width:50%}.v-col-sm-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-sm-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-sm-9{flex:0 0 75%;max-width:75%}.v-col-sm-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-sm-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-sm-12{flex:0 0 100%;max-width:100%}}@container v-resize-drawer (min-width: 960px){.v-col-md-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-md-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-md-3{flex:0 0 25%;max-width:25%}.v-col-md-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-md-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-md-6{flex:0 0 50%;max-width:50%}.v-col-md-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-md-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-md-9{flex:0 0 75%;max-width:75%}.v-col-md-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-md-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-md-12{flex:0 0 100%;max-width:100%}}@container v-resize-drawer (min-width: 1280px){.v-col-lg-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-lg-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-lg-3{flex:0 0 25%;max-width:25%}.v-col-lg-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-lg-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-lg-6{flex:0 0 50%;max-width:50%}.v-col-lg-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-lg-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-lg-9{flex:0 0 75%;max-width:75%}.v-col-lg-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-lg-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-lg-12{flex:0 0 100%;max-width:100%}}@container v-resize-drawer (min-width: 1920px){.v-col-xl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-xl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-xl-3{flex:0 0 25%;max-width:25%}.v-col-xl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-xl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-xl-6{flex:0 0 50%;max-width:50%}.v-col-xl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-xl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-xl-9{flex:0 0 75%;max-width:75%}.v-col-xl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-xl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-xl-12{flex:0 0 100%;max-width:100%}}@container v-resize-drawer (min-width: 2560px){.v-col-xxl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-xxl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-xxl-3{flex:0 0 25%;max-width:25%}.v-col-xxl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-xxl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-xxl-6{flex:0 0 50%;max-width:50%}.v-col-xxl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-xxl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-xxl-9{flex:0 0 75%;max-width:75%}.v-col-xxl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-xxl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-xxl-12{flex:0 0 100%;max-width:100%}}@container v-resize-drawer only print{.hidden-print-only{display:none!important}}@container v-resize-drawer only print{.d-print-only-none{display:none!important}.d-print-only-inline{display:inline!important}.d-print-only-inline-block{display:inline-block!important}.d-print-only-block{display:block!important}.d-print-only-table{display:table!important}.d-print-only-table-row{display:table-row!important}.d-print-only-table-cell{display:table-cell!important}.d-print-only-flex{display:flex!important}.d-print-only-inline-flex{display:inline-flex!important}}@container v-resize-drawer only screen{.hidden-screen-only{display:none!important}}@container v-resize-drawer only screen{.d-screen-only-none{display:none!important}.d-screen-only-inline{display:inline!important}.d-screen-only-inline-block{display:inline-block!important}.d-screen-only-block{display:block!important}.d-screen-only-table{display:table!important}.d-screen-only-table-row{display:table-row!important}.d-screen-only-table-cell{display:table-cell!important}.d-screen-only-flex{display:flex!important}.d-screen-only-inline-flex{display:inline-flex!important}}@container v-resize-drawer (max-width: 599.98px){.hidden-xs{display:none!important}}@container v-resize-drawer (max-width: 599.98px){.d-xs-none{display:none!important}.d-xs-inline{display:inline!important}.d-xs-inline-block{display:inline-block!important}.d-xs-block{display:block!important}.d-xs-table{display:table!important}.d-xs-table-row{display:table-row!important}.d-xs-table-cell{display:table-cell!important}.d-xs-flex{display:flex!important}.d-xs-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 600px) and (max-width: 959.98px){.hidden-sm{display:none!important}}@container v-resize-drawer (min-width: 600px) and (max-width: 959.98px){.d-sm-none{display:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:flex!important}.d-sm-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 960px) and (max-width: 1279.98px){.hidden-md{display:none!important}}@container v-resize-drawer (min-width: 960px) and (max-width: 1279.98px){.d-md-none{display:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:flex!important}.d-md-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 1280px) and (max-width: 1919.98px){.hidden-lg{display:none!important}}@container v-resize-drawer (min-width: 1280px) and (max-width: 1919.98px){.d-lg-none{display:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:flex!important}.d-lg-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 1920px) and (max-width: 2559.98px){.hidden-xl{display:none!important}}@container v-resize-drawer (min-width: 1920px) and (max-width: 2559.98px){.d-xl-none{display:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:flex!important}.d-xl-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 2560px){.hidden-xxl{display:none!important}}@container v-resize-drawer (min-width: 2560px){.d-xxl-none{display:none!important}.d-xxl-inline{display:inline!important}.d-xxl-inline-block{display:inline-block!important}.d-xxl-block{display:block!important}.d-xxl-table{display:table!important}.d-xxl-table-row{display:table-row!important}.d-xxl-table-cell{display:table-cell!important}.d-xxl-flex{display:flex!important}.d-xxl-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 600px){.hidden-sm-and-up{display:none!important}}@container v-resize-drawer (min-width: 600px){.d-sm-and-up-none{display:none!important}.d-sm-and-up-inline{display:inline!important}.d-sm-and-up-inline-block{display:inline-block!important}.d-sm-and-up-block{display:block!important}.d-sm-and-up-table{display:table!important}.d-sm-and-up-table-row{display:table-row!important}.d-sm-and-up-table-cell{display:table-cell!important}.d-sm-and-up-flex{display:flex!important}.d-sm-and-up-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 960px){.hidden-md-and-up{display:none!important}}@container v-resize-drawer (min-width: 960px){.d-md-and-up-none{display:none!important}.d-md-and-up-inline{display:inline!important}.d-md-and-up-inline-block{display:inline-block!important}.d-md-and-up-block{display:block!important}.d-md-and-up-table{display:table!important}.d-md-and-up-table-row{display:table-row!important}.d-md-and-up-table-cell{display:table-cell!important}.d-md-and-up-flex{display:flex!important}.d-md-and-up-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 1280px){.hidden-lg-and-up{display:none!important}}@container v-resize-drawer (min-width: 1280px){.d-lg-and-up-none{display:none!important}.d-lg-and-up-inline{display:inline!important}.d-lg-and-up-inline-block{display:inline-block!important}.d-lg-and-up-block{display:block!important}.d-lg-and-up-table{display:table!important}.d-lg-and-up-table-row{display:table-row!important}.d-lg-and-up-table-cell{display:table-cell!important}.d-lg-and-up-flex{display:flex!important}.d-lg-and-up-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 1920px){.hidden-xl-and-up{display:none!important}}@container v-resize-drawer (min-width: 1920px){.d-xl-and-up-none{display:none!important}.d-xl-and-up-inline{display:inline!important}.d-xl-and-up-inline-block{display:inline-block!important}.d-xl-and-up-block{display:block!important}.d-xl-and-up-table{display:table!important}.d-xl-and-up-table-row{display:table-row!important}.d-xl-and-up-table-cell{display:table-cell!important}.d-xl-and-up-flex{display:flex!important}.d-xl-and-up-inline-flex{display:inline-flex!important}}@container v-resize-drawer (max-width: 959.98px){.hidden-sm-and-down{display:none!important}}@container v-resize-drawer (max-width: 959.98px){.d-sm-and-down-none{display:none!important}.d-sm-and-down-inline{display:inline!important}.d-sm-and-down-inline-block{display:inline-block!important}.d-sm-and-down-block{display:block!important}.d-sm-and-down-table{display:table!important}.d-sm-and-down-table-row{display:table-row!important}.d-sm-and-down-table-cell{display:table-cell!important}.d-sm-and-down-flex{display:flex!important}.d-sm-and-down-inline-flex{display:inline-flex!important}}@container v-resize-drawer (max-width: 1279.98px){.hidden-md-and-down{display:none!important}}@container v-resize-drawer (max-width: 1279.98px){.d-md-and-down-none{display:none!important}.d-md-and-down-inline{display:inline!important}.d-md-and-down-inline-block{display:inline-block!important}.d-md-and-down-block{display:block!important}.d-md-and-down-table{display:table!important}.d-md-and-down-table-row{display:table-row!important}.d-md-and-down-table-cell{display:table-cell!important}.d-md-and-down-flex{display:flex!important}.d-md-and-down-inline-flex{display:inline-flex!important}}@container v-resize-drawer (max-width: 1919.98px){.hidden-lg-and-down{display:none!important}}@container v-resize-drawer (max-width: 1919.98px){.d-lg-and-down-none{display:none!important}.d-lg-and-down-inline{display:inline!important}.d-lg-and-down-inline-block{display:inline-block!important}.d-lg-and-down-block{display:block!important}.d-lg-and-down-table{display:table!important}.d-lg-and-down-table-row{display:table-row!important}.d-lg-and-down-table-cell{display:table-cell!important}.d-lg-and-down-flex{display:flex!important}.d-lg-and-down-inline-flex{display:inline-flex!important}}@container v-resize-drawer (max-width: 2559.98px){.hidden-xl-and-down{display:none!important}}@container v-resize-drawer (max-width: 2559.98px){.d-xl-and-down-none{display:none!important}.d-xl-and-down-inline{display:inline!important}.d-xl-and-down-inline-block{display:inline-block!important}.d-xl-and-down-block{display:block!important}.d-xl-and-down-table{display:table!important}.d-xl-and-down-table-row{display:table-row!important}.d-xl-and-down-table-cell{display:table-cell!important}.d-xl-and-down-flex{display:flex!important}.d-xl-and-down-inline-flex{display:inline-flex!important}}")),document.head.appendChild(n)}}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})();
