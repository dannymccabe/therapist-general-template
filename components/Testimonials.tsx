"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { siteContent } from "@/content";

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const prefersReducedMotion = useReducedMotion();

  if (!siteContent.testimonials.length) return null;

  const variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0 },
  };

  const testimonials = siteContent.testimonials.slice(0, 3);

  return (
    <section
      ref={ref}
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-20 lg:py-32"
      style={{ background: "var(--color-bg-alt)" }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ staggerChildren: prefersReducedMotion ? 0 : 0.08 }}
        >
          <motion.div
            variants={variants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="accent-rule mb-6"
          />

          <motion.h2
            id="testimonials-heading"
            variants={variants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-3xl lg:text-4xl font-light mb-12 lg:mb-16"
            style={{ color: "var(--color-text-primary)" }}
          >
            What clients say.
          </motion.h2>

          <div
            className={`grid gap-6 ${
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
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="glass-panel p-7"
              >
                <blockquote>
                  <p
                    className="text-base font-light italic leading-relaxed mb-5"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </blockquote>
                <figcaption
                  className="text-xs font-medium tracking-wide uppercase"
                  style={{ color: "var(--color-text-tertiary)" }}
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
