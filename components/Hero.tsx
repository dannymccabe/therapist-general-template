"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
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

  const cubicEase = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: cubicEase },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: prefersReducedMotion ? 1 : 1.03 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.4, ease: cubicEase },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.38,
      transition: { duration: 1.2, ease: "easeOut" as const, delay: 0.1 },
    },
  };

  return (
    <section aria-label="Hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with subtle scale-in */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <Image
          src="/images/hero.svg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ backgroundColor: "var(--color-dark)" }}
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 pt-20 pb-12 lg:pt-32 lg:pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-[700px]"
        >
          <motion.p
            variants={itemVariants}
            className="text-[12px] font-[400] uppercase tracking-[0.2em] mb-4 lg:mb-7"
            style={{ color: "rgba(245, 240, 230, 0.6)" }}
          >
            {siteContent.practice.name}
          </motion.p>

          {/* H1 — mixes regular weight with italic via <em> in content */}
          <motion.h1
            variants={itemVariants}
            className="hero-headline mb-5 lg:mb-8 font-[400]"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(40px, 6vw, 86px)",
              lineHeight: 1.08,
              color: "var(--color-bg-primary)",
            }}
            dangerouslySetInnerHTML={{ __html: siteContent.hero.headline }}
          />

          <motion.p
            variants={itemVariants}
            className="text-[15px] lg:text-[17px] font-[300] leading-[1.8] mb-7 lg:mb-10 max-w-[520px]"
            style={{ color: "rgba(245, 240, 230, 0.78)" }}
          >
            {siteContent.hero.subheadline}
          </motion.p>

          <motion.div variants={itemVariants}>
            <a href="#booking" className="btn-primary">
              {siteContent.hero.cta}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
