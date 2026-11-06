import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

import AnimatedText from '../../../components/AnimatedText/AnimatedText';

import './ProductsHero.css';

const ProductsHero = () => {
  const { t } = useTranslation();

  const titleLines = [<em>{t('productsHero.title1')}</em>, t('productsHero.title2')];

  return (
    <section className="product-hero overflow-hidden">
      {/* BACKGROUND */}
      <div className="product-hero-background">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="/images/ProductPage/hero/product-hero_mob.png"
          />

          <motion.img
            src="/images/ProductPage/hero/product-hero.png"
            alt="Monte Carlo Vermouth products"
            className="product-hero-image"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </picture>
      </div>

      {/* OVERLAY */}
      <div className="product-hero-overlay" />

      {/* CONTENT */}
      <div className="product-hero-content mx-auto max-w-8xl px-4 lg:px-8">
        <motion.h1
          className="product-hero-title font-serif"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}>
          {titleLines.map((line, index) => (
            <span key={index}>
              <AnimatedText>{line}</AnimatedText>
            </span>
          ))}
        </motion.h1>
      </div>
    </section>
  );
};

export default ProductsHero;
