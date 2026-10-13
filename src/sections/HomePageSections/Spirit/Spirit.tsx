import './Spirit.css';

const Spirit = () => {
  return (
    <section className="spirit">
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        <div className="spirit-grid">
          <div className="spirit-content">
            <div className="spirit-content-inner">
              <h2 className="spirit-title font-serif">
                <span>
                  <em>the</em> SPIRIT
                </span>

                <span>
                  <em>of</em> MONÉGASQUE
                </span>

                <span>LUXURY</span>
              </h2>

              <p className="spirit-text">
                Our exquisite rosso vermouth and bianco vermouth are born from the rarest, hand
                selected rose petals from the Monégasque rose gardens, a prized sanctuary of
                elegance and refinement.
                <br />
                Its distinctive palate enchants with the delightful interplay of Moscato d’Asti DOCG
                grapes from Italy’s renowned Piedmont region and the highest quality botanicals from
                the Côte d’Azur’s aromatic heartland, Grasse. This unique blend of flavours, aromas,
                precious ingredients and ancestral craft fully expresses the best of French, Italian
                and Monégasque savoir-faire.
              </p>

              <a href="#" className="spirit-button">
                Read More
              </a>
            </div>
          </div>

          <div className="spirit-image">
            <img src="/images/HomePage/spirit/bottle.png" alt="Monte Carlo Vermouth" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spirit;
