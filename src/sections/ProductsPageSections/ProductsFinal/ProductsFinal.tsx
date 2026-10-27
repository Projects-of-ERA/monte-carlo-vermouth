import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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
          <p className="products-final-eyebrow">{t('productsFinal.eyebrow')}</p>

          <h2 className="products-final-title font-serif"> {t('productsFinal.title')}</h2>

          <p className="products-final-description">{t('productsFinal.description')}</p>

          <Link to={`${langPrefix}/mixology`} className="products-final-button">
            {t('productsFinal.button')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsFinal;
