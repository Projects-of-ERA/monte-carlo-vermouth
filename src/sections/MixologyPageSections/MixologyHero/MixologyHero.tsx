import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

import AnimatedText from '../../../components/AnimatedText/AnimatedText';

import './MixologyHero.css';

const MixologyHero = () => {
  const { t } = useTranslation();

  const titleLines = [<em>{t('mixologyHero.title1')}</em>, t('mixologyHero.title2')];

  return (
    <section className="mixology-hero overflow-hidden">
      {/* BACKGROUND */}
      <div className="mixology-hero-background">
        <motion.img
          src="/images/MixologyPage/hero/mixology-hero.png"
          alt="Monte Carlo Vermouth mixology"
          className="mixology-hero-image"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>

      {/* OVERLAY */}
      <div className="mixology-hero-overlay" />

      {/* CONTENT */}
      <div className="mixology-hero-content mx-auto max-w-8xl px-4 lg:px-8">
        <motion.h1
          className="mixology-hero-title font-serif"
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
    </section>
  );
};

export default MixologyHero;
