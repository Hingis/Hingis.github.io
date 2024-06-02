import { mediaBreakpoints } from "./../breakpoints";

export const mediaQueriesUp = (key: keyof typeof mediaBreakpoints) => {
  return (style: TemplateStringsArray | string) =>
    `@media (min-width: ${mediaBreakpoints[key]}px) { ${style} }`;
};

export const mediaQueriesDown = (key: keyof typeof mediaBreakpoints) => {
  return (style: TemplateStringsArray | string) =>
    `@media (max-width: ${mediaBreakpoints[key]}px) { ${style} }`;
};
