import { unref as d, defineComponent as Me, mergeDefaults as Ge, inject as oe, ref as S, watchEffect as ze, watch as ie, toRef as re, computed as p, useSlots as Ie, onBeforeMount as Pe, onMounted as xe, onUnmounted as He, openBlock as O, createBlock as le, mergeProps as Ne, withCtx as Te, createElementBlock as ue, normalizeClass as se, normalizeStyle as de, renderSlot as R, createCommentVNode as V, defineAsyncComponent as Oe } from "vue";
import { useTheme as Re, useDisplay as Ve } from "vuetify";
import { VNavigationDrawer as qe } from "vuetify/components";
import { VIcon as Ue } from "vuetify/lib/components/VIcon/index.mjs";
/**
 * @name @wdns/vuetify-resize-drawer
 * @version 3.2.1
 * @description The vuetify-resize-drawer component extends the functionality of the v-navigation-drawer so that it is resizable by the user.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2025, WebDevNerdStuff
 * @homepage https://webdevnerdstuff.github.io/vuetify-resize-drawer/
 * @repository https://github.com/webdevnerdstuff/vuetify-resize-drawer
 * @license MIT License
 */
const C = "v-resize-drawer", E = (u) => {
  const { unit: r = "px", value: l } = u;
  if (l != null && l !== "") return +l ? `${Number(l)}${r}` : String(l);
}, I = (u) => {
  const r = window.innerWidth, l = function(o) {
    if (typeof o == "string") {
      const F = /(\d+(\.\d+)?)(\s*([a-zA-Z]+))?/, e = o.match(F);
      if (!e) return o;
      const v = parseFloat(e[1]), c = e[4];
      if (!isNaN(v)) {
        const g = Math.round(v);
        return c ? `${g} ${c}` : `${g}`;
      }
      return o;
    }
    return typeof o == "number" ? Math.round(o) : o;
  }(u);
  return typeof u == "string" && u.includes("%") ? Number(u.replace("%", "")) / 100 * r : typeof l == "string" ? Number(l.replace(/\D/g, "")) : l;
}, ve = (u) => {
  if (!u) return 0;
  if (typeof u == "number") return u;
  const r = document.createElement("div");
  r.style.position = "absolute", r.style.visibility = "hidden", r.style.width = u;
  const l = document.body;
  l.appendChild(r);
  const o = getComputedStyle(r).width;
  return l.removeChild(r), parseFloat(o);
}, Ye = { fa: { bottom: "fas fa-grip", center: "fas fa-angles-right", top: "fas fa-grip" }, mdi: { bottom: "mdi:mdi-dots-grid", center: "mdi:mdi-chevron-double-right", top: "mdi:mdi-dots-grid" } };
function X(u, r) {
  return u === "local" ? localStorage.getItem(r) : u === "session" ? sessionStorage.getItem(r) : "";
}
const q = (u) => {
  const { action: r = "update", rail: l, resizedAmount: o, saveAmount: F, storageName: e, storageType: v } = u;
  if (l && !F) return;
  let c = o;
  c = c ?? void 0, r === "set" && (c = X(v, e) ?? "", c = c || o), v === "local" && localStorage.setItem(e, String(c)), v === "session" && sessionStorage.setItem(e, String(c));
};
function ce(u) {
  let r = function(f) {
    const A = { AliceBlue: "#F0F8FF", AntiqueWhite: "#FAEBD7", Aqua: "#00FFFF", Aquamarine: "#7FFFD4", Azure: "#F0FFFF", Beige: "#F5F5DC", Bisque: "#FFE4C4", Black: "#000000", BlanchedAlmond: "#FFEBCD", Blue: "#0000FF", BlueViolet: "#8A2BE2", Brown: "#A52A2A", BurlyWood: "#DEB887", CadetBlue: "#5F9EA0", Chartreuse: "#7FFF00", Chocolate: "#D2691E", Coral: "#FF7F50", CornflowerBlue: "#6495ED", Cornsilk: "#FFF8DC", Crimson: "#DC143C", Cyan: "#00FFFF", DarkBlue: "#00008B", DarkCyan: "#008B8B", DarkGoldenRod: "#B8860B", DarkGray: "#A9A9A9", DarkGreen: "#006400", DarkGrey: "#A9A9A9", DarkKhaki: "#BDB76B", DarkMagenta: "#8B008B", DarkOliveGreen: "#556B2F", DarkOrange: "#FF8C00", DarkOrchid: "#9932CC", DarkRed: "#8B0000", DarkSalmon: "#E9967A", DarkSeaGreen: "#8FBC8F", DarkSlateBlue: "#483D8B", DarkSlateGray: "#2F4F4F", DarkSlateGrey: "#2F4F4F", DarkTurquoise: "#00CED1", DarkViolet: "#9400D3", DeepPink: "#FF1493", DeepSkyBlue: "#00BFFF", DimGray: "#696969", DimGrey: "#696969", DodgerBlue: "#1E90FF", FireBrick: "#B22222", FloralWhite: "#FFFAF0", ForestGreen: "#228B22", Fuchsia: "#FF00FF", Gainsboro: "#DCDCDC", GhostWhite: "#F8F8FF", Gold: "#FFD700", GoldenRod: "#DAA520", Gray: "#808080", Green: "#008000", GreenYellow: "#ADFF2F", Grey: "#808080", HoneyDew: "#F0FFF0", HotPink: "#FF69B4", IndianRed: "#CD5C5C", Indigo: "#4B0082", Ivory: "#FFFFF0", Khaki: "#F0E68C", Lavender: "#E6E6FA", LavenderBlush: "#FFF0F5", LawnGreen: "#7CFC00", LemonChiffon: "#FFFACD", LightBlue: "#ADD8E6", LightCoral: "#F08080", LightCyan: "#E0FFFF", LightGoldenRodYellow: "#FAFAD2", LightGray: "#D3D3D3", LightGreen: "#90EE90", LightGrey: "#D3D3D3", LightPink: "#FFB6C1", LightSalmon: "#FFA07A", LightSeaGreen: "#20B2AA", LightSkyBlue: "#87CEFA", LightSlateGray: "#778899", LightSlateGrey: "#778899", LightSteelBlue: "#B0C4DE", LightYellow: "#FFFFE0", Lime: "#00FF00", LimeGreen: "#32CD32", Linen: "#FAF0E6", Magenta: "#FF00FF", Maroon: "#800000", MediumAquaMarine: "#66CDAA", MediumBlue: "#0000CD", MediumOrchid: "#BA55D3", MediumPurple: "#9370DB", MediumSeaGreen: "#3CB371", MediumSlateBlue: "#7B68EE", MediumSpringGreen: "#00FA9A", MediumTurquoise: "#48D1CC", MediumVioletRed: "#C71585", MidnightBlue: "#191970", MintCream: "#F5FFFA", MistyRose: "#FFE4E1", Moccasin: "#FFE4B5", NavajoWhite: "#FFDEAD", Navy: "#000080", OldLace: "#FDF5E6", Olive: "#808000", OliveDrab: "#6B8E23", Orange: "#FFA500", OrangeRed: "#FF4500", Orchid: "#DA70D6", PaleGoldenRod: "#EEE8AA", PaleGreen: "#98FB98", PaleTurquoise: "#AFEEEE", PaleVioletRed: "#DB7093", PapayaWhip: "#FFEFD5", PeachPuff: "#FFDAB9", Peru: "#CD853F", Pink: "#FFC0CB", Plum: "#DDA0DD", PowderBlue: "#B0E0E6", Purple: "#800080", RebeccaPurple: "#663399", Red: "#FF0000", RosyBrown: "#BC8F8F", RoyalBlue: "#4169E1", SaddleBrown: "#8B4513", Salmon: "#FA8072", SandyBrown: "#F4A460", SeaGreen: "#2E8B57", SeaShell: "#FFF5EE", Sienna: "#A0522D", Silver: "#C0C0C0", SkyBlue: "#87CEEB", SlateBlue: "#6A5ACD", SlateGray: "#708090", SlateGrey: "#708090", Snow: "#FFFAFA", SpringGreen: "#00FF7F", SteelBlue: "#4682B4", Tan: "#D2B48C", Teal: "#008080", Thistle: "#D8BFD8", Tomato: "#FF6347", Turquoise: "#40E0D0", Violet: "#EE82EE", Wheat: "#F5DEB3", White: "#FFFFFF", WhiteSmoke: "#F5F5F5", Yellow: "#FFFF00", YellowGreen: "#9ACD32" };
    let y = f;
    return Object.entries(A).forEach(([b, M]) => {
      f.toLowerCase() != b.toLowerCase() || (y = M);
    }), y;
  }(u), l = 0, o = 0, F = 0, e = 0, v = 0, c = 0;
  if (r.substring(0, 1) === "#") r = function(f) {
    let A = f.replace("#", "");
    A.length === 3 && (A = A.split("").map((P) => P + P).join(""));
    const y = parseInt(A.substring(0, 2), 16), b = parseInt(A.substring(2, 4), 16), M = parseInt(A.substring(4, 6), 16);
    return [y, b, M];
  }(r);
  else if (r.includes("rgb")) r = [...r.matchAll(/\d+/g)].map(Number);
  else if (r.includes("hsl")) return r = [...r.matchAll(/\d+/g)].map(Number), l = r[0], o = r[1], F = r[2], `${l} ${o}% ${F}%`;
  [e, v, c] = r, e /= 255, v /= 255, c /= 255;
  const g = Math.max(e, v, c), B = Math.min(e, v, c);
  if (g === null || !B === null || isNaN(g) || isNaN(B))
    return "0 0% 100% / 12%";
  if (l = (g + B) / 2, o = (g + B) / 2, F = (g + B) / 2, g == B) l = o = 0;
  else {
    const f = g - B;
    switch (o = F > 0.5 ? f / (2 - g - B) : f / (g + B), g) {
      case e:
        l = (v - c) / f + (v < c ? 6 : 0);
        break;
      case v:
        l = (c - e) / f + 2;
        break;
      case c:
        l = (e - v) / f + 4;
    }
    l /= 6;
  }
  return l = Math.round(360 * l), o = Math.round(100 * o), F = Math.round(100 * F), `${l} ${o}% ${F}%`;
}
const he = (u, r) => {
  if (/* @__PURE__ */ function(o) {
    return o === "transparent" || o === "none" || o === "inherit" || o === "currentColor" || o === "initial" || o === "unset";
  }(u)) return u;
  if (function(o) {
    return o.includes("--v-theme");
  }(u)) return `rgb(var(${u}))`;
  const l = function(o, F) {
    var v;
    const e = ((v = F.global.current.value) == null ? void 0 : v.colors) ?? {};
    return Object.entries(e).find(([c]) => c === o);
  }(u, r);
  return l ? `hsl(${ce(l[1])})` : `hsl(${ce(u)})`;
}, me = { default: "1.5em", large: "1.75em", small: "1.25em", "x-large": "2em", "x-small": "1em" }, je = { handleBorderWidth: 8, handleColor: "primary", handleIcon: void 0, handleIconSize: "x-small", handlePosition: "center", height: 256, location: "start", maxHeight: window.innerHeight, maxWidth: window.innerWidth, minHeight: 56, minWidth: 56, modelValue: !0, name: void 0, rail: !1, railWidth: 8, resizable: !0, saveWidth: !0, snapBack: !0, storageName: `${C}-width`, storageType: "local", tag: "nav", theme: void 0, touchless: !1, width: 256 }, Xe = { key: 0, class: "v-resize-drawer--handle-slot" }, Qe = Me({ __name: "VResizeDrawer", props: Ge({ absolute: {}, expandOnHover: {}, floating: {}, handleBorderWidth: {}, handleColor: {}, handleIcon: {}, handleIconSize: {}, handlePosition: {}, height: {}, image: {}, location: {}, maxHeight: {}, maxWidth: {}, minHeight: {}, minWidth: {}, modelValue: {}, name: {}, rail: {}, railWidth: {}, resizable: { type: Boolean }, saveHeight: { type: Boolean }, saveWidth: { type: Boolean }, snapBack: { type: Boolean }, storageName: {}, storageType: {}, tag: {}, temporary: {}, theme: {}, touchless: { type: Boolean }, width: {}, widthSnapBack: { type: Boolean } }, { ...je }), emits: ["close", "drawer:mouseenter", "drawer:mouseleave", "handle:click", "handle:dblclick", "handle:drag", "handle:mousedown", "handle:mouseup", "handle:touchend", "handle:touchmove", "handle:touchstart", "update:modelValue"], setup(u, { emit: r }) {
  const l = r, o = u, F = oe(Fe, {}), e = S({ ...o, ...F });
  ze(() => {
    e.value = { ...o, ...F };
  }), ie(() => o.width, (a) => {
    f.value = a, s.value = E({ value: a }) || void 0, q({ rail: e.value.rail, resizedAmount: s.value, saveAmount: e.value.saveHeight || e.value.saveWidth, storageName: z.value, storageType: e.value.storageType });
  });
  const v = re(e.value, "handleIconSize"), c = re(e.value, "handlePosition"), g = p(() => e.value), B = oe(Symbol.for("vuetify:icons")), f = S(256), A = S(256), y = { mouseDown: !1, mouseUp: !0 }, b = S(!1), M = S(!1), P = S(e.value.location), _ = S(), s = S(256), U = Ie(), Y = Re(), pe = Ve(), w = p(() => P.value === "top" || P.value === "bottom"), z = p(() => `${e.value.storageName}-${e.value.location}`);
  Pe(() => {
    e.value.name === void 0 && (e.value.name = String(Math.floor(1e8 * Math.random())));
  }), xe(() => {
    (function() {
      if (!K.value) throw new Error("[VResizeDrawer]: 'bottom' location does not support 'bottom' or 'top' handle positions.");
      if (e.value.rail && !w.value) return void (s.value = e.value.railWidth || void 0);
      const a = X(e.value.storageType, z.value), n = E({ value: w.value ? e.value.height : e.value.width });
      s.value = n, f.value = s.value, (e.value.saveHeight || e.value.saveWidth) && a && !e.value.rail && (s.value = X(e.value.storageType, z.value)), s.value = I(s.value), q({ action: "update", rail: e.value.rail, resizedAmount: s.value, saveAmount: e.value.saveHeight || e.value.saveWidth, storageName: z.value, storageType: e.value.storageType });
    })();
  }), He(() => {
    document.removeEventListener("mouseup", N, !1), document.removeEventListener("mousemove", j, !1), document.removeEventListener("touchend", T, !1), document.removeEventListener("touchstart", ae, !1);
  }), ie(() => o.modelValue, (a) => {
    l("update:modelValue", a), a || l("close");
  });
  const ge = p(() => ((a) => {
    const { absolute: n = !1, expandOnHover: t, floating: i, isMouseover: h, location: m, rail: W, railWidth: $, temporary: L } = a;
    let D = m === "left" || m === "start" || m === void 0;
    return m !== "top" && m !== "bottom" || (D = !1), { [`${C}`]: !0, [`${C}--${m}`]: m === "bottom" || m === "top", "v-navigation-drawer--absolute": n ?? !1, "v-navigation-drawer--custom-rail": Number($) !== 56, "v-navigation-drawer--fixed": !n, "v-navigation-drawer--floating": i, "v-navigation-drawer--is-mouseover": d(h), "v-navigation-drawer--left": D, "v-navigation-drawer--open-on-hover": t, "v-navigation-drawer--rail": W ?? !1, "v-navigation-drawer--right": m === "right" || m === "end", "v-navigation-drawer--temporary": L || !1 };
  })({ absolute: e.value.absolute, expandOnHover: e.value.expandOnHover, floating: e.value.floating, isMouseover: b, location: e.value.location, rail: e.value.rail, railWidth: e.value.railWidth, temporary: e.value.temporary })), fe = p(() => ((a) => {
    const { isMouseDown: n, location: t, maxWidth: i, minWidth: h, rail: m, railWidth: W, resizedAmount: $, snapBack: L } = a;
    if (m) return {};
    let D = m ? W : d($);
    L || (parseInt(D) >= parseInt(i) && (D = parseInt(i)), parseInt(D) <= parseInt(h) && (D = parseInt(h)));
    let ne = {};
    return ne = t === "top" || t === "bottom" ? { maxHeight: `${E({ value: D })} !important`, minHeight: `${E({ value: D })} !important`, transitionDuration: d(n) ? "0s" : ".2s", width: "100%" } : { transitionDuration: d(n) ? "0s" : ".2s", width: E({ value: D }) }, ne;
  })({ isMouseDown: M, location: e.value.location, maxWidth: H.value, minWidth: x.value, rail: e.value.rail, railWidth: e.value.railWidth, resizedAmount: s.value, snapBack: e.value.snapBack || e.value.widthSnapBack })), we = p(() => {
    if (w.value || e.value.rail) return;
    const a = E({ value: s.value });
    return I(a);
  }), De = p(() => ((a) => {
    const { drawerLocation: n, handlePosition: t } = a;
    return { [`${C}--handle-container`]: !0, [`${C}--handle-container-position-${t}`]: !0, [`${C}--handle-container-parent-${n}`]: !0 };
  })({ drawerLocation: e.value.location, handlePosition: e.value.handlePosition })), Be = p(() => ((a) => {
    const { borderWidth: n, handleColor: t, iconSizeUnit: i, location: h, position: m, theme: W } = a, $ = "translateX(-50%) " + (h === "top" ? "rotate(90deg)" : "rotate(-90deg)");
    let L = `${i}px`, D = `${i}px`;
    return m === "border" ? (h === "bottom" || h === "top" ? L = E({ value: n }) : (L = "100%", D = E({ value: n })), { backgroundColor: he(t, W), height: L, width: D }) : { backgroundColor: "transparent", height: L, transform: h === "top" || h === "bottom" ? $ : void 0, width: D };
  })({ borderWidth: e.value.handleBorderWidth || 1, handleColor: e.value.handleColor, iconSize: e.value.handleIconSize, iconSizeUnit: G.value, location: e.value.location, position: e.value.handlePosition, theme: Y })), ye = p(() => (!e.value.touchless || !pe.mobile.value) && !(!e.value.resizable || e.value.rail) && !!K.value), K = p(() => e.value.location !== "bottom" && e.value.location !== "top" || e.value.handlePosition !== "bottom" && e.value.handlePosition !== "top"), Ce = p(() => ((a) => {
    const { color: n, theme: t } = a;
    return { color: he(n, t) };
  })({ color: o.handleColor, theme: Y })), Ae = p(() => ((a) => {
    const { drawerLocation: n, handlePosition: t, iconOptions: i, isUserIcon: h } = a;
    return { [`${C}--handle-container-icon`]: !0, [`${C}--handle-container-icon-${t}-${n}`]: !0, [`${C}--handle-container-icon-user-icon`]: h, [`${C}--handle-container-icon-fa`]: (i == null ? void 0 : i.defaultSet) === "fa", [`${C}--handle-container-icon-fa-${t}`]: (i == null ? void 0 : i.defaultSet) === "fa" };
  })({ drawerLocation: e.value.location, handlePosition: e.value.handlePosition, iconOptions: B, isUserIcon: e.value.handleIcon != null && e.value.handleIcon !== "" })), Ee = p(() => ((n) => {
    const { icon: t, iconOptions: i, name: h } = n;
    if (h === "border") return;
    if (t) return t;
    let m = ((i == null ? void 0 : i.defaultSet) ?? "").toLowerCase();
    m = m === "fa" || m === "fasvg" ? "fa" : m;
    const W = Ye[m];
    if (!W) throw new Error(`[VResizeDrawer]: No default ${i == null ? void 0 : i.defaultSet} icon set found.`);
    const $ = W[h];
    if (!$) throw new Error(`[VResizeDrawer]: No ${h} icon found.`);
    return $;
  })({ icon: e.value.handleIcon, iconOptions: B, name: e.value.handlePosition })), G = S(ve(String(v.value)));
  function be() {
    b.value = !0, l("drawer:mouseenter", b.value);
  }
  function Se() {
    b.value = !1, l("drawer:mouseleave", b.value);
  }
  function Z(a, n) {
    let t = n;
    e.value.location !== "right" && e.value.location !== "end" || (t = document.body.scrollWidth - t + G.value / 2), e.value.location !== "left" && e.value.location !== "start" || (t += G.value / 2), e.value.location === "top" && (t -= function(i) {
      const h = -29e-5 * i * i + -0.356 * i + 43.56;
      return Math.ceil(h);
    }(G.value)), e.value.location === "bottom" && (t = window.innerHeight - t + G.value / 2), s.value = E({ value: t }) || void 0, document.body.style.cursor = "grabbing", k("handle:touchmove", a), k("handle:drag", a);
  }
  function J(a) {
    var n, t;
    Z(a, w.value ? (n = a.touches[0]) == null ? void 0 : n.clientY : (t = a.touches[0]) == null ? void 0 : t.clientX);
  }
  function j(a) {
    Z(a, w.value ? a.clientY : a.clientX);
  }
  Object.keys(me).some((a) => a.includes(String(v.value))) && (G.value = ve(me[String(v.value)]));
  const H = p(() => {
    const a = w.value ? e.value.maxHeight : e.value.maxWidth;
    if (w.value && e.value.maxHeight === "100%") return window.innerHeight;
    if (e.value.maxHeight === "100%") return window.innerWidth;
    if (String(a).includes("%")) {
      const n = parseInt(String(a).replace("%", ""));
      return (w.value ? window.innerHeight : window.innerWidth) * n / 100;
    }
    return a;
  }), x = p(() => {
    const a = w.value ? e.value.minHeight : e.value.minWidth;
    if (w.value && e.value.minHeight === "100%") return window.innerHeight;
    if (e.value.minWidth === "100%") return window.innerWidth;
    if (String(a).includes("%")) {
      const n = parseInt(String(a).replace("%", ""));
      return (w.value ? window.innerHeight : window.innerWidth) * n / 100;
    }
    return a;
  });
  function Q(a) {
    let n = a;
    parseInt(n) >= parseInt(H.value) && (n = parseInt(H.value)), parseInt(n) <= parseInt(x.value) && (n = parseInt(x.value)), typeof n == "number" && (n = Math.round(n));
    let t = I(n);
    const i = I(H.value), h = I(x.value);
    return t >= i && (t = i), h >= t && (t = h), t;
  }
  function ke(a) {
    k("handle:click", a);
  }
  function We(a) {
    s.value = f.value, w.value && (s.value = A.value), q({ rail: e.value.rail, resizedAmount: s.value, saveAmount: e.value.saveHeight || e.value.saveWidth, storageName: z.value, storageType: e.value.storageType }), k("handle:dblclick", a);
  }
  function ee(a, n) {
    a.preventDefault(), a.stopPropagation();
    const t = a.type;
    let i = G.value;
    M.value = !0, e.value.handlePosition === "border" && (i = e.value.handleBorderWidth || 1), y.mouseUp = !1, n < i && (t === "touchstart" ? document.addEventListener("touchmove", J, !1) : document.addEventListener("mousemove", j, !1)), y.mouseDown || (y.mouseDown = !0, t === "touchstart" ? (document.addEventListener("touchend", T, !1), k("handle:touchstart", a)) : (document.addEventListener("mouseup", N, !1), k("handle:mousedown", a)));
  }
  function $e(a) {
    ee(a, w.value ? a.offsetY : a.offsetX);
  }
  function ae(a) {
    var t, i;
    let n = (w.value ? (t = a.touches[0]) == null ? void 0 : t.radiusY : (i = a.touches[0]) == null ? void 0 : i.radiusX) ?? 0;
    n /= 2, ee(a, n);
  }
  function te(a) {
    a.preventDefault(), a.stopPropagation();
    const n = a.type, t = _.value;
    M.value = !1, y.mouseDown = !1, w.value || (s.value = (t == null ? void 0 : t.width) ?? f.value), document.body.style.cursor = "";
    const i = s.value;
    String(i).includes("-") && (s.value = x.value), s.value = Q(s.value), s.value = E({ value: s.value }) || void 0, s.value = I(s.value), q({ rail: e.value.rail, resizedAmount: s.value, saveAmount: e.value.saveHeight || e.value.saveWidth, storageName: z.value, storageType: e.value.storageType }), y.mouseUp || (y.mouseUp = !0, n === "touchend" ? (document.removeEventListener("touchend", T, !1), document.removeEventListener("touchmove", J, !1), k("handle:touchend", a)) : (document.removeEventListener("mouseup", N, !1), document.removeEventListener("mousemove", j, !1), k("handle:mouseup", a)));
  }
  function N(a) {
    te(a);
  }
  function T(a) {
    te(a);
  }
  const Le = p(() => {
    var a;
    return e.value.theme ? e.value.theme : ((a = Y.global.current.value) == null ? void 0 : a.dark) === !0 ? "dark" : "light";
  });
  function k(a, n) {
    const t = parseInt(Q(s.value)) ?? 0, i = { e: n, eventName: a, offsetWidth: window.innerWidth - t + "px", resizedAmount: `${t}px`, resizedHeight: `${t}px`, resizedWidth: `${t}px`, width: `${t}px` };
    l(a, i);
  }
  return (a, n) => (O(), le(d(qe), Ne(d(g), { ref_key: "resizeDrawer", ref: _, class: d(ge), location: d(e).location, "model-value": a.modelValue, name: d(e).name, style: d(fe), tag: d(e).tag, theme: d(Le), width: d(we), onMouseenter: be, onMouseleave: Se }), { default: Te(() => [d(ye) ? (O(), ue("div", { key: 0, class: se(d(De)), style: de(d(Be)), onClick: ke, onDblclick: We, onMousedown: $e, onMouseup: N, onTouchend: T, onTouchstart: ae }, [d(U).handle ? (O(), ue("div", Xe, [R(a.$slots, "handle")])) : d(c) !== "border" ? (O(), le(Ue, { key: 1, class: se(["v-resize-drawer--handle-icon", d(Ae)]), icon: d(Ee), size: d(v), style: de(d(Ce)) }, null, 8, ["class", "icon", "size", "style"])) : V("", !0)], 38)) : V("", !0), d(U).prepend ? R(a.$slots, "prepend", { key: 1 }) : V("", !0), R(a.$slots, "default"), d(U).append ? R(a.$slots, "append", { key: 2 }) : V("", !0)]), _: 3 }, 16, ["class", "location", "model-value", "name", "style", "tag", "theme", "width"]));
} }), Fe = Symbol();
function ea(u = {}) {
  return { install: (r) => {
    r.provide(Fe, u), r.component("VResizeDrawer", Oe(() => import("./VResizeDrawer-BeVN9VIZ.mjs")));
  } };
}
export {
  Qe as VResizeDrawer,
  ea as createVResizeDrawer,
  Qe as default,
  Fe as globalOptions
};
(function(){"use strict";try{if(typeof document<"u"){var n=document.createElement("style");n.appendChild(document.createTextNode(".v-resize-drawer{container-name:v-resize-drawer;container-type:inline-size}.v-resize-drawer--handle-container{align-items:center;cursor:grab;display:flex;justify-content:center;position:absolute;z-index:1}.v-resize-drawer--handle-container-icon-parent-end,.v-resize-drawer--handle-container-icon-parent-right{left:initial;right:0}.v-resize-drawer--handle-container-icon-center-end,.v-resize-drawer--handle-container-icon-center-right{transform:rotate(180deg)}.v-resize-drawer--handle-container-icon-user-icon{transform:none}.v-resize-drawer--handle-container-icon-fa{font-size:.7rem!important}.v-resize-drawer--handle-container-parent-left,.v-resize-drawer--handle-container-parent-start,.v-resize-drawer--handle-container-parent-undefined{right:0}.v-resize-drawer--handle-container-parent-end,.v-resize-drawer--handle-container-parent-right{left:0}.v-resize-drawer--handle-container-position-top{top:0}.v-resize-drawer--handle-container-position-center{top:50%;transform:translateY(-50%)}.v-resize-drawer--handle-container-position-bottom{bottom:0}.v-resize-drawer--handle-container-position-border{cursor:col-resize;height:100%;top:0;width:8px}.v-resize-drawer--bottom{transition:min-height .3s}.v-resize-drawer--bottom .v-resize-drawer--handle-container-position-center{left:50%;top:0;transform:translate(-50%)}.v-resize-drawer--bottom .v-resize-drawer--handle-container-position-border{cursor:row-resize;left:0%;top:0!important;width:100%!important}.v-resize-drawer--top{top:0!important;transition:min-height .3s}.v-resize-drawer--top .v-resize-drawer--handle-container-position-center{bottom:1px;left:50%;top:unset;transform:translate(-50%)}.v-resize-drawer--top .v-resize-drawer--handle-container-position-border{bottom:0!important;cursor:row-resize;left:0%;top:unset;width:100%!important}.v-resize-drawer--bottom .v-navigation-drawer__content,.v-resize-drawer--top .v-navigation-drawer__content{flex:1 1 auto;position:relative}@container v-resize-drawer (width > 0) and (max-width: 599.98px){.v-col-xs-12{flex:0 0 100%!important;flex-basis:0;flex-grow:1;max-width:100%!important}}@container v-resize-drawer (min-width: 600px){.v-col-sm-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-sm-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-sm-3{flex:0 0 25%;max-width:25%}.v-col-sm-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-sm-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-sm-6{flex:0 0 50%;max-width:50%}.v-col-sm-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-sm-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-sm-9{flex:0 0 75%;max-width:75%}.v-col-sm-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-sm-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-sm-12{flex:0 0 100%;max-width:100%}}@container v-resize-drawer (min-width: 960px){.v-col-md-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-md-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-md-3{flex:0 0 25%;max-width:25%}.v-col-md-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-md-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-md-6{flex:0 0 50%;max-width:50%}.v-col-md-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-md-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-md-9{flex:0 0 75%;max-width:75%}.v-col-md-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-md-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-md-12{flex:0 0 100%;max-width:100%}}@container v-resize-drawer (min-width: 1280px){.v-col-lg-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-lg-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-lg-3{flex:0 0 25%;max-width:25%}.v-col-lg-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-lg-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-lg-6{flex:0 0 50%;max-width:50%}.v-col-lg-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-lg-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-lg-9{flex:0 0 75%;max-width:75%}.v-col-lg-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-lg-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-lg-12{flex:0 0 100%;max-width:100%}}@container v-resize-drawer (min-width: 1920px){.v-col-xl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-xl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-xl-3{flex:0 0 25%;max-width:25%}.v-col-xl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-xl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-xl-6{flex:0 0 50%;max-width:50%}.v-col-xl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-xl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-xl-9{flex:0 0 75%;max-width:75%}.v-col-xl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-xl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-xl-12{flex:0 0 100%;max-width:100%}}@container v-resize-drawer (min-width: 2560px){.v-col-xxl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-xxl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-xxl-3{flex:0 0 25%;max-width:25%}.v-col-xxl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-xxl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-xxl-6{flex:0 0 50%;max-width:50%}.v-col-xxl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-xxl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-xxl-9{flex:0 0 75%;max-width:75%}.v-col-xxl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-xxl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-xxl-12{flex:0 0 100%;max-width:100%}}@container v-resize-drawer only print{.hidden-print-only{display:none!important}}@container v-resize-drawer only print{.d-print-only-none{display:none!important}.d-print-only-inline{display:inline!important}.d-print-only-inline-block{display:inline-block!important}.d-print-only-block{display:block!important}.d-print-only-table{display:table!important}.d-print-only-table-row{display:table-row!important}.d-print-only-table-cell{display:table-cell!important}.d-print-only-flex{display:flex!important}.d-print-only-inline-flex{display:inline-flex!important}}@container v-resize-drawer only screen{.hidden-screen-only{display:none!important}}@container v-resize-drawer only screen{.d-screen-only-none{display:none!important}.d-screen-only-inline{display:inline!important}.d-screen-only-inline-block{display:inline-block!important}.d-screen-only-block{display:block!important}.d-screen-only-table{display:table!important}.d-screen-only-table-row{display:table-row!important}.d-screen-only-table-cell{display:table-cell!important}.d-screen-only-flex{display:flex!important}.d-screen-only-inline-flex{display:inline-flex!important}}@container v-resize-drawer (max-width: 599.98px){.hidden-xs{display:none!important}}@container v-resize-drawer (max-width: 599.98px){.d-xs-none{display:none!important}.d-xs-inline{display:inline!important}.d-xs-inline-block{display:inline-block!important}.d-xs-block{display:block!important}.d-xs-table{display:table!important}.d-xs-table-row{display:table-row!important}.d-xs-table-cell{display:table-cell!important}.d-xs-flex{display:flex!important}.d-xs-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 600px) and (max-width: 959.98px){.hidden-sm{display:none!important}}@container v-resize-drawer (min-width: 600px) and (max-width: 959.98px){.d-sm-none{display:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:flex!important}.d-sm-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 960px) and (max-width: 1279.98px){.hidden-md{display:none!important}}@container v-resize-drawer (min-width: 960px) and (max-width: 1279.98px){.d-md-none{display:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:flex!important}.d-md-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 1280px) and (max-width: 1919.98px){.hidden-lg{display:none!important}}@container v-resize-drawer (min-width: 1280px) and (max-width: 1919.98px){.d-lg-none{display:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:flex!important}.d-lg-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 1920px) and (max-width: 2559.98px){.hidden-xl{display:none!important}}@container v-resize-drawer (min-width: 1920px) and (max-width: 2559.98px){.d-xl-none{display:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:flex!important}.d-xl-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 2560px){.hidden-xxl{display:none!important}}@container v-resize-drawer (min-width: 2560px){.d-xxl-none{display:none!important}.d-xxl-inline{display:inline!important}.d-xxl-inline-block{display:inline-block!important}.d-xxl-block{display:block!important}.d-xxl-table{display:table!important}.d-xxl-table-row{display:table-row!important}.d-xxl-table-cell{display:table-cell!important}.d-xxl-flex{display:flex!important}.d-xxl-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 600px){.hidden-sm-and-up{display:none!important}}@container v-resize-drawer (min-width: 600px){.d-sm-and-up-none{display:none!important}.d-sm-and-up-inline{display:inline!important}.d-sm-and-up-inline-block{display:inline-block!important}.d-sm-and-up-block{display:block!important}.d-sm-and-up-table{display:table!important}.d-sm-and-up-table-row{display:table-row!important}.d-sm-and-up-table-cell{display:table-cell!important}.d-sm-and-up-flex{display:flex!important}.d-sm-and-up-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 960px){.hidden-md-and-up{display:none!important}}@container v-resize-drawer (min-width: 960px){.d-md-and-up-none{display:none!important}.d-md-and-up-inline{display:inline!important}.d-md-and-up-inline-block{display:inline-block!important}.d-md-and-up-block{display:block!important}.d-md-and-up-table{display:table!important}.d-md-and-up-table-row{display:table-row!important}.d-md-and-up-table-cell{display:table-cell!important}.d-md-and-up-flex{display:flex!important}.d-md-and-up-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 1280px){.hidden-lg-and-up{display:none!important}}@container v-resize-drawer (min-width: 1280px){.d-lg-and-up-none{display:none!important}.d-lg-and-up-inline{display:inline!important}.d-lg-and-up-inline-block{display:inline-block!important}.d-lg-and-up-block{display:block!important}.d-lg-and-up-table{display:table!important}.d-lg-and-up-table-row{display:table-row!important}.d-lg-and-up-table-cell{display:table-cell!important}.d-lg-and-up-flex{display:flex!important}.d-lg-and-up-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 1920px){.hidden-xl-and-up{display:none!important}}@container v-resize-drawer (min-width: 1920px){.d-xl-and-up-none{display:none!important}.d-xl-and-up-inline{display:inline!important}.d-xl-and-up-inline-block{display:inline-block!important}.d-xl-and-up-block{display:block!important}.d-xl-and-up-table{display:table!important}.d-xl-and-up-table-row{display:table-row!important}.d-xl-and-up-table-cell{display:table-cell!important}.d-xl-and-up-flex{display:flex!important}.d-xl-and-up-inline-flex{display:inline-flex!important}}@container v-resize-drawer (max-width: 959.98px){.hidden-sm-and-down{display:none!important}}@container v-resize-drawer (max-width: 959.98px){.d-sm-and-down-none{display:none!important}.d-sm-and-down-inline{display:inline!important}.d-sm-and-down-inline-block{display:inline-block!important}.d-sm-and-down-block{display:block!important}.d-sm-and-down-table{display:table!important}.d-sm-and-down-table-row{display:table-row!important}.d-sm-and-down-table-cell{display:table-cell!important}.d-sm-and-down-flex{display:flex!important}.d-sm-and-down-inline-flex{display:inline-flex!important}}@container v-resize-drawer (max-width: 1279.98px){.hidden-md-and-down{display:none!important}}@container v-resize-drawer (max-width: 1279.98px){.d-md-and-down-none{display:none!important}.d-md-and-down-inline{display:inline!important}.d-md-and-down-inline-block{display:inline-block!important}.d-md-and-down-block{display:block!important}.d-md-and-down-table{display:table!important}.d-md-and-down-table-row{display:table-row!important}.d-md-and-down-table-cell{display:table-cell!important}.d-md-and-down-flex{display:flex!important}.d-md-and-down-inline-flex{display:inline-flex!important}}@container v-resize-drawer (max-width: 1919.98px){.hidden-lg-and-down{display:none!important}}@container v-resize-drawer (max-width: 1919.98px){.d-lg-and-down-none{display:none!important}.d-lg-and-down-inline{display:inline!important}.d-lg-and-down-inline-block{display:inline-block!important}.d-lg-and-down-block{display:block!important}.d-lg-and-down-table{display:table!important}.d-lg-and-down-table-row{display:table-row!important}.d-lg-and-down-table-cell{display:table-cell!important}.d-lg-and-down-flex{display:flex!important}.d-lg-and-down-inline-flex{display:inline-flex!important}}@container v-resize-drawer (max-width: 2559.98px){.hidden-xl-and-down{display:none!important}}@container v-resize-drawer (max-width: 2559.98px){.d-xl-and-down-none{display:none!important}.d-xl-and-down-inline{display:inline!important}.d-xl-and-down-inline-block{display:inline-block!important}.d-xl-and-down-block{display:block!important}.d-xl-and-down-table{display:table!important}.d-xl-and-down-table-row{display:table-row!important}.d-xl-and-down-table-cell{display:table-cell!important}.d-xl-and-down-flex{display:flex!important}.d-xl-and-down-inline-flex{display:inline-flex!important}}")),document.head.appendChild(n)}}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})();
