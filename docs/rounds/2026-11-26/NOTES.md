# Somnus Labs site round, 2026-11-26

Walked the local site (Next.js dev server) as a new visitor at 1440x900 and 390x844.
No production data, no paid API. Screenshots in this folder are the full page unless the name says otherwise.

Flows: home, products, contact, privacy, terms, SMS, and the blog (linked from the header).

## What the walk found

There is no page per product. `/products/deskwork`, `/products/magicreply`, `/products/cmaforge`, `/products/arv-analyzer`, `/products/plantvision`, and `/products/obd-droid` all render the same "Page not found" screen as `/contact`. One shot of that screen is saved for each viewport (`contact-missing--*.png`). The home page is one long page: product chips in the hero and the footer leave somnuslabs.com immediately.

| Shot | Viewport | What it shows |
|---|---|---|
| `home--1440x900.png` | 1440x900 | Home, full page |
| `home--390x844.png` | 390x844 | Home, full page |
| `home-products--390x844.png` | 390x844 | Home, products in view |
| `home-contact--1440x900.png` | 1440x900 | Home, contact area |
| `home-contact--390x844.png` | 390x844 | Home, contact area |
| `home-mobile-menu--390x844.png` | 390x844 | Header menu open |
| `home-contact-invalid-email--390x844.png` | 390x844 | Subscribe form after an invalid email |
| `contact-missing--1440x900.png` | 1440x900 | `/contact` and every `/products/*` slug |
| `contact-missing--390x844.png` | 390x844 | Same not-found page |
| `privacy--*.png`, `terms--*.png`, `sms--*.png` | both | Legal pages |
| `blog--*.png` | both | Blog index |

The phone layout does not scroll sideways. The open menu covers the headline, which is what a menu does. Legal pages are readable and use one support address.

## Friction, ranked by what it costs a signup or a paying customer

1. **No product page, and the first product links leave the site.** A visitor cannot compare products, share one link, or read who a product is for without landing on a different domain. Hero chips and footer names go straight off-site, in the same tab.
2. **Contact is a newsletter, and the site has two email addresses.** Header "Contact" scrolls to "Get updates". `/contact` is a 404. The form offers "Private demo slots" and "demos" but only collects an email. The home page prints `info@somnuslabs.com`. Privacy, terms, and SMS print `hello@somnuslabs.com`. A person who wants to buy or ask a question can miss the inbox that the legal pages name.
3. **"Five live products" sits on a grid of six.** OBD-Droid is open source and not something you sign up for, but it is in the same grid as Deskwork and MagicReply. The count and the heading disagree with the cards.
4. **PlantVision still promises WhatsApp.** The home card says the browser. The blog post, its tags, and the schema summary still say WhatsApp. Someone who arrives from the blog looks for a channel the product page no longer offers.
5. **The subscribe form hides failure.** An invalid email produced no on-page message in the phone shot (the browser tooltip, if any, is not in the page). If the mailing-list API is unset, the response names the server setting. The form collects an email and does not link to the privacy policy.

## Fixes in this bead

Each item above is one commit, with a test. Checked again locally after the fixes, at the same two sizes. Those shots are in `after/`.

1. Each product has `/products/[slug]`. Hero chips, card titles, the footer, and Details stay on this site. Visit opens the product site in a new tab.
2. `/contact` is a real page. The public address is hello@somnuslabs.com, the same address as the legal pages. Picking a product sets the email subject. The home section no longer offers private demo slots.
3. The five live products are the only cards under that heading. OBD-Droid is under "Free to use, not a signup".
4. The PlantVision blog post and the schema summary no longer say WhatsApp.
5. An invalid email shows "Please enter a valid email address." on the page. The form links to the privacy policy. If the mailing list is not configured, the response tells the visitor to email hello@somnuslabs.com and does not name the server setting.

## Filed, not fixed in this round

- sw-y2e: Why Somnus cards are labeled Shield, Data, and Launch. Shot: `home--1440x900.png`.
- sw-lft: PromptNexus is on the blog and missing from the product list. Shot: `blog--1440x900.png`.
- sw-hpq: Blog index does not mention Deskwork or ARV Analyzer. Shot: `blog--390x844.png`.
- sw-45y: Coming-soon cards do not use the logos already in public/images. Shot: `home--1440x900.png`.
- sw-5nv: Home headline does not name the products. Shot: `home--1440x900.png`.
