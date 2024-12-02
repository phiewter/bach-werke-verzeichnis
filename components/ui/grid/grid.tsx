import * as React from "react";

import { cn } from "@/lib/utils";

import styles from "@/components/ui/grid/grid.module.css";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  columns?: number;
  rows?: number;
}

const Grid: React.FC<GridProps> & {
  SystemContentWrapper: React.FC<GridSystemContentWrapperProps>;
  System: React.FC<GridSystemProps>;
  Cell: React.FC<GridCellProps>;
  Cross: React.FC<GridCrossProps>;
} = ({ children, className, columns = 1, rows = 1, ...props }) => {
  return (
    <div
      className={cn("grid inset-0", className)}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
      }}
      {...props}
    >
      {children}
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

interface GridSystemProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

Grid.System = ({ children, className }) => {
  return (
    <div
      className={cn(`${styles.gridSystem}`, className)}
      style={
        {
          "--min-width": "250px",
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};
Grid.System.displayName = "GridSystem";

interface GridCellProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

Grid.Cell = ({ children, className }) => {
  return <div className={cn(className)}>{children}</div>;
};
Grid.Cell.displayName = "GridCell";

interface GridCrossProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

Grid.Cross = ({ children, className }) => {
  return <div className={cn(className)}>{children}</div>;
};
Grid.Cross.displayName = "GridCross";

export { Grid };
