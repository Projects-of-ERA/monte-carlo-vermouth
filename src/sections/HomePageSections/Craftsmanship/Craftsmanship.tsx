import './Craftsmanship.css';
import CraftsmanshipSlider from './CraftsmanshipSlider';

const Craftsmanship = () => {
  return (
    <section className="craftsmanship">
      {/* INTRO */}
      <div className="craftsmanship-intro">
        <div className="mx-auto max-w-8xl px-4 lg:px-8">
          <div className="craftsmanship-intro-content">
            <p className="craftsmanship-eyebrow">The Perfect Addition to Elegant Cocktail</p>

            <h2 className="craftsmanship-title font-serif">
              <span>Crafted</span>

              <span>
                <em>by</em> Master
              </span>

              <span>Distillers</span>
            </h2>

            <p className="craftsmanship-description">
              The light, highly aromatic and fresh palate of Monte Carlo Vermouth gives it great
              versatility to be enjoyed on its own on ice, or in cocktails to give renewed
              sophistication to a classic favourite.
            </p>

            <a href="#" className="craftsmanship-button">
              Tasting Notes
            </a>
          </div>
        </div>
      </div>

      {/* SWIPER */}
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        <CraftsmanshipSlider />
      </div>
    </section>
  );
};

export default Craftsmanship;
