'use client';

import type { PointerEvent, ReactNode } from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';

interface TiltCardProps {
  children: ReactNode;
  maxTilt?: number;
  className?: string;
  cardClassName?: string;
}

export function TiltCard({
  children,
  maxTilt = 7,
  className = '',
  cardClassName = '',
}: TiltCardProps) {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const rotateX = useSpring(
    useTransform(y, [-0.5, 0.5], [maxTilt, -maxTilt]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(x, [-0.5, 0.5], [-maxTilt, maxTilt]),
    springConfig
  );

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || event.pointerType !== 'mouse') return;

    const bounds = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - bounds.left) / bounds.width - 0.5);
    y.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  return (
    <div
      className={`relative ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      style={{ perspective: '800px' }}
    >
      <motion.div
        className={cardClassName}
        style={
          reduceMotion
            ? undefined
            : { rotateX, rotateY, transformStyle: 'preserve-3d' }
        }
      >
        {children}
      </motion.div>
    </div>
  );
}
