"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { siteContent } from "@/content";

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const prefersReducedMotion = useReducedMotion();

  if (!siteContent.testimonials.length) return null;

  const variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Cap at 3
  const testimonials = siteContent.testimonials.slice(0, 3);

  return (
    <section
      ref={ref}
      id="testimonials"
      aria-labelledby="testimonials-heading"
      style={{ backgroundColor: "var(--color-bg-secondary)" }}
      className="section-texture py-14 sm:py-20 lg:py-[160px]"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ staggerChildren: prefersReducedMotion ? 0 : 0.1 }}
        >
          <motion.span
            variants={variants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="accent-rule mb-5 lg:mb-8"
            aria-hidden="true"
          />

          <motion.h2
            id="testimonials-heading"
            variants={variants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-10 lg:mb-16"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 400,
              lineHeight: 1.15,
              color: "var(--color-text-primary)",
            }}
          >
            What clients say.
          </motion.h2>

          <div
            className={`grid gap-8 ${
              testimonials.length === 1
                ? "max-w-2xl"
                : testimonials.length === 2
                ? "md:grid-cols-2 max-w-4xl"
                : "md:grid-cols-3"
            }`}
          >
            {testimonials.map((t, i) => (
              <motion.figure
                key={i}
                variants={variants}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="p-5 sm:p-8 rounded-xl"
                style={{
                  backgroundColor: "var(--color-bg-primary)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <blockquote>
                  <p
                    className="italic leading-relaxed mb-6"
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "20px",
                      fontWeight: 300,
                      color: "var(--color-text-primary)",
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </blockquote>
                <figcaption
                  className="text-[12px] font-[400] uppercase tracking-[0.12em]"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {t.attribution}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
