import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

import AnimatedText from '../../../components/AnimatedText/AnimatedText';
import MixologyQuotes from './MixologyQuotes';

import './Mixology.css';

const Mixology = () => {
  const { t } = useTranslation();

  return (
    <section className="mixology overflow-hidden">
      {/* INTRO */}
      <div className="mixology-intro">
        <div className="mx-auto max-w-8xl px-4 lg:px-8">
          <div className="mixology-intro-grid">
            <motion.h2
              className="mixology-title font-serif"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}>
              <span className="mixology-title-elegant">
                <AnimatedText>{t('mixology.title1')}</AnimatedText>
              </span>

              <span>
                <AnimatedText>{t('mixology.title2')}</AnimatedText>
              </span>
            </motion.h2>

            <motion.p
              className="mixology-description"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}>
              <AnimatedText>
                {t('mixology.description1')}
                <br />
                {t('mixology.description2')}
              </AnimatedText>
            </motion.p>
          </div>
        </div>
      </div>

      {/* FEATURE */}
      <div className="mixology-feature overflow-hidden">
        <motion.img
          src="/images/HomePage/mixology/mixology.png"
          alt="Monte Carlo Vermouth mixology"
          className="mixology-feature-image"
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 z-[1] bg-black/40" />

        <div className="mixology-feature-content">
          <motion.h3
            className="mixology-feature-title font-serif"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <span>
              <AnimatedText>
                {t('mixology.featureTitle1')} <em>{t('mixology.featureTitle1Accent')}</em>
              </AnimatedText>
            </span>

            <span>
              <AnimatedText>
                <em>{t('mixology.featureTitle2')}</em> {t('mixology.featureTitle2Accent')}
              </AnimatedText>
            </span>

            <span>
              <AnimatedText>{t('mixology.featureTitle3')}</AnimatedText>
            </span>
          </motion.h3>
        </div>
      </div>

      {/* QUOTES SWIPER */}
      <motion.div
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}>
        <MixologyQuotes />
      </motion.div>
    </section>
  );
};

export default Mixology;
