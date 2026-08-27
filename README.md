# Mwangaza Children's Centre — website

A single-page site (Home, About, Programs, Gallery, Our Impact, Donate, Volunteer/Sponsor form, Updates, Contact) built with plain HTML, CSS and JS — no build step required.

## Files
- `index.html` — all page content
- `styles.css` — design system (colors, type, layout)
- `script.js` — mobile nav, scroll reveal, animated impact counters

## Deploy to Netlify (free plan)
**Fastest way — drag and drop:**
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the folder containing these three files onto the page
3. Netlify gives you a live URL immediately (e.g. `random-name.netlify.app`)
4. In **Site settings → Domain management**, add your custom domain (`mwangazachildrenscentre.org` or `.co.ke`) and Netlify issues a free SSL certificate automatically

**Recommended way — connect a Git repo (so future edits redeploy automatically):**
1. Push these files to a GitHub repository
2. In Netlify: **Add new site → Import an existing project → GitHub**
3. Build command: leave blank · Publish directory: `/` (the repo root)
4. Deploy — every push to your main branch will auto-update the live site

## The volunteer/sponsor form already works with Netlify Forms
The form in `index.html` has `data-netlify="true"` and a honeypot field for spam. Once deployed on Netlify, submissions appear automatically under **Site → Forms** — no backend or JS needed. Turn on email notifications there so you're alerted per submission.

## Before you publish, replace these placeholders
- **M-Pesa** Paybill/Till numbers and account name (Donate section)
- **Bank** name, account number, branch (Donate section)
- **Phone, WhatsApp, email** (Contact section and footer)
- **Impact numbers** — the `data-count` values in the "Our Impact" `<section>` of `index.html` (Children Rescued, Graduates, Meals Served, Children Assisted, Institutions Assisted, Years of Service)
- **Gallery photos** — the six colored `.gallery-tile` blocks are stand-ins; swap them for real, consent-cleared photos of the Centre (add `<img>` tags inside each `<figure>`)
- **Board of Trustees** — replace the four placeholder `.trustee-card` blocks with real names, titles, and photos (swap `.trustee-photo` divs for `<img>` tags)
- **Publications** — link the "View Publications" button to an actual PDF newsletter or a publications page once one exists
- **Sponsor Testimonials** — replace the two placeholder quotes with real, permission-cleared sponsor testimonials
- **News cards** — replace with real updates
- **Map** — the embedded map is centered on Baringo generally; narrow the `bbox` in the iframe `src` once you have the Centre's exact coordinates

## Later additions
- **Card/international payments**: once the Centre is verified with a provider (Pesapal, Flutterwave, or Stripe are common for Kenyan NGOs), add a "Donate with card" button linking to their hosted checkout page — no site rebuild needed.
- **Real photos**: keep them optimized (under ~300KB each) so the site stays fast on mobile data.
