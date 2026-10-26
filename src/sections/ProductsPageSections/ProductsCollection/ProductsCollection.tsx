import './ProductsCollection.css';

const products = [
  {
    id: 'bianco',
    name: 'BIANCO',
    type: 'white vermouth',
    image: '/images/ProductPage/products/bianco.webp',
    alt: 'Monte Carlo Vermouth Bianco bottle',
  },
  {
    id: 'rosso',
    name: 'ROSSO',
    type: 'red vermouth',
    image: '/images/ProductPage/products/rosso.webp',
    alt: 'Monte Carlo Vermouth Rosso bottle',
  },
];

const ProductsCollection = () => {
  return (
    <section className="product-collection">
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        {/* INTRO */}
        <div className="product-collection-intro">
          <h2 className="product-collection-heading font-serif">
            <span>
              <em>the</em> ESSENCE
            </span>

            <span>
              <em>of</em> VERMOUTH
            </span>
          </h2>

          <p className="product-collection-description">
            Luxury white and red vermouths.
            <br />
            Vermouth Rosso is infused with bitter orange peel, immortelle, timur pepper, orris and
            ginger.
            <br />
            Vermouth Bianco includes bergamot, mandarin, and melon with delightful hints of bitter
            orange and grapefruit pith.
          </p>
        </div>

        {/* PRODUCTS */}
        <div className="product-collection-grid">
          {products.map((product) => (
            <article key={product.id} className="product-collection-card">
              <div className="product-collection-image-wrapper">
                <img src={product.image} alt={product.alt} className="product-collection-image" />
              </div>

              <div className="product-collection-title">
                <h3 className="font-serif">{product.name}</h3>

                <span className="font-serif">{product.type}</span>
              </div>

              <a
                href="#"
                className="product-collection-button"
                onClick={(event) => event.preventDefault()}>
                View Product
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsCollection;
