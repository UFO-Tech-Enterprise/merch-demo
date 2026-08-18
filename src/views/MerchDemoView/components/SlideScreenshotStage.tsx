"use client";

import { PictureOutlined } from "@ant-design/icons";
import { Image } from "antd";
import { useMemo } from "react";

import { getCollageLayout } from "../lib/collageLayout";
import { resolveSlideScreenshots } from "../lib/resolveSlideScreenshots";
import type { Accent, SlideScreenshot } from "../types";
import {
  CollageCell,
  CollageContainer,
  CollageImageFrame,
  CollageStageFooter,
  EmptyScreenshotIcon,
  ScreenshotStageRoot,
  StageHeader,
  StageHint,
} from "./SlideScreenshotStage.styles";

interface SlideScreenshotStageProps {
  slideKey: string;
  screenLabel: string;
  accent: Accent;
  inlineScreenshots?: SlideScreenshot[];
}

export const SlideScreenshotStage = ({
  slideKey,
  screenLabel,
  accent,
  inlineScreenshots,
}: SlideScreenshotStageProps) => {
  const screenshots = useMemo(
    () => resolveSlideScreenshots(slideKey, inlineScreenshots),
    [slideKey, inlineScreenshots],
  );

  const layout = useMemo(
    () => getCollageLayout(screenshots.map((item) => item.orientation)),
    [screenshots],
  );

  if (!screenshots.length) {
    return (
      <ScreenshotStageRoot $accent={accent} $hasPhotos={false}>
        <EmptyScreenshotIcon $accent={accent}>
          <PictureOutlined />
        </EmptyScreenshotIcon>
        <StageHeader>{screenLabel}</StageHeader>
        <StageHint>Макет екрану застосунку</StageHint>
      </ScreenshotStageRoot>
    );
  }

  return (
    <ScreenshotStageRoot $accent={accent} $hasPhotos>
      <CollageContainer $mode={layout.mode} $columns={layout.columns} $rows={layout.rows}>
        <Image.PreviewGroup>
          {screenshots.map((screenshot, index) => (
            <CollageCell
              key={`${slideKey}-${index}`}
              $mode={layout.mode}
              $gridColumn={layout.cells[index]?.gridColumn ?? "1"}
              $gridRow={layout.cells[index]?.gridRow ?? "1"}
            >
              <CollageImageFrame $mode={layout.mode} $orientation={screenshot.orientation}>
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt ?? screenLabel}
                  preview={{ mask: "Переглянути" }}
                />
              </CollageImageFrame>
            </CollageCell>
          ))}
        </Image.PreviewGroup>
      </CollageContainer>

      <CollageStageFooter>{screenLabel}</CollageStageFooter>
    </ScreenshotStageRoot>
  );
};
