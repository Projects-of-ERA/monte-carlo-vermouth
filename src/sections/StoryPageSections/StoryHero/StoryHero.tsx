import './StoryHero.css';

const StoryHero = () => {
  return (
    <section className="story-hero">
      {/* BACKGROUND */}
      <div className="story-hero-background">
        <picture>
          <source media="(max-width: 640px)" srcSet="/images/StoryPage/hero/story-hero_mob.png" />

          <img src="/images/StoryPage/hero/story-hero.png" alt="" className="story-hero-image" />
        </picture>
      </div>

      {/* OVERLAY */}
      <div className="story-hero-overlay" />

      {/* CONTENT */}
      <div className="story-hero-content mx-auto max-w-8xl px-4 lg:px-8">
        <h1 className="story-hero-title font-serif">
          <span>
            <em>the</em> FINEST
          </span>

          <span>
            BOTANICALS <em>from</em>
          </span>

          <span>
            <em>the</em> CÔTE D’AZUR
          </span>
        </h1>
      </div>
    </section>
  );
};

export default StoryHero;
