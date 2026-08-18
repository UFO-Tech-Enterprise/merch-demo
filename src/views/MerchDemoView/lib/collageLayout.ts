import type { SlideScreenshotOrientation } from "../types";

export type CollageLayoutMode = "flex-row" | "flex-column" | "grid-2x2" | "grid";

export interface CollageCellLayout {
  gridColumn: string;
  gridRow: string;
}

export interface CollageLayout {
  mode: CollageLayoutMode;
  columns: string;
  rows: string;
  cells: CollageCellLayout[];
}

const fourUpGrid = (): CollageLayout => ({
  mode: "grid-2x2",
  columns: "repeat(2, minmax(0, 1fr))",
  rows: "repeat(2, minmax(0, 1fr))",
  cells: [
    { gridColumn: "1", gridRow: "1" },
    { gridColumn: "2", gridRow: "1" },
    { gridColumn: "1", gridRow: "2" },
    { gridColumn: "2", gridRow: "2" },
  ],
});

export const getCollageLayout = (orientations: SlideScreenshotOrientation[]): CollageLayout => {
  const count = orientations.length;

  if (count === 1) {
    return {
      mode: "flex-row",
      columns: "1fr",
      rows: "1fr",
      cells: [{ gridColumn: "1", gridRow: "1" }],
    };
  }

  if (count === 2) {
    const [first, second] = orientations;

    if (first === "portrait" && second === "portrait") {
      return {
        mode: "flex-row",
        columns: "repeat(2, minmax(0, 1fr))",
        rows: "1fr",
        cells: [
          { gridColumn: "1", gridRow: "1" },
          { gridColumn: "2", gridRow: "1" },
        ],
      };
    }

    if (first === "landscape" && second === "landscape") {
      return {
        mode: "flex-row",
        columns: "repeat(2, minmax(0, 1fr))",
        rows: "1fr",
        cells: [
          { gridColumn: "1", gridRow: "1" },
          { gridColumn: "2", gridRow: "1" },
        ],
      };
    }

    return {
      mode: "flex-row",
      columns: "repeat(2, minmax(0, 1fr))",
      rows: "1fr",
      cells: [
        { gridColumn: "1", gridRow: "1" },
        { gridColumn: "2", gridRow: "1" },
      ],
    };
  }

  if (count === 3) {
    const portraitCount = orientations.filter((item) => item === "portrait").length;

    if (portraitCount >= 2) {
      return {
        mode: "grid",
        columns: "minmax(0, 1.1fr) minmax(0, 0.9fr)",
        rows: "repeat(2, minmax(0, 1fr))",
        cells: [
          { gridColumn: "1", gridRow: "1 / span 2" },
          { gridColumn: "2", gridRow: "1" },
          { gridColumn: "2", gridRow: "2" },
        ],
      };
    }

    return {
      mode: "grid",
      columns: "repeat(2, minmax(0, 1fr))",
      rows: "repeat(2, minmax(0, 1fr))",
      cells: [
        { gridColumn: "1", gridRow: "1" },
        { gridColumn: "2", gridRow: "1" },
        { gridColumn: "1 / span 2", gridRow: "2" },
      ],
    };
  }

  if (count === 4) {
    return fourUpGrid();
  }

  return fourUpGrid();
};
