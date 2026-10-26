import './NewsHero.css';

const NewsHero = () => {
  return (
    <section className="news-hero">
      {/* BACKGROUND */}
      <div className="news-hero-background">
        <img
          src="/images/NewsPage/hero/news-hero.png"
          alt="Monte Carlo Vermouth news"
          className="news-hero-image"
        />
      </div>

      {/* OVERLAY */}
      <div className="news-hero-overlay" />

      {/* CONTENT */}
      <div className="news-hero-content mx-auto max-w-8xl px-4 lg:px-8">
        <h1 className="news-hero-title font-serif">
          <span>
            <em>our</em>
          </span>

          <span>NEWS</span>
        </h1>
      </div>
    </section>
  );
};

export default NewsHero;
