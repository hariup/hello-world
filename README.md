# hello-world

This is an attempt to scale myself up with the coding efforts, especially in the CI/CD journey!

The repo now holds my personal profile site: a static site built with **Astro** and **Tailwind CSS**, deployed to **Cloudflare**.

## Editing content (the only files you normally touch)

| What | Where |
|---|---|
| Name, headline, credentials, roles, expertise, about, contact | `src/content/profile.json` |
| Impact stories (one file each) | `src/content/stories/*.md` |
| Portrait | put `portrait.jpg` in `public/`, then set `"portrait": "/portrait.jpg"` in `profile.json` |

Anything containing `[VERIFY]` renders on the page as a visible **To verify** badge.
List every open item with:

```sh
grep -rn "\[VERIFY\]" src/content
```

If a field is missing or misspelled, `npm run build` stops with an error that names it.

## Running it locally

Requires Node.js 22.12 or newer.

```sh
npm install        # once, to download dependencies
npm run dev        # live preview at http://localhost:4321 (refreshes as you edit)
npm run build      # produce the finished site in dist/
npm run check      # type-check the code
```

## Deploying to Cloudflare

1. In the Cloudflare dashboard, go to **Workers & Pages → Create → Import a repository** and pick this repo.
2. Build command: `npm run build`. Deploy command: `npx wrangler deploy`.
3. Every push to the connected branch rebuilds and redeploys automatically.

Settings live in `wrangler.jsonc`. After you buy a domain, add it under the Worker's **Domains & Routes**, and set `site` in `astro.config.mjs`.

## Project map

```
src/content/            content: profile.json + stories/*.md
src/content.config.ts   rules each story file must follow
src/lib/                profile loader (with validation) and [VERIFY] helpers
src/styles/global.css   design tokens: colors, fonts, type scale, motion
src/layouts/Base.astro  shared page frame (<head>, header, footer)
src/components/         one file per section (Hero, Timeline, Stories, ...)
src/pages/              routes: index, stories/[id], 404
public/                 files served as-is (favicon, portrait)
```
