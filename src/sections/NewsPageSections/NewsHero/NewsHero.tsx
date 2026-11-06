import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

import AnimatedText from '../../../components/AnimatedText/AnimatedText';

import './NewsHero.css';

const NewsHero = () => {
  const { t } = useTranslation();

  const titleLines = [<em>{t('newsHero.title1')}</em>, t('newsHero.title2')];

  return (
    <section className="news-hero overflow-hidden">
      {/* BACKGROUND */}
      <div className="news-hero-background">
        <motion.img
          src="/images/NewsPage/hero/news-hero.png"
          alt="Monte Carlo Vermouth news"
          className="news-hero-image"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>

      {/* OVERLAY */}
      <div className="news-hero-overlay" />

      {/* CONTENT */}
      <div className="news-hero-content mx-auto max-w-8xl px-4 lg:px-8">
        <motion.h1
          className="news-hero-title font-serif"
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

export default NewsHero;
