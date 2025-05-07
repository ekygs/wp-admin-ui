import { useState, useEffect } from "@wordpress/element";
import { Pulse } from "../";

const linkTypes = ["text", "link", "primary", "icon"];
const linkTypesWithoutPulse = ["link"];

export default function Button(props) {
  const {
    type = "default",
    onClick = () => null,
    round = false,
    danger = false,
    small = false,
    children = null,
    href = null,
    icon = null,
    className = "",
    disabled = false,
  } = props;

  const [pulseQueue, setPulseQueue] = useState([]);

  let buttonClass = "wau-button";

  if (linkTypes.includes(type)) {
    buttonClass += ` wau-button--${type}`;
  }

  if (children == null && icon !== null) {
    buttonClass += " wau-button--icon";
  }

  if (round) {
    buttonClass += " wau-button--round";
  }

  if (danger) {
    buttonClass += " wau-button--danger";
  }

  if (small) {
    buttonClass += " wau-button--small";
  }

  if (disabled) {
    buttonClass += " wau-button--disabled";
  }

  const handleClick = () => {
    setPulseQueue([<Pulse danger={danger} />, ...pulseQueue]);
    onClick();
  };

  let buttonAttributes = {
    onClick: handleClick,
    className: className !== "" ? `${buttonClass} ${className}` : buttonClass,
  };

  useEffect(() => {
    if (pulseQueue.length === 0) {
      return;
    }

    const timer = setTimeout(() => {
      let tempPulseQueue = [...pulseQueue];
      tempPulseQueue.pop();
      setPulseQueue(tempPulseQueue);
    }, 1000);

    return () => clearTimeout(timer);
  }, [pulseQueue]);

  const buttonChildren = (
    <>
      {!linkTypesWithoutPulse.includes(type) &&
        pulseQueue.map((pulse) => pulse)}
      {icon !== null && <div className="wau-button__icon">{icon}</div>}
      {children}
    </>
  );

  if (href !== null) {
    buttonAttributes.href = href;
    return <a {...buttonAttributes}>{buttonChildren}</a>;
  }

  return (
    <button type="button" disabled={disabled} {...buttonAttributes}>
      {buttonChildren}
    </button>
  );
}
