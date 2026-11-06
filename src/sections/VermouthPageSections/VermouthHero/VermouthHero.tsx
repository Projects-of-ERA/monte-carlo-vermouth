import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

import AnimatedText from '../../../components/AnimatedText/AnimatedText';

import './VermouthHero.css';

const VermouthHero = () => {
  const { t } = useTranslation();

  const titleLines = [
    t('vermouthHero.title1'),
    <>
      {t('vermouthHero.title2')} <em>{t('vermouthHero.title2Accent')}</em>
    </>,
    t('vermouthHero.title3'),
  ];

  return (
    <section className="vermouth-hero overflow-hidden">
      {/* BACKGROUND */}
      <div className="vermouth-hero-background">
        <motion.img
          src="/images/VermouthPage/hero/vermouth-hero.png"
          alt="vermouth-hero"
          className="vermouth-hero-image"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>

      {/* OVERLAY */}
      <div className="vermouth-hero-overlay" />

      {/* CONTENT */}
      <div className="vermouth-hero-container mx-auto max-w-8xl px-4 lg:px-8">
        <div className="vermouth-hero-content">
          <motion.h1
            className="vermouth-hero-title font-serif"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}>
            {titleLines.map((line, index) => (
              <span key={index}>
                <AnimatedText>{line}</AnimatedText>
              </span>
            ))}
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default VermouthHero;
