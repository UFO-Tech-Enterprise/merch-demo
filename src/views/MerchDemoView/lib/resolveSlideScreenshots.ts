import { getConfiguredScreenshots } from "../config/screenshots";
import type { SlideScreenshot } from "../types";

const MAX_SCREENSHOTS = 4;

/** Зливає inline-скріншоти слайду та запис з config/screenshots.ts (inline має пріоритет). */
export const resolveSlideScreenshots = (
  slideKey: string,
  inlineScreenshots?: SlideScreenshot[],
): SlideScreenshot[] => {
  if (inlineScreenshots?.length) {
    return inlineScreenshots.slice(0, MAX_SCREENSHOTS);
  }

  return getConfiguredScreenshots(slideKey).slice(0, MAX_SCREENSHOTS);
};
