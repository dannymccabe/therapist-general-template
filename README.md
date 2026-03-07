# Therapist General Template

A neutral, conversion-focused website template for private therapy practices. The starting point for all therapist website builds.

## What it is

A single-page marketing site for independent therapists and counsellors. It covers everything a prospective client needs to decide to book — from a clear hero and approach section through to an inline Cal.com booking calendar.

This repo is the base layer. Fork it to create a named template (e.g. Hearth, Oak, Slate) with a locked visual identity, or fork the named template to build a client site.

All site content lives in a single file (`content.ts`). Adapting for a new client means editing that file and swapping a handful of assets — no component code should need to change.

---

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Booking | Cal.com via `@calcom/embed-react` |
| Contact form | Resend API (`/api/contact`) |
| Fonts | Cormorant Garamond (display) + Jost (body) via `next/font` |
| Icons | Lucide React |
| Deployment | Vercel |

---

## Page sections (in order)

1. **Nav** — logo + mobile menu
2. **Hero** — full-screen image, headline, CTA button
3. **TrustBar** — three trust indicators (e.g. registration body, years in practice, format)
4. **WhoThisIsFor** — empathetic copy block
5. **Approach** — how the therapist works, with modality tags
6. **About** — bio with portrait image
7. **Testimonials** — two client quotes
8. **FAQ** — accessible accordion
9. **BookingCta** — inline Cal.com calendar embed
10. **Footer** — registration info, contact, crisis resources, legal links

---

## Adapting for a new client

All content is defined in `content.ts` at the project root. Start there, then work through the asset checklist below.

### 1. `content.ts` — content and configuration

Edit the `siteContent` object. Key fields:

```ts
practice: {
  name: "Practice Name",
  therapistName: "First name",
  email: "hello@example.com",
  country: "UK",                        // "UK" | "Ireland" | "US" — controls crisis resources in footer
  city: "London",
  registrationBody: "BACP",
  registrationNumber: "123456",
  calNamespace: "hearth",               // internal identifier, can leave as-is
  calLink: "username/event-slug",       // your Cal.com link path (from cal.com/username/event)
  sessionFee: "£75",
  sessionLength: "50 minutes",
  slidingScale: false,
  format: "Both",                       // "Online" | "In person" | "Both"
  locationIfInPerson: "Central London",
  acceptingClients: "Yes",              // "Yes" | "Limited" | "Waitlist"
  freeConsultation: "Yes — 20 mins",
}
```

Then update `hero`, `trustBar`, `whoThisIsFor`, `approach`, `about`, `testimonials`, `faq`, `bookingCta`, and `footer` sections with client-specific copy.

### 2. Images — `public/images/`

| File | What it is |
|---|---|
| `hero.svg` → replace with `hero.png/jpg` | Full-screen hero background (landscape) |
| `about.svg` → replace with `about.png/jpg` | Therapist portrait or secondary image (portrait orientation) |
| `services.svg` → replace with `services.png/jpg` | Approach section image |
| `logo-placeholder.svg` → replace with actual logo | Practice logo files (colour + mono variants) |

Update the filenames in `components/Nav.tsx`, `components/Hero.tsx`, and `components/Approach.tsx` to match, or keep the same filenames by replacing files in place.

### 3. Favicon

Replace `public/favicon.svg` with the template or brand favicon:

```svg
<!-- Black circle (default) -->
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <circle cx="16" cy="16" r="15" fill="#0A0A0A"/>
</svg>
```

### 4. Cal.com booking link

Update `calLink` in `content.ts`:

```ts
calLink: "your-username/your-event-slug",
```

The value is the path from your Cal.com URL — e.g. for `https://cal.com/jane-smith/initial-consultation` use `"jane-smith/initial-consultation"`.

### 5. Colours

Colours are CSS custom properties in `app/globals.css`. This template ships with a neutral black-and-grey palette. Replace the values with the locked palette for your named template:

```css
--color-bg-primary      /* Primary background */
--color-bg-secondary    /* Section alternates */
--color-border          /* Borders, dividers */
--color-text-primary    /* Headlines, primary text */
--color-text-secondary  /* Body text, secondary */
--color-accent          /* CTAs, highlights */
--color-accent-hover    /* Hover states */
--color-accent-sage     /* Secondary accent */
--color-gold            /* Detail accent — use sparingly */
--color-dark            /* Hero overlay, darkest elements */
```

### 6. Fonts

Fonts are loaded in `app/layout.tsx` via `next/font`. To change:

- **Display font** (headlines): replace `Cormorant_Garamond` import and update `--font-cormorant`
- **Body font**: replace `Jost` import and update `--font-jost`

### 7. Legal pages

- `app/privacy-policy/page.tsx` — update practice name, email, and data processing details
- `app/cookie-policy/page.tsx` — update if not using GTM/GA4
- `app/terms/page.tsx` — update fees, cancellation policy, registration details, governing jurisdiction

### 8. Contact form (Resend)

The contact form at `/api/contact` uses [Resend](https://resend.com). Add the API key as an environment variable in Vercel:

```
RESEND_API_KEY=re_xxxxxxxxxxxx
```

The sending address in `app/api/contact/route.ts` may also need updating to match a verified Resend domain.

### 9. Footer — crisis resources

Crisis lines are hardcoded by country in `components/Footer.tsx`. The correct resources are shown automatically based on `country` in `content.ts`. To add a country or change numbers, edit the `crisisResources` map at the top of that file.

---

## Development

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build check
```

## Environment variables

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | Yes (for contact form) | From resend.com dashboard |

---

Built by [Karv Web Studio](https://www.karvwebstudio.com) — General template base layer.
