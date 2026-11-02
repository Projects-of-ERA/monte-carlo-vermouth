import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

import { news } from '../../../data/news';
import './News.css';

const News = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const language = pathname.split('/')[1];
  const langPrefix = language === 'fr' || language === 'es' ? `/${language}` : '';

  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const visibleNews = showAll ? news : news.slice(0, 3);

  const handleToggleNews = () => {
    if (showAll) {
      setShowAll(false);

      requestAnimationFrame(() => {
        sectionRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      });

      return;
    }

    setShowAll(true);
  };

  return (
    <section ref={sectionRef} className="news-section">
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        <div className="news-list">
          {visibleNews.map((item) => (
            <Link key={item.id} to={`${langPrefix}/news/${item.id}`} className="news-item">
              {' '}
              <div className="news-date">
                {item.date.day} {t(`news.months.${item.date.month}`)} {item.date.year}
              </div>
              <div className="news-content">
                <div className="news-copy">
                  <h2 className="news-title font-serif">{t(item.titleKey)}</h2>

                  <p className="news-text">{t(item.textKey)}</p>
                </div>

                <div className="news-image-wrapper">
                  <img src={item.image} alt={t(item.titleKey)} className="news-image" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {news.length > 3 && (
          <button type="button" className="news-toggle-button" onClick={handleToggleNews}>
            {showAll ? t('news.showLess') : t('news.showMore')}
          </button>
        )}
      </div>
    </section>
  );
};

export default News;
