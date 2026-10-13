import { useRef, useState } from 'react';

import { news } from '../../../data/news';
import './News.css';

const News = () => {
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
            <a
              key={item.id}
              href="#"
              className="news-item"
              onClick={(event) => event.preventDefault()}>
              <div className="news-date">
                {item.date.day} {item.date.month} {item.date.year}
              </div>

              <div className="news-content">
                <div className="news-copy">
                  <h2 className="news-title font-serif">{item.title}</h2>

                  <p className="news-text">{item.text}</p>
                </div>

                <div className="news-image-wrapper">
                  <img src={item.image} alt={item.title} className="news-image" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {news.length > 3 && (
          <button type="button" className="news-toggle-button" onClick={handleToggleNews}>
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        )}
      </div>
    </section>
  );
};

export default News;
