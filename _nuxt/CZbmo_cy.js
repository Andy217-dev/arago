import {
  r as m,
  f as V,
  g as ot,
  o as K,
  h as at,
  i as E,
  j as $e,
  k as Z,
  w as pe,
  l as he,
  e as g,
  c as $,
  d as c,
  m as d,
  F as J,
  n as Q,
  p as y,
  q as X,
  s as le,
  t as Be,
  v as ne,
  P as M,
  x as S,
  _ as T,
  y as C,
  z as W,
  A as it,
  B as ct,
  C as lt,
  D as I,
  E as dt,
  G as ie,
  H as ut,
  I as de,
  J as Te,
  K as ft,
  L as se,
  M as pt,
  N as ht,
  O as _t,
  Q as vt,
  R as mt,
  S as D,
  T as B,
} from "./DhGciR-m.js";
import {
  _ as q,
  a as gt,
  b as Ce,
  c as yt,
  d as bt,
  D as wt,
} from "./C3tNbH4V.js";
import { d as St } from "./CoOIc6FR.js";
import { u as $t } from "./jVYuIaM4.js";
(function () {
  function e() {
    for (var s = arguments.length, r = 0; r < s; r++) {
      var o = r < 0 || arguments.length <= r ? void 0 : arguments[r];
      o.nodeType === 1 || o.nodeType === 11
        ? this.appendChild(o)
        : this.appendChild(document.createTextNode(String(o)));
    }
  }
  function t() {
    for (; this.lastChild; ) this.removeChild(this.lastChild);
    arguments.length && this.append.apply(this, arguments);
  }
  function n() {
    for (
      var s = this.parentNode, r = arguments.length, o = new Array(r), l = 0;
      l < r;
      l++
    )
      o[l] = arguments[l];
    var i = o.length;
    if (s)
      for (i || s.removeChild(this); i--; ) {
        var a = o[i];
        typeof a != "object"
          ? (a = this.ownerDocument.createTextNode(a))
          : a.parentNode && a.parentNode.removeChild(a),
          i ? s.insertBefore(this.previousSibling, a) : s.replaceChild(a, this);
      }
  }
  typeof Element < "u" &&
    (Element.prototype.append ||
      ((Element.prototype.append = e), (DocumentFragment.prototype.append = e)),
    Element.prototype.replaceChildren ||
      ((Element.prototype.replaceChildren = t),
      (DocumentFragment.prototype.replaceChildren = t)),
    Element.prototype.replaceWith ||
      ((Element.prototype.replaceWith = n),
      (DocumentFragment.prototype.replaceWith = n)));
})();
function Ct(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Re(e, t) {
  for (var n = 0; n < t.length; n++) {
    var s = t[n];
    (s.enumerable = s.enumerable || !1),
      (s.configurable = !0),
      "value" in s && (s.writable = !0),
      Object.defineProperty(e, s.key, s);
  }
}
function Le(e, t, n) {
  return t && Re(e.prototype, t), n && Re(e, n), e;
}
function kt(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function We(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    t &&
      (s = s.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })),
      n.push.apply(n, s);
  }
  return n;
}
function Me(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? We(Object(n), !0).forEach(function (s) {
          kt(e, s, n[s]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : We(Object(n)).forEach(function (s) {
          Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(n, s));
        });
  }
  return e;
}
function He(e, t) {
  return At(e) || It(e, t) || Ne(e, t) || Tt();
}
function P(e) {
  return Ot(e) || Pt(e) || Ne(e) || Et();
}
function Ot(e) {
  if (Array.isArray(e)) return me(e);
}
function At(e) {
  if (Array.isArray(e)) return e;
}
function Pt(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function It(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var n = [],
      s = !0,
      r = !1,
      o = void 0;
    try {
      for (
        var l = e[Symbol.iterator](), i;
        !(s = (i = l.next()).done) && (n.push(i.value), !(t && n.length === t));
        s = !0
      );
    } catch (a) {
      (r = !0), (o = a);
    } finally {
      try {
        !s && l.return != null && l.return();
      } finally {
        if (r) throw o;
      }
    }
    return n;
  }
}
function Ne(e, t) {
  if (e) {
    if (typeof e == "string") return me(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return me(e, t);
  }
}
function me(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, s = new Array(t); n < t; n++) s[n] = e[n];
  return s;
}
function Et() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Tt() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function H(e, t) {
  return Object.getOwnPropertyNames(Object(e)).reduce(function (n, s) {
    var r = Object.getOwnPropertyDescriptor(Object(e), s),
      o = Object.getOwnPropertyDescriptor(Object(t), s);
    return Object.defineProperty(n, s, o || r);
  }, {});
}
function re(e) {
  return typeof e == "string";
}
function ke(e) {
  return Array.isArray(e);
}
function ce() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = H(e),
    n;
  return (
    t.types !== void 0 ? (n = t.types) : t.split !== void 0 && (n = t.split),
    n !== void 0 &&
      (t.types = (re(n) || ke(n) ? String(n) : "")
        .split(",")
        .map(function (s) {
          return String(s).trim();
        })
        .filter(function (s) {
          return /((line)|(word)|(char))/i.test(s);
        })),
    (t.absolute || t.position) &&
      (t.absolute = t.absolute || /absolute/.test(e.position)),
    t
  );
}
function Oe(e) {
  var t = re(e) || ke(e) ? String(e) : "";
  return {
    none: !t,
    lines: /line/i.test(t),
    words: /word/i.test(t),
    chars: /char/i.test(t),
  };
}
function _e(e) {
  return e !== null && typeof e == "object";
}
function Rt(e) {
  return _e(e) && /^(1|3|11)$/.test(e.nodeType);
}
function Lt(e) {
  return typeof e == "number" && e > -1 && e % 1 === 0;
}
function Wt(e) {
  return _e(e) && Lt(e.length);
}
function U(e) {
  return ke(e)
    ? e
    : e == null
    ? []
    : Wt(e)
    ? Array.prototype.slice.call(e)
    : [e];
}
function je(e) {
  var t = e;
  return (
    re(e) &&
      (/^(#[a-z]\w+)$/.test(e.trim())
        ? (t = document.getElementById(e.trim().slice(1)))
        : (t = document.querySelectorAll(e))),
    U(t).reduce(function (n, s) {
      return [].concat(P(n), P(U(s).filter(Rt)));
    }, [])
  );
}
var Mt = Object.entries,
  ue = "_splittype",
  R = {},
  jt = 0;
function L(e, t, n) {
  if (!_e(e)) return console.warn("[data.set] owner is not an object"), null;
  var s = e[ue] || (e[ue] = ++jt),
    r = R[s] || (R[s] = {});
  return (
    n === void 0
      ? t &&
        Object.getPrototypeOf(t) === Object.prototype &&
        (R[s] = Me(Me({}, r), t))
      : t !== void 0 && (r[t] = n),
    n
  );
}
function N(e, t) {
  var n = _e(e) ? e[ue] : null,
    s = (n && R[n]) || {};
  return s;
}
function Fe(e) {
  var t = e && e[ue];
  t && (delete e[t], delete R[t]);
}
function zt() {
  Object.keys(R).forEach(function (e) {
    delete R[e];
  });
}
function xt() {
  Mt(R).forEach(function (e) {
    var t = He(e, 2),
      n = t[0],
      s = t[1],
      r = s.isRoot,
      o = s.isSplit;
    (!r || !o) && ((R[n] = null), delete R[n]);
  });
}
function Dt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : " ",
    n = e ? String(e) : "";
  return n.trim().replace(/\s+/g, " ").split(t);
}
var Ae = "\\ud800-\\udfff",
  Ve = "\\u0300-\\u036f\\ufe20-\\ufe23",
  Ue = "\\u20d0-\\u20f0",
  qe = "\\ufe0e\\ufe0f",
  Bt = "[".concat(Ae, "]"),
  ge = "[".concat(Ve).concat(Ue, "]"),
  ye = "\\ud83c[\\udffb-\\udfff]",
  Ht = "(?:".concat(ge, "|").concat(ye, ")"),
  Ye = "[^".concat(Ae, "]"),
  Ge = "(?:\\ud83c[\\udde6-\\uddff]){2}",
  Je = "[\\ud800-\\udbff][\\udc00-\\udfff]",
  Qe = "\\u200d",
  Xe = "".concat(Ht, "?"),
  Ke = "[".concat(qe, "]?"),
  Nt = "(?:" + Qe + "(?:" + [Ye, Ge, Je].join("|") + ")" + Ke + Xe + ")*",
  Ft = Ke + Xe + Nt,
  Vt = "(?:".concat(
    ["".concat(Ye).concat(ge, "?"), ge, Ge, Je, Bt].join("|"),
    `
)`
  ),
  Ut = RegExp("".concat(ye, "(?=").concat(ye, ")|").concat(Vt).concat(Ft), "g"),
  qt = [Qe, Ae, Ve, Ue, qe],
  Yt = RegExp("[".concat(qt.join(""), "]"));
