# Contributing to portfolio

Thanks for helping improve this project. This doc is what GitHub links when someone opens a pull request; the [README](README.md) stays short on purpose.

## Ways to contribute

- **Pull requests** — bug fixes, small features, copy or accessibility tweaks, dependency updates that keep the build green.
- **Issues** — bugs, ideas, or questions before you spend time on a large change.

## Before you code

1. **Fork** [SpectraX07/portfolio](https://github.com/SpectraX07/portfolio) (or use a fork you already have push access to).
2. **Clone** with SSH or HTTPS (see README **INSTALLATION**).
3. **Install** and run locally:

   ```bash
   npm install
   npm run dev
   ```

## Pull request workflow

1. **Branch** from the default branch (`main` unless that changes):

   ```bash
   git checkout main
   git pull origin main
   git checkout -b feat/short-topic
   ```

   Prefix ideas: `feat/…`, `fix/…`, `docs/…`, `chore/…`.

2. **Keep the diff focused** — one logical change per PR. Avoid unrelated refactors, renames, or formatting sweeps mixed into a feature or fix.

3. **Match the codebase** — follow existing patterns for components, imports, Tailwind usage, and TypeScript style.

4. **Run checks** before opening or updating a PR:

   ```bash
   npm run lint
   npm run build
   ```

5. **Open a PR** against the default branch with:

   - A **title** that states what changed (imperative mood is fine: “Fix hero layout on small screens”).
   - A **description** that says *what* you changed and *why* (and how to verify, if non-obvious).

6. **Reviews** — maintainers may ask for edits. Pushing new commits to your branch updates the same PR.

## What is unlikely to be merged

- Large redesigns or personal branding changes without prior discussion (open an issue first).
- New dependencies unless they clearly solve a problem the project already has.
- Changes that break `npm run lint` or `npm run build` without a strong reason and agreement.

## Questions

Open a [GitHub issue](https://github.com/SpectraX07/portfolio/issues) if something in this file is unclear or you want to propose a bigger change before writing code.
