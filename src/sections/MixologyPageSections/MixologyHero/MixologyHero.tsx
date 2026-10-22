import './MixologyHero.css';

const MixologyHero = () => {
  return (
    <section className="mixology-hero">
      {/* BACKGROUND */}
      <div className="mixology-hero-background">
        <img
          src="/images/MixologyPage/hero/mixology-hero.png"
          alt="mixologu-hero"
          className="mixology-hero-image"
        />
      </div>

      {/* OVERLAY */}
      <div className="mixology-hero-overlay" />

      {/* CONTENT */}
      <div className="mixology-hero-content mx-auto max-w-8xl px-4 lg:px-8">
        <h1 className="mixology-hero-title font-serif">
          <span>
            <em>elegant</em>
          </span>

          <span>MIXOLOGY</span>
        </h1>
      </div>
    </section>
  );
};

export default MixologyHero;
