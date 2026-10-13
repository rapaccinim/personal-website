# Claude Log

Notable changes made with Claude Code, newest first.

## 2026-10-13 - Website retired in favour of Fulginium

**Content**
- Homepage reduced to name, profile photo, a short message ("This is a very old website I used when I was trading as a contract engineer in the UK. Now I have my own business: Fulginium.") and a "Visit Fulginium" button linking to https://fulginium.com.
- Removed the blog (pages, 2 posts, post images, `BlogArticlePreview`, `Tags`, `ErrorHandlingImage`, `utils/utils.js`, Markdown webpack rule).
- Removed the old services list, link cards (LinkedIn, GitHub, Medium, Twitter, Book a call), Cumbria Chamber of Commerce badge and Website Carbon badge.
- Header nav is now Home + Fulginium (Blog and GitHub CV links removed). Page titles end in "Marco Rapaccini - Fulginium".
- README rewritten.

**Upgrades**
- Next.js 13.4.12 -> 16.3.8, React 18.2 -> 19.3, Node 24 LTS (`.nvmrc`, `engines`).
- ESLint 7 + `.eslintrc.json` -> ESLint 9 flat config (`eslint.config.mjs`); `next lint` no longer exists, `npm run lint` runs `eslint .`.
- Dropped dependencies: `micromark`, `html-react-parser`, `react-carbonbadge`.
- Package manager switched from Yarn to npm (`yarn.lock`, `.yarnrc.yml` removed; `package-lock.json` added).
- Fixed Next 16 incompatibilities: string `width`/`height` on `next/image` in the 404 page, absolute `/public/...` import.

**Issue found**
- Next.js 16.4.0's Turbopack dev mode broke the homepage ("Module [project]/styles/Home.module.css ... module factory is not available"). Confirmed in headless Chrome: 16.4.0 prod build and `--webpack` were fine, 16.3.8 Turbopack was fine. Pinned to 16.3.8.
