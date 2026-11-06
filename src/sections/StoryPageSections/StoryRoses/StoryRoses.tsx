import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

import AnimatedText from '../../../components/AnimatedText/AnimatedText';

import './StoryRoses.css';

const StoryRoses = () => {
  const { t } = useTranslation();

  return (
    <section className="story-roses overflow-hidden">
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        {/* HEADER */}
        <div className="story-roses-header">
          <motion.h2
            className="story-roses-title font-serif"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <span>
              <AnimatedText>{t('storyRoses.title1')}</AnimatedText>
            </span>

            <span>
              <AnimatedText>
                {t('storyRoses.title2')} <em>{t('storyRoses.title2Accent')}</em>
              </AnimatedText>
            </span>

            <span>
              <AnimatedText>{t('storyRoses.title3')}</AnimatedText>
            </span>
          </motion.h2>
        </div>

        {/* CONTENT */}
        <div className="story-roses-grid">
          {/* LEFT — IMAGE */}
          <motion.div
            className="story-roses-image-wrapper"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <img
              src="/images/StoryPage/roses/roses-bottle.png"
              alt="Monte Carlo Vermouth Rosé bottle"
              className="story-roses-image"
              loading="lazy"
            />
          </motion.div>

          {/* RIGHT — TEXT */}
          <motion.div
            className="story-roses-text"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <p>
              <AnimatedText>{t('storyRoses.description')}</AnimatedText>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StoryRoses;