function Gt(e) {
  return e.split("");
}
function Ze(e) {
  return Yt.test(e);
}
function Jt(e) {
  return e.match(Ut) || [];
}
function Qt(e) {
  return Ze(e) ? Jt(e) : Gt(e);
}
function Xt(e) {
  return e == null ? "" : String(e);
}
function Kt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return (e = Xt(e)), e && re(e) && !t && Ze(e) ? Qt(e) : e.split(t);
}
function be(e, t) {
  var n = document.createElement(e);
  return (
    t &&
      Object.keys(t).forEach(function (s) {
        var r = t[s],
          o = re(r) ? r.trim() : r;
        o === null ||
          o === "" ||
          (s === "children"
            ? n.append.apply(n, P(U(o)))
            : n.setAttribute(s, o));
      }),
    n
  );
}
var Pe = {
  splitClass: "",
  lineClass: "line",
  wordClass: "word",
  charClass: "char",
  types: ["lines", "words", "chars"],
  absolute: !1,
  tagName: "div",
};
function Zt(e, t) {
  t = H(Pe, t);
  var n = Oe(t.types),
    s = t.tagName,
    r = e.nodeValue,
    o = document.createDocumentFragment(),
    l = [],
    i = [];
  return (
    /^\s/.test(r) && o.append(" "),
    (l = Dt(r).reduce(function (a, f, h, u) {
      var p, v;
      return (
        n.chars &&
          (v = Kt(f).map(function (_) {
            var b = be(s, {
              class: "".concat(t.splitClass, " ").concat(t.charClass),
              style: "display: inline-block;",
              children: _,
            });
            return L(b, "isChar", !0), (i = [].concat(P(i), [b])), b;
          })),
        n.words || n.lines
          ? ((p = be(s, {
              class: "".concat(t.wordClass, " ").concat(t.splitClass),
              style: "display: inline-block; ".concat(
                n.words && t.absolute ? "position: relative;" : ""
              ),
              children: n.chars ? v : f,
            })),
            L(p, { isWord: !0, isWordStart: !0, isWordEnd: !0 }),
            o.appendChild(p))
          : v.forEach(function (_) {
              o.appendChild(_);
            }),
        h < u.length - 1 && o.append(" "),
        n.words ? a.concat(p) : a
      );
    }, [])),
    /\s$/.test(r) && o.append(" "),
    e.replaceWith(o),
    { words: l, chars: i }
  );
}
function et(e, t) {
  var n = e.nodeType,
    s = { words: [], chars: [] };
  if (!/(1|3|11)/.test(n)) return s;
  if (n === 3 && /\S/.test(e.nodeValue)) return Zt(e, t);
  var r = U(e.childNodes);
  if (r.length && (L(e, "isSplit", !0), !N(e).isRoot)) {
    (e.style.display = "inline-block"), (e.style.position = "relative");
    var o = e.nextSibling,
      l = e.previousSibling,
      i = e.textContent || "",
      a = o ? o.textContent : " ",
      f = l ? l.textContent : " ";
    L(e, {
      isWordEnd: /\s$/.test(i) || /^\s/.test(a),
      isWordStart: /^\s/.test(i) || /\s$/.test(f),
    });
  }
  return r.reduce(function (h, u) {
    var p = et(u, t),
      v = p.words,
      _ = p.chars;
    return {
      words: [].concat(P(h.words), P(v)),
      chars: [].concat(P(h.chars), P(_)),
    };
  }, s);
}
function en(e, t, n, s) {
  if (!n.absolute) return { top: t ? e.offsetTop : null };
  var r = e.offsetParent,
    o = He(s, 2),
    l = o[0],
    i = o[1],
    a = 0,
    f = 0;
  if (r && r !== document.body) {
    var h = r.getBoundingClientRect();
    (a = h.x + l), (f = h.y + i);
  }
  var u = e.getBoundingClientRect(),
    p = u.width,
    v = u.height,
    _ = u.x,
    b = u.y,
    w = b + i - f,
    Y = _ + l - a;
  return { width: p, height: v, top: w, left: Y };
}
function tt(e) {
  N(e).isWord
    ? (Fe(e), e.replaceWith.apply(e, P(e.childNodes)))
    : U(e.children).forEach(function (t) {
        return tt(t);
      });
}
var tn = function () {
  return document.createDocumentFragment();
};
function nn(e, t, n) {
  var s = Oe(t.types),
    r = t.tagName,
    o = e.getElementsByTagName("*"),
    l = [],
    i = [],
    a = null,
    f,
    h,
    u,
    p = [],
    v = e.parentElement,
    _ = e.nextElementSibling,
    b = tn(),
    w = window.getComputedStyle(e),
    Y = w.textAlign,
    ee = parseFloat(w.fontSize),
    ve = ee * 0.2;
  return (
    t.absolute &&
      ((u = { left: e.offsetLeft, top: e.offsetTop, width: e.offsetWidth }),
      (h = e.offsetWidth),
      (f = e.offsetHeight),
      L(e, { cssWidth: e.style.width, cssHeight: e.style.height })),
    U(o).forEach(function (k) {
      var O = k.parentElement === e,
        A = en(k, O, t, n),
        j = A.width,
        te = A.height,
        z = A.top,
        x = A.left;
      /^br$/i.test(k.nodeName) ||
        (s.lines &&
          O &&
          ((a === null || z - a >= ve) && ((a = z), l.push((i = []))),
          i.push(k)),
        t.absolute && L(k, { top: z, left: x, width: j, height: te }));
    }),
    v && v.removeChild(e),
    s.lines &&
      ((p = l.map(function (k) {
        var O = be(r, {
          class: "".concat(t.splitClass, " ").concat(t.lineClass),
          style: "display: block; text-align: ".concat(Y, "; width: 100%;"),
        });
        L(O, "isLine", !0);
        var A = { height: 0, top: 1e4 };
        return (
          b.appendChild(O),
          k.forEach(function (j, te, z) {
            var x = N(j),
              oe = x.isWordEnd,
              ae = x.top,
              st = x.height,
              rt = z[te + 1];
            (A.height = Math.max(A.height, st)),
              (A.top = Math.min(A.top, ae)),
              O.appendChild(j),
              oe && N(rt).isWordStart && O.append(" ");
          }),
          t.absolute && L(O, { height: A.height, top: A.top }),
          O
        );
      })),
      s.words || tt(b),
      e.replaceChildren(b)),
    t.absolute &&
      ((e.style.width = "".concat(e.style.width || h, "px")),
      (e.style.height = "".concat(f, "px")),
      U(o).forEach(function (k) {
        var O = N(k),
          A = O.isLine,
          j = O.top,
          te = O.left,
          z = O.width,
          x = O.height,
          oe = N(k.parentElement),
          ae = !A && oe.isLine;
        (k.style.top = "".concat(ae ? j - oe.top : j, "px")),
          (k.style.left = A
            ? "".concat(u.left, "px")
            : "".concat(te - (ae ? u.left : 0), "px")),
          (k.style.height = "".concat(x, "px")),
          (k.style.width = A ? "".concat(u.width, "px") : "".concat(z, "px")),
          (k.style.position = "absolute");
      })),
    v && (_ ? v.insertBefore(e, _) : v.appendChild(e)),
    p
  );
}
var G = H(Pe, {}),
  ze = (function () {
    Le(e, null, [
      {
        key: "clearData",
        value: function () {
          zt();
        },
      },
      {
        key: "setDefaults",
        value: function (n) {
          return (G = H(G, ce(n))), Pe;
        },
      },
      {
        key: "revert",
        value: function (n) {
          je(n).forEach(function (s) {
            var r = N(s),
              o = r.isSplit,
              l = r.html,
              i = r.cssWidth,
              a = r.cssHeight;
            o &&
              ((s.innerHTML = l),
              (s.style.width = i || ""),
              (s.style.height = a || ""),
              Fe(s));
          });
        },
      },
      {
        key: "create",
        value: function (n, s) {
          return new e(n, s);
        },
      },
      {
        key: "data",
        get: function () {
          return R;
        },
      },
      {
        key: "defaults",
        get: function () {
          return G;
        },
        set: function (n) {
          G = H(G, ce(n));
        },
      },
    ]);
    function e(t, n) {
      Ct(this, e),
        (this.isSplit = !1),
        (this.settings = H(G, ce(n))),
        (this.elements = je(t)),
        this.split();
    }
    return (
      Le(e, [
        {
          key: "split",
          value: function (n) {
            var s = this;
            this.revert(),
              this.elements.forEach(function (l) {
                L(l, "html", l.innerHTML);
              }),
              (this.lines = []),
              (this.words = []),
              (this.chars = []);
            var r = [window.pageXOffset, window.pageYOffset];
            n !== void 0 && (this.settings = H(this.settings, ce(n)));
            var o = Oe(this.settings.types);
            o.none ||
              (this.elements.forEach(function (l) {
                L(l, "isRoot", !0);
                var i = et(l, s.settings),
                  a = i.words,
                  f = i.chars;
                (s.words = [].concat(P(s.words), P(a))),
                  (s.chars = [].concat(P(s.chars), P(f)));
              }),
              this.elements.forEach(function (l) {
                if (o.lines || s.settings.absolute) {
                  var i = nn(l, s.settings, r);
                  s.lines = [].concat(P(s.lines), P(i));
                }
              }),
              (this.isSplit = !0),
              window.scrollTo(r[0], r[1]),
              xt());
          },
        },
        {
          key: "revert",
          value: function () {
            this.isSplit &&
              ((this.lines = null),
              (this.words = null),
              (this.chars = null),
              (this.isSplit = !1)),
              e.revert(this.elements);
          },
        },
      ]),
      e
    );
  })();
