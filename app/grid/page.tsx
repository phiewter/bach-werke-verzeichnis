import { Grid } from "@/components/ui/grid/grid";

export default function Page() {
  return (
    <div className="flex flex-auto flex-col justify-center items-center min-h-[100vh]">
      <Grid.SystemContentWrapper>
        <Grid.System>
          <Grid columns={{ sm: 8, md: 12 }} rows={{ sm: 3, md: 4 }}></Grid>
        </Grid.System>
      </Grid.SystemContentWrapper>
    </div>
  );
}
