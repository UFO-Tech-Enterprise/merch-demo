import { theme as antdTheme, type ThemeConfig } from "antd";

import { colorTokens, fontTokens, radiusTokens, type ThemeMode } from "./tokens";

export const getAntdTheme = (mode: ThemeMode): ThemeConfig => {
  const colors = colorTokens[mode];

  return {
    algorithm: mode === "dark" ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
    token: {
      ...colors,
      borderRadius: radiusTokens.md,
      fontFamily: fontTokens.family,
      fontSize: fontTokens.sizeBase,
    },
    components: {
      Button: {
        controlHeight: 40,
        borderRadius: radiusTokens.md,
      },
      Card: {
        borderRadiusLG: radiusTokens.md,
      },
      Segmented: {
        borderRadius: radiusTokens.md,
      },
    },
  };
};
