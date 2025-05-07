import { useEffect as s, useState as a } from "@wordpress/element";
function m(e, n) {
  const t = document.createElement("span");
  t.style.bottom = "-1000px", t.style.left = "-1000px", t.style.position = "fixed", t.style.whiteSpace = "nowrap", t.style.width = "max-content", Object.keys(n).forEach((i) => {
    t.style[i] = n[i];
  }), t.innerText = e, document.body.appendChild(t);
  const r = t.getBoundingClientRect().width;
  return t.remove(), r;
}
function f(e, n) {
  s(() => {
    if (e.current === null)
      return;
    const t = (r) => {
      e.current !== null && (e.current.contains(r.target) || n());
    };
    return document.addEventListener("click", t), () => document.removeEventListener("click", t);
  }, []);
}
function h(e, n, t = 300) {
  s(() => {
    if (typeof e != "function")
      return;
    const r = setTimeout(() => e(n), t);
    return () => clearTimeout(r);
  }, n);
}
function p(e, n) {
  const [t, r] = a(n), [i, l] = a(!1);
  return s(() => {
    if (i)
      return;
    const o = new URL(window.location), c = new URLSearchParams(o.search).get(e);
    c !== null && r(c), l(!0);
  }, []), s(() => {
    const o = new URL(window.location), u = new URLSearchParams(o.search);
    u.set(e, t);
    const c = `${o.origin}${o.pathname}?${u.toString()}`;
    window.history.pushState(
      {
        path: c
      },
      "",
      c
    );
  }, [t]), [t, r, i];
}
export {
  m as getTextWidth,
  h as useDebounce,
  f as useOutsideClick,
  p as useSearchQueryState
};
