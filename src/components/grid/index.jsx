import clsx from "clsx";

export default function Grid(props) {
  const {
    children,
    row = false,
    col = null,
    vcentered = false,
    vbottom = false,
    hend = false,
    vspace = 0,
  } = props;

  let gridAttributes = {
    className: clsx("wau-grid", {
      "wau-grid__row": row,
      "wau-grid__row--vcentered": row && vcentered,
      "wau-grid__row--vbottom": row && vbottom,
      "wau-grid__row--hend": row && hend,
      "wau-grid__col": col !== null,
      "wau-grid__col--hend": col !== null && hend,
    }),
    style: {},
  };

  if (vspace > 0) {
    const spacing = `${vspace * 0.5}rem`;
    gridAttributes.style.marginBottom = spacing;
    gridAttributes.style.marginTop = spacing;
  }

  if (col !== null) {
    gridAttributes.style.width = (col / 12) * 100 + "%";
  }

  return <div {...gridAttributes}>{children}</div>;
}
