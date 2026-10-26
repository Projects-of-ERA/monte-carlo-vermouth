import { useTranslation } from 'react-i18next';

import './StoryRoses.css';

const StoryRoses = () => {
  const { t } = useTranslation();

  return (
    <section className="story-roses">
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        {/* HEADER */}
        <div className="story-roses-header">
          <h2 className="story-roses-title font-serif">
            <span>{t('storyRoses.title1')}</span>

            <span>
              {t('storyRoses.title2')} <em>{t('storyRoses.title2Accent')}</em>
            </span>

            <span>{t('storyRoses.title3')}</span>
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
            <p>{t('storyRoses.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryRoses;
