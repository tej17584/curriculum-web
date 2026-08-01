'use client';

import type { PointerEvent, ReactNode } from 'react';
import { motion, useReducedMotion, useSpring } from 'framer-motion';

interface MagneticButtonProps {
  children: ReactNode;
  range?: number;
  strength?: number;
  className?: string;
}

export function MagneticButton({
  children,
  range = 56,
  strength = 0.18,
  className = '',
}: MagneticButtonProps) {
  const reduceMotion = useReducedMotion();
  const springConfig = { stiffness: 180, damping: 18, mass: 0.5 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || event.pointerType !== 'mouse') return;

    const { left, top, width, height } =
      event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - (left + width / 2);
    const offsetY = event.clientY - (top + height / 2);

    if (Math.hypot(offsetX, offsetY) < range) {
      x.set(offsetX * strength);
      y.set(offsetY * strength);
    } else {
      reset();
    }
  };

  return (
    <motion.div
      className={`inline-flex ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      style={reduceMotion ? undefined : { x, y }}
    >
      {children}
    </motion.div>
  );
}
