import { Children, cloneElement } from "@wordpress/element";

export default function Spacer(props) {
  const { children, direction = "row", align = "center" } = props;

  let flexAlign = `flex-${align}`;

  if (align === "center") {
    flexAlign = "center";
  }

  return (
    <div
      className="wau-spacer"
      style={{ flexDirection: direction, alignItems: flexAlign }}
    >
      {Children.toArray(children).map((child) => (
        <div className="wau-spacer__item">{cloneElement(child)}</div>
      ))}
    </div>
  );
}
