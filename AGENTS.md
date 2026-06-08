# AGENTS.md

This repository is a React component library published from `src/index.ts` and built with Rollup.
It features a dark-mode, terminal-inspired interface built with Tailwind CSS and uses the CVA (Class Variance Authority) pattern for component variants (inspired by shadcn/ui).

## Operating rules

- Make minimal changes that solve the request directly.
- Do not refactor unrelated components or stories while working on a local fix.
- Preserve the current export surface unless the task explicitly requires a breaking change.
- Keep Storybook stories in sync with components when the public API changes.
- **Commits MUST follow Conventional Commits** (`feat:`, `fix:`, `chore:`, etc.) since versioning and publishing are automated via `semantic-release`.
- Run a focused validation command after edits. Prefer `npm run validate` for broad changes and a narrower command when only one slice changed.

## Project conventions

- Components are grouped by `Atoms`, `Molecules`, and `Organisms` under `src/components/`. 
  - **Atoms**: Pure primitives (Buttons, Inputs, etc).
  - **Molecules**: Compositions of 2+ atoms.
  - **Organisms**: Distinct UI sections that compose molecules/atoms.
- Public exports are centralized in `src/index.ts`.
- Shared styling lives in `src/styles/` and is imported from the package entrypoint. Prefer Tailwind utility classes combined with CVA for component styling.
- Tests use Jest with `jsdom` and need CSS imports mapped to `src/test/styleMock.js`.
- Storybook builds to `storybook-static` and deploys to GitHub Pages automatically from the `main` branch.
- Publishing to npm is fully automated on the `main` branch via GitHub Actions using `semantic-release` with provenance (trusted packages) support.

## Useful commands

- `npm run validate` checks tests and the build.
- `npm run build` compiles the library.
- `npm run test:ci` runs unit tests in CI mode.
- `npm run build-storybook` generates the static docs site.
- `npm run storybook` starts the local docs server.
