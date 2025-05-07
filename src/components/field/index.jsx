export default function Field(props) {
  const {
    label = "",
    error = "",
    children,
    maxWidth = null,
    helpText = "",
  } = props;

  let style = {};
  if (maxWidth !== null) {
    style.maxWidth = maxWidth;
  }

  return (
    <div className="wau-field">
      <div className="wau-field__container" style={style}>
        {label !== "" && <label className="wau-field__label">{label}</label>}
        <div className="wau-field__input">{children}</div>
        {error !== "" && <p className="wau-field__error">{error}</p>}
      </div>
      {helpText !== "" && <p className="wau-field__help">{helpText}</p>}
    </div>
  );
}
