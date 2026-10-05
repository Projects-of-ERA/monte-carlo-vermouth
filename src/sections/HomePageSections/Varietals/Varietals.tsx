import './Varietals.css';

const Varietals = () => {
  return (
    <section className="varietals">
      <div className="mx-auto max-w-8xl px-8">
        <h2 className="varietals-heading font-serif">Our Varietals</h2>

        <div className="varietals-grid">
          {/* BIANCO */}
          <article className="varietals-card">
            <div className="varietals-image-wrapper">
              <img
                src="/images/HomePage/varietals/bianco.png"
                alt="Monte Carlo Bianco Vermouth"
                className="varietals-image"
              />
            </div>

            <div className="varietals-title">
              <h3 className="font-serif">Bianco</h3>

              <span className="font-serif">white vermouth</span>
            </div>

            <a href="#" className="varietals-button">
              Order Now
            </a>
          </article>

          {/* ROSSO */}
          <article className="varietals-card">
            <div className="varietals-image-wrapper">
              <img
                src="/images/HomePage/varietals/rosso.png"
                alt="Monte Carlo Rosso Vermouth"
                className="varietals-image"
              />
            </div>

            <div className="varietals-title">
              <h3 className="font-serif">Rosso</h3>

              <span className="font-serif">red vermouth</span>
            </div>

            <a href="#" className="varietals-button">
              Order Now
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Varietals;
