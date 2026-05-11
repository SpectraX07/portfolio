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
- `vercel.json` — SPA routing for [Vercel](#deployment-vercel) (React Router)

## DEPLOYMENT (Vercel)

This app uses **client-side routes** (`/`, `/modules`, `/project/:id`). `vercel.json` rewrites unknown paths to `index.html` so refreshes and deep links work.

### Source vs what goes live

- **What people see in production** is the **build output**: the same files Vite writes to `dist/` (`index.html`, hashed JS/CSS under `assets/`, copied `public/` files). That is the “live” site — not your raw `src/*.tsx` on the wire.
- **How it is separated:** `dist/` is listed in `.gitignore`, so you **do not commit** build output to GitHub. The repo holds **source + config** only. Vercel clones that repo, runs `npm run build` on their side, then **hosts only the fresh build** on the CDN. You are not uploading two trees by hand; deploy = “build from source, serve result.”
- If you ever used **static hosting without a build step**, you could upload only `dist/` yourself; with **Git → Vercel**, you keep pushing the full project and Vercel produces `dist` per deploy.

### One-time setup

1. Push this repo to GitHub ([SpectraX07/portfolio](https://github.com/SpectraX07/portfolio)) if it is not already up to date.
2. Sign in at [vercel.com](https://vercel.com) (GitHub login is fine).
3. **Add New… → Project** → **Import** your `portfolio` repository.
4. Vercel usually auto-detects **Vite**. Confirm:
   - **Framework Preset:** Vite (or “Other” with **Build Command** `npm run build` and **Output Directory** `dist`).
   - **Install Command:** `npm install` (default).
   - **Root Directory:** `.` (repository root).
5. Click **Deploy**. After the build finishes, you get a `*.vercel.app` URL.

### After deploy

- **Production:** each push to your production branch (typically `main`) can auto-deploy if you leave **Git Integration** enabled (default).
- **Preview:** other branches and pull requests get preview URLs in the Vercel dashboard and on PR comments.
- **Custom domain:** Project → **Settings → Domains** → add your domain and follow DNS instructions.

### Sanity check locally

```bash
npm run build
npm run preview
```

Visit `http://localhost:4173/modules` and reload; it should still load. If that works, Vercel will behave the same with `vercel.json` in place.

## CONTRIBUTING

Pull requests are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) for the full workflow, checks to run, and expectations.

## LICENSE

If you add a `LICENSE` file to the repo, describe it here (for example MIT, Apache-2.0, or “All rights reserved” for a personal site). Until then, assume **all rights reserved** unless you state otherwise in the repository settings and root `LICENSE`.

---

```
$ echo "Thanks for reading — happy hacking."
Thanks for reading — happy hacking.
```
