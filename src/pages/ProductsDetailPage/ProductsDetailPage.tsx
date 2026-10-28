import { Link, useLocation, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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
        <div className="products-not-found-content">
          <h1 className="products-not-found-title font-serif">{t('productsNotFound.title')}</h1>

          <Link to={`${langPrefix}/products`} className="products-not-found-button">
            {t('productsNotFound.button')}
          </Link>
        </div>
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
