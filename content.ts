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
    therapistName: "[Practitioner Name]",
    email: "[hello@practice.com]",
    country: "UK",
    city: "[City]",
    registrationBody: "[Registration Body]",
    registrationNumber: "[000000]",
    calNamespace: "[cal-namespace]",
    calLink: "[cal-username/session-type]",
    sessionFee: "[Fee per session]",
    sessionLength: "[Session length]",
    slidingScale: false,
    format: "Both",
    locationIfInPerson: "[City or area]",
    acceptingClients: "Yes",
    freeConsultation: "Yes — 20 mins",
  },
  hero: {
    headline: "[Headline — address the visitor's primary concern, not your credentials]",
    subheadline:
      "[One to two sentences. State clearly who you work with and how you deliver your service.]",
    cta: "Book a free consultation",
  },
  trustBar: {
    items: [
      "[Credential or certification]",
      "[X]+ years of experience",
      "[Service format — remote, in person, or both]",
    ],
  },
  whoThisIsFor: {
    heading: "[Section heading — who is this service for?]",
    body: [
      "[Opening paragraph — describe the situation or challenge your ideal client is facing. Be specific and direct.]",
      "[Second paragraph — outline what is getting in the way for them and why they have not yet found a solution.]",
      "[Third paragraph — a clear, low-pressure invitation. What is the first step they can take?]",
    ],
  },
  approach: {
    heading: "[Section heading — how do you work?]",
    body: [
      "[First paragraph — describe your working method and what a client can expect from sessions with you.]",
      "[Second paragraph — explain the structure of your service and what you focus on during your work together.]",
      "[Third paragraph — state the core principle or value that underpins your practice.]",
    ],
    modalities: ["[Method or framework 1]", "[Method or framework 2]", "[Method or framework 3]"],
  },
  about: {
    heading: "[Section heading — who are you?]",
    body: [
      "[First paragraph — describe your background and what led you to this work. Keep it professional and human.]",
      "[Second paragraph — outline your qualifications, years of experience, and any relevant accreditations.]",
      "[Third paragraph — add a brief personal note. What do you care about most in your work?]",
    ],
    imageSrc: "/images/placeholder.svg",
    imageAlt: "[Descriptive alt text for the practitioner's photo]",
  },
  testimonials: [
    {
      quote:
        "[Client testimonial — one or two sentences in the client's own words. Keep it specific and authentic.]",
      attribution: "[Client, location or service format]",
    },
    {
      quote:
        "[Second testimonial — choose a different focus or outcome from the first to show range.]",
      attribution: "[Client, location or service format]",
    },
  ],
  faq: [
    {
      question: "What is the cost per session?",
      answer:
        "[State the fee clearly. Include session length. Note whether a sliding scale or concessions are available.]",
    },
    {
      question: "What happens in the first session?",
      answer:
        "[Describe what a new client can expect. Reassure them that they do not need to have everything prepared in advance.]",
    },
    {
      question: "How do I know if this is right for me?",
      answer:
        "[Address the uncertainty a prospective client may feel. Explain how the free consultation helps them decide without commitment.]",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "[State the notice period required and what happens if a session is cancelled late. Be clear and direct.]",
    },
    {
      question: "Is everything I share kept confidential?",
      answer:
        "[Confirm confidentiality and name any standard exceptions. Transparency here builds trust.]",
    },
    {
      question: "Do you offer remote sessions?",
      answer:
        "[State whether sessions are available online, in person, or both. If in person, name the location.]",
    },
    {
      question: "How long does the process typically take?",
      answer:
        "[Give an honest answer. Avoid specific guarantees. Mention that you review progress together at regular intervals.]",
    },
  ],
  bookingCta: {
    heading: "[Heading — invite the visitor to take the next step, without pressure]",
    subheading:
      "[One sentence describing what the initial consultation involves and what they can expect.]",
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
