import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

import AnimatedText from '../../../components/AnimatedText/AnimatedText';
import BotanicalsSlider from './BotanicalsSlider';

import './Botanicals.css';

const Botanicals = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const language = pathname.split('/')[1];

  const langPrefix = language === 'fr' || language === 'es' ? `/${language}` : '';

  return (
    <section className="botanicals overflow-hidden">
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        <div className="botanicals-grid">
          {/* LEFT */}
          <div className="botanicals-left overflow-hidden">
            <motion.img
              src="/images/HomePage/botanicals/botanicals.png"
              alt="botanicals-image"
              className="botanicals-image"
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 1.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            />

            <div className="botanicals-left-content">
              <motion.h2
                className="botanicals-title font-serif"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.9,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}>
                <span>
                  <AnimatedText>
                    <em>{t('botanicals.title1')}</em>
                  </AnimatedText>
                </span>

                <span>
                  <AnimatedText>
                    <em>{t('botanicals.title2')}</em> {t('botanicals.title2Accent')}
                  </AnimatedText>
                </span>

                <span>
                  <AnimatedText>{t('botanicals.title3')}</AnimatedText>
                </span>

                <span>
                  <AnimatedText>
                    <em>{t('botanicals.title4')}</em> {t('botanicals.title4Accent')}
                  </AnimatedText>
                </span>

                <span>
                  <AnimatedText>{t('botanicals.title5')}</AnimatedText>
                </span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}>
                <Link to={`${langPrefix}/story`} className="botanicals-button">
                  <AnimatedText>{t('botanicals.button')}</AnimatedText>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* RIGHT */}
          <motion.div
            className="botanicals-right"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <BotanicalsSlider />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Botanicals;
