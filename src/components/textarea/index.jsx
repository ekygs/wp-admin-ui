import { useRef, useState } from "@wordpress/element";

export default function Input(props) {
  const {
    type = "text",
    value = "",
    onChange = () => null,
    placeholder = "",
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  let inputClass = "wau-textarea";

  if (isFocused) {
    inputClass += " wau-textarea--focused";
  }

  return (
    <div
      className={inputClass}
      onClick={() => {
        inputRef.current && inputRef.current.focus();
      }}
    >
      <textarea
        type={type}
        value={value}
        className="wau-textarea__input"
        onChange={(evt) => onChange(evt.target.value)}
        placeholder={placeholder}
        ref={inputRef}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
}
