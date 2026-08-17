import type { ReactNode } from "react";

export type Accent = "blue" | "mint" | "amber" | "coral";
export type Mode = "app" | "admin";
export type RoleKey = "merchandiser" | "supervisor" | "kam" | "photoController";

export interface RoleConfig {
  key: RoleKey;
  title: string;
  shortTitle: string;
  accent: Accent;
  icon: ReactNode;
  summaries: Record<Mode, string>;
}

export interface FeatureSlide {
  key: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  icon: ReactNode;
  screenLabel: string;
  core: string[];
  value: string[];
  metrics: Array<{
    label: string;
    value: string;
  }>;
}
