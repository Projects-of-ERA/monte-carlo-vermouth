import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

import './ProductsCollection.css';

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
    <section className="product-collection">
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        {/* INTRO */}
        <div className="product-collection-intro">
          <h2 className="product-collection-heading font-serif">
            <span>
              <em>{t('productsCollection.title1')}</em>
              {i18n.language === 'fr' ? '' : ' '}
              {t('productsCollection.title1Accent')}
            </span>

            <span>
              <em>{t('productsCollection.title2')}</em> {t('productsCollection.title2Accent')}
            </span>
          </h2>

          <p className="product-collection-description">
            {t('productsCollection.description1')}
            <br />
            {t('productsCollection.description2')}
            <br />
            {t('productsCollection.description3')}
          </p>
        </div>

        {/* PRODUCTS */}
        <div className="product-collection-grid">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`${langPrefix}/products/${product.slug}`}
              className="product-collection-card">
              <div className="product-collection-image-wrapper">
                <img src={product.image} alt={product.alt} className="product-collection-image" />
              </div>

              <div className="product-collection-title">
                <h3 className="font-serif">{product.name}</h3>

                <span className="font-serif">{t(product.typeKey)}</span>
              </div>

              <span className="product-collection-button">{t('productsCollection.button')}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsCollection;
