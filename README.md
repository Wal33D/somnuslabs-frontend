# Somnus Labs website

The company website for Somnus Labs at [somnuslabs.com](https://www.somnuslabs.com). It lists the
products (Deskwork, MagicReply, CMAForge, ARV Analyzer, PlantVision, OBD-Droid), hosts a short blog,
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

The site is hosted on Vercel. Vercel's Git integration builds and deploys the `main` branch of this
repository; there is no deploy script or GitHub workflow in the repo. Changes reach `main` through
the Gas Town merge queue, not by pushing to `main` directly.

Environment variables (set in the Vercel project; names only):

| Name               | Used by                                                                |
| ------------------ | ---------------------------------------------------------------------- |
| `SENDGRID_API_KEY` | `src/app/api/subscribeUser/route.ts`: required for the sign-up to work |
| `SENDGRID_LIST_ID` | the same route: the mailing list contacts are added to (optional)      |

## Where things are

| Path                  | What                                                                                                                                          |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/app/`            | Pages and routes: home, `products/[slug]/`, `blog/`, `privacy/`, `terms/`, `sms/`, `rss.xml`, `sitemap.ts`, `robots.ts`, `api/subscribeUser/` |
| `src/lib/products.ts` | Product catalog: copy, links, and the on-site `/products/[slug]` paths                                                                        |
| `src/lib/site.ts`     | Site name, URL, the live product list and default metadata                                                                                    |
| `src/lib/posts.ts`    | Blog posts (content lives in code, not a CMS)                                                                                                 |
| `src/lib/legal.ts`    | Legal name, address and the carrier SMS wording used by the legal pages                                                                       |
| `src/components/`     | Header, footer, legal page layouts, sign-up form, UI pieces                                                                                   |
| `public/`             | Images, the Open Graph image, `llms.txt` and `ai.txt`                                                                                         |
| `next.config.js`      | Image settings and permanent redirects for retired blog posts                                                                                 |

There is no separate docs folder; this README and the comments in `src/lib/` are the documentation.

## License

Private. Copyright Somnus Labs Inc. All rights reserved.
