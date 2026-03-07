"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { siteContent } from "@/content";

export default function Approach() {
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
      id="approach"
      aria-labelledby="approach-heading"
      className="py-14 sm:py-20 lg:py-[160px]"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ staggerChildren: prefersReducedMotion ? 0 : 0.1 }}
        >
          <motion.h2
            id="approach-heading"
            variants={variants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl lg:text-5xl mb-6 lg:mb-10"
          >
            {siteContent.approach.heading}
          </motion.h2>

          <div className="max-w-[560px]">
            {siteContent.approach.body.map((paragraph, i) => (
              <motion.p
                key={i}
                variants={variants}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mb-5 last:mb-0"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.div
            variants={variants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-7 lg:mt-10 flex flex-wrap gap-3"
          >
            {siteContent.approach.modalities.map((m) => (
              <span key={m} className="text-sm border px-3 py-1 rounded">
                {m}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
