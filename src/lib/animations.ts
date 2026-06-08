import { Variants } from "framer-motion";

/**
 * Premium Cubic Bezier curves for real estate transitions:
 * - easeOutQuart: [0.25, 1, 0.5, 1] (Super smooth deceleration)
 * - luxuryDecel: [0.22, 1, 0.36, 1] (High-end editorial slide and settle)
 */
export const LUXURY_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeIn = (duration = 0.6, delay = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration,
      delay,
      ease: LUXURY_EASE,
    },
  },
});

export const fadeUp = (duration = 0.8, yOffset = 24, delay = 0): Variants => ({
  hidden: { opacity: 0, y: yOffset },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      delay,
      ease: LUXURY_EASE,
    },
  },
});

export const slideLeft = (duration = 0.8, xOffset = 32, delay = 0): Variants => ({
  hidden: { opacity: 0, x: xOffset },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration,
      delay,
      ease: LUXURY_EASE,
    },
  },
});

export const slideRight = (duration = 0.8, xOffset = -32, delay = 0): Variants => ({
  hidden: { opacity: 0, x: xOffset },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration,
      delay,
      ease: LUXURY_EASE,
    },
  },
});

export const scaleIn = (duration = 0.8, initialScale = 0.96, delay = 0): Variants => ({
  hidden: { opacity: 0, scale: initialScale },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration,
      delay,
      ease: LUXURY_EASE,
    },
  },
});

export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const hoverScale = {
  scale: 1.02,
  transition: { duration: 0.3, ease: LUXURY_EASE },
};

export const buttonHover = {
  scale: 0.98,
  transition: { duration: 0.15, ease: LUXURY_EASE },
};
