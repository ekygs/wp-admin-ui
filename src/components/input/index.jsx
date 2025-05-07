import { useRef, useState } from "@wordpress/element";

export default function Input(props) {
  const {
    type = "text",
    value = "",
    onChange = () => null,
    prefix = null,
    suffix = null,
    placeholder = "",
    min = null,
    max = null,
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  let inputClass = "wau-input";

  if (isFocused) {
    inputClass += " wau-input--focused";
  }

  let inputAttributes = {};

  if (type === "number") {
    if (min !== null) {
      inputAttributes.min = parseInt(min);
    }

    if (max !== null) {
      inputAttributes.max = parseInt(max);
    }
  }

  return (
    <div
      className={inputClass}
      onClick={() => {
        inputRef.current && inputRef.current.focus();
      }}
    >
      {prefix && <span className="wau-input__prefix">{prefix}</span>}
      <input
        type={type}
        value={value}
        className="wau-input__input"
        onChange={(evt) => onChange(evt.target.value)}
        placeholder={placeholder}
        ref={inputRef}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...inputAttributes}
      />
      {suffix && <span className="wau-input__suffix">{suffix}</span>}
    </div>
  );
}
