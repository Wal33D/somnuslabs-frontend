# Somnus Labs website

The company website for Somnus Labs at [somnuslabs.com](https://www.somnuslabs.com). It lists the
products (Deskwork, MagicReply, CMAForge, ARV Analyzer, PlantVision, PromptNexus, OBD-Droid), hosts a short blog,
and carries the privacy, terms and SMS-program pages. One small API route adds an email to the
mailing list.

Built with Next.js 13 (App Router), React 18, TypeScript and Tailwind CSS.

## Run it locally

Node 22 (see `engines` in `package.json`) and npm.

```bash
npm ci
npm run dev        # http://localhost:3000
```

The site runs without any environment variables. Only the mailing-list sign-up needs them (see below);
without them `/api/subscribeUser` answers with an error and everything else works.

Other scripts:

| Command              | What it does                              |
| -------------------- | ----------------------------------------- |
| `npm run build`      | Production build (`next build`)           |
| `npm start`          | Serve the production build                |
| `npm run lint`       | ESLint (`next lint`, with Prettier rules) |
| `npm test`           | Jest, once                                |
| `npm run test:watch` | Jest in watch mode                        |

`npm ci` runs `husky install`, which sets a pre-commit hook that runs `lint-staged` (Prettier and
ESLint on the staged files).

## Tests

Tests live in `src/__tests__/` (Jest with Testing Library, jsdom). They check the SEO metadata,
sitemap and robots output, and the legal and SMS copy. None of them call a live service.

In Gas Town, run them on the test machines through `gt-test`, from inside a checkout (commit first:
only committed files are sent). The suites are defined in `~/gt/tools/gt-test/gate-rigs/somnusweb.conf`:

```bash
gt-test            # "changed" suite: only the tests this diff affects
gt-test unit       # full suite: build, lint, then all Jest tests
```

Outside Gas Town, the full suite is the same three steps:

```bash
HUSKY=0 npm run build && npm run lint && npx jest --ci --passWithNoTests
```

## Deploy

The site is hosted on Vercel, in the project `somnuslabs-frontend` under the Vercel team `waleed-gudahs-projects`.
Vercel's Git integration builds and deploys the `main` branch of this repository to production at
https://www.somnuslabs.com (the bare domain redirects there). There is no deploy script, `vercel.json` or GitHub
workflow in the repo. Changes reach `main` through the Gas Town merge queue, not by pushing to `main` directly. The
merge queue is the only test gate: Vercel builds whatever lands on `main` and does not run the tests.

- **Production branch:** `main`. Each push to `main` shows up as a "Production" deployment by `vercel[bot]` on the
  commit in GitHub (checked 2026-11-26: the live site matched `main`).
- **Previews:** Vercel also builds a preview for every other pushed branch, including the merge queue's `polecat/*`
  branches. They get `*.vercel.app` URLs only and never touch the production domain.
- **Node version:** `engines.node` in `package.json` (`22.x`). Vercel uses it in place of the project's own setting.
- **Other Vercel projects:** the `wal33d` Vercel CLI login cannot see `waleed-gudahs-projects`. Its teams
  `wal33ds-projects` and `somnus-labs` hold older projects named `somnuslabs-frontend` and `somnuslabs-web-frontend`
  that are not linked to this repository and have no deployments. They do not serve the site.

Environment variables (set in the Vercel project; names only):

| Name               | Used by                                                                                                        |
| ------------------ | -------------------------------------------------------------------------------------------------------------- |
| `SENDGRID_API_KEY` | `src/app/api/subscribeUser/route.ts`: required for the sign-up to work                                         |
| `SENDGRID_LIST_ID` | the same route: the mailing list contacts are added to (optional; defaults to the Somnus Labs newsletter list) |

The sign-up route answers the browser with `{ ok: true }` or `{ ok: false, error }` only; SendGrid's own replies and
errors go to the server log. It refuses posts from other sites, ignores sign-ups that fill the form's hidden field, and
allows 5 sign-ups per client address per 10 minutes. That limit is kept in memory per serverless instance, so it slows a
script down rather than capping it.

## Where things are

| Path                  | What                                                                                                                                                      |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/app/`            | Pages and routes: home, `products/[slug]/`, `contact/`, `blog/`, `privacy/`, `terms/`, `sms/`, `rss.xml`, `sitemap.ts`, `robots.ts`, `api/subscribeUser/` |
| `src/lib/products.ts` | Product catalog: copy, links, and the on-site `/products/[slug]` paths                                                                                    |
| `src/lib/site.ts`     | Site name, URL, the live product list and default metadata                                                                                                |
| `src/lib/posts.ts`    | Blog posts (content lives in code, not a CMS)                                                                                                             |
| `src/lib/legal.ts`    | Legal name, address and the carrier SMS wording used by the legal pages                                                                                   |
| `src/components/`     | Header, footer, legal page layouts, sign-up form, UI pieces                                                                                               |
| `public/`             | Images, the Open Graph image, `llms.txt` and `ai.txt`                                                                                                     |
| `next.config.js`      | Image settings and permanent redirects for retired blog posts                                                                                             |

There is no separate docs folder; this README and the comments in `src/lib/` are the documentation.

## License

Private. Copyright Somnus Labs Inc. All rights reserved.
