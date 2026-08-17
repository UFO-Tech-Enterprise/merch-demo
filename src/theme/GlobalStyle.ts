"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0;
  }

  body {
    background: ${({ theme }) => theme.colors.colorBgLayout};
    color: ${({ theme }) => theme.colors.colorText};
    font-family: ${({ theme }) => theme.font.family};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      scroll-behavior: auto !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;
