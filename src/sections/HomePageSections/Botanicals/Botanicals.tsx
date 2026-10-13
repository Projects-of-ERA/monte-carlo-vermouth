import './Botanicals.css';

const Botanicals = () => {
  return (
    <section className="botanicals">
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        <div className="botanicals-grid">
          {/* LEFT */}
          <div className="botanicals-left">
            <img
              src="/images/HomePage/botanicals/botanicals.png"
              alt="botanicals-image"
              className="botanicals-image"
            />

            <div className="botanicals-left-content">
              <h2 className="botanicals-title font-serif">
                <span>
                  <em>made</em>
                </span>

                <span>
                  <em>with the</em> FINEST
                </span>

                <span>BOTANICALS</span>

                <span>
                  <em>from the</em> CÔTE
                </span>

                <span>D’AZUR</span>
              </h2>

              <a href="#" className="botanicals-button">
                Our story
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="botanicals-right">
            <div className="botanicals-right-image">
              <img src="/images/HomePage/botanicals/grapes.png" alt="Premium grapes" />

              <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div className="botanicals-right-content">
                <h3 className="botanicals-right-title">Premium Grapes</h3>

                <p className="botanicals-right-text">
                  Monte-Carlo Vermouth is created using artisanal methods of vermouth making from
                  the renowned Piedmont region, whose vineyards are listed among the UNESCO World
                  Heritage. Expert Italian winemakers create Moscato d’Asti DOCG to form an
                  unparalleled aromatic base using the whole grape, grown expressly for this
                  purpose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Botanicals;
