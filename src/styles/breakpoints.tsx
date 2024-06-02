export const mediaBreakpoints = {
  xxs: "0",
  xs: "320",
  sm: "600",
  md: "800",
  lg: "1024",
  xl: "1200",
  xxl: "1440",
  xxxl: "1800",
};

export const device = {
  mobile: `(max-width: ${mediaBreakpoints.sm})`,
  tablet: `(max-width: ${mediaBreakpoints.md})`,
  laptop: `(max-width: ${mediaBreakpoints.lg})`,
  desktop: `(max-width: ${mediaBreakpoints.xl})`,
};
