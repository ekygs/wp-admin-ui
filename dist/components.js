import { useState as fe, useEffect as Le, useRef as me, createPortal as Pt, Children as tn, cloneElement as nn } from "@wordpress/element";
import an from "@wordpress/api-fetch";
import { useOutsideClick as Zr, getTextWidth as on } from "./utils.js";
var Er = { exports: {} }, nr = {}, Cr = { exports: {} }, P = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Et;
function un() {
  if (Et) return P;
  Et = 1;
  var s = Symbol.for("react.element"), n = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), v = Symbol.for("react.provider"), g = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), _ = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), x = Symbol.iterator;
  function k(a) {
    return a === null || typeof a != "object" ? null : (a = x && a[x] || a["@@iterator"], typeof a == "function" ? a : null);
  }
  var T = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, M = Object.assign, te = {};
  function le(a, d, N) {
    this.props = a, this.context = d, this.refs = te, this.updater = N || T;
  }
  le.prototype.isReactComponent = {}, le.prototype.setState = function(a, d) {
    if (typeof a != "object" && typeof a != "function" && a != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, a, d, "setState");
  }, le.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
  };
  function ne() {
  }
  ne.prototype = le.prototype;
  function V(a, d, N) {
    this.props = a, this.context = d, this.refs = te, this.updater = N || T;
  }
  var be = V.prototype = new ne();
  be.constructor = V, M(be, le.prototype), be.isPureReactComponent = !0;
  var de = Array.isArray, Q = Object.prototype.hasOwnProperty, ae = { current: null }, F = { key: !0, ref: !0, __self: !0, __source: !0 };
  function X(a, d, N) {
    var A, $ = {}, q = null, B = null;
    if (d != null) for (A in d.ref !== void 0 && (B = d.ref), d.key !== void 0 && (q = "" + d.key), d) Q.call(d, A) && !F.hasOwnProperty(A) && ($[A] = d[A]);
    var Y = arguments.length - 2;
    if (Y === 1) $.children = N;
    else if (1 < Y) {
      for (var U = Array(Y), ee = 0; ee < Y; ee++) U[ee] = arguments[ee + 2];
      $.children = U;
    }
    if (a && a.defaultProps) for (A in Y = a.defaultProps, Y) $[A] === void 0 && ($[A] = Y[A]);
    return { $$typeof: s, type: a, key: q, ref: B, props: $, _owner: ae.current };
  }
  function ye(a, d) {
    return { $$typeof: s, type: a.type, key: d, ref: a.ref, props: a.props, _owner: a._owner };
  }
  function Te(a) {
    return typeof a == "object" && a !== null && a.$$typeof === s;
  }
  function Ke(a) {
    var d = { "=": "=0", ":": "=2" };
    return "$" + a.replace(/[=:]/g, function(N) {
      return d[N];
    });
  }
  var Oe = /\/+/g;
  function pe(a, d) {
    return typeof a == "object" && a !== null && a.key != null ? Ke("" + a.key) : d.toString(36);
  }
  function ve(a, d, N, A, $) {
    var q = typeof a;
    (q === "undefined" || q === "boolean") && (a = null);
    var B = !1;
    if (a === null) B = !0;
    else switch (q) {
      case "string":
      case "number":
        B = !0;
        break;
      case "object":
        switch (a.$$typeof) {
          case s:
          case n:
            B = !0;
        }
    }
    if (B) return B = a, $ = $(B), a = A === "" ? "." + pe(B, 0) : A, de($) ? (N = "", a != null && (N = a.replace(Oe, "$&/") + "/"), ve($, d, N, "", function(ee) {
      return ee;
    })) : $ != null && (Te($) && ($ = ye($, N + (!$.key || B && B.key === $.key ? "" : ("" + $.key).replace(Oe, "$&/") + "/") + a)), d.push($)), 1;
    if (B = 0, A = A === "" ? "." : A + ":", de(a)) for (var Y = 0; Y < a.length; Y++) {
      q = a[Y];
      var U = A + pe(q, Y);
      B += ve(q, d, N, U, $);
    }
    else if (U = k(a), typeof U == "function") for (a = U.call(a), Y = 0; !(q = a.next()).done; ) q = q.value, U = A + pe(q, Y++), B += ve(q, d, N, U, $);
    else if (q === "object") throw d = String(a), Error("Objects are not valid as a React child (found: " + (d === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : d) + "). If you meant to render a collection of children, use an array instead.");
    return B;
  }
  function oe(a, d, N) {
    if (a == null) return a;
    var A = [], $ = 0;
    return ve(a, A, "", "", function(q) {
      return d.call(N, q, $++);
    }), A;
  }
  function ge(a) {
    if (a._status === -1) {
      var d = a._result;
      d = d(), d.then(function(N) {
        (a._status === 0 || a._status === -1) && (a._status = 1, a._result = N);
      }, function(N) {
        (a._status === 0 || a._status === -1) && (a._status = 2, a._result = N);
      }), a._status === -1 && (a._status = 0, a._result = d);
    }
    if (a._status === 1) return a._result.default;
    throw a._result;
  }
  var C = { current: null }, we = { transition: null }, Pe = { ReactCurrentDispatcher: C, ReactCurrentBatchConfig: we, ReactCurrentOwner: ae };
  function xe() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return P.Children = { map: oe, forEach: function(a, d, N) {
    oe(a, function() {
      d.apply(this, arguments);
    }, N);
  }, count: function(a) {
    var d = 0;
    return oe(a, function() {
      d++;
    }), d;
  }, toArray: function(a) {
    return oe(a, function(d) {
      return d;
    }) || [];
  }, only: function(a) {
    if (!Te(a)) throw Error("React.Children.only expected to receive a single React element child.");
    return a;
  } }, P.Component = le, P.Fragment = f, P.Profiler = y, P.PureComponent = V, P.StrictMode = c, P.Suspense = h, P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pe, P.act = xe, P.cloneElement = function(a, d, N) {
    if (a == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
    var A = M({}, a.props), $ = a.key, q = a.ref, B = a._owner;
    if (d != null) {
      if (d.ref !== void 0 && (q = d.ref, B = ae.current), d.key !== void 0 && ($ = "" + d.key), a.type && a.type.defaultProps) var Y = a.type.defaultProps;
      for (U in d) Q.call(d, U) && !F.hasOwnProperty(U) && (A[U] = d[U] === void 0 && Y !== void 0 ? Y[U] : d[U]);
    }
    var U = arguments.length - 2;
    if (U === 1) A.children = N;
    else if (1 < U) {
      Y = Array(U);
      for (var ee = 0; ee < U; ee++) Y[ee] = arguments[ee + 2];
      A.children = Y;
    }
    return { $$typeof: s, type: a.type, key: $, ref: q, props: A, _owner: B };
  }, P.createContext = function(a) {
    return a = { $$typeof: g, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, a.Provider = { $$typeof: v, _context: a }, a.Consumer = a;
  }, P.createElement = X, P.createFactory = function(a) {
    var d = X.bind(null, a);
    return d.type = a, d;
  }, P.createRef = function() {
    return { current: null };
  }, P.forwardRef = function(a) {
    return { $$typeof: R, render: a };
  }, P.isValidElement = Te, P.lazy = function(a) {
    return { $$typeof: E, _payload: { _status: -1, _result: a }, _init: ge };
  }, P.memo = function(a, d) {
    return { $$typeof: _, type: a, compare: d === void 0 ? null : d };
  }, P.startTransition = function(a) {
    var d = we.transition;
    we.transition = {};
    try {
      a();
    } finally {
      we.transition = d;
    }
  }, P.unstable_act = xe, P.useCallback = function(a, d) {
    return C.current.useCallback(a, d);
  }, P.useContext = function(a) {
    return C.current.useContext(a);
  }, P.useDebugValue = function() {
  }, P.useDeferredValue = function(a) {
    return C.current.useDeferredValue(a);
  }, P.useEffect = function(a, d) {
    return C.current.useEffect(a, d);
  }, P.useId = function() {
    return C.current.useId();
  }, P.useImperativeHandle = function(a, d, N) {
    return C.current.useImperativeHandle(a, d, N);
  }, P.useInsertionEffect = function(a, d) {
    return C.current.useInsertionEffect(a, d);
  }, P.useLayoutEffect = function(a, d) {
    return C.current.useLayoutEffect(a, d);
  }, P.useMemo = function(a, d) {
    return C.current.useMemo(a, d);
  }, P.useReducer = function(a, d, N) {
    return C.current.useReducer(a, d, N);
  }, P.useRef = function(a) {
    return C.current.useRef(a);
  }, P.useState = function(a) {
    return C.current.useState(a);
  }, P.useSyncExternalStore = function(a, d, N) {
    return C.current.useSyncExternalStore(a, d, N);
  }, P.useTransition = function() {
    return C.current.useTransition();
  }, P.version = "18.3.1", P;
}
var or = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
or.exports;
var Ct;
function sn() {
  return Ct || (Ct = 1, function(s, n) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var f = "18.3.1", c = Symbol.for("react.element"), y = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), _ = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), te = Symbol.for("react.offscreen"), le = Symbol.iterator, ne = "@@iterator";
      function V(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = le && e[le] || e[ne];
        return typeof r == "function" ? r : null;
      }
      var be = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, de = {
        transition: null
      }, Q = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ae = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, F = {}, X = null;
      function ye(e) {
        X = e;
      }
      F.setExtraStackFrame = function(e) {
        X = e;
      }, F.getCurrentStack = null, F.getStackAddendum = function() {
        var e = "";
        X && (e += X);
        var r = F.getCurrentStack;
        return r && (e += r() || ""), e;
      };
      var Te = !1, Ke = !1, Oe = !1, pe = !1, ve = !1, oe = {
        ReactCurrentDispatcher: be,
        ReactCurrentBatchConfig: de,
        ReactCurrentOwner: ae
      };
      oe.ReactDebugCurrentFrame = F, oe.ReactCurrentActQueue = Q;
      function ge(e) {
        {
          for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++)
            o[u - 1] = arguments[u];
          we("warn", e, o);
        }
      }
      function C(e) {
        {
          for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++)
            o[u - 1] = arguments[u];
          we("error", e, o);
        }
      }
      function we(e, r, o) {
        {
          var u = oe.ReactDebugCurrentFrame, p = u.getStackAddendum();
          p !== "" && (r += "%s", o = o.concat([p]));
          var j = o.map(function(w) {
            return String(w);
          });
          j.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, j);
        }
      }
      var Pe = {};
      function xe(e, r) {
        {
          var o = e.constructor, u = o && (o.displayName || o.name) || "ReactClass", p = u + "." + r;
          if (Pe[p])
            return;
          C("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, u), Pe[p] = !0;
        }
      }
      var a = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(e) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(e, r, o) {
          xe(e, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(e, r, o, u) {
          xe(e, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(e, r, o, u) {
          xe(e, "setState");
        }
      }, d = Object.assign, N = {};
      Object.freeze(N);
      function A(e, r, o) {
        this.props = e, this.context = r, this.refs = N, this.updater = o || a;
      }
      A.prototype.isReactComponent = {}, A.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState");
      }, A.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var $ = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, q = function(e, r) {
          Object.defineProperty(A.prototype, e, {
            get: function() {
              ge("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
            }
          });
        };
        for (var B in $)
          $.hasOwnProperty(B) && q(B, $[B]);
      }
      function Y() {
      }
      Y.prototype = A.prototype;
      function U(e, r, o) {
        this.props = e, this.context = r, this.refs = N, this.updater = o || a;
      }
      var ee = U.prototype = new Y();
      ee.constructor = U, d(ee, A.prototype), ee.isPureReactComponent = !0;
      function kr() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var ur = Array.isArray;
      function Me(e) {
        return ur(e);
      }
      function Sr(e) {
        {
          var r = typeof Symbol == "function" && Symbol.toStringTag, o = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return o;
        }
      }
      function Ue(e) {
        try {
          return Ce(e), !1;
        } catch {
          return !0;
        }
      }
      function Ce(e) {
        return "" + e;
      }
      function Ne(e) {
        if (Ue(e))
          return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Sr(e)), Ce(e);
      }
      function sr(e, r, o) {
        var u = e.displayName;
        if (u)
          return u;
        var p = r.displayName || r.name || "";
        return p !== "" ? o + "(" + p + ")" : o;
      }
      function Ie(e) {
        return e.displayName || "Context";
      }
      function Re(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case v:
            return "Fragment";
          case y:
            return "Portal";
          case R:
            return "Profiler";
          case g:
            return "StrictMode";
          case x:
            return "Suspense";
          case k:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case _:
              var r = e;
              return Ie(r) + ".Consumer";
            case h:
              var o = e;
              return Ie(o._context) + ".Provider";
            case E:
              return sr(e, e.render, "ForwardRef");
            case T:
              var u = e.displayName || null;
              return u !== null ? u : Re(e.type) || "Memo";
            case M: {
              var p = e, j = p._payload, w = p._init;
              try {
                return Re(w(j));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Ae = Object.prototype.hasOwnProperty, We = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, lr, cr, Ve;
      Ve = {};
      function Ge(e) {
        if (Ae.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function Je(e) {
        if (Ae.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function Tr(e, r) {
        var o = function() {
          lr || (lr = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
      function fr(e, r) {
        var o = function() {
          cr || (cr = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
      function dr(e) {
        if (typeof e.ref == "string" && ae.current && e.__self && ae.current.stateNode !== e.__self) {
          var r = Re(ae.current.type);
          Ve[r] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), Ve[r] = !0);
        }
      }
      var Qe = function(e, r, o, u, p, j, w) {
        var S = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: c,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: o,
          props: w,
          // Record the component responsible for creating this element.
          _owner: j
        };
        return S._store = {}, Object.defineProperty(S._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(S, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: u
        }), Object.defineProperty(S, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: p
        }), Object.freeze && (Object.freeze(S.props), Object.freeze(S)), S;
      };
      function Or(e, r, o) {
        var u, p = {}, j = null, w = null, S = null, D = null;
        if (r != null) {
          Ge(r) && (w = r.ref, dr(r)), Je(r) && (Ne(r.key), j = "" + r.key), S = r.__self === void 0 ? null : r.__self, D = r.__source === void 0 ? null : r.__source;
          for (u in r)
            Ae.call(r, u) && !We.hasOwnProperty(u) && (p[u] = r[u]);
        }
        var z = arguments.length - 2;
        if (z === 1)
          p.children = o;
        else if (z > 1) {
          for (var H = Array(z), K = 0; K < z; K++)
            H[K] = arguments[K + 2];
          Object.freeze && Object.freeze(H), p.children = H;
        }
        if (e && e.defaultProps) {
          var J = e.defaultProps;
          for (u in J)
            p[u] === void 0 && (p[u] = J[u]);
        }
        if (j || w) {
          var re = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          j && Tr(p, re), w && fr(p, re);
        }
        return Qe(e, j, w, S, D, ae.current, p);
      }
      function Pr(e, r) {
        var o = Qe(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return o;
      }
      function Nr(e, r, o) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var u, p = d({}, e.props), j = e.key, w = e.ref, S = e._self, D = e._source, z = e._owner;
        if (r != null) {
          Ge(r) && (w = r.ref, z = ae.current), Je(r) && (Ne(r.key), j = "" + r.key);
          var H;
          e.type && e.type.defaultProps && (H = e.type.defaultProps);
          for (u in r)
            Ae.call(r, u) && !We.hasOwnProperty(u) && (r[u] === void 0 && H !== void 0 ? p[u] = H[u] : p[u] = r[u]);
        }
        var K = arguments.length - 2;
        if (K === 1)
          p.children = o;
        else if (K > 1) {
          for (var J = Array(K), re = 0; re < K; re++)
            J[re] = arguments[re + 2];
          p.children = J;
        }
        return Qe(e.type, j, w, S, D, z, p);
      }
      function je(e) {
        return typeof e == "object" && e !== null && e.$$typeof === c;
      }
      var pr = ".", Ir = ":";
      function Xe(e) {
        var r = /[=:]/g, o = {
          "=": "=0",
          ":": "=2"
        }, u = e.replace(r, function(p) {
          return o[p];
        });
        return "$" + u;
      }
      var Ze = !1, ke = /\/+/g;
      function Ye(e) {
        return e.replace(ke, "$&/");
      }
      function De(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (Ne(e.key), Xe("" + e.key)) : r.toString(36);
      }
      function Fe(e, r, o, u, p) {
        var j = typeof e;
        (j === "undefined" || j === "boolean") && (e = null);
        var w = !1;
        if (e === null)
          w = !0;
        else
          switch (j) {
            case "string":
            case "number":
              w = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case c:
                case y:
                  w = !0;
              }
          }
        if (w) {
          var S = e, D = p(S), z = u === "" ? pr + De(S, 0) : u;
          if (Me(D)) {
            var H = "";
            z != null && (H = Ye(z) + "/"), Fe(D, r, H, "", function(rn) {
              return rn;
            });
          } else D != null && (je(D) && (D.key && (!S || S.key !== D.key) && Ne(D.key), D = Pr(
            D,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            o + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (D.key && (!S || S.key !== D.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Ye("" + D.key) + "/"
            ) : "") + z
          )), r.push(D));
          return 1;
        }
        var K, J, re = 0, ue = u === "" ? pr : u + Ir;
        if (Me(e))
          for (var xr = 0; xr < e.length; xr++)
            K = e[xr], J = ue + De(K, xr), re += Fe(K, r, o, J, p);
        else {
          var Gr = V(e);
          if (typeof Gr == "function") {
            var wt = e;
            Gr === wt.entries && (Ze || ge("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ze = !0);
            for (var Zt = Gr.call(wt), Rt, en = 0; !(Rt = Zt.next()).done; )
              K = Rt.value, J = ue + De(K, en++), re += Fe(K, r, o, J, p);
          } else if (j === "object") {
            var xt = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (xt === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : xt) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return re;
      }
      function Be(e, r, o) {
        if (e == null)
          return e;
        var u = [], p = 0;
        return Fe(e, u, "", "", function(j) {
          return r.call(o, j, p++);
        }), u;
      }
      function vr(e) {
        var r = 0;
        return Be(e, function() {
          r++;
        }), r;
      }
      function Ar(e, r, o) {
        Be(e, function() {
          r.apply(this, arguments);
        }, o);
      }
      function hr(e) {
        return Be(e, function(r) {
          return r;
        }) || [];
      }
      function mr(e) {
        if (!je(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function Dr(e) {
        var r = {
          $$typeof: _,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: e,
          _currentValue2: e,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        r.Provider = {
          $$typeof: h,
          _context: r
        };
        var o = !1, u = !1, p = !1;
        {
          var j = {
            $$typeof: _,
            _context: r
          };
          Object.defineProperties(j, {
            Provider: {
              get: function() {
                return u || (u = !0, C("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider;
              },
              set: function(w) {
                r.Provider = w;
              }
            },
            _currentValue: {
              get: function() {
                return r._currentValue;
              },
              set: function(w) {
                r._currentValue = w;
              }
            },
            _currentValue2: {
              get: function() {
                return r._currentValue2;
              },
              set: function(w) {
                r._currentValue2 = w;
              }
            },
            _threadCount: {
              get: function() {
                return r._threadCount;
              },
              set: function(w) {
                r._threadCount = w;
              }
            },
            Consumer: {
              get: function() {
                return o || (o = !0, C("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
              }
            },
            displayName: {
              get: function() {
                return r.displayName;
              },
              set: function(w) {
                p || (ge("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", w), p = !0);
              }
            }
          }), r.Consumer = j;
        }
        return r._currentRenderer = null, r._currentRenderer2 = null, r;
      }
      var $e = -1, ze = 0, er = 1, Fr = 2;
      function $r(e) {
        if (e._status === $e) {
          var r = e._result, o = r();
          if (o.then(function(j) {
            if (e._status === ze || e._status === $e) {
              var w = e;
              w._status = er, w._result = j;
            }
          }, function(j) {
            if (e._status === ze || e._status === $e) {
              var w = e;
              w._status = Fr, w._result = j;
            }
          }), e._status === $e) {
            var u = e;
            u._status = ze, u._result = o;
          }
        }
        if (e._status === er) {
          var p = e._result;
          return p === void 0 && C(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, p), "default" in p || C(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, p), p.default;
        } else
          throw e._result;
      }
      function Lr(e) {
        var r = {
          // We use these fields to store the result.
          _status: $e,
          _result: e
        }, o = {
          $$typeof: M,
          _payload: r,
          _init: $r
        };
        {
          var u, p;
          Object.defineProperties(o, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return u;
              },
              set: function(j) {
                C("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), u = j, Object.defineProperty(o, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return p;
              },
              set: function(j) {
                C("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), p = j, Object.defineProperty(o, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return o;
      }
      function Mr(e) {
        e != null && e.$$typeof === T ? C("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? C("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && C("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && C("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: E,
          render: e
        };
        {
          var o;
          Object.defineProperty(r, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return o;
            },
            set: function(u) {
              o = u, !e.name && !e.displayName && (e.displayName = u);
            }
          });
        }
        return r;
      }
      var t;
      t = Symbol.for("react.module.reference");
      function l(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === v || e === R || ve || e === g || e === x || e === k || pe || e === te || Te || Ke || Oe || typeof e == "object" && e !== null && (e.$$typeof === M || e.$$typeof === T || e.$$typeof === h || e.$$typeof === _ || e.$$typeof === E || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === t || e.getModuleId !== void 0));
      }
      function m(e, r) {
        l(e) || C("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var o = {
          $$typeof: T,
          type: e,
          compare: r === void 0 ? null : r
        };
        {
          var u;
          Object.defineProperty(o, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return u;
            },
            set: function(p) {
              u = p, !e.name && !e.displayName && (e.displayName = p);
            }
          });
        }
        return o;
      }
      function b() {
        var e = be.current;
        return e === null && C(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function L(e) {
        var r = b();
        if (e._context !== void 0) {
          var o = e._context;
          o.Consumer === e ? C("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : o.Provider === e && C("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return r.useContext(e);
      }
      function W(e) {
        var r = b();
        return r.useState(e);
      }
      function I(e, r, o) {
        var u = b();
        return u.useReducer(e, r, o);
      }
      function O(e) {
        var r = b();
        return r.useRef(e);
      }
      function ie(e, r) {
        var o = b();
        return o.useEffect(e, r);
      }
      function G(e, r) {
        var o = b();
        return o.useInsertionEffect(e, r);
      }
      function Z(e, r) {
        var o = b();
        return o.useLayoutEffect(e, r);
      }
      function he(e, r) {
        var o = b();
        return o.useCallback(e, r);
      }
      function Se(e, r) {
        var o = b();
        return o.useMemo(e, r);
      }
      function Ee(e, r, o) {
        var u = b();
        return u.useImperativeHandle(e, r, o);
      }
      function ce(e, r) {
        {
          var o = b();
          return o.useDebugValue(e, r);
        }
      }
      function rr() {
        var e = b();
        return e.useTransition();
      }
      function Ur(e) {
        var r = b();
        return r.useDeferredValue(e);
      }
      function Wr() {
        var e = b();
        return e.useId();
      }
      function At(e, r, o) {
        var u = b();
        return u.useSyncExternalStore(e, r, o);
      }
      var tr = 0, et, rt, tt, nt, at, ot, it;
      function ut() {
      }
      ut.__reactDisabledLog = !0;
      function Dt() {
        {
          if (tr === 0) {
            et = console.log, rt = console.info, tt = console.warn, nt = console.error, at = console.group, ot = console.groupCollapsed, it = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: ut,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          tr++;
        }
      }
      function Ft() {
        {
          if (tr--, tr === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: d({}, e, {
                value: et
              }),
              info: d({}, e, {
                value: rt
              }),
              warn: d({}, e, {
                value: tt
              }),
              error: d({}, e, {
                value: nt
              }),
              group: d({}, e, {
                value: at
              }),
              groupCollapsed: d({}, e, {
                value: ot
              }),
              groupEnd: d({}, e, {
                value: it
              })
            });
          }
          tr < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Vr = oe.ReactCurrentDispatcher, Yr;
      function yr(e, r, o) {
        {
          if (Yr === void 0)
            try {
              throw Error();
            } catch (p) {
              var u = p.stack.trim().match(/\n( *(at )?)/);
              Yr = u && u[1] || "";
            }
          return `
` + Yr + e;
        }
      }
      var Br = !1, gr;
      {
        var $t = typeof WeakMap == "function" ? WeakMap : Map;
        gr = new $t();
      }
      function st(e, r) {
        if (!e || Br)
          return "";
        {
          var o = gr.get(e);
          if (o !== void 0)
            return o;
        }
        var u;
        Br = !0;
        var p = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var j;
        j = Vr.current, Vr.current = null, Dt();
        try {
          if (r) {
            var w = function() {
              throw Error();
            };
            if (Object.defineProperty(w.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(w, []);
              } catch (ue) {
                u = ue;
              }
              Reflect.construct(e, [], w);
            } else {
              try {
                w.call();
              } catch (ue) {
                u = ue;
              }
              e.call(w.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (ue) {
              u = ue;
            }
            e();
          }
        } catch (ue) {
          if (ue && u && typeof ue.stack == "string") {
            for (var S = ue.stack.split(`
`), D = u.stack.split(`
`), z = S.length - 1, H = D.length - 1; z >= 1 && H >= 0 && S[z] !== D[H]; )
              H--;
            for (; z >= 1 && H >= 0; z--, H--)
              if (S[z] !== D[H]) {
                if (z !== 1 || H !== 1)
                  do
                    if (z--, H--, H < 0 || S[z] !== D[H]) {
                      var K = `
` + S[z].replace(" at new ", " at ");
                      return e.displayName && K.includes("<anonymous>") && (K = K.replace("<anonymous>", e.displayName)), typeof e == "function" && gr.set(e, K), K;
                    }
                  while (z >= 1 && H >= 0);
                break;
              }
          }
        } finally {
          Br = !1, Vr.current = j, Ft(), Error.prepareStackTrace = p;
        }
        var J = e ? e.displayName || e.name : "", re = J ? yr(J) : "";
        return typeof e == "function" && gr.set(e, re), re;
      }
      function Lt(e, r, o) {
        return st(e, !1);
      }
      function Mt(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function _r(e, r, o) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return st(e, Mt(e));
        if (typeof e == "string")
          return yr(e);
        switch (e) {
          case x:
            return yr("Suspense");
          case k:
            return yr("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case E:
              return Lt(e.render);
            case T:
              return _r(e.type, r, o);
            case M: {
              var u = e, p = u._payload, j = u._init;
              try {
                return _r(j(p), r, o);
              } catch {
              }
            }
          }
        return "";
      }
      var lt = {}, ct = oe.ReactDebugCurrentFrame;
      function br(e) {
        if (e) {
          var r = e._owner, o = _r(e.type, e._source, r ? r.type : null);
          ct.setExtraStackFrame(o);
        } else
          ct.setExtraStackFrame(null);
      }
      function Ut(e, r, o, u, p) {
        {
          var j = Function.call.bind(Ae);
          for (var w in e)
            if (j(e, w)) {
              var S = void 0;
              try {
                if (typeof e[w] != "function") {
                  var D = Error((u || "React class") + ": " + o + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[w] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw D.name = "Invariant Violation", D;
                }
                S = e[w](r, w, u, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (z) {
                S = z;
              }
              S && !(S instanceof Error) && (br(p), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", o, w, typeof S), br(null)), S instanceof Error && !(S.message in lt) && (lt[S.message] = !0, br(p), C("Failed %s type: %s", o, S.message), br(null));
            }
        }
      }
      function qe(e) {
        if (e) {
          var r = e._owner, o = _r(e.type, e._source, r ? r.type : null);
          ye(o);
        } else
          ye(null);
      }
      var zr;
      zr = !1;
      function ft() {
        if (ae.current) {
          var e = Re(ae.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function Wt(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), o = e.lineNumber;
          return `

Check your code at ` + r + ":" + o + ".";
        }
        return "";
      }
      function Vt(e) {
        return e != null ? Wt(e.__source) : "";
      }
      var dt = {};
      function Yt(e) {
        var r = ft();
        if (!r) {
          var o = typeof e == "string" ? e : e.displayName || e.name;
          o && (r = `

Check the top-level render call using <` + o + ">.");
        }
        return r;
      }
      function pt(e, r) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var o = Yt(r);
          if (!dt[o]) {
            dt[o] = !0;
            var u = "";
            e && e._owner && e._owner !== ae.current && (u = " It was passed a child from " + Re(e._owner.type) + "."), qe(e), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, u), qe(null);
          }
        }
      }
      function vt(e, r) {
        if (typeof e == "object") {
          if (Me(e))
            for (var o = 0; o < e.length; o++) {
              var u = e[o];
              je(u) && pt(u, r);
            }
          else if (je(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var p = V(e);
            if (typeof p == "function" && p !== e.entries)
              for (var j = p.call(e), w; !(w = j.next()).done; )
                je(w.value) && pt(w.value, r);
          }
        }
      }
      function ht(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var o;
          if (typeof r == "function")
            o = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === E || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === T))
            o = r.propTypes;
          else
            return;
          if (o) {
            var u = Re(r);
            Ut(o, e.props, "prop", u, e);
          } else if (r.PropTypes !== void 0 && !zr) {
            zr = !0;
            var p = Re(r);
            C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", p || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Bt(e) {
        {
          for (var r = Object.keys(e.props), o = 0; o < r.length; o++) {
            var u = r[o];
            if (u !== "children" && u !== "key") {
              qe(e), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), qe(null);
              break;
            }
          }
          e.ref !== null && (qe(e), C("Invalid attribute `ref` supplied to `React.Fragment`."), qe(null));
        }
      }
      function mt(e, r, o) {
        var u = l(e);
        if (!u) {
          var p = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (p += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var j = Vt(r);
          j ? p += j : p += ft();
          var w;
          e === null ? w = "null" : Me(e) ? w = "array" : e !== void 0 && e.$$typeof === c ? (w = "<" + (Re(e.type) || "Unknown") + " />", p = " Did you accidentally export a JSX literal instead of a component?") : w = typeof e, C("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", w, p);
        }
        var S = Or.apply(this, arguments);
        if (S == null)
          return S;
        if (u)
          for (var D = 2; D < arguments.length; D++)
            vt(arguments[D], e);
        return e === v ? Bt(S) : ht(S), S;
      }
      var yt = !1;
      function zt(e) {
        var r = mt.bind(null, e);
        return r.type = e, yt || (yt = !0, ge("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", {
          enumerable: !1,
          get: function() {
            return ge("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), r;
      }
      function qt(e, r, o) {
        for (var u = Nr.apply(this, arguments), p = 2; p < arguments.length; p++)
          vt(arguments[p], u.type);
        return ht(u), u;
      }
      function Ht(e, r) {
        var o = de.transition;
        de.transition = {};
        var u = de.transition;
        de.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (de.transition = o, o === null && u._updatedFibers) {
            var p = u._updatedFibers.size;
            p > 10 && ge("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), u._updatedFibers.clear();
          }
        }
      }
      var gt = !1, wr = null;
      function Kt(e) {
        if (wr === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7), o = s && s[r];
            wr = o.call(s, "timers").setImmediate;
          } catch {
            wr = function(p) {
              gt === !1 && (gt = !0, typeof MessageChannel > "u" && C("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var j = new MessageChannel();
              j.port1.onmessage = p, j.port2.postMessage(void 0);
            };
          }
        return wr(e);
      }
      var He = 0, _t = !1;
      function bt(e) {
        {
          var r = He;
          He++, Q.current === null && (Q.current = []);
          var o = Q.isBatchingLegacy, u;
          try {
            if (Q.isBatchingLegacy = !0, u = e(), !o && Q.didScheduleLegacyUpdate) {
              var p = Q.current;
              p !== null && (Q.didScheduleLegacyUpdate = !1, Kr(p));
            }
          } catch (J) {
            throw Rr(r), J;
          } finally {
            Q.isBatchingLegacy = o;
          }
          if (u !== null && typeof u == "object" && typeof u.then == "function") {
            var j = u, w = !1, S = {
              then: function(J, re) {
                w = !0, j.then(function(ue) {
                  Rr(r), He === 0 ? qr(ue, J, re) : J(ue);
                }, function(ue) {
                  Rr(r), re(ue);
                });
              }
            };
            return !_t && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              w || (_t = !0, C("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), S;
          } else {
            var D = u;
            if (Rr(r), He === 0) {
              var z = Q.current;
              z !== null && (Kr(z), Q.current = null);
              var H = {
                then: function(J, re) {
                  Q.current === null ? (Q.current = [], qr(D, J, re)) : J(D);
                }
              };
              return H;
            } else {
              var K = {
                then: function(J, re) {
                  J(D);
                }
              };
              return K;
            }
          }
        }
      }
      function Rr(e) {
        e !== He - 1 && C("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), He = e;
      }
      function qr(e, r, o) {
        {
          var u = Q.current;
          if (u !== null)
            try {
              Kr(u), Kt(function() {
                u.length === 0 ? (Q.current = null, r(e)) : qr(e, r, o);
              });
            } catch (p) {
              o(p);
            }
          else
            r(e);
        }
      }
      var Hr = !1;
      function Kr(e) {
        if (!Hr) {
          Hr = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var o = e[r];
              do
                o = o(!0);
              while (o !== null);
            }
            e.length = 0;
          } catch (u) {
            throw e = e.slice(r + 1), u;
          } finally {
            Hr = !1;
          }
        }
      }
      var Gt = mt, Jt = qt, Qt = zt, Xt = {
        map: Be,
        forEach: Ar,
        count: vr,
        toArray: hr,
        only: mr
      };
      n.Children = Xt, n.Component = A, n.Fragment = v, n.Profiler = R, n.PureComponent = U, n.StrictMode = g, n.Suspense = x, n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = oe, n.act = bt, n.cloneElement = Jt, n.createContext = Dr, n.createElement = Gt, n.createFactory = Qt, n.createRef = kr, n.forwardRef = Mr, n.isValidElement = je, n.lazy = Lr, n.memo = m, n.startTransition = Ht, n.unstable_act = bt, n.useCallback = he, n.useContext = L, n.useDebugValue = ce, n.useDeferredValue = Ur, n.useEffect = ie, n.useId = Wr, n.useImperativeHandle = Ee, n.useInsertionEffect = G, n.useLayoutEffect = Z, n.useMemo = Se, n.useReducer = I, n.useRef = O, n.useState = W, n.useSyncExternalStore = At, n.useTransition = rr, n.version = f, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(or, or.exports)), or.exports;
}
var jt;
function Nt() {
  return jt || (jt = 1, process.env.NODE_ENV === "production" ? Cr.exports = un() : Cr.exports = sn()), Cr.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kt;
function ln() {
  if (kt) return nr;
  kt = 1;
  var s = Nt(), n = Symbol.for("react.element"), f = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, y = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, v = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(R, h, _) {
    var E, x = {}, k = null, T = null;
    _ !== void 0 && (k = "" + _), h.key !== void 0 && (k = "" + h.key), h.ref !== void 0 && (T = h.ref);
    for (E in h) c.call(h, E) && !v.hasOwnProperty(E) && (x[E] = h[E]);
    if (R && R.defaultProps) for (E in h = R.defaultProps, h) x[E] === void 0 && (x[E] = h[E]);
    return { $$typeof: n, type: R, key: k, ref: T, props: x, _owner: y.current };
  }
  return nr.Fragment = f, nr.jsx = g, nr.jsxs = g, nr;
}
var ar = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var St;
function cn() {
  return St || (St = 1, process.env.NODE_ENV !== "production" && function() {
    var s = Nt(), n = Symbol.for("react.element"), f = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), R = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), M = Symbol.iterator, te = "@@iterator";
    function le(t) {
      if (t === null || typeof t != "object")
        return null;
      var l = M && t[M] || t[te];
      return typeof l == "function" ? l : null;
    }
    var ne = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function V(t) {
      {
        for (var l = arguments.length, m = new Array(l > 1 ? l - 1 : 0), b = 1; b < l; b++)
          m[b - 1] = arguments[b];
        be("error", t, m);
      }
    }
    function be(t, l, m) {
      {
        var b = ne.ReactDebugCurrentFrame, L = b.getStackAddendum();
        L !== "" && (l += "%s", m = m.concat([L]));
        var W = m.map(function(I) {
          return String(I);
        });
        W.unshift("Warning: " + l), Function.prototype.apply.call(console[t], console, W);
      }
    }
    var de = !1, Q = !1, ae = !1, F = !1, X = !1, ye;
    ye = Symbol.for("react.module.reference");
    function Te(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === c || t === v || X || t === y || t === _ || t === E || F || t === T || de || Q || ae || typeof t == "object" && t !== null && (t.$$typeof === k || t.$$typeof === x || t.$$typeof === g || t.$$typeof === R || t.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === ye || t.getModuleId !== void 0));
    }
    function Ke(t, l, m) {
      var b = t.displayName;
      if (b)
        return b;
      var L = l.displayName || l.name || "";
      return L !== "" ? m + "(" + L + ")" : m;
    }
    function Oe(t) {
      return t.displayName || "Context";
    }
    function pe(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && V("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case c:
          return "Fragment";
        case f:
          return "Portal";
        case v:
          return "Profiler";
        case y:
          return "StrictMode";
        case _:
          return "Suspense";
        case E:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case R:
            var l = t;
            return Oe(l) + ".Consumer";
          case g:
            var m = t;
            return Oe(m._context) + ".Provider";
          case h:
            return Ke(t, t.render, "ForwardRef");
          case x:
            var b = t.displayName || null;
            return b !== null ? b : pe(t.type) || "Memo";
          case k: {
            var L = t, W = L._payload, I = L._init;
            try {
              return pe(I(W));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ve = Object.assign, oe = 0, ge, C, we, Pe, xe, a, d;
    function N() {
    }
    N.__reactDisabledLog = !0;
    function A() {
      {
        if (oe === 0) {
          ge = console.log, C = console.info, we = console.warn, Pe = console.error, xe = console.group, a = console.groupCollapsed, d = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: N,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        oe++;
      }
    }
    function $() {
      {
        if (oe--, oe === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ve({}, t, {
              value: ge
            }),
            info: ve({}, t, {
              value: C
            }),
            warn: ve({}, t, {
              value: we
            }),
            error: ve({}, t, {
              value: Pe
            }),
            group: ve({}, t, {
              value: xe
            }),
            groupCollapsed: ve({}, t, {
              value: a
            }),
            groupEnd: ve({}, t, {
              value: d
            })
          });
        }
        oe < 0 && V("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = ne.ReactCurrentDispatcher, B;
    function Y(t, l, m) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (L) {
            var b = L.stack.trim().match(/\n( *(at )?)/);
            B = b && b[1] || "";
          }
        return `
` + B + t;
      }
    }
    var U = !1, ee;
    {
      var kr = typeof WeakMap == "function" ? WeakMap : Map;
      ee = new kr();
    }
    function ur(t, l) {
      if (!t || U)
        return "";
      {
        var m = ee.get(t);
        if (m !== void 0)
          return m;
      }
      var b;
      U = !0;
      var L = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var W;
      W = q.current, q.current = null, A();
      try {
        if (l) {
          var I = function() {
            throw Error();
          };
          if (Object.defineProperty(I.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(I, []);
            } catch (ce) {
              b = ce;
            }
            Reflect.construct(t, [], I);
          } else {
            try {
              I.call();
            } catch (ce) {
              b = ce;
            }
            t.call(I.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ce) {
            b = ce;
          }
          t();
        }
      } catch (ce) {
        if (ce && b && typeof ce.stack == "string") {
          for (var O = ce.stack.split(`
`), ie = b.stack.split(`
`), G = O.length - 1, Z = ie.length - 1; G >= 1 && Z >= 0 && O[G] !== ie[Z]; )
            Z--;
          for (; G >= 1 && Z >= 0; G--, Z--)
            if (O[G] !== ie[Z]) {
              if (G !== 1 || Z !== 1)
                do
                  if (G--, Z--, Z < 0 || O[G] !== ie[Z]) {
                    var he = `
` + O[G].replace(" at new ", " at ");
                    return t.displayName && he.includes("<anonymous>") && (he = he.replace("<anonymous>", t.displayName)), typeof t == "function" && ee.set(t, he), he;
                  }
                while (G >= 1 && Z >= 0);
              break;
            }
        }
      } finally {
        U = !1, q.current = W, $(), Error.prepareStackTrace = L;
      }
      var Se = t ? t.displayName || t.name : "", Ee = Se ? Y(Se) : "";
      return typeof t == "function" && ee.set(t, Ee), Ee;
    }
    function Me(t, l, m) {
      return ur(t, !1);
    }
    function Sr(t) {
      var l = t.prototype;
      return !!(l && l.isReactComponent);
    }
    function Ue(t, l, m) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return ur(t, Sr(t));
      if (typeof t == "string")
        return Y(t);
      switch (t) {
        case _:
          return Y("Suspense");
        case E:
          return Y("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case h:
            return Me(t.render);
          case x:
            return Ue(t.type, l, m);
          case k: {
            var b = t, L = b._payload, W = b._init;
            try {
              return Ue(W(L), l, m);
            } catch {
            }
          }
        }
      return "";
    }
    var Ce = Object.prototype.hasOwnProperty, Ne = {}, sr = ne.ReactDebugCurrentFrame;
    function Ie(t) {
      if (t) {
        var l = t._owner, m = Ue(t.type, t._source, l ? l.type : null);
        sr.setExtraStackFrame(m);
      } else
        sr.setExtraStackFrame(null);
    }
    function Re(t, l, m, b, L) {
      {
        var W = Function.call.bind(Ce);
        for (var I in t)
          if (W(t, I)) {
            var O = void 0;
            try {
              if (typeof t[I] != "function") {
                var ie = Error((b || "React class") + ": " + m + " type `" + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[I] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ie.name = "Invariant Violation", ie;
              }
              O = t[I](l, I, b, m, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (G) {
              O = G;
            }
            O && !(O instanceof Error) && (Ie(L), V("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", b || "React class", m, I, typeof O), Ie(null)), O instanceof Error && !(O.message in Ne) && (Ne[O.message] = !0, Ie(L), V("Failed %s type: %s", m, O.message), Ie(null));
          }
      }
    }
    var Ae = Array.isArray;
    function We(t) {
      return Ae(t);
    }
    function lr(t) {
      {
        var l = typeof Symbol == "function" && Symbol.toStringTag, m = l && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return m;
      }
    }
    function cr(t) {
      try {
        return Ve(t), !1;
      } catch {
        return !0;
      }
    }
    function Ve(t) {
      return "" + t;
    }
    function Ge(t) {
      if (cr(t))
        return V("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", lr(t)), Ve(t);
    }
    var Je = ne.ReactCurrentOwner, Tr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, fr, dr;
    function Qe(t) {
      if (Ce.call(t, "ref")) {
        var l = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (l && l.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Or(t) {
      if (Ce.call(t, "key")) {
        var l = Object.getOwnPropertyDescriptor(t, "key").get;
        if (l && l.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Pr(t, l) {
      typeof t.ref == "string" && Je.current;
    }
    function Nr(t, l) {
      {
        var m = function() {
          fr || (fr = !0, V("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        m.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: m,
          configurable: !0
        });
      }
    }
    function je(t, l) {
      {
        var m = function() {
          dr || (dr = !0, V("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        m.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: m,
          configurable: !0
        });
      }
    }
    var pr = function(t, l, m, b, L, W, I) {
      var O = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: t,
        key: l,
        ref: m,
        props: I,
        // Record the component responsible for creating this element.
        _owner: W
      };
      return O._store = {}, Object.defineProperty(O._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(O, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.defineProperty(O, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: L
      }), Object.freeze && (Object.freeze(O.props), Object.freeze(O)), O;
    };
    function Ir(t, l, m, b, L) {
      {
        var W, I = {}, O = null, ie = null;
        m !== void 0 && (Ge(m), O = "" + m), Or(l) && (Ge(l.key), O = "" + l.key), Qe(l) && (ie = l.ref, Pr(l, L));
        for (W in l)
          Ce.call(l, W) && !Tr.hasOwnProperty(W) && (I[W] = l[W]);
        if (t && t.defaultProps) {
          var G = t.defaultProps;
          for (W in G)
            I[W] === void 0 && (I[W] = G[W]);
        }
        if (O || ie) {
          var Z = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          O && Nr(I, Z), ie && je(I, Z);
        }
        return pr(t, O, ie, L, b, Je.current, I);
      }
    }
    var Xe = ne.ReactCurrentOwner, Ze = ne.ReactDebugCurrentFrame;
    function ke(t) {
      if (t) {
        var l = t._owner, m = Ue(t.type, t._source, l ? l.type : null);
        Ze.setExtraStackFrame(m);
      } else
        Ze.setExtraStackFrame(null);
    }
    var Ye;
    Ye = !1;
    function De(t) {
      return typeof t == "object" && t !== null && t.$$typeof === n;
    }
    function Fe() {
      {
        if (Xe.current) {
          var t = pe(Xe.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Be(t) {
      return "";
    }
    var vr = {};
    function Ar(t) {
      {
        var l = Fe();
        if (!l) {
          var m = typeof t == "string" ? t : t.displayName || t.name;
          m && (l = `

Check the top-level render call using <` + m + ">.");
        }
        return l;
      }
    }
    function hr(t, l) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var m = Ar(l);
        if (vr[m])
          return;
        vr[m] = !0;
        var b = "";
        t && t._owner && t._owner !== Xe.current && (b = " It was passed a child from " + pe(t._owner.type) + "."), ke(t), V('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', m, b), ke(null);
      }
    }
    function mr(t, l) {
      {
        if (typeof t != "object")
          return;
        if (We(t))
          for (var m = 0; m < t.length; m++) {
            var b = t[m];
            De(b) && hr(b, l);
          }
        else if (De(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var L = le(t);
          if (typeof L == "function" && L !== t.entries)
            for (var W = L.call(t), I; !(I = W.next()).done; )
              De(I.value) && hr(I.value, l);
        }
      }
    }
    function Dr(t) {
      {
        var l = t.type;
        if (l == null || typeof l == "string")
          return;
        var m;
        if (typeof l == "function")
          m = l.propTypes;
        else if (typeof l == "object" && (l.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        l.$$typeof === x))
          m = l.propTypes;
        else
          return;
        if (m) {
          var b = pe(l);
          Re(m, t.props, "prop", b, t);
        } else if (l.PropTypes !== void 0 && !Ye) {
          Ye = !0;
          var L = pe(l);
          V("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", L || "Unknown");
        }
        typeof l.getDefaultProps == "function" && !l.getDefaultProps.isReactClassApproved && V("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function $e(t) {
      {
        for (var l = Object.keys(t.props), m = 0; m < l.length; m++) {
          var b = l[m];
          if (b !== "children" && b !== "key") {
            ke(t), V("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", b), ke(null);
            break;
          }
        }
        t.ref !== null && (ke(t), V("Invalid attribute `ref` supplied to `React.Fragment`."), ke(null));
      }
    }
    var ze = {};
    function er(t, l, m, b, L, W) {
      {
        var I = Te(t);
        if (!I) {
          var O = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (O += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ie = Be();
          ie ? O += ie : O += Fe();
          var G;
          t === null ? G = "null" : We(t) ? G = "array" : t !== void 0 && t.$$typeof === n ? (G = "<" + (pe(t.type) || "Unknown") + " />", O = " Did you accidentally export a JSX literal instead of a component?") : G = typeof t, V("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", G, O);
        }
        var Z = Ir(t, l, m, L, W);
        if (Z == null)
          return Z;
        if (I) {
          var he = l.children;
          if (he !== void 0)
            if (b)
              if (We(he)) {
                for (var Se = 0; Se < he.length; Se++)
                  mr(he[Se], t);
                Object.freeze && Object.freeze(he);
              } else
                V("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              mr(he, t);
        }
        if (Ce.call(l, "key")) {
          var Ee = pe(t), ce = Object.keys(l).filter(function(Wr) {
            return Wr !== "key";
          }), rr = ce.length > 0 ? "{key: someKey, " + ce.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ze[Ee + rr]) {
            var Ur = ce.length > 0 ? "{" + ce.join(": ..., ") + ": ...}" : "{}";
            V(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, rr, Ee, Ur, Ee), ze[Ee + rr] = !0;
          }
        }
        return t === c ? $e(Z) : Dr(Z), Z;
      }
    }
    function Fr(t, l, m) {
      return er(t, l, m, !0);
    }
    function $r(t, l, m) {
      return er(t, l, m, !1);
    }
    var Lr = $r, Mr = Fr;
    ar.Fragment = c, ar.jsx = Lr, ar.jsxs = Mr;
  }()), ar;
}
var Tt;
function fn() {
  return Tt || (Tt = 1, process.env.NODE_ENV === "production" ? Er.exports = ln() : Er.exports = cn()), Er.exports;
}
var i = fn();
const dn = ["text", "link", "primary", "icon"], pn = ["link"];
function _e(s) {
  const {
    type: n = "default",
    onClick: f = () => null,
    round: c = !1,
    danger: y = !1,
    small: v = !1,
    children: g = null,
    href: R = null,
    icon: h = null,
    className: _ = "",
    disabled: E = !1
  } = s, [x, k] = fe([]);
  let T = "wau-button";
  dn.includes(n) && (T += ` wau-button--${n}`), g == null && h !== null && (T += " wau-button--icon"), c && (T += " wau-button--round"), y && (T += " wau-button--danger"), v && (T += " wau-button--small"), E && (T += " wau-button--disabled");
  let te = {
    onClick: () => {
      k([/* @__PURE__ */ i.jsx(wn, { danger: y }), ...x]), f();
    },
    className: _ !== "" ? `${T} ${_}` : T
  };
  Le(() => {
    if (x.length === 0)
      return;
    const ne = setTimeout(() => {
      let V = [...x];
      V.pop(), k(V);
    }, 1e3);
    return () => clearTimeout(ne);
  }, [x]);
  const le = /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    !pn.includes(n) && x.map((ne) => ne),
    h !== null && /* @__PURE__ */ i.jsx("div", { className: "wau-button__icon", children: h }),
    g
  ] });
  return R !== null ? (te.href = R, /* @__PURE__ */ i.jsx("a", { ...te, children: le })) : /* @__PURE__ */ i.jsx("button", { type: "button", disabled: E, ...te, children: le });
}
function Sn(s) {
  const { checked: n, onChange: f, label: c } = s;
  let y = "wau-checkbox";
  return n && (y += " wau-checkbox--checked"), /* @__PURE__ */ i.jsxs("label", { className: y, children: [
    /* @__PURE__ */ i.jsxs("div", { className: "wau-checkbox__box", children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "checkbox",
          checked: n ? "checked" : "",
          onChange: () => f(!n),
          className: "wau-checkbox__input"
        }
      ),
      /* @__PURE__ */ i.jsx("i", { className: "wau-checkbox__icon fa fa-check" })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "wau-checkbox__label", children: c })
  ] });
}
function Tn(s) {
  const { open: n = !1, children: f } = s, c = me(null), [y, v] = fe(0), [g, R] = fe(!1);
  Le(() => {
    if (!g || !n || c.current === null)
      return;
    const _ = new ResizeObserver(() => {
      c.current != null && v(c.current.clientHeight);
    });
    return _.observe(c.current), () => {
      c.current !== null && _.disconnect(c.current);
    };
  }, [g]), Le(() => {
    if (!(!n && y === 0))
      if (!n && y > 0 ? v(0) : v(c.current.clientHeight), n) {
        const _ = setTimeout(() => R(n), 400);
        return () => clearTimeout(_);
      } else
        R(!1);
  }, [n]);
  let h = "wau-collapse";
  return g && (h += " wau-collapse--open"), /* @__PURE__ */ i.jsx("div", { className: h, style: { height: y }, children: /* @__PURE__ */ i.jsx("div", { className: "wau-collapse__container", ref: c, children: f }) });
}
function On(s) {
  const {
    open: n = !1,
    attach: f = "right",
    title: c = "",
    children: y,
    options: v = null,
    onClose: g = null
  } = s, R = me(null), h = (x) => {
    g !== null && (R.current.contains(x.target) || g());
  };
  let _ = "wau-drawer";
  n && (_ += " wau-drawer--open"), ["top", "left", "bottom"].includes(f) && (_ += ` wau-drawer--${f}`);
  const E = /* @__PURE__ */ i.jsx(ir, { text: "Close Drawer", children: /* @__PURE__ */ i.jsx(
    _e,
    {
      icon: /* @__PURE__ */ i.jsx("i", { className: "fa fa-times" }),
      type: "text",
      round: !0,
      onClick: g
    }
  ) });
  return Pt(
    /* @__PURE__ */ i.jsx("div", { className: _, onClick: h, children: /* @__PURE__ */ i.jsxs("div", { className: "wau-drawer__drawer", ref: R, children: [
      /* @__PURE__ */ i.jsxs("div", { className: "wau-drawer__header", children: [
        /* @__PURE__ */ i.jsxs(Xr, { children: [
          g !== null && ["top", "right"].includes(f) && E,
          /* @__PURE__ */ i.jsx("h2", { className: "wau-drawer__title", children: c })
        ] }),
        /* @__PURE__ */ i.jsxs(Xr, { children: [
          v && /* @__PURE__ */ i.jsx("div", { className: "wau-drawer__options", children: v }),
          g !== null && ["left", "bottom"].includes(f) && E
        ] })
      ] }),
      /* @__PURE__ */ i.jsx("div", { className: "wau-drawer__content", children: y })
    ] }) }),
    document.body
  );
}
function vn(s) {
  const {
    options: n = [],
    children: f,
    onToggle: c = () => null,
    renderItem: y = null
  } = s, [v, g] = fe(!1), R = me(null), h = (_) => {
    g(_), c(_);
  };
  return Zr(R, () => h(!1)), /* @__PURE__ */ i.jsxs("div", { className: "wau-dropdown", ref: R, children: [
    f(() => h(!0)),
    v && /* @__PURE__ */ i.jsx("ul", { className: "wau-dropdown__dropdown", children: n.map((_) => /* @__PURE__ */ i.jsx(
      "li",
      {
        className: "wau-dropdown__option",
        onClick: _.onClick ? _.onClick : null,
        children: /* @__PURE__ */ i.jsxs("div", { className: "wau-dropdown__item", children: [
          !!_.prefix && /* @__PURE__ */ i.jsx("span", { className: "wau-dropdown__prefix", children: _.prefix }),
          /* @__PURE__ */ i.jsx("span", { className: "wau-dropdown__label", children: _.label }),
          !!_.suffix && /* @__PURE__ */ i.jsx("span", { className: "wau-dropdown__suffix", children: _.suffix })
        ] })
      },
      _.key
    )) })
  ] });
}
function Qr(s) {
  const {
    label: n = "",
    error: f = "",
    children: c,
    maxWidth: y = null,
    helpText: v = ""
  } = s;
  let g = {};
  return y !== null && (g.maxWidth = y), /* @__PURE__ */ i.jsxs("div", { className: "wau-field", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "wau-field__container", style: g, children: [
      n !== "" && /* @__PURE__ */ i.jsx("label", { className: "wau-field__label", children: n }),
      /* @__PURE__ */ i.jsx("div", { className: "wau-field__input", children: c }),
      f !== "" && /* @__PURE__ */ i.jsx("p", { className: "wau-field__error", children: f })
    ] }),
    v !== "" && /* @__PURE__ */ i.jsx("p", { className: "wau-field__help", children: v })
  ] });
}
const se = [];
for (let s = 0; s < 256; ++s)
  se.push((s + 256).toString(16).slice(1));
function hn(s, n = 0) {
  return (se[s[n + 0]] + se[s[n + 1]] + se[s[n + 2]] + se[s[n + 3]] + "-" + se[s[n + 4]] + se[s[n + 5]] + "-" + se[s[n + 6]] + se[s[n + 7]] + "-" + se[s[n + 8]] + se[s[n + 9]] + "-" + se[s[n + 10]] + se[s[n + 11]] + se[s[n + 12]] + se[s[n + 13]] + se[s[n + 14]] + se[s[n + 15]]).toLowerCase();
}
let Jr;
const mn = new Uint8Array(16);
function yn() {
  if (!Jr) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    Jr = crypto.getRandomValues.bind(crypto);
  }
  return Jr(mn);
}
const gn = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Ot = { randomUUID: gn };
function _n(s, n, f) {
  var y;
  if (Ot.randomUUID && !s)
    return Ot.randomUUID();
  s = s || {};
  const c = s.random ?? ((y = s.rng) == null ? void 0 : y.call(s)) ?? yn();
  if (c.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return c[6] = c[6] & 15 | 64, c[8] = c[8] & 63 | 128, hn(c);
}
const Pn = (s) => {
  const {
    label: n = "",
    value: f = "",
    onChange: c = () => null,
    placeholder: y = ""
  } = s, v = _n(), [g, R] = fe([]), [h, _] = fe(!1), E = me({}), x = me();
  return Zr(x, () => R([])), Le(() => {
    if (f === "" || !h) {
      R([]);
      return;
    }
    let k = null;
    return E.current[f] ? R(E.current[f]) : k = setTimeout(() => {
      an({ path: `/wp/v2/search?search=${f}&per_page=20` }).then(
        (T) => {
          E.current[f] = T, R(T);
        }
      );
    }, 300), () => clearTimeout(k);
  }, [f, h]), /* @__PURE__ */ i.jsx("div", { className: "wau-link", ref: x, children: /* @__PURE__ */ i.jsxs("div", { className: "wau-link__wrapper", children: [
    !!n && /* @__PURE__ */ i.jsx("label", { htmlFor: v, className: "wau-link__label", children: n }),
    /* @__PURE__ */ i.jsx("div", { className: "wau-link__input-wrapper", children: /* @__PURE__ */ i.jsx(
      "input",
      {
        type: "text",
        id: v,
        className: "wau-link__input",
        value: f,
        onChange: (k) => c(k.target.value),
        onFocus: () => _(!0),
        placeholder: y
      }
    ) }),
    g.length > 0 && /* @__PURE__ */ i.jsx("ul", { className: "wau-link__results", children: g.map((k) => /* @__PURE__ */ i.jsxs(
      "li",
      {
        className: "wau-link__result",
        onClick: () => {
          c(k.url), R([]);
        },
        children: [
          /* @__PURE__ */ i.jsx("p", { className: "wau-link__page", children: k.title }),
          /* @__PURE__ */ i.jsx("p", { className: "wau-link__link", children: k.url })
        ]
      }
    )) })
  ] }) });
};
function It(s) {
  var n, f, c = "";
  if (typeof s == "string" || typeof s == "number") c += s;
  else if (typeof s == "object") if (Array.isArray(s)) {
    var y = s.length;
    for (n = 0; n < y; n++) s[n] && (f = It(s[n])) && (c && (c += " "), c += f);
  } else for (f in s) s[f] && (c && (c += " "), c += f);
  return c;
}
function jr() {
  for (var s, n, f = 0, c = "", y = arguments.length; f < y; f++) (s = arguments[f]) && (n = It(s)) && (c && (c += " "), c += n);
  return c;
}
function Nn(s) {
  const {
    children: n,
    row: f = !1,
    col: c = null,
    vcentered: y = !1,
    vbottom: v = !1,
    hend: g = !1,
    vspace: R = 0
  } = s;
  let h = {
    className: jr("wau-grid", {
      "wau-grid__row": f,
      "wau-grid__row--vcentered": f && y,
      "wau-grid__row--vbottom": f && v,
      "wau-grid__row--hend": f && g,
      "wau-grid__col": c !== null,
      "wau-grid__col--hend": c !== null && g
    }),
    style: {}
  };
  if (R > 0) {
    const _ = `${R * 0.5}rem`;
    h.style.marginBottom = _, h.style.marginTop = _;
  }
  return c !== null && (h.style.width = c / 12 * 100 + "%"), /* @__PURE__ */ i.jsx("div", { ...h, children: n });
}
function In(s) {
  const { label: n = "", InnerBlocks: f } = s;
  return /* @__PURE__ */ i.jsx("div", { className: "wau-inner-block", children: /* @__PURE__ */ i.jsx(Qr, { label: n, children: f }) });
}
function bn(s) {
  const {
    image: n = null,
    onChange: f = () => null,
    maxWidth: c = null,
    placeholder: y = "Select Image"
  } = s, v = () => {
    const h = wp.media({
      title: "Set Image",
      mutliple: !1,
      library: {
        type: ["image"]
      }
    }).open().on("select", () => {
      const { id: _, url: E, alt: x, height: k, width: T, caption: M } = h.state().get("selection").first().toJSON();
      f({ id: _, url: E, alt: x, height: k, width: T, caption: M });
    });
  };
  let g = "wau-image";
  n !== null && n.height > n.width && (g += " wau-image--inverted");
  let R = {};
  return c !== null && (R.maxWidth = c), /* @__PURE__ */ i.jsx("div", { className: "wau-image__wrapper", style: R, children: /* @__PURE__ */ i.jsx("div", { className: g, children: n === null ? /* @__PURE__ */ i.jsx("button", { className: "wau-image__select", onClick: v, children: y }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx("img", { className: "wau-image__image", src: n.url }),
    /* @__PURE__ */ i.jsxs("div", { className: "wau-image__options", children: [
      /* @__PURE__ */ i.jsx("button", { className: "wau-image__button", onClick: v, children: "Update" }),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: "wau-image__button",
          onClick: () => f(null),
          children: "Remove"
        }
      )
    ] })
  ] }) }) });
}
function An(s) {
  const {
    type: n = "text",
    value: f = "",
    onChange: c = () => null,
    prefix: y = null,
    suffix: v = null,
    placeholder: g = "",
    min: R = null,
    max: h = null
  } = s, [_, E] = fe(!1), x = me(null);
  let k = "wau-input";
  _ && (k += " wau-input--focused");
  let T = {};
  return n === "number" && (R !== null && (T.min = parseInt(R)), h !== null && (T.max = parseInt(h))), /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: k,
      onClick: () => {
        x.current && x.current.focus();
      },
      children: [
        y && /* @__PURE__ */ i.jsx("span", { className: "wau-input__prefix", children: y }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: n,
            value: f,
            className: "wau-input__input",
            onChange: (M) => c(M.target.value),
            placeholder: g,
            ref: x,
            onFocus: () => E(!0),
            onBlur: () => E(!1),
            ...T
          }
        ),
        v && /* @__PURE__ */ i.jsx("span", { className: "wau-input__suffix", children: v })
      ]
    }
  );
}
function Dn(s) {
  const {
    open: n = !1,
    children: f,
    title: c = "",
    renderOptions: y = null,
    onClose: v = null,
    acceptAction: g = null,
    rejectAction: R = null,
    acceptDanger: h = !1,
    rejectLabel: _ = "No",
    acceptLabel: E = "Yes"
  } = s, x = me(null), k = (M) => {
    x.current !== null && (x.current.contains(M.target) || v());
  };
  let T = "wau-modal";
  return n && (T += " wau-modal--open"), Pt(
    /* @__PURE__ */ i.jsx(
      "div",
      {
        className: T,
        onClick: (M) => v !== null && k(M),
        children: /* @__PURE__ */ i.jsxs("div", { className: "wau-modal__dialog", ref: x, children: [
          /* @__PURE__ */ i.jsxs("div", { className: "wau-modal__header", children: [
            c && /* @__PURE__ */ i.jsx("h2", { className: "wau-modal__title", children: c }),
            v !== null && /* @__PURE__ */ i.jsx(
              _e,
              {
                icon: /* @__PURE__ */ i.jsx("i", { className: "fa fa-times" }),
                onClick: v,
                type: "text",
                round: !0,
                className: "wau-modal__close"
              }
            )
          ] }),
          /* @__PURE__ */ i.jsx("div", { className: "wau-modal__content", children: f }),
          /* @__PURE__ */ i.jsx("div", { className: "wau-modal__footer", children: g !== null && /* @__PURE__ */ i.jsxs(Xr, { direction: "row-reverse", children: [
            y !== null && y,
            g !== null && /* @__PURE__ */ i.jsx(
              _e,
              {
                danger: h,
                type: "primary",
                onClick: () => g(),
                children: E
              }
            ),
            R !== null && /* @__PURE__ */ i.jsx(_e, { onClick: R, children: _ })
          ] }) })
        ] })
      }
    ),
    document.body
  );
}
function wn(s) {
  const { danger: n } = s;
  let f = "wau-pulse";
  return n && (f += " wau-pulse--danger"), /* @__PURE__ */ i.jsx("div", { className: f });
}
function Rn(s, n) {
  const f = on(s, {
    fontSize: "14px",
    fontFamily: "sans-serif"
  });
  if (f < 20 || n.current === null)
    return "20px";
  const c = n.current.getBoundingClientRect().width - 42;
  return f < c ? f : c;
}
function xn(s, n, f) {
  const c = s.map((v) => ({
    ...v,
    suffix: /* @__PURE__ */ i.jsx("i", { className: "fa fa-check" })
  }));
  let y = n.filter(
    (v) => !c.some(
      (g) => g.value === v.value
    )
  );
  return [...c, ...y].map((v) => ({
    ...v,
    ...f(v)
  }));
}
function Fn(s) {
  const {
    value: n = null,
    options: f = [],
    onChange: c = () => null,
    onSearch: y = null,
    placeholder: v = "Select an option"
  } = s, [g, R] = fe(""), [h, _] = fe(""), [E, x] = fe([]), k = me(null), T = me(null), M = Array.isArray(n), te = M ? f.filter((F) => n.includes(F.value)) : f.find((F) => F.value == n);
  Zr(k, () => _(!1));
  const le = () => {
    _(!0), y !== null && T.current.focus();
  }, ne = (F) => {
    if (M) {
      const X = n.findIndex(
        (ye) => ye === F
      );
      if (X !== -1) {
        V(X);
        return;
      }
      F = [...n, F];
    }
    R(""), c(F), x(
      f.filter(
        (X) => M ? n.includes(X.value) : X.value === F
      )
    );
  }, V = (F) => {
    if (M) {
      let X = [...n];
      X.splice(F, 1), c(X);
      return;
    }
    c("");
  }, be = {
    width: Rn(g, k) + "px"
  };
  let de = "wau-select";
  h && (de += " wau-select--focused");
  const Q = async (F) => {
    R(F), await y(F);
  };
  Le(() => {
    x(
      f.filter(
        (F) => M ? n.includes(F.value) : F.value === n
      )
    );
  }, []);
  const ae = xn(
    E,
    f,
    (F) => ({
      onClick: () => ne(F.value)
    })
  );
  return /* @__PURE__ */ i.jsx("div", { ref: k, children: /* @__PURE__ */ i.jsx(vn, { options: ae, children: (F) => /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: de,
      onClick: () => {
        le(), F();
      },
      children: [
        /* @__PURE__ */ i.jsx("div", { className: "wau-select__tags", children: M && te.map((X, ye) => /* @__PURE__ */ i.jsx(
          En,
          {
            label: X.label,
            onClose: () => V(ye)
          }
        )) }),
        y === null ? /* @__PURE__ */ i.jsx(
          "div",
          {
            className: jr("wau-select__label", {
              "wau-select__label--placeholder": M || te === void 0
            }),
            children: te === void 0 || M && n.length === 0 ? v : M ? "" : te.label
          }
        ) : /* @__PURE__ */ i.jsxs("div", { className: "wau-select__wrapper", children: [
          !M && /* @__PURE__ */ i.jsx(
            "div",
            {
              className: jr("wau-select__placeholder", {
                "wau-select__placeholder--value": te !== void 0 && !h
              }),
              children: g.length > 0 ? "" : te !== void 0 ? te.label : h ? "" : v
            }
          ),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              className: "wau-select__input",
              type: "text",
              ref: T,
              style: be,
              value: g,
              onChange: (X) => Q(X.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "wau-select__indicator", children: h ? /* @__PURE__ */ i.jsx("i", { className: "fa fa-angle-up" }) : /* @__PURE__ */ i.jsx("i", { className: "fa fa-angle-down" }) })
      ]
    }
  ) }) });
}
function $n(s) {
  const {
    items: n = [],
    onRenderItem: f = () => {
    },
    onAdd: c = () => null,
    onRemove: y = () => null
  } = s, [v, g] = fe(0), R = (E) => {
    let x = E + v;
    n.length <= 1 || x > n.length - 1 ? x = 0 : x < 0 && (x = n.length - 1), g(x);
  }, h = (E) => {
    let x = [...n];
    x.splice(E, 1), y(x);
    let k = x.length - 1;
    k = k >= 0 ? k : 0, E > k && g(k);
  }, _ = () => {
    c(), g(n.length);
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "slide-options", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "slide-options__actions", children: [
      /* @__PURE__ */ i.jsx("div", { className: "slide-options__current", children: n.length > 0 && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        "Item ",
        v + 1,
        " of ",
        n.length
      ] }) }),
      n.length > 1 && /* @__PURE__ */ i.jsxs("div", { className: "slide-options__group", children: [
        /* @__PURE__ */ i.jsx(ir, { text: "Previous Item", children: /* @__PURE__ */ i.jsx(
          _e,
          {
            icon: /* @__PURE__ */ i.jsx("i", { className: "fa fa-angle-left" }),
            onClick: () => R(-1)
          }
        ) }),
        /* @__PURE__ */ i.jsx(ir, { text: "Next Item", children: /* @__PURE__ */ i.jsx(
          _e,
          {
            icon: /* @__PURE__ */ i.jsx("i", { className: "fa fa-angle-right" }),
            onClick: () => R(1)
          }
        ) })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "slide-options__group", children: [
        n.length > 0 && /* @__PURE__ */ i.jsx(ir, { text: "Remove Item", children: /* @__PURE__ */ i.jsx(
          _e,
          {
            icon: /* @__PURE__ */ i.jsx("i", { className: "fa fa-minus" }),
            onClick: () => h(v)
          }
        ) }),
        /* @__PURE__ */ i.jsx(ir, { text: "Add Item", children: /* @__PURE__ */ i.jsx(
          _e,
          {
            icon: /* @__PURE__ */ i.jsx("i", { className: "fa fa-plus" }),
            onClick: () => _()
          }
        ) })
      ] })
    ] }),
    n.length > 0 && /* @__PURE__ */ i.jsx("div", { className: "slide-options__items", children: f(n[v], v) })
  ] });
}
function Xr(s) {
  const { children: n, direction: f = "row", align: c = "center" } = s;
  let y = `flex-${c}`;
  return c === "center" && (y = "center"), /* @__PURE__ */ i.jsx(
    "div",
    {
      className: "wau-spacer",
      style: { flexDirection: f, alignItems: y },
      children: tn.toArray(n).map((v) => /* @__PURE__ */ i.jsx("div", { className: "wau-spacer__item", children: nn(v) }))
    }
  );
}
function Ln(s) {
  const { current: n, tabs: f, onChange: c = () => null } = s;
  return /* @__PURE__ */ i.jsx("div", { className: "wau-tabs", children: f.map(({ label: y, value: v }, g) => /* @__PURE__ */ i.jsx(
    "button",
    {
      className: jr("wau-tabs__tab", {
        "wau-tabs__tab--current": v === n
      }),
      onClick: () => c(v),
      children: y
    },
    g
  )) });
}
function En(s) {
  const { label: n, onClose: f = null } = s;
  return /* @__PURE__ */ i.jsxs("div", { className: "wau-tag", children: [
    n,
    /* @__PURE__ */ i.jsx(
      _e,
      {
        className: "wau-tag__close",
        icon: /* @__PURE__ */ i.jsx("i", { className: "fa fa-times" }),
        type: "text",
        round: !0,
        small: !0,
        onClick: f
      }
    )
  ] });
}
function Mn(s) {
  const {
    type: n = "text",
    value: f = "",
    onChange: c = () => null,
    placeholder: y = ""
  } = s, [v, g] = fe(!1), R = me(null);
  let h = "wau-textarea";
  return v && (h += " wau-textarea--focused"), /* @__PURE__ */ i.jsx(
    "div",
    {
      className: h,
      onClick: () => {
        R.current && R.current.focus();
      },
      children: /* @__PURE__ */ i.jsx(
        "textarea",
        {
          type: n,
          value: f,
          className: "wau-textarea__input",
          onChange: (_) => c(_.target.value),
          placeholder: y,
          ref: R,
          onFocus: () => g(!0),
          onBlur: () => g(!1)
        }
      )
    }
  );
}
const Un = (s) => {
  const {
    checked: n = !1,
    onChange: f = () => null,
    prefix: c = "",
    suffix: y = ""
  } = s;
  let v = "wau-toggle";
  return n && (v = `${v} ${v}--checked`), /* @__PURE__ */ i.jsx("div", { className: v, children: /* @__PURE__ */ i.jsxs("div", { className: "wau-toggle__container", children: [
    c !== "" && /* @__PURE__ */ i.jsx("p", { className: "wau-toggle__prefix", children: c }),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        className: "wau-toggle__button",
        onClick: () => f(!n),
        children: /* @__PURE__ */ i.jsx("span", { className: "wau-toggle__toggle" })
      }
    ),
    y !== "" && /* @__PURE__ */ i.jsx("p", { className: "wau-toggle__suffix", children: y })
  ] }) });
};
function ir(s) {
  const { children: n, text: f = "" } = s, [c, y] = fe(!1), [v, g] = fe("top"), R = me(null);
  Le(() => {
    if (R.current === null)
      return;
    const _ = R.current.getBoundingClientRect();
    let E = "top";
    _.top < 20 && (E = "bottom"), g(E);
  }, []);
  let h = "wau-tooltip";
  return c && (h += " wau-tooltip--show"), ["bottom", "left", "right"].includes(v) && (h += ` wau-tooltip--${v}`), /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: h,
      onMouseOver: () => y(!0),
      onMouseLeave: () => y(!1),
      children: [
        n,
        /* @__PURE__ */ i.jsx("div", { className: "wau-tooltip__tip", ref: R, children: f })
      ]
    }
  );
}
function Wn(s) {
  const { video: n = null, onChange: f = () => null } = s, [c, y] = fe(!1), v = me(null), g = () => {
    const h = wp.media({
      title: "Set Video",
      mutliple: !1,
      library: {
        type: ["video"]
      }
    }).open().on("select", () => {
      const { id: _, url: E } = h.state().get("selection").first().toJSON();
      f({ ...n, id: _, url: E });
    });
  }, R = (h) => {
    let _ = { id: n == null ? void 0 : n.id, url: n == null ? void 0 : n.url, image: null };
    if (h !== null) {
      const { id: E, url: x, height: k, width: T } = h;
      _.image = { id: E, url: x, height: k, width: T };
    }
    f(_);
  };
  return Le(() => {
    if (v.current === null)
      return;
    const h = () => y(!1);
    return v.current.addEventListener("blur", h), v.current.focus(), () => v.current !== null && v.current.removeEventListener("blur", h);
  }, [c]), /* @__PURE__ */ i.jsxs("div", { className: "wau-video", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "wau-video__options", children: [
      /* @__PURE__ */ i.jsx(_e, { onClick: () => g(), type: "link", children: "Set from Media" }),
      /* @__PURE__ */ i.jsx(_e, { onClick: () => y(!0), type: "link", children: "Set Custom Url" })
    ] }),
    (c || (n == null ? void 0 : n.url) && (n == null ? void 0 : n.url) !== "") && /* @__PURE__ */ i.jsx(Qr, { label: "Video Url", children: /* @__PURE__ */ i.jsx(
      "input",
      {
        value: (n == null ? void 0 : n.url) || "",
        onChange: (h) => f({
          id: null,
          image: (n == null ? void 0 : n.image) || null,
          url: h.target.value
        }),
        ref: v,
        className: "wau-video__input"
      }
    ) }),
    /* @__PURE__ */ i.jsx(Qr, { label: "Video Still", children: /* @__PURE__ */ i.jsx(
      bn,
      {
        image: (n == null ? void 0 : n.image) || null,
        onChange: R,
        placeholder: "Set Video Still"
      }
    ) })
  ] });
}
export {
  _e as Button,
  Sn as Checkbox,
  Tn as Collapse,
  On as Drawer,
  vn as Dropdown,
  Qr as Field,
  Nn as Grid,
  bn as Image,
  In as InnerBlocksField,
  An as Input,
  Pn as Link,
  Dn as Modal,
  wn as Pulse,
  Fn as Select,
  $n as SlideOptions,
  Xr as Spacer,
  Ln as Tabs,
  En as Tag,
  Mn as Textarea,
  Un as Toggle,
  ir as Tooltip,
  Wn as Video
};
