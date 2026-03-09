"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

/**
 * Renders a brief fade that covers the page on first load, then dissolves
 * to reveal the site. Apply a background colour here matching the template.
 */
export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Hold for one frame so fonts/images have started loading,
    // then dissolve after a short beat.
    const t = setTimeout(() => setVisible(false), prefersReducedMotion ? 0 : 600);
    return () => clearTimeout(t);
  }, [prefersReducedMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[200] pointer-events-none bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          aria-hidden="true"
        />
      )}
    </AnimatePresence>
  );
}
