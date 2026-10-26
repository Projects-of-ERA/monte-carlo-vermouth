import { Link, useLocation } from 'react-router-dom';

import './ProductsFinal.css';

const ProductsFinal = () => {
  const { pathname } = useLocation();

  const language = pathname.split('/')[1];

  const langPrefix = language === 'fr' || language === 'es' ? `/${language}` : '';

  return (
    <section className="products-final">
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        <div className="products-final-content">
          <p className="products-final-eyebrow">BEYOND THE GLASS</p>

          <h2 className="products-final-title font-serif">THE ART OF MIXOLOGY</h2>

          <p className="products-final-description">
            Discover the versatility of Monte Carlo Vermouth through elegant cocktails, from
            timeless classics to inspired new creations.
          </p>

          <Link to={`${langPrefix}/mixology`} className="products-final-button">
            Explore Mixology
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsFinal;
