import styled, { css } from "styled-components";

import type { CollageLayoutMode } from "../lib/collageLayout";
import type { Accent, SlideScreenshotOrientation } from "../types";

const collageHeight = css`
  height: clamp(280px, 42vh, 460px);
  min-height: 240px;
  max-height: 480px;
`;

const portraitImageStyles = (radius: number) => css`
  .ant-image {
    display: flex !important;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    line-height: 0;
  }

  .ant-image-img {
    display: block;
    height: 100% !important;
    width: auto !important;
    max-width: 100% !important;
    object-fit: contain;
    border-radius: ${radius}px;
    box-shadow: 0 8px 22px rgba(21, 32, 51, 0.12);
    cursor: zoom-in;
  }
`;

const landscapeImageStyles = (radius: number) => css`
  .ant-image {
    display: flex !important;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    line-height: 0;
  }

  .ant-image-img {
    display: block;
    width: 100% !important;
    height: 100% !important;
    max-width: 100% !important;
    max-height: 100% !important;
    object-fit: contain;
    border-radius: ${radius}px;
    box-shadow: 0 8px 22px rgba(21, 32, 51, 0.12);
    cursor: zoom-in;
  }
`;

export const ScreenshotStageRoot = styled.div<{ $accent: Accent; $hasPhotos: boolean }>`
  min-width: 0;
  max-width: 100%;
  min-height: clamp(340px, 48vh, 560px);
  display: flex;
  flex-direction: column;
  gap: ${({ $hasPhotos }) => ($hasPhotos ? "10px" : "16px")};
  padding: ${({ $hasPhotos }) => ($hasPhotos ? "12px" : "26px")};
  border: 1px dashed ${({ $accent, theme }) => `${theme.brandColors[$accent]}99`};
  border-radius: ${({ theme }) => theme.radius.md}px;
  background:
    linear-gradient(
      135deg,
      ${({ $accent, theme }) => `${theme.brandColors[$accent]}12`},
      transparent
    ),
    ${({ theme }) => theme.colors.colorBgLayout};
  overflow: hidden;

  ${({ $hasPhotos }) =>
    !$hasPhotos &&
    `
    align-items: center;
    justify-content: center;
    text-align: center;
  `}
`;

export const EmptyScreenshotIcon = styled.div<{ $accent: Accent }>`
  .anticon {
    color: ${({ $accent, theme }) => theme.brandColors[$accent]};
    font-size: 44px;
  }
`;

export const StageHeader = styled.strong`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.colorText};
`;

export const StageHint = styled.span`
  color: ${({ theme }) => theme.colors.colorTextSecondary};
  line-height: 1.55;
`;

export const CollageContainer = styled.div<{
  $mode: CollageLayoutMode;
  $columns: string;
  $rows: string;
}>`
  flex: 1 1 auto;
  width: 100%;
  min-width: 0;
  max-width: 100%;
  gap: 10px;
  overflow: hidden;
  ${collageHeight}

  ${({ $mode, $columns, $rows }) => {
    if ($mode === "flex-row") {
      return css`
        display: flex;
        flex-direction: row;
        align-items: stretch;
        justify-content: center;
      `;
    }

    if ($mode === "flex-column") {
      return css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      `;
    }

    if ($mode === "grid-2x2") {
      return css`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-template-rows: repeat(2, minmax(0, 1fr));
      `;
    }

    return css`
      display: grid;
      grid-template-columns: ${$columns};
      grid-template-rows: ${$rows};
      align-items: stretch;
      justify-items: stretch;
    `;
  }}
`;

export const CollageCell = styled.div<{
  $mode: CollageLayoutMode;
  $gridColumn: string;
  $gridRow: string;
}>`
  min-width: 0;
  min-height: 0;
  overflow: hidden;

  ${({ $mode, $gridColumn, $gridRow }) => {
    if ($mode === "flex-row") {
      return css`
        flex: 1 1 0;
        height: 100%;
      `;
    }

    if ($mode === "flex-column") {
      return css`
        flex: 1 1 0;
        width: 100%;
        min-height: 0;
      `;
    }

    return css`
      grid-column: ${$gridColumn};
      grid-row: ${$gridRow};
      height: 100%;
      width: 100%;
    `;
  }}
`;

export const CollageImageFrame = styled.div<{
  $mode: CollageLayoutMode;
  $orientation: SlideScreenshotOrientation;
}>`
  width: 100%;
  height: 100%;
  line-height: 0;

  ${({ $orientation, $mode, theme }) => {
    if ($orientation === "landscape") {
      return css`
        ${landscapeImageStyles(theme.radius.md)}
      `;
    }

    if ($mode === "flex-column") {
      return css`
        display: flex;
        align-items: center;
        justify-content: center;

        .ant-image {
          display: block !important;
          width: 100%;
          height: auto;
          max-height: 100%;
          line-height: 0;
        }

        .ant-image-img {
          display: block;
          width: 100% !important;
          height: auto !important;
          max-height: 100% !important;
          object-fit: contain;
          border-radius: ${theme.radius.md}px;
          box-shadow: 0 8px 22px rgba(21, 32, 51, 0.12);
          cursor: zoom-in;
        }
      `;
    }

    return css`
      ${portraitImageStyles(theme.radius.md)}
    `;
  }}

  .ant-image-mask {
    border-radius: ${({ theme }) => theme.radius.md}px;
  }
`;

export const CollageStageFooter = styled.span`
  flex: 0 0 auto;
  color: ${({ theme }) => theme.colors.colorTextSecondary};
  font-size: 13px;
  line-height: 1.4;
  text-align: center;
`;
