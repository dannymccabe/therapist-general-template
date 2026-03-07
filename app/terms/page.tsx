import { siteContent } from "@/content";

export const metadata = {
  title: `Terms & Conditions — ${siteContent.practice.name}`,
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

export default function Terms() {
  const { name, email, sessionFee, sessionLength, registrationBody } = siteContent.practice;

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
          Terms &amp; Conditions
        </h1>
        <p className="mb-12 text-[13px]" style={{ color: "var(--color-text-secondary)", opacity: 0.6 }}>
          Last updated: March 2026
        </p>

        <div className="space-y-8" style={{ fontSize: "15px" }}>

          <p style={pStyle}>
            Please read these Terms and Conditions carefully before booking a session with{" "}
            {name}. By making a booking, you confirm that you have read and agree to be
            bound by these terms.
          </p>

          {/* 1. The Service */}
          <section>
            <h2 className="mb-4" style={h2Style}>1. The Service</h2>
            <p style={pStyle}>
              {name} provides individual psychotherapy and counselling sessions, available
              both in person in Central London and online via video call. Sessions are{" "}
              {sessionLength} in duration unless otherwise agreed.
            </p>
            <p style={pStyle}>
              Therapy is not a substitute for emergency medical treatment. If you are in
              crisis, please contact your GP, call emergency services (999), or reach the
              Samaritans on{" "}
              <a href="tel:116123" className="underline underline-offset-2 hover:opacity-70 transition-opacity" style={{ color: "var(--color-accent)" }}>
                116 123
              </a>
              .
            </p>
          </section>

          {/* 2. Fees and Payment */}
          <section>
            <h2 className="mb-4" style={h2Style}>2. Fees and Payment</h2>
            <p style={pStyle}>
              The standard session fee is {sessionFee} per {sessionLength}. Fees are
              reviewed periodically; you will be given a minimum of four weeks&apos; notice
              of any increase.
            </p>
            <p style={pStyle}>
              Payment is due within 24 hours of your session unless otherwise agreed.
              Accepted payment methods will be confirmed at the point of booking.
            </p>
            <p style={pStyle}>
              A limited number of reduced-fee places may be available. Please enquire if
              cost is a barrier to accessing therapy.
            </p>
          </section>

          {/* 3. Free Initial Consultation */}
          <section>
            <h2 className="mb-4" style={h2Style}>3. Free Initial Consultation</h2>
            <p style={pStyle}>
              A free 20-minute telephone or video consultation is offered so that both
              parties can assess whether working together feels like a good fit. This
              consultation does not constitute the start of a therapeutic relationship or a
              therapy session, and no fee is charged if you decide not to proceed.
            </p>
          </section>

          {/* 4. Cancellation Policy */}
          <section>
            <h2 className="mb-4" style={h2Style}>4. Cancellation and Rescheduling</h2>
            <p style={pStyle}>
              We ask for a minimum of 48 hours&apos; notice to cancel or reschedule a
              session. Sessions cancelled or missed with less than 48 hours&apos; notice
              will be charged in full, regardless of the reason.
            </p>
            <p style={pStyle}>
              In genuinely exceptional circumstances this policy may be waived at the
              therapist&apos;s discretion. If you need to cancel at short notice, please
              get in touch as soon as possible.
            </p>
          </section>

          {/* 5. Confidentiality */}
          <section>
            <h2 className="mb-4" style={h2Style}>5. Confidentiality</h2>
            <p style={pStyle}>
              Everything you share in therapy is treated as strictly confidential. Your
              information will not be disclosed to any third party without your explicit
              consent, except in the following circumstances:
            </p>
            <ul className="mb-4 pl-5 space-y-2" style={{ color: "var(--color-text-secondary)", listStyleType: "disc" }}>
              <li>Where there is a serious and credible risk of harm to yourself or another identifiable person</li>
              <li>Where disclosure is required by law or a court order</li>
              <li>In the context of professional clinical supervision (where your anonymity is preserved wherever possible)</li>
            </ul>
            <p style={pStyle}>
              These limits of confidentiality will be discussed fully during our first
              session before therapeutic work begins.
            </p>
          </section>

          {/* 6. Professional Standards */}
          <section>
            <h2 className="mb-4" style={h2Style}>6. Professional Standards</h2>
            <p style={pStyle}>
              {name} operates in accordance with the ethical framework and professional
              guidelines of the {registrationBody} (British Association for Counselling and
              Psychotherapy). Professional indemnity insurance is maintained at all times.
            </p>
            <p style={pStyle}>
              If you have a concern or complaint, please raise it with the therapist
              directly in the first instance. If it cannot be resolved to your
              satisfaction, you may refer the matter to the {registrationBody} at{" "}
              <a
                href="https://www.bacp.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:opacity-70 transition-opacity"
                style={{ color: "var(--color-accent)" }}
              >
                bacp.co.uk
              </a>
              .
            </p>
          </section>

          {/* 7. Data Protection */}
          <section>
            <h2 className="mb-4" style={h2Style}>7. Data Protection</h2>
            <p style={pStyle}>
              Your personal data is processed in accordance with our{" "}
              <a
                href="/privacy-policy"
                className="underline underline-offset-2 hover:opacity-70 transition-opacity"
                style={{ color: "var(--color-accent)" }}
              >
                Privacy Policy
              </a>{" "}
              and in compliance with UK GDPR and the Data Protection Act 2018. By booking
              a session, you consent to the collection and use of personal data to the
              extent necessary to provide the service.
            </p>
            <p style={pStyle}>
              Session bookings are managed via Cal.com. Their privacy policy is available
              at{" "}
              <a
                href="https://cal.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:opacity-70 transition-opacity"
                style={{ color: "var(--color-accent)" }}
              >
                cal.com/privacy
              </a>
              .
            </p>
          </section>

          {/* 8. Limitation of Liability */}
          <section>
            <h2 className="mb-4" style={h2Style}>8. Limitation of Liability</h2>
            <p style={pStyle}>
              To the fullest extent permitted by applicable law, {name} shall not be
              liable for any indirect, incidental, consequential, or special loss arising
              from or in connection with the use of this service. Nothing in these terms
              affects your statutory rights as a consumer under UK law.
            </p>
          </section>

          {/* 9. Changes */}
          <section>
            <h2 className="mb-4" style={h2Style}>9. Changes to These Terms</h2>
            <p style={pStyle}>
              These Terms and Conditions may be updated from time to time. Where any
              changes are material, you will be notified before they take effect. Continued
              use of the service following notification constitutes your acceptance of the
              revised terms.
            </p>
          </section>

          {/* 10. Governing Law */}
          <section>
            <h2 className="mb-4" style={h2Style}>10. Governing Law</h2>
            <p style={pStyle}>
              These terms are governed by and construed in accordance with the laws of
              England and Wales. Any disputes arising under or in connection with these
              terms shall be subject to the exclusive jurisdiction of the courts of England
              and Wales.
            </p>
          </section>

          {/* 11. Contact */}
          <section>
            <h2 className="mb-4" style={h2Style}>11. Contact</h2>
            <p style={pStyle}>
              For any questions relating to these terms, please contact{" "}
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
