import { useEffect, useState } from "@wordpress/element";

export function getTextWidth(text, style) {
  const div = document.createElement("span");

  div.style.bottom = "-1000px";
  div.style.left = "-1000px";
  div.style.position = "fixed";
  div.style.whiteSpace = "nowrap";
  div.style.width = "max-content";

  Object.keys(style).forEach((key) => {
    div.style[key] = style[key];
  });

  div.innerText = text;
  document.body.appendChild(div);
  const width = div.getBoundingClientRect().width;
  div.remove();

  return width;
}

export function useOutsideClick(containerRef, callback) {
  useEffect(() => {
    if (containerRef.current === null) {
      return;
    }

    const handleOutsideClick = (evt) => {
      if (containerRef.current === null) {
        return;
      }

      if (!containerRef.current.contains(evt.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);
}

export function useDebounce(callback, data, delay = 300) {
  useEffect(() => {
    if (typeof callback !== "function") {
      return;
    }

    const timer = setTimeout(() => callback(data), delay);
    return () => clearTimeout(timer);
  }, data);
}

export function useSearchQueryState(searchQuery, initialState) {
  const [query, setQuery] = useState(initialState);
  const [fetchInitial, setFetchInitial] = useState(false);

  useEffect(() => {
    if (fetchInitial) {
      return;
    }

    const url = new URL(window.location);
    const params = new URLSearchParams(url.search);

    const currentQuery = params.get(searchQuery);

    if (currentQuery !== null) {
      setQuery(currentQuery);
    }

    setFetchInitial(true);
  }, []);

  useEffect(() => {
    const url = new URL(window.location);
    const params = new URLSearchParams(url.search);

    params.set(searchQuery, query);

    const newUrl = `${url.origin}${url.pathname}?${params.toString()}`;

    window.history.pushState(
      {
        path: newUrl,
      },
      "",
      newUrl
    );
  }, [query]);

  return [query, setQuery, fetchInitial];
}
