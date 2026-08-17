# ADR-0001: Demo Stack

Accepted: 2026-08-17.

Use Next.js 16 App Router with React 19, TypeScript, Ant Design v6 and styled-components.

Ant Design is the default UI kit so the team can move fast without rebuilding generic controls. styled-components is used for product-specific layout surfaces and token-driven visual composition. A single token source feeds both AntD and styled-components.

Testing is intentionally not initialized yet. This demo is early and presentation-driven, so the current validation loop is `npm run lint`, `npm run ts:check`, and `npm run build` when needed.
