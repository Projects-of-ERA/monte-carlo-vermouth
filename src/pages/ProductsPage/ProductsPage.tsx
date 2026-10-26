import ProductsCollection from '../../sections/ProductsPageSections/ProductsCollection/ProductsCollection';
import ProductsFinal from '../../sections/ProductsPageSections/ProductsFinal/ProductsFinal';
import ProductsHero from '../../sections/ProductsPageSections/ProductsHero/ProductsHero';

const ProductsPage = () => {
  return (
    <main>
      <ProductsHero />
      <ProductsCollection />
      <ProductsFinal />
    </main>
  );
};

export default ProductsPage;
