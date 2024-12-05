import { Grid } from "@/components/ui/grid/grid";
import React from "react";

export default function Page() {
  return (
    <Grid.SystemContentWrapper>
      <Grid.System>
        <Grid rows={4} columns={4}>
          <Grid.Cell row="auto" column={1}>
            Does
          </Grid.Cell>
          <Grid.Cell row="auto" column={4}>
            this
          </Grid.Cell>
          <Grid.Cell row={2} column={3}>
            grid
          </Grid.Cell>
          <Grid.Cell row={3} column={4}>
            work
          </Grid.Cell>
          <Grid.Cell row={4} column="auto">
            ?
          </Grid.Cell>
        </Grid>
      </Grid.System>
    </Grid.SystemContentWrapper>
  );
}
