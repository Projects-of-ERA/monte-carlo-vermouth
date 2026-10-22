import './VermouthHero.css';

const VermouthHero = () => {
  return (
    <section className="vermouth-hero">
      {/* BACKGROUND */}
      <div className="vermouth-hero-background">
        <img
          src="/images/VermouthPage/hero/vermouth-hero.png"
          alt="vermouth-hero"
          className="vermouth-hero-image"
        />
      </div>

      {/* OVERLAY */}
      <div className="vermouth-hero-overlay" />

      {/* CONTENT */}
      <div className="vermouth-hero-container mx-auto max-w-8xl px-4 lg:px-8">
        <div className="vermouth-hero-content">
          <h1 className="vermouth-hero-title font-serif">
            <span>EXPERTLY</span>
            <span>
              CRAFTED <em>in</em>
            </span>
            <span>MONACO</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default VermouthHero;
