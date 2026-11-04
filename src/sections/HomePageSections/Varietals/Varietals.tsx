import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

import { varietals } from '../../../data/varietals';
import AnimatedText from '../../../components/AnimatedText/AnimatedText';

import './Varietals.css';

const MotionLink = motion.create(Link);

const Varietals = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const language = pathname.split('/')[1];
  const langPrefix = language === 'fr' || language === 'es' ? `/${language}` : '';

  return (
    <section className="varietals overflow-hidden">
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        <motion.h2
          className="varietals-heading font-serif"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}>
          <AnimatedText>{t('varietals.title')}</AnimatedText>
        </motion.h2>

        <div className="varietals-grid">
          {varietals.map((varietal, index) => {
            const productUrl = `${langPrefix}/products/${varietal.slug}`;

            return (
              <MotionLink
                key={varietal.id}
                to={productUrl}
                className="varietals-card"
                aria-label={`${varietal.name} ${t(varietal.typeKey)}`}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}>
                {/* IMAGE */}
                <div className="varietals-image-wrapper">
                  <img src={varietal.image} alt={varietal.alt} className="varietals-image" />
                </div>

                {/* TITLE */}
                <div className="varietals-title">
                  <h3 className="font-serif">{varietal.name}</h3>

                  <span className="font-serif">
                    <AnimatedText>{t(varietal.typeKey)}</AnimatedText>
                  </span>
                </div>

                {/* BUTTON */}
                <span className="varietals-button">
                  <AnimatedText>{t('varietals.button')}</AnimatedText>
                </span>
              </MotionLink>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Varietals;
