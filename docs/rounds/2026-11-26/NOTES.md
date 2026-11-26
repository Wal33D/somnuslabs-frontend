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

## Filed, not fixed in this round

- The "Why Somnus" cards label themselves Shield, Data, and Launch.
- PromptNexus has a blog post and a visit link, and it is not in the product list on the home page.
- The blog index does not cover Deskwork or ARV Analyzer.
- ListingPhoto and ListingReels cards do not use the logos already in `public/images/`.
- The hero headline talks about shipping and brand. The sentence under it is the one that names the products.

## Fixes in this bead

Each of the five items above is one later commit, with a test.
