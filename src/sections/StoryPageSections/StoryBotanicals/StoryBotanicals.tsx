import { useTranslation } from 'react-i18next';

import './StoryBotanicals.css';

const StoryBotanicals = () => {
  const { t } = useTranslation();

  return (
    <section className="story-botanicals">
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        {/* HEADER */}
        <div className="story-botanicals-header">
          <h2 className="story-botanicals-title font-serif">
            <span>
              <em>{t('storyBotanicals.title1')}</em>
            </span>

            <span>{t('storyBotanicals.title2')}</span>
          </h2>

          <p className="story-botanicals-subtitle">{t('storyBotanicals.subtitle')}</p>
        </div>

        {/* CONTENT */}
        <div className="story-botanicals-grid">
          {/* LEFT — TEXT */}
          <div className="story-botanicals-text">
            {/* FIRST PART */}
            <div className="story-botanicals-text-part">
              <p>{t('storyBotanicals.description1')}</p>

              <p>{t('storyBotanicals.description2')}</p>
            </div>

            {/* SECOND PART */}
            <div className="story-botanicals-text-part">
              <p>{t('storyBotanicals.description3')}</p>

              <p>{t('storyBotanicals.description4')}</p>

              <p>{t('storyBotanicals.description5')}</p>
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
