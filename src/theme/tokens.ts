export const colorTokens = {
  light: {
    colorPrimary: "#1f6feb",
    colorSuccess: "#16a34a",
    colorWarning: "#f59e0b",
    colorError: "#dc2626",
    colorInfo: "#0ea5e9",
    colorBgBase: "#f4f7fb",
    colorBgLayout: "#eef3f8",
    colorBgContainer: "#ffffff",
    colorBgElevated: "#ffffff",
    colorText: "#152033",
    colorTextSecondary: "#526071",
    colorTextTertiary: "#7c8898",
    colorBorder: "#dbe3ee",
  },
  dark: {
    colorPrimary: "#6aa6ff",
    colorSuccess: "#4ade80",
    colorWarning: "#fbbf24",
    colorError: "#fb7185",
    colorInfo: "#38bdf8",
    colorBgBase: "#10141c",
    colorBgLayout: "#0b0f16",
    colorBgContainer: "#161c26",
    colorBgElevated: "#1d2531",
    colorText: "#edf3fb",
    colorTextSecondary: "#b7c1cf",
    colorTextTertiary: "#8793a3",
    colorBorder: "#2a3545",
  },
} as const;

export const brandColorTokens = {
  ink: "#152033",
  blue: "#1f6feb",
  mint: "#12b886",
  amber: "#f59e0b",
  coral: "#ef4444",
} as const;

export type ThemeMode = keyof typeof colorTokens;

export const radiusTokens = {
  sm: 4,
  md: 8,
  lg: 12,
};

export const spacingTokens = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const fontTokens = {
  family: "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  mono: "var(--font-geist-mono), 'SFMono-Regular', Consolas, monospace",
  sizeBase: 14,
};

export const layoutTokens = {
  pageMax: 1440,
  sidebarWidth: 292,
};

export const DEFAULT_THEME_MODE: ThemeMode = "light";
