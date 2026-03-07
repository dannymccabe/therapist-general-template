"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Image from "next/image";
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
      style={{ backgroundColor: "var(--color-bg-primary)" }}
      className="py-14 sm:py-20 lg:py-[160px]"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 lg:gap-24 items-center">
          {/* Content — left on desktop */}
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
              id="about-heading"
              variants={variants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-6 lg:mb-10"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(32px, 3.5vw, 52px)",
                fontWeight: 400,
                lineHeight: 1.15,
                color: "var(--color-text-primary)",
              }}
            >
              {siteContent.about.heading}
            </motion.h2>

            <div className="max-w-[560px]">
              {siteContent.about.body.map((paragraph, i) => (
                <motion.p
                  key={i}
                  variants={variants}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="mb-5 last:mb-0"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Image — right on desktop */}
          <motion.div
            initial={{ opacity: prefersReducedMotion ? 1 : 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="relative aspect-[4/5] rounded-xl overflow-hidden"
          >
            <Image
              src={siteContent.about.imageSrc}
              alt={siteContent.about.imageAlt}
              width={600}
              height={750}
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
