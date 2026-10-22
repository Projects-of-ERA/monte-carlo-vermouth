import './VermouthTasting.css';

const VermouthTasting = () => {
  return (
    <section className="vermouth-tasting">
      {/* HEADER */}
      <div className="vermouth-tasting-header">
        <div className="mx-auto max-w-8xl px-4 lg:px-8">
          <h2 className="vermouth-tasting-title font-serif">
            <span>TASTING</span>
            <span>
              <em>notes</em>
            </span>
          </h2>

          <p className="vermouth-tasting-subtitle">
            CITRUS, FLORAL, AND DELICATE, WITH HINTS OF ROSE
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="vermouth-tasting-content">
        {/* BACKGROUND */}
        <div className="vermouth-tasting-background">
          <img
            src="/images/VermouthPage/tasting/tasting.png"
            alt=""
            className="vermouth-tasting-image"
            loading="lazy"
          />
        </div>

        {/* OVERLAY */}
        <div className="vermouth-tasting-overlay" />

        <div className="vermouth-tasting-container mx-auto max-w-8xl px-4 lg:px-8">
          <div className="vermouth-tasting-text">
            <p className="vermouth-tasting-description">
              Fruity on the nose with a palate of fresh citrus and hints of rose underscored by
              light bitter flavours and floral spice. The light, highly aromatic and fresh palate of
              Monte Carlo Vermouth gives it great versatility to be enjoyed on its own on ice, or in
              cocktails to give renewed sophistication to a classic favorite. Create the ultimate
              dry gin or vodka martini or try Monte Carlo Vermouth with prosecco or tonic over ice.
            </p>

            <div className="vermouth-tasting-details">
              <div className="vermouth-tasting-detail">
                <h3>ON THE EYE</h3>
                <p>Monte Carlo Vermouth enchants the eye with a ruby-blush hue.</p>
              </div>

              <div className="vermouth-tasting-detail">
                <h3>ON THE NOSE</h3>
                <p>
                  Expressive and floral with jasmine, verbena, mimosa, and rose giving way to ripe
                  fruity aromas of lychee, honeydew melon, and grapefruit.
                </p>
              </div>

              <div className="vermouth-tasting-detail">
                <h3>ON THE PALATE</h3>
                <p>
                  On the palate, Monte Carlo Vermouth is invigorating and fruity with notes of
                  bergamot, grapefruit zest, mandarin, and melon underscored by a hint of delightful
                  bitterness reminiscent of grapefruit pith and bitter orange. Its full, rich, semi
                  sweet body coats the mouth. A long and lingering finish on savoury flavours and
                  herbs take over from the fruit as subtle rose evokes intrigue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VermouthTasting;
