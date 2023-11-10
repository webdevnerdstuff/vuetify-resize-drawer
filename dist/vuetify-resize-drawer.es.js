import { Fragment as kt, reactive as _t, computed as y, watchEffect as Wt, toRefs as Ht, warn as Yt, ref as _, unref as $, provide as ze, inject as J, shallowRef as j, defineComponent as At, getCurrentInstance as Ut, onDeactivated as qt, onActivated as Xt, onBeforeUnmount as je, watch as U, onScopeDispose as Kt, effectScope as Zt, toRaw as Jt, isRef as me, onMounted as xe, readonly as Qt, createVNode as I, mergeProps as Ne, toRef as qe, Text as en, onBeforeMount as tn, Transition as nn, nextTick as an, mergeDefaults as on, useSlots as rn, onUnmounted as ln, openBlock as Be, createBlock as nt, withCtx as sn, createElementBlock as at, normalizeClass as ot, normalizeStyle as rt, renderSlot as De, createCommentVNode as Ee } from "vue";
import { useTheme as un, useDisplay as cn } from "vuetify";
/**
 * @name @wdns/vuetify-resize-drawer
 * @version 3.0.2
 * @description The vuetify-resize-drawer component extends the functionality of the v-navigation-drawer so that it is resizable by the user.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2023, WebDevNerdStuff
 * @homepage https://webdevnerdstuff.github.io/vuetify-resize-drawer/
 * @repository https://github.com/webdevnerdstuff/vuetify-resize-drawer
 * @license MIT License
*/
function z(e, n) {
  return (a) => Object.keys(e).reduce((t, r) => {
    const d = typeof e[r] == "object" && e[r] != null && !Array.isArray(e[r]) ? e[r] : { type: e[r] };
    return t[r] = a && r in a ? { ...d, default: a[r] } : d, n && !t[r].source && (t[r].source = n), t;
  }, {});
}
const $t = z({ class: [String, Array], style: { type: [String, Array, Object], default: null } }, "component");
function it(e, n, a) {
  (function(t, r) {
    if (r.has(t))
      throw new TypeError("Cannot initialize the same private elements twice on an object");
  })(e, n), n.set(e, a);
}
function dn(e, n, a) {
  return function(t, r, d) {
    if (r.set)
      r.set.call(t, d);
    else {
      if (!r.writable)
        throw new TypeError("attempted to set read only private field");
      r.value = d;
    }
  }(e, xt(e, n, "set"), a), a;
}
function Z(e, n) {
  return function(a, t) {
    return t.get ? t.get.call(a) : t.value;
  }(e, xt(e, n, "get"));
}
function xt(e, n, a) {
  if (!n.has(e))
    throw new TypeError("attempted to " + a + " private field on non-instance");
  return n.get(e);
}
function le(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  return e == null || e === "" ? void 0 : isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${n}` : void 0;
}
function lt(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function _e(e, n) {
  return n.every((a) => e.hasOwnProperty(a));
}
function st(e, n) {
  return e + (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, n - e.length));
}
function se() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = arguments.length > 2 ? arguments[2] : void 0;
  const t = {};
  for (const r in e)
    t[r] = e[r];
  for (const r in n) {
    const d = e[r], p = n[r];
    lt(d) && lt(p) ? t[r] = se(d, p, a) : Array.isArray(d) && Array.isArray(p) && a ? t[r] = a(d, p) : t[r] = p;
  }
  return t;
}
function Mt(e) {
  return e.map((n) => n.type === kt ? Mt(n.children) : n).flat();
}
function Q() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (Q.cache.has(e))
    return Q.cache.get(e);
  const n = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return Q.cache.set(e, n), n;
}
Q.cache = /* @__PURE__ */ new Map();
var ke = /* @__PURE__ */ new WeakMap(), ae = /* @__PURE__ */ new WeakMap();
class vn {
  constructor(n) {
    it(this, ke, { writable: !0, value: [] }), it(this, ae, { writable: !0, value: 0 }), this.size = n;
  }
  push(n) {
    Z(this, ke)[Z(this, ae)] = n, dn(this, ae, (Z(this, ae) + 1) % this.size);
  }
  values() {
    return Z(this, ke).slice(Z(this, ae)).concat(Z(this, ke).slice(0, Z(this, ae)));
  }
}
function It(e) {
  const n = _t({}), a = y(e);
  return Wt(() => {
    for (const t in a.value)
      n[t] = a.value[t];
  }, { flush: "sync" }), Ht(n);
}
const oe = 2.4, ut = 0.2126729, ct = 0.7151522, dt = 0.072175, hn = 0.55, mn = 0.58, pn = 0.57, gn = 0.62, We = 0.03, vt = 1.45, fn = 5e-4, yn = 1.25, wn = 1.25, ht = 0.078, mt = 12.82051282051282, Ae = 0.06, pt = 1e-3;
function gt(e, n) {
  const a = (e.r / 255) ** oe, t = (e.g / 255) ** oe, r = (e.b / 255) ** oe, d = (n.r / 255) ** oe, p = (n.g / 255) ** oe, l = (n.b / 255) ** oe;
  let c, w = a * ut + t * ct + r * dt, m = d * ut + p * ct + l * dt;
  if (w <= We && (w += (We - w) ** vt), m <= We && (m += (We - m) ** vt), Math.abs(m - w) < fn)
    return 0;
  if (m > w) {
    const v = (m ** hn - w ** mn) * yn;
    c = v < pt ? 0 : v < ht ? v - v * mt * Ae : v - Ae;
  } else {
    const v = (m ** gn - w ** pn) * wn;
    c = v > -pt ? 0 : v > -ht ? v - v * mt * Ae : v + Ae;
  }
  return 100 * c;
}
function Me(e) {
  Yt(`Vuetify: ${e}`);
}
function He(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
const ft = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, Fn = { rgb: (e, n, a, t) => ({ r: e, g: n, b: a, a: t }), rgba: (e, n, a, t) => ({ r: e, g: n, b: a, a: t }), hsl: (e, n, a, t) => yt({ h: e, s: n, l: a, a: t }), hsla: (e, n, a, t) => yt({ h: e, s: n, l: a, a: t }), hsv: (e, n, a, t) => pe({ h: e, s: n, v: a, a: t }), hsva: (e, n, a, t) => pe({ h: e, s: n, v: a, a: t }) };
function he(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && Me(`'${e}' is not a valid hex color`), { r: (16711680 & e) >> 16, g: (65280 & e) >> 8, b: 255 & e };
  if (typeof e == "string" && ft.test(e)) {
    const { groups: n } = e.match(ft), { fn: a, values: t } = n, r = t.split(/,\s*/).map((d) => d.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(a) ? parseFloat(d) / 100 : parseFloat(d));
    return Fn[a](...r);
  }
  if (typeof e == "string") {
    let n = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(n.length) ? n = n.split("").map((t) => t + t).join("") : [6, 8].includes(n.length) || Me(`'${e}' is not a valid hex(a) color`);
    const a = parseInt(n, 16);
    return (isNaN(a) || a < 0 || a > 4294967295) && Me(`'${e}' is not a valid hex(a) color`), function(t) {
      t = function(c) {
        return c.startsWith("#") && (c = c.slice(1)), c = c.replace(/([^0-9a-f])/gi, "F"), (c.length === 3 || c.length === 4) && (c = c.split("").map((w) => w + w).join("")), c.length !== 6 && (c = st(st(c, 6), 8, "F")), c;
      }(t);
      let [r, d, p, l] = function(c) {
        let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
        const m = [];
        let v = 0;
        for (; v < c.length; )
          m.push(c.substr(v, w)), v += w;
        return m;
      }(t, 2).map((c) => parseInt(c, 16));
      return l = l === void 0 ? l : l / 255, { r, g: d, b: p, a: l };
    }(n);
  }
  if (typeof e == "object") {
    if (_e(e, ["r", "g", "b"]))
      return e;
    if (_e(e, ["h", "s", "l"]))
      return pe(Lt(e));
    if (_e(e, ["h", "s", "v"]))
      return pe(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function pe(e) {
  const { h: n, s: a, v: t, a: r } = e, d = (l) => {
    const c = (l + n / 60) % 6;
    return t - t * a * Math.max(Math.min(c, 4 - c, 1), 0);
  }, p = [d(5), d(3), d(1)].map((l) => Math.round(255 * l));
  return { r: p[0], g: p[1], b: p[2], a: r };
}
function yt(e) {
  return pe(Lt(e));
}
function Lt(e) {
  const { h: n, s: a, l: t, a: r } = e, d = t + a * Math.min(t, 1 - t);
  return { h: n, s: d === 0 ? 0 : 2 - 2 * t / d, v: d, a: r };
}
const Pe = Symbol.for("vuetify:defaults");
function Ke() {
  const e = J(Pe);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function bn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ke();
  const t = T("useDefaults");
  if (n = n ?? t.type.name ?? t.type.__name, !n)
    throw new Error("[Vuetify] Could not determine component name");
  const r = y(() => {
    var l;
    return (l = a.value) == null ? void 0 : l[e._as ?? n];
  }), d = new Proxy(e, { get(l, c) {
    var m, v, E, S;
    const w = Reflect.get(l, c);
    return c === "class" || c === "style" ? [(m = r.value) == null ? void 0 : m[c], w].filter((W) => W != null) : typeof c != "string" || function(W, A) {
      var O, R;
      return ((O = W.props) == null ? void 0 : O[A]) !== void 0 || ((R = W.props) == null ? void 0 : R[Q(A)]) !== void 0;
    }(t.vnode, c) ? w : ((v = r.value) == null ? void 0 : v[c]) ?? ((S = (E = a.value) == null ? void 0 : E.global) == null ? void 0 : S[c]) ?? w;
  } }), p = j();
  return Wt(() => {
    if (r.value) {
      const l = Object.entries(r.value).filter((c) => {
        let [w] = c;
        return w.startsWith(w[0].toUpperCase());
      });
      p.value = l.length ? Object.fromEntries(l) : void 0;
    } else
      p.value = void 0;
  }), { props: d, provideSubDefaults: function() {
    const l = function(c) {
      let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : T("injectSelf");
      const { provides: m } = w;
      if (m && c in m)
        return m[c];
    }(Pe, t);
    ze(Pe, y(() => p.value ? se((l == null ? void 0 : l.value) ?? {}, p.value) : l == null ? void 0 : l.value));
  } };
}
function Ve(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return Me("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = z(e.props ?? {}, e.name)();
    const n = Object.keys(e.props).filter((a) => a !== "class" && a !== "style");
    e.filterProps = function(a) {
      return function(t, r) {
        const d = {}, p = new Set(Object.keys(t));
        for (const l of r)
          p.has(l) && (d[l] = t[l]);
        return d;
      }(a, n);
    }, e.props._as = String, e.setup = function(a, t) {
      const r = Ke();
      if (!r.value)
        return e._setup(a, t);
      const { props: d, provideSubDefaults: p } = bn(a, a._as ?? e.name, r), l = e._setup(d, t);
      return p(), l;
    };
  }
  return e;
}
function Ze() {
  let e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
  return (n) => (e ? Ve : At)(n);
}
function T(e, n) {
  const a = Ut();
  if (!a)
    throw new Error(`[Vuetify] ${e} ${n || "must be called from inside a setup function"}`);
  return a;
}
function Ie() {
  const e = T(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables").type;
  return Q((e == null ? void 0 : e.aliasName) || (e == null ? void 0 : e.name));
}
let zt = 0, Le = /* @__PURE__ */ new WeakMap();
function Nt() {
  const e = T("getUid");
  if (Le.has(e))
    return Le.get(e);
  {
    const n = zt++;
    return Le.set(e, n), n;
  }
}
function Pt(e) {
  T("useRender").render = e;
}
Nt.reset = () => {
  zt = 0, Le = /* @__PURE__ */ new WeakMap();
};
const Sn = Symbol.for("vuetify:layout"), Cn = Symbol.for("vuetify:layout-item"), Bn = z({ name: { type: String }, order: { type: [Number, String], default: 0 }, absolute: Boolean }, "layout-item");
function $e(e, n) {
  let a;
  function t() {
    a = Zt(), a.run(() => n.length ? n(() => {
      a == null || a.stop(), t();
    }) : n());
  }
  U(e, (r) => {
    r && !a ? t() : r || (a == null || a.stop(), a = void 0);
  }, { immediate: !0 }), Kt(() => {
    a == null || a.stop();
  });
}
const Dn = Symbol.for("vuetify:locale"), wt = Symbol.for("vuetify:theme"), Vt = z({ theme: String }, "theme");
function Tt(e) {
  T("provideTheme");
  const n = J(wt, null);
  if (!n)
    throw new Error("Could not find Vuetify theme injection");
  const a = y(() => e.theme ?? n.name.value), t = y(() => n.themes.value[a.value]), r = y(() => n.isDisabled ? void 0 : `v-theme--${a.value}`), d = { ...n, name: a, current: t, themeClasses: r };
  return ze(wt, d), d;
}
const Ot = z({ tag: { type: String, default: "div" } }, "tag"), En = z({ border: [Boolean, Number, String] }, "border");
function Rt(e) {
  return It(() => {
    const n = [], a = {};
    if (e.value.background)
      if (He(e.value.background)) {
        if (a.backgroundColor = e.value.background, !e.value.text && He(t = e.value.background) && !/^((rgb|hsl)a?\()?var\(--/.test(t)) {
          const r = he(e.value.background);
          if (r.a == null || r.a === 1) {
            const d = function(p) {
              const l = Math.abs(gt(he(0), he(p)));
              return Math.abs(gt(he(16777215), he(p))) > Math.min(l, 50) ? "#fff" : "#000";
            }(r);
            a.color = d, a.caretColor = d;
          }
        }
      } else
        n.push(`bg-${e.value.background}`);
    var t;
    return e.value.text && (He(e.value.text) ? (a.color = e.value.text, a.caretColor = e.value.text) : n.push(`text-${e.value.text}`)), { colorClasses: n, colorStyles: a };
  });
}
function Ft(e, n) {
  const a = y(() => ({ background: me(e) ? e.value : n ? e[n] : null })), { colorClasses: t, colorStyles: r } = Rt(a);
  return { backgroundColorClasses: t, backgroundColorStyles: r };
}
const kn = z({ elevation: { type: [Number, String], validator(e) {
  const n = parseInt(e);
  return !isNaN(n) && n >= 0 && n <= 24;
} } }, "elevation"), Wn = z({ rounded: { type: [Boolean, Number, String], default: void 0 } }, "rounded"), Gt = [String, Function, Object, Array], An = Symbol.for("vuetify:icons"), Te = z({ icon: { type: Gt }, tag: { type: String, required: !0 } }, "icon"), bt = Ze()({ name: "VComponentIcon", props: Te(), setup(e, n) {
  let { slots: a } = n;
  return () => {
    const t = e.icon;
    return I(e.tag, null, { default: () => {
      var r;
      return [e.icon ? I(t, null, null) : (r = a.default) == null ? void 0 : r.call(a)];
    } });
  };
} }), $n = Ve({ name: "VSvgIcon", inheritAttrs: !1, props: Te(), setup(e, n) {
  let { attrs: a } = n;
  return () => I(e.tag, Ne(a, { style: null }), { default: () => [I("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((t) => Array.isArray(t) ? I("path", { d: t[0], "fill-opacity": t[1] }, null) : I("path", { d: t }, null)) : I("path", { d: e.icon }, null)])] });
} });
Ve({ name: "VLigatureIcon", props: Te(), setup: (e) => () => I(e.tag, null, { default: () => [e.icon] }) }), Ve({ name: "VClassIcon", props: Te(), setup: (e) => () => I(e.tag, { class: e.icon }, null) });
const xn = ["x-small", "small", "default", "large", "x-large"], Mn = z({ size: { type: [String, Number], default: "default" } }, "size"), In = z({ color: String, start: Boolean, end: Boolean, icon: Gt, ...$t(), ...Mn(), ...Ot({ tag: "i" }), ...Vt() }, "VIcon"), Ln = Ze()({ name: "VIcon", props: In(), setup(e, n) {
  let { attrs: a, slots: t } = n;
  const r = _(), { themeClasses: d } = Tt(e), { iconData: p } = ((m) => {
    const v = J(An);
    if (!v)
      throw new Error("Missing Vuetify Icons provide!");
    return { iconData: y(() => {
      var O;
      const E = $(m);
      if (!E)
        return { component: bt };
      let S = E;
      if (typeof S == "string" && (S = S.trim(), S.startsWith("$") && (S = (O = v.aliases) == null ? void 0 : O[S.slice(1)])), !S)
        throw new Error(`Could not find aliased icon "${E}"`);
      if (Array.isArray(S))
        return { component: $n, icon: S };
      if (typeof S != "string")
        return { component: bt, icon: S };
      const W = Object.keys(v.sets).find((R) => typeof S == "string" && S.startsWith(`${R}:`)), A = W ? S.slice(W.length + 1) : S;
      return { component: v.sets[W ?? v.defaultSet].component, icon: A };
    }) };
  })(y(() => r.value || e.icon)), { sizeClasses: l } = function(m) {
    let v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ie();
    return It(() => {
      let E, S;
      var W, A;
      return W = xn, A = m.size, W.includes(A) ? E = `${v}--size-${m.size}` : m.size && (S = { width: le(m.size), height: le(m.size) }), { sizeClasses: E, sizeStyles: S };
    });
  }(e), { textColorClasses: c, textColorStyles: w } = function(m, v) {
    const E = y(() => ({ text: me(m) ? m.value : v ? m[v] : null })), { colorClasses: S, colorStyles: W } = Rt(E);
    return { textColorClasses: S, textColorStyles: W };
  }(qe(e, "color"));
  return Pt(() => {
    var v, E;
    const m = (v = t.default) == null ? void 0 : v.call(t);
    return m && (r.value = (E = Mt(m).filter((S) => S.type === en && S.children && typeof S.children == "string")[0]) == null ? void 0 : E.children), I(p.value.component, { tag: e.tag, icon: p.value.icon, class: ["v-icon", "notranslate", d.value, l.value, c.value, { "v-icon--clickable": !!a.onClick, "v-icon--start": e.start, "v-icon--end": e.end }, e.class], style: [l.value ? void 0 : { fontSize: le(e.size), height: le(e.size), width: le(e.size) }, w.value, e.style], role: a.onClick ? "button" : void 0, "aria-hidden": !a.onClick }, { default: () => [m] });
  }), {};
} }), zn = Symbol.for("vuetify:display"), Nn = z({ mobileBreakpoint: [Number, String] }, "display"), Pn = 100, Vn = 20;
function St(e) {
  return (e < 0 ? -1 : 1) * Math.sqrt(Math.abs(e)) * 1.41421356237;
}
function Ct(e) {
  if (e.length < 2)
    return 0;
  if (e.length === 2)
    return e[1].t === e[0].t ? 0 : (e[1].d - e[0].d) / (e[1].t - e[0].t);
  let n = 0;
  for (let a = e.length - 1; a > 0; a--) {
    if (e[a].t === e[a - 1].t)
      continue;
    const t = St(n), r = (e[a].d - e[a - 1].d) / (e[a].t - e[a - 1].t);
    n += (r - t) * Math.abs(r), a === e.length - 1 && (n *= 0.5);
  }
  return 1e3 * St(n);
}
function Tn() {
  const e = {};
  return { addMovement: function(n) {
    Array.from(n.changedTouches).forEach((a) => {
      (e[a.identifier] ?? (e[a.identifier] = new vn(Vn))).push([n.timeStamp, a]);
    });
  }, endTouch: function(n) {
    Array.from(n.changedTouches).forEach((a) => {
      delete e[a.identifier];
    });
  }, getVelocity: function(n) {
    var p;
    const a = (p = e[n]) == null ? void 0 : p.values().reverse();
    if (!a)
      throw new Error(`No samples for touch id ${n}`);
    const t = a[0], r = [], d = [];
    for (const l of a) {
      if (t[0] - l[0] > Pn)
        break;
      r.push({ t: l[0], d: l[1].clientX }), d.push({ t: l[0], d: l[1].clientY });
    }
    return { x: Ct(r), y: Ct(d), get direction() {
      const { x: l, y: c } = this, [w, m] = [Math.abs(l), Math.abs(c)];
      return w > m && l >= 0 ? "right" : w > m && l <= 0 ? "left" : m > w && c >= 0 ? "down" : m > w && c <= 0 ? "up" : function() {
        throw new Error();
      }();
    } };
  } };
}
function re() {
  throw new Error();
}
const On = ["start", "end", "left", "right", "top", "bottom"], Rn = z({ color: String, disableResizeWatcher: Boolean, disableRouteWatcher: Boolean, expandOnHover: Boolean, floating: Boolean, modelValue: { type: Boolean, default: null }, permanent: Boolean, rail: { type: Boolean, default: null }, railWidth: { type: [Number, String], default: 56 }, scrim: { type: [Boolean, String], default: !0 }, image: String, temporary: Boolean, touchless: Boolean, width: { type: [Number, String], default: 256 }, location: { type: String, default: "start", validator: (e) => On.includes(e) }, sticky: Boolean, ...En(), ...$t(), ...Nn(), ...kn(), ...Bn(), ...Wn(), ...Ot({ tag: "nav" }), ...Vt() }, "VNavigationDrawer"), Gn = Ze()({ name: "VNavigationDrawer", props: Rn(), emits: { "update:modelValue": (e) => !0, "update:rail": (e) => !0 }, setup(e, n) {
  var de, ve;
  let { attrs: a, emit: t, slots: r } = n;
  const { isRtl: d } = function() {
    const u = J(Dn);
    if (!u)
      throw new Error("[Vuetify] Could not find injected rtl instance");
    return { isRtl: u.isRtl, rtlClasses: u.rtlClasses };
  }(), { themeClasses: p } = Tt(e), { borderClasses: l } = function(u) {
    let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ie();
    return { borderClasses: y(() => {
      const f = me(u) ? u.value : u.border, o = [];
      if (f === !0 || f === "")
        o.push(`${h}--border`);
      else if (typeof f == "string" || f === 0)
        for (const s of String(f).split(" "))
          o.push(`border-${s}`);
      return o;
    }) };
  }(e), { backgroundColorClasses: c, backgroundColorStyles: w } = Ft(qe(e, "color")), { elevationClasses: m } = function(u) {
    return { elevationClasses: y(() => {
      const h = me(u) ? u.value : u.elevation, f = [];
      return h == null || f.push(`elevation-${h}`), f;
    }) };
  }(e), { displayClasses: v, mobile: E } = function() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ie();
    const f = J(zn);
    if (!f)
      throw new Error("Could not find Vuetify display injection");
    const o = y(() => {
      if (!u.mobileBreakpoint)
        return f.mobile.value;
      const i = typeof u.mobileBreakpoint == "number" ? u.mobileBreakpoint : f.thresholds.value[u.mobileBreakpoint];
      return f.width.value < i;
    }), s = y(() => h ? { [`${h}--mobile`]: o.value } : {});
    return { ...f, displayClasses: s, mobile: o };
  }(e), { roundedClasses: S } = function(u) {
    let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ie();
    return { roundedClasses: y(() => {
      const f = me(u) ? u.value : u.rounded, o = [];
      if (f === !0 || f === "")
        o.push(`${h}--rounded`);
      else if (typeof f == "string" || f === 0)
        for (const s of String(f).split(" "))
          o.push(`rounded-${s}`);
      return o;
    }) };
  }(e), W = (ve = (de = T("useRouter")) == null ? void 0 : de.proxy) == null ? void 0 : ve.$router, A = function(u, h, f) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (b) => b, s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (b) => b;
    const i = T("useProxiedModel"), g = _(u[h] !== void 0 ? u[h] : f), B = Q(h), F = y(B !== h ? () => {
      var b, C, L, N;
      return u[h], !(!((b = i.vnode.props) != null && b.hasOwnProperty(h)) && !((C = i.vnode.props) != null && C.hasOwnProperty(B)) || !((L = i.vnode.props) != null && L.hasOwnProperty(`onUpdate:${h}`)) && !((N = i.vnode.props) != null && N.hasOwnProperty(`onUpdate:${B}`)));
    } : () => {
      var b, C;
      return u[h], !(!((b = i.vnode.props) != null && b.hasOwnProperty(h)) || !((C = i.vnode.props) != null && C.hasOwnProperty(`onUpdate:${h}`)));
    });
    $e(() => !F.value, () => {
      U(() => u[h], (b) => {
        g.value = b;
      });
    });
    const D = y({ get() {
      const b = u[h];
      return o(F.value ? b : g.value);
    }, set(b) {
      const C = s(b), L = Jt(F.value ? u[h] : g.value);
      L !== C && o(L) !== b && (g.value = C, i == null || i.emit(`update:${h}`, C));
    } });
    return Object.defineProperty(D, "externalValue", { get: () => F.value ? u[h] : g.value }), D;
  }(e, "modelValue", null, (u) => !!u), { ssrBootStyles: O } = function() {
    const u = j(!1);
    return xe(() => {
      window.requestAnimationFrame(() => {
        u.value = !0;
      });
    }), { ssrBootStyles: y(() => u.value ? void 0 : { transition: "none !important" }), isBooted: Qt(u) };
  }(), { scopeId: R } = function() {
    const u = T("useScopeId").vnode.scopeId;
    return { scopeId: u ? { [u]: "" } : void 0 };
  }(), ge = _(), q = j(!1), ue = y(() => e.rail && e.expandOnHover && q.value ? Number(e.width) : Number(e.rail ? e.railWidth : e.width)), ee = y(() => function(u, h) {
    return u === "start" ? h ? "right" : "left" : u === "end" ? h ? "left" : "right" : u;
  }(e.location, d.value)), V = y(() => !e.permanent && (E.value || e.temporary)), ce = y(() => e.sticky && !V.value && ee.value !== "bottom");
  $e(() => e.expandOnHover && e.rail != null, () => {
    U(q, (u) => t("update:rail", !u));
  }), $e(() => !e.disableResizeWatcher, () => {
    U(V, (u) => !e.permanent && an(() => A.value = !u));
  }), $e(() => !e.disableRouteWatcher && !!W, () => {
    U(W.currentRoute, () => V.value && (A.value = !1));
  }), U(() => e.permanent, (u) => {
    u && (A.value = !0);
  }), tn(() => {
    e.modelValue != null || V.value || (A.value = e.permanent || !E.value);
  });
  const { isDragging: X, dragProgress: fe, dragStyles: ye } = function(u) {
    let { isActive: h, isTemporary: f, width: o, touchless: s, position: i } = u;
    xe(() => {
      window.addEventListener("touchstart", Qe, { passive: !0 }), window.addEventListener("touchmove", et, { passive: !1 }), window.addEventListener("touchend", tt, { passive: !0 });
    }), je(() => {
      window.removeEventListener("touchstart", Qe), window.removeEventListener("touchmove", et), window.removeEventListener("touchend", tt);
    });
    const g = y(() => ["left", "right"].includes(i.value)), { addMovement: B, endTouch: F, getVelocity: D } = Tn();
    let b = !1;
    const C = j(!1), L = j(0), N = j(0);
    let K;
    function Ge(k, x) {
      return (i.value === "left" ? k : i.value === "right" ? document.documentElement.clientWidth - k : i.value === "top" ? k : i.value === "bottom" ? document.documentElement.clientHeight - k : re()) - (x ? o.value : 0);
    }
    function Je(k) {
      let x = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
      const M = i.value === "left" ? (k - N.value) / o.value : i.value === "right" ? (document.documentElement.clientWidth - k - N.value) / o.value : i.value === "top" ? (k - N.value) / o.value : i.value === "bottom" ? (document.documentElement.clientHeight - k - N.value) / o.value : re();
      return x ? Math.max(0, Math.min(1, M)) : M;
    }
    function Qe(k) {
      if (s.value)
        return;
      const x = k.changedTouches[0].clientX, M = k.changedTouches[0].clientY, G = i.value === "left" ? x < 25 : i.value === "right" ? x > document.documentElement.clientWidth - 25 : i.value === "top" ? M < 25 : i.value === "bottom" ? M > document.documentElement.clientHeight - 25 : re(), Y = h.value && (i.value === "left" ? x < o.value : i.value === "right" ? x > document.documentElement.clientWidth - o.value : i.value === "top" ? M < o.value : i.value === "bottom" ? M > document.documentElement.clientHeight - o.value : re());
      (G || Y || h.value && f.value) && (b = !0, K = [x, M], N.value = Ge(g.value ? x : M, h.value), L.value = Je(g.value ? x : M), F(k), B(k));
    }
    function et(k) {
      const x = k.changedTouches[0].clientX, M = k.changedTouches[0].clientY;
      if (b) {
        if (!k.cancelable)
          return void (b = !1);
        const Y = Math.abs(x - K[0]), Ce = Math.abs(M - K[1]);
        (g.value ? Y > Ce && Y > 3 : Ce > Y && Ce > 3) ? (C.value = !0, b = !1) : (g.value ? Ce : Y) > 3 && (b = !1);
      }
      if (!C.value)
        return;
      k.preventDefault(), B(k);
      const G = Je(g.value ? x : M, !1);
      L.value = Math.max(0, Math.min(1, G)), G > 1 ? N.value = Ge(g.value ? x : M, !0) : G < 0 && (N.value = Ge(g.value ? x : M, !1));
    }
    function tt(k) {
      if (b = !1, !C.value)
        return;
      B(k), C.value = !1;
      const x = D(k.changedTouches[0].identifier), M = Math.abs(x.x), G = Math.abs(x.y), Y = g.value ? M > G && M > 400 : G > M && G > 3;
      h.value = Y ? x.direction === ({ left: "right", right: "left", top: "down", bottom: "up" }[i.value] || re()) : L.value > 0.5;
    }
    const jt = y(() => C.value ? { transform: i.value === "left" ? `translateX(calc(-100% + ${L.value * o.value}px))` : i.value === "right" ? `translateX(calc(100% - ${L.value * o.value}px))` : i.value === "top" ? `translateY(calc(-100% + ${L.value * o.value}px))` : i.value === "bottom" ? `translateY(calc(100% - ${L.value * o.value}px))` : re(), transition: "none" } : void 0);
    return { isDragging: C, dragProgress: L, dragStyles: jt };
  }({ isActive: A, isTemporary: V, width: ue, touchless: qe(e, "touchless"), position: ee }), we = y(() => {
    const u = V.value ? 0 : e.rail && e.expandOnHover ? Number(e.railWidth) : ue.value;
    return X.value ? u * fe.value : u;
  }), { layoutItemStyles: te, layoutItemScrimStyles: ne } = function(u) {
    const h = J(Sn);
    if (!h)
      throw new Error("[Vuetify] Could not find injected layout");
    const f = u.id ?? `layout-item-${Nt()}`, o = T("useLayoutItem");
    ze(Cn, { id: f });
    const s = j(!1);
    qt(() => s.value = !0), Xt(() => s.value = !1);
    const { layoutItemStyles: i, layoutItemScrimStyles: g } = h.register(o, { ...u, active: y(() => !s.value && u.active.value), id: f });
    return je(() => h.unregister(f)), { layoutItemStyles: i, layoutRect: h.layoutRect, layoutItemScrimStyles: g };
  }({ id: e.name, order: y(() => parseInt(e.order, 10)), position: ee, layoutSize: we, elementSize: ue, active: y(() => A.value || X.value), disableTransitions: y(() => X.value), absolute: y(() => e.absolute || ce.value && typeof H.value != "string") }), { isStuck: H, stickyStyles: Fe } = function(u) {
    let { rootEl: h, isSticky: f, layoutItemStyles: o } = u;
    const s = j(!1), i = j(0), g = y(() => {
      const D = typeof s.value == "boolean" ? "top" : s.value;
      return [f.value ? { top: "auto", bottom: "auto", height: void 0 } : void 0, s.value ? { [D]: le(i.value) } : { top: o.value.top }];
    });
    xe(() => {
      U(f, (D) => {
        D ? window.addEventListener("scroll", F, { passive: !0 }) : window.removeEventListener("scroll", F);
      }, { immediate: !0 });
    }), je(() => {
      window.removeEventListener("scroll", F);
    });
    let B = 0;
    function F() {
      const D = B > window.scrollY ? "up" : "down", b = h.value.getBoundingClientRect(), C = parseFloat(o.value.top ?? 0), L = window.scrollY - Math.max(0, i.value - C), N = b.height + Math.max(i.value, C) - window.scrollY - window.innerHeight, K = parseFloat(getComputedStyle(h.value).getPropertyValue("--v-body-scroll-y")) || 0;
      b.height < window.innerHeight - C ? (s.value = "top", i.value = C) : D === "up" && s.value === "bottom" || D === "down" && s.value === "top" ? (i.value = window.scrollY + b.top - K, s.value = !0) : D === "down" && N <= 0 ? (i.value = 0, s.value = "bottom") : D === "up" && L <= 0 && (K ? s.value !== "top" && (i.value = -L + K + C, s.value = "top") : (i.value = b.top + L, s.value = "top")), B = window.scrollY;
    }
    return { isStuck: s, stickyStyles: g };
  }({ rootEl: ge, isSticky: ce, layoutItemStyles: te }), be = Ft(y(() => typeof e.scrim == "string" ? e.scrim : null)), Oe = y(() => ({ ...X.value ? { opacity: 0.2 * fe.value, transition: "none" } : void 0, ...ne.value }));
  function Se() {
    q.value = !0;
  }
  function Re() {
    q.value = !1;
  }
  return function(u, h) {
    const f = Ke(), o = _(u), s = y(() => {
      if ($(h == null ? void 0 : h.disabled))
        return f.value;
      const i = $(h == null ? void 0 : h.scoped), g = $(h == null ? void 0 : h.reset), B = $(h == null ? void 0 : h.root);
      if (o.value == null && !(i || g || B))
        return f.value;
      let F = se(o.value, { prev: f.value });
      if (i)
        return F;
      if (g || B) {
        const D = Number(g || 1 / 0);
        for (let b = 0; b <= D && F && "prev" in F; b++)
          F = F.prev;
        return F && typeof B == "string" && B in F && (F = se(se(F, { prev: F }), F[B])), F;
      }
      return F.prev ? se(F.prev, F) : F;
    });
    ze(Pe, s);
  }({ VList: { bgColor: "transparent" } }), Pt(() => {
    const u = r.image || e.image;
    return I(kt, null, [I(e.tag, Ne({ ref: ge, onMouseenter: Se, onMouseleave: Re, class: ["v-navigation-drawer", `v-navigation-drawer--${ee.value}`, { "v-navigation-drawer--expand-on-hover": e.expandOnHover, "v-navigation-drawer--floating": e.floating, "v-navigation-drawer--is-hovering": q.value, "v-navigation-drawer--rail": e.rail, "v-navigation-drawer--temporary": V.value, "v-navigation-drawer--active": A.value, "v-navigation-drawer--sticky": ce.value }, p.value, c.value, l.value, v.value, m.value, S.value, e.class], style: [w.value, te.value, ye.value, O.value, Fe.value, e.style] }, R, a), { default: () => {
      var h, f, o, s;
      return [u && I("div", { key: "image", class: "v-navigation-drawer__img" }, [r.image ? (h = r.image) == null ? void 0 : h.call(r, { image: e.image }) : I("img", { src: e.image, alt: "" }, null)]), r.prepend && I("div", { class: "v-navigation-drawer__prepend" }, [(f = r.prepend) == null ? void 0 : f.call(r)]), I("div", { class: "v-navigation-drawer__content" }, [(o = r.default) == null ? void 0 : o.call(r)]), r.append && I("div", { class: "v-navigation-drawer__append" }, [(s = r.append) == null ? void 0 : s.call(r)])];
    } }), I(nn, { name: "fade-transition" }, { default: () => [V.value && (X.value || A.value) && !!e.scrim && I("div", Ne({ class: ["v-navigation-drawer__scrim", be.backgroundColorClasses.value], style: [Oe.value, be.backgroundColorStyles.value], onClick: () => A.value = !1 }, R), null)] })]);
  }), { isStuck: H };
} }), P = "v-resize-drawer", jn = { handleBorderWidth: 8, handleColor: "primary", handleIcon: void 0, handleIconSize: "x-small", handlePosition: "center", height: void 0, location: "start", maxWidth: window.innerWidth, minWidth: 56, modelValue: !0, name: P, rail: !1, railWidth: 8, resizable: !0, saveWidth: !0, storageName: `${P}-width`, storageType: "local", tag: "nav", theme: "light", touchless: !1, width: 256, widthSnapBack: !0 };
function Xe(e, n) {
  return e === "local" ? localStorage.getItem(n) : e === "session" ? sessionStorage.getItem(n) : "";
}
const Ye = (e) => {
  const { action: n = "update", resizedWidth: a, storageType: t, storageName: r, saveWidth: d, rail: p } = e;
  if (!d || p)
    return;
  let l = a;
  l = l ?? void 0, n === "set" && (l = Xe(t, r) ?? "", l = l || a), t === "local" && localStorage.setItem(r, String(l)), t === "session" && sessionStorage.setItem(r, String(l));
}, ie = (e) => {
  const { str: n, unit: a = "px" } = e;
  if (n != null && n !== "")
    return +n ? `${Number(n)}${a}` : String(n);
}, Ue = (e) => {
  const n = window.innerWidth, a = function(t) {
    if (typeof t == "string") {
      const r = /(\d+(\.\d+)?)(\s*([a-zA-Z]+))?/, d = t.match(r);
      if (!d)
        return t;
      const p = parseFloat(d[1]), l = d[4];
      if (!isNaN(p)) {
        const c = Math.round(p);
        return l ? `${c} ${l}` : `${c}`;
      }
      return t;
    }
    return typeof t == "number" ? Math.round(t) : t;
  }(e);
  return typeof e == "string" && e.includes("%") ? Number(e.replace("%", "")) / 100 * n : typeof a == "string" ? Number(a.replace(/\D/g, "")) : a;
};
function Bt(e) {
  let n = function(m) {
    const v = { AliceBlue: "#F0F8FF", AntiqueWhite: "#FAEBD7", Aqua: "#00FFFF", Aquamarine: "#7FFFD4", Azure: "#F0FFFF", Beige: "#F5F5DC", Bisque: "#FFE4C4", Black: "#000000", BlanchedAlmond: "#FFEBCD", Blue: "#0000FF", BlueViolet: "#8A2BE2", Brown: "#A52A2A", BurlyWood: "#DEB887", CadetBlue: "#5F9EA0", Chartreuse: "#7FFF00", Chocolate: "#D2691E", Coral: "#FF7F50", CornflowerBlue: "#6495ED", Cornsilk: "#FFF8DC", Crimson: "#DC143C", Cyan: "#00FFFF", DarkBlue: "#00008B", DarkCyan: "#008B8B", DarkGoldenRod: "#B8860B", DarkGray: "#A9A9A9", DarkGreen: "#006400", DarkGrey: "#A9A9A9", DarkKhaki: "#BDB76B", DarkMagenta: "#8B008B", DarkOliveGreen: "#556B2F", DarkOrange: "#FF8C00", DarkOrchid: "#9932CC", DarkRed: "#8B0000", DarkSalmon: "#E9967A", DarkSeaGreen: "#8FBC8F", DarkSlateBlue: "#483D8B", DarkSlateGray: "#2F4F4F", DarkSlateGrey: "#2F4F4F", DarkTurquoise: "#00CED1", DarkViolet: "#9400D3", DeepPink: "#FF1493", DeepSkyBlue: "#00BFFF", DimGray: "#696969", DimGrey: "#696969", DodgerBlue: "#1E90FF", FireBrick: "#B22222", FloralWhite: "#FFFAF0", ForestGreen: "#228B22", Fuchsia: "#FF00FF", Gainsboro: "#DCDCDC", GhostWhite: "#F8F8FF", Gold: "#FFD700", GoldenRod: "#DAA520", Gray: "#808080", Green: "#008000", GreenYellow: "#ADFF2F", Grey: "#808080", HoneyDew: "#F0FFF0", HotPink: "#FF69B4", IndianRed: "#CD5C5C", Indigo: "#4B0082", Ivory: "#FFFFF0", Khaki: "#F0E68C", Lavender: "#E6E6FA", LavenderBlush: "#FFF0F5", LawnGreen: "#7CFC00", LemonChiffon: "#FFFACD", LightBlue: "#ADD8E6", LightCoral: "#F08080", LightCyan: "#E0FFFF", LightGoldenRodYellow: "#FAFAD2", LightGray: "#D3D3D3", LightGreen: "#90EE90", LightGrey: "#D3D3D3", LightPink: "#FFB6C1", LightSalmon: "#FFA07A", LightSeaGreen: "#20B2AA", LightSkyBlue: "#87CEFA", LightSlateGray: "#778899", LightSlateGrey: "#778899", LightSteelBlue: "#B0C4DE", LightYellow: "#FFFFE0", Lime: "#00FF00", LimeGreen: "#32CD32", Linen: "#FAF0E6", Magenta: "#FF00FF", Maroon: "#800000", MediumAquaMarine: "#66CDAA", MediumBlue: "#0000CD", MediumOrchid: "#BA55D3", MediumPurple: "#9370DB", MediumSeaGreen: "#3CB371", MediumSlateBlue: "#7B68EE", MediumSpringGreen: "#00FA9A", MediumTurquoise: "#48D1CC", MediumVioletRed: "#C71585", MidnightBlue: "#191970", MintCream: "#F5FFFA", MistyRose: "#FFE4E1", Moccasin: "#FFE4B5", NavajoWhite: "#FFDEAD", Navy: "#000080", OldLace: "#FDF5E6", Olive: "#808000", OliveDrab: "#6B8E23", Orange: "#FFA500", OrangeRed: "#FF4500", Orchid: "#DA70D6", PaleGoldenRod: "#EEE8AA", PaleGreen: "#98FB98", PaleTurquoise: "#AFEEEE", PaleVioletRed: "#DB7093", PapayaWhip: "#FFEFD5", PeachPuff: "#FFDAB9", Peru: "#CD853F", Pink: "#FFC0CB", Plum: "#DDA0DD", PowderBlue: "#B0E0E6", Purple: "#800080", RebeccaPurple: "#663399", Red: "#FF0000", RosyBrown: "#BC8F8F", RoyalBlue: "#4169E1", SaddleBrown: "#8B4513", Salmon: "#FA8072", SandyBrown: "#F4A460", SeaGreen: "#2E8B57", SeaShell: "#FFF5EE", Sienna: "#A0522D", Silver: "#C0C0C0", SkyBlue: "#87CEEB", SlateBlue: "#6A5ACD", SlateGray: "#708090", SlateGrey: "#708090", Snow: "#FFFAFA", SpringGreen: "#00FF7F", SteelBlue: "#4682B4", Tan: "#D2B48C", Teal: "#008080", Thistle: "#D8BFD8", Tomato: "#FF6347", Turquoise: "#40E0D0", Violet: "#EE82EE", Wheat: "#F5DEB3", White: "#FFFFFF", WhiteSmoke: "#F5F5F5", Yellow: "#FFFF00", YellowGreen: "#9ACD32" };
    let E = m;
    return Object.entries(v).forEach(([S, W]) => {
      m.toLowerCase() != S.toLowerCase() || (E = W);
    }), E;
  }(e), a = 0, t = 0, r = 0, d = 0, p = 0, l = 0;
  if (n.substring(0, 1) === "#")
    n = function(m) {
      let v = m.replace("#", "");
      v.length === 3 && (v = v.split("").map((A) => A + A).join(""));
      const E = parseInt(v.substring(0, 2), 16), S = parseInt(v.substring(2, 4), 16), W = parseInt(v.substring(4, 6), 16);
      return [E, S, W];
    }(n);
  else if (n.includes("rgb"))
    n = [...n.matchAll(/\d+/g)].map(Number);
  else if (n.includes("hsl"))
    return n = [...n.matchAll(/\d+/g)].map(Number), a = n[0], t = n[1], r = n[2], `${a} ${t}% ${r}%`;
  [d, p, l] = n, d /= 255, p /= 255, l /= 255;
  const c = Math.max(d, p, l), w = Math.min(d, p, l);
  if (c === null || !w === null || isNaN(c) || isNaN(w)) {
    const m = "0 0% 100% / 12%";
    return console.warn(`[VResizeDrawer]: The "color" prop value using "${n}" doesn't exist. Using the value "hsl(${m})" in it's place.`), m;
  }
  if (a = (c + w) / 2, t = (c + w) / 2, r = (c + w) / 2, c == w)
    a = t = 0;
  else {
    const m = c - w;
    switch (t = r > 0.5 ? m / (2 - c - w) : m / (c + w), c) {
      case d:
        a = (p - l) / m + (p < l ? 6 : 0);
        break;
      case p:
        a = (l - d) / m + 2;
        break;
      case l:
        a = (d - p) / m + 4;
    }
    a /= 6;
  }
  return a = Math.round(360 * a), t = Math.round(100 * t), r = Math.round(100 * r), `${a} ${t}% ${r}%`;
}
const Dt = (e, n) => {
  if (function(t) {
    return t === "transparent" || t === "none" || t === "inherit" || t === "currentColor" || t === "initial" || t === "unset";
  }(e))
    return e;
  if (function(t) {
    return t.includes("--v-theme");
  }(e))
    return `rgb(var(${e}))`;
  const a = function(t, r) {
    const d = r.global.current.value.colors;
    return Object.entries(d).find(([p]) => p === t);
  }(e, n);
  return a ? `hsl(${Bt(a[1])})` : `hsl(${Bt(e)})`;
}, _n = { default: "1.5em", large: "1.75em", small: "1.25em", "x-large": "2em", "x-small": "1em" }, Hn = { fa: { bottom: "fas fa-grip", center: "fas fa-angles-right", top: "fas fa-grip" }, mdi: { bottom: "mdi:mdi-dots-grid", center: "mdi:mdi-chevron-double-right", top: "mdi:mdi-dots-grid" } }, Yn = { key: 0, class: "v-resize-drawer--handle-slot" }, Et = At({ __name: "VResizeDrawer", props: on({ absolute: {}, expandOnHover: {}, floating: {}, handleBorderWidth: {}, handleColor: {}, handleIcon: {}, handleIconSize: {}, handlePosition: {}, height: {}, location: {}, maxWidth: {}, minWidth: {}, modelValue: {}, name: {}, rail: {}, railWidth: {}, resizable: { type: Boolean }, saveWidth: { type: Boolean }, storageName: {}, storageType: {}, tag: {}, temporary: {}, touchless: { type: Boolean }, theme: {}, width: {}, widthSnapBack: { type: Boolean } }, { ...jn }), emits: ["close", "drawer:mouseenter", "drawer:mouseleave", "handle:click", "handle:dblclick", "handle:drag", "handle:mousedown", "handle:mouseup", "handle:touchend", "handle:touchmove", "handle:touchstart", "update:modelValue"], setup(e, { emit: n }) {
  const a = n, t = e, r = y(() => t), d = J(Symbol.for("vuetify:icons")), p = _(256), l = { mouseDown: !1, mouseUp: !0 }, c = _(!1), w = _(!1), m = _(), v = _(256), E = rn(), S = un(), W = cn();
  xe(() => {
    if (t.location !== "start" && t.location !== "end" && t.location !== "left" && t.location !== "right")
      throw new Error("VResizeDrawer: 'top' and 'bottom' locations are not supported.");
    (function() {
      if (t.rail)
        return v.value = t.railWidth || void 0, !1;
      const o = Xe(t.storageType, t.storageName), s = ie({ str: t.width });
      v.value = s, p.value = v.value, t.saveWidth && o && !t.rail && (v.value = Xe(t.storageType, t.storageName)), Ye({ action: "update", rail: t.rail, resizedWidth: v.value, saveWidth: t.saveWidth, storageName: t.storageName, storageType: t.storageType });
    })();
  }), ln(() => {
    document.removeEventListener("mouseup", u, !1), document.removeEventListener("mousemove", te, !1), document.removeEventListener("touchend", h, !1), document.removeEventListener("touchstart", de, !1);
  }), U(() => t.modelValue, (o) => {
    a("update:modelValue", o), o || a("close");
  });
  const A = y(() => ((o) => {
    const { absolute: s = !1, expandOnHover: i, floating: g, isMouseover: B, location: F, rail: D, railWidth: b, temporary: C } = o;
    return { [`${P}`]: !0, "v-navigation-drawer--absolute": s ?? !1, "v-navigation-drawer--custom-rail": Number(b) !== 56, "v-navigation-drawer--fixed": !s, "v-navigation-drawer--floating": g, "v-navigation-drawer--is-mouseover": $(B), "v-navigation-drawer--left": F === "left" || F === "start" || F === void 0, "v-navigation-drawer--open-on-hover": i, "v-navigation-drawer--rail": D ?? !1, "v-navigation-drawer--right": F === "right" || F === "end", "v-navigation-drawer--temporary": C };
  })({ absolute: t.absolute, expandOnHover: t.expandOnHover, floating: t.floating, isMouseover: c, location: t.location, rail: t.rail, railWidth: t.railWidth, temporary: t.temporary })), O = y(() => ((o) => {
    const { isMouseDown: s, maxWidth: i, minWidth: g, rail: B, railWidth: F, resizedWidth: D, widthSnapBack: b } = o;
    if (B)
      return {};
    let C = B ? F : $(D);
    return b || (parseInt(C) >= parseInt(i) && (C = parseInt(i)), parseInt(C) <= parseInt(g) && (C = parseInt(g))), { transitionDuration: $(s) ? "0s" : ".2s", width: ie({ str: C }) };
  })({ isMouseDown: w, maxWidth: ne.value, minWidth: H.value, rail: t.rail, railWidth: t.railWidth, resizedWidth: v, widthSnapBack: t.widthSnapBack })), R = y(() => {
    if (!t.rail)
      return ie({ str: v.value });
  }), ge = y(() => ((o) => {
    const { drawerLocation: s, handlePosition: i } = o;
    return { [`${P}--handle-container`]: !0, [`${P}--handle-container-position-${i}`]: !0, [`${P}--handle-container-parent-${s}`]: !0 };
  })({ drawerLocation: t.location, handlePosition: t.handlePosition })), q = y(() => ((o) => {
    const { borderWidth: s, handleColor: i, iconSize: g, position: B, theme: F } = o;
    if (B === "border")
      return { backgroundColor: Dt(i, F), height: "100%", width: ie({ str: s }) };
    const D = _n[g];
    return { backgroundColor: "transparent", height: D, width: D };
  })({ borderWidth: t.handleBorderWidth, handleColor: t.handleColor, iconSize: t.handleIconSize, position: t.handlePosition, theme: S })), ue = y(() => (!t.touchless || !W.mobile.value) && !(!t.resizable || t.rail)), ee = y(() => ((o) => {
    const { color: s, theme: i } = o;
    return { color: Dt(s, i) };
  })({ color: t.handleColor, theme: S })), V = y(() => ((o) => {
    const { drawerLocation: s, handlePosition: i, iconOptions: g, isUserIcon: B } = o;
    return { [`${P}--handle-container-icon`]: !0, [`${P}--handle-container-icon-${i}-${s}`]: !0, [`${P}--handle-container-icon-user-icon`]: B, [`${P}--handle-container-icon-fa`]: (g == null ? void 0 : g.defaultSet) === "fa", [`${P}--handle-container-icon-fa-${i}`]: (g == null ? void 0 : g.defaultSet) === "fa" };
  })({ drawerLocation: t.location, handlePosition: t.handlePosition, iconOptions: d, isUserIcon: t.handleIcon !== void 0 && t.handleIcon !== null })), ce = y(() => ((s) => {
    const { icon: i, iconOptions: g, position: B } = s;
    if (i)
      return i;
    let D = (g == null ? void 0 : g.defaultSet).toLowerCase();
    D = D === "fa" || D === "fasvg" ? "fa" : D;
    const b = Hn[D];
    if (!b)
      throw new Error(`VResizeDrawer: No default ${g == null ? void 0 : g.defaultSet} icon set found. Please set the icon prop.`);
    const C = b[B];
    if (!C)
      throw new Error(`VResizeDrawer: No ${name} icon found. Please set the icon prop, or set the default icon set to 'mdi' or 'fa'`);
    return C;
  })({ icon: t.handleIcon, iconOptions: d, position: t.handlePosition }));
  function X() {
    c.value = !0, a("drawer:mouseenter", c.value);
  }
  function fe() {
    c.value = !1, a("drawer:mouseleave", c.value);
  }
  function ye(o, s) {
    let i = s;
    t.location !== "right" && t.location !== "end" || (i = document.body.scrollWidth - i), v.value = ie({ str: i }) || void 0, document.body.style.cursor = "grabbing", f("handle:touchmove", o), f("handle:drag", o);
  }
  function we(o) {
    var s;
    ye(o, ((s = o.touches[0]) == null ? void 0 : s.clientX) ?? 0);
  }
  function te(o) {
    ye(o, o.clientX);
  }
  const ne = y(() => {
    if (t.maxWidth === "100%")
      return window.innerWidth;
    if (String(t.maxWidth).includes("%")) {
      const o = parseInt(String(t.maxWidth).replace("%", ""));
      return window.innerWidth * o / 100;
    }
    return t.maxWidth;
  }), H = y(() => {
    if (t.minWidth === "100%")
      return window.innerWidth;
    if (String(t.minWidth).includes("%")) {
      const o = parseInt(String(t.minWidth).replace("%", ""));
      return window.innerWidth * o / 100;
    }
    return t.minWidth;
  });
  function Fe(o) {
    let s = o;
    parseInt(s) >= parseInt(ne.value) && (s = parseInt(ne.value)), parseInt(s) <= parseInt(H.value) && (s = parseInt(H.value)), typeof s == "number" && (s = Math.round(s));
    let i = Ue(s);
    const g = Ue(ne.value), B = Ue(H.value);
    return i >= g && (i = g), B >= i && (i = B), i;
  }
  function be(o) {
    f("handle:click", o);
  }
  function Oe(o) {
    v.value = p.value, Ye({ rail: t.rail, resizedWidth: v.value, saveWidth: t.saveWidth, storageName: t.storageName, storageType: t.storageType }), f("handle:dblclick", o);
  }
  function Se(o, s) {
    o.preventDefault(), o.stopPropagation();
    const i = o.type;
    let g = 25;
    w.value = !0, t.handlePosition === "border" && (g = t.handleBorderWidth), l.mouseUp = !1, s < g && (i === "touchstart" ? document.addEventListener("touchmove", we, !1) : document.addEventListener("mousemove", te, !1)), l.mouseDown || (l.mouseDown = !0, i === "touchstart" ? (document.addEventListener("touchend", h, !1), f("handle:touchstart", o)) : (document.addEventListener("mouseup", u, !1), f("handle:mousedown", o)));
  }
  function Re(o) {
    Se(o, o.offsetX);
  }
  function de(o) {
    var s;
    Se(o, ((s = o.touches[0]) == null ? void 0 : s.radiusX) ?? 0);
  }
  function ve(o) {
    o.preventDefault(), o.stopPropagation();
    const s = o.type, i = m.value;
    w.value = !1, l.mouseDown = !1, v.value = (i == null ? void 0 : i.width) ?? p.value, document.body.style.cursor = "", v.value.includes("-") && (v.value = H.value), v.value = Fe(v.value), v.value = ie({ str: v.value }) || void 0, Ye({ rail: t.rail, resizedWidth: v.value, saveWidth: t.saveWidth, storageName: t.storageName, storageType: t.storageType }), l.mouseUp || (l.mouseUp = !0, s === "touchend" ? (document.removeEventListener("touchend", h, !1), document.removeEventListener("touchmove", we, !1), f("handle:touchend", o)) : (document.removeEventListener("mouseup", u, !1), document.removeEventListener("mousemove", te, !1), f("handle:mouseup", o)));
  }
  function u(o) {
    ve(o);
  }
  function h(o) {
    ve(o);
  }
  function f(o, s) {
    const i = parseInt(Fe(v.value)) ?? 0, g = { e: s, eventName: o, offsetWidth: window.innerWidth - i + "px", resizedWidth: `${i}px`, width: `${i}px` };
    a(o, g);
  }
  return (o, s) => (Be(), nt($(Gn), Ne($(r), { ref_key: "resizeDrawer", ref: m, class: $(A), location: t.location, "model-value": o.modelValue, name: t.name, style: $(O), tag: t.tag, theme: t.theme, width: $(R), onMouseenter: X, onMouseleave: fe }), { default: sn(() => [$(ue) ? (Be(), at("div", { key: 0, class: ot($(ge)), style: rt($(q)), onClick: be, onDblclick: Oe, onMousedown: Re, onMouseup: u, onTouchend: h, onTouchstart: de }, [$(E).handle ? (Be(), at("div", Yn, [De(o.$slots, "handle")])) : o.handlePosition !== "border" ? (Be(), nt(Ln, { key: 1, class: ot(["v-resize-drawer--handle-icon", $(V)]), icon: $(ce), size: o.handleIconSize, style: rt($(ee)) }, null, 8, ["class", "icon", "size", "style"])) : Ee("", !0)], 38)) : Ee("", !0), $(E).prepend ? De(o.$slots, "prepend", { key: 1 }) : Ee("", !0), De(o.$slots, "default"), $(E).append ? De(o.$slots, "append", { key: 2 }) : Ee("", !0)]), _: 3 }, 16, ["class", "location", "model-value", "name", "style", "tag", "theme", "width"]));
} });
Et.install = (e) => {
  e.component("VResizeDrawer", Et);
};
export {
  Et as default
};
(function(){"use strict";try{if(typeof document<"u"){var n=document.createElement("style");n.appendChild(document.createTextNode(".v-resize-drawer{container-type:inline-size;container-name:v-resize-drawer}.v-resize-drawer--handle-container{cursor:grab;align-items:center;display:flex;justify-content:center;position:absolute;z-index:1}.v-resize-drawer--handle-container-icon-parent-end,.v-resize-drawer--handle-container-icon-parent-right{left:initial;right:0}.v-resize-drawer--handle-container-icon-center-end,.v-resize-drawer--handle-container-icon-center-right{transform:rotate(180deg)}.v-resize-drawer--handle-container-icon-user-icon{transform:none}.v-resize-drawer--handle-container-icon-fa{font-size:.7rem!important}.v-resize-drawer--handle-container-parent-left,.v-resize-drawer--handle-container-parent-start,.v-resize-drawer--handle-container-parent-undefined{right:0}.v-resize-drawer--handle-container-parent-end,.v-resize-drawer--handle-container-parent-right{left:0}.v-resize-drawer--handle-container-position-top{top:0}.v-resize-drawer--handle-container-position-center{top:50%;transform:translateY(-50%)}.v-resize-drawer--handle-container-position-bottom{bottom:0}.v-resize-drawer--handle-container-position-border{cursor:col-resize;height:100%;top:0;width:8px}@container v-resize-drawer (width > 0) and (max-width: 599.98px){.v-col-xs-12{flex:0 0 100%!important;max-width:100%!important;flex-basis:0;flex-grow:1;max-width:100%}}@container v-resize-drawer (min-width: 600px){.v-col-sm-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-sm-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-sm-3{flex:0 0 25%;max-width:25%}.v-col-sm-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-sm-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-sm-6{flex:0 0 50%;max-width:50%}.v-col-sm-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-sm-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-sm-9{flex:0 0 75%;max-width:75%}.v-col-sm-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-sm-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-sm-12{flex:0 0 100%;max-width:100%}}@container v-resize-drawer (min-width: 960px){.v-col-md-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-md-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-md-3{flex:0 0 25%;max-width:25%}.v-col-md-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-md-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-md-6{flex:0 0 50%;max-width:50%}.v-col-md-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-md-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-md-9{flex:0 0 75%;max-width:75%}.v-col-md-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-md-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-md-12{flex:0 0 100%;max-width:100%}}@container v-resize-drawer (min-width: 1280px){.v-col-lg-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-lg-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-lg-3{flex:0 0 25%;max-width:25%}.v-col-lg-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-lg-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-lg-6{flex:0 0 50%;max-width:50%}.v-col-lg-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-lg-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-lg-9{flex:0 0 75%;max-width:75%}.v-col-lg-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-lg-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-lg-12{flex:0 0 100%;max-width:100%}}@container v-resize-drawer (min-width: 1920px){.v-col-xl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-xl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-xl-3{flex:0 0 25%;max-width:25%}.v-col-xl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-xl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-xl-6{flex:0 0 50%;max-width:50%}.v-col-xl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-xl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-xl-9{flex:0 0 75%;max-width:75%}.v-col-xl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-xl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-xl-12{flex:0 0 100%;max-width:100%}}@container v-resize-drawer (min-width: 2560px){.v-col-xxl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.v-col-xxl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.v-col-xxl-3{flex:0 0 25%;max-width:25%}.v-col-xxl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.v-col-xxl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.v-col-xxl-6{flex:0 0 50%;max-width:50%}.v-col-xxl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.v-col-xxl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.v-col-xxl-9{flex:0 0 75%;max-width:75%}.v-col-xxl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.v-col-xxl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.v-col-xxl-12{flex:0 0 100%;max-width:100%}}@container v-resize-drawer only print{.hidden-print-only{display:none!important}}@container v-resize-drawer only print{.d-print-only-none{display:none!important}.d-print-only-inline{display:inline!important}.d-print-only-inline-block{display:inline-block!important}.d-print-only-block{display:block!important}.d-print-only-table{display:table!important}.d-print-only-table-row{display:table-row!important}.d-print-only-table-cell{display:table-cell!important}.d-print-only-flex{display:flex!important}.d-print-only-inline-flex{display:inline-flex!important}}@container v-resize-drawer only screen{.hidden-screen-only{display:none!important}}@container v-resize-drawer only screen{.d-screen-only-none{display:none!important}.d-screen-only-inline{display:inline!important}.d-screen-only-inline-block{display:inline-block!important}.d-screen-only-block{display:block!important}.d-screen-only-table{display:table!important}.d-screen-only-table-row{display:table-row!important}.d-screen-only-table-cell{display:table-cell!important}.d-screen-only-flex{display:flex!important}.d-screen-only-inline-flex{display:inline-flex!important}}@container v-resize-drawer (max-width: 599.98px){.hidden-xs{display:none!important}}@container v-resize-drawer (max-width: 599.98px){.d-xs-none{display:none!important}.d-xs-inline{display:inline!important}.d-xs-inline-block{display:inline-block!important}.d-xs-block{display:block!important}.d-xs-table{display:table!important}.d-xs-table-row{display:table-row!important}.d-xs-table-cell{display:table-cell!important}.d-xs-flex{display:flex!important}.d-xs-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 600px) and (max-width: 959.98px){.hidden-sm{display:none!important}}@container v-resize-drawer (min-width: 600px) and (max-width: 959.98px){.d-sm-none{display:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:flex!important}.d-sm-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 960px) and (max-width: 1279.98px){.hidden-md{display:none!important}}@container v-resize-drawer (min-width: 960px) and (max-width: 1279.98px){.d-md-none{display:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:flex!important}.d-md-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 1280px) and (max-width: 1919.98px){.hidden-lg{display:none!important}}@container v-resize-drawer (min-width: 1280px) and (max-width: 1919.98px){.d-lg-none{display:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:flex!important}.d-lg-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 1920px) and (max-width: 2559.98px){.hidden-xl{display:none!important}}@container v-resize-drawer (min-width: 1920px) and (max-width: 2559.98px){.d-xl-none{display:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:flex!important}.d-xl-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 2560px){.hidden-xxl{display:none!important}}@container v-resize-drawer (min-width: 2560px){.d-xxl-none{display:none!important}.d-xxl-inline{display:inline!important}.d-xxl-inline-block{display:inline-block!important}.d-xxl-block{display:block!important}.d-xxl-table{display:table!important}.d-xxl-table-row{display:table-row!important}.d-xxl-table-cell{display:table-cell!important}.d-xxl-flex{display:flex!important}.d-xxl-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 600px){.hidden-sm-and-up{display:none!important}}@container v-resize-drawer (min-width: 600px){.d-sm-and-up-none{display:none!important}.d-sm-and-up-inline{display:inline!important}.d-sm-and-up-inline-block{display:inline-block!important}.d-sm-and-up-block{display:block!important}.d-sm-and-up-table{display:table!important}.d-sm-and-up-table-row{display:table-row!important}.d-sm-and-up-table-cell{display:table-cell!important}.d-sm-and-up-flex{display:flex!important}.d-sm-and-up-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 960px){.hidden-md-and-up{display:none!important}}@container v-resize-drawer (min-width: 960px){.d-md-and-up-none{display:none!important}.d-md-and-up-inline{display:inline!important}.d-md-and-up-inline-block{display:inline-block!important}.d-md-and-up-block{display:block!important}.d-md-and-up-table{display:table!important}.d-md-and-up-table-row{display:table-row!important}.d-md-and-up-table-cell{display:table-cell!important}.d-md-and-up-flex{display:flex!important}.d-md-and-up-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 1280px){.hidden-lg-and-up{display:none!important}}@container v-resize-drawer (min-width: 1280px){.d-lg-and-up-none{display:none!important}.d-lg-and-up-inline{display:inline!important}.d-lg-and-up-inline-block{display:inline-block!important}.d-lg-and-up-block{display:block!important}.d-lg-and-up-table{display:table!important}.d-lg-and-up-table-row{display:table-row!important}.d-lg-and-up-table-cell{display:table-cell!important}.d-lg-and-up-flex{display:flex!important}.d-lg-and-up-inline-flex{display:inline-flex!important}}@container v-resize-drawer (min-width: 1920px){.hidden-xl-and-up{display:none!important}}@container v-resize-drawer (min-width: 1920px){.d-xl-and-up-none{display:none!important}.d-xl-and-up-inline{display:inline!important}.d-xl-and-up-inline-block{display:inline-block!important}.d-xl-and-up-block{display:block!important}.d-xl-and-up-table{display:table!important}.d-xl-and-up-table-row{display:table-row!important}.d-xl-and-up-table-cell{display:table-cell!important}.d-xl-and-up-flex{display:flex!important}.d-xl-and-up-inline-flex{display:inline-flex!important}}@container v-resize-drawer (max-width: 959.98px){.hidden-sm-and-down{display:none!important}}@container v-resize-drawer (max-width: 959.98px){.d-sm-and-down-none{display:none!important}.d-sm-and-down-inline{display:inline!important}.d-sm-and-down-inline-block{display:inline-block!important}.d-sm-and-down-block{display:block!important}.d-sm-and-down-table{display:table!important}.d-sm-and-down-table-row{display:table-row!important}.d-sm-and-down-table-cell{display:table-cell!important}.d-sm-and-down-flex{display:flex!important}.d-sm-and-down-inline-flex{display:inline-flex!important}}@container v-resize-drawer (max-width: 1279.98px){.hidden-md-and-down{display:none!important}}@container v-resize-drawer (max-width: 1279.98px){.d-md-and-down-none{display:none!important}.d-md-and-down-inline{display:inline!important}.d-md-and-down-inline-block{display:inline-block!important}.d-md-and-down-block{display:block!important}.d-md-and-down-table{display:table!important}.d-md-and-down-table-row{display:table-row!important}.d-md-and-down-table-cell{display:table-cell!important}.d-md-and-down-flex{display:flex!important}.d-md-and-down-inline-flex{display:inline-flex!important}}@container v-resize-drawer (max-width: 1919.98px){.hidden-lg-and-down{display:none!important}}@container v-resize-drawer (max-width: 1919.98px){.d-lg-and-down-none{display:none!important}.d-lg-and-down-inline{display:inline!important}.d-lg-and-down-inline-block{display:inline-block!important}.d-lg-and-down-block{display:block!important}.d-lg-and-down-table{display:table!important}.d-lg-and-down-table-row{display:table-row!important}.d-lg-and-down-table-cell{display:table-cell!important}.d-lg-and-down-flex{display:flex!important}.d-lg-and-down-inline-flex{display:inline-flex!important}}@container v-resize-drawer (max-width: 2559.98px){.hidden-xl-and-down{display:none!important}}@container v-resize-drawer (max-width: 2559.98px){.d-xl-and-down-none{display:none!important}.d-xl-and-down-inline{display:inline!important}.d-xl-and-down-inline-block{display:inline-block!important}.d-xl-and-down-block{display:block!important}.d-xl-and-down-table{display:table!important}.d-xl-and-down-table-row{display:table-row!important}.d-xl-and-down-table-cell{display:table-cell!important}.d-xl-and-down-flex{display:flex!important}.d-xl-and-down-inline-flex{display:inline-flex!important}}")),document.head.appendChild(n)}}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})();
