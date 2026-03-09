import { siteContent } from "@/content";

const crisisResources: Record<string, { label: string; number: string; url: string }[]> = {
  UK: [{ label: "Samaritans", number: "116 123", url: "https://www.samaritans.org" }],
  Ireland: [
    { label: "Samaritans", number: "116 123", url: "https://www.samaritans.org" },
    { label: "Pieta", number: "1800 247 247", url: "https://www.pieta.ie" },
  ],
  US: [
    {
      label: "988 Suicide and Crisis Lifeline",
      number: "988",
      url: "https://988lifeline.org",
    },
  ],
};

export default function Footer() {
  const { country, name, registrationBody, registrationNumber, email } =
    siteContent.practice;
  const resources = crisisResources[country] ?? crisisResources["UK"];
  const year = new Date().getFullYear();

  return (
    <footer
      aria-label="Site footer"
      className="py-12"
      style={{
        background: "var(--color-bg-alt)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* Practice info */}
          <div>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "var(--color-text-primary)" }}
            >
              {name}
            </p>
            <p
              className="text-sm font-light leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {registrationBody} Registered
              <br />
              Membership No. {registrationNumber}
              <br />
              {siteContent.footer.professionalIndemnity}
            </p>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "var(--color-text-primary)" }}
            >
              Contact
            </p>
            <a
              href={`mailto:${email}`}
              className="text-sm font-light transition-colors duration-200"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {email}
            </a>
            <div className="mt-4 flex flex-wrap gap-4">
              {[
                { href: "/privacy-policy", label: "Privacy Policy" },
                { href: "/cookie-policy", label: "Cookie Policy" },
                { href: "/terms", label: "Terms & Conditions" },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="text-xs font-medium underline underline-offset-2"
                  style={{ color: "var(--color-text-tertiary)" }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Crisis resources */}
          <div>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "var(--color-text-primary)" }}
            >
              In crisis?
            </p>
            {resources.map((r) => (
              <p key={r.label} className="text-sm font-light mb-1" style={{ color: "var(--color-text-secondary)" }}>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2"
                  style={{ color: "var(--color-accent)" }}
                >
                  {r.label}
                </a>{" "}
                — {r.number}
              </p>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <p className="text-xs font-light" style={{ color: "var(--color-text-tertiary)" }}>
            &copy; {year} {name}. All rights reserved.
          </p>
          <p className="text-xs font-light" style={{ color: "var(--color-text-tertiary)" }}>
            Site by{" "}
            <a
              href="https://www.karvwebstudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              Karv Web Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
