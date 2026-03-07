import { siteContent } from "@/content";

export const metadata = {
  title: `Privacy Policy — ${siteContent.practice.name}`,
};

export default function PrivacyPolicy() {
  return (
    <main
      style={{ backgroundColor: "var(--color-bg-primary)" }}
      className="min-h-screen pt-32 pb-24"
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <h1
          className="mb-12"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(40px, 5vw, 64px)",
            fontWeight: 300,
            lineHeight: 1.1,
            color: "var(--color-text-primary)",
          }}
        >
          Privacy Policy
        </h1>

        <div
          className="prose max-w-none"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {siteContent.pages.privacyPolicy ? (
            <div dangerouslySetInnerHTML={{ __html: siteContent.pages.privacyPolicy }} />
          ) : (
            <p>
              This privacy policy will be populated before the site goes live.
              Please contact {siteContent.practice.email} with any questions.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
