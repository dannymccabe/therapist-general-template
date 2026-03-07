"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteContent } from "@/content";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.14,
        delayChildren: prefersReducedMotion ? 0 : 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
    },
  };

  return (
    <section aria-label="Hero" className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-20 pb-12 lg:pt-32 lg:pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-[700px]"
        >
          <motion.p variants={itemVariants} className="text-sm mb-4 lg:mb-7">
            {siteContent.practice.name}
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-4xl lg:text-6xl mb-5 lg:mb-8"
            dangerouslySetInnerHTML={{ __html: siteContent.hero.headline }}
          />

          <motion.p variants={itemVariants} className="mb-7 lg:mb-10 max-w-[520px]">
            {siteContent.hero.subheadline}
          </motion.p>

          <motion.div variants={itemVariants}>
            <a href="#booking" className="border px-6 py-3 rounded inline-block text-sm">
              {siteContent.hero.cta}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
