import { useTranslation } from 'react-i18next';

import './StoryGrapes.css';

const StoryGrapes = () => {
  const { t } = useTranslation();

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
          <span>{t('storyGrapes.title1')}</span>

          <span>{t('storyGrapes.title2')}</span>

          <span>
            <em>{t('storyGrapes.title3')}</em>
          </span>

          <span>{t('storyGrapes.title4')}</span>
        </h2>

        <p className="story-grapes-text">{t('storyGrapes.description')}</p>
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
