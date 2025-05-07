import { useRef, useState, useEffect } from "@wordpress/element";

export default function Tooltip(props) {
  const { children, text = "" } = props;
  const [showTooltip, setShowTooltip] = useState(false);
  const [position, setPosition] = useState("top");
  const tooltipRef = useRef(null);

  useEffect(() => {
    if (tooltipRef.current === null) {
      return;
    }

    const rect = tooltipRef.current.getBoundingClientRect();

    let position = "top";

    if (rect.top < 20) {
      position = "bottom";
    }

    setPosition(position);
  }, []);

  let tooltipClass = "wau-tooltip";

  if (showTooltip) {
    tooltipClass += " wau-tooltip--show";
  }

  if (["bottom", "left", "right"].includes(position)) {
    tooltipClass += ` wau-tooltip--${position}`;
  }

  return (
    <div
      className={tooltipClass}
      onMouseOver={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      <div className="wau-tooltip__tip" ref={tooltipRef}>
        {text}
      </div>
    </div>
  );
}
