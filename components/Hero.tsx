"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { siteContent } from "@/content";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.12,
        delayChildren: prefersReducedMotion ? 0 : 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0 },
  };

  const itemTransition = { duration: 0.5, ease: "easeOut" as const };

  return (
    <section aria-label="Hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/placeholder.svg"
        alt=""
        fill
        className="object-cover"
        priority
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(0, 0, 0, 0.38)" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 pt-24 pb-16 lg:pt-36 lg:pb-28">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-[680px]"
        >
          <motion.p
            variants={itemVariants}
            transition={itemTransition}
            className="text-xs font-medium tracking-widest uppercase mb-5 lg:mb-7"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            {siteContent.practice.name}
          </motion.p>

          <motion.h1
            variants={itemVariants}
            transition={itemTransition}
            className="text-4xl lg:text-6xl font-light leading-tight mb-5 lg:mb-7"
            style={{ color: "#FFFFFF" }}
            dangerouslySetInnerHTML={{ __html: siteContent.hero.headline }}
          />

          <motion.p
            variants={itemVariants}
            transition={itemTransition}
            className="text-base font-light leading-relaxed mb-8 lg:mb-10 max-w-[500px]"
            style={{ color: "rgba(255,255,255,0.80)" }}
          >
            {siteContent.hero.subheadline}
          </motion.p>

          <motion.div variants={itemVariants} transition={itemTransition}>
            <a href="#booking" className="btn-primary text-sm px-6 py-3">
              {siteContent.hero.cta}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
