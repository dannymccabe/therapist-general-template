"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { siteContent } from "@/content";

export default function Approach() {
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
      id="approach"
      aria-labelledby="approach-heading"
      className="py-20 lg:py-32"
      style={{ background: "var(--color-bg-alt)" }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative aspect-[4/3] overflow-hidden"
            style={{ borderRadius: "var(--glass-radius)" }}
          >
            <Image
              src="/images/placeholder.svg"
              alt=""
              fill
              className="object-cover"
              aria-hidden="true"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ staggerChildren: prefersReducedMotion ? 0 : 0.08, delayChildren: 0.1 }}
          >
            <motion.div
              variants={variants}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="accent-rule mb-6"
            />

            <motion.h2
              id="approach-heading"
              variants={variants}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-3xl lg:text-4xl font-light mb-7"
              style={{ color: "var(--color-text-primary)" }}
            >
              {siteContent.approach.heading}
            </motion.h2>

            <div className="max-w-[520px]">
              {siteContent.approach.body.map((paragraph, i) => (
                <motion.p
                  key={i}
                  variants={variants}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-base font-light leading-relaxed mb-4 last:mb-0"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.div
              variants={variants}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {siteContent.approach.modalities.map((m) => (
                <span
                  key={m}
                  className="glass-panel text-xs font-medium px-3 py-1.5"
                  style={{ color: "var(--color-text-secondary)", borderRadius: "8px" }}
                >
                  {m}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
