export default function Checkbox(props) {
  const { checked, onChange, label } = props;

  let checkboxClass = "wau-checkbox";

  if (checked) {
    checkboxClass += " wau-checkbox--checked";
  }

  return (
    <label className={checkboxClass}>
      <div className="wau-checkbox__box">
        <input
          type="checkbox"
          checked={checked ? "checked" : ""}
          onChange={() => onChange(!checked)}
          className="wau-checkbox__input"
        />
        <i className="wau-checkbox__icon fa fa-check"></i>
      </div>
      <div className="wau-checkbox__label">{label}</div>
    </label>
  );
}
