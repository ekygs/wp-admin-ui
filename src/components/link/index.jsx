import { v4 as uuid } from "uuid";
import { useEffect, useState, useRef } from "@wordpress/element";
import apiFetch from "@wordpress/api-fetch";

import { useOutsideClick } from "../../utils";

export default (props) => {
  const {
    label = "",
    value = "",
    onChange = () => null,
    placeholder = "",
  } = props;
  const id = uuid();
  const [results, setResults] = useState([]);
  const [focused, setFocused] = useState(false);

  const history = useRef({});
  const container = useRef();

  useOutsideClick(container, () => setResults([]));

  useEffect(() => {
    if (value === "" || !focused) {
      setResults([]);
      return;
    }

    let timer = null;

    if (history.current[value]) {
      setResults(history.current[value]);
    } else {
      timer = setTimeout(() => {
        apiFetch({ path: `/wp/v2/search?search=${value}&per_page=20` }).then(
          (results) => {
            history.current[value] = results;
            setResults(results);
          }
        );
      }, 300);
    }

    return () => clearTimeout(timer);
  }, [value, focused]);

  return (
    <div className="wau-link" ref={container}>
      <div className="wau-link__wrapper">
        {!!label && (
          <label htmlFor={id} className="wau-link__label">
            {label}
          </label>
        )}
        <div className="wau-link__input-wrapper">
          <input
            type="text"
            id={id}
            className="wau-link__input"
            value={value}
            onChange={(evt) => onChange(evt.target.value)}
            onFocus={() => setFocused(true)}
            placeholder={placeholder}
          />
        </div>
        {results.length > 0 && (
          <ul className="wau-link__results">
            {results.map((result) => (
              <li
                className="wau-link__result"
                onClick={() => {
                  onChange(result.url);
                  setResults([]);
                }}
              >
                <p className="wau-link__page">{result.title}</p>
                <p className="wau-link__link">{result.url}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
