"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { siteContent } from "@/content";

export default function About() {
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
      id="about"
      aria-labelledby="about-heading"
      className="py-14 sm:py-20 lg:py-[160px]"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ staggerChildren: prefersReducedMotion ? 0 : 0.1 }}
          className="max-w-[620px]"
        >
          <motion.h2
            id="about-heading"
            variants={variants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl lg:text-5xl mb-6 lg:mb-10"
          >
            {siteContent.about.heading}
          </motion.h2>

          {siteContent.about.body.map((paragraph, i) => (
            <motion.p
              key={i}
              variants={variants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-5 last:mb-0"
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
