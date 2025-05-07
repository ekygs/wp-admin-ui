import { createPortal, useRef } from "@wordpress/element";

import { Button, Tooltip, Spacer } from "../";

export default function Drawer(props) {
  const {
    open = false,
    attach = "right",
    title = "",
    children,
    options = null,
    onClose = null,
  } = props;
  const drawerRef = useRef(null);

  const handleOutsideClick = (evt) => {
    if (onClose === null) {
      return;
    }

    if (!drawerRef.current.contains(evt.target)) {
      onClose();
    }
  };

  let drawerClass = "wau-drawer";

  if (open) {
    drawerClass += " wau-drawer--open";
  }

  if (["top", "left", "bottom"].includes(attach)) {
    drawerClass += ` wau-drawer--${attach}`;
  }

  const closeButton = (
    <Tooltip text="Close Drawer">
      <Button
        icon={<i className="fa fa-times"></i>}
        type="text"
        round
        onClick={onClose}
      />
    </Tooltip>
  );

  return createPortal(
    <div className={drawerClass} onClick={handleOutsideClick}>
      <div className="wau-drawer__drawer" ref={drawerRef}>
        <div className="wau-drawer__header">
          <Spacer>
            {onClose !== null &&
              ["top", "right"].includes(attach) &&
              closeButton}
            <h2 className="wau-drawer__title">{title}</h2>
          </Spacer>
          <Spacer>
            {options && <div className="wau-drawer__options">{options}</div>}
            {onClose !== null &&
              ["left", "bottom"].includes(attach) &&
              closeButton}
          </Spacer>
        </div>
        <div className="wau-drawer__content">{children}</div>
      </div>
    </div>,
    document.body
  );
}
