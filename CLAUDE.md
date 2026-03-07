CLAUDE.md — Therapist General Template

## WHAT THIS IS

This is a general-purpose therapist website template. It contains the full tech stack, component structure, and page layout used across all therapist website builds. It is the neutral starting point — no locked visual identity, no client-specific content.

When building a new template (e.g. Hearth, Oak, Slate), fork from this repo and apply the visual identity on top. When building a client site, fork from the relevant template repo and populate `content.ts`.

---

## PROJECT STRUCTURE

Next.js application with the following pre-wired:

- Next.js App Router (never Pages Router)
- Tailwind CSS v4 for styling
- Framer Motion for all animation
- Cal.com embed for booking
- Resend for contact form email delivery
- A contact form pre-built and submitting to the therapist's email
- A `content.ts` file as the single source of truth for all site content

All site content lives in `content.ts` as a typed TypeScript object. There is no CMS. The agency owner updates content by editing this file and redeploying to Vercel. The therapist never touches the codebase.

---

## CLIENT PROFILE

Populate this section from the client questionnaire before each build.

```
NAME:                   [Full name]
PRACTICE NAME:          [Practice name or same as above]
COUNTRY:                [UK / Ireland / US]
CITY/REGION:            [Location]
REGISTRATION BODY:      [BACP / UKCP / IACP / ICP / NBCC / State licensed]
REGISTRATION NUMBER:    [Number]
YEARS IN PRACTICE:      [Less than 1 / 1–3 / 3–5 / 5+]
PRACTICE EMAIL:         [Email]
SESSION FEE:            [Fee + currency]
SESSION LENGTH:         [50 / 60 / 90 / Varies]
SLIDING SCALE:          [Yes always / Yes limited / No]
FORMAT:                 [Online / In person / Both]
LOCATION IF IN PERSON:  [Address or area]
ACCEPTING CLIENTS:      [Yes / Limited / Waitlist]
FREE CONSULTATION:      [Yes — X mins / No]
INSURANCE/EAP:          [Yes / No / Open to it]
PHOTOGRAPHY:            [Yes — provided / No — using placeholder]
LOGO:                   [Yes — provided / No — using text placeholder]
```

---

## CLIENT VOICE

Populated from questionnaire answers. This is the raw material for all copy.

```
IDEAL CLIENT DESCRIPTION:     [Q11]
ISSUES WORKED WITH:           [Q12]
CLIENT'S OWN WORDS:           [Q14]
CLIENT OUTCOMES:              [Q15]
THERAPEUTIC MODALITIES:       [Q16]
THERAPIST STYLE:              [Q17]
CORE BELIEF ABOUT THERAPY:    [Q18]
WHAT MAKES A GOOD THERAPIST:  [Q19]
WHAT A SESSION FEELS LIKE:    [Q20]
FIRST SESSION WALKTHROUGH:    [Q21]
WHY THEY BECAME A THERAPIST:  [Q22]
PERSONAL BACKGROUND:          [Q23]
WHAT THEY LOVE ABOUT WORK:    [Q24]
COLLEAGUE DESCRIPTION:        [Q25]
SLIDING SCALE APPROACH:       [Q27]
TESTIMONIALS:                 [Q38]
MEDIA/PUBLICATIONS:           [Q39]
ADDITIONAL QUALIFICATIONS:    [Q41]
ANYTHING ELSE:                [Q42]
```

---

## VISUAL DIRECTION — TO BE DEFINED PER TEMPLATE

This template ships with a neutral black-and-grey palette. When creating a named template, replace the CSS custom properties in `app/globals.css` with the locked palette for that template.

### Typography

- **Display / Headlines:** Cormorant Garamond — weight 300, italic at hero scale
- **Body / UI:** Jost — weight 300 for body, 400 for labels and nav, 500 sparingly

### Type Scale

```
Hero headline:      72–96px Cormorant, weight 300, italic, line-height 1.05
Section headline:   48–56px Cormorant, weight 400
Subheading label:   13px Jost, weight 400, uppercase, letter-spacing 0.15em
Body:               17px Jost, weight 300, line-height 1.8
Caption / label:    12px Jost, weight 400, uppercase, letter-spacing 0.12em
Nav:                13px Jost, weight 400, uppercase, letter-spacing 0.12em
```

