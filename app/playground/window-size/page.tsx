"use client";

import useWindowDimensions from "@/components/ui/window-size/windowSize";

export default function Page() {
  const { width } = useWindowDimensions();

  const sizeColors = {
    xs: "purple",
    sm: "red",
    smd: "orange",
    md: "green",
    lg: "blue",
  };

  const breakpoints = {
    xs: 0,
    sm: 400,
    smd: 600,
    md: 768,
    lg: 960,
  };

  // Function to determine the background color based on window width
  const getColorForSize = (width: number) => {
    if (width >= breakpoints.lg) return sizeColors.lg;
    if (width >= breakpoints.md) return sizeColors.md;
    if (width >= breakpoints.smd) return sizeColors.smd;
    if (width >= breakpoints.sm) return sizeColors.sm;
    return sizeColors.xs; // Default to xs if none match
  };

  const styles = {
    container: {
      width: "100%",
      height: "100vh",
      backgroundColor: getColorForSize(width),
    },
    block: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    text: { fontSize: "32px", color: "white" },
  };

  return (
    <div style={styles.container}>
      {" "}
      <div style={styles.block}>
        <p style={styles.text}>{width}</p>
      </div>
    </div>
  );
}
