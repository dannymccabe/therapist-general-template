// content.ts — Single source of truth for all site content.
// Edit this file for each client build. Never hardcode content in components.

export type Country = "UK" | "Ireland" | "US";

export interface Testimonial {
  quote: string;
  attribution: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SiteContent {
  practice: {
    name: string;
    therapistName: string;
    email: string;
    country: Country;
    city: string;
    registrationBody: string;
    registrationNumber: string;
    calNamespace: string;
    calLink: string;
    sessionFee: string;
    sessionLength: string;
    slidingScale: boolean;
    format: "Online" | "In person" | "Both";
    locationIfInPerson: string;
    acceptingClients: "Yes" | "Limited" | "Waitlist";
    freeConsultation: string; // e.g. "Yes — 20 mins" or "No"
  };
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
  };
  trustBar: {
    items: [string, string, string];
  };
  whoThisIsFor: {
    heading: string;
    body: string[];
  };
  approach: {
    heading: string;
    body: string[];
    modalities: string[];
  };
  about: {
    heading: string;
    body: string[];
    imageSrc: string;
    imageAlt: string;
  };
  testimonials: Testimonial[];
  faq: FaqItem[];
  bookingCta: {
    heading: string;
    subheading: string;
  };
  footer: {
    crisisLabel: string;
    crisisNumber: string;
    crisisUrl: string;
    professionalIndemnity: string;
  };
  pages: {
    privacyPolicy: string;
    cookiePolicy: string;
  };
}

export const siteContent = {
  practice: {
    name: "[Practice Name]",
    therapistName: "[Therapist Name]",
    email: "[email@example.com]",
    country: "UK",
    city: "[City]",
    registrationBody: "[BACP / UKCP / IACP]",
    registrationNumber: "[000000]",
    calNamespace: "[cal-namespace]",
    calLink: "[cal-username/session-type]",
    sessionFee: "[£00]",
    sessionLength: "[50 minutes]",
    slidingScale: false,
    format: "Both",
    locationIfInPerson: "[Location]",
    acceptingClients: "Yes",
    freeConsultation: "Yes — 20 mins",
  },
  hero: {
    headline: "[Hero headline — speaks to visitor's situation, not therapist's credentials]",
    subheadline:
      "[One or two sentences. Who this is for and where/how you work.]",
    cta: "Book a free consultation",
  },
  trustBar: {
    items: [
      "[Registration body] Registered",
      "[X]+ years in practice",
      "[Online / In person / Both]",
    ],
  },
  whoThisIsFor: {
    heading: "[Section heading]",
    body: [
      "[First paragraph — use the client's own language. Make the right person feel seen.]",
      "[Second paragraph — describe the situation or feeling they may be experiencing.]",
      "[Third paragraph — a gentle invitation. No pressure, no urgency.]",
    ],
  },
  approach: {
    heading: "[Section heading]",
    body: [
      "[First paragraph — describe the therapeutic relationship and what it feels like.]",
      "[Second paragraph — how sessions are structured or what the therapist pays attention to.]",
      "[Third paragraph — the underlying philosophy or what they care about most.]",
    ],
    modalities: ["[Modality 1]", "[Modality 2]", "[Modality 3]"],
  },
  about: {
    heading: "[Section heading]",
    body: [
      "[First paragraph — why they became a therapist. Personal but professional.]",
      "[Second paragraph — training, years in practice, registration details.]",
      "[Third paragraph — something human. Who they are outside the therapy room.]",
    ],
    imageSrc: "/images/about.svg",
    imageAlt: "[Descriptive alt text for therapist's photo]",
  },
  testimonials: [
    {
      quote:
        "[Anonymised testimonial — one or two sentences. Client's own words.]",
      attribution: "Client, [location or 'online']",
    },
    {
      quote:
        "[Second testimonial — different tone or focus from the first.]",
      attribution: "Client, [location or 'online']",
    },
  ],
  faq: [
    {
      question: "How much does it cost?",
      answer:
        "[Session fee and length. Mention sliding scale if applicable.]",
    },
    {
      question: "What happens in the first session?",
      answer:
        "[Describe the first session. Reassure the visitor they don't need to have everything figured out.]",
    },
    {
      question: "How do I know if therapy will help?",
      answer:
        "[Honest answer. Acknowledge uncertainty. Emphasise the importance of the relationship. Mention the free consultation.]",
    },
    {
      question: "What's your cancellation policy?",
      answer:
        "[Notice period required and what happens if they cancel late. Warm but clear.]",
    },
    {
      question: "Is everything I say confidential?",
      answer:
        "[Yes, with the standard exceptions. Name them. This builds trust.]",
    },
    {
      question: "Do you offer online sessions?",
      answer:
        "[Yes/No/Both. If both, say where in-person sessions are held.]",
    },
    {
      question: "How long will I need therapy?",
      answer:
        "[Honest answer — no set timeframe. Mention regular check-ins. Avoid promises.]",
    },
  ],
  bookingCta: {
    heading: "[Low-pressure CTA headline]",
    subheading:
      "[One line. Describe the consultation. No commitment, no pressure.]",
  },
  footer: {
    crisisLabel: "In crisis? Call Samaritans",
    crisisNumber: "116 123",
    crisisUrl: "https://www.samaritans.org",
    professionalIndemnity: "Professional indemnity insurance held",
  },
  pages: {
    privacyPolicy: "",
    cookiePolicy: "",
  },
} satisfies SiteContent;
