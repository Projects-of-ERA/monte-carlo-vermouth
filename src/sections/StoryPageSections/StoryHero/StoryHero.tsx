import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

import AnimatedText from '../../../components/AnimatedText/AnimatedText';

import './StoryHero.css';

const StoryHero = () => {
  const { t } = useTranslation();

  const titleLines = [
    <>
      <em>{t('storyHero.title1')}</em> {t('storyHero.title1Accent')}
    </>,
    <>
      {t('storyHero.title2')} <em>{t('storyHero.title2Accent')}</em>
    </>,
    <>
      <em>{t('storyHero.title3')}</em> {t('storyHero.title3Accent')}
    </>,
  ];

  return (
    <section className="story-hero overflow-hidden">
      {/* BACKGROUND */}
      <div className="story-hero-background">
        <picture>
          <source media="(max-width: 640px)" srcSet="/images/StoryPage/hero/story-hero_mob.png" />

          <motion.img
            src="/images/StoryPage/hero/story-hero.png"
            alt="story-hero"
            className="story-hero-image"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </picture>
      </div>

      {/* OVERLAY */}
      <div className="story-hero-overlay" />

      {/* CONTENT */}
      <div className="story-hero-content mx-auto max-w-8xl px-4 lg:px-8">
        <motion.h1
          className="story-hero-title font-serif"
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

export default StoryHero;
