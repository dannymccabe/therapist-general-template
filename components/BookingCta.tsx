"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Cal, { getCalApi } from "@calcom/embed-react";
import { siteContent } from "@/content";

function CalEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <Cal
      calLink={siteContent.practice.calLink}
      style={{ width: "100%", minHeight: "600px" }}
      config={{ layout: "month_view" }}
    />
  );
}

export default function BookingCta() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const prefersReducedMotion = useReducedMotion();

  const variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={ref}
      id="booking"
      aria-labelledby="booking-heading"
      /* Warm brown — lighter than --color-dark, still creates contrast */
      style={{ backgroundColor: "var(--color-text-secondary)" }}
      className="relative py-14 sm:py-20 lg:py-[160px]"
    >
      {/* Grain texture */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
          opacity: 0.05,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ staggerChildren: prefersReducedMotion ? 0 : 0.12 }}
        >
          <motion.div
            variants={variants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center mb-8"
          >
            <span
              className="block w-12 h-px"
              style={{ backgroundColor: "rgba(245, 240, 230, 0.35)" }}
              aria-hidden="true"
            />
          </motion.div>

          <motion.h2
            id="booking-heading"
            variants={variants}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-5"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(34px, 5vw, 64px)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.1,
              color: "var(--color-bg-primary)",
            }}
          >
            {siteContent.bookingCta.heading}
          </motion.h2>

          <motion.p
            variants={variants}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-8 lg:mb-14 text-[15px] sm:text-[17px] font-[300]"
            style={{ color: "rgba(245, 240, 230, 0.65)" }}
          >
            {siteContent.bookingCta.subheading}
          </motion.p>

          <motion.div
            variants={variants}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <CalEmbed />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
