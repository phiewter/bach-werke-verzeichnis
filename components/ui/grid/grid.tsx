import * as React from "react";

import { cn } from "@/lib/utils";

import styles from "@/components/ui/grid/grid.module.css";

import { breakpoints } from "@/lib/data";

import { handleColumns } from "@/actions/GridActions";

// type HeightOption = "preserve-aspect-ratio";

interface GridProps {
  columns:
    | number
    | { xs?: number; sm?: number; smd?: number; md?: number; lg?: number };
  rows:
    | number
    | { xs?: number; sm?: number; smd?: number; md?: number; lg?: number };
  // height?: HeightOption;
  children: React.ReactElement<GridCellProps>[];
}

// const validHeight: HeightOption = "preserve-aspect-ratio";

const Grid: React.FC<GridProps> & {
  SystemContentWrapper: React.FC<GridSystemContentWrapperProps>;
  System: React.FC<GridSystemProps>;
  Cell: React.FC<GridCellProps>;
  Cross: React.FC<GridCrossProps>;
  Crossline: React.FC<GridCrosslineProps>;
  Guides: React.FC<GridGuidesProps>;
  Guide: React.FC<GridGuideProps>;
  Divider: React.FC<GridDividerProps>;
} = ({ columns, rows, children }: GridProps) => {
  // const isValidHeight = height && validHeight.includes(height as HeightOption);
  // const setHeight = isValidHeight
  //   ? "calc(var(--width) / var(--grid-columns) * var(--grid-rows))"
  //   : undefined;

  const handleRows = (rows: GridProps["rows"]): React.CSSProperties => {
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

  const handleColumns = (
    columns: GridProps["columns"]
  ): React.CSSProperties => {
    const style: React.CSSProperties & Record<string, string | number> = {};

    if (typeof columns === "number") {
      style["--grid-columns"] = columns;
    } else {
      breakpoints.forEach((breakpoint) => {
        if (columns[breakpoint] !== undefined) {
          style[`--${breakpoint}-grid-columns`] = columns[breakpoint]!;
        }
      });
    }
    return style;
  };

  const combinedStyle = {
    ...handleColumns(columns),
    ...handleRows(rows),
  };

  return (
    <div className={cn(`${styles.grid}`)} style={combinedStyle} data-grid>
      {children}
      <Grid.Guides>
        {Array.from({ length: columns * rows }, (_, index) => {
          const x = (index % columns) + 1;
          const y = Math.floor(index / columns) + 1;
          return (
            <Grid.Guide
              key={index}
              style={
                {
                  "--x": `${x}`,
                  "--y": `${y}`,
                } as React.CSSProperties
              }
            />
          );
        })}
      </Grid.Guides>
    </div>
  );
};
Grid.displayName = "Grid";

interface GridSystemContentWrapperProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

Grid.SystemContentWrapper = ({ children, className }) => {
  return (
    <div className={cn(`${styles.gridSystemContentWrapper}`, className)}>
      {children}
    </div>
  );
};
Grid.SystemContentWrapper.displayName = "GridSystemContentWrapper";

interface GridSystemProps {
  children?: React.ReactNode;
  guideWidth?: number;
}

Grid.System = ({ children, guideWidth = 1 }) => {
  return (
    <div
      className={cn(`${styles.gridSystem}`)}
      style={
        {
          "--min-width": "250px",
          "--guide-width": `${guideWidth}px`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};
Grid.System.displayName = "GridSystem";

interface GridCellProps {
  row?: string | number;
  column?: string | number;
  children?: React.ReactNode;
}

Grid.Cell = ({ column, row, children }: GridCellProps) => {
  return (
    <div
      className={cn(`${styles.block}`)}
      style={
        {
          "--grid-row": row,
          "--grid-column": column,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};
Grid.Cell.displayName = "GridCell";

interface GridCrossProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

Grid.Cross = ({ children, className }) => {
  return (
    <div
      className={cn(`${styles.cross}`, className)}
      data-grid-cross=""
      style={{ "--cross-row": 1, "--cross-column": 1 } as React.CSSProperties}
    >
      {children}
    </div>
  );
};
Grid.Cross.displayName = "GridCross";

interface GridCrosslineProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

Grid.Crossline = ({ children, className, style }) => {
  return (
    <div className={cn(`${styles.crossLine}`, className)} style={style}>
      {children}
    </div>
  );
};
Grid.Crossline.displayName = "GridCrossline";

interface GridGuidesProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

Grid.Guides = ({ children, className, style }) => {
  return (
    <div className={cn(`${styles.guides}`, className)} style={style}>
      {children}
    </div>
  );
};
Grid.Guides.displayName = "GridGuides";

interface GridGuideProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

Grid.Guide = ({ children, className, style }) => {
  return (
    <div
      className={cn(
        `${styles.guide} ${styles.smGuide} ${styles.smdGuide} ${styles.lgGuide}`,
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

interface GridDividerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

Grid.Divider = ({ children, className }) => {
  return <div className={cn(`${styles.divider}`, className)}>{children}</div>;
};
Grid.Divider.displayName = "GridDivider";

export { Grid };
