"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  columns?: number;
  rows?: number;
}

const Grid: React.FC<GridProps> = ({
  children,
  columns = 1,
  rows = 1,
  className,
  ...props
}) => {
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
