import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

import AnimatedText from '../../../components/AnimatedText/AnimatedText';
import { useCart } from '../../../context/CartContext';

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
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const language = pathname.split('/')[1];
  const langPrefix = language === 'fr' || language === 'es' ? `/${language}` : '';

  const [quantity, setQuantity] = useState(1);

  const isBianco = product.id === 'bianco';

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleProductSwitch = () => {
    const nextProduct = isBianco ? 'rosso-red-vermouth' : 'bianco-white-vermouth';

    navigate(`${langPrefix}/products/${nextProduct}`);
  };

  return (
    <section className="products-detail overflow-hidden">
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        <div className="products-detail-grid">
          {/* LEFT — IMAGE SLIDER */}
          <motion.div
            className="products-detail-gallery"
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.8,
              ease: [0.22, 1, 0.36, 1],
            }}>
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
          </motion.div>

          {/* RIGHT — PRODUCT CONTENT */}
          <div className="products-detail-content">
            {/* TITLE */}
            <motion.h1
              className="products-detail-title"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}>
              {product.name} <AnimatedText>{t(product.typeKey)}</AnimatedText>
            </motion.h1>

            {/* PRICE */}
            <motion.p
              className="products-detail-price"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}>
              €{product.price.toFixed(2)}
            </motion.p>

            {/* DESCRIPTION */}
            <div className="products-detail-description">
              {product.descriptionKeys.map((key, index) => (
                <motion.p
                  key={key}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}>
                  <AnimatedText>{t(key)}</AnimatedText>
                </motion.p>
              ))}
            </div>

            {/* VARIETAL SWITCHER */}
            <motion.div
              className="products-detail-varietals"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}>
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
            </motion.div>

            {/* QUANTITY AND CART */}
            <motion.div
              className="products-detail-purchase"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}>
              <p className="products-detail-quantity-label">
                <AnimatedText>{t('productsDetail.quantityLabel')}</AnimatedText>
              </p>

              <div className="products-detail-purchase-controls">
                <div className="products-detail-quantity">
                  <button
                    type="button"
                    onClick={decreaseQuantity}
                    disabled={quantity === 1}
                    aria-label={t('productsDetail.decreaseQuantity', {
                      name: product.shortName,
                    })}>
                    −
                  </button>

                  <span aria-live="polite">{quantity}</span>

                  <button
                    type="button"
                    onClick={increaseQuantity}
                    aria-label={t('productsDetail.increaseQuantity', {
                      name: product.shortName,
                    })}>
                    +
                  </button>
                </div>

                <button
                  type="button"
                  className="products-detail-cart-button"
                  onClick={() => addToCart(product, quantity)}>
                  <AnimatedText>{t('productsDetail.addToCart')}</AnimatedText>
                </button>
              </div>
            </motion.div>

            {/* SCENT & FLAVOR */}
            <motion.div
              className="products-detail-scent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.9,
                delay: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}>
              <h2 className="font-serif">
                <AnimatedText>{t('productsDetail.scentTitle')}</AnimatedText>
              </h2>

              <p>
                <AnimatedText>{t(product.scentDescriptionKey)}</AnimatedText>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsDetail;
