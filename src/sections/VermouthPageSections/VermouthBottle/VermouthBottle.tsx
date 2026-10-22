import './VermouthBottle.css';

const VermouthBottle = () => {
  return (
    <section className="vermouth-bottle">
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        {/* HEADER */}
        <div className="vermouth-bottle-header">
          <h2 className="vermouth-bottle-title font-serif">
            <span>
              <em>a</em> MAJESTIC
            </span>

            <span>
              <em>bottle</em>
            </span>
          </h2>
        </div>

        {/* CONTENT */}
        <div className="vermouth-bottle-grid">
          {/* LEFT — TEXT AND DETAILS */}
          <div className="vermouth-bottle-content">
            <div className="vermouth-bottle-text">
              <p className="vermouth-bottle-intro">
                The liquid is presented in a majestic crystal bottle, a work of art down to each
                detail.
              </p>

              <p>
                <strong>Closure:</strong> The noble cork is secured with a bespoke rose gold
                medallion that recalls the first verse of the Monégasque anthem.
              </p>

              <p>
                <strong>Top label:</strong> An echo of the flowers that infuse the treasure within,
                the golden rose is a reference to the unique palate of Monte Carlo Vermouth and
                principality’s iconic gardens.
              </p>

              <p>
                <strong>Central label:</strong> The emblematic central seal with the V monogram
                resonates the spirit of Monaco.
              </p>
            </div>

            {/* DETAIL IMAGES */}
            <div className="vermouth-bottle-details">
              <div className="vermouth-bottle-detail-image">
                <img
                  src="/images/VermouthPage/bottle/closure.webp"
                  alt="Rose gold medallion on the Monte Carlo Vermouth bottle closure"
                  loading="lazy"
                />
              </div>

              <div className="vermouth-bottle-detail-image">
                <img
                  src="/images/VermouthPage/bottle/label.webp"
                  alt="Decorative label on the Monte Carlo Vermouth bottle"
                  loading="lazy"
                />
              </div>

              <div className="vermouth-bottle-detail-image vermouth-bottle-detail-wide">
                <img
                  src="/images/VermouthPage/bottle/base.webp"
                  alt="Engraved glass base of the Monte Carlo Vermouth bottle"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* RIGHT — MAIN IMAGE */}
          <div className="vermouth-bottle-image-wrapper">
            <img
              src="/images/VermouthPage/bottle/bottle.png"
              alt="Monte Carlo Vermouth Rosé crystal bottle"
              className="vermouth-bottle-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VermouthBottle;
