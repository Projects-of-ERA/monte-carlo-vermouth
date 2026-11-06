import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

import AnimatedText from '../../../components/AnimatedText/AnimatedText';

import './VermouthTasting.css';

const VermouthTasting = () => {
  const { t } = useTranslation();

  const tastingDetails = [
    {
      id: 'eye',
      titleKey: 'vermouthTasting.eyeTitle',
      descriptionKey: 'vermouthTasting.eyeDescription',
    },
    {
      id: 'nose',
      titleKey: 'vermouthTasting.noseTitle',
      descriptionKey: 'vermouthTasting.noseDescription',
    },
    {
      id: 'palate',
      titleKey: 'vermouthTasting.palateTitle',
      descriptionKey: 'vermouthTasting.palateDescription',
    },
  ];

  return (
    <section className="vermouth-tasting overflow-hidden">
      {/* HEADER */}
      <div className="vermouth-tasting-header">
        <div className="mx-auto max-w-8xl px-4 lg:px-8">
          <motion.h2
            className="vermouth-tasting-title font-serif"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <span>
              <AnimatedText>{t('vermouthTasting.title1')}</AnimatedText>
            </span>

            <span>
              <AnimatedText>
                <em>{t('vermouthTasting.title2')}</em>
              </AnimatedText>
            </span>
          </motion.h2>

          <motion.p
            className="vermouth-tasting-subtitle"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <AnimatedText>{t('vermouthTasting.subtitle')}</AnimatedText>
          </motion.p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="vermouth-tasting-content overflow-hidden">
        {/* BACKGROUND */}
        <div className="vermouth-tasting-background">
          <motion.img
            src="/images/VermouthPage/tasting/tasting.png"
            alt=""
            className="vermouth-tasting-image"
            loading="lazy"
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </div>

        {/* OVERLAY */}
        <div className="vermouth-tasting-overlay" />

        <div className="vermouth-tasting-container mx-auto max-w-8xl px-4 lg:px-8">
          <div className="vermouth-tasting-text">
            <motion.p
              className="vermouth-tasting-description"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}>
              <AnimatedText>{t('vermouthTasting.description')}</AnimatedText>
            </motion.p>

            <div className="vermouth-tasting-details">
              {tastingDetails.map((detail, index) => (
                <motion.div
                  key={detail.id}
                  className="vermouth-tasting-detail"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15 + 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}>
                  <h3>
                    <AnimatedText>{t(detail.titleKey)}</AnimatedText>
                  </h3>

                  <p>
                    <AnimatedText>{t(detail.descriptionKey)}</AnimatedText>
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VermouthTasting;
