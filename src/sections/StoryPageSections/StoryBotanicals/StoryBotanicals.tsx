import './StoryBotanicals.css';

const StoryBotanicals = () => {
  return (
    <section className="story-botanicals">
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        {/* HEADER */}
        <div className="story-botanicals-header">
          <h2 className="story-botanicals-title font-serif">
            <span>
              <em>the</em>
            </span>

            <span>BOTANICALS</span>
          </h2>

          <p className="story-botanicals-subtitle">
            Monte Carlo Vermouth is infused with botanicals distilled in the historical and unique
            city of Grasse, the world’s perfume capital where the finest aromatics are born.
          </p>
        </div>

        {/* CONTENT */}
        <div className="story-botanicals-grid">
          {/* LEFT — TEXT */}
          <div className="story-botanicals-text">
            {/* FIRST PART */}
            <div className="story-botanicals-text-part">
              <p>
                The inimitable Monégasque rose petals are thus enhanced with a touch of Côte d’Azur
                florals including mimosa creating a harmony of nuances.
              </p>

              <p>
                Mediterranean citrus notes of mandarin, lemon peel, orange peel and grapefruit
                together for the refreshing backbone of Monte Carlo Vermouth, imparting the
                invigorating flavor of a sunset over the French Riviera.
              </p>
            </div>

            {/* SECOND PART */}
            <div className="story-botanicals-text-part">
              <p>
                Treasured by the Ancient Egyptians who used it in incense and perfume, Orris root
                imbues a unique combination of sensations sometimes described as a delicate mix of
                violet and raspberry.
              </p>

              <p>
                Roman and white wormwood impart bitters so characteristic of vermouth. Indeed, the
                word vermouth itself is derived from the Old English wermod while the plant species,
                artemisia absinthium is named for the Ancient Greek goddess of the hunt and
                protectress of the forest.
              </p>

              <p>
                Underscoring these aromas are herbs and spices such as coriander, Sichuan pepper,
                Immortelle, and fresh ginger, that bring complexity, variety, and depth to the
                recipe. Together, they add the right amount of piquant to make each glass a new
                chapter in a never-ending story of Monte Carlo Vermouth.
              </p>
            </div>
          </div>

          {/* RIGHT — IMAGE */}
          <div className="story-botanicals-image-wrapper">
            <img
              src="/images/StoryPage/botanicals/botanicals.png"
              alt="Monte Carlo Vermouth botanicals"
              className="story-botanicals-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryBotanicals;
