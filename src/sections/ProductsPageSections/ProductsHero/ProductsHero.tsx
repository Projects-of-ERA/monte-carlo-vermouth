import { useTranslation } from 'react-i18next';

import './ProductsHero.css';

const ProductsHero = () => {
  const { t } = useTranslation();

  return (
    <section className="product-hero">
      {/* BACKGROUND */}
      <div className="product-hero-background">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="/images/ProductPage/hero/product-hero_mob.png"
          />

          <img
            src="/images/ProductPage/hero/product-hero.png"
            alt="Monte Carlo Vermouth products"
            className="product-hero-image"
          />
        </picture>
      </div>

      {/* OVERLAY */}
      <div className="product-hero-overlay" />

      {/* CONTENT */}
      <div className="product-hero-content mx-auto max-w-8xl px-4 lg:px-8">
        <h1 className="product-hero-title font-serif">
          <span>
            <em>{t('productsHero.title1')}</em>
          </span>

          <span>{t('productsHero.title2')}</span>
        </h1>
      </div>
    </section>
  );
};

export default ProductsHero;
