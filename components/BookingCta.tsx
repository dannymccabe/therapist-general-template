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
      className="py-14 sm:py-20 lg:py-[160px]"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ staggerChildren: prefersReducedMotion ? 0 : 0.12 }}
        >
          <motion.h2
            id="booking-heading"
            variants={variants}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-3xl lg:text-5xl mb-4"
          >
            {siteContent.bookingCta.heading}
          </motion.h2>

          <motion.p
            variants={variants}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-10 text-sm sm:text-base"
          >
            {siteContent.bookingCta.subheading}
          </motion.p>

          <motion.div variants={variants} transition={{ duration: 0.7, ease: "easeOut" }}>
            <CalEmbed />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
