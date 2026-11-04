import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

import AnimatedText from '../../../components/AnimatedText/AnimatedText';

import './Spirit.css';

const Spirit = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const language = pathname.split('/')[1];

  const langPrefix = language === 'fr' || language === 'es' ? `/${language}` : '';

  return (
    <section className="spirit overflow-hidden">
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        <div className="spirit-grid">
          <div className="spirit-content">
            <div className="spirit-content-inner">
              <motion.h2
                className="spirit-title font-serif"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}>
                <span>
                  <AnimatedText>
                    <em>{t('spirit.title1')}</em> {t('spirit.title1Accent')}
                  </AnimatedText>
                </span>

                <span>
                  <AnimatedText>
                    <em>{t('spirit.title2')}</em> {t('spirit.title2Accent')}
                  </AnimatedText>
                </span>

                <span>
                  <AnimatedText>{t('spirit.title3')}</AnimatedText>
                </span>
              </motion.h2>

              <motion.p
                className="spirit-text"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}>
                <AnimatedText>
                  {t('spirit.description1')}
                  <br />
                  {t('spirit.description2')}
                </AnimatedText>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}>
                <Link to={`${langPrefix}/vermouth`} className="spirit-button">
                  <AnimatedText>{t('spirit.button')}</AnimatedText>
                </Link>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="spirit-image"
            initial={{ opacity: 0, x: 35, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1.2,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <img src="/images/HomePage/spirit/bottle.png" alt="Monte Carlo Vermouth" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Spirit;
