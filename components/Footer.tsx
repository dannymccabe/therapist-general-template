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
    <footer aria-label="Site footer" className="border-t py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* Practice info */}
          <div>
            <p className="text-sm font-medium mb-3">{name}</p>
            <p className="text-sm leading-relaxed">
              {registrationBody} Registered
              <br />
              Membership No. {registrationNumber}
              <br />
              {siteContent.footer.professionalIndemnity}
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-medium mb-3">Contact</p>
            <a href={`mailto:${email}`} className="text-sm">{email}</a>
            <div className="mt-4 flex flex-wrap gap-4">
              <a href="/privacy-policy" className="text-sm underline underline-offset-2">
                Privacy Policy
              </a>
              <a href="/cookie-policy" className="text-sm underline underline-offset-2">
                Cookie Policy
              </a>
              <a href="/terms" className="text-sm underline underline-offset-2">
                Terms &amp; Conditions
              </a>
            </div>
          </div>

          {/* Crisis resources */}
          <div>
            <p className="text-sm font-medium mb-3">In crisis?</p>
            {resources.map((r) => (
              <p key={r.label} className="text-sm mb-1">
                <a href={r.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                  {r.label}
                </a>{" "}
                — {r.number}
              </p>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-sm">&copy; {year} {name}. All rights reserved.</p>
          <p className="text-sm opacity-50">
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
