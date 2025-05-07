import { createPortal, useRef } from "@wordpress/element";

import { Button, Spacer } from "../";

export default function Modal(props) {
  const {
    open = false,
    children,
    title = "",
    renderOptions = null,
    onClose = null,
    acceptAction = null,
    rejectAction = null,
    acceptDanger = false,
    rejectLabel = "No",
    acceptLabel = "Yes",
  } = props;

  const dialogRef = useRef(null);

  const handleOutsideClick = (evt) => {
    if (dialogRef.current === null) {
      return;
    }

    if (!dialogRef.current.contains(evt.target)) {
      onClose();
    }
  };

  let modalClass = "wau-modal";

  if (open) {
    modalClass += " wau-modal--open";
  }

  return createPortal(
    <div
      className={modalClass}
      onClick={(evt) => onClose !== null && handleOutsideClick(evt)}
    >
      <div className="wau-modal__dialog" ref={dialogRef}>
        <div className="wau-modal__header">
          {title && <h2 className="wau-modal__title">{title}</h2>}
          {onClose !== null && (
            <Button
              icon={<i className="fa fa-times"></i>}
              onClick={onClose}
              type="text"
              round
              className="wau-modal__close"
            />
          )}
        </div>
        <div className="wau-modal__content">{children}</div>
        <div className="wau-modal__footer">
          {acceptAction !== null && (
            <Spacer direction="row-reverse">
              {renderOptions !== null && renderOptions}
              {acceptAction !== null && (
                <Button
                  danger={acceptDanger}
                  type="primary"
                  onClick={() => acceptAction()}
                >
                  {acceptLabel}
                </Button>
              )}
              {rejectAction !== null && (
                <Button onClick={rejectAction}>{rejectLabel}</Button>
              )}
            </Spacer>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
