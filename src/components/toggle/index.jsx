export default (props) => {
  const {
    checked = false,
    onChange = () => null,
    prefix = "",
    suffix = "",
  } = props;

  let toggleFieldClass = "wau-toggle";

  if (checked) {
    toggleFieldClass = `${toggleFieldClass} ${toggleFieldClass}--checked`;
  }

  return (
    <div className={toggleFieldClass}>
      <div className="wau-toggle__container">
        {prefix !== "" && <p className="wau-toggle__prefix">{prefix}</p>}
        <button
          className="wau-toggle__button"
          onClick={() => onChange(!checked)}
        >
          <span className="wau-toggle__toggle"></span>
        </button>
        {suffix !== "" && <p className="wau-toggle__suffix">{suffix}</p>}
      </div>
    </div>
  );
};
