import type { Variants } from 'framer-motion';

const editorialEase = [0.25, 0.46, 0.45, 0.94] as const;

// Stagger container for card lists
export const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

// Individual card/item fade + lift
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: editorialEase },
  },
};

// Illustration at bottom of each chapter
export const illustrationVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.4,
      ease: editorialEase,
    },
  },
};

// Page transition variants (direction-aware)
export const pageVariants: Variants = {
  enter: (forward: boolean) => ({
    x: forward ? '5%' : '-5%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: editorialEase },
  },
  exit: (forward: boolean) => ({
    x: forward ? '-5%' : '5%',
    opacity: 0,
    transition: { duration: 0.3, ease: [0.55, 0.055, 0.675, 0.19] },
  }),
};
