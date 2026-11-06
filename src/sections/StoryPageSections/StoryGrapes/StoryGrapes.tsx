import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

import AnimatedText from '../../../components/AnimatedText/AnimatedText';

import './StoryGrapes.css';

const StoryGrapes = () => {
  const { t } = useTranslation();

  return (
    <section className="story-grapes mx-auto max-w-8xl overflow-hidden px-4 lg:px-8">
      {/* LEFT IMAGE */}
      <motion.div
        className="story-grapes-image-wrapper"
        initial={{ opacity: 0, x: -35 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 1.1,
          ease: [0.22, 1, 0.36, 1],
        }}>
        <img
          src="/images/StoryPage/grapes/piedmont.png"
          alt="Piedmont vineyards"
          className="story-grapes-image"
          loading="lazy"
        />
      </motion.div>

      {/* CENTER CONTENT */}
      <div className="story-grapes-content">
        <motion.h2
          className="story-grapes-title font-serif"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.9,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}>
          <span>
            <AnimatedText>{t('storyGrapes.title1')}</AnimatedText>
          </span>

          <span>
            <AnimatedText>{t('storyGrapes.title2')}</AnimatedText>
          </span>

          <span>
            <AnimatedText>
              <em>{t('storyGrapes.title3')}</em>
            </AnimatedText>
          </span>

          <span>
            <AnimatedText>{t('storyGrapes.title4')}</AnimatedText>
          </span>
        </motion.h2>

        <motion.p
          className="story-grapes-text"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}>
          <AnimatedText>{t('storyGrapes.description')}</AnimatedText>
        </motion.p>
      </div>

      {/* RIGHT IMAGE */}
      <motion.div
        className="story-grapes-image-wrapper"
        initial={{ opacity: 0, x: 35 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 1.1,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}>
        <img
          src="/images/StoryPage/grapes/grapes.png"
          alt="Moscato d'Asti grapes"
          className="story-grapes-image"
          loading="lazy"
        />
      </motion.div>
    </section>
  );
};

export default StoryGrapes;
