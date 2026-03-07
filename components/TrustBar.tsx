"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteContent } from "@/content";

export default function TrustBar() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section ref={ref} aria-label="Trust indicators" className="border-y py-5 sm:py-7">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.ul
          role="list"
          className="flex flex-row flex-wrap items-center justify-center gap-x-8 gap-y-2"
          initial={{ opacity: prefersReducedMotion ? 1 : 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {siteContent.trustBar.items.map((item, i) => (
            <li key={i} className="text-sm">
              {item}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