function Ie(e) {
  const t = m(!1),
    n = V(() => {
      const s = at[e];
      return `(min-width: ${ot[s]}px)`;
    });
  return (
    K(() => {
      function s(o) {
        t.value = o.matches;
      }
      const r = window.matchMedia(n.value);
      return (
        r.addEventListener("change", s),
        (t.value = r.matches),
        () => {
          r.removeEventListener("change", s);
        }
      );
    }),
    t
  );
}
function sn(e) {
  const t = [...e.matchAll(/\S+/g)];
  if (t.length === 0) return ["", ""];
  const n = Math.ceil(t.length / 2);
  if (n === t.length) return [e, ""];
  const s = t[n].index,
    r = e.slice(0, s),
    o = e.slice(s);
  return [r, o.trimLeft()];
}
const rn = ["id"],
  on = { class: "container" },
  an = { class: "scroll-label-container" },
  cn = { class: "scroll-label" },
  ln = { class: "text" },
  dn = E({
    __name: "Hero",
    props: { anchor: {}, title: {}, paragraph: {}, scrollLabel: {} },
    setup(e) {
      const t = e,
        n = Ie("tablet"),
        s = m(!1),
        r = $e(),
        o = V(() => sn(t.scrollLabel)),
        { sectionRef: l } = Z("hero"),
        i = m(),
        a = m(null),
        f = m(null),
        h = m(!1);
      function u() {
        s.value = r.value.animatedScroll > 20;
      }
      return (
        K(() => {
          var p;
          if (((p = r.value) == null || p.on("scroll", u), i.value)) {
            const v = i.value.querySelector("h1");
            v &&
              (a.value = ze.create(v, {
                types: "words,chars",
                tagName: "span",
              }));
            const _ = i.value.querySelector("p");
            _ && (f.value = ze.create(_, { types: "words", tagName: "span" }));
          }
        }),
        pe(le, () => {
          var p, v, _, b;
          le.hidden &&
            !h.value &&
            (v = (p = a.value) == null ? void 0 : p.chars) != null &&
            v.length &&
            (b = (_ = f.value) == null ? void 0 : _.words) != null &&
            b.length &&
            ((h.value = !0),
            ne
              .timeline()
              .add(
                {
                  targets: a.value.chars,
                  translateY: ["50px", "0%"],
                  duration: n.value ? 1600 : 2240,
                  delay: ne.stagger(14),
                  easing: "easeOutQuart",
                },
                n.value ? "+=3000" : "0"
              )
              .add(
                {
                  targets: a.value.chars,
                  opacity: [0, 1],
                  duration: n.value ? 2500 : 3500,
                  delay: ne.stagger(14),
                  easing: "easeInOutSine",
                },
                n.value ? "-=1600" : "0"
              )
              .add(
                {
                  targets: f.value.words,
                  translateY: ["40px", "0%"],
                  duration: n.value ? 1600 : 2240,
                  delay: ne.stagger(25),
                  easing: "easeOutQuart",
                },
                n.value ? "-=2500" : "-=3500"
              )
              .add(
                {
                  targets: f.value.words,
                  opacity: [0, 1],
                  duration: 2500,
                  delay: ne.stagger(25),
                  easing: "easeInOutSine",
                },
                n.value ? "-=2500" : "-=3500"
              ));
        }),
        he(() => {
          var p;
          (p = r.value) == null || p.off("scroll", u);
        }),
        (p, v) => {
          const _ = M;
          return (
            g(),
            $(
              "section",
              {
                ref_key: "sectionRef",
                ref: l,
                class: X([
                  "Hero",
                  {
                    "is-scroll-label-hidden": y(s),
                    visible:
                      ("loaderStore" in p ? p.loaderStore : y(le)).hidden &&
                      ("navigationStore" in p ? p.navigationStore : y(Be))
                        .isNavigationVisible,
                  },
                ]),
                id: p.anchor,
              },
              [
                c("div", on, [
                  c(
                    "div",
                    { ref_key: "editoRef", ref: i, class: "edito" },
                    [
                      d(_, { class: "title", field: p.title }, null, 8, [
                        "field",
                      ]),
                      d(
                        _,
                        { class: "paragraph", field: p.paragraph },
                        null,
                        8,
                        ["field"]
                      ),
                    ],
                    512
                  ),
                  c("div", an, [
                    c("div", cn, [
                      c("p", ln, [
                        (g(!0),
                        $(
                          J,
                          null,
                          Q(
                            y(o),
                            (b, w) => (g(), $("span", { key: w }, S(b), 1))
                          ),
                          128
                        )),
                      ]),
                    ]),
                  ]),
                ]),
              ],
              10,
              rn
            )
          );
        }
      );
    },
  }),
  un = T(dn, [["__scopeId", "data-v-9481a65f"]]),
  fn = { class: "container" },
  pn = ["id"],
  hn = { class: "edito" },
  _n = E({
    __name: "Mission",
    props: { anchor: {}, title: {}, introduction: {}, paragraph: {} },
    setup(e) {
      const { sectionRef: t } = Z("mission");
      return (n, s) => {
        const r = q,
          o = M;
        return (
          g(),
          $(
            "section",
            { ref_key: "sectionRef", ref: t, class: "Mission" },
            [
              c("div", fn, [
                c("div", { class: "anchor", id: n.anchor }, null, 8, pn),
                c("div", hn, [
                  d(r, null, { default: C(() => [W(S(n.title), 1)]), _: 1 }),
                  d(
                    o,
                    { class: "introduction", field: n.introduction },
                    null,
                    8,
                    ["field"]
                  ),
                ]),
                d(o, { class: "paragraph", field: n.paragraph }, null, 8, [
                  "field",
                ]),
              ]),
            ],
            512
          )
        );
      };
    },
  }),
  vn = T(_n, [["__scopeId", "data-v-0dcbe577"]]);
