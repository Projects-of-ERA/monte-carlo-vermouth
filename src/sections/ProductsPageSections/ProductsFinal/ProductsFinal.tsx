import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

import AnimatedText from '../../../components/AnimatedText/AnimatedText';

import './ProductsFinal.css';

const ProductsFinal = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const language = pathname.split('/')[1];

  const langPrefix = language === 'fr' || language === 'es' ? `/${language}` : '';

  return (
    <section className="products-final">
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        <div className="products-final-content">
          {/* EYEBROW */}
          <motion.p
            className="products-final-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <AnimatedText>{t('productsFinal.eyebrow')}</AnimatedText>
          </motion.p>

          {/* TITLE */}
          <motion.h2
            className="products-final-title font-serif"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <AnimatedText>{t('productsFinal.title')}</AnimatedText>
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            className="products-final-description"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <AnimatedText>{t('productsFinal.description')}</AnimatedText>
          </motion.p>

          {/* BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <Link to={`${langPrefix}/mixology`} className="products-final-button">
              <AnimatedText>{t('productsFinal.button')}</AnimatedText>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductsFinal;
