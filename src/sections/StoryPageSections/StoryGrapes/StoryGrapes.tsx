import './StoryGrapes.css';

const StoryGrapes = () => {
  return (
    <section className="story-grapes mx-auto max-w-8xl px-4 lg:px-8">
      {/* LEFT IMAGE */}
      <div className="story-grapes-image-wrapper">
        <img
          src="/images/StoryPage/grapes/piedmont.png"
          alt="Piedmont vineyards"
          className="story-grapes-image"
          loading="lazy"
        />
      </div>

      {/* CENTER CONTENT */}
      <div className="story-grapes-content">
        <h2 className="story-grapes-title font-serif">
          <span>MOSCATO D’ASTI</span>
          <span>DOCG GRAPES</span>
          <span>
            <em>from the</em>
          </span>
          <span> PIEDMONT REGION</span>
        </h2>

        <p className="story-grapes-text">
          The Monte Carlo Vermouth is created using artisanal methods of vermouth making from the
          renowned Piedmont region, whose vineyards are listed among the UNESCO World Heritage.
          Expert Italian winemakers use Moscato d’Asti DOCG grapes to form an unparalleled aromatic
          base using the whole grape, grown expressly for&nbsp;this&nbsp;purpose.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="story-grapes-image-wrapper">
        <img
          src="/images/StoryPage/grapes/grapes.png"
          alt="Moscato d'Asti grapes"
          className="story-grapes-image"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default StoryGrapes;
