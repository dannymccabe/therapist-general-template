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
      style={{
        backgroundColor: "var(--color-bg-secondary)",
        borderTop: "1px solid var(--color-border)",
      }}
      className="py-12"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* Practice info */}
          <div>
            <p
              className="text-[12px] font-[400] uppercase tracking-[0.12em] mb-3"
              style={{ color: "var(--color-text-primary)" }}
            >
              {name}
            </p>
            <p
              className="text-[13px] font-[300] leading-relaxed"
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
              className="text-[12px] font-[400] uppercase tracking-[0.12em] mb-3"
              style={{ color: "var(--color-text-primary)" }}
            >
              Contact
            </p>
            <a
              href={`mailto:${email}`}
              className="text-[13px] font-[300] transition-colors duration-400"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {email}
            </a>
            <div className="mt-4 flex flex-wrap gap-4">
              <a
                href="/privacy-policy"
                className="text-[12px] font-[300] underline underline-offset-2 transition-colors duration-400 hover:opacity-70"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Privacy Policy
              </a>
              <a
                href="/cookie-policy"
                className="text-[12px] font-[300] underline underline-offset-2 transition-colors duration-400 hover:opacity-70"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Cookie Policy
              </a>
              <a
                href="/terms"
                className="text-[12px] font-[300] underline underline-offset-2 transition-colors duration-400 hover:opacity-70"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Terms &amp; Conditions
              </a>
            </div>
          </div>

          {/* Crisis resources */}
          <div>
            <p
              className="text-[12px] font-[400] uppercase tracking-[0.12em] mb-3"
              style={{ color: "var(--color-text-primary)" }}
            >
              In crisis?
            </p>
            {resources.map((r) => (
              <p
                key={r.label}
                className="text-[13px] font-[300] mb-1"
                style={{ color: "var(--color-text-secondary)" }}
              >
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:opacity-70 transition-opacity"
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
          <p
            className="text-[12px] font-[300]"
            style={{ color: "var(--color-text-secondary)" }}
          >
            &copy; {year} {name}. All rights reserved.
          </p>
          <p className="text-[12px] font-[300]" style={{ color: "var(--color-text-secondary)", opacity: 0.5 }}>
            Site by{" "}
            <a
              href="https://www.karvwebstudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:opacity-70 transition-opacity"
            >
              Karv Web Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
