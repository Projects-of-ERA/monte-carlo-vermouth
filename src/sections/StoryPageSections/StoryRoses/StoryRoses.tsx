import './StoryRoses.css';

const StoryRoses = () => {
  return (
    <section className="story-roses">
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        {/* HEADER */}
        <div className="story-roses-header">
          <h2 className="story-roses-title font-serif">
            <span>HAND-SELECTED</span>

            <span>
              ROSE PETALS <em>from the</em>
            </span>

            <span>GARDENS OF MONACO</span>
          </h2>
        </div>

        {/* CONTENT */}
        <div className="story-roses-grid">
          {/* LEFT — IMAGE */}
          <div className="story-roses-image-wrapper">
            <img
              src="/images/StoryPage/roses/roses-bottle.png"
              alt="Monte Carlo Vermouth Rosé bottle"
              className="story-roses-image"
              loading="lazy"
            />
          </div>

          {/* RIGHT — TEXT */}
          <div className="story-roses-text">
            <p>
              Infused with hand-picked rose petals from the Monégasque rose gardens, renowned for
              their exquisite beauty and home to 168 rare rose varieties, Monte Carlo Vermouth
              captures the delicate fragrance of these exceptional flowers. Their captivating aroma
              brings a subtle floral elegance to every sip, reflecting the purity and sophistication
              of Monaco.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryRoses;
