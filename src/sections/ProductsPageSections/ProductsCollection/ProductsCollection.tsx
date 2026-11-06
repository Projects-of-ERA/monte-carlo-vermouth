import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

import AnimatedText from '../../../components/AnimatedText/AnimatedText';

import './ProductsCollection.css';

const MotionLink = motion.create(Link);

const products = [
  {
    id: 'bianco',
    slug: 'bianco-white-vermouth',
    name: 'BIANCO',
    typeKey: 'productsCollection.whiteVermouth',
    image: '/images/ProductPage/products/bianco.webp',
    alt: 'Monte Carlo Vermouth Bianco bottle',
  },
  {
    id: 'rosso',
    slug: 'rosso-red-vermouth',
    name: 'ROSSO',
    typeKey: 'productsCollection.redVermouth',
    image: '/images/ProductPage/products/rosso.webp',
    alt: 'Monte Carlo Vermouth Rosso bottle',
  },
];

const ProductsCollection = () => {
  const { t, i18n } = useTranslation();

  const { pathname } = useLocation();

  const language = pathname.split('/')[1];
  const langPrefix = language === 'fr' || language === 'es' ? `/${language}` : '';

  return (
    <section className="product-collection overflow-hidden">
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        {/* INTRO */}
        <div className="product-collection-intro">
          <motion.h2
            className="product-collection-heading font-serif"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <span>
              <AnimatedText>
                <em>{t('productsCollection.title1')}</em>
                {i18n.language === 'fr' ? '' : ' '}
                {t('productsCollection.title1Accent')}
              </AnimatedText>
            </span>

            <span>
              <AnimatedText>
                <em>{t('productsCollection.title2')}</em> {t('productsCollection.title2Accent')}
              </AnimatedText>
            </span>
          </motion.h2>

          <motion.p
            className="product-collection-description"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <AnimatedText>
              {t('productsCollection.description1')}
              <br />
              {t('productsCollection.description2')}
              <br />
              {t('productsCollection.description3')}
            </AnimatedText>
          </motion.p>
        </div>

        {/* PRODUCTS */}
        <div className="product-collection-grid">
          {products.map((product, index) => (
            <MotionLink
              key={product.id}
              to={`${langPrefix}/products/${product.slug}`}
              className="product-collection-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.9,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}>
              <div className="product-collection-image-wrapper">
                <img src={product.image} alt={product.alt} className="product-collection-image" />
              </div>

              <div className="product-collection-title">
                <h3 className="font-serif">{product.name}</h3>

                <span className="font-serif">
                  <AnimatedText>{t(product.typeKey)}</AnimatedText>
                </span>
              </div>

              <span className="product-collection-button">
                <AnimatedText>{t('productsCollection.button')}</AnimatedText>
              </span>
            </MotionLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsCollection;
