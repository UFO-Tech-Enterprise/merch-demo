import {
  brandColorTokens,
  colorTokens,
  fontTokens,
  layoutTokens,
  radiusTokens,
  spacingTokens,
  type ThemeMode,
} from "./tokens";

export const getStyledTheme = (mode: ThemeMode) => ({
  mode,
  colors: colorTokens[mode],
  brandColors: brandColorTokens,
  radius: radiusTokens,
  spacing: spacingTokens,
  font: fontTokens,
  layout: layoutTokens,
});

export type AppStyledTheme = ReturnType<typeof getStyledTheme>;
