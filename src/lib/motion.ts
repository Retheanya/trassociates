import type { Variants } from 'framer-motion';

export const staggerContainer = (delay = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: delay,
    },
  },
});

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: 'easeOut',
    },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: 'easeOut',
    },
  },
};
