---
name: design-system-repo-guide
description: Use when working in the Bolder design system repository and you need the project structure, validation commands, Storybook workflow, or repo-specific conventions.
---

# Bolder Design System Repo Guide

Use this skill when you need to understand or change this repository.

## Fast map

- `src/index.ts` is the public entrypoint.
- `src/components/Atoms/` holds primitive UI components.
- `src/components/Organisms/` holds composed sections.
- `src/styles/` holds shared fonts and tokens.
- `.storybook/` configures Storybook.
- `.github/workflows/` contains CI and Pages deploy workflows.

## Validation

- `npm run validate` runs Jest in CI mode and then builds the library.
- `npm run build-storybook` generates the static Storybook site.
- `npm run storybook` starts the local Storybook server.

## Edit rules

- Keep changes small and local to the request.
- Update `src/index.ts` when adding or removing public exports.
- Keep Storybook stories aligned with component API changes.
- Do not remove CSS imports from components just to make tests pass; use the Jest CSS mapper.
