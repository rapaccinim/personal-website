# CLAUDE.md

Marco Rapaccini's old personal website (www.webproduct.dev). It now only says he previously traded as a contract engineer in the UK and points visitors to his business, [Fulginium](https://fulginium.com).

## Stack
- Next.js 16 (Pages Router, Turbopack), React 19, plain CSS Modules, no TypeScript in app code.
- Node 24 LTS (`.nvmrc`), npm (`package-lock.json`). No Yarn.

## Commands
- `npm run dev` - dev server on http://localhost:3000
- `npm run build` - production build
- `npm run lint` - ESLint 9 flat config (`eslint.config.mjs`)

## Structure
- `pages/index.js` - the homepage (name, photo, message, "Visit Fulginium" button)
- `pages/404.js` - custom 404
- `components/` - `layout`, `header`, `footer`, `wrapper`, `head-seo` (meta/OG tags)
- `config/config.js` - production URL and default OG image

## Gotchas
- **Next 16.4.0 is pinned out on purpose.** Its Turbopack dev mode fails to emit a page's CSS module when the page also imports a shared module, which causes "module factory is not available" in the browser. Stay on 16.3.8 until a 16.4.x patch fixes it, and verify in a real browser before bumping.
- Keep `eslint` on 9 and `typescript` on 6.0 until `eslint-config-next` / `typescript-eslint` support ESLint 10 / TS 7.
- `typescript` is required as a dev dependency only so `typescript-eslint` (pulled in by `eslint-config-next`) can load.

## Conventions
- Keep the site minimal: no blog, no extra dependencies, no third-party scripts.
- Log notable changes in `CLAUDE_LOG.md`.
