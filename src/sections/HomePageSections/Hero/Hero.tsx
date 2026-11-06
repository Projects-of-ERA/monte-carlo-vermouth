import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

import AnimatedText from '../../../components/AnimatedText/AnimatedText';

import './Hero.css';

const MotionLink = motion.create(Link);

const Hero = () => {
  const { t } = useTranslation();

  const { pathname } = useLocation();

  const language = pathname.split('/')[1];
  const langPrefix = language === 'fr' || language === 'es' ? `/${language}` : '';

  const titleLines = [
    <>
      <em>{t('hero.title1')}</em> {t('hero.title1Accent')}
    </>,
    <>
      <em>{t('hero.title2')}</em> {t('hero.title2Accent')}
    </>,
    t('hero.title3'),
  ];

  return (
    <section className="hero relative h-[min(100vh,1080px)] overflow-hidden bg-black text-white">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source
          media="(max-width: 768px)"
          src="/images/HomePage/hero/monte-carlo-vermouth.webm"
          type="video/webm"
        />

        <source src="/images/HomePage/hero/monte-carlo-vermouth.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay" />

      <div className="relative z-[2] mx-auto flex h-full max-w-[1450px] items-center px-8">
        <div className="hero-content">
          <motion.h1
            className="hero-title font-serif"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}>
            {titleLines.map((line, index) => (
              <span
                key={index}
                className={
                  index === 1 ? 'hero-title-offset' : index === 2 ? 'hero-title-last' : ''
                }>
                <AnimatedText>{line}</AnimatedText>
              </span>
            ))}
          </motion.h1>

          <MotionLink
            to={`${langPrefix}/products`}
            className="hero-shop-button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <AnimatedText>{t('hero.button')}</AnimatedText>
          </MotionLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
