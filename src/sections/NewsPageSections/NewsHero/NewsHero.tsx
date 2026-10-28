import { useTranslation } from 'react-i18next';

import './NewsHero.css';

const NewsHero = () => {
  const { t } = useTranslation();

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
            <em>{t('newsHero.title1')}</em>
          </span>

          <span>{t('newsHero.title2')}</span>
        </h1>
      </div>
    </section>
  );
};

export default NewsHero;
