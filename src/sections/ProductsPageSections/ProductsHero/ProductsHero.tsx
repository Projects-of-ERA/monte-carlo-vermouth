import './ProductsHero.css';

const ProductsHero = () => {
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
            <em>our</em>
          </span>

          <span>PRODUCTS</span>
        </h1>
      </div>
    </section>
  );
};

export default ProductsHero;
