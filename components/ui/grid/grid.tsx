import * as React from "react";

import { cn } from "@/lib/utils";

import styles from "@/components/ui/grid/grid.module.css";

// TODO: Fix 'ResponsiveBreakpoints' for Grid
type ResponsiveBreakpoints = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
};

interface GridProps {
  rows: number;
  columns: number;
  children: React.ReactElement<GridCellProps>[];
}

const Grid: React.FC<GridProps> & {
  SystemContentWrapper: React.FC<GridSystemContentWrapperProps>;
  System: React.FC<GridSystemProps>;
  Cell: React.FC<GridCellProps>;
  Cross: React.FC<GridCrossProps>;
  Crossline: React.FC<GridCrosslineProps>;
  Guides: React.FC<GridGuidesProps>;
  Guide: React.FC<GridGuideProps>;
  Divider: React.FC<GridDividerProps>;
} = ({ rows, columns, children }: GridProps) => {
  return (
    <div
      className={cn(`${styles.grid}`)}
      style={
        {
          "--grid-rows": rows,
          "--grid-columns": columns,
        } as React.CSSProperties
      }
    >
      {children}
      <Grid.Guides>
        {Array.from({ length: rows * columns }, (_, index) => {
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

Grid.Cell = ({ row, column, children }: GridCellProps) => {
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
        `${styles.guide} ${styles.xsGuide} ${styles.smGuide} ${styles.mdGuide} ${styles.lgGuide}`,
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
