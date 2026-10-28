import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

import type { Product } from '../../../data/products';

import 'swiper/css';
import 'swiper/css/navigation';
import './ProductsDetail.css';

interface ProductsDetailProps {
  product: Product;
}

const ProductsDetail = ({ product }: ProductsDetailProps) => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const language = pathname.split('/')[1];
  const langPrefix = language === 'fr' || language === 'es' ? `/${language}` : '';

  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const navigate = useNavigate();

  const handleProductSwitch = () => {
    const nextProduct = isBianco ? 'rosso-red-vermouth' : 'bianco-white-vermouth';

    navigate(`${langPrefix}/products/${nextProduct}`);
  };

  const isBianco = product.id === 'bianco';

  return (
    <section className="products-detail">
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        <div className="products-detail-grid">
          {/* LEFT — IMAGE SLIDER */}
          <div className="products-detail-gallery">
            <Swiper
              modules={[Navigation]}
              navigation
              loop={product.images.length > 1}
              slidesPerView={1}
              speed={800}
              className="products-detail-swiper">
              {product.images.map((image, index) => (
                <SwiperSlide key={image}>
                  <div className="products-detail-slide">
                    <img
                      src={image}
                      alt={`${product.name} - image ${index + 1}`}
                      className="products-detail-image"
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* RIGHT — PRODUCT CONTENT */}
          <div className="products-detail-content">
            {/* TITLE */}
            <h1 className="products-detail-title">
              {' '}
              {product.name} {t(product.typeKey)}
            </h1>

            {/* PRICE */}
            <p className="products-detail-price">€{product.price.toFixed(2)}</p>

            {/* DESCRIPTION */}
            <div className="products-detail-description">
              {product.descriptionKeys.map((key) => (
                <p key={key}>{t(key)}</p>
              ))}
            </div>

            {/* VARIETAL SWITCHER */}
            <div className="products-detail-varietals">
              <Link
                to={`${langPrefix}/products/bianco-white-vermouth`}
                className={isBianco ? 'is-active' : ''}>
                Bianco
              </Link>

              <button
                type="button"
                className="products-detail-switch"
                onClick={handleProductSwitch}
                aria-label={`${t('productsDetail.switchTo')} ${isBianco ? 'Rosso' : 'Bianco'}`}>
                <span
                  className={`products-detail-switch-indicator ${
                    isBianco ? 'is-bianco' : 'is-rosso'
                  }`}
                />
              </button>

              <Link
                to={`${langPrefix}/products/rosso-red-vermouth`}
                className={!isBianco ? 'is-active' : ''}>
                Rosso
              </Link>
            </div>

            {/* QUANTITY AND CART */}
            <div className="products-detail-purchase">
              <p className="products-detail-quantity-label">{t('productsDetail.quantityLabel')}</p>

              <div className="products-detail-purchase-controls">
                <div className="products-detail-quantity">
                  <button
                    type="button"
                    onClick={decreaseQuantity}
                    disabled={quantity === 1}
                    aria-label={t('productsDetail.decreaseQuantity')}>
                    −
                  </button>

                  <span aria-live="polite">{quantity}</span>

                  <button
                    type="button"
                    onClick={increaseQuantity}
                    aria-label={t('productsDetail.increaseQuantity')}>
                    +
                  </button>
                </div>

                <button type="button" className="products-detail-cart-button">
                  {t('productsDetail.addToCart')}
                </button>
              </div>
            </div>

            {/* SCENT & FLAVOR */}
            <div className="products-detail-scent">
              <h2 className="font-serif">{t('productsDetail.scentTitle')}</h2>

              <p>{t(product.scentDescriptionKey)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsDetail;
