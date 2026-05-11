```
portfolio(7)                    PERSONAL SITE                    portfolio(7)
```

## NAME

**portfolio** — personal portfolio site (React, TypeScript, Vite).

## SYNOPSIS

```bash
npm install
npm run dev
```

## DESCRIPTION

Static-first personal portfolio with a terminal / Linux-adjacent visual vibe. Built with **React 19**, **TypeScript**, **Vite 7**, **Tailwind CSS**, **Framer Motion**, and **React Router**. Smooth scrolling via Lenis where applicable.

This repository is **public** on GitHub: [SpectraX07/portfolio](https://github.com/SpectraX07/portfolio). Fork, branch, and open a pull request if you want to suggest changes — see [CONTRIBUTING.md](CONTRIBUTING.md).

## REQUIREMENTS

- **Node.js** — current LTS or newer recommended
- **npm** — ships with Node (or use your preferred compatible package manager)

## INSTALLATION

SSH:

```bash
git clone git@github.com:SpectraX07/portfolio.git
cd portfolio
npm install
```

HTTPS:

```bash
git clone https://github.com/SpectraX07/portfolio.git
cd portfolio
npm install
```

## COMMANDS

| Command        | Action                          |
|----------------|---------------------------------|
| `npm run dev`  | Start dev server (Vite + HMR)   |
| `npm run build`| Typecheck and production build  |
| `npm run preview` | Serve the `dist` output locally |
| `npm run lint` | Run ESLint                      |

## FILES

Typical layout:

- `src/` — application source (components, pages, assets)
- `public/` — static assets served as-is
- `vite.config.ts`, `tailwind.config.*`, `tsconfig.*` — toolchain configuration

## CONTRIBUTING

Pull requests are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) for the full workflow, checks to run, and expectations.

## LICENSE

If you add a `LICENSE` file to the repo, describe it here (for example MIT, Apache-2.0, or “All rights reserved” for a personal site). Until then, assume **all rights reserved** unless you state otherwise in the repository settings and root `LICENSE`.

---

```
$ echo "Thanks for reading — happy hacking."
Thanks for reading — happy hacking.
```
