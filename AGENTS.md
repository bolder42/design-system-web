# AGENTS.md

This repository is a React component library published from `src/index.ts` and built with Rollup.

## Operating rules

- Make minimal changes that solve the request directly.
- Do not refactor unrelated components or stories while working on a local fix.
- Preserve the current export surface unless the task explicitly requires a breaking change.
- Keep Storybook stories in sync with components when the public API changes.
- Run a focused validation command after edits. Prefer `npm run validate` for broad changes and a narrower command when only one slice changed.

## Project conventions

- Components are grouped by `Atoms` and `Organisms` under `src/components/`.
- Public exports are centralized in `src/index.ts`.
- Shared styling lives in `src/styles/` and is imported from the package entrypoint.
- Tests use Jest with `jsdom` and need CSS imports mapped to `src/test/styleMock.js`.
- Storybook builds to `storybook-static` and deploys to GitHub Pages from the `main` branch.

## Useful commands

- `npm run validate` checks tests and the build.
- `npm run build` compiles the library.
- `npm run build-storybook` generates the static docs site.
- `npm run storybook` starts the local docs server.
