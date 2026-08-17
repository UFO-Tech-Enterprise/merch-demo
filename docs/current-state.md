# Current State

Last updated: 2026-08-17.

The project is a clean Next.js 16 demo initialized with Ant Design, styled-components theme tokens, Prettier and lightweight AI-agent guidance.

Implemented foundation:

- Root `AGENTS.md` points agents at version-matched Next docs and local project rules.
- AntD SSR style extraction via `@ant-design/nextjs-registry`.
- styled-components SSR registry and shared token source under `src/theme`.
- Thin App Router page that delegates to `src/views/MerchDemoView`.
- Role-based presentation shell for merchandiser, supervisor of merchandisers and KAM.
- Lightweight spec with user-facing copy in `docs/specs/001-role-function-description.md`.

Next useful work:

- Replace screenshot placeholders with anonymized, unbranded screenshots.
- Continue into admin/KAM analytics after the role deck is accepted.
- Decide whether theme switching is needed before adding client state.