### Colour Variables (template-level — override per build)

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

### Assets

Replace the placeholder SVGs in `public/images/` with:

- `hero.jpg` or `hero.png` — hero background image
- `about.jpg` or `about.png` — therapist portrait or secondary image
- `services.jpg` or `services.png` — approach/services section image
- `logo-colour.png` — practice logo (colour variant)
- `logo-bw.png` — practice logo (mono variant)
- `favicon.svg` or `favicon.ico` — site favicon

---

## TECH STACK — LOCKED

| Purpose   | Tool                                  |
| --------- | ------------------------------------- |
| Framework | Next.js 16+ App Router                |
| Styling   | Tailwind CSS v4                       |
| Animation | Framer Motion                         |
| Content   | `content.ts` — typed TypeScript       |
| Booking   | Cal.com embed                         |
| Forms     | Resend                                |
| Hosting   | Vercel                                |
| Images    | `next/image` with proper sizing       |
| Fonts     | `next/font` (Google Fonts)            |
| Icons     | Lucide React only                     |

**Never use:**
- Pages Router
- CSS Modules
- jQuery or any non-listed JS libraries
- Styled components
- Any animation library other than Framer Motion
- Lorem ipsum in any deliverable file
- Gradients unless explicitly specified
- Carousels or sliders anywhere

---

## PAGE STRUCTURE — LOCKED

This order mirrors the psychological journey of someone considering therapy. Do not reorder.

```
1.  NAV
2.  HERO
3.  TRUST BAR
4.  WHO THIS IS FOR
5.  APPROACH
6.  ABOUT
7.  TESTIMONIALS (if available)
8.  FAQ
9.  BOOKING CTA
10. FOOTER
```

### Section Guidance

**NAV** — Sticky. Logo left. Single CTA right: "Book a consultation". Maximum two ghost text links (About, FAQ). No hamburger on desktop. Mobile: full-screen overlay, not dropdown.

**HERO** — Full viewport height. Headline + subheadline + single CTA. Hero image as background with `--color-dark` overlay at 35% opacity. Grain texture visible. No carousel, no video, no autoplay. Headline speaks to the visitor's situation, never describes services.

**TRUST BAR** — Slim section below hero on `--color-bg-secondary`. Registration body, years experience, session format. Quiet. Reassures without interrupting flow. Jost uppercase labels.

**WHO THIS IS FOR** — Speaks directly to visitor using client's own language. No clinical language. Makes the right person feel seen. `--color-bg-primary` background.

**APPROACH** — How this therapist works. Written in second person. Warm, honest, specific. `--color-bg-secondary` background.

**ABOUT** — Personal but professional. Therapist photograph if provided. Not a CV. Not a qualifications list. `--color-bg-primary` background.

**TESTIMONIALS** — If available. Maximum 3. Anonymised. No star ratings, no carousels. Static, Cormorant italic for quote text. `--color-bg-secondary` background.

**FAQ** — Framer Motion accordion. 5–8 questions. Real objections: cost, whether it will work, first session, cancellation, confidentiality. `--color-bg-primary` background.

**BOOKING CTA** — Full width. `--color-dark` background with grain texture. Low pressure headline. Cal.com inline embed. No form here.

**FOOTER** — Practice name, registration details, professional indemnity confirmation, privacy policy link, cookie policy link, contact email. Country-appropriate crisis resources. Small, tasteful, always present.

---

## ANIMATION RULES

All animation via Framer Motion only.

**Animate:**
- Scroll-triggered fade-up on section content — subtle, staggered (0.1s between children)
- Nav opacity transition on scroll
- Button hover — background transition only, no scale
- Mobile menu open/close
- FAQ accordion expand/collapse

**Animation values:**
```
Reveal duration:      0.6s
Hover duration:       0.4s
Easing:               easeOut for reveals, easeInOut for transitions
Stagger delay:        0.1s between children
Scroll threshold:     0.15
Initial y offset:     20px
```

**Never animate:**
- Page-level transitions
- Parallax on images
- Continuous loops
- Anything moving while user is reading

**Always implement:**
```ts
const { prefersReducedMotion } = useReducedMotion()
// Show final state immediately if true
```

---

## COPY RULES

