# Bolder Design System

Component library for the Bolder design system. It ships reusable atoms and organisms, plus Storybook for visual review and GitHub Actions for CI and Storybook deploys.

## What lives here

- `src/components/Atoms/` contains the basic building blocks.
- `src/components/Organisms/` contains composed UI sections.
- `src/styles/` contains shared fonts and global tokens.
- `.storybook/` contains Storybook configuration.
- `.github/workflows/` contains CI and Pages deploy workflows.

## Main scripts

- `npm run build` builds the library with Rollup.
- `npm run build-storybook` generates the static Storybook site in `storybook-static`.
- `npm run test:ci` runs Jest in non-watch mode for automation.
- `npm run validate` runs tests and then builds the library.
- `npm run storybook` starts Storybook locally.

## Automation

- Pull requests run `npm run build` in GitHub Actions.
- Commits run `npm run validate` through Husky pre-commit.
- Pushes to `main` deploy Storybook to GitHub Pages.

## Notes for agents

- Prefer small, focused changes.
- Keep exports in `src/index.ts` aligned with component folders.
- If you add or change CSS imports in tests, update the Jest CSS mapper instead of removing CSS imports.
- Validate touched slices with `npm run validate` or the narrowest relevant command before finishing.
