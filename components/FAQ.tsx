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
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
      className="border-b"
    >
      <button
        id={buttonId}
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={answerId}
        className="w-full flex items-center justify-between gap-4 py-4 sm:py-6 text-left"
      >
        <span className="text-sm sm:text-base">{question}</span>
        <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center" aria-hidden="true">
          {open ? <Minus size={16} strokeWidth={1.5} /> : <Plus size={16} strokeWidth={1.5} />}
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
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <p className="pb-6 max-w-[620px] text-sm">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      ref={ref}
      id="faq"
      aria-labelledby="faq-heading"
      className="py-14 sm:py-20 lg:py-[160px]"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-14 lg:gap-24">
          <motion.div
            initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2
              id="faq-heading"
              className="text-3xl lg:text-5xl"
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
