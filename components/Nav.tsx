"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, Menu } from "lucide-react";
import { siteContent } from "@/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <motion.header
        initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <nav
          aria-label="Main navigation"
          className="max-w-6xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between"
        >
          <a
            href="#"
            aria-label={`${siteContent.practice.name} — back to top`}
            className="flex-shrink-0 text-sm font-medium"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            {siteContent.practice.name}
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm">
                {link.label}
              </a>
            ))}
            <a href="#booking" className="text-sm border px-4 py-2 rounded">
              Book a consultation
            </a>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed inset-0 z-[100] flex flex-col bg-white"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <div className="flex items-center justify-between px-6 h-16 border-b">
              <span className="text-sm font-medium">{siteContent.practice.name}</span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="p-2">
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>
            <nav className="flex flex-col items-start justify-center flex-1 px-8 gap-8">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="text-sm">
                  {link.label}
                </a>
              ))}
              <a href="#booking" onClick={() => setMobileOpen(false)} className="text-sm border px-4 py-2 rounded">
                Book a consultation
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
