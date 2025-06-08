import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string; // <-- Add this!
}

export default function AnimatedCounter({
  end,
  duration = 2,
  suffix = '',
  prefix = '',
  className = '',     // <-- Add this!
}: AnimatedCounterProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, end, {
      duration,
      ease: 'easeOut',
    });

    return controls.stop;
  }, [count, end, duration]);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.div
        className={`${className} font-bold text-primary`} // <-- Use className here!
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        {prefix}
        <motion.span>{rounded}</motion.span>
        {suffix}
      </motion.div>
      <div className="absolute -inset-4 bg-primary/5 rounded-xl -z-10 blur-xl" />
    </motion.div>
  );
}