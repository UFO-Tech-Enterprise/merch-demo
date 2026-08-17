"use client";

import { App as AntdApp, ConfigProvider } from "antd";
import { type ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { getAntdTheme } from "@/theme/antd";
import { GlobalStyle } from "@/theme/GlobalStyle";
import { getStyledTheme } from "@/theme/styled";
import { DEFAULT_THEME_MODE } from "@/theme/tokens";

export const ThemeBridge = ({ children }: { children: ReactNode }) => {
  const mode = DEFAULT_THEME_MODE;

  return (
    <ConfigProvider theme={getAntdTheme(mode)}>
      <StyledThemeProvider theme={getStyledTheme(mode)}>
        <GlobalStyle />
        <AntdApp>{children}</AntdApp>
      </StyledThemeProvider>
    </ConfigProvider>
  );
};
