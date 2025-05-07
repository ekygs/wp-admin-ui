import { useState, useRef } from "@wordpress/element";

import { useOutsideClick } from "../../utils";

export default function Dropdown(props) {
  const {
    options = [],
    children,
    onToggle = () => null,
    renderItem = null,
  } = props;
  const [reveal, _setReveal] = useState(false);
  const dropdownRef = useRef(null);

  const setReveal = (state) => {
    _setReveal(state);
    onToggle(state);
  };

  useOutsideClick(dropdownRef, () => setReveal(false));

  return (
    <div className="wau-dropdown" ref={dropdownRef}>
      {children(() => setReveal(true))}
      {reveal && (
        <ul className="wau-dropdown__dropdown">
          {options.map((option) => (
            <li
              className="wau-dropdown__option"
              key={option.key}
              onClick={!!option.onClick ? option.onClick : null}
            >
              <div className="wau-dropdown__item">
                {!!option.prefix && (
                  <span className="wau-dropdown__prefix">{option.prefix}</span>
                )}
                <span className="wau-dropdown__label">{option.label}</span>
                {!!option.suffix && (
                  <span className="wau-dropdown__suffix">{option.suffix}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
