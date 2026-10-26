import { useTranslation } from 'react-i18next';

import './StoryHero.css';

const StoryHero = () => {
  const { t } = useTranslation();

  return (
    <section className="story-hero">
      {/* BACKGROUND */}
      <div className="story-hero-background">
        <picture>
          <source media="(max-width: 640px)" srcSet="/images/StoryPage/hero/story-hero_mob.png" />

          <img
            src="/images/StoryPage/hero/story-hero.png"
            alt="story-hero"
            className="story-hero-image"
          />
        </picture>
      </div>

      {/* OVERLAY */}
      <div className="story-hero-overlay" />

      {/* CONTENT */}
      <div className="story-hero-content mx-auto max-w-8xl px-4 lg:px-8">
        <h1 className="story-hero-title font-serif">
          <span>
            <em>{t('storyHero.title1')}</em> {t('storyHero.title1Accent')}
          </span>

          <span>
            {t('storyHero.title2')} <em>{t('storyHero.title2Accent')}</em>
          </span>

          <span>
            <em>{t('storyHero.title3')}</em> {t('storyHero.title3Accent')}
          </span>
        </h1>
      </div>
    </section>
  );
};

export default StoryHero;
