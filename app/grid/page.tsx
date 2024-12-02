import { Grid } from "@/components/ui/grid/grid";

export default function Page() {
  return (
    <Grid.SystemContentWrapper>
      <Grid.System>
        <Grid columns={3}>
          <div className="bg-gray-700 text-white h-full w-full">1</div>
          <div className="bg-gray-800 text-white h-full w-full">2</div>
          <div className="bg-gray-900 text-white h-full w-full">3</div>
        </Grid>
      </Grid.System>
    </Grid.SystemContentWrapper>
  );
}
