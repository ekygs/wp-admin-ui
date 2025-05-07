import { useEffect, useRef, useState } from "@wordpress/element";

export default function Collapse(props) {
  const { open = false, children } = props;
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    if (!isOpened || !open || containerRef.current === null) {
      return;
    }

    const observer = new ResizeObserver(() => {
      if (containerRef.current != null) {
        setHeight(containerRef.current.clientHeight);
      }
    });

    observer.observe(containerRef.current);

    return () => {
      if (containerRef.current !== null) {
        observer.disconnect(containerRef.current);
      }
    };
  }, [isOpened]);

  useEffect(() => {
    if (!open && height === 0) {
      return;
    }

    if (!open && height > 0) {
      setHeight(0);
    } else {
      setHeight(containerRef.current.clientHeight);
    }

    if (open) {
      const timer = setTimeout(() => setIsOpened(open), 400);

      return () => clearTimeout(timer);
    } else {
      setIsOpened(false);
    }
  }, [open]);

  let collapseClass = "wau-collapse";

  if (isOpened) {
    collapseClass += " wau-collapse--open";
  }

  return (
    <div className={collapseClass} style={{ height }}>
      <div className="wau-collapse__container" ref={containerRef}>
        {children}
      </div>
    </div>
  );
}
