"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, Menu } from "lucide-react";
import Image from "next/image";
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
        style={{
          backgroundColor: scrolled ? "rgba(245, 240, 230, 0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
          transition: "background-color 0.5s ease, border-color 0.5s ease",
        }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <nav
          aria-label="Main navigation"
          className={`max-w-6xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between ${scrolled ? "nav-scrolled" : "nav-transparent"}`}
        >
          <a
            href="#"
            aria-label={`${siteContent.practice.name} — back to top`}
            className="flex-shrink-0"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            <Image
              src="/images/logo-placeholder.svg"
              alt={siteContent.practice.name}
              width={657}
              height={225}
              className="h-8 w-auto"
              priority
            />
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-[13px] font-[400] uppercase tracking-[0.12em]"
              >
                {link.label}
              </a>
            ))}
            <a href="#booking" className="nav-cta">
              Book a consultation
            </a>
          </div>

          <button
            className="lg:hidden p-2"
            style={{
              color: scrolled ? "var(--color-text-primary)" : "rgba(245, 240, 230, 0.9)",
              transition: "color 0.4s ease",
            }}
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
            className="fixed inset-0 z-[100] flex flex-col"
            style={{ backgroundColor: "var(--color-bg-primary)" }}
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <div
              className="flex items-center justify-between px-6 h-16 border-b"
              style={{ borderColor: "var(--color-border)" }}
            >
              <Image
                src="/images/logo-placeholder.svg"
                alt={siteContent.practice.name}
                width={657}
                height={225}
                className="h-8 w-auto"
              />
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="p-2"
                style={{ color: "var(--color-text-primary)" }}
              >
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>

            <nav className="flex flex-col items-start justify-center flex-1 px-8 gap-8 nav-scrolled">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="nav-link text-[13px] font-[400] uppercase tracking-[0.15em]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#booking"
                onClick={() => setMobileOpen(false)}
                className="nav-cta"
              >
                Book a consultation
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
