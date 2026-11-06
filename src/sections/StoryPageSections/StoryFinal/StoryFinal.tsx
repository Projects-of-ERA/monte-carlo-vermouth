import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

import AnimatedText from '../../../components/AnimatedText/AnimatedText';

import './StoryFinal.css';

const StoryFinal = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const language = pathname.split('/')[1];

  const langPrefix = language === 'fr' || language === 'es' ? `/${language}` : '';

  return (
    <section className="story-final">
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        <div className="story-final-content">
          {/* SUBTITLE */}
          <motion.p
            className="story-final-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <AnimatedText>{t('storyFinal.subtitle')}</AnimatedText>
          </motion.p>

          {/* TITLE */}
          <motion.h2
            className="story-final-title font-serif"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <AnimatedText>{t('storyFinal.title')}</AnimatedText>
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            className="story-final-description"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <AnimatedText>{t('storyFinal.description')}</AnimatedText>
          </motion.p>

          {/* BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <Link to={`${langPrefix}/vermouth`} className="story-final-button">
              <AnimatedText>{t('storyFinal.button')}</AnimatedText>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StoryFinal;
