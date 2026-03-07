"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { siteContent } from "@/content";

export default function TrustBar() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      ref={ref}
      aria-label="Trust indicators"
      style={{ backgroundColor: "var(--color-bg-secondary)" }}
      className="border-b border-[var(--color-border)]"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-5 sm:py-7">
        <motion.ul
          role="list"
          className="flex flex-row flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:gap-12"
          initial={{ opacity: prefersReducedMotion ? 1 : 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", staggerChildren: 0.1 }}
        >
          {siteContent.trustBar.items.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-3 text-[11px] sm:text-[12px] font-[400] uppercase tracking-[0.1em] sm:tracking-[0.12em]"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {i > 0 && (
                <span
                  className="block w-px h-3 sm:h-4"
                  style={{ backgroundColor: "var(--color-border)" }}
                  aria-hidden="true"
                />
              )}
              <span>{item}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
