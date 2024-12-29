import { breakpoints } from "@/lib/data";

type GridValue =
  | number
  | { xs?: number; sm?: number; smd?: number; md?: number; lg?: number };

const handleColumns = (columns: GridValue): React.CSSProperties => {
  const style: React.CSSProperties & Record<string, string | number> = {};

  if (typeof columns === "number") {
    style["--grid-rows"] = columns;
  } else {
    breakpoints.forEach((breakpoint) => {
      if (columns[breakpoint] !== undefined) {
        style[`--${breakpoint}-grid-rows`] = columns[breakpoint]!;
      }
    });
  }

  return style;
};

const handleRows = (rows: GridValue): React.CSSProperties => {
  const style: React.CSSProperties & Record<string, string | number> = {};

  if (typeof rows === "number") {
    style["--grid-rows"] = rows;
  } else {
    breakpoints.forEach((breakpoint) => {
      if (rows[breakpoint] !== undefined) {
        style[`--${breakpoint}-grid-rows`] = rows[breakpoint]!;
      }
    });
  }

  return style;
};

export { handleColumns, handleRows };
