"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { siteContent } from "@/content";

export default function WhoThisIsFor() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const prefersReducedMotion = useReducedMotion();

  const variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={ref}
      id="who-this-is-for"
      aria-labelledby="who-heading"
      className="py-20 lg:py-32"
      style={{ background: "var(--color-bg)" }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ staggerChildren: prefersReducedMotion ? 0 : 0.08 }}
        >
          {/* Accent rule */}
          <motion.div
            variants={variants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="accent-rule mb-6"
          />

          <motion.h2
            id="who-heading"
            variants={variants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-3xl lg:text-5xl font-light mb-8 lg:mb-12"
            style={{ color: "var(--color-text-primary)" }}
          >
            {siteContent.whoThisIsFor.heading}
          </motion.h2>

          <div className="max-w-[620px]">
            {siteContent.whoThisIsFor.body.map((paragraph, i) => (
              <motion.p
                key={i}
                variants={variants}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-base font-light leading-relaxed mb-5 last:mb-0"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
