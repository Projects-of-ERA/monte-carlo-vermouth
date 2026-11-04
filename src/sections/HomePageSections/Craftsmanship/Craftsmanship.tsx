import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

import AnimatedText from '../../../components/AnimatedText/AnimatedText';
import CraftsmanshipSlider from './CraftsmanshipSlider';

import './Craftsmanship.css';

const Craftsmanship = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const language = pathname.split('/')[1];

  const langPrefix = language === 'fr' || language === 'es' ? `/${language}` : '';

  return (
    <section className="craftsmanship overflow-hidden">
      {/* INTRO */}
      <div className="craftsmanship-intro">
        <div className="mx-auto max-w-8xl px-4 lg:px-8">
          <div className="craftsmanship-intro-content">
            <motion.p
              className="craftsmanship-eyebrow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}>
              <AnimatedText>{t('craftsmanship.eyebrow')}</AnimatedText>
            </motion.p>

            <motion.h2
              className="craftsmanship-title font-serif"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}>
              <span>
                <AnimatedText>{t('craftsmanship.title1')}</AnimatedText>
              </span>

              <span>
                <AnimatedText>
                  <em>{t('craftsmanship.title2')}</em> {t('craftsmanship.title2Accent')}
                </AnimatedText>
              </span>

              <span>
                <AnimatedText>{t('craftsmanship.title3')}</AnimatedText>
              </span>
            </motion.h2>

            <motion.p
              className="craftsmanship-description"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}>
              <AnimatedText>{t('craftsmanship.description')}</AnimatedText>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}>
              <Link to={`${langPrefix}/mixology`} className="craftsmanship-button">
                <AnimatedText>{t('craftsmanship.button')}</AnimatedText>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* SWIPER */}
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}>
          <CraftsmanshipSlider />
        </motion.div>
      </div>
    </section>
  );
};

export default Craftsmanship;
