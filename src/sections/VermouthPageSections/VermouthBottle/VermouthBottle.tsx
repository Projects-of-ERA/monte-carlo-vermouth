import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

import AnimatedText from '../../../components/AnimatedText/AnimatedText';

import './VermouthBottle.css';

const VermouthBottle = () => {
  const { t } = useTranslation();

  const bottleDetails = [
    {
      id: 'closure',
      src: '/images/VermouthPage/bottle/closure.webp',
      alt: 'Rose gold medallion on the Monte Carlo Vermouth bottle closure',
    },
    {
      id: 'label',
      src: '/images/VermouthPage/bottle/label.webp',
      alt: 'Decorative label on the Monte Carlo Vermouth bottle',
    },
    {
      id: 'base',
      src: '/images/VermouthPage/bottle/base.webp',
      alt: 'Engraved glass base of the Monte Carlo Vermouth bottle',
      isWide: true,
    },
  ];

  return (
    <section className="vermouth-bottle overflow-hidden">
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        {/* HEADER */}
        <div className="vermouth-bottle-header">
          <motion.h2
            className="vermouth-bottle-title font-serif"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <span>
              <AnimatedText>
                <em>{t('vermouthBottle.title1')}</em> {t('vermouthBottle.title1Accent')}
              </AnimatedText>
            </span>

            <span>
              <AnimatedText>
                <em>{t('vermouthBottle.title2')}</em>
              </AnimatedText>
            </span>
          </motion.h2>
        </div>

        {/* CONTENT */}
        <div className="vermouth-bottle-grid">
          {/* LEFT — TEXT AND DETAILS */}
          <div className="vermouth-bottle-content">
            <motion.div
              className="vermouth-bottle-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}>
              <p className="vermouth-bottle-intro">
                <AnimatedText>{t('vermouthBottle.intro')}</AnimatedText>
              </p>

              <p>
                <AnimatedText>
                  <strong>{t('vermouthBottle.closureTitle')}</strong>{' '}
                  {t('vermouthBottle.closureDescription')}
                </AnimatedText>
              </p>

              <p>
                <AnimatedText>
                  <strong>{t('vermouthBottle.topLabelTitle')}</strong>{' '}
                  {t('vermouthBottle.topLabelDescription')}
                </AnimatedText>
              </p>

              <p>
                <AnimatedText>
                  <strong>{t('vermouthBottle.centralLabelTitle')}</strong>{' '}
                  {t('vermouthBottle.centralLabelDescription')}
                </AnimatedText>
              </p>
            </motion.div>

            {/* DETAIL IMAGES */}
            <div className="vermouth-bottle-details">
              {bottleDetails.map((detail, index) => (
                <motion.div
                  key={detail.id}
                  className={`vermouth-bottle-detail-image ${
                    'isWide' in detail && detail.isWide ? 'vermouth-bottle-detail-wide' : ''
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}>
                  <img src={detail.src} alt={detail.alt} loading="lazy" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT — MAIN IMAGE */}
          <motion.div
            className="vermouth-bottle-image-wrapper"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1.2,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <img
              src="/images/VermouthPage/bottle/bottle.png"
              alt="Monte Carlo Vermouth Rosé crystal bottle"
              className="vermouth-bottle-image"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VermouthBottle;
