import { Fragment as kt, reactive as Ht, computed as y, watchEffect as Ke, toRefs as Wt, warn as Yt, ref as j, unref as A, provide as Le, inject as X, shallowRef as Y, defineComponent as At, getCurrentInstance as Ut, onDeactivated as qt, onActivated as Xt, onBeforeUnmount as je, watch as q, onScopeDispose as Kt, effectScope as Zt, toRaw as Jt, isRef as me, onMounted as xe, readonly as Qt, createVNode as L, mergeProps as Ne, toRef as qe, Text as en, onBeforeMount as tn, Transition as nn, nextTick as an, mergeDefaults as on, useSlots as rn, onUnmounted as ln, openBlock as Be, createBlock as at, withCtx as un, createElementBlock as ot, normalizeClass as rt, normalizeStyle as lt, renderSlot as De, createCommentVNode as Ee } from "vue";
import { useTheme as sn, useDisplay as cn } from "vuetify";
/**
 * @name @wdns/vuetify-resize-drawer
 * @version 3.1.0
 * @description The vuetify-resize-drawer component extends the functionality of the v-navigation-drawer so that it is resizable by the user.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2024, WebDevNerdStuff
 * @homepage https://webdevnerdstuff.github.io/vuetify-resize-drawer/
 * @repository https://github.com/webdevnerdstuff/vuetify-resize-drawer
 * @license MIT License
 */
