import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'motion/react';

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
}

const AnimatedText = ({ children, className = '' }: AnimatedTextProps) => {
  const { i18n } = useTranslation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={i18n.resolvedLanguage || i18n.language}
        className={`inline-block ${className}`}
        initial={{ opacity: 0, y: 12 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.35 },
        }}
        exit={{
          opacity: 0,
          y: -12,
          transition: { duration: 0.2 },
        }}>
        {children}
      </motion.span>
    </AnimatePresence>
  );
};

export default AnimatedText;
