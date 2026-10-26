import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

import './StoryFinal.css';

const StoryFinal = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const language = pathname.split('/')[1];

  const langPrefix = language === 'fr' || language === 'es' ? `/${language}` : '';

  return (
    <section className="story-final">
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        <div className="story-final-content">
          {/* SUBTITLE */}
          <p className="story-final-subtitle">{t('storyFinal.subtitle')}</p>

          {/* TITLE */}
          <h2 className="story-final-title font-serif">{t('storyFinal.title')}</h2>

          {/* DESCRIPTION */}
          <p className="story-final-description">{t('storyFinal.description')}</p>

          {/* BUTTON */}
          <Link to={`${langPrefix}/vermouth`} className="story-final-button">
            {t('storyFinal.button')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StoryFinal;
