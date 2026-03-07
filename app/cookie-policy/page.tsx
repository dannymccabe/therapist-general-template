import { siteContent } from "@/content";

export const metadata = {
  title: `Cookie Policy — ${siteContent.practice.name}`,
};

const h2Style = {
  fontFamily: "var(--font-cormorant)",
  fontSize: "clamp(22px, 2.5vw, 28px)",
  fontWeight: 400,
  lineHeight: 1.2,
  color: "var(--color-text-primary)",
};

const pStyle = {
  color: "var(--color-text-secondary)",
  lineHeight: "1.8",
  marginBottom: "1rem",
};

export default function CookiePolicy() {
  const { name, email } = siteContent.practice;

  return (
    <main
      style={{ backgroundColor: "var(--color-bg-primary)" }}
      className="min-h-screen pt-32 pb-24"
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <h1
          className="mb-3"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(40px, 5vw, 64px)",
            fontWeight: 300,
            lineHeight: 1.1,
            color: "var(--color-text-primary)",
          }}
        >
          Cookie Policy
        </h1>
        <p className="mb-12 text-[13px]" style={{ color: "var(--color-text-secondary)", opacity: 0.6 }}>
          Last updated: March 2026
        </p>

        <div className="space-y-8" style={{ fontSize: "15px" }}>

          <p style={pStyle}>
            This Cookie Policy explains how {name} uses cookies and similar tracking
            technologies on this website. By continuing to use the site, you consent to our
            use of cookies as described below.
          </p>

          {/* What are cookies */}
          <section>
            <h2 className="mb-4" style={h2Style}>What are cookies?</h2>
            <p style={pStyle}>
              Cookies are small text files stored on your device when you visit a website.
              They help the site function correctly, remember your preferences, and provide
              us with information about how the site is used.
            </p>
          </section>

          {/* Cookies we use */}
          <section>
            <h2 className="mb-4" style={h2Style}>Cookies we use</h2>

            <h3 className="mb-2 font-[400]" style={{ color: "var(--color-text-primary)", fontSize: "15px", letterSpacing: "0.05em" }}>
              Essential cookies
            </h3>
            <p style={pStyle}>
              These cookies are necessary for the website to function and cannot be
              switched off. They do not store any personally identifiable information and
              are typically set in response to actions you take, such as setting your
              privacy preferences.
            </p>

            <h3 className="mb-2 mt-6 font-[400]" style={{ color: "var(--color-text-primary)", fontSize: "15px", letterSpacing: "0.05em" }}>
              Google Tag Manager
            </h3>
            <p style={pStyle}>
              We use Google Tag Manager to manage and deploy marketing and analytics tags
              on this website. Google Tag Manager itself does not set cookies or collect
              personal data — it simply loads other scripts. However, the tags it loads
              (such as Google Analytics) may set cookies as described below.
            </p>

            <h3 className="mb-2 mt-6 font-[400]" style={{ color: "var(--color-text-primary)", fontSize: "15px", letterSpacing: "0.05em" }}>
              Google Analytics (GA4)
            </h3>
            <p style={pStyle}>
              We use Google Analytics to understand how visitors interact with this
              website. The data collected is aggregated and anonymous — we cannot identify
              individual users. Google Analytics cookies include:
            </p>
            <ul className="mb-4 pl-5 space-y-2" style={{ color: "var(--color-text-secondary)", listStyleType: "disc" }}>
              <li><strong className="font-[400]">_ga</strong> — Distinguishes unique users. Expires after 2 years.</li>
              <li><strong className="font-[400]">_ga_[ID]</strong> — Persists session state. Expires after 2 years.</li>
              <li><strong className="font-[400]">_gid</strong> — Distinguishes users within a 24-hour window. Expires after 24 hours.</li>
            </ul>
            <p style={pStyle}>
              Google&apos;s privacy policy is available at{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:opacity-70 transition-opacity"
                style={{ color: "var(--color-accent)" }}
              >
                policies.google.com/privacy
              </a>
              . You can opt out of Google Analytics tracking by installing the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:opacity-70 transition-opacity"
                style={{ color: "var(--color-accent)" }}
              >
                Google Analytics Opt-out Browser Add-on
              </a>
              .
            </p>
          </section>

          {/* Managing cookies */}
          <section>
            <h2 className="mb-4" style={h2Style}>Managing cookies</h2>
            <p style={pStyle}>
              You can control and delete cookies through your browser settings. Disabling
              cookies may affect how certain parts of this website function. To manage
              cookies in your browser, visit the relevant support page:
            </p>
            <ul className="mb-4 pl-5 space-y-2" style={{ color: "var(--color-text-secondary)", listStyleType: "disc" }}>
              {[
                { label: "Google Chrome", href: "https://support.google.com/chrome/answer/95647" },
                { label: "Mozilla Firefox", href: "https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" },
                { label: "Safari", href: "https://support.apple.com/en-gb/guide/safari/sfri11471/mac" },
                { label: "Microsoft Edge", href: "https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge-168dab11-0753-043d-7c16-ede5947fc64d" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:opacity-70 transition-opacity"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <p style={pStyle}>
              You can also find general guidance on managing cookies at{" "}
              <a
                href="https://www.allaboutcookies.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:opacity-70 transition-opacity"
                style={{ color: "var(--color-accent)" }}
              >
                allaboutcookies.org
              </a>
              .
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="mb-4" style={h2Style}>Changes to this policy</h2>
            <p style={pStyle}>
              We may update this Cookie Policy from time to time to reflect changes in
              technology, regulation, or our business practices. Any changes will be
              posted on this page with a revised date.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="mb-4" style={h2Style}>Contact</h2>
            <p style={pStyle}>
              If you have any questions about our use of cookies, please contact us at{" "}
              <a
                href={`mailto:${email}`}
                className="underline underline-offset-2 hover:opacity-70 transition-opacity"
                style={{ color: "var(--color-accent)" }}
              >
                {email}
              </a>
              .
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