function mn(e, t = {}) {
  const n = m(!1);
  return (
    gn(
      e,
      (s) => {
        (t.once && n.value) || (n.value = s);
      },
      t
    ),
    n
  );
}
function gn(
  e,
  t,
  {
    enabled: n = void 0,
    rootMargin: s = "0px",
    threshold: r = 0,
    once: o = !1,
    leave: l = !1,
  } = {}
) {
  const i = it();
  pe([e, n || m(!0), i], ([a, f, h]) => {
    if (h && (h.disconnect(), !(!f || !a))) {
      a = [a].flat().filter(Boolean);
      for (const u of a) h.observe(u);
    }
  }),
    K(() => {
      let a;
      (i.value = new IntersectionObserver(
        (f) => {
          for (a of f) t(a.isIntersecting, a.target);
          o && i.value.disconnect();
        },
        { rootMargin: s, threshold: r }
      )),
        (i.value.observe = i.value.observe.bind(i.value));
    }),
    he(() => {
      i.value && i.value.disconnect(), (i.value = void 0);
    }),
    l &&
      ct(() => {
        const a = Array.isArray(e.value) ? e.value : [e.value];
        for (const f of a) t(!1, f);
      });
}
const fe = m({ width: 0, height: 0 }),
  F = [];
let xe = () => {};
function nt(e, { enabled: t = void 0, deferred: n = !1 } = {}) {
  let s;
  t = t || m(!0);
  let r;
  if (n) {
    let o = !1;
    const l = () => {
      e(fe.value), (o = !1);
    };
    r = () => {
      !o && (o = !0) && requestAnimationFrame(l);
    };
  } else r = () => e(fe.value);
  K(() => {
    s = pe(t, (o) => (o ? yn(r) : De(r)), { immediate: !0 });
  }),
    he(() => {
      s == null || s(), De(r);
    });
}
function yn(e) {
  if (!F.length) addEventListener("resize", we, { passive: !0 }), we();
  else if (F.includes(e)) return;
  F.push(e), e();
}
function De(e) {
  const t = F.indexOf(e);
  t !== -1 &&
    (F.splice(t, 1),
    F.length || removeEventListener("resize", we, { passive: !0 }));
}
function we() {
  (fe.value.width = window.innerWidth), (fe.value.height = window.innerHeight);
  for (xe of F) xe();
}
function Se(
  e,
  t,
  { enabled: n = void 0, defer: s = !1, inViewParameters: r } = {}
) {
  const o = mn(e, { enabled: n, ...r }),
    l = $e(),
    i = {
      x: 0,
      y: 0,
      top: 0,
      width: 0,
      height: 0,
      viewportWidth: 0,
      viewportHeight: 0,
      scroll: 0,
    };
  let a,
    f = 0,
    h;
  if (s) {
    let p = !1;
    const v = () => {
      t(i), (p = !1);
    };
    h = () => {
      !p && (p = !0) && window.requestAnimationFrame(v);
    };
  } else h = () => t(i);
  const u = () => {
    (f = l.value.animatedScroll),
      (i.scroll = f),
      e.value &&
        ((a = e.value.getBoundingClientRect()),
        (i.x = a.x),
        (i.y = a.y),
        (i.top = a.top + l.value.animatedScroll),
        (i.width = a.width),
        (i.height = a.height));
  };
  pe(o, (p) => {
    u(), h();
  }),
    K(() => {
      u(), h();
    }),
    nt(
      (p) => {
        u(), (i.viewportWidth = p.width), (i.viewportHeight = p.height), h();
      },
      { enabled: o }
    ),
    lt(
      (p) => {
        (i.y = a.y + (f - p)), (i.scroll = p), t(i);
      },
      { enabled: o }
    );
}
function bn(e, t = 0, n = 0) {
  return (
    1 -
      Math.max(
        0,
        Math.min(
          1,
          (e.y + e.height - t) / (e.viewportHeight + e.height - n - t)
        )
      ) || 0
  );
}
const wn = ["id"],
  Sn = { class: "first-edito" },
  $n = { class: "text" },
  Cn = { class: "title" },
  kn = { class: "illustration-container" },
  On = { class: "text" },
  An = { class: "title" },
  Pn = { class: "illustration-container" },
  In = { class: "second-edito" },
  En = E({
    __name: "Specificity",
    props: {
      anchor: {},
      title: {},
      introduction: {},
      firstPointOfInterest: {},
      secondPointOfInterest: {},
      firstParagraph: {},
      secondParagraph: {},
    },
    setup(e) {
      const t = Ie("tablet"),
        { sectionRef: n } = Z("specificity"),
        s = m(),
        r = m(),
        o = m(),
        l = m(!1),
        i = m(!1),
        a = V(() => !t.value || (l.value && i.value)),
        f = (u, p, v) => {
          const _ = (u.x / u.viewportWidth) * 2 - 1,
            b = ((u.y / u.viewportHeight) * 2 - 1) * -1;
          (v.value = _ > -1 && _ < 1 && b > -1 && b < 1),
            dt(p, {
              x: (u.x / ie.viewport.size.width) * 2 - 1,
              y: ((u.y / ie.viewport.size.height) * 2 - 1) * -1,
              isVisible: v.value,
              width: u.width / ie.viewport.size.width,
              height: u.height / ie.viewport.size.height,
            });
        },
        h = { inViewParameters: { rootMargin: "50px 0px 50px 0px" } };
      return (
        Se(s, (u) => f(u, "text_holder_1", l), h),
        Se(r, (u) => f(u, "text_holder_2", i), h),
        (u, p) => {
          const v = q,
            _ = M,
            b = gt,
            w = Ce;
          return (
            g(),
            $(
              "section",
              { ref_key: "sectionRef", ref: n, class: "Specificity" },
              [
                c("div", { class: "anchor", id: u.anchor }, null, 8, wn),
                c(
                  "div",
                  { ref_key: "containerRef", ref: o, class: "container" },
                  [
                    c("div", Sn, [
                      d(v, null, {
                        default: C(() => [W(S(u.title), 1)]),
                        _: 1,
                      }),
                      d(
                        _,
                        { class: "paragraph", field: u.introduction },
                        null,
                        8,
                        ["field"]
                      ),
                    ]),
                    c(
                      "div",
                      {
                        ref_key: "firstPOIRef",
                        ref: s,
                        class: X([
                          "point-of-interest first-point-of-interest",
                          { visible: y(a) },
                        ]),
                      },
                      [
                        d(b, {
                          class: "marker",
                          type: "point-of-interest-marker",
                        }),
                        c("div", $n, [
                          c("h3", Cn, S(u.firstPointOfInterest.title), 1),
                          d(
                            _,
                            {
                              class: "description",
                              field: u.firstPointOfInterest.description,
                            },
                            null,
                            8,
                            ["field"]
                          ),
                        ]),
                        c("div", kn, [
                          d(
                            w,
                            I(
                              { class: "illustration" },
                              u.firstPointOfInterest.illustration
                            ),
                            null,
                            16
                          ),
                        ]),
                      ],
                      2
                    ),
                    c(
                      "div",
                      {
                        ref_key: "secondPOIRef",
                        ref: r,
                        class: X([
                          "point-of-interest second-point-of-interest",
                          { visible: y(a) },
                        ]),
                      },
                      [
                        d(b, {
                          class: "marker",
                          type: "point-of-interest-marker",
                        }),
                        c("div", On, [
                          c("h3", An, S(u.secondPointOfInterest.title), 1),
                          d(
                            _,
                            {
                              class: "description",
                              field: u.secondPointOfInterest.description,
                            },
                            null,
                            8,
                            ["field"]
                          ),
                        ]),
                        c("div", Pn, [
                          d(
                            w,
                            I(
                              { class: "illustration" },
                              u.secondPointOfInterest.illustration
                            ),
                            null,
                            16
                          ),
                        ]),
                      ],
                      2
                    ),
                    c("div", In, [
                      d(
                        _,
                        {
                          class: "paragraph first-paragraph",
                          field: u.firstParagraph,
                        },
                        null,
                        8,
                        ["field"]
                      ),
                      d(
                        _,
                        {
                          class: "paragraph second-paragraph",
                          field: u.secondParagraph,
                        },
                        null,
                        8,
                        ["field"]
                      ),
                    ]),
                  ],
                  512
                ),
              ],
              512
            )
          );
        }
      );
    },
  }),
  Tn = T(En, [["__scopeId", "data-v-b2517683"]]),
  Rn = { class: "container speed" },
  Ln = { class: "edito" },
  Wn = ["id"],
  Mn = { class: "container performance" },
  jn = { class: "edito" },
  zn = { class: "container energy" },
  xn = { class: "edito" },
  Dn = E({
    __name: "Advantages",
    props: {
      anchor: {},
      firstAvantages: {},
      secondAvantages: {},
      thirdAvantages: {},
    },
    setup(e) {
      const { sectionRef: t } = Z("advantages");
      return (n, s) => {
        const r = q,
          o = M;
        return (
          g(),
          $(
            "section",
            { ref_key: "sectionRef", ref: t, class: "Advantages" },
            [
              c("div", Rn, [
                c("div", Ln, [
                  c("div", { class: "anchor", id: n.anchor }, null, 8, Wn),
                  d(r, null, {
                    default: C(() => [W(S(n.firstAvantages.title), 1)]),
                    _: 1,
                  }),
                  d(
                    o,
                    {
                      class: "description",
                      field: n.firstAvantages.description,
                    },
                    null,
                    8,
                    ["field"]
                  ),
                ]),
              ]),
              c("div", Mn, [
                c("div", jn, [
                  d(r, null, {
                    default: C(() => [W(S(n.secondAvantages.title), 1)]),
                    _: 1,
                  }),
                  d(
                    o,
                    {
                      class: "description",
                      field: n.secondAvantages.description,
                    },
                    null,
                    8,
                    ["field"]
                  ),
                ]),
              ]),
              c("div", zn, [
                c("div", xn, [
                  d(r, null, {
                    default: C(() => [W(S(n.thirdAvantages.title), 1)]),
                    _: 1,
                  }),
                  d(
                    o,
                    {
                      class: "description",
                      field: n.thirdAvantages.description,
                    },
                    null,
                    8,
                    ["field"]
                  ),
                ]),
              ]),
            ],
            512
          )
        );
      };
    },
  }),
  Bn = T(Dn, [["__scopeId", "data-v-6b66796b"]]),
  Hn = ["id"],
  Nn = { class: "container" },
  Fn = { class: "edito" },
  Vn = { class: "paragraphs" },
  Un = { class: "container second-container" },
  qn = E({
    __name: "Deployment",
    props: {
      anchor: {},
      title: {},
      introduction: {},
      firstParagraph: {},
      secondParagraph: {},
      quote: {},
    },
    setup(e) {
      const { sectionRef: t } = Z("deployment");
      return (n, s) => {
        const r = q,
          o = M;
        return (
          g(),
          $(
            "section",
            {
              ref_key: "sectionRef",
              ref: t,
              class: "Deployment",
              id: n.anchor,
            },
            [
              c("div", Nn, [
                c("div", Fn, [
                  d(
                    r,
                    { class: "title" },
                    { default: C(() => [W(S(n.title), 1)]), _: 1 }
                  ),
                  d(
                    o,
                    { class: "introduction", field: n.introduction },
                    null,
                    8,
                    ["field"]
                  ),
                  c("div", Vn, [
                    d(
                      o,
                      { class: "paragraph", field: n.firstParagraph },
                      null,
                      8,
                      ["field"]
                    ),
                    d(
                      o,
                      { class: "paragraph", field: n.secondParagraph },
                      null,
                      8,
                      ["field"]
                    ),
                  ]),
                ]),
              ]),
              c("div", Un, [
                d(o, { class: "quote", field: n.quote }, null, 8, ["field"]),
              ]),
            ],
            8,
            Hn
          )
        );
      };
    },
  }),
  Yn = T(qn, [["__scopeId", "data-v-64a1ae3c"]]),
  Gn = ["viewBox"],
  Jn = ["stroke", "stroke-width", "d"],
  Qn = E({
    __name: "Card",
    props: {
      cornerSize: { default: 0.75 },
      borderSize: { default: 0.0625 },
      borderColor: { default: "var(--color-gray)" },
      contentClass: {},
    },
    setup(e) {
      const t = e,
        n = m(),
        s = m(0),
        r = m(0),
        o = m(16);
      ut(n, ({ width: a, height: f }) => {
        (s.value = a), (r.value = f);
      }),
        nt(() => {
          o.value = parseFloat(
            getComputedStyle(document.documentElement).fontSize
          );
        });
      const l = V(() => Number(t.borderSize) * o.value),
        i = V(() => {
          const a = Number(t.cornerSize) * o.value,
            f = l.value * 0.5;
          return `M${f},${f}
    H${s.value - a - f}
    L${s.value - f},${a + f}
    V${r.value - f}
    H${f}
    Z`;
        });
      return (a, f) => (
        g(),
        $(
          "div",
          { class: "Card", ref_key: "componentRef", ref: n },
          [
            (g(),
            $(
              "svg",
              {
                class: "card-shape",
                preserveAspectRatio: "none",
                viewBox: `0 0 ${y(s)} ${y(r)}`,
              },
              [
                c(
                  "path",
                  {
                    class: "card-path",
                    stroke: a.borderColor,
                    "stroke-width": y(l),
                    "vector-effect": "non-scaling-stroke",
                    d: y(i),
                  },
                  null,
                  8,
                  Jn
                ),
              ],
              8,
              Gn
            )),
            c(
              "div",
              { class: X(["card-content", a.contentClass]) },
              [de(a.$slots, "default", {}, void 0)],
              2
            ),
          ],
          512
        )
      );
    },
  }),
  Ee = T(Qn, [["__scopeId", "data-v-41a7a40d"]]),
  Xn = { class: "Team" },
  Kn = { class: "container" },
  Zn = ["id"],
  es = { class: "edito" },
  ts = { class: "cards" },
  ns = { class: "text" },
  ss = { class: "title" },
  rs = { class: "text" },
  os = { class: "title" },
  as = { class: "text" },
  is = { class: "title" },
  cs = E({
    __name: "Team",
    props: {
      anchor: {},
      title: {},
      introduction: {},
      paragraph: {},
      firstCard: {},
      secondCard: {},
      thirdCard: {},
    },
    setup(e) {
      return (t, n) => {
        const s = q,
          r = M,
          o = Ce,
          l = Ee;
        return (
          g(),
          $("section", Xn, [
            c("div", Kn, [
              c("div", { class: "anchor", id: t.anchor }, null, 8, Zn),
              c("div", es, [
                d(
                  s,
                  { class: "title" },
                  { default: C(() => [W(S(t.title), 1)]), _: 1 }
                ),
                d(
                  r,
                  { class: "introduction", field: t.introduction },
                  null,
                  8,
                  ["field"]
                ),
                d(r, { class: "paragraph", field: t.paragraph }, null, 8, [
                  "field",
                ]),
              ]),
              c("div", ts, [
                d(
                  l,
                  { class: "card first-card", "content-class": "content" },
                  {
                    default: C(() => [
                      d(o, I({ class: "icon" }, t.firstCard.icon), null, 16),
                      c("div", ns, [
                        c("p", ss, S(t.firstCard.title), 1),
                        d(
                          r,
                          {
                            class: "description",
                            field: t.firstCard.description,
                          },
                          null,
                          8,
                          ["field"]
                        ),
                      ]),
                    ]),
                    _: 1,
                  }
                ),
                d(
                  l,
                  { class: "card second-card", "content-class": "content" },
                  {
                    default: C(() => [
                      d(o, I({ class: "icon" }, t.secondCard.icon), null, 16),
                      c("div", rs, [
                        c("p", os, S(t.secondCard.title), 1),
                        d(
                          r,
                          {
                            class: "description",
                            field: t.secondCard.description,
                          },
                          null,
                          8,
                          ["field"]
                        ),
                      ]),
                    ]),
                    _: 1,
                  }
                ),
                d(
                  l,
                  { class: "card third-card", "content-class": "content" },
                  {
                    default: C(() => [
                      d(o, I({ class: "icon" }, t.thirdCard.icon), null, 16),
                      c("div", as, [
                        c("p", is, S(t.thirdCard.title), 1),
                        d(
                          r,
                          {
                            class: "description",
                            field: t.thirdCard.description,
                          },
                          null,
                          8,
                          ["field"]
                        ),
                      ]),
                    ]),
                    _: 1,
                  }
                ),
              ]),
            ]),
          ])
        );
      };
    },
  }),
  ls = T(cs, [["__scopeId", "data-v-01e17fcd"]]),
  ds = { class: "Career" },
  us = { class: "container" },
  fs = ["id"],
  ps = { class: "edito" },
  hs = { class: "jobs" },
  _s = { class: "head" },
  vs = { class: "label", scope: "col" },
  ms = { class: "label", scope: "col" },
  gs = { class: "title" },
  ys = { class: "description" },
  bs = { class: "link" },
  ws = { class: "link-container" },
  Ss = E({
    __name: "Career",
    props: {
      anchor: {},
      title: {},
      paragraph: {},
      link: {},
      firstColumnLabel: {},
      secondColumnLabel: {},
      jobs: {},
    },
    setup(e) {
      return (t, n) => {
        const s = q,
          r = M,
          o = yt,
          l = bt;
        return (
          g(),
          $("section", ds, [
            c("div", us, [
              c("div", { class: "anchor", id: t.anchor }, null, 8, fs),
              c("div", ps, [
                d(s, null, { default: C(() => [W(S(t.title), 1)]), _: 1 }),
                d(r, { class: "paragraph", field: t.paragraph }, null, 8, [
                  "field",
                ]),
                d(
                  o,
                  I({ class: "button", "icon-type": "arrow" }, t.link),
                  null,
                  16
                ),
              ]),
              c("table", hs, [
                c("thead", _s, [
                  c("tr", null, [
                    c("th", vs, S(t.firstColumnLabel), 1),
                    c("th", ms, S(t.secondColumnLabel), 1),
                  ]),
                ]),
                c("tbody", null, [
                  (g(!0),
                  $(
                    J,
                    null,
                    Q(
                      t.jobs,
                      (i, a) => (
                        g(),
                        $("tr", { key: a, class: "job" }, [
                          c("th", gs, S(i.title), 1),
                          c("td", ys, S(i.description), 1),
                          c("td", bs, [
                            c("div", ws, [
                              d(
                                l,
                                I({ class: "link", ref_for: !0 }, i.link),
                                null,
                                16
                              ),
                            ]),
                          ]),
                        ])
                      )
                    ),
                    128
                  )),
                ]),
              ]),
            ]),
          ])
        );
      };
    },
  }),
  $s = T(Ss, [["__scopeId", "data-v-c296f93c"]]),
  Cs = E({
    __name: "Marquee",
    props: { offset: { default: 0 }, direction: { default: "ltr" } },
    setup(e) {
      const t = e,
        n = m(),
        s = m(),
        r = m(),
        o = m(0),
        l = m(-1),
        i = V(() => (t.direction === "ltr" ? 1 : -1)),
        a = m(1),
        f = m(t.offset),
        h = Te(n),
        u = Te(r),
        p = $e(),
        v = V(() =>
          h.width.value && u.width.value
            ? Math.ceil(h.width.value / u.width.value || 0) + 1
            : 1
        );
      function _() {
        var ee;
        const w = -o.value + (o.value = performance.now());
        f.value += w * 0.04 * l.value * i.value;
        const Y = ft(f.value, 0, u.width.value);
        (ee = s.value) == null ||
          ee.style.setProperty("transform", `translate3d(${-Y}px, 0, 0)`),
          (a.value = window.requestAnimationFrame(_));
      }
      function b() {
        f.value += p.value.velocity * 0.1 * i.value;
        const w = Math.sign(p.value.velocity);
        w !== 0 && (l.value = w);
      }
      return (
        K(() => {
          var w;
          (a.value = window.requestAnimationFrame(_)),
            (w = p.value) == null || w.on("scroll", b);
        }),
        he(() => {
          var w;
          a.value && window.cancelAnimationFrame(a.value),
            (w = p.value) == null || w.off("scroll", b);
        }),
        (w, Y) => (
          g(),
          $(
            "div",
            { ref_key: "componentRef", ref: n, class: "Marquee" },
            [
              c(
                "div",
                { ref_key: "scrollerRef", ref: s, class: "scroller" },
                [
                  c(
                    "div",
                    { ref_key: "wrapperRef", ref: r, class: "wrapper" },
                    [de(w.$slots, "default", {}, void 0)],
                    512
                  ),
                  (g(!0),
                  $(
                    J,
                    null,
                    Q(
                      y(v),
                      (ee, ve) => (
                        g(),
                        $("div", { key: ve, class: "wrapper" }, [
                          de(w.$slots, "default", {}, void 0),
                        ])
                      )
                    ),
                    128
                  )),
                ],
                512
              ),
            ],
            512
          )
        )
      );
    },
  }),
  ks = T(Cs, [["__scopeId", "data-v-1d45bf77"]]),
  Os = { class: "TrustedBy" },
  As = { class: "container" },
  Ps = ["id"],
  Is = E({
    __name: "TrustedBy",
    props: { anchor: {}, title: {}, logos: {} },
    setup(e) {
      const t = Ie("tablet");
      return (n, s) => {
        const r = q,
          o = Ce,
          l = Ee,
          i = ks;
        return (
          g(),
          $("section", Os, [
            c("div", As, [
              c("div", { class: "anchor", id: n.anchor }, null, 8, Ps),
              d(r, null, { default: C(() => [W(S(n.title), 1)]), _: 1 }),
            ]),
            d(
              i,
              { class: "first-marquee" },
              {
                default: C(() => [
                  (g(!0),
                  $(
                    J,
                    null,
                    Q(
                      n.logos,
                      (a, f) => (
                        g(),
                        se(
                          l,
                          {
                            key: f,
                            class: "card",
                            "border-size": "0.0625",
                            "corner-size": y(t) ? 1.25 : 0.75,
                          },
                          {
                            default: C(() => [
                              d(
                                o,
                                I({ class: "logo", ref_for: !0 }, a),
                                null,
                                16
                              ),
                            ]),
                            _: 2,
                          },
                          1032,
                          ["corner-size"]
                        )
                      )
                    ),
                    128
                  )),
                ]),
                _: 1,
              }
            ),
            y(t)
              ? pt("", !0)
              : (g(),
                se(
                  i,
                  {
                    key: 0,
                    class: "second-marquee",
                    offset: 84,
                    direction: "rtl",
                  },
                  {
                    default: C(() => [
                      (g(!0),
                      $(
                        J,
                        null,
                        Q(
                          n.logos,
                          (a, f) => (
                            g(),
                            se(
                              l,
                              {
                                key: f,
                                class: "card",
                                "border-size": "0.0625",
                                "corner-size": y(t) ? 1.25 : 0.75,
                              },
                              {
                                default: C(() => [
                                  d(
                                    o,
                                    I({ class: "logo", ref_for: !0 }, a),
                                    null,
                                    16
                                  ),
                                ]),
                                _: 2,
                              },
                              1032,
                              ["corner-size"]
                            )
                          )
                        ),
                        128
                      )),
                    ]),
                    _: 1,
                  }
                )),
          ])
        );
      };
    },
  }),
  Es = T(Is, [["__scopeId", "data-v-85617cc6"]]),
  Ts = E({
    __name: "CardButton",
    props: {
      theme: { default: "light" },
      active: { type: Boolean, default: void 0 },
      onClick: {},
      to: {},
      target: {},
      text: { default: "" },
    },
    setup(e) {
      const t = e;
      return (n, s) => {
        const r = Ee,
          o = ht;
        return (
          g(),
          se(
            o,
            I(
              {
                class: ["CardButton", { active: n.active, [n.theme]: n.theme }],
              },
              t
            ),
            {
              default: C(() => [
                d(
                  r,
                  {
                    class: "card",
                    "content-class": "card-content",
                    "border-size": "0.0625",
                    "corner-size": "0.5",
                  },
                  {
                    default: C(() => [de(n.$slots, "default", {}, void 0, !0)]),
                    _: 3,
                  }
                ),
              ]),
              _: 3,
            },
            16,
            ["class"]
          )
        );
      };
    },
  }),
  Rs = T(Ts, [["__scopeId", "data-v-cca1e225"]]),
  Ls = ["id"],
  Ws = { class: "container" },
  Ms = { class: "buttons" },
  js = { class: "labels" },
  zs = { class: "slider" },
  xs = { class: "main-label" },
  Ds = { class: "second-labels" },
  Bs = { class: "second-labels-slider" },
  Hs = { class: "copy-label" },
  Ns = { class: "copied-label" },
  Fs = { class: "label-container" },
  Vs = { class: "label", "data-label": "Telegram" },
  Us = E({
    __name: "Contact",
    props: {
      anchor: {},
      title: {},
      description: {},
      email: {},
      emailLabel: {},
      emailCopyLabel: {},
      emailCopiedLabel: {},
      links: {},
    },
    setup(e) {
      const t = e,
        n = m(!1),
        s = m();
      function r() {
        n.value ||
          ((n.value = !0),
          navigator.clipboard.writeText(t.email).then(() => {
            setTimeout(() => {
              n.value = !1;
            }, 2e3);
          }));
      }
      const { footerProgress: o } = Z();
      return (
        Se(s, (l) => {
          o.value = _t(vt(bn(l, 0, wt.footerSize.height), 0, 0.5, 0, 1), 0, 1);
        }),
        (l, i) => {
          const a = M,
            f = Rs;
          return (
            g(),
            $(
              "section",
              { ref_key: "sectionRef", ref: s, class: "Contact" },
              [
                c("div", { class: "anchor", id: l.anchor }, null, 8, Ls),
                c("div", Ws, [
                  d(a, { class: "title", field: l.title }, null, 8, ["field"]),
                  d(
                    a,
                    { class: "description", field: l.description },
                    null,
                    8,
                    ["field"]
                  ),
                  c("div", Ms, [
                    d(
                      f,
                      {
                        class: X(["copy-email", { "is-copying": y(n) }]),
                        "on-click": () => window.open('https://x.com/arago_eth'),
                      },
                      {
                        default: C(() => [
                          c("span", js, [
                            c("span", zs, [
                              c("span", xs, S(l.emailLabel), 1),
                              c("span", Ds, [
                                c("span", Bs, [
                                  c("span", Hs, S(l.emailCopyLabel), 1),
                                  c("span", Ns, S(l.emailCopiedLabel), 1),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]),
                        _: 1,
                      },
                      8,
                      ["class"]
                    ),
                    (g(!0),
                    $(
                      J,
                      null,
                      Q(
                        l.links,
                        (h, u) => (
                          g(),
                          se(
                            f,
                            I({ key: u, class: "link", ref_for: !0 }, h),
                            {
                              default: C(() => [
                                c("span", Fs, [c("span", Vs, S(h.text), 1)]),
                              ]),
                              _: 2,
                            },
                            1040
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                ]),
              ],
              512
            )
          );
        }
      );
    },
  }),
  qs = T(Us, [["__scopeId", "data-v-7afc758b"]]),
  Ys = E({
    __name: "index",
    async setup(e) {
      let t, n;
      const s = (([t, n] = mt(() => St("home"))), (t = await t), n(), t);
      return (
        $t({
          title: s.metadata.title,
          ogTitle: s.metadata.title,
          description: s.metadata.description,
          ogDescription: s.metadata.description,
          ogImage: s.metadata.image.src,
          twitterCard: "summary_large_image",
        }),
        (r, o) => {
          const l = un,
            i = vn,
            a = Tn,
            f = Bn,
            h = Yn,
            u = ls,
            p = $s,
            v = Es,
            _ = qs;
          return (
            g(),
            $("div", null, [
              c(
                "div",
                {
                  class: X([
                    "page-animation-wrapper",
                    {
                      hidden:
                        ("navigationStore" in r ? r.navigationStore : y(Be))
                          .isMenuOpen ||
                        !("loaderStore" in r ? r.loaderStore : y(le)).hidden,
                    },
                  ]),
                },
                [
                  d(l, D(B(y(s).hero)), null, 16),
                  d(i, D(B(y(s).mission)), null, 16),
                  d(a, D(B(y(s).specificity)), null, 16),
                  d(f, D(B(y(s).advantages)), null, 16),
                  d(h, D(B(y(s).deployment)), null, 16),
                  d(u, I({ class: "team" }, y(s).team), null, 16),
                  d(p, I({ class: "career" }, y(s).career), null, 16),
                  d(v, D(B(y(s).trustedBy)), null, 16),
                  d(_, D(B(y(s).contact)), null, 16),
                ],
                2
              ),
            ])
          );
        }
      );
    },
  }),
  Ks = T(Ys, [["__scopeId", "data-v-1b1be97d"]]);
export { Ks as default };
