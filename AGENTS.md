<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Merch Demo Rules

This is a presentation-style demo for a merchandiser mobile app with an admin workspace.

Before meaningful UI work, read:

- `docs/product-brief.md` for the product shape and design direction.
- `docs/current-state.md` for the current implementation snapshot.
- `docs/adr/ADR-0001-stack.md` for accepted stack choices.
- `.agents/skills/merch-demo/SKILL.md` when changing the demo flow or presentation UX.

# Stack

- Next.js 16 App Router + React 19 + TypeScript.
- Ant Design v6 is the default UI kit. Use AntD controls before inventing custom components.
- `@ant-design/nextjs-registry` handles AntD SSR style extraction.
- styled-components v6 handles custom layout and presentation surfaces.
- One token source lives in `src/theme/tokens.ts`; AntD config is in `src/theme/antd.ts`, styled theme is in `src/theme/styled.ts`.
- No Redux, i18n, auth or test framework yet. Add them only when the demo needs them.

# Folder Structure

```txt
app/                    # App Router files only; keep pages thin
src/providers/          # AppProviders, AntD and styled-components setup
src/theme/              # shared tokens and theme bridges
src/views/<Name>View/   # screen-level composition
src/shared/             # cross-cutting utilities
docs/                   # product notes, ADRs, current state
.agents/skills/         # local project skills
```

# Conventions

- Files rendering AntD components should be Client Components unless wrapped safely.
- Keep slide/state logic inside view components, not `app/page.tsx`.
- Use icons from `@ant-design/icons` for button/tool affordances.
- Avoid nested cards and oversized marketing sections; the demo surface should be immediately useful.
- Prefer quick iteration: `npm run lint`, `npm run ts:check`, and `npm run build` are available, but do not add heavy checks unless requested.
