"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { siteContent } from "@/content";

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const answerId = `faq-answer-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.04 }}
      className="glass-panel mb-2 overflow-hidden"
    >
      <button
        id={buttonId}
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={answerId}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 sm:py-5 text-left"
      >
        <span
          className="text-sm sm:text-base font-normal"
          style={{ color: "var(--color-text-primary)" }}
        >
          {question}
        </span>
        <span
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center"
          style={{ color: "var(--color-accent)" }}
          aria-hidden="true"
        >
          {open ? <Minus size={15} strokeWidth={1.5} /> : <Plus size={15} strokeWidth={1.5} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={answerId}
            role="region"
            aria-labelledby={buttonId}
            key="content"
            initial={prefersReducedMotion ? { opacity: 1 } : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <p
              className="px-5 pb-5 max-w-[620px] text-sm font-light leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      ref={ref}
      id="faq"
      aria-labelledby="faq-heading"
      className="py-20 lg:py-32"
      style={{ background: "var(--color-bg)" }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-14 lg:gap-24">
          <motion.div
            initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="accent-rule mb-6" />
            <h2
              id="faq-heading"
              className="text-3xl lg:text-4xl font-light"
              style={{ color: "var(--color-text-primary)" }}
            >
              Common questions.
            </h2>
          </motion.div>

          {inView && (
            <div aria-label="Frequently asked questions">
              {siteContent.faq.map((item, i) => (
                <FAQItem key={i} question={item.question} answer={item.answer} index={i} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
