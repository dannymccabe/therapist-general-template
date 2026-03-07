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

  const testimonials = siteContent.testimonials.slice(0, 3);

  return (
    <section
      ref={ref}
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-14 sm:py-20 lg:py-[160px]"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ staggerChildren: prefersReducedMotion ? 0 : 0.1 }}
        >
          <motion.h2
            id="testimonials-heading"
            variants={variants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl lg:text-5xl mb-10 lg:mb-16"
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
                className="border p-6 rounded-lg"
              >
                <blockquote>
                  <p className="italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                </blockquote>
                <figcaption className="text-sm">{t.attribution}</figcaption>
              </motion.figure>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