### Voice
- Second person always (you, your)
- Warm but direct — never gushing
- Short sentences. One idea per sentence.
- No paragraph longer than 3 sentences in body copy
- Active voice throughout

### Banned Words — never use under any circumstances:
- Safe space
- Journey / healing journey
- Holistic
- Transform / transformation
- Empower / empowerment
- Passionate about
- I am here for you
- You are not alone
- Bespoke / tailored
- Don't hesitate to
- Reach out

### CTA Copy
- **Primary:** Book a free consultation
- **Secondary:** Learn more about [specific thing]
- **Never:** Get in touch / Contact me / Start your journey

### Headlines
- Speak to visitor's situation, not therapist's credentials
- Lead with recognition — make visitor feel understood first

---

## CONTENT MANAGEMENT — content.ts

All content is managed through `content.ts` at the project root. Never hardcode content in components.

`satisfies SiteContent` ensures type safety without losing inference.

---

## PERFORMANCE AND ACCESSIBILITY

### Images
- Always `next/image`
- Always descriptive alt text — empty string for decorative only
- Hero image: provide multiple sizes, eager load
- All other images: lazy load

### Accessibility
- Semantic HTML always — `nav`, `main`, `section`, `article`, `aside`, `footer`
- Every interactive element keyboard accessible
- Focus styles visible and styled — never `outline: none` without replacement
- Colour contrast minimum WCAG AA
- ARIA labels on icon-only buttons

### Performance Targets
- Lighthouse score 90+
- No layout shift on font load — use `next/font` with `display: swap`
- No unoptimised images
- No unused dependencies

---

## PRIVACY AND COMPLIANCE

Every build must include:

- `/privacy-policy` page rendered from `content.ts`
- `/cookie-policy` page rendered from `content.ts`
- Cookie consent banner — simple, no dark patterns
- Footer registration details
- Footer crisis resources (country appropriate):
  - **UK:** Samaritans 116 123
  - **Ireland:** Samaritans 116 123 / Pieta 1800 247 247
  - **US:** 988 Suicide and Crisis Lifeline
- No Google Analytics — use Plausible if analytics requested
- No form submission storage in any database

---

## PROJECT NAMING CONVENTION

```
Repository:     [lastname]-[country]-[template-name]
Vercel project: [lastname]-[country]-therapy
Domain:         [practicename].com / .co.uk / .ie
Content file:   content.ts
Assets folder:  public/images/
```

---

## HOW TO START EACH CLIENT BUILD

1. Fork this repo (or the relevant named template repo)
2. Read this CLAUDE.md in full
3. Populate CLIENT PROFILE and CLIENT VOICE sections
4. Confirm photography situation — provided or using placeholders
5. Confirm logo situation — provided or using text placeholder
6. Apply the visual identity to `app/globals.css`
7. Propose copy for hero headline only — get confirmation before building
8. Build in this order: layout shell → nav → hero → remaining sections → footer → animations last
9. Write copy as you build each section, drawing directly from CLIENT VOICE
10. Never present a section as complete with placeholder copy

---

## ENV VARS NEEDED

```
RESEND_API_KEY    — from resend.com dashboard
```

---

## BUILD/DEV COMMANDS

```bash
npm run dev       # dev server
npm run build     # production build check
```

---

## KEY GOTCHAS

- Resend must be instantiated INSIDE the handler (lazy), not at module level — build fails otherwise
- `@/*` alias maps to `./*` (root), not `./src/*`
- `content.ts` is at project root, not inside `src/`
- Tailwind v4 uses `@import "tailwindcss"` not `@tailwind base` etc
- Animation: always check `useReducedMotion()`, show final state immediately if true

---

## WHAT CLAUDE MUST NEVER DO

- Change the typography pairing
- Reorder the page sections
- Use lorem ipsum in any deliverable file
- Introduce a dependency not in the approved stack without flagging
- Add gradients
- Use carousels or sliders
- Write copy using any banned phrase
- Build a Pages Router structure
- Add Google Analytics
- Use stock photography
- Hardcode content in components
- Skip reduced motion implementation
- Add social media links unless specifically requested
- Make the booking CTA aggressive or urgent in tone

---

*This file is the single source of truth for every build using this template. If something is not covered here, flag it before proceeding.*
