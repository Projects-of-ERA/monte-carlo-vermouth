import { Link, useLocation, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

import AnimatedText from '../../components/AnimatedText/AnimatedText';

import { products } from '../../data/products';
import ProductsDetail from './ProductsDetail/ProductsDetail';

import './ProductsDetail/ProductsDetail.css';

const ProductsDetailPage = () => {
  const { t } = useTranslation();
  const { productSlug } = useParams();
  const { pathname } = useLocation();

  const language = pathname.split('/')[1];
  const langPrefix = language === 'fr' || language === 'es' ? `/${language}` : '';

  const product = products.find((item) => item.slug === productSlug);

  if (!product) {
    return (
      <main className="products-not-found">
        <motion.div
          className="products-not-found-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}>
          <h1 className="products-not-found-title font-serif">
            <AnimatedText>{t('productsNotFound.title')}</AnimatedText>
          </h1>

          <Link to={`${langPrefix}/products`} className="products-not-found-button">
            <AnimatedText>{t('productsNotFound.button')}</AnimatedText>
          </Link>
        </motion.div>
      </main>
    );
  }

  return (
    <main>
      <ProductsDetail key={product.id} product={product} />
    </main>
  );
};

export default ProductsDetailPage;
