import clsx from "clsx";

export default function (props) {
  const { current, tabs, onChange = () => null } = props;

  return (
    <div className="wau-tabs">
      {tabs.map(({ label, value }, index) => (
        <button
          className={clsx("wau-tabs__tab", {
            "wau-tabs__tab--current": value === current,
          })}
          key={index}
          onClick={() => onChange(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