function P(e, n) {
  return (t) => Object.keys(e).reduce((o, r) => {
    const a = typeof e[r] == "object" && e[r] != null && !Array.isArray(e[r]) ? e[r] : { type: e[r] };
    return o[r] = t && r in t ? { ...a, default: t[r] } : a, n && !o[r].source && (o[r].source = n), o;
  }, {});
}
const $t = P({ class: [String, Array], style: { type: [String, Array, Object], default: null } }, "component");
function it(e, n, t) {
  (function(o, r) {
    if (r.has(o))
      throw new TypeError("Cannot initialize the same private elements twice on an object");
  })(e, n), n.set(e, t);
}
function dn(e, n, t) {
  return function(o, r, a) {
    if (r.set)
      r.set.call(o, a);
    else {
      if (!r.writable)
        throw new TypeError("attempted to set read only private field");
      r.value = a;
    }
  }(e, xt(e, n, "set"), t), t;
}
function Q(e, n) {
  return function(t, o) {
    return o.get ? o.get.call(t) : o.value;
  }(e, xt(e, n, "get"));
}
function xt(e, n, t) {
  if (!n.has(e))
    throw new TypeError("attempted to " + t + " private field on non-instance");
  return n.get(e);
}
function ue(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  return e == null || e === "" ? void 0 : isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${n}` : void 0;
}
function ut(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function _e(e, n) {
  return n.every((t) => e.hasOwnProperty(t));
}
function st(e, n) {
  return e + (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, n - e.length));
}
function se() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0;
  const o = {};
  for (const r in e)
    o[r] = e[r];
  for (const r in n) {
    const a = e[r], m = n[r];
    ut(a) && ut(m) ? o[r] = se(a, m, t) : Array.isArray(a) && Array.isArray(m) && t ? o[r] = t(a, m) : o[r] = m;
  }
  return o;
}
function Mt(e) {
  return e.map((n) => n.type === kt ? Mt(n.children) : n).flat();
}
function ee() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (ee.cache.has(e))
    return ee.cache.get(e);
  const n = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return ee.cache.set(e, n), n;
}
ee.cache = /* @__PURE__ */ new Map();
var ke = /* @__PURE__ */ new WeakMap(), oe = /* @__PURE__ */ new WeakMap();
class vn {
  constructor(n) {
    it(this, ke, { writable: !0, value: [] }), it(this, oe, { writable: !0, value: 0 }), this.size = n;
  }
  push(n) {
    Q(this, ke)[Q(this, oe)] = n, dn(this, oe, (Q(this, oe) + 1) % this.size);
  }
  values() {
    return Q(this, ke).slice(Q(this, oe)).concat(Q(this, ke).slice(0, Q(this, oe)));
  }
}
function It(e) {
  const n = Ht({}), t = y(e);
  return Ke(() => {
    for (const o in t.value)
      n[o] = t.value[o];
  }, { flush: "sync" }), Wt(n);
}
const re = 2.4, ct = 0.2126729, dt = 0.7151522, vt = 0.072175, hn = 0.55, mn = 0.58, pn = 0.57, gn = 0.62, We = 0.03, ht = 1.45, fn = 5e-4, yn = 1.25, wn = 1.25, mt = 0.078, pt = 12.82051282051282, Ae = 0.06, gt = 1e-3;
function ft(e, n) {
  const t = (e.r / 255) ** re, o = (e.g / 255) ** re, r = (e.b / 255) ** re, a = (n.r / 255) ** re, m = (n.g / 255) ** re, i = (n.b / 255) ** re;
  let c, w = t * ct + o * dt + r * vt, h = a * ct + m * dt + i * vt;
  if (w <= We && (w += (We - w) ** ht), h <= We && (h += (We - h) ** ht), Math.abs(h - w) < fn)
    return 0;
  if (h > w) {
    const f = (h ** hn - w ** mn) * yn;
    c = f < gt ? 0 : f < mt ? f - f * pt * Ae : f - Ae;
  } else {
    const f = (h ** gn - w ** pn) * wn;
    c = f > -gt ? 0 : f > -mt ? f - f * pt * Ae : f + Ae;
  }
  return 100 * c;
}
function Me(e) {
  Yt(`Vuetify: ${e}`);
}
function He(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
const yt = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, Fn = { rgb: (e, n, t, o) => ({ r: e, g: n, b: t, a: o }), rgba: (e, n, t, o) => ({ r: e, g: n, b: t, a: o }), hsl: (e, n, t, o) => wt({ h: e, s: n, l: t, a: o }), hsla: (e, n, t, o) => wt({ h: e, s: n, l: t, a: o }), hsv: (e, n, t, o) => pe({ h: e, s: n, v: t, a: o }), hsva: (e, n, t, o) => pe({ h: e, s: n, v: t, a: o }) };
function he(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && Me(`'${e}' is not a valid hex color`), { r: (16711680 & e) >> 16, g: (65280 & e) >> 8, b: 255 & e };
  if (typeof e == "string" && yt.test(e)) {
    const { groups: n } = e.match(yt), { fn: t, values: o } = n, r = o.split(/,\s*/).map((a) => a.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(t) ? parseFloat(a) / 100 : parseFloat(a));
    return Fn[t](...r);
  }
  if (typeof e == "string") {
    let n = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(n.length) ? n = n.split("").map((o) => o + o).join("") : [6, 8].includes(n.length) || Me(`'${e}' is not a valid hex(a) color`);
    const t = parseInt(n, 16);
    return (isNaN(t) || t < 0 || t > 4294967295) && Me(`'${e}' is not a valid hex(a) color`), function(o) {
      o = function(c) {
        return c.startsWith("#") && (c = c.slice(1)), c = c.replace(/([^0-9a-f])/gi, "F"), (c.length === 3 || c.length === 4) && (c = c.split("").map((w) => w + w).join("")), c.length !== 6 && (c = st(st(c, 6), 8, "F")), c;
      }(o);
      let [r, a, m, i] = function(c) {
        let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
        const h = [];
        let f = 0;
        for (; f < c.length; )
          h.push(c.substr(f, w)), f += w;
        return h;
      }(o, 2).map((c) => parseInt(c, 16));
      return i = i === void 0 ? i : i / 255, { r, g: a, b: m, a: i };
    }(n);
  }
  if (typeof e == "object") {
    if (_e(e, ["r", "g", "b"]))
      return e;
    if (_e(e, ["h", "s", "l"]))
      return pe(zt(e));
    if (_e(e, ["h", "s", "v"]))
      return pe(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function pe(e) {
  const { h: n, s: t, v: o, a: r } = e, a = (i) => {
    const c = (i + n / 60) % 6;
    return o - o * t * Math.max(Math.min(c, 4 - c, 1), 0);
  }, m = [a(5), a(3), a(1)].map((i) => Math.round(255 * i));
  return { r: m[0], g: m[1], b: m[2], a: r };
}
function wt(e) {
  return pe(zt(e));
}
function zt(e) {
  const { h: n, s: t, l: o, a: r } = e, a = o + t * Math.min(o, 1 - o);
  return { h: n, s: a === 0 ? 0 : 2 - 2 * o / a, v: a, a: r };
}
const Pe = Symbol.for("vuetify:defaults");
function Ze() {
  const e = X(Pe);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function bn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ze();
  const o = _("useDefaults");
  if (n = n ?? o.type.name ?? o.type.__name, !n)
    throw new Error("[Vuetify] Could not determine component name");
  const r = y(() => {
    var i;
    return (i = t.value) == null ? void 0 : i[e._as ?? n];
  }), a = new Proxy(e, { get(i, c) {
    var h, f, W, B;
    const w = Reflect.get(i, c);
    return c === "class" || c === "style" ? [(h = r.value) == null ? void 0 : h[c], w].filter(($) => $ != null) : typeof c != "string" || function($, S) {
      var V, R;
      return ((V = $.props) == null ? void 0 : V[S]) !== void 0 || ((R = $.props) == null ? void 0 : R[ee(S)]) !== void 0;
    }(o.vnode, c) ? w : ((f = r.value) == null ? void 0 : f[c]) ?? ((B = (W = t.value) == null ? void 0 : W.global) == null ? void 0 : B[c]) ?? w;
  } }), m = Y();
  return Ke(() => {
    if (r.value) {
      const i = Object.entries(r.value).filter((c) => {
        let [w] = c;
        return w.startsWith(w[0].toUpperCase());
      });
      m.value = i.length ? Object.fromEntries(i) : void 0;
    } else
      m.value = void 0;
  }), { props: a, provideSubDefaults: function() {
    const i = function(c) {
      let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _("injectSelf");
      const { provides: h } = w;
      if (h && c in h)
        return h[c];
    }(Pe, o);
    Le(Pe, y(() => m.value ? se((i == null ? void 0 : i.value) ?? {}, m.value) : i == null ? void 0 : i.value));
  } };
}
function Ve(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return Me("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = P(e.props ?? {}, e.name)();
    const n = Object.keys(e.props).filter((t) => t !== "class" && t !== "style");
    e.filterProps = function(t) {
      return function(o, r) {
        const a = {}, m = new Set(Object.keys(o));
        for (const i of r)
          m.has(i) && (a[i] = o[i]);
        return a;
      }(t, n);
    }, e.props._as = String, e.setup = function(t, o) {
      const r = Ze();
      if (!r.value)
        return e._setup(t, o);
      const { props: a, provideSubDefaults: m } = bn(t, t._as ?? e.name, r), i = e._setup(a, o);
      return m(), i;
    };
  }
  return e;
}
function Je() {
  let e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
  return (n) => (e ? Ve : At)(n);
}
function _(e, n) {
  const t = Ut();
  if (!t)
    throw new Error(`[Vuetify] ${e} ${n || "must be called from inside a setup function"}`);
  return t;
}
function Ie() {
  const e = _(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables").type;
  return ee((e == null ? void 0 : e.aliasName) || (e == null ? void 0 : e.name));
}
let Lt = 0, ze = /* @__PURE__ */ new WeakMap();
function Nt() {
  const e = _("getUid");
  if (ze.has(e))
    return ze.get(e);
  {
    const n = Lt++;
    return ze.set(e, n), n;
  }
}
function Pt(e) {
  _("useRender").render = e;
}
Nt.reset = () => {
  Lt = 0, ze = /* @__PURE__ */ new WeakMap();
};
const Sn = Symbol.for("vuetify:layout"), Cn = Symbol.for("vuetify:layout-item"), Bn = P({ name: { type: String }, order: { type: [Number, String], default: 0 }, absolute: Boolean }, "layout-item");
function $e(e, n) {
  let t;
  function o() {
    t = Zt(), t.run(() => n.length ? n(() => {
      t == null || t.stop(), o();
    }) : n());
  }
  q(e, (r) => {
    r && !t ? o() : r || (t == null || t.stop(), t = void 0);
  }, { immediate: !0 }), Kt(() => {
    t == null || t.stop();
  });
}
const Dn = Symbol.for("vuetify:locale"), Ft = Symbol.for("vuetify:theme"), Vt = P({ theme: String }, "theme");
function Tt(e) {
  _("provideTheme");
  const n = X(Ft, null);
  if (!n)
    throw new Error("Could not find Vuetify theme injection");
  const t = y(() => e.theme ?? n.name.value), o = y(() => n.themes.value[t.value]), r = y(() => n.isDisabled ? void 0 : `v-theme--${t.value}`), a = { ...n, name: t, current: o, themeClasses: r };
  return Le(Ft, a), a;
}
const Ot = P({ tag: { type: String, default: "div" } }, "tag"), En = P({ border: [Boolean, Number, String] }, "border");
function Rt(e) {
  return It(() => {
    const n = [], t = {};
    if (e.value.background)
      if (He(e.value.background)) {
        if (t.backgroundColor = e.value.background, !e.value.text && He(o = e.value.background) && !/^((rgb|hsl)a?\()?var\(--/.test(o)) {
          const r = he(e.value.background);
          if (r.a == null || r.a === 1) {
            const a = function(m) {
              const i = Math.abs(ft(he(0), he(m)));
              return Math.abs(ft(he(16777215), he(m))) > Math.min(i, 50) ? "#fff" : "#000";
            }(r);
            t.color = a, t.caretColor = a;
          }
        }
      } else
        n.push(`bg-${e.value.background}`);
    var o;
    return e.value.text && (He(e.value.text) ? (t.color = e.value.text, t.caretColor = e.value.text) : n.push(`text-${e.value.text}`)), { colorClasses: n, colorStyles: t };
  });
}
function bt(e, n) {
  const t = y(() => ({ background: me(e) ? e.value : n ? e[n] : null })), { colorClasses: o, colorStyles: r } = Rt(t);
  return { backgroundColorClasses: o, backgroundColorStyles: r };
}
const kn = P({ elevation: { type: [Number, String], validator(e) {
  const n = parseInt(e);
  return !isNaN(n) && n >= 0 && n <= 24;
} } }, "elevation"), Wn = P({ rounded: { type: [Boolean, Number, String], default: void 0 } }, "rounded"), Gt = [String, Function, Object, Array], An = Symbol.for("vuetify:icons"), Te = P({ icon: { type: Gt }, tag: { type: String, required: !0 } }, "icon"), St = Je()({ name: "VComponentIcon", props: Te(), setup(e, n) {
  let { slots: t } = n;
  return () => {
    const o = e.icon;
    return L(e.tag, null, { default: () => {
      var r;
      return [e.icon ? L(o, null, null) : (r = t.default) == null ? void 0 : r.call(t)];
    } });
  };
} }), $n = Ve({ name: "VSvgIcon", inheritAttrs: !1, props: Te(), setup(e, n) {
  let { attrs: t } = n;
  return () => L(e.tag, Ne(t, { style: null }), { default: () => [L("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((o) => Array.isArray(o) ? L("path", { d: o[0], "fill-opacity": o[1] }, null) : L("path", { d: o }, null)) : L("path", { d: e.icon }, null)])] });
} });
Ve({ name: "VLigatureIcon", props: Te(), setup: (e) => () => L(e.tag, null, { default: () => [e.icon] }) }), Ve({ name: "VClassIcon", props: Te(), setup: (e) => () => L(e.tag, { class: e.icon }, null) });
const xn = ["x-small", "small", "default", "large", "x-large"], Mn = P({ size: { type: [String, Number], default: "default" } }, "size"), In = P({ color: String, start: Boolean, end: Boolean, icon: Gt, ...$t(), ...Mn(), ...Ot({ tag: "i" }), ...Vt() }, "VIcon"), zn = Je()({ name: "VIcon", props: In(), setup(e, n) {
  let { attrs: t, slots: o } = n;
  const r = j(), { themeClasses: a } = Tt(e), { iconData: m } = ((h) => {
    const f = X(An);
    if (!f)
      throw new Error("Missing Vuetify Icons provide!");
    return { iconData: y(() => {
      var V;
      const W = A(h);
      if (!W)
        return { component: St };
      let B = W;
      if (typeof B == "string" && (B = B.trim(), B.startsWith("$") && (B = (V = f.aliases) == null ? void 0 : V[B.slice(1)])), !B)
        throw new Error(`Could not find aliased icon "${W}"`);
      if (Array.isArray(B))
        return { component: $n, icon: B };
      if (typeof B != "string")
        return { component: St, icon: B };
      const $ = Object.keys(f.sets).find((R) => typeof B == "string" && B.startsWith(`${R}:`)), S = $ ? B.slice($.length + 1) : B;
      return { component: f.sets[$ ?? f.defaultSet].component, icon: S };
    }) };
  })(y(() => r.value || e.icon)), { sizeClasses: i } = function(h) {
    let f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ie();
    return It(() => {
      let W, B;
      var $, S;
      return $ = xn, S = h.size, $.includes(S) ? W = `${f}--size-${h.size}` : h.size && (B = { width: ue(h.size), height: ue(h.size) }), { sizeClasses: W, sizeStyles: B };
    });
  }(e), { textColorClasses: c, textColorStyles: w } = function(h, f) {
    const W = y(() => ({ text: me(h) ? h.value : f ? h[f] : null })), { colorClasses: B, colorStyles: $ } = Rt(W);
    return { textColorClasses: B, textColorStyles: $ };
  }(qe(e, "color"));
  return Pt(() => {
    var f, W;
    const h = (f = o.default) == null ? void 0 : f.call(o);
    return h && (r.value = (W = Mt(h).filter((B) => B.type === en && B.children && typeof B.children == "string")[0]) == null ? void 0 : W.children), L(m.value.component, { tag: e.tag, icon: m.value.icon, class: ["v-icon", "notranslate", a.value, i.value, c.value, { "v-icon--clickable": !!t.onClick, "v-icon--start": e.start, "v-icon--end": e.end }, e.class], style: [i.value ? void 0 : { fontSize: ue(e.size), height: ue(e.size), width: ue(e.size) }, w.value, e.style], role: t.onClick ? "button" : void 0, "aria-hidden": !t.onClick }, { default: () => [h] });
  }), {};
} }), Ln = Symbol.for("vuetify:display"), Nn = P({ mobileBreakpoint: [Number, String] }, "display"), Pn = 100, Vn = 20;
function Ct(e) {
  return (e < 0 ? -1 : 1) * Math.sqrt(Math.abs(e)) * 1.41421356237;
}
function Bt(e) {
  if (e.length < 2)
    return 0;
  if (e.length === 2)
    return e[1].t === e[0].t ? 0 : (e[1].d - e[0].d) / (e[1].t - e[0].t);
  let n = 0;
  for (let t = e.length - 1; t > 0; t--) {
    if (e[t].t === e[t - 1].t)
      continue;
    const o = Ct(n), r = (e[t].d - e[t - 1].d) / (e[t].t - e[t - 1].t);
    n += (r - o) * Math.abs(r), t === e.length - 1 && (n *= 0.5);
  }
  return 1e3 * Ct(n);
}
function Tn() {
  const e = {};
  return { addMovement: function(n) {
    Array.from(n.changedTouches).forEach((t) => {
      (e[t.identifier] ?? (e[t.identifier] = new vn(Vn))).push([n.timeStamp, t]);
    });
  }, endTouch: function(n) {
    Array.from(n.changedTouches).forEach((t) => {
      delete e[t.identifier];
    });
  }, getVelocity: function(n) {
    var m;
    const t = (m = e[n]) == null ? void 0 : m.values().reverse();
    if (!t)
      throw new Error(`No samples for touch id ${n}`);
    const o = t[0], r = [], a = [];
    for (const i of t) {
      if (o[0] - i[0] > Pn)
        break;
      r.push({ t: i[0], d: i[1].clientX }), a.push({ t: i[0], d: i[1].clientY });
    }
    return { x: Bt(r), y: Bt(a), get direction() {
      const { x: i, y: c } = this, [w, h] = [Math.abs(i), Math.abs(c)];
      return w > h && i >= 0 ? "right" : w > h && i <= 0 ? "left" : h > w && c >= 0 ? "down" : h > w && c <= 0 ? "up" : function() {
        throw new Error();
      }();
    } };
  } };
}
function le() {
  throw new Error();
}
const On = ["start", "end", "left", "right", "top", "bottom"], Rn = P({ color: String, disableResizeWatcher: Boolean, disableRouteWatcher: Boolean, expandOnHover: Boolean, floating: Boolean, modelValue: { type: Boolean, default: null }, permanent: Boolean, rail: { type: Boolean, default: null }, railWidth: { type: [Number, String], default: 56 }, scrim: { type: [Boolean, String], default: !0 }, image: String, temporary: Boolean, touchless: Boolean, width: { type: [Number, String], default: 256 }, location: { type: String, default: "start", validator: (e) => On.includes(e) }, sticky: Boolean, ...En(), ...$t(), ...Nn(), ...kn(), ...Bn(), ...Wn(), ...Ot({ tag: "nav" }), ...Vt() }, "VNavigationDrawer"), Gn = Je()({ name: "VNavigationDrawer", props: Rn(), emits: { "update:modelValue": (e) => !0, "update:rail": (e) => !0 }, setup(e, n) {
  var be, Se;
  let { attrs: t, emit: o, slots: r } = n;
  const { isRtl: a } = function() {
    const s = X(Dn);
    if (!s)
      throw new Error("[Vuetify] Could not find injected rtl instance");
    return { isRtl: s.isRtl, rtlClasses: s.rtlClasses };
  }(), { themeClasses: m } = Tt(e), { borderClasses: i } = function(s) {
    let v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ie();
    return { borderClasses: y(() => {
      const F = me(s) ? s.value : s.border, b = [];
      if (F === !0 || F === "")
        b.push(`${v}--border`);
      else if (typeof F == "string" || F === 0)
        for (const D of String(F).split(" "))
          b.push(`border-${D}`);
      return b;
    }) };
  }(e), { backgroundColorClasses: c, backgroundColorStyles: w } = bt(qe(e, "color")), { elevationClasses: h } = function(s) {
    return { elevationClasses: y(() => {
      const v = me(s) ? s.value : s.elevation, F = [];
      return v == null || F.push(`elevation-${v}`), F;
    }) };
  }(e), { displayClasses: f, mobile: W } = function() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ie();
    const F = X(Ln);
    if (!F)
      throw new Error("Could not find Vuetify display injection");
    const b = y(() => {
      if (!s.mobileBreakpoint)
        return F.mobile.value;
      const p = typeof s.mobileBreakpoint == "number" ? s.mobileBreakpoint : F.thresholds.value[s.mobileBreakpoint];
      return F.width.value < p;
    }), D = y(() => v ? { [`${v}--mobile`]: b.value } : {});
    return { ...F, displayClasses: D, mobile: b };
  }(e), { roundedClasses: B } = function(s) {
    let v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ie();
    return { roundedClasses: y(() => {
      const F = me(s) ? s.value : s.rounded, b = [];
      if (F === !0 || F === "")
        b.push(`${v}--rounded`);
      else if (typeof F == "string" || F === 0)
        for (const D of String(F).split(" "))
          b.push(`rounded-${D}`);
      return b;
    }) };
  }(e), $ = (Se = (be = _("useRouter")) == null ? void 0 : be.proxy) == null ? void 0 : Se.$router, S = function(s, v, F) {
    let b = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (d) => d, D = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (d) => d;
    const p = _("useProxiedModel"), k = j(s[v] !== void 0 ? s[v] : F), l = ee(v), u = y(l !== v ? () => {
      var d, C, E, M;
      return s[v], !(!((d = p.vnode.props) != null && d.hasOwnProperty(v)) && !((C = p.vnode.props) != null && C.hasOwnProperty(l)) || !((E = p.vnode.props) != null && E.hasOwnProperty(`onUpdate:${v}`)) && !((M = p.vnode.props) != null && M.hasOwnProperty(`onUpdate:${l}`)));
    } : () => {
      var d, C;
      return s[v], !(!((d = p.vnode.props) != null && d.hasOwnProperty(v)) || !((C = p.vnode.props) != null && C.hasOwnProperty(`onUpdate:${v}`)));
    });
    $e(() => !u.value, () => {
      q(() => s[v], (d) => {
        k.value = d;
      });
    });
    const g = y({ get() {
      const d = s[v];
      return b(u.value ? d : k.value);
    }, set(d) {
      const C = D(d), E = Jt(u.value ? s[v] : k.value);
      E !== C && b(E) !== d && (k.value = C, p == null || p.emit(`update:${v}`, C));
    } });
    return Object.defineProperty(g, "externalValue", { get: () => u.value ? s[v] : k.value }), g;
  }(e, "modelValue", null, (s) => !!s), { ssrBootStyles: V } = function() {
    const s = Y(!1);
    return xe(() => {
      window.requestAnimationFrame(() => {
        s.value = !0;
      });
    }), { ssrBootStyles: y(() => s.value ? void 0 : { transition: "none !important" }), isBooted: Qt(s) };
  }(), { scopeId: R } = function() {
    const s = _("useScopeId").vnode.scopeId;
    return { scopeId: s ? { [s]: "" } : void 0 };
  }(), ge = j(), K = Y(!1), ce = y(() => e.rail && e.expandOnHover && K.value ? Number(e.width) : Number(e.rail ? e.railWidth : e.width)), te = y(() => /* @__PURE__ */ function(s, v) {
    return s === "start" ? v ? "right" : "left" : s === "end" ? v ? "left" : "right" : s;
  }(e.location, a.value)), G = y(() => !e.permanent && (W.value || e.temporary)), de = y(() => e.sticky && !G.value && te.value !== "bottom");
  $e(() => e.expandOnHover && e.rail != null, () => {
    q(K, (s) => o("update:rail", !s));
  }), $e(() => !e.disableResizeWatcher, () => {
    q(G, (s) => !e.permanent && an(() => S.value = !s));
  }), $e(() => !e.disableRouteWatcher && !!$, () => {
    q($.currentRoute, () => G.value && (S.value = !1));
  }), q(() => e.permanent, (s) => {
    s && (S.value = !0);
  }), tn(() => {
    e.modelValue != null || G.value || (S.value = e.permanent || !W.value);
  });
  const { isDragging: Z, dragProgress: fe, dragStyles: Oe } = function(s) {
    let { isActive: v, isTemporary: F, width: b, touchless: D, position: p } = s;
    xe(() => {
      window.addEventListener("touchstart", et, { passive: !0 }), window.addEventListener("touchmove", tt, { passive: !1 }), window.addEventListener("touchend", nt, { passive: !0 });
    }), je(() => {
      window.removeEventListener("touchstart", et), window.removeEventListener("touchmove", tt), window.removeEventListener("touchend", nt);
    });
    const k = y(() => ["left", "right"].includes(p.value)), { addMovement: l, endTouch: u, getVelocity: g } = Tn();
    let d = !1;
    const C = Y(!1), E = Y(0), M = Y(0);
    let N;
    function T(x, I) {
      return (p.value === "left" ? x : p.value === "right" ? document.documentElement.clientWidth - x : p.value === "top" ? x : p.value === "bottom" ? document.documentElement.clientHeight - x : le()) - (I ? b.value : 0);
    }
    function Qe(x) {
      let I = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
      const z = p.value === "left" ? (x - M.value) / b.value : p.value === "right" ? (document.documentElement.clientWidth - x - M.value) / b.value : p.value === "top" ? (x - M.value) / b.value : p.value === "bottom" ? (document.documentElement.clientHeight - x - M.value) / b.value : le();
      return I ? Math.max(0, Math.min(1, z)) : z;
    }
    function et(x) {
      if (D.value)
        return;
      const I = x.changedTouches[0].clientX, z = x.changedTouches[0].clientY, H = p.value === "left" ? I < 25 : p.value === "right" ? I > document.documentElement.clientWidth - 25 : p.value === "top" ? z < 25 : p.value === "bottom" ? z > document.documentElement.clientHeight - 25 : le(), U = v.value && (p.value === "left" ? I < b.value : p.value === "right" ? I > document.documentElement.clientWidth - b.value : p.value === "top" ? z < b.value : p.value === "bottom" ? z > document.documentElement.clientHeight - b.value : le());
      (H || U || v.value && F.value) && (d = !0, N = [I, z], M.value = T(k.value ? I : z, v.value), E.value = Qe(k.value ? I : z), u(x), l(x));
    }
    function tt(x) {
      const I = x.changedTouches[0].clientX, z = x.changedTouches[0].clientY;
      if (d) {
        if (!x.cancelable)
          return void (d = !1);
        const U = Math.abs(I - N[0]), Ce = Math.abs(z - N[1]);
        (k.value ? U > Ce && U > 3 : Ce > U && Ce > 3) ? (C.value = !0, d = !1) : (k.value ? Ce : U) > 3 && (d = !1);
      }
      if (!C.value)
        return;
      x.preventDefault(), l(x);
      const H = Qe(k.value ? I : z, !1);
      E.value = Math.max(0, Math.min(1, H)), H > 1 ? M.value = T(k.value ? I : z, !0) : H < 0 && (M.value = T(k.value ? I : z, !1));
    }
    function nt(x) {
      if (d = !1, !C.value)
        return;
      l(x), C.value = !1;
      const I = g(x.changedTouches[0].identifier), z = Math.abs(I.x), H = Math.abs(I.y), U = k.value ? z > H && z > 400 : H > z && H > 3;
      v.value = U ? I.direction === ({ left: "right", right: "left", top: "down", bottom: "up" }[p.value] || le()) : E.value > 0.5;
    }
    const _t = y(() => C.value ? { transform: p.value === "left" ? `translateX(calc(-100% + ${E.value * b.value}px))` : p.value === "right" ? `translateX(calc(100% - ${E.value * b.value}px))` : p.value === "top" ? `translateY(calc(-100% + ${E.value * b.value}px))` : p.value === "bottom" ? `translateY(calc(100% - ${E.value * b.value}px))` : le(), transition: "none" } : void 0);
    return { isDragging: C, dragProgress: E, dragStyles: _t };
  }({ isActive: S, isTemporary: G, width: ce, touchless: qe(e, "touchless"), position: te }), Re = y(() => {
    const s = G.value ? 0 : e.rail && e.expandOnHover ? Number(e.railWidth) : ce.value;
    return Z.value ? s * fe.value : s;
  }), { layoutItemStyles: ye, layoutItemScrimStyles: Ge } = function(s) {
    const v = X(Sn);
    if (!v)
      throw new Error("[Vuetify] Could not find injected layout");
    const F = s.id ?? `layout-item-${Nt()}`, b = _("useLayoutItem");
    Le(Cn, { id: F });
    const D = Y(!1);
    qt(() => D.value = !0), Xt(() => D.value = !1);
    const { layoutItemStyles: p, layoutItemScrimStyles: k } = v.register(b, { ...s, active: y(() => !D.value && s.active.value), id: F });
    return je(() => v.unregister(F)), { layoutItemStyles: p, layoutRect: v.layoutRect, layoutItemScrimStyles: k };
  }({ id: e.name, order: y(() => parseInt(e.order, 10)), position: te, layoutSize: Re, elementSize: ce, active: y(() => S.value || Z.value), disableTransitions: y(() => Z.value), absolute: y(() => e.absolute || de.value && typeof ve.value != "string") }), { isStuck: ve, stickyStyles: we } = function(s) {
    let { rootEl: v, isSticky: F, layoutItemStyles: b } = s;
    const D = Y(!1), p = Y(0), k = y(() => {
      const g = typeof D.value == "boolean" ? "top" : D.value;
      return [F.value ? { top: "auto", bottom: "auto", height: void 0 } : void 0, D.value ? { [g]: ue(p.value) } : { top: b.value.top }];
    });
    xe(() => {
      q(F, (g) => {
        g ? window.addEventListener("scroll", u, { passive: !0 }) : window.removeEventListener("scroll", u);
      }, { immediate: !0 });
    }), je(() => {
      window.removeEventListener("scroll", u);
    });
    let l = 0;
    function u() {
      const g = l > window.scrollY ? "up" : "down", d = v.value.getBoundingClientRect(), C = parseFloat(b.value.top ?? 0), E = window.scrollY - Math.max(0, p.value - C), M = d.height + Math.max(p.value, C) - window.scrollY - window.innerHeight, N = parseFloat(getComputedStyle(v.value).getPropertyValue("--v-body-scroll-y")) || 0;
      d.height < window.innerHeight - C ? (D.value = "top", p.value = C) : g === "up" && D.value === "bottom" || g === "down" && D.value === "top" ? (p.value = window.scrollY + d.top - N, D.value = !0) : g === "down" && M <= 0 ? (p.value = 0, D.value = "bottom") : g === "up" && E <= 0 && (N ? D.value !== "top" && (p.value = -E + N + C, D.value = "top") : (p.value = d.top + E, D.value = "top")), l = window.scrollY;
    }
    return { isStuck: D, stickyStyles: k };
  }({ rootEl: ge, isSticky: de, layoutItemStyles: ye }), ne = bt(y(() => typeof e.scrim == "string" ? e.scrim : null)), ae = y(() => ({ ...Z.value ? { opacity: 0.2 * fe.value, transition: "none" } : void 0, ...Ge.value }));
  function J() {
    K.value = !0;
  }
  function Fe() {
    K.value = !1;
  }
  return function(s, v) {
    const F = Ze(), b = j(s), D = y(() => {
      if (A(v == null ? void 0 : v.disabled))
        return F.value;
      const p = A(v == null ? void 0 : v.scoped), k = A(v == null ? void 0 : v.reset), l = A(v == null ? void 0 : v.root);
      if (b.value == null && !(p || k || l))
        return F.value;
      let u = se(b.value, { prev: F.value });
      if (p)
        return u;
      if (k || l) {
        const g = Number(k || 1 / 0);
        for (let d = 0; d <= g && u && "prev" in u; d++)
          u = u.prev;
        return u && typeof l == "string" && l in u && (u = se(se(u, { prev: u }), u[l])), u;
      }
      return u.prev ? se(u.prev, u) : u;
    });
    Le(Pe, D);
  }({ VList: { bgColor: "transparent" } }), Pt(() => {
    const s = r.image || e.image;
    return L(kt, null, [L(e.tag, Ne({ ref: ge, onMouseenter: J, onMouseleave: Fe, class: ["v-navigation-drawer", `v-navigation-drawer--${te.value}`, { "v-navigation-drawer--expand-on-hover": e.expandOnHover, "v-navigation-drawer--floating": e.floating, "v-navigation-drawer--is-hovering": K.value, "v-navigation-drawer--rail": e.rail, "v-navigation-drawer--temporary": G.value, "v-navigation-drawer--active": S.value, "v-navigation-drawer--sticky": de.value }, m.value, c.value, i.value, f.value, h.value, B.value, e.class], style: [w.value, ye.value, Oe.value, V.value, we.value, e.style] }, R, t), { default: () => {
      var v, F, b, D;
      return [s && L("div", { key: "image", class: "v-navigation-drawer__img" }, [r.image ? (v = r.image) == null ? void 0 : v.call(r, { image: e.image }) : L("img", { src: e.image, alt: "" }, null)]), r.prepend && L("div", { class: "v-navigation-drawer__prepend" }, [(F = r.prepend) == null ? void 0 : F.call(r)]), L("div", { class: "v-navigation-drawer__content" }, [(b = r.default) == null ? void 0 : b.call(r)]), r.append && L("div", { class: "v-navigation-drawer__append" }, [(D = r.append) == null ? void 0 : D.call(r)])];
    } }), L(nn, { name: "fade-transition" }, { default: () => [G.value && (Z.value || S.value) && !!e.scrim && L("div", Ne({ class: ["v-navigation-drawer__scrim", ne.backgroundColorClasses.value], style: [ae.value, ne.backgroundColorStyles.value], onClick: () => S.value = !1 }, R), null)] })]);
  }), { isStuck: ve };
} }), O = "v-resize-drawer", jn = { handleBorderWidth: 8, handleColor: "primary", handleIcon: void 0, handleIconSize: "x-small", handlePosition: "center", height: void 0, location: "start", maxWidth: window.innerWidth, minWidth: 56, modelValue: !0, name: O, rail: !1, railWidth: 8, resizable: !0, saveWidth: !0, storageName: `${O}-width`, storageType: "local", tag: "nav", theme: "light", touchless: !1, width: 256, widthSnapBack: !0 };
function Xe(e, n) {
  return e === "local" ? localStorage.getItem(n) : e === "session" ? sessionStorage.getItem(n) : "";
}
const Ye = (e) => {
  const { action: n = "update", rail: t, resizedWidth: o, saveWidth: r, storageName: a, storageType: m } = e;
  if (!r || t)
    return;
  let i = o;
  i = i ?? void 0, n === "set" && (i = Xe(m, a) ?? "", i = i || o), m === "local" && localStorage.setItem(a, String(i)), m === "session" && sessionStorage.setItem(a, String(i));
}, ie = (e) => {
  const { unit: n = "px", value: t } = e;
  if (t != null && t !== "")
    return +t ? `${Number(t)}${n}` : String(t);
}, Ue = (e) => {
  const n = window.innerWidth, t = function(o) {
    if (typeof o == "string") {
      const r = /(\d+(\.\d+)?)(\s*([a-zA-Z]+))?/, a = o.match(r);
      if (!a)
        return o;
      const m = parseFloat(a[1]), i = a[4];
      if (!isNaN(m)) {
        const c = Math.round(m);
        return i ? `${c} ${i}` : `${c}`;
      }
      return o;
    }
    return typeof o == "number" ? Math.round(o) : o;
  }(e);
  return typeof e == "string" && e.includes("%") ? Number(e.replace("%", "")) / 100 * n : typeof t == "string" ? Number(t.replace(/\D/g, "")) : t;
};
function Dt(e) {
  let n = function(h) {
    const f = { AliceBlue: "#F0F8FF", AntiqueWhite: "#FAEBD7", Aqua: "#00FFFF", Aquamarine: "#7FFFD4", Azure: "#F0FFFF", Beige: "#F5F5DC", Bisque: "#FFE4C4", Black: "#000000", BlanchedAlmond: "#FFEBCD", Blue: "#0000FF", BlueViolet: "#8A2BE2", Brown: "#A52A2A", BurlyWood: "#DEB887", CadetBlue: "#5F9EA0", Chartreuse: "#7FFF00", Chocolate: "#D2691E", Coral: "#FF7F50", CornflowerBlue: "#6495ED", Cornsilk: "#FFF8DC", Crimson: "#DC143C", Cyan: "#00FFFF", DarkBlue: "#00008B", DarkCyan: "#008B8B", DarkGoldenRod: "#B8860B", DarkGray: "#A9A9A9", DarkGreen: "#006400", DarkGrey: "#A9A9A9", DarkKhaki: "#BDB76B", DarkMagenta: "#8B008B", DarkOliveGreen: "#556B2F", DarkOrange: "#FF8C00", DarkOrchid: "#9932CC", DarkRed: "#8B0000", DarkSalmon: "#E9967A", DarkSeaGreen: "#8FBC8F", DarkSlateBlue: "#483D8B", DarkSlateGray: "#2F4F4F", DarkSlateGrey: "#2F4F4F", DarkTurquoise: "#00CED1", DarkViolet: "#9400D3", DeepPink: "#FF1493", DeepSkyBlue: "#00BFFF", DimGray: "#696969", DimGrey: "#696969", DodgerBlue: "#1E90FF", FireBrick: "#B22222", FloralWhite: "#FFFAF0", ForestGreen: "#228B22", Fuchsia: "#FF00FF", Gainsboro: "#DCDCDC", GhostWhite: "#F8F8FF", Gold: "#FFD700", GoldenRod: "#DAA520", Gray: "#808080", Green: "#008000", GreenYellow: "#ADFF2F", Grey: "#808080", HoneyDew: "#F0FFF0", HotPink: "#FF69B4", IndianRed: "#CD5C5C", Indigo: "#4B0082", Ivory: "#FFFFF0", Khaki: "#F0E68C", Lavender: "#E6E6FA", LavenderBlush: "#FFF0F5", LawnGreen: "#7CFC00", LemonChiffon: "#FFFACD", LightBlue: "#ADD8E6", LightCoral: "#F08080", LightCyan: "#E0FFFF", LightGoldenRodYellow: "#FAFAD2", LightGray: "#D3D3D3", LightGreen: "#90EE90", LightGrey: "#D3D3D3", LightPink: "#FFB6C1", LightSalmon: "#FFA07A", LightSeaGreen: "#20B2AA", LightSkyBlue: "#87CEFA", LightSlateGray: "#778899", LightSlateGrey: "#778899", LightSteelBlue: "#B0C4DE", LightYellow: "#FFFFE0", Lime: "#00FF00", LimeGreen: "#32CD32", Linen: "#FAF0E6", Magenta: "#FF00FF", Maroon: "#800000", MediumAquaMarine: "#66CDAA", MediumBlue: "#0000CD", MediumOrchid: "#BA55D3", MediumPurple: "#9370DB", MediumSeaGreen: "#3CB371", MediumSlateBlue: "#7B68EE", MediumSpringGreen: "#00FA9A", MediumTurquoise: "#48D1CC", MediumVioletRed: "#C71585", MidnightBlue: "#191970", MintCream: "#F5FFFA", MistyRose: "#FFE4E1", Moccasin: "#FFE4B5", NavajoWhite: "#FFDEAD", Navy: "#000080", OldLace: "#FDF5E6", Olive: "#808000", OliveDrab: "#6B8E23", Orange: "#FFA500", OrangeRed: "#FF4500", Orchid: "#DA70D6", PaleGoldenRod: "#EEE8AA", PaleGreen: "#98FB98", PaleTurquoise: "#AFEEEE", PaleVioletRed: "#DB7093", PapayaWhip: "#FFEFD5", PeachPuff: "#FFDAB9", Peru: "#CD853F", Pink: "#FFC0CB", Plum: "#DDA0DD", PowderBlue: "#B0E0E6", Purple: "#800080", RebeccaPurple: "#663399", Red: "#FF0000", RosyBrown: "#BC8F8F", RoyalBlue: "#4169E1", SaddleBrown: "#8B4513", Salmon: "#FA8072", SandyBrown: "#F4A460", SeaGreen: "#2E8B57", SeaShell: "#FFF5EE", Sienna: "#A0522D", Silver: "#C0C0C0", SkyBlue: "#87CEEB", SlateBlue: "#6A5ACD", SlateGray: "#708090", SlateGrey: "#708090", Snow: "#FFFAFA", SpringGreen: "#00FF7F", SteelBlue: "#4682B4", Tan: "#D2B48C", Teal: "#008080", Thistle: "#D8BFD8", Tomato: "#FF6347", Turquoise: "#40E0D0", Violet: "#EE82EE", Wheat: "#F5DEB3", White: "#FFFFFF", WhiteSmoke: "#F5F5F5", Yellow: "#FFFF00", YellowGreen: "#9ACD32" };
    let W = h;
    return Object.entries(f).forEach(([B, $]) => {
      h.toLowerCase() != B.toLowerCase() || (W = $);
    }), W;
  }(e), t = 0, o = 0, r = 0, a = 0, m = 0, i = 0;
  if (n.substring(0, 1) === "#")
    n = function(h) {
      let f = h.replace("#", "");
      f.length === 3 && (f = f.split("").map((S) => S + S).join(""));
      const W = parseInt(f.substring(0, 2), 16), B = parseInt(f.substring(2, 4), 16), $ = parseInt(f.substring(4, 6), 16);
      return [W, B, $];
    }(n);
  else if (n.includes("rgb"))
    n = [...n.matchAll(/\d+/g)].map(Number);
  else if (n.includes("hsl"))
    return n = [...n.matchAll(/\d+/g)].map(Number), t = n[0], o = n[1], r = n[2], `${t} ${o}% ${r}%`;
  [a, m, i] = n, a /= 255, m /= 255, i /= 255;
  const c = Math.max(a, m, i), w = Math.min(a, m, i);
  if (c === null || !w === null || isNaN(c) || isNaN(w))
    return "0 0% 100% / 12%";
  if (t = (c + w) / 2, o = (c + w) / 2, r = (c + w) / 2, c == w)
    t = o = 0;
  else {
    const h = c - w;
    switch (o = r > 0.5 ? h / (2 - c - w) : h / (c + w), c) {
      case a:
        t = (m - i) / h + (m < i ? 6 : 0);
        break;
      case m:
        t = (i - a) / h + 2;
        break;
      case i:
        t = (a - m) / h + 4;
    }
    t /= 6;
  }
  return t = Math.round(360 * t), o = Math.round(100 * o), r = Math.round(100 * r), `${t} ${o}% ${r}%`;
}
const Et = (e, n) => {
  if (/* @__PURE__ */ function(o) {
    return o === "transparent" || o === "none" || o === "inherit" || o === "currentColor" || o === "initial" || o === "unset";
  }(e))
    return e;
  if (function(o) {
    return o.includes("--v-theme");
  }(e))
    return `rgb(var(${e}))`;
  const t = function(o, r) {
    const a = r.global.current.value.colors;
    return Object.entries(a).find(([m]) => m === o);
  }(e, n);
  return t ? `hsl(${Dt(t[1])})` : `hsl(${Dt(e)})`;
}, _n = { default: "1.5em", large: "1.75em", small: "1.25em", "x-large": "2em", "x-small": "1em" }, Hn = { fa: { bottom: "fas fa-grip", center: "fas fa-angles-right", top: "fas fa-grip" }, mdi: { bottom: "mdi:mdi-dots-grid", center: "mdi:mdi-chevron-double-right", top: "mdi:mdi-dots-grid" } }, Yn = { key: 0, class: "v-resize-drawer--handle-slot" }, Un = At({ __name: "VResizeDrawer", props: on({ absolute: {}, expandOnHover: {}, floating: {}, handleBorderWidth: {}, handleColor: {}, handleIcon: {}, handleIconSize: {}, handlePosition: {}, height: {}, image: {}, location: {}, maxWidth: {}, minWidth: {}, modelValue: {}, name: {}, rail: {}, railWidth: {}, resizable: { type: Boolean }, saveWidth: { type: Boolean }, storageName: {}, storageType: {}, tag: {}, temporary: {}, theme: {}, touchless: { type: Boolean }, width: {}, widthSnapBack: { type: Boolean } }, { ...jn }), emits: ["close", "drawer:mouseenter", "drawer:mouseleave", "handle:click", "handle:dblclick", "handle:drag", "handle:mousedown", "handle:mouseup", "handle:touchend", "handle:touchmove", "handle:touchstart", "update:modelValue"], setup(e, { emit: n }) {
  const t = n, o = e, r = X(jt, {}), a = j({ ...o, ...r });
  Ke(() => {
    a.value = { ...o, ...r };
  });
  const { handleIconSize: m, handlePosition: i } = Wt(a.value), c = y(() => o), w = X(Symbol.for("vuetify:icons")), h = j(256), f = { mouseDown: !1, mouseUp: !0 }, W = j(!1), B = j(!1), $ = j(), S = j(256), V = rn(), R = sn(), ge = cn();
  xe(() => {
    if (a.value.location !== "start" && a.value.location !== "end" && a.value.location !== "left" && a.value.location !== "right")
      throw new Error("[VResizeDrawer]: 'top' and 'bottom' locations are not supported.");
    (function() {
      if (a.value.rail)
        return S.value = a.value.railWidth || void 0, !1;
      const l = Xe(a.value.storageType, a.value.storageName), u = ie({ value: a.value.width });
      S.value = u, h.value = S.value, a.value.saveWidth && l && !a.value.rail && (S.value = Xe(a.value.storageType, a.value.storageName)), Ye({ action: "update", rail: a.value.rail, resizedWidth: S.value, saveWidth: a.value.saveWidth, storageName: a.value.storageName, storageType: a.value.storageType });
    })();
  }), ln(() => {
    document.removeEventListener("mouseup", D, !1), document.removeEventListener("mousemove", ne, !1), document.removeEventListener("touchend", p, !1), document.removeEventListener("touchstart", F, !1);
  }), q(() => o.modelValue, (l) => {
    t("update:modelValue", l), l || t("close");
  });
  const K = y(() => ((l) => {
    const { absolute: u = !1, expandOnHover: g, floating: d, isMouseover: C, location: E, rail: M, railWidth: N, temporary: T } = l;
    return { [`${O}`]: !0, "v-navigation-drawer--absolute": u ?? !1, "v-navigation-drawer--custom-rail": Number(N) !== 56, "v-navigation-drawer--fixed": !u, "v-navigation-drawer--floating": d, "v-navigation-drawer--is-mouseover": A(C), "v-navigation-drawer--left": E === "left" || E === "start" || E === void 0, "v-navigation-drawer--open-on-hover": g, "v-navigation-drawer--rail": M ?? !1, "v-navigation-drawer--right": E === "right" || E === "end", "v-navigation-drawer--temporary": T || !1 };
  })({ absolute: a.value.absolute, expandOnHover: a.value.expandOnHover, floating: a.value.floating, isMouseover: W, location: a.value.location, rail: a.value.rail, railWidth: a.value.railWidth, temporary: a.value.temporary })), ce = y(() => ((l) => {
    const { isMouseDown: u, maxWidth: g, minWidth: d, rail: C, railWidth: E, resizedWidth: M, widthSnapBack: N } = l;
    if (C)
      return {};
    let T = C ? E : A(M);
    return N || (parseInt(T) >= parseInt(g) && (T = parseInt(g)), parseInt(T) <= parseInt(d) && (T = parseInt(d))), { transitionDuration: A(u) ? "0s" : ".2s", width: ie({ value: T }) };
  })({ isMouseDown: B, maxWidth: ae.value, minWidth: J.value, rail: a.value.rail, railWidth: a.value.railWidth, resizedWidth: S, widthSnapBack: a.value.widthSnapBack })), te = y(() => {
    if (!a.value.rail)
      return ie({ value: S.value });
  }), G = y(() => ((l) => {
    const { drawerLocation: u, handlePosition: g } = l;
    return { [`${O}--handle-container`]: !0, [`${O}--handle-container-position-${g}`]: !0, [`${O}--handle-container-parent-${u}`]: !0 };
  })({ drawerLocation: a.value.location, handlePosition: a.value.handlePosition })), de = y(() => ((l) => {
    const { borderWidth: u, handleColor: g, iconSize: d, position: C, theme: E } = l;
    if (C === "border")
      return { backgroundColor: Et(g, E), height: "100%", width: ie({ value: u }) };
    const M = _n[d];
    return { backgroundColor: "transparent", height: M, width: M };
  })({ borderWidth: a.value.handleBorderWidth || 1, handleColor: a.value.handleColor, iconSize: a.value.handleIconSize, position: a.value.handlePosition, theme: R })), Z = y(() => (!a.value.touchless || !ge.mobile.value) && !(!a.value.resizable || a.value.rail)), fe = y(() => ((l) => {
    const { color: u, theme: g } = l;
    return { color: Et(u, g) };
  })({ color: o.handleColor, theme: R })), Oe = y(() => ((l) => {
    const { drawerLocation: u, handlePosition: g, iconOptions: d, isUserIcon: C } = l;
    return { [`${O}--handle-container-icon`]: !0, [`${O}--handle-container-icon-${g}-${u}`]: !0, [`${O}--handle-container-icon-user-icon`]: C, [`${O}--handle-container-icon-fa`]: (d == null ? void 0 : d.defaultSet) === "fa", [`${O}--handle-container-icon-fa-${g}`]: (d == null ? void 0 : d.defaultSet) === "fa" };
  })({ drawerLocation: a.value.location, handlePosition: a.value.handlePosition, iconOptions: w, isUserIcon: a.value.handleIcon !== void 0 && a.value.handleIcon !== null })), Re = y(() => ((u) => {
    const { icon: g, iconOptions: d, name: C } = u;
    if (C === "border")
      return;
    if (g)
      return g;
    let E = ((d == null ? void 0 : d.defaultSet) ?? "").toLowerCase();
    E = E === "fa" || E === "fasvg" ? "fa" : E;
    const M = Hn[E];
    if (!M)
      throw new Error(`[VResizeDrawer]: No default ${d == null ? void 0 : d.defaultSet} icon set found.`);
    const N = M[C];
    if (!N)
      throw new Error(`[VResizeDrawer]: No ${C} icon found.`);
    return N;
  })({ icon: a.value.handleIcon, iconOptions: w, name: a.value.handlePosition }));
  function ye() {
    W.value = !0, t("drawer:mouseenter", W.value);
  }
  function Ge() {
    W.value = !1, t("drawer:mouseleave", W.value);
  }
  function ve(l, u) {
    let g = u;
    a.value.location !== "right" && a.value.location !== "end" || (g = document.body.scrollWidth - g), S.value = ie({ value: g }) || void 0, document.body.style.cursor = "grabbing", k("handle:touchmove", l), k("handle:drag", l);
  }
  function we(l) {
    var u;
    ve(l, ((u = l.touches[0]) == null ? void 0 : u.clientX) ?? 0);
  }
  function ne(l) {
    ve(l, l.clientX);
  }
  const ae = y(() => {
    if (a.value.maxWidth === "100%")
      return window.innerWidth;
    if (String(a.value.maxWidth).includes("%")) {
      const l = parseInt(String(a.value.maxWidth).replace("%", ""));
      return window.innerWidth * l / 100;
    }
    return a.value.maxWidth;
  }), J = y(() => {
    if (a.value.minWidth === "100%")
      return window.innerWidth;
    if (String(a.value.minWidth).includes("%")) {
      const l = parseInt(String(a.value.minWidth).replace("%", ""));
      return window.innerWidth * l / 100;
    }
    return a.value.minWidth;
  });
  function Fe(l) {
    let u = l;
    parseInt(u) >= parseInt(ae.value) && (u = parseInt(ae.value)), parseInt(u) <= parseInt(J.value) && (u = parseInt(J.value)), typeof u == "number" && (u = Math.round(u));
    let g = Ue(u);
    const d = Ue(ae.value), C = Ue(J.value);
    return g >= d && (g = d), C >= g && (g = C), g;
  }
  function be(l) {
    k("handle:click", l);
  }
  function Se(l) {
    S.value = h.value, Ye({ rail: a.value.rail, resizedWidth: S.value, saveWidth: a.value.saveWidth, storageName: a.value.storageName, storageType: a.value.storageType }), k("handle:dblclick", l);
  }
  function s(l, u) {
    l.preventDefault(), l.stopPropagation();
    const g = l.type;
    let d = 25;
    B.value = !0, a.value.handlePosition === "border" && (d = a.value.handleBorderWidth || 1), f.mouseUp = !1, u < d && (g === "touchstart" ? document.addEventListener("touchmove", we, !1) : document.addEventListener("mousemove", ne, !1)), f.mouseDown || (f.mouseDown = !0, g === "touchstart" ? (document.addEventListener("touchend", p, !1), k("handle:touchstart", l)) : (document.addEventListener("mouseup", D, !1), k("handle:mousedown", l)));
  }
  function v(l) {
    s(l, l.offsetX);
  }
  function F(l) {
    var u;
    s(l, ((u = l.touches[0]) == null ? void 0 : u.radiusX) ?? 0);
  }
  function b(l) {
    l.preventDefault(), l.stopPropagation();
    const u = l.type, g = $.value;
    B.value = !1, f.mouseDown = !1, S.value = (g == null ? void 0 : g.width) ?? h.value, document.body.style.cursor = "", S.value.includes("-") && (S.value = J.value), S.value = Fe(S.value), S.value = ie({ value: S.value }) || void 0, Ye({ rail: a.value.rail, resizedWidth: S.value, saveWidth: a.value.saveWidth, storageName: a.value.storageName, storageType: a.value.storageType }), f.mouseUp || (f.mouseUp = !0, u === "touchend" ? (document.removeEventListener("touchend", p, !1), document.removeEventListener("touchmove", we, !1), k("handle:touchend", l)) : (document.removeEventListener("mouseup", D, !1), document.removeEventListener("mousemove", ne, !1), k("handle:mouseup", l)));
  }
  function D(l) {
    b(l);
  }
  function p(l) {
    b(l);
  }
  function k(l, u) {
    const g = parseInt(Fe(S.value)) ?? 0, d = { e: u, eventName: l, offsetWidth: window.innerWidth - g + "px", resizedWidth: `${g}px`, width: `${g}px` };
    t(l, d);
  }
  return (l, u) => (Be(), at(A(Gn), Ne(A(c), { ref_key: "resizeDrawer", ref: $, class: A(K), location: A(a).location, "model-value": l.modelValue, name: A(a).name, style: A(ce), tag: A(a).tag, theme: A(a).theme, width: A(te), onMouseenter: ye, onMouseleave: Ge }), { default: un(() => [A(Z) ? (Be(), ot("div", { key: 0, class: rt(A(G)), style: lt(A(de)), onClick: be, onDblclick: Se, onMousedown: v, onMouseup: D, onTouchend: p, onTouchstart: F }, [A(V).handle ? (Be(), ot("div", Yn, [De(l.$slots, "handle")])) : A(i) !== "border" ? (Be(), at(zn, { key: 1, class: rt(["v-resize-drawer--handle-icon", A(Oe)]), icon: A(Re), size: A(m), style: lt(A(fe)) }, null, 8, ["class", "icon", "size", "style"])) : Ee("", !0)], 38)) : Ee("", !0), A(V).prepend ? De(l.$slots, "prepend", { key: 1 }) : Ee("", !0), De(l.$slots, "default"), A(V).append ? De(l.$slots, "append", { key: 2 }) : Ee("", !0)]), _: 3 }, 16, ["class", "location", "model-value", "name", "style", "tag", "theme", "width"]));
} }), jt = Symbol();
function Kn(e = {}) {
  return { install: (n) => {
    n.provide(jt, e), n.component("VResizeDrawer", Un);
  } };
}
export {
  Un as VResizeDrawer,
  Kn as createVResizeDrawer,
  Un as default,
  jt as globalOptions
};
(function(){"use strict";try{if(typeof document<"u"){var n=document.createElement("style");n.appendChild(document.createTextNode(".v-resize-drawer{container-name:v-resize-drawer;container-type:inline-size}.v-resize-drawer--handle-container{align-items:center;cursor:grab;display:flex;justify-content:center;position:absolute;z-index:1}.v-resize-drawer--handle-container-icon-parent-end,.v-resize-drawer--handle-container-icon-parent-right{left:initial;right:0}.v-resize-drawer--handle-container-icon-center-end,.v-resize-drawer--handle-container-icon-center-right{transform:rotate(180deg)}.v-resize-drawer--handle-container-icon-user-icon{transform:none}.v-resize-drawer--handle-container-icon-fa{font-size:.7rem!important}.v-resize-drawer--handle-container-parent-left,.v-resize-drawer--handle-container-parent-start,.v-resize-drawer--handle-container-parent-undefined{right:0}.v-resize-drawer--handle-container-parent-end,.v-resize-drawer--handle-container-parent-right{left:0}.v-resize-drawer--handle-container-position-top{top:0}.v-resize-drawer--handle-container-position-center{top:50%;transform:translateY(-50%)}.v-resize-drawer--handle-container-position-bottom{bottom:0}.v-resize-drawer--handle-container-position-border{cursor:col-resize;height:100%;top:0;width:8px}@container v-resize-drawer (width > 0) and (max-width: 599.98px){.v-col-xs-12{flex:0 0 100%!important;flex-basis:0;flex-grow:1;max-width:100%!important}}@container v-resize-drawer (min-width: 600px){.v-col-sm-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-sm-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-sm-3{flex:0 0 25%;max-width:25%}.v-col-sm-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-sm-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-sm-6{flex:0 0 50%;max-width:50%}.v-col-sm-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-sm-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-sm-9{flex:0 0 75%;max-width:75%}.v-col-sm-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-sm-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-sm-12{flex:0 0 100%;max-width:100%}}@container v-resize-drawer (min-width: 960px){.v-col-md-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-md-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-md-3{flex:0 0 25%;max-width:25%}.v-col-md-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-md-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-md-6{flex:0 0 50%;max-width:50%}.v-col-md-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-md-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-md-9{flex:0 0 75%;max-width:75%}.v-col-md-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-md-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-md-12{flex:0 0 100%;max-width:100%}}@container v-resize-drawer (min-width: 1280px){.v-col-lg-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-lg-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-lg-3{flex:0 0 25%;max-width:25%}.v-col-lg-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-lg-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-lg-6{flex:0 0 50%;max-width:50%}.v-col-lg-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-lg-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-lg-9{flex:0 0 75%;max-width:75%}.v-col-lg-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-lg-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-lg-12{flex:0 0 100%;max-width:100%}}@container v-resize-drawer (min-width: 1920px){.v-col-xl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-xl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-xl-3{flex:0 0 25%;max-width:25%}.v-col-xl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-xl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-xl-6{flex:0 0 50%;max-width:50%}.v-col-xl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-xl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-xl-9{flex:0 0 75%;max-width:75%}.v-col-xl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-xl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-xl-12{flex:0 0 100%;max-width:100%}}@container v-resize-drawer (min-width: 2560px){.v-col-xxl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-xxl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-xxl-3{flex:0 0 25%;max-width:25%}.v-col-xxl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-xxl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-xxl-6{flex:0 0 50%;max-width:50%}.v-col-xxl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-xxl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-xxl-9{flex:0 0 75%;max-width:75%}.v-col-xxl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-xxl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-xxl-12{flex:0 0 100%;max-width:100%}}@container v-resize-drawer only print{.hidden-print-only{display:none!important}}@container v-resize-drawer only print{.d-print-only-none{display:none!important}.d-print-only-inline{display:inline!important}.d-print-only-inline-block{display:inline-block!important}.d-print-only-block{display:block!important}.d-print-only-table{display:table!important}.d-print-only-table-row{display:table-row!important}.d-print-only-table-cell{display:table-cell!important}.d-print-only-flex{display:flex!important}.d-print-only-inline-flex{display:inline-flex!important}}@container v-resize-drawer only screen{.hidden-screen-only{display:none!important}}@container v-resize-drawer only screen{.d-screen-only-none{display:none!important}.d-screen-only-inline{display:inline!important}.d-screen-only-inline-block{display:inline-block!important}.d-screen-only-block{display:block!important}.d-screen-only-table{display:table!important}.d-screen-only-table-row{display:table-row!important}.d-screen-only-table-cell{display:table-cell!important}.d-screen-only-flex{display:flex!important}.d-screen-only-inline-flex{display:inline-flex!important}}@container v-resize-drawer (max-width: 599.98px){.hidden-xs{display:none!important}}@container v-resize-drawer (max-width: 599.98px){.d-xs-none{display:none!important}.d-xs-inline{display:inline!important}.d-xs-inline-block{display:inline-block!important}.d-xs-block{display:block!important}.d-xs-table{display:table!important}.d-xs-table-row{display:table-row!important}.d-xs-table-cell{display:table-cell!important}.d-xs-flex{display:flex!important}.d-xs-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 600px) and (max-width: 959.98px){.hidden-sm{display:none!important}}@container v-resize-drawer (min-width: 600px) and (max-width: 959.98px){.d-sm-none{display:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:flex!important}.d-sm-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 960px) and (max-width: 1279.98px){.hidden-md{display:none!important}}@container v-resize-drawer (min-width: 960px) and (max-width: 1279.98px){.d-md-none{display:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:flex!important}.d-md-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 1280px) and (max-width: 1919.98px){.hidden-lg{display:none!important}}@container v-resize-drawer (min-width: 1280px) and (max-width: 1919.98px){.d-lg-none{display:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:flex!important}.d-lg-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 1920px) and (max-width: 2559.98px){.hidden-xl{display:none!important}}@container v-resize-drawer (min-width: 1920px) and (max-width: 2559.98px){.d-xl-none{display:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:flex!important}.d-xl-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 2560px){.hidden-xxl{display:none!important}}@container v-resize-drawer (min-width: 2560px){.d-xxl-none{display:none!important}.d-xxl-inline{display:inline!important}.d-xxl-inline-block{display:inline-block!important}.d-xxl-block{display:block!important}.d-xxl-table{display:table!important}.d-xxl-table-row{display:table-row!important}.d-xxl-table-cell{display:table-cell!important}.d-xxl-flex{display:flex!important}.d-xxl-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 600px){.hidden-sm-and-up{display:none!important}}@container v-resize-drawer (min-width: 600px){.d-sm-and-up-none{display:none!important}.d-sm-and-up-inline{display:inline!important}.d-sm-and-up-inline-block{display:inline-block!important}.d-sm-and-up-block{display:block!important}.d-sm-and-up-table{display:table!important}.d-sm-and-up-table-row{display:table-row!important}.d-sm-and-up-table-cell{display:table-cell!important}.d-sm-and-up-flex{display:flex!important}.d-sm-and-up-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 960px){.hidden-md-and-up{display:none!important}}@container v-resize-drawer (min-width: 960px){.d-md-and-up-none{display:none!important}.d-md-and-up-inline{display:inline!important}.d-md-and-up-inline-block{display:inline-block!important}.d-md-and-up-block{display:block!important}.d-md-and-up-table{display:table!important}.d-md-and-up-table-row{display:table-row!important}.d-md-and-up-table-cell{display:table-cell!important}.d-md-and-up-flex{display:flex!important}.d-md-and-up-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 1280px){.hidden-lg-and-up{display:none!important}}@container v-resize-drawer (min-width: 1280px){.d-lg-and-up-none{display:none!important}.d-lg-and-up-inline{display:inline!important}.d-lg-and-up-inline-block{display:inline-block!important}.d-lg-and-up-block{display:block!important}.d-lg-and-up-table{display:table!important}.d-lg-and-up-table-row{display:table-row!important}.d-lg-and-up-table-cell{display:table-cell!important}.d-lg-and-up-flex{display:flex!important}.d-lg-and-up-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 1920px){.hidden-xl-and-up{display:none!important}}@container v-resize-drawer (min-width: 1920px){.d-xl-and-up-none{display:none!important}.d-xl-and-up-inline{display:inline!important}.d-xl-and-up-inline-block{display:inline-block!important}.d-xl-and-up-block{display:block!important}.d-xl-and-up-table{display:table!important}.d-xl-and-up-table-row{display:table-row!important}.d-xl-and-up-table-cell{display:table-cell!important}.d-xl-and-up-flex{display:flex!important}.d-xl-and-up-inline-flex{display:inline-flex!important}}@container v-resize-drawer (max-width: 959.98px){.hidden-sm-and-down{display:none!important}}@container v-resize-drawer (max-width: 959.98px){.d-sm-and-down-none{display:none!important}.d-sm-and-down-inline{display:inline!important}.d-sm-and-down-inline-block{display:inline-block!important}.d-sm-and-down-block{display:block!important}.d-sm-and-down-table{display:table!important}.d-sm-and-down-table-row{display:table-row!important}.d-sm-and-down-table-cell{display:table-cell!important}.d-sm-and-down-flex{display:flex!important}.d-sm-and-down-inline-flex{display:inline-flex!important}}@container v-resize-drawer (max-width: 1279.98px){.hidden-md-and-down{display:none!important}}@container v-resize-drawer (max-width: 1279.98px){.d-md-and-down-none{display:none!important}.d-md-and-down-inline{display:inline!important}.d-md-and-down-inline-block{display:inline-block!important}.d-md-and-down-block{display:block!important}.d-md-and-down-table{display:table!important}.d-md-and-down-table-row{display:table-row!important}.d-md-and-down-table-cell{display:table-cell!important}.d-md-and-down-flex{display:flex!important}.d-md-and-down-inline-flex{display:inline-flex!important}}@container v-resize-drawer (max-width: 1919.98px){.hidden-lg-and-down{display:none!important}}@container v-resize-drawer (max-width: 1919.98px){.d-lg-and-down-none{display:none!important}.d-lg-and-down-inline{display:inline!important}.d-lg-and-down-inline-block{display:inline-block!important}.d-lg-and-down-block{display:block!important}.d-lg-and-down-table{display:table!important}.d-lg-and-down-table-row{display:table-row!important}.d-lg-and-down-table-cell{display:table-cell!important}.d-lg-and-down-flex{display:flex!important}.d-lg-and-down-inline-flex{display:inline-flex!important}}@container v-resize-drawer (max-width: 2559.98px){.hidden-xl-and-down{display:none!important}}@container v-resize-drawer (max-width: 2559.98px){.d-xl-and-down-none{display:none!important}.d-xl-and-down-inline{display:inline!important}.d-xl-and-down-inline-block{display:inline-block!important}.d-xl-and-down-block{display:block!important}.d-xl-and-down-table{display:table!important}.d-xl-and-down-table-row{display:table-row!important}.d-xl-and-down-table-cell{display:table-cell!important}.d-xl-and-down-flex{display:flex!important}.d-xl-and-down-inline-flex{display:inline-flex!important}}")),document.head.appendChild(n)}}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})();
