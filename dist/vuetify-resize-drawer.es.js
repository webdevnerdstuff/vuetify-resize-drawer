import { Fragment as kt, reactive as Yt, computed as y, watchEffect as Ze, toRefs as Wt, warn as Ut, ref as _, unref as W, provide as Pe, inject as K, shallowRef as U, defineComponent as At, getCurrentInstance as qt, onDeactivated as Xt, onActivated as Kt, onBeforeUnmount as He, watch as X, onScopeDispose as Zt, effectScope as Jt, toRaw as Qt, isRef as ge, onMounted as Ie, readonly as en, createVNode as L, mergeProps as Ve, toRef as Xe, Text as tn, onBeforeMount as $t, Transition as nn, nextTick as an, mergeDefaults as on, useSlots as rn, onUnmounted as ln, openBlock as Ee, createBlock as at, withCtx as un, createElementBlock as ot, normalizeClass as rt, normalizeStyle as lt, renderSlot as ke, createCommentVNode as We } from "vue";
import { useTheme as sn, useDisplay as cn } from "vuetify";
/**
 * @name @wdns/vuetify-resize-drawer
 * @version 3.1.2
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
const xt = P({ class: [String, Array], style: { type: [String, Array, Object], default: null } }, "component");
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
  }(e, Mt(e, n, "set"), t), t;
}
function ee(e, n) {
  return function(t, o) {
    return o.get ? o.get.call(t) : o.value;
  }(e, Mt(e, n, "get"));
}
function Mt(e, n, t) {
  if (!n.has(e))
    throw new TypeError("attempted to " + t + " private field on non-instance");
  return n.get(e);
}
function ce(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  return e == null || e === "" ? void 0 : isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${n}` : void 0;
}
function ut(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Ye(e, n) {
  return n.every((t) => e.hasOwnProperty(t));
}
function st(e, n) {
  return e + (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, n - e.length));
}
function de() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0;
  const o = {};
  for (const r in e)
    o[r] = e[r];
  for (const r in n) {
    const a = e[r], m = n[r];
    ut(a) && ut(m) ? o[r] = de(a, m, t) : Array.isArray(a) && Array.isArray(m) && t ? o[r] = t(a, m) : o[r] = m;
  }
  return o;
}
function It(e) {
  return e.map((n) => n.type === kt ? It(n.children) : n).flat();
}
function ne() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (ne.cache.has(e))
    return ne.cache.get(e);
  const n = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return ne.cache.set(e, n), n;
}
ne.cache = /* @__PURE__ */ new Map();
var Ae = /* @__PURE__ */ new WeakMap(), le = /* @__PURE__ */ new WeakMap();
class vn {
  constructor(n) {
    it(this, Ae, { writable: !0, value: [] }), it(this, le, { writable: !0, value: 0 }), this.size = n;
  }
  push(n) {
    ee(this, Ae)[ee(this, le)] = n, dn(this, le, (ee(this, le) + 1) % this.size);
  }
  values() {
    return ee(this, Ae).slice(ee(this, le)).concat(ee(this, Ae).slice(0, ee(this, le)));
  }
}
function zt(e) {
  const n = Yt({}), t = y(e);
  return Ze(() => {
    for (const o in t.value)
      n[o] = t.value[o];
  }, { flush: "sync" }), Wt(n);
}
const ie = 2.4, ct = 0.2126729, dt = 0.7151522, vt = 0.072175, hn = 0.55, mn = 0.58, pn = 0.57, gn = 0.62, $e = 0.03, ht = 1.45, fn = 5e-4, yn = 1.25, wn = 1.25, mt = 0.078, pt = 12.82051282051282, xe = 0.06, gt = 1e-3;
function ft(e, n) {
  const t = (e.r / 255) ** ie, o = (e.g / 255) ** ie, r = (e.b / 255) ** ie, a = (n.r / 255) ** ie, m = (n.g / 255) ** ie, i = (n.b / 255) ** ie;
  let c, w = t * ct + o * dt + r * vt, h = a * ct + m * dt + i * vt;
  if (w <= $e && (w += ($e - w) ** ht), h <= $e && (h += ($e - h) ** ht), Math.abs(h - w) < fn)
    return 0;
  if (h > w) {
    const f = (h ** hn - w ** mn) * yn;
    c = f < gt ? 0 : f < mt ? f - f * pt * xe : f - xe;
  } else {
    const f = (h ** gn - w ** pn) * wn;
    c = f > -gt ? 0 : f > -mt ? f - f * pt * xe : f + xe;
  }
  return 100 * c;
}
function ze(e) {
  Ut(`Vuetify: ${e}`);
}
function Ue(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
const yt = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, Fn = { rgb: (e, n, t, o) => ({ r: e, g: n, b: t, a: o }), rgba: (e, n, t, o) => ({ r: e, g: n, b: t, a: o }), hsl: (e, n, t, o) => wt({ h: e, s: n, l: t, a: o }), hsla: (e, n, t, o) => wt({ h: e, s: n, l: t, a: o }), hsv: (e, n, t, o) => fe({ h: e, s: n, v: t, a: o }), hsva: (e, n, t, o) => fe({ h: e, s: n, v: t, a: o }) };
function pe(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && ze(`'${e}' is not a valid hex color`), { r: (16711680 & e) >> 16, g: (65280 & e) >> 8, b: 255 & e };
  if (typeof e == "string" && yt.test(e)) {
    const { groups: n } = e.match(yt), { fn: t, values: o } = n, r = o.split(/,\s*/).map((a) => a.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(t) ? parseFloat(a) / 100 : parseFloat(a));
    return Fn[t](...r);
  }
  if (typeof e == "string") {
    let n = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(n.length) ? n = n.split("").map((o) => o + o).join("") : [6, 8].includes(n.length) || ze(`'${e}' is not a valid hex(a) color`);
    const t = parseInt(n, 16);
    return (isNaN(t) || t < 0 || t > 4294967295) && ze(`'${e}' is not a valid hex(a) color`), function(o) {
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
    if (Ye(e, ["r", "g", "b"]))
      return e;
    if (Ye(e, ["h", "s", "l"]))
      return fe(Lt(e));
    if (Ye(e, ["h", "s", "v"]))
      return fe(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function fe(e) {
  const { h: n, s: t, v: o, a: r } = e, a = (i) => {
    const c = (i + n / 60) % 6;
    return o - o * t * Math.max(Math.min(c, 4 - c, 1), 0);
  }, m = [a(5), a(3), a(1)].map((i) => Math.round(255 * i));
  return { r: m[0], g: m[1], b: m[2], a: r };
}
function wt(e) {
  return fe(Lt(e));
}
function Lt(e) {
  const { h: n, s: t, l: o, a: r } = e, a = o + t * Math.min(o, 1 - o);
  return { h: n, s: a === 0 ? 0 : 2 - 2 * o / a, v: a, a: r };
}
const Te = Symbol.for("vuetify:defaults");
function Je() {
  const e = K(Te);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function bn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Je();
  const o = H("useDefaults");
  if (n = n ?? o.type.name ?? o.type.__name, !n)
    throw new Error("[Vuetify] Could not determine component name");
  const r = y(() => {
    var i;
    return (i = t.value) == null ? void 0 : i[e._as ?? n];
  }), a = new Proxy(e, { get(i, c) {
    var h, f, E, C;
    const w = Reflect.get(i, c);
    return c === "class" || c === "style" ? [(h = r.value) == null ? void 0 : h[c], w].filter((x) => x != null) : typeof c != "string" || function(x, F) {
      var V, T;
      return ((V = x.props) == null ? void 0 : V[F]) !== void 0 || ((T = x.props) == null ? void 0 : T[ne(F)]) !== void 0;
    }(o.vnode, c) ? w : ((f = r.value) == null ? void 0 : f[c]) ?? ((C = (E = t.value) == null ? void 0 : E.global) == null ? void 0 : C[c]) ?? w;
  } }), m = U();
  return Ze(() => {
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
      let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : H("injectSelf");
      const { provides: h } = w;
      if (h && c in h)
        return h[c];
    }(Te, o);
    Pe(Te, y(() => m.value ? de((i == null ? void 0 : i.value) ?? {}, m.value) : i == null ? void 0 : i.value));
  } };
}
function Oe(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return ze("The component is missing an explicit name, unable to generate default prop value"), e;
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
      const r = Je();
      if (!r.value)
        return e._setup(t, o);
      const { props: a, provideSubDefaults: m } = bn(t, t._as ?? e.name, r), i = e._setup(a, o);
      return m(), i;
    };
  }
  return e;
}
function Qe() {
  let e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
  return (n) => (e ? Oe : At)(n);
}
function H(e, n) {
  const t = qt();
  if (!t)
    throw new Error(`[Vuetify] ${e} ${n || "must be called from inside a setup function"}`);
  return t;
}
function Le() {
  const e = H(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables").type;
  return ne((e == null ? void 0 : e.aliasName) || (e == null ? void 0 : e.name));
}
let Nt = 0, Ne = /* @__PURE__ */ new WeakMap();
function Pt() {
  const e = H("getUid");
  if (Ne.has(e))
    return Ne.get(e);
  {
    const n = Nt++;
    return Ne.set(e, n), n;
  }
}
function Vt(e) {
  H("useRender").render = e;
}
Pt.reset = () => {
  Nt = 0, Ne = /* @__PURE__ */ new WeakMap();
};
const Sn = Symbol.for("vuetify:layout"), Cn = Symbol.for("vuetify:layout-item"), Bn = P({ name: { type: String }, order: { type: [Number, String], default: 0 }, absolute: Boolean }, "layout-item");
function Me(e, n) {
  let t;
  function o() {
    t = Jt(), t.run(() => n.length ? n(() => {
      t == null || t.stop(), o();
    }) : n());
  }
  X(e, (r) => {
    r && !t ? o() : r || (t == null || t.stop(), t = void 0);
  }, { immediate: !0 }), Zt(() => {
    t == null || t.stop();
  });
}
const Dn = Symbol.for("vuetify:locale"), Ft = Symbol.for("vuetify:theme"), Tt = P({ theme: String }, "theme");
function Ot(e) {
  H("provideTheme");
  const n = K(Ft, null);
  if (!n)
    throw new Error("Could not find Vuetify theme injection");
  const t = y(() => e.theme ?? n.name.value), o = y(() => n.themes.value[t.value]), r = y(() => n.isDisabled ? void 0 : `v-theme--${t.value}`), a = { ...n, name: t, current: o, themeClasses: r };
  return Pe(Ft, a), a;
}
const Rt = P({ tag: { type: String, default: "div" } }, "tag"), En = P({ border: [Boolean, Number, String] }, "border");
function Gt(e) {
  return zt(() => {
    const n = [], t = {};
    if (e.value.background)
      if (Ue(e.value.background)) {
        if (t.backgroundColor = e.value.background, !e.value.text && Ue(o = e.value.background) && !/^((rgb|hsl)a?\()?var\(--/.test(o)) {
          const r = pe(e.value.background);
          if (r.a == null || r.a === 1) {
            const a = function(m) {
              const i = Math.abs(ft(pe(0), pe(m)));
              return Math.abs(ft(pe(16777215), pe(m))) > Math.min(i, 50) ? "#fff" : "#000";
            }(r);
            t.color = a, t.caretColor = a;
          }
        }
      } else
        n.push(`bg-${e.value.background}`);
    var o;
    return e.value.text && (Ue(e.value.text) ? (t.color = e.value.text, t.caretColor = e.value.text) : n.push(`text-${e.value.text}`)), { colorClasses: n, colorStyles: t };
  });
}
function bt(e, n) {
  const t = y(() => ({ background: ge(e) ? e.value : n ? e[n] : null })), { colorClasses: o, colorStyles: r } = Gt(t);
  return { backgroundColorClasses: o, backgroundColorStyles: r };
}
const kn = P({ elevation: { type: [Number, String], validator(e) {
  const n = parseInt(e);
  return !isNaN(n) && n >= 0 && n <= 24;
} } }, "elevation"), Wn = P({ rounded: { type: [Boolean, Number, String], default: void 0 } }, "rounded"), jt = [String, Function, Object, Array], An = Symbol.for("vuetify:icons"), Re = P({ icon: { type: jt }, tag: { type: String, required: !0 } }, "icon"), St = Qe()({ name: "VComponentIcon", props: Re(), setup(e, n) {
  let { slots: t } = n;
  return () => {
    const o = e.icon;
    return L(e.tag, null, { default: () => {
      var r;
      return [e.icon ? L(o, null, null) : (r = t.default) == null ? void 0 : r.call(t)];
    } });
  };
} }), $n = Oe({ name: "VSvgIcon", inheritAttrs: !1, props: Re(), setup(e, n) {
  let { attrs: t } = n;
  return () => L(e.tag, Ve(t, { style: null }), { default: () => [L("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((o) => Array.isArray(o) ? L("path", { d: o[0], "fill-opacity": o[1] }, null) : L("path", { d: o }, null)) : L("path", { d: e.icon }, null)])] });
} });
Oe({ name: "VLigatureIcon", props: Re(), setup: (e) => () => L(e.tag, null, { default: () => [e.icon] }) }), Oe({ name: "VClassIcon", props: Re(), setup: (e) => () => L(e.tag, { class: e.icon }, null) });
const xn = ["x-small", "small", "default", "large", "x-large"], Mn = P({ size: { type: [String, Number], default: "default" } }, "size"), In = P({ color: String, start: Boolean, end: Boolean, icon: jt, ...xt(), ...Mn(), ...Rt({ tag: "i" }), ...Tt() }, "VIcon"), zn = Qe()({ name: "VIcon", props: In(), setup(e, n) {
  let { attrs: t, slots: o } = n;
  const r = _(), { themeClasses: a } = Ot(e), { iconData: m } = ((h) => {
    const f = K(An);
    if (!f)
      throw new Error("Missing Vuetify Icons provide!");
    return { iconData: y(() => {
      var V;
      const E = W(h);
      if (!E)
        return { component: St };
      let C = E;
      if (typeof C == "string" && (C = C.trim(), C.startsWith("$") && (C = (V = f.aliases) == null ? void 0 : V[C.slice(1)])), !C)
        throw new Error(`Could not find aliased icon "${E}"`);
      if (Array.isArray(C))
        return { component: $n, icon: C };
      if (typeof C != "string")
        return { component: St, icon: C };
      const x = Object.keys(f.sets).find((T) => typeof C == "string" && C.startsWith(`${T}:`)), F = x ? C.slice(x.length + 1) : C;
      return { component: f.sets[x ?? f.defaultSet].component, icon: F };
    }) };
  })(y(() => r.value || e.icon)), { sizeClasses: i } = function(h) {
    let f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Le();
    return zt(() => {
      let E, C;
      var x, F;
      return x = xn, F = h.size, x.includes(F) ? E = `${f}--size-${h.size}` : h.size && (C = { width: ce(h.size), height: ce(h.size) }), { sizeClasses: E, sizeStyles: C };
    });
  }(e), { textColorClasses: c, textColorStyles: w } = function(h, f) {
    const E = y(() => ({ text: ge(h) ? h.value : f ? h[f] : null })), { colorClasses: C, colorStyles: x } = Gt(E);
    return { textColorClasses: C, textColorStyles: x };
  }(Xe(e, "color"));
  return Vt(() => {
    var f, E;
    const h = (f = o.default) == null ? void 0 : f.call(o);
    return h && (r.value = (E = It(h).filter((C) => C.type === tn && C.children && typeof C.children == "string")[0]) == null ? void 0 : E.children), L(m.value.component, { tag: e.tag, icon: m.value.icon, class: ["v-icon", "notranslate", a.value, i.value, c.value, { "v-icon--clickable": !!t.onClick, "v-icon--start": e.start, "v-icon--end": e.end }, e.class], style: [i.value ? void 0 : { fontSize: ce(e.size), height: ce(e.size), width: ce(e.size) }, w.value, e.style], role: t.onClick ? "button" : void 0, "aria-hidden": !t.onClick }, { default: () => [h] });
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
function ue() {
  throw new Error();
}
const On = ["start", "end", "left", "right", "top", "bottom"], Rn = P({ color: String, disableResizeWatcher: Boolean, disableRouteWatcher: Boolean, expandOnHover: Boolean, floating: Boolean, modelValue: { type: Boolean, default: null }, permanent: Boolean, rail: { type: Boolean, default: null }, railWidth: { type: [Number, String], default: 56 }, scrim: { type: [Boolean, String], default: !0 }, image: String, temporary: Boolean, touchless: Boolean, width: { type: [Number, String], default: 256 }, location: { type: String, default: "start", validator: (e) => On.includes(e) }, sticky: Boolean, ...En(), ...xt(), ...Nn(), ...kn(), ...Bn(), ...Wn(), ...Rt({ tag: "nav" }), ...Tt() }, "VNavigationDrawer"), Gn = Qe()({ name: "VNavigationDrawer", props: Rn(), emits: { "update:modelValue": (e) => !0, "update:rail": (e) => !0 }, setup(e, n) {
  var Ce, Be;
  let { attrs: t, emit: o, slots: r } = n;
  const { isRtl: a } = function() {
    const s = K(Dn);
    if (!s)
      throw new Error("[Vuetify] Could not find injected rtl instance");
    return { isRtl: s.isRtl, rtlClasses: s.rtlClasses };
  }(), { themeClasses: m } = Ot(e), { borderClasses: i } = function(s) {
    let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Le();
    return { borderClasses: y(() => {
      const b = ge(s) ? s.value : s.border, S = [];
      if (b === !0 || b === "")
        S.push(`${d}--border`);
      else if (typeof b == "string" || b === 0)
        for (const B of String(b).split(" "))
          S.push(`border-${B}`);
      return S;
    }) };
  }(e), { backgroundColorClasses: c, backgroundColorStyles: w } = bt(Xe(e, "color")), { elevationClasses: h } = function(s) {
    return { elevationClasses: y(() => {
      const d = ge(s) ? s.value : s.elevation, b = [];
      return d == null || b.push(`elevation-${d}`), b;
    }) };
  }(e), { displayClasses: f, mobile: E } = function() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Le();
    const b = K(Ln);
    if (!b)
      throw new Error("Could not find Vuetify display injection");
    const S = y(() => {
      if (!s.mobileBreakpoint)
        return b.mobile.value;
      const p = typeof s.mobileBreakpoint == "number" ? s.mobileBreakpoint : b.thresholds.value[s.mobileBreakpoint];
      return b.width.value < p;
    }), B = y(() => d ? { [`${d}--mobile`]: S.value } : {});
    return { ...b, displayClasses: B, mobile: S };
  }(e), { roundedClasses: C } = function(s) {
    let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Le();
    return { roundedClasses: y(() => {
      const b = ge(s) ? s.value : s.rounded, S = [];
      if (b === !0 || b === "")
        S.push(`${d}--rounded`);
      else if (typeof b == "string" || b === 0)
        for (const B of String(b).split(" "))
          S.push(`rounded-${B}`);
      return S;
    }) };
  }(e), x = (Be = (Ce = H("useRouter")) == null ? void 0 : Ce.proxy) == null ? void 0 : Be.$router, F = function(s, d, b) {
    let S = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (u) => u, B = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (u) => u;
    const p = H("useProxiedModel"), $ = _(s[d] !== void 0 ? s[d] : b), A = ne(d), l = y(A !== d ? () => {
      var u, g, D, k;
      return s[d], !(!((u = p.vnode.props) != null && u.hasOwnProperty(d)) && !((g = p.vnode.props) != null && g.hasOwnProperty(A)) || !((D = p.vnode.props) != null && D.hasOwnProperty(`onUpdate:${d}`)) && !((k = p.vnode.props) != null && k.hasOwnProperty(`onUpdate:${A}`)));
    } : () => {
      var u, g;
      return s[d], !(!((u = p.vnode.props) != null && u.hasOwnProperty(d)) || !((g = p.vnode.props) != null && g.hasOwnProperty(`onUpdate:${d}`)));
    });
    Me(() => !l.value, () => {
      X(() => s[d], (u) => {
        $.value = u;
      });
    });
    const v = y({ get() {
      const u = s[d];
      return S(l.value ? u : $.value);
    }, set(u) {
      const g = B(u), D = Qt(l.value ? s[d] : $.value);
      D !== g && S(D) !== u && ($.value = g, p == null || p.emit(`update:${d}`, g));
    } });
    return Object.defineProperty(v, "externalValue", { get: () => l.value ? s[d] : $.value }), v;
  }(e, "modelValue", null, (s) => !!s), { ssrBootStyles: V } = function() {
    const s = U(!1);
    return Ie(() => {
      window.requestAnimationFrame(() => {
        s.value = !0;
      });
    }), { ssrBootStyles: y(() => s.value ? void 0 : { transition: "none !important" }), isBooted: en(s) };
  }(), { scopeId: T } = function() {
    const s = H("useScopeId").vnode.scopeId;
    return { scopeId: s ? { [s]: "" } : void 0 };
  }(), ye = _(), Z = U(!1), ve = y(() => e.rail && e.expandOnHover && Z.value ? Number(e.width) : Number(e.rail ? e.railWidth : e.width)), ae = y(() => /* @__PURE__ */ function(s, d) {
    return s === "start" ? d ? "right" : "left" : s === "end" ? d ? "left" : "right" : s;
  }(e.location, a.value)), O = y(() => !e.permanent && (E.value || e.temporary)), he = y(() => e.sticky && !O.value && ae.value !== "bottom");
  Me(() => e.expandOnHover && e.rail != null, () => {
    X(Z, (s) => o("update:rail", !s));
  }), Me(() => !e.disableResizeWatcher, () => {
    X(O, (s) => !e.permanent && an(() => F.value = !s));
  }), Me(() => !e.disableRouteWatcher && !!x, () => {
    X(x.currentRoute, () => O.value && (F.value = !1));
  }), X(() => e.permanent, (s) => {
    s && (F.value = !0);
  }), $t(() => {
    e.modelValue != null || O.value || (F.value = e.permanent || !E.value);
  });
  const { isDragging: J, dragProgress: we, dragStyles: Ge } = function(s) {
    let { isActive: d, isTemporary: b, width: S, touchless: B, position: p } = s;
    Ie(() => {
      window.addEventListener("touchstart", et, { passive: !0 }), window.addEventListener("touchmove", tt, { passive: !1 }), window.addEventListener("touchend", nt, { passive: !0 });
    }), He(() => {
      window.removeEventListener("touchstart", et), window.removeEventListener("touchmove", tt), window.removeEventListener("touchend", nt);
    });
    const $ = y(() => ["left", "right"].includes(p.value)), { addMovement: A, endTouch: l, getVelocity: v } = Tn();
    let u = !1;
    const g = U(!1), D = U(0), k = U(0);
    let N;
    function R(M, I) {
      return (p.value === "left" ? M : p.value === "right" ? document.documentElement.clientWidth - M : p.value === "top" ? M : p.value === "bottom" ? document.documentElement.clientHeight - M : ue()) - (I ? S.value : 0);
    }
    function G(M) {
      let I = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
      const z = p.value === "left" ? (M - k.value) / S.value : p.value === "right" ? (document.documentElement.clientWidth - M - k.value) / S.value : p.value === "top" ? (M - k.value) / S.value : p.value === "bottom" ? (document.documentElement.clientHeight - M - k.value) / S.value : ue();
      return I ? Math.max(0, Math.min(1, z)) : z;
    }
    function et(M) {
      if (B.value)
        return;
      const I = M.changedTouches[0].clientX, z = M.changedTouches[0].clientY, Y = p.value === "left" ? I < 25 : p.value === "right" ? I > document.documentElement.clientWidth - 25 : p.value === "top" ? z < 25 : p.value === "bottom" ? z > document.documentElement.clientHeight - 25 : ue(), q = d.value && (p.value === "left" ? I < S.value : p.value === "right" ? I > document.documentElement.clientWidth - S.value : p.value === "top" ? z < S.value : p.value === "bottom" ? z > document.documentElement.clientHeight - S.value : ue());
      (Y || q || d.value && b.value) && (u = !0, N = [I, z], k.value = R($.value ? I : z, d.value), D.value = G($.value ? I : z), l(M), A(M));
    }
    function tt(M) {
      const I = M.changedTouches[0].clientX, z = M.changedTouches[0].clientY;
      if (u) {
        if (!M.cancelable)
          return void (u = !1);
        const q = Math.abs(I - N[0]), De = Math.abs(z - N[1]);
        ($.value ? q > De && q > 3 : De > q && De > 3) ? (g.value = !0, u = !1) : ($.value ? De : q) > 3 && (u = !1);
      }
      if (!g.value)
        return;
      M.preventDefault(), A(M);
      const Y = G($.value ? I : z, !1);
      D.value = Math.max(0, Math.min(1, Y)), Y > 1 ? k.value = R($.value ? I : z, !0) : Y < 0 && (k.value = R($.value ? I : z, !1));
    }
    function nt(M) {
      if (u = !1, !g.value)
        return;
      A(M), g.value = !1;
      const I = v(M.changedTouches[0].identifier), z = Math.abs(I.x), Y = Math.abs(I.y), q = $.value ? z > Y && z > 400 : Y > z && Y > 3;
      d.value = q ? I.direction === ({ left: "right", right: "left", top: "down", bottom: "up" }[p.value] || ue()) : D.value > 0.5;
    }
    const Ht = y(() => g.value ? { transform: p.value === "left" ? `translateX(calc(-100% + ${D.value * S.value}px))` : p.value === "right" ? `translateX(calc(100% - ${D.value * S.value}px))` : p.value === "top" ? `translateY(calc(-100% + ${D.value * S.value}px))` : p.value === "bottom" ? `translateY(calc(100% - ${D.value * S.value}px))` : ue(), transition: "none" } : void 0);
    return { isDragging: g, dragProgress: D, dragStyles: Ht };
  }({ isActive: F, isTemporary: O, width: ve, touchless: Xe(e, "touchless"), position: ae }), je = y(() => {
    const s = O.value ? 0 : e.rail && e.expandOnHover ? Number(e.railWidth) : ve.value;
    return J.value ? s * we.value : s;
  }), { layoutItemStyles: Fe, layoutItemScrimStyles: _e } = function(s) {
    const d = K(Sn);
    if (!d)
      throw new Error("[Vuetify] Could not find injected layout");
    const b = s.id ?? `layout-item-${Pt()}`, S = H("useLayoutItem");
    Pe(Cn, { id: b });
    const B = U(!1);
    Xt(() => B.value = !0), Kt(() => B.value = !1);
    const { layoutItemStyles: p, layoutItemScrimStyles: $ } = d.register(S, { ...s, active: y(() => !B.value && s.active.value), id: b });
    return He(() => d.unregister(b)), { layoutItemStyles: p, layoutRect: d.layoutRect, layoutItemScrimStyles: $ };
  }({ id: e.name, order: y(() => parseInt(e.order, 10)), position: ae, layoutSize: je, elementSize: ve, active: y(() => F.value || J.value), disableTransitions: y(() => J.value), absolute: y(() => e.absolute || he.value && typeof me.value != "string") }), { isStuck: me, stickyStyles: be } = function(s) {
    let { rootEl: d, isSticky: b, layoutItemStyles: S } = s;
    const B = U(!1), p = U(0), $ = y(() => {
      const v = typeof B.value == "boolean" ? "top" : B.value;
      return [b.value ? { top: "auto", bottom: "auto", height: void 0 } : void 0, B.value ? { [v]: ce(p.value) } : { top: S.value.top }];
    });
    Ie(() => {
      X(b, (v) => {
        v ? window.addEventListener("scroll", l, { passive: !0 }) : window.removeEventListener("scroll", l);
      }, { immediate: !0 });
    }), He(() => {
      window.removeEventListener("scroll", l);
    });
    let A = 0;
    function l() {
      const v = A > window.scrollY ? "up" : "down", u = d.value.getBoundingClientRect(), g = parseFloat(S.value.top ?? 0), D = window.scrollY - Math.max(0, p.value - g), k = u.height + Math.max(p.value, g) - window.scrollY - window.innerHeight, N = parseFloat(getComputedStyle(d.value).getPropertyValue("--v-body-scroll-y")) || 0;
      u.height < window.innerHeight - g ? (B.value = "top", p.value = g) : v === "up" && B.value === "bottom" || v === "down" && B.value === "top" ? (p.value = window.scrollY + u.top - N, B.value = !0) : v === "down" && k <= 0 ? (p.value = 0, B.value = "bottom") : v === "up" && D <= 0 && (N ? B.value !== "top" && (p.value = -D + N + g, B.value = "top") : (p.value = u.top + D, B.value = "top")), A = window.scrollY;
    }
    return { isStuck: B, stickyStyles: $ };
  }({ rootEl: ye, isSticky: he, layoutItemStyles: Fe }), oe = bt(y(() => typeof e.scrim == "string" ? e.scrim : null)), re = y(() => ({ ...J.value ? { opacity: 0.2 * we.value, transition: "none" } : void 0, ..._e.value }));
  function Q() {
    Z.value = !0;
  }
  function Se() {
    Z.value = !1;
  }
  return function(s, d) {
    const b = Je(), S = _(s), B = y(() => {
      if (W(d == null ? void 0 : d.disabled))
        return b.value;
      const p = W(d == null ? void 0 : d.scoped), $ = W(d == null ? void 0 : d.reset), A = W(d == null ? void 0 : d.root);
      if (S.value == null && !(p || $ || A))
        return b.value;
      let l = de(S.value, { prev: b.value });
      if (p)
        return l;
      if ($ || A) {
        const v = Number($ || 1 / 0);
        for (let u = 0; u <= v && l && "prev" in l; u++)
          l = l.prev;
        return l && typeof A == "string" && A in l && (l = de(de(l, { prev: l }), l[A])), l;
      }
      return l.prev ? de(l.prev, l) : l;
    });
    Pe(Te, B);
  }({ VList: { bgColor: "transparent" } }), Vt(() => {
    const s = r.image || e.image;
    return L(kt, null, [L(e.tag, Ve({ ref: ye, onMouseenter: Q, onMouseleave: Se, class: ["v-navigation-drawer", `v-navigation-drawer--${ae.value}`, { "v-navigation-drawer--expand-on-hover": e.expandOnHover, "v-navigation-drawer--floating": e.floating, "v-navigation-drawer--is-hovering": Z.value, "v-navigation-drawer--rail": e.rail, "v-navigation-drawer--temporary": O.value, "v-navigation-drawer--active": F.value, "v-navigation-drawer--sticky": he.value }, m.value, c.value, i.value, f.value, h.value, C.value, e.class], style: [w.value, Fe.value, Ge.value, V.value, be.value, e.style] }, T, t), { default: () => {
      var d, b, S, B;
      return [s && L("div", { key: "image", class: "v-navigation-drawer__img" }, [r.image ? (d = r.image) == null ? void 0 : d.call(r, { image: e.image }) : L("img", { src: e.image, alt: "" }, null)]), r.prepend && L("div", { class: "v-navigation-drawer__prepend" }, [(b = r.prepend) == null ? void 0 : b.call(r)]), L("div", { class: "v-navigation-drawer__content" }, [(S = r.default) == null ? void 0 : S.call(r)]), r.append && L("div", { class: "v-navigation-drawer__append" }, [(B = r.append) == null ? void 0 : B.call(r)])];
    } }), L(nn, { name: "fade-transition" }, { default: () => [O.value && (J.value || F.value) && !!e.scrim && L("div", Ve({ class: ["v-navigation-drawer__scrim", oe.backgroundColorClasses.value], style: [re.value, oe.backgroundColorStyles.value], onClick: () => F.value = !1 }, T), null)] })]);
  }), { isStuck: me };
} }), j = "v-resize-drawer", jn = { handleBorderWidth: 8, handleColor: "primary", handleIcon: void 0, handleIconSize: "x-small", handlePosition: "center", height: void 0, location: "start", maxWidth: window.innerWidth, minWidth: 56, modelValue: !0, name: void 0, rail: !1, railWidth: 8, resizable: !0, saveWidth: !0, storageName: `${j}-width`, storageType: "local", tag: "nav", theme: void 0, touchless: !1, width: 256, widthSnapBack: !0 };
function Ke(e, n) {
  return e === "local" ? localStorage.getItem(n) : e === "session" ? sessionStorage.getItem(n) : "";
}
const qe = (e) => {
  const { action: n = "update", rail: t, resizedWidth: o, saveWidth: r, storageName: a, storageType: m } = e;
  if (!r || t)
    return;
  let i = o;
  i = i ?? void 0, n === "set" && (i = Ke(m, a) ?? "", i = i || o), m === "local" && localStorage.setItem(a, String(i)), m === "session" && sessionStorage.setItem(a, String(i));
}, se = (e) => {
  const { unit: n = "px", value: t } = e;
  if (t != null && t !== "")
    return +t ? `${Number(t)}${n}` : String(t);
}, te = (e) => {
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
    let E = h;
    return Object.entries(f).forEach(([C, x]) => {
      h.toLowerCase() != C.toLowerCase() || (E = x);
    }), E;
  }(e), t = 0, o = 0, r = 0, a = 0, m = 0, i = 0;
  if (n.substring(0, 1) === "#")
    n = function(h) {
      let f = h.replace("#", "");
      f.length === 3 && (f = f.split("").map((F) => F + F).join(""));
      const E = parseInt(f.substring(0, 2), 16), C = parseInt(f.substring(2, 4), 16), x = parseInt(f.substring(4, 6), 16);
      return [E, C, x];
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
  const t = n, o = e, r = K(_t, {}), a = _({ ...o, ...r });
  Ze(() => {
    a.value = { ...o, ...r };
  });
  const { handleIconSize: m, handlePosition: i } = Wt(a.value), c = y(() => a.value), w = K(Symbol.for("vuetify:icons")), h = _(256), f = { mouseDown: !1, mouseUp: !0 }, E = _(!1), C = _(!1), x = _(), F = _(256), V = rn(), T = sn(), ye = cn();
  $t(() => {
    a.value.name === void 0 && (a.value.name = String(Math.floor(1e8 * Math.random())));
  }), Ie(() => {
    (function() {
      if (a.value.location !== "start" && a.value.location !== "end" && a.value.location !== "left" && a.value.location !== "right")
        throw new Error("[VResizeDrawer]: 'top' and 'bottom' locations are not supported.");
      if (a.value.rail)
        return void (F.value = a.value.railWidth || void 0);
      const l = Ke(a.value.storageType, a.value.storageName), v = se({ value: a.value.width });
      F.value = v, h.value = F.value, a.value.saveWidth && l && !a.value.rail && (F.value = Ke(a.value.storageType, a.value.storageName)), F.value = te(F.value), qe({ action: "update", rail: a.value.rail, resizedWidth: F.value, saveWidth: a.value.saveWidth, storageName: a.value.storageName, storageType: a.value.storageType });
    })();
  }), ln(() => {
    document.removeEventListener("mouseup", B, !1), document.removeEventListener("mousemove", oe, !1), document.removeEventListener("touchend", p, !1), document.removeEventListener("touchstart", b, !1);
  }), X(() => o.modelValue, (l) => {
    t("update:modelValue", l), l || t("close");
  });
  const Z = y(() => ((l) => {
    const { absolute: v = !1, expandOnHover: u, floating: g, isMouseover: D, location: k, rail: N, railWidth: R, temporary: G } = l;
    return { [`${j}`]: !0, "v-navigation-drawer--absolute": v ?? !1, "v-navigation-drawer--custom-rail": Number(R) !== 56, "v-navigation-drawer--fixed": !v, "v-navigation-drawer--floating": g, "v-navigation-drawer--is-mouseover": W(D), "v-navigation-drawer--left": k === "left" || k === "start" || k === void 0, "v-navigation-drawer--open-on-hover": u, "v-navigation-drawer--rail": N ?? !1, "v-navigation-drawer--right": k === "right" || k === "end", "v-navigation-drawer--temporary": G || !1 };
  })({ absolute: a.value.absolute, expandOnHover: a.value.expandOnHover, floating: a.value.floating, isMouseover: E, location: a.value.location, rail: a.value.rail, railWidth: a.value.railWidth, temporary: a.value.temporary })), ve = y(() => ((l) => {
    const { isMouseDown: v, maxWidth: u, minWidth: g, rail: D, railWidth: k, resizedWidth: N, widthSnapBack: R } = l;
    if (D)
      return {};
    let G = D ? k : W(N);
    return R || (parseInt(G) >= parseInt(u) && (G = parseInt(u)), parseInt(G) <= parseInt(g) && (G = parseInt(g))), { transitionDuration: W(v) ? "0s" : ".2s", width: se({ value: G }) };
  })({ isMouseDown: C, maxWidth: re.value, minWidth: Q.value, rail: a.value.rail, railWidth: a.value.railWidth, resizedWidth: F, widthSnapBack: a.value.widthSnapBack })), ae = y(() => {
    if (a.value.rail)
      return;
    const l = se({ value: F.value });
    return te(l);
  }), O = y(() => ((l) => {
    const { drawerLocation: v, handlePosition: u } = l;
    return { [`${j}--handle-container`]: !0, [`${j}--handle-container-position-${u}`]: !0, [`${j}--handle-container-parent-${v}`]: !0 };
  })({ drawerLocation: a.value.location, handlePosition: a.value.handlePosition })), he = y(() => ((l) => {
    const { borderWidth: v, handleColor: u, iconSize: g, position: D, theme: k } = l;
    if (D === "border")
      return { backgroundColor: Et(u, k), height: "100%", width: se({ value: v }) };
    const N = _n[g];
    return { backgroundColor: "transparent", height: N, width: N };
  })({ borderWidth: a.value.handleBorderWidth || 1, handleColor: a.value.handleColor, iconSize: a.value.handleIconSize, position: a.value.handlePosition, theme: T })), J = y(() => (!a.value.touchless || !ye.mobile.value) && !(!a.value.resizable || a.value.rail)), we = y(() => ((l) => {
    const { color: v, theme: u } = l;
    return { color: Et(v, u) };
  })({ color: o.handleColor, theme: T })), Ge = y(() => ((l) => {
    const { drawerLocation: v, handlePosition: u, iconOptions: g, isUserIcon: D } = l;
    return { [`${j}--handle-container-icon`]: !0, [`${j}--handle-container-icon-${u}-${v}`]: !0, [`${j}--handle-container-icon-user-icon`]: D, [`${j}--handle-container-icon-fa`]: (g == null ? void 0 : g.defaultSet) === "fa", [`${j}--handle-container-icon-fa-${u}`]: (g == null ? void 0 : g.defaultSet) === "fa" };
  })({ drawerLocation: a.value.location, handlePosition: a.value.handlePosition, iconOptions: w, isUserIcon: a.value.handleIcon !== void 0 && a.value.handleIcon !== null })), je = y(() => ((v) => {
    const { icon: u, iconOptions: g, name: D } = v;
    if (D === "border")
      return;
    if (u)
      return u;
    let k = ((g == null ? void 0 : g.defaultSet) ?? "").toLowerCase();
    k = k === "fa" || k === "fasvg" ? "fa" : k;
    const N = Hn[k];
    if (!N)
      throw new Error(`[VResizeDrawer]: No default ${g == null ? void 0 : g.defaultSet} icon set found.`);
    const R = N[D];
    if (!R)
      throw new Error(`[VResizeDrawer]: No ${D} icon found.`);
    return R;
  })({ icon: a.value.handleIcon, iconOptions: w, name: a.value.handlePosition }));
  function Fe() {
    E.value = !0, t("drawer:mouseenter", E.value);
  }
  function _e() {
    E.value = !1, t("drawer:mouseleave", E.value);
  }
  function me(l, v) {
    let u = v;
    a.value.location !== "right" && a.value.location !== "end" || (u = document.body.scrollWidth - u), F.value = se({ value: u }) || void 0, document.body.style.cursor = "grabbing", A("handle:touchmove", l), A("handle:drag", l);
  }
  function be(l) {
    var v;
    me(l, ((v = l.touches[0]) == null ? void 0 : v.clientX) ?? 0);
  }
  function oe(l) {
    me(l, l.clientX);
  }
  const re = y(() => {
    if (a.value.maxWidth === "100%")
      return window.innerWidth;
    if (String(a.value.maxWidth).includes("%")) {
      const l = parseInt(String(a.value.maxWidth).replace("%", ""));
      return window.innerWidth * l / 100;
    }
    return a.value.maxWidth;
  }), Q = y(() => {
    if (a.value.minWidth === "100%")
      return window.innerWidth;
    if (String(a.value.minWidth).includes("%")) {
      const l = parseInt(String(a.value.minWidth).replace("%", ""));
      return window.innerWidth * l / 100;
    }
    return a.value.minWidth;
  });
  function Se(l) {
    let v = l;
    parseInt(v) >= parseInt(re.value) && (v = parseInt(re.value)), parseInt(v) <= parseInt(Q.value) && (v = parseInt(Q.value)), typeof v == "number" && (v = Math.round(v));
    let u = te(v);
    const g = te(re.value), D = te(Q.value);
    return u >= g && (u = g), D >= u && (u = D), u;
  }
  function Ce(l) {
    A("handle:click", l);
  }
  function Be(l) {
    F.value = te(h.value), qe({ rail: a.value.rail, resizedWidth: F.value, saveWidth: a.value.saveWidth, storageName: a.value.storageName, storageType: a.value.storageType }), A("handle:dblclick", l);
  }
  function s(l, v) {
    l.preventDefault(), l.stopPropagation();
    const u = l.type;
    let g = 25;
    C.value = !0, a.value.handlePosition === "border" && (g = a.value.handleBorderWidth || 1), f.mouseUp = !1, v < g && (u === "touchstart" ? document.addEventListener("touchmove", be, !1) : document.addEventListener("mousemove", oe, !1)), f.mouseDown || (f.mouseDown = !0, u === "touchstart" ? (document.addEventListener("touchend", p, !1), A("handle:touchstart", l)) : (document.addEventListener("mouseup", B, !1), A("handle:mousedown", l)));
  }
  function d(l) {
    s(l, l.offsetX);
  }
  function b(l) {
    var v;
    s(l, ((v = l.touches[0]) == null ? void 0 : v.radiusX) ?? 0);
  }
  function S(l) {
    l.preventDefault(), l.stopPropagation();
    const v = l.type, u = x.value;
    C.value = !1, f.mouseDown = !1, F.value = (u == null ? void 0 : u.width) ?? h.value, document.body.style.cursor = "";
    const g = F.value;
    String(g).includes("-") && (F.value = Q.value), F.value = Se(F.value), F.value = se({ value: F.value }) || void 0, F.value = te(F.value), qe({ rail: a.value.rail, resizedWidth: F.value, saveWidth: a.value.saveWidth, storageName: a.value.storageName, storageType: a.value.storageType }), f.mouseUp || (f.mouseUp = !0, v === "touchend" ? (document.removeEventListener("touchend", p, !1), document.removeEventListener("touchmove", be, !1), A("handle:touchend", l)) : (document.removeEventListener("mouseup", B, !1), document.removeEventListener("mousemove", oe, !1), A("handle:mouseup", l)));
  }
  function B(l) {
    S(l);
  }
  function p(l) {
    S(l);
  }
  const $ = y(() => a.value.theme ? a.value.theme : T.global.current.value.dark === !0 ? "dark" : "light");
  function A(l, v) {
    const u = parseInt(Se(F.value)) ?? 0, g = { e: v, eventName: l, offsetWidth: window.innerWidth - u + "px", resizedWidth: `${u}px`, width: `${u}px` };
    t(l, g);
  }
  return (l, v) => (Ee(), at(W(Gn), Ve(W(c), { ref_key: "resizeDrawer", ref: x, class: W(Z), location: W(a).location, "model-value": l.modelValue, name: W(a).name, style: W(ve), tag: W(a).tag, theme: W($), width: W(ae), onMouseenter: Fe, onMouseleave: _e }), { default: un(() => [W(J) ? (Ee(), ot("div", { key: 0, class: rt(W(O)), style: lt(W(he)), onClick: Ce, onDblclick: Be, onMousedown: d, onMouseup: B, onTouchend: p, onTouchstart: b }, [W(V).handle ? (Ee(), ot("div", Yn, [ke(l.$slots, "handle")])) : W(i) !== "border" ? (Ee(), at(zn, { key: 1, class: rt(["v-resize-drawer--handle-icon", W(Ge)]), icon: W(je), size: W(m), style: lt(W(we)) }, null, 8, ["class", "icon", "size", "style"])) : We("", !0)], 38)) : We("", !0), W(V).prepend ? ke(l.$slots, "prepend", { key: 1 }) : We("", !0), ke(l.$slots, "default"), W(V).append ? ke(l.$slots, "append", { key: 2 }) : We("", !0)]), _: 3 }, 16, ["class", "location", "model-value", "name", "style", "tag", "theme", "width"]));
} }), _t = Symbol();
function Kn(e = {}) {
  return { install: (n) => {
    n.provide(_t, e), n.component("VResizeDrawer", Un);
  } };
}
export {
  Un as VResizeDrawer,
  Kn as createVResizeDrawer,
  Un as default,
  _t as globalOptions
};
(function(){"use strict";try{if(typeof document<"u"){var n=document.createElement("style");n.appendChild(document.createTextNode(".v-resize-drawer{container-name:v-resize-drawer;container-type:inline-size}.v-resize-drawer--handle-container{align-items:center;cursor:grab;display:flex;justify-content:center;position:absolute;z-index:1}.v-resize-drawer--handle-container-icon-parent-end,.v-resize-drawer--handle-container-icon-parent-right{left:initial;right:0}.v-resize-drawer--handle-container-icon-center-end,.v-resize-drawer--handle-container-icon-center-right{transform:rotate(180deg)}.v-resize-drawer--handle-container-icon-user-icon{transform:none}.v-resize-drawer--handle-container-icon-fa{font-size:.7rem!important}.v-resize-drawer--handle-container-parent-left,.v-resize-drawer--handle-container-parent-start,.v-resize-drawer--handle-container-parent-undefined{right:0}.v-resize-drawer--handle-container-parent-end,.v-resize-drawer--handle-container-parent-right{left:0}.v-resize-drawer--handle-container-position-top{top:0}.v-resize-drawer--handle-container-position-center{top:50%;transform:translateY(-50%)}.v-resize-drawer--handle-container-position-bottom{bottom:0}.v-resize-drawer--handle-container-position-border{cursor:col-resize;height:100%;top:0;width:8px}@container v-resize-drawer (width > 0) and (max-width: 599.98px){.v-col-xs-12{flex:0 0 100%!important;flex-basis:0;flex-grow:1;max-width:100%!important}}@container v-resize-drawer (min-width: 600px){.v-col-sm-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-sm-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-sm-3{flex:0 0 25%;max-width:25%}.v-col-sm-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-sm-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-sm-6{flex:0 0 50%;max-width:50%}.v-col-sm-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-sm-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-sm-9{flex:0 0 75%;max-width:75%}.v-col-sm-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-sm-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-sm-12{flex:0 0 100%;max-width:100%}}@container v-resize-drawer (min-width: 960px){.v-col-md-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-md-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-md-3{flex:0 0 25%;max-width:25%}.v-col-md-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-md-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-md-6{flex:0 0 50%;max-width:50%}.v-col-md-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-md-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-md-9{flex:0 0 75%;max-width:75%}.v-col-md-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-md-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-md-12{flex:0 0 100%;max-width:100%}}@container v-resize-drawer (min-width: 1280px){.v-col-lg-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-lg-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-lg-3{flex:0 0 25%;max-width:25%}.v-col-lg-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-lg-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-lg-6{flex:0 0 50%;max-width:50%}.v-col-lg-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-lg-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-lg-9{flex:0 0 75%;max-width:75%}.v-col-lg-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-lg-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-lg-12{flex:0 0 100%;max-width:100%}}@container v-resize-drawer (min-width: 1920px){.v-col-xl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-xl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-xl-3{flex:0 0 25%;max-width:25%}.v-col-xl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-xl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-xl-6{flex:0 0 50%;max-width:50%}.v-col-xl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-xl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-xl-9{flex:0 0 75%;max-width:75%}.v-col-xl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-xl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-xl-12{flex:0 0 100%;max-width:100%}}@container v-resize-drawer (min-width: 2560px){.v-col-xxl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-xxl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-xxl-3{flex:0 0 25%;max-width:25%}.v-col-xxl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-xxl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-xxl-6{flex:0 0 50%;max-width:50%}.v-col-xxl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-xxl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-xxl-9{flex:0 0 75%;max-width:75%}.v-col-xxl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-xxl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-xxl-12{flex:0 0 100%;max-width:100%}}@container v-resize-drawer only print{.hidden-print-only{display:none!important}}@container v-resize-drawer only print{.d-print-only-none{display:none!important}.d-print-only-inline{display:inline!important}.d-print-only-inline-block{display:inline-block!important}.d-print-only-block{display:block!important}.d-print-only-table{display:table!important}.d-print-only-table-row{display:table-row!important}.d-print-only-table-cell{display:table-cell!important}.d-print-only-flex{display:flex!important}.d-print-only-inline-flex{display:inline-flex!important}}@container v-resize-drawer only screen{.hidden-screen-only{display:none!important}}@container v-resize-drawer only screen{.d-screen-only-none{display:none!important}.d-screen-only-inline{display:inline!important}.d-screen-only-inline-block{display:inline-block!important}.d-screen-only-block{display:block!important}.d-screen-only-table{display:table!important}.d-screen-only-table-row{display:table-row!important}.d-screen-only-table-cell{display:table-cell!important}.d-screen-only-flex{display:flex!important}.d-screen-only-inline-flex{display:inline-flex!important}}@container v-resize-drawer (max-width: 599.98px){.hidden-xs{display:none!important}}@container v-resize-drawer (max-width: 599.98px){.d-xs-none{display:none!important}.d-xs-inline{display:inline!important}.d-xs-inline-block{display:inline-block!important}.d-xs-block{display:block!important}.d-xs-table{display:table!important}.d-xs-table-row{display:table-row!important}.d-xs-table-cell{display:table-cell!important}.d-xs-flex{display:flex!important}.d-xs-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 600px) and (max-width: 959.98px){.hidden-sm{display:none!important}}@container v-resize-drawer (min-width: 600px) and (max-width: 959.98px){.d-sm-none{display:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:flex!important}.d-sm-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 960px) and (max-width: 1279.98px){.hidden-md{display:none!important}}@container v-resize-drawer (min-width: 960px) and (max-width: 1279.98px){.d-md-none{display:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:flex!important}.d-md-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 1280px) and (max-width: 1919.98px){.hidden-lg{display:none!important}}@container v-resize-drawer (min-width: 1280px) and (max-width: 1919.98px){.d-lg-none{display:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:flex!important}.d-lg-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 1920px) and (max-width: 2559.98px){.hidden-xl{display:none!important}}@container v-resize-drawer (min-width: 1920px) and (max-width: 2559.98px){.d-xl-none{display:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:flex!important}.d-xl-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 2560px){.hidden-xxl{display:none!important}}@container v-resize-drawer (min-width: 2560px){.d-xxl-none{display:none!important}.d-xxl-inline{display:inline!important}.d-xxl-inline-block{display:inline-block!important}.d-xxl-block{display:block!important}.d-xxl-table{display:table!important}.d-xxl-table-row{display:table-row!important}.d-xxl-table-cell{display:table-cell!important}.d-xxl-flex{display:flex!important}.d-xxl-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 600px){.hidden-sm-and-up{display:none!important}}@container v-resize-drawer (min-width: 600px){.d-sm-and-up-none{display:none!important}.d-sm-and-up-inline{display:inline!important}.d-sm-and-up-inline-block{display:inline-block!important}.d-sm-and-up-block{display:block!important}.d-sm-and-up-table{display:table!important}.d-sm-and-up-table-row{display:table-row!important}.d-sm-and-up-table-cell{display:table-cell!important}.d-sm-and-up-flex{display:flex!important}.d-sm-and-up-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 960px){.hidden-md-and-up{display:none!important}}@container v-resize-drawer (min-width: 960px){.d-md-and-up-none{display:none!important}.d-md-and-up-inline{display:inline!important}.d-md-and-up-inline-block{display:inline-block!important}.d-md-and-up-block{display:block!important}.d-md-and-up-table{display:table!important}.d-md-and-up-table-row{display:table-row!important}.d-md-and-up-table-cell{display:table-cell!important}.d-md-and-up-flex{display:flex!important}.d-md-and-up-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 1280px){.hidden-lg-and-up{display:none!important}}@container v-resize-drawer (min-width: 1280px){.d-lg-and-up-none{display:none!important}.d-lg-and-up-inline{display:inline!important}.d-lg-and-up-inline-block{display:inline-block!important}.d-lg-and-up-block{display:block!important}.d-lg-and-up-table{display:table!important}.d-lg-and-up-table-row{display:table-row!important}.d-lg-and-up-table-cell{display:table-cell!important}.d-lg-and-up-flex{display:flex!important}.d-lg-and-up-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 1920px){.hidden-xl-and-up{display:none!important}}@container v-resize-drawer (min-width: 1920px){.d-xl-and-up-none{display:none!important}.d-xl-and-up-inline{display:inline!important}.d-xl-and-up-inline-block{display:inline-block!important}.d-xl-and-up-block{display:block!important}.d-xl-and-up-table{display:table!important}.d-xl-and-up-table-row{display:table-row!important}.d-xl-and-up-table-cell{display:table-cell!important}.d-xl-and-up-flex{display:flex!important}.d-xl-and-up-inline-flex{display:inline-flex!important}}@container v-resize-drawer (max-width: 959.98px){.hidden-sm-and-down{display:none!important}}@container v-resize-drawer (max-width: 959.98px){.d-sm-and-down-none{display:none!important}.d-sm-and-down-inline{display:inline!important}.d-sm-and-down-inline-block{display:inline-block!important}.d-sm-and-down-block{display:block!important}.d-sm-and-down-table{display:table!important}.d-sm-and-down-table-row{display:table-row!important}.d-sm-and-down-table-cell{display:table-cell!important}.d-sm-and-down-flex{display:flex!important}.d-sm-and-down-inline-flex{display:inline-flex!important}}@container v-resize-drawer (max-width: 1279.98px){.hidden-md-and-down{display:none!important}}@container v-resize-drawer (max-width: 1279.98px){.d-md-and-down-none{display:none!important}.d-md-and-down-inline{display:inline!important}.d-md-and-down-inline-block{display:inline-block!important}.d-md-and-down-block{display:block!important}.d-md-and-down-table{display:table!important}.d-md-and-down-table-row{display:table-row!important}.d-md-and-down-table-cell{display:table-cell!important}.d-md-and-down-flex{display:flex!important}.d-md-and-down-inline-flex{display:inline-flex!important}}@container v-resize-drawer (max-width: 1919.98px){.hidden-lg-and-down{display:none!important}}@container v-resize-drawer (max-width: 1919.98px){.d-lg-and-down-none{display:none!important}.d-lg-and-down-inline{display:inline!important}.d-lg-and-down-inline-block{display:inline-block!important}.d-lg-and-down-block{display:block!important}.d-lg-and-down-table{display:table!important}.d-lg-and-down-table-row{display:table-row!important}.d-lg-and-down-table-cell{display:table-cell!important}.d-lg-and-down-flex{display:flex!important}.d-lg-and-down-inline-flex{display:inline-flex!important}}@container v-resize-drawer (max-width: 2559.98px){.hidden-xl-and-down{display:none!important}}@container v-resize-drawer (max-width: 2559.98px){.d-xl-and-down-none{display:none!important}.d-xl-and-down-inline{display:inline!important}.d-xl-and-down-inline-block{display:inline-block!important}.d-xl-and-down-block{display:block!important}.d-xl-and-down-table{display:table!important}.d-xl-and-down-table-row{display:table-row!important}.d-xl-and-down-table-cell{display:table-cell!important}.d-xl-and-down-flex{display:flex!important}.d-xl-and-down-inline-flex{display:inline-flex!important}}")),document.head.appendChild(n)}}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})();
