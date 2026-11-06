import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

import AnimatedText from '../../../components/AnimatedText/AnimatedText';

import './StoryBotanicals.css';

const StoryBotanicals = () => {
  const { t } = useTranslation();

  return (
    <section className="story-botanicals overflow-hidden">
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        {/* HEADER */}
        <div className="story-botanicals-header">
          <motion.h2
            className="story-botanicals-title font-serif"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <span>
              <AnimatedText>
                <em>{t('storyBotanicals.title1')}</em>
              </AnimatedText>
            </span>

            <span>
              <AnimatedText>{t('storyBotanicals.title2')}</AnimatedText>
            </span>
          </motion.h2>

          <motion.p
            className="story-botanicals-subtitle"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <AnimatedText>{t('storyBotanicals.subtitle')}</AnimatedText>
          </motion.p>
        </div>

        {/* DESKTOP CONTENT */}
        <div className="hidden lg:block">
          <div className="story-botanicals-grid">
            {/* LEFT — TEXT */}
            <motion.div
              className="story-botanicals-text"
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}>
              {/* FIRST PART */}
              <div className="story-botanicals-text-part">
                <p>
                  <AnimatedText>{t('storyBotanicals.description1')}</AnimatedText>
                </p>

                <p>
                  <AnimatedText>{t('storyBotanicals.description2')}</AnimatedText>
                </p>
              </div>

              {/* SECOND PART */}
              <div className="story-botanicals-text-part">
                <p>
                  <AnimatedText>{t('storyBotanicals.description3')}</AnimatedText>
                </p>

                <p>
                  <AnimatedText>{t('storyBotanicals.description4')}</AnimatedText>
                </p>

                <p>
                  <AnimatedText>{t('storyBotanicals.description5')}</AnimatedText>
                </p>
              </div>
            </motion.div>

            {/* RIGHT — IMAGE */}
            <motion.div
              className="story-botanicals-image-wrapper"
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}>
              <img
                src="/images/StoryPage/botanicals/botanicals.png"
                alt="Monte Carlo Vermouth botanicals"
                className="story-botanicals-image"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>

        {/* MOBILE CONTENT */}
        <div className="flex flex-col gap-5 lg:hidden">
          {/* FIRST PART */}
          <motion.div
            className="story-botanicals-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <div className="story-botanicals-text-part">
              <p>
                <AnimatedText>{t('storyBotanicals.description1')}</AnimatedText>
              </p>

              <p>
                <AnimatedText>{t('storyBotanicals.description2')}</AnimatedText>
              </p>
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            className="story-botanicals-image-wrapper"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <img
              src="/images/StoryPage/botanicals/botanicals.png"
              alt="Monte Carlo Vermouth botanicals"
              className="story-botanicals-image"
              loading="lazy"
            />
          </motion.div>

          {/* SECOND PART */}
          <motion.div
            className="story-botanicals-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <div className="story-botanicals-text-part">
              <p>
                <AnimatedText>{t('storyBotanicals.description3')}</AnimatedText>
              </p>

              <p>
                <AnimatedText>{t('storyBotanicals.description4')}</AnimatedText>
              </p>

              <p>
                <AnimatedText>{t('storyBotanicals.description5')}</AnimatedText>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StoryBotanicals;
