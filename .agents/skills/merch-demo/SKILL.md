---
name: merch-demo
description: Project guidance for building the Merch Demo presentation app.
---

# Merch Demo Skill

Use this skill when adding or reshaping the merchandiser demo experience.

## Product Shape

- Build the usable demo first. Do not replace the app with a marketing landing page.
- Treat the UI as a presentation tool with slide/scenario switching.
- Favor concrete retail and merchandising states: routes, store visits, shelf photos, price audit, stock checks, issues, admin oversight.

## UI Rules

- Use Ant Design components for controls, forms, tables, stats, tags, segmented controls and buttons.
- Use styled-components for layout and demo-specific presentation surfaces.
- Pull color, radius, spacing and font choices from `src/theme/tokens.ts`.
- Keep pages thin; put screen composition in `src/views/<Name>View`.
- Files that render AntD components should usually be Client Components.

## Engineering Rules

- Read the matching Next.js bundled docs under `node_modules/next/dist/docs/` before changing framework patterns.
- Keep the client boundary narrow: App Router pages can stay server components and render focused client views.
- Do not add state libraries, i18n, auth or API layers until the demo actually needs them.
- Skip tests unless the user asks; this project currently prioritizes quick presentation iteration.
