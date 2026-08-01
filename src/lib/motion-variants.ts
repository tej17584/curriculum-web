import type { Variants } from 'framer-motion';

const smoothOut = [0.22, 1, 0.36, 1] as const;

// Stagger container for card lists
export const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

// Individual card/item fade + lift
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12, filter: 'blur(3px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: smoothOut },
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
      ease: smoothOut,
    },
  },
};

// Page transition variants (direction-aware)
export const pageVariants: Variants = {
  enter: (forward: boolean) => ({
    x: forward ? 8 : -8,
    opacity: 0,
    filter: 'blur(3px)',
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.25, ease: smoothOut },
  },
  exit: (forward: boolean) => ({
    x: forward ? -8 : 8,
    opacity: 0,
    transition: { duration: 0.25, ease: smoothOut },
  }),
};
