import './Mixology.css';
import MixologyQuotes from './MixologyQuotes';

const Mixology = () => {
  return (
    <section className="mixology">
      {/* INTRO */}
      <div className="mixology-intro">
        <div className="mx-auto max-w-8xl px-4 lg:px-8">
          <div className="mixology-intro-grid">
            <h2 className="mixology-title font-serif">
              <span className="mixology-title-elegant">elegant</span>

              <span>Mixology</span>
            </h2>

            <p className="mixology-description">
              Enjoy Monte Carlo Vermouth simply on ice, with tonic, or in a selection of cocktails
              such as classics revisited and delightful innovations for the discerning palate.
              <br />
              Created by our expert mixologist exclusively for Monte Carlo Vermouth, discover the
              next cocktails of the season.
            </p>
          </div>
        </div>
      </div>

      {/* FEATURE */}
      <div className="mixology-feature">
        <img
          src="/images/HomePage/mixology/mixology.png"
          alt="Monte Carlo Vermouth mixology"
          className="mixology-feature-image"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 z-[1] bg-black/40" />

        <div className="mixology-feature-content">
          <h3 className="mixology-feature-title font-serif">
            <span>
              Find Us <em>inside</em>
            </span>

            <span>
              <em>the</em> World’s
            </span>

            <span>Finest Bars</span>
          </h3>
        </div>
      </div>

      {/* QUOTES SWIPER */}
      <MixologyQuotes />
    </section>
  );
};

export default Mixology;
