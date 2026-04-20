// animations.ts

import type { TargetAndTransition, Transition, Variants } from 'framer-motion';

type Direction = 'left' | 'right' | 'up' | 'down';

interface FadeInOptions {
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
}

interface FadeInReturn {
  initial: TargetAndTransition;
  whileInView: TargetAndTransition;
  transition: Transition;
  viewport: {
    once: boolean;
    margin?: string;
  };
}

export const fadeIn = ({
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 80,
  once = true,
}: FadeInOptions = {}): FadeInReturn => {
  let x = 0;
  let y = 0;

  if (direction === 'left') x = -distance;
  if (direction === 'right') x = distance;
  if (direction === 'up') y = distance;
  if (direction === 'down') y = -distance;

  return {
    initial: {
      opacity: 0,
      x,
      y,
    },
    whileInView: {
      opacity: 1,
      x: 0,
      y: 0,
    },
    transition: {
      duration,
      delay,
      ease: 'easeOut',
    },
    viewport: {
      once,
      margin: '-50px',
    },
  };
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const cardFade: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
    filter: 'blur(6px)',
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};
