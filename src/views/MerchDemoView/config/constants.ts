import type { Mode } from "../types";

export const modeOptions = [
  { label: "Застосунок", value: "app" },
  { label: "Адмінка", value: "admin" },
] satisfies Array<{ label: string; value: Mode }>;
